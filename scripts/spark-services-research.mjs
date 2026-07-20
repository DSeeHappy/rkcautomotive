/**
 * Translate ALL service EN bodies via Bifrost ds = vllm/research (research-spark / Nemotron).
 * Tiny flat batches (2 strings) to avoid Tailscale resets. Checkpoint per service.
 * ds2 Qwen chat: NOT on this gateway — skip.
 *
 * Usage: node scripts/spark-services-research.mjs [--slug=exhaust-system] [--skip-existing]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';
import {
  sparkTranslate,
  DS_RESEARCH,
  DS_SMART,
  flattenStrings,
  unflattenStrings,
  chunkEntries,
} from './spark-ds-parallel.mjs';
import { SERVICE_CONFIGS } from './service-body-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_DIR = path.join(ROOT, 'lib/i18n/serviceBodies/_en');
const OUT_DIR = path.join(ROOT, 'lib/i18n/serviceBodies');
const PROGRESS_DIR = path.join(ROOT, '.tmp-svc-progress');

function camelExport(slug) {
  return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) + 'BodyCopy';
}
function constName(slug) {
  return slug.replace(/-/g, '_').toUpperCase() + '_BODY';
}

function sleep(ms) {
  spawnSync('powershell', ['-Command', `Start-Sleep -Milliseconds ${ms}`], { stdio: 'ignore' });
}

function translateEn(slug, en) {
  const progressPath = path.join(PROGRESS_DIR, `${slug}.json`);
  fs.mkdirSync(PROGRESS_DIR, { recursive: true });
  let esFlat = {};
  let done = new Set();
  if (fs.existsSync(progressPath)) {
    const raw = JSON.parse(fs.readFileSync(progressPath, 'utf8'));
    esFlat = raw.esFlat || {};
    done = new Set(raw.done || []);
    console.log(`[research] resume ${slug} done=${done.size}`);
  }

  const flat = flattenStrings(en);
  // Prefer flat keys without nested array issues — translate as {k: v} maps of 2
  const entries = Object.entries(flat);
  // 1 string per request — long bodies timeout research; smart is fallback in sparkTranslate
  const chunks = chunkEntries(entries, 1);
  console.log(`[research] ${slug} chunks=${chunks.length} strings=${entries.length}`);

  for (let idx = 0; idx < chunks.length; idx++) {
    const id = `c${idx}`;
    if (done.has(id)) continue;
    const obj = Object.fromEntries(chunks[idx]);
    // Prefer smart when research is timing out; research first when healthy (alternating attempts)
    const { parsed, sparkKey, model } = sparkTranslate(obj, `${slug}-${id}`, {
      models: [DS_SMART, DS_RESEARCH],
    });
    Object.assign(esFlat, parsed);
    done.add(id);
    fs.writeFileSync(
      progressPath,
      JSON.stringify({ esFlat, done: [...done], sparkKey, model }, null, 2),
    );
    sleep(300);
  }
  return { es: unflattenStrings(esFlat), sparkKey: 'research-spark' };
}

function writeModule(slug, en, es) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const exportName = camelExport(slug);
  const cName = constName(slug);
  const code = `import type { Lang } from '@/lib/language';

/** Service page body — ES via Bifrost ds Nemotron ${DS_RESEARCH} (research-spark). */
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
  const imports = slugs.map((s) => `import { ${camelExport(s)} } from './${s}';`).join('\n');
  const entries = slugs.map((s) => `  '${s}': ${camelExport(s)},`).join('\n');
  fs.writeFileSync(
    path.join(OUT_DIR, 'index.ts'),
    `${imports}

export const SERVICE_BODY_REGISTRY = {
${entries}
} as const;

export type ServiceBodySlug = keyof typeof SERVICE_BODY_REGISTRY;

export function getServiceBodyCopy(slug: ServiceBodySlug, lang: import('@/lib/language').Lang) {
  return SERVICE_BODY_REGISTRY[slug](lang);
}
`,
    'utf8',
  );
}

const args = process.argv.slice(2);
const onlySlug = args.find((a) => a.startsWith('--slug='))?.split('=')[1];
const skipExisting = args.includes('--skip-existing');

async function main() {
  const ping = sparkTranslate({ ping: 'SPARK_OK' }, 'main-ping', {
    models: [DS_SMART, DS_RESEARCH],
  });
  console.log(`[ds] ping model=${ping.model} sparkKey=${ping.sparkKey} content=${JSON.stringify(ping.parsed)}`);

  const slugs = SERVICE_CONFIGS.map((c) => c.slug).filter((s) => !onlySlug || s === onlySlug);
  const written = [];
  const failures = [];

  for (const slug of slugs) {
    const enPath = path.join(EN_DIR, `${slug}.json`);
    if (!fs.existsSync(enPath)) {
      failures.push({ slug, error: 'missing EN' });
      continue;
    }
    const outPath = path.join(OUT_DIR, `${slug}.ts`);
    if (skipExisting && fs.existsSync(outPath)) {
      console.log('keep existing', slug);
      written.push(slug);
      continue;
    }
    try {
      const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
      const { es, sparkKey } = translateEn(slug, en);
      writeModule(slug, en, es);
      console.log(`OK ${slug} via ${DS_RESEARCH} ${sparkKey}`);
      written.push(slug);
    } catch (err) {
      console.error(`FAIL ${slug}`, err.message || err);
      failures.push({ slug, error: String(err.message || err) });
    }
  }

  const all = fs
    .readdirSync(OUT_DIR)
    .filter((f) => f.endsWith('.ts') && f !== 'index.ts')
    .map((f) => f.replace(/\.ts$/, ''));
  writeIndex(all);
  console.log('DONE written=', all.join(','));
  if (failures.length) {
    console.log('failures', JSON.stringify(failures, null, 2));
    process.exitCode = 1;
  }
}

main();
