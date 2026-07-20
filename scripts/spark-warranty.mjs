/**
 * Translate warranty page body via Bifrost ds Nemotron (vllm/research → research-spark).
 * Failover: vllm/smart → smart-spark.
 * Usage: node scripts/spark-warranty.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sparkTranslate, SPARK_MODELS } from './spark-tiny.bak.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_PATH = path.join(ROOT, 'lib/i18n/_en/warranty.json');
const OUT_PATH = path.join(ROOT, 'lib/i18n/warrantyCopy.ts');
const PROGRESS_PATH = path.join(ROOT, '.tmp-warranty-es-progress.json');

function shouldSkip(pathParts, value) {
  const key = pathParts[pathParts.length - 1];
  if (key === 'href') return true;
  if (key === 'step' && /^\d+$/.test(value)) return true;
  if (/^https?:\/\//.test(value)) return true;
  if (/^\/[a-z0-9/-]+$/.test(value)) return true;
  return false;
}

function flatten(value, pathParts = [], out = []) {
  if (typeof value === 'string') {
    if (!shouldSkip(pathParts, value)) out.push({ path: [...pathParts], value });
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((v, i) => flatten(v, pathParts.concat(i), out));
    return out;
  }
  if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) flatten(v, pathParts.concat(k), out);
  }
  return out;
}

function setPath(root, pathParts, value) {
  let cur = root;
  for (let i = 0; i < pathParts.length - 1; i++) {
    const p = pathParts[i];
    const n = pathParts[i + 1];
    if (cur[p] == null) cur[p] = typeof n === 'number' ? [] : {};
    cur = cur[p];
  }
  cur[pathParts[pathParts.length - 1]] = value;
}

function makeBatches(leaves) {
  const batches = [];
  let cur = [];
  let size = 0;
  for (const leaf of leaves) {
    const len = leaf.value.length;
    if (len > 220 || size + len > 320 || cur.length >= 2) {
      if (cur.length) batches.push(cur);
      cur = [];
      size = 0;
    }
    if (len > 220) {
      batches.push([leaf]);
      continue;
    }
    cur.push(leaf);
    size += len;
  }
  if (cur.length) batches.push(cur);
  return batches;
}

function copySkipped(en, es) {
  function walk(src, dst, pathParts = []) {
    if (typeof src === 'string') {
      if (shouldSkip(pathParts, src)) setPath(es, pathParts, src);
      return;
    }
    if (Array.isArray(src)) src.forEach((v, i) => walk(v, dst, pathParts.concat(i)));
    else if (src && typeof src === 'object') {
      for (const [k, v] of Object.entries(src)) walk(v, dst, pathParts.concat(k));
    }
  }
  walk(en, es);
}

function batchToObj(batch) {
  const o = {};
  for (const leaf of batch) {
    let cur = o;
    for (let i = 0; i < leaf.path.length - 1; i++) {
      const p = leaf.path[i];
      const n = leaf.path[i + 1];
      if (cur[p] == null) cur[p] = typeof n === 'number' ? [] : {};
      cur = cur[p];
    }
    cur[leaf.path[leaf.path.length - 1]] = leaf.value;
  }
  return o;
}
function writeModule(en, es, modelsUsed) {
  const code = `import type { Lang } from '@/lib/language';
import type { FAQItem } from '@/lib/constants';
import { BUSINESS, LABOR_RATE, WARRANTY_CLAIM_PROCESS, WARRANTY_PAGE_FAQ } from '@/lib/constants';

/** Warranty page body — ES via Bifrost ds Nemotron (${modelsUsed.join(' / ')}). SEO meta stays English. */
export const WARRANTY_COPY = {
  en: ${JSON.stringify(en, null, 2)},
  es: ${JSON.stringify(es, null, 2)},
} as const;

export function warrantyCopy(lang: Lang) {
  if (lang === 'en') {
    return {
      ...WARRANTY_COPY.en,
      process: {
        ...WARRANTY_COPY.en.process,
        steps: WARRANTY_CLAIM_PROCESS.map((s) => ({
          step: s.step,
          title: s.title,
          description: s.description,
        })),
      },
      faq: {
        ...WARRANTY_COPY.en.faq,
        items: WARRANTY_PAGE_FAQ as FAQItem[],
      },
    };
  }
  return {
    ...WARRANTY_COPY.es,
    process: {
      ...WARRANTY_COPY.es.process,
      steps: WARRANTY_COPY.es.process.steps,
    },
    faq: {
      ...WARRANTY_COPY.es.faq,
      items: WARRANTY_COPY.es.faq.items as FAQItem[],
    },
  };
}

export function warrantyProviderIntro(lang: Lang, totalProviders: number, verifiedCount: number) {
  const c = warrantyCopy(lang).providerIndex;
  if (lang === 'en') {
    return \`\${totalProviders} \${c.introBefore} \${verifiedCount} \${c.introAfter}\`;
  }
  return \`\${totalProviders} \${c.introBefore} \${verifiedCount} \${c.introAfter}\`;
}

export function warrantyCtaBody(lang: Lang) {
  const c = warrantyCopy(lang).cta;
  return \`\${c.bodyBefore} \${BUSINESS.address.full}. \${c.bodyAfter} \${LABOR_RATE}.\`;
}
`;
  fs.writeFileSync(OUT_PATH, code, 'utf8');
}

function main() {
  const en = JSON.parse(fs.readFileSync(EN_PATH, 'utf8'));
  const leaves = flatten(en);
  const batches = makeBatches(leaves);
  let done = fs.existsSync(PROGRESS_PATH) ? JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8')) : {};
  const es = {};
  const modelsUsed = new Set(SPARK_MODELS);

  for (const leaf of leaves) {
    const key = leaf.path.join('.');
    if (done[key]) setPath(es, leaf.path, done[key]);
  }
  copySkipped(en, es);

  console.log(`[warranty] strings=${leaves.length} batches=${batches.length} done=${Object.keys(done).length}`);

  for (let bi = 0; bi < batches.length; bi++) {
    const batch = batches[bi];
    const pending = batch.filter((leaf) => !done[leaf.path.join('.')]);
    if (!pending.length) continue;
    const obj = batchToObj(pending);
    const label = `batch-${bi + 1}`;
    const { parsed, model } = sparkTranslate(obj, label, { max_tokens: 2500, retries: 12 });
    for (const leaf of pending) {
      let cur = parsed;
      for (const p of leaf.path) {
        if (cur == null) break;
        cur = cur[p];
      }
      if (typeof cur !== 'string') {
        throw new Error(`Missing translation for ${leaf.path.join('.')}`);
      }
      done[leaf.path.join('.')] = cur;
      setPath(es, leaf.path, cur);
    }
    if (model) modelsUsed.add(model);
    fs.writeFileSync(PROGRESS_PATH, JSON.stringify(done, null, 2), 'utf8');
    console.log(`[warranty] batch ${bi + 1}/${batches.length} OK`);
  }

  copySkipped(en, es);
  writeModule(en, es, [...modelsUsed]);
  console.log(`[warranty] wrote ${OUT_PATH}`);
}

main();
