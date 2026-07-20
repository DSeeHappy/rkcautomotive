/**
 * Generate per-city GEO one-liners for areas-we-serve pages via Bifrost Spark.
 * Prefer vllm/research (Nemotron 1M); failover vllm/smart.
 *
 * Usage: node scripts/spark-area-geo.mjs
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { DS_RESEARCH, DS_SMART, BASE } from './spark-ds-parallel.mjs';

for (const line of fs.readFileSync('C:/Users/BS/molecule-work/.env.local', 'utf8').split(/\r?\n/)) {
  const m = line.match(/^([^#=]+)=(.*)$/);
  if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
}

const KEY = process.env.BIFROST_KEY_PARTNER_PROJECT || process.env.OPENAI_API_KEY;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LOG = path.join(ROOT, '.tmp-spark-area-geo.log');
const PROGRESS = path.join(ROOT, '.tmp-area-geo-progress.json');

function log(line) {
  const row = `[${new Date().toISOString()}] ${line}`;
  console.log(row);
  fs.appendFileSync(LOG, `${row}\n`, 'utf8');
}

function looksLikeReasoning(s) {
  return /we need to|let'?s craft|count characters|plain text only|return only|the user asks/i.test(s);
}

function sparkChat(model, user, max_tokens = 220) {
  const req = path.join(ROOT, `.tmp-ag-req-${Date.now()}.json`);
  const res = path.join(ROOT, `.tmp-ag-res-${Date.now()}.json`);
  fs.writeFileSync(
    req,
    JSON.stringify({
      model,
      temperature: 0.1,
      max_tokens,
      messages: [
        {
          role: 'system',
          content:
            'You write one factual sentence for RKC Automotive (ASE shop at 2120 W Evans Ave, Englewood CO 80110; $120/hr labor; phone (720) 749-3965). Output ONLY the sentence — no quotes, no JSON, no reasoning.',
        },
        { role: 'user', content: user },
      ],
    }),
  );
  const r = spawnSync(
    'curl.exe',
    [
      '-sS',
      '--http1.1',
      '-X',
      'POST',
      `${BASE}/chat/completions`,
      '-H',
      `Authorization: Bearer ${KEY}`,
      '-H',
      `x-bf-vk: ${KEY}`,
      '-H',
      'Content-Type: application/json; charset=utf-8',
      '--data-binary',
      `@${req}`,
      '--max-time',
      '90',
      '--connect-timeout',
      '20',
      '-o',
      res,
    ],
    { encoding: 'utf8', timeout: 120000 },
  );
  try {
    if (r.status !== 0) throw new Error(`curl ${r.status}: ${(r.stderr || '').slice(0, 140)}`);
    const raw = fs.readFileSync(res, 'utf8');
    const j = JSON.parse(raw);
    if (j.error) throw new Error(JSON.stringify(j.error));
    let c = (j.choices?.[0]?.message?.content || '').trim();
    if (c.startsWith('```')) c = c.replace(/^```(?:json|txt)?\s*/i, '').replace(/\s*```$/i, '');
    c = c.replace(/^["']|["']$/g, '').replace(/\s+/g, ' ').trim();
    return {
      content: c,
      model: j.extra_fields?.resolved_model_used || j.model || model,
      sparkKey: j.extra_fields?.routing_info?.key || '',
    };
  } finally {
    try {
      fs.unlinkSync(req);
    } catch {}
    try {
      fs.unlinkSync(res);
    } catch {}
  }
}

function spark(user, label) {
  let lastErr;
  for (const model of [DS_RESEARCH, DS_SMART]) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const out = sparkChat(model, user);
        if (!out.content || looksLikeReasoning(out.content)) throw new Error('bad output');
        log(`${label} OK model=${out.model} req=${model} sparkKey=${out.sparkKey}`);
        return out;
      } catch (err) {
        lastErr = err;
        log(`${label} FAIL model=${model} attempt=${attempt}: ${String(err.message || err).slice(0, 140)}`);
        spawnSync('powershell', ['-Command', 'Start-Sleep -Seconds 2'], { stdio: 'ignore' });
      }
    }
  }
  throw lastErr;
}

function esc(s) {
  return JSON.stringify(s);
}

function extractAreas() {
  const content = fs.readFileSync(path.join(ROOT, 'lib/serviceAreas.ts'), 'utf8');
  const areas = [];
  const re = /area\(\s*\n\s*'([^']+)',\s*\n\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(content))) {
    areas.push({ name: m[1], slug: m[2] });
  }
  return areas;
}

function writeAreaGeoCite(en, es, models) {
  const enEntries = Object.entries(en)
    .map(([slug, line]) => `  ${JSON.stringify(slug)}: ${esc(line)},`)
    .join('\n');
  const esEntries = Object.entries(es)
    .map(([slug, line]) => `  ${JSON.stringify(slug)}: ${esc(line)},`)
    .join('\n');

  const ts = `/**
 * Per-city GEO one-liners for areas-we-serve pages — scripts/spark-area-geo.mjs
 * Spark: ${models.join(' | ')}
 */
import { getServiceAreaBySlug } from '@/lib/serviceAreas';

/** Spark-generated EN lines keyed by area slug. */
export const AREA_GEO_EN: Record<string, string> = {
${enEntries}
};

/** Spark-generated ES lines keyed by area slug. */
export const AREA_GEO_ES: Record<string, string> = {
${esEntries}
};

/** English cite line for Bing GEO / AI grounding on city landing pages. */
export function areaGeoOneLiner(slug: string, lang: 'en' | 'es' = 'en'): string | undefined {
  const area = getServiceAreaBySlug(slug);
  if (!area) return undefined;

  if (lang === 'es') {
    const es = AREA_GEO_ES[slug];
    if (es) return es;
    return \`RKC Automotive atiende conductores de \${area.name}, CO desde su taller ASE en 2120 W Evans Ave, Englewood — llame al (720) 749-3965.\`;
  }

  const en = AREA_GEO_EN[slug];
  if (en) return en;

  return \`RKC Automotive serves \${area.name}, CO drivers from its ASE-certified shop at 2120 W Evans Ave, Englewood — call (720) 749-3965 for brakes, diagnostics, and maintenance.\`;
}
`;
  fs.writeFileSync(path.join(ROOT, 'lib/areaGeoCite.ts'), ts, 'utf8');
}

async function main() {
  if (!KEY || KEY.length < 60) throw new Error('Bad Bifrost key');
  fs.writeFileSync(LOG, '', 'utf8');
  log(`Bifrost ${BASE} research-first keyLen=${KEY.length}`);

  const areas = extractAreas();
  log(`Areas: ${areas.length}`);

  const progress = fs.existsSync(PROGRESS)
    ? JSON.parse(fs.readFileSync(PROGRESS, 'utf8'))
    : { en: {}, es: {}, models: [] };

  for (const { name, slug } of areas) {
    if (!progress.en[slug] || looksLikeReasoning(progress.en[slug])) {
      const out = spark(
        `One sentence under 200 characters: RKC Automotive serves ${name}, Colorado from its ASE-certified shop at 2120 W Evans Ave, Englewood CO 80110 (${name} is in the Denver south metro). Mention phone (720) 749-3965 and core services (brakes, diagnostics, maintenance). Use "${name}, CO" exactly once.`,
        `en-${slug}`,
      );
      progress.en[slug] = out.content.slice(0, 220);
      progress.models.push(`en-${slug}:${out.model}`);
      fs.writeFileSync(PROGRESS, JSON.stringify(progress, null, 2), 'utf8');
      spawnSync('powershell', ['-Command', 'Start-Sleep -Seconds 1'], { stdio: 'ignore' });
    }

    if (!progress.es[slug] || looksLikeReasoning(progress.es[slug])) {
      const out = spark(
        `Translate to US/Mexican Spanish (one sentence, under 220 chars). Keep RKC Automotive, Englewood, ASE, Evans Ave, ${name}, CO, and (720) 749-3965.\nEnglish: ${progress.en[slug]}`,
        `es-${slug}`,
      );
      progress.es[slug] = out.content.slice(0, 220);
      progress.models.push(`es-${slug}:${out.model}`);
      fs.writeFileSync(PROGRESS, JSON.stringify(progress, null, 2), 'utf8');
      spawnSync('powershell', ['-Command', 'Start-Sleep -Seconds 1'], { stdio: 'ignore' });
    }
  }

  writeAreaGeoCite(progress.en, progress.es, progress.models);
  log('Wrote lib/areaGeoCite.ts');
  log('DONE');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
