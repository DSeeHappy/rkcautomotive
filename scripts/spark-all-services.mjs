import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';
import { sparkTranslate, SPARK_MODEL } from './spark-tiny.mjs';
import { SERVICE_CONFIGS } from './service-body-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_DIR = path.join(ROOT, 'lib/i18n/serviceBodies/_en');
const OUT_DIR = path.join(ROOT, 'lib/i18n/serviceBodies');

function camelExport(slug) {
  return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) + 'BodyCopy';
}
function constName(slug) {
  return slug.replace(/-/g, '_').toUpperCase() + '_BODY';
}

function deepMerge(target, source) {
  for (const [k, v] of Object.entries(source)) {
    if (Array.isArray(v)) {
      if (!Array.isArray(target[k])) target[k] = [];
      const out = target[k];
      v.forEach((item, i) => {
        if (item === undefined || item === null) return;
        if (item && typeof item === 'object' && !Array.isArray(item) && out[i] && typeof out[i] === 'object' && !Array.isArray(out[i])) {
          deepMerge(out[i], item);
        } else if (item && typeof item === 'object' && !Array.isArray(item)) {
          out[i] = {};
          deepMerge(out[i], item);
        } else {
          out[i] = item;
        }
      });
    } else if (v && typeof v === 'object' && target[k] && typeof target[k] === 'object' && !Array.isArray(target[k])) {
      deepMerge(target[k], v);
    } else {
      target[k] = v;
    }
  }
  return target;
}

function flattenLeaves(value, pathArr = []) {
  if (typeof value === 'string') return [[pathArr, value]];
  if (typeof value === 'number' || typeof value === 'boolean') return [[pathArr, String(value)]];
  if (Array.isArray(value)) return value.flatMap((item, i) => flattenLeaves(item, pathArr.concat(i)));
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) => flattenLeaves(v, pathArr.concat(k)));
  }
  return [];
}

function unflattenLeaf(pathArr, value) {
  const root = {};
  let cur = root;
  for (let i = 0; i < pathArr.length - 1; i++) {
    const p = pathArr[i];
    const n = pathArr[i + 1];
    if (typeof n === 'number') {
      if (cur[p] == null) cur[p] = [];
    } else {
      if (cur[p] == null) cur[p] = {};
    }
    cur = cur[p];
  }
  cur[pathArr[pathArr.length - 1]] = value;
  return root;
}

function batchKeys(en) {
  const leaves = flattenLeaves(en);
  const batches = [];
  let cur = {};
  let size = 2;
  let count = 0;
  for (const [pathArr, value] of leaves) {
    const piece = unflattenLeaf(pathArr, value);
    const pieceSize = JSON.stringify(piece).length;
    if ((size + pieceSize > 600 || count >= 3) && count > 0) {
      batches.push(cur);
      cur = {};
      size = 2;
      count = 0;
    }
    deepMerge(cur, piece);
    size += pieceSize;
    count += 1;
  }
  if (count) batches.push(cur);
  return batches;
}

function translateEn(slug, en) {
  const batches = batchKeys(en);
  const ckPath = path.join(ROOT, `.tmp-spark-ck-${slug}.json`);
  let es = {};
  let start = 0;
  let sparkKey;
  if (fs.existsSync(ckPath)) {
    const ck = JSON.parse(fs.readFileSync(ckPath, 'utf8'));
    es = ck.es || {};
    start = ck.next || 0;
    sparkKey = ck.sparkKey;
    console.log(`[spark-all] resume ${slug} from batch ${start + 1}`);
  }
  console.log(`[spark-all] ${slug} batches=${batches.length} start=${start + 1}`);
  for (let i = start; i < batches.length; i++) {
    const r = sparkTranslate(batches[i], `${slug}-b${i + 1}`);
    deepMerge(es, r.parsed);
    sparkKey = r.sparkKey;
    fs.writeFileSync(ckPath, JSON.stringify({ next: i + 1, es, sparkKey }));
    spawnSync('powershell', ['-Command', 'Start-Sleep -Milliseconds 900'], { stdio: 'ignore' });
  }
  try { fs.unlinkSync(ckPath); } catch {}
  return { es, sparkKey };
}

function writeModule(slug, en, es) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const exportName = camelExport(slug);
  const cName = constName(slug);
  const code = `import type { Lang } from '@/lib/language';

/** Service page body copy — ES via Bifrost Spark ${SPARK_MODEL} (smart-spark). */
export const ${cName} = {
  en: ${JSON.stringify(en, null, 2)},
  es: ${JSON.stringify(es, null, 2)},
} as const;

export function ${exportName}(lang: Lang) {
  return ${cName}[lang] ?? ${cName}.en;
}
`;
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.ts`), code, 'utf8');
}

function writeIndex(slugs) {
  const lines = [];
  for (const s of slugs) {
    const name = camelExport(s);
    lines.push(`import { ${name} } from './${s}';`);
    if (s === 'engine-diagnostics') {
      // also support engineDiagnosticsBody alias if present in that module
    }
  }
  const entries = slugs.map((s) => `  '${s}': ${camelExport(s)},`).join('\n');
  const code = `${lines.join('\n')}

export const SERVICE_BODY_REGISTRY = {
${entries}
} as const;

export type ServiceBodySlug = keyof typeof SERVICE_BODY_REGISTRY;

export function getServiceBodyCopy(slug: ServiceBodySlug, lang: import('@/lib/language').Lang) {
  return SERVICE_BODY_REGISTRY[slug](lang);
}
`;
  fs.writeFileSync(path.join(OUT_DIR, 'index.ts'), code, 'utf8');
}

const args = process.argv.slice(2);
const onlySlug = args.find((a) => a.startsWith('--slug='))?.split('=')[1];
const skipExisting = args.includes('--skip-existing');

async function main() {
  const ping = sparkTranslate({ ping: 'Spark OK' }, 'all-ping');
  if (ping.sparkKey !== 'smart-spark') {
    console.error('ABORT: expected smart-spark, got', ping.sparkKey);
    process.exit(1);
  }
  console.log(`[spark-all] model=${SPARK_MODEL} sparkKey=${ping.sparkKey}`);

  const slugs = SERVICE_CONFIGS.map((c) => c.slug).filter((s) => !onlySlug || s === onlySlug);
  const failures = [];

  for (const slug of slugs) {
    const enPath = path.join(EN_DIR, `${slug}.json`);
    if (!fs.existsSync(enPath)) {
      failures.push({ slug, error: 'missing EN json' });
      continue;
    }
    const outPath = path.join(OUT_DIR, `${slug}.ts`);
    if (skipExisting && fs.existsSync(outPath)) {
      console.log(`skip existing ${slug}`);
      continue;
    }
    const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    try {
      const { es, sparkKey } = translateEn(slug, en);
      writeModule(slug, en, es);
      console.log(`OK ${slug} sparkKey=${sparkKey}`);
    } catch (err) {
      console.error(`FAIL ${slug}`, err);
      failures.push({ slug, error: String(err.message || err) });
    }
  }

  const allWritten = SERVICE_CONFIGS.map((c) => c.slug).filter((s) => fs.existsSync(path.join(OUT_DIR, `${s}.ts`)));
  writeIndex(allWritten);
  console.log('written', allWritten.join(', '));
  if (failures.length) {
    console.log('failures', JSON.stringify(failures, null, 2));
    process.exitCode = 1;
  }
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);
if (isMain) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

export { batchKeys, translateEn, writeModule, writeIndex, deepMerge };
