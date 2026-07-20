#!/usr/bin/env node
/**
 * Apply fact-dense service meta descriptions (Google snippets + molecule fitDescription ethos).
 * Prefer Bifrost vllm/research; fallback to curated local rewrites if Spark unavailable.
 *
 * Usage: node scripts/apply-service-meta.mjs [--spark]
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { DS_RESEARCH, DS_SMART } from './spark-ds-parallel.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const useSpark = process.argv.includes('--spark');

/** Curated rewrites — 145–160 chars, fact-dense, unique (no keyword lists). */
const CURATED = {
  'brake-repair-englewood-co':
    'ASE-certified brake repair in Englewood, CO — pads, rotors, calipers, and fluid. Written estimates at our posted $120/hr labor rate. Call (720) 749-3965.',
  'engine-diagnostics-englewood-co':
    'ASE engine diagnostics in Englewood, CO for all makes and models. Find the real fault before parts. $120/hr labor. Call (720) 749-3965.',
  'transmission-services-englewood-co':
    'Transmission repair in Englewood, CO — automatic, manual, CVT, and fluid service. ASE techs at $120/hr labor. Call (720) 749-3965.',
  'oil-changes-englewood-co':
    'Oil changes in Englewood, CO — conventional, synthetic, and high-mileage with fluid top-off. ASE shop at $120/hr labor. Call (720) 749-3965.',
  'check-engine-light-englewood-co':
    'Check engine light diagnosis in Englewood, CO. ASE techs find the root cause — not every sensor on the diagram. $120/hr labor. Call (720) 749-3965.',
  'engine-rebuilds-englewood-co':
    'Engine rebuilds in Englewood, CO — long-block, short-block, machining, and blueprinting. ASE shop with written estimates. Call (720) 749-3965.',
  'camshaft-lifter-repair-englewood-co':
    'Camshaft and lifter repair in Englewood, CO — AFM tick, HEMI valvetrain, and misfires. ASE diagnostics at $120/hr. Call (720) 749-3965.',
  'battery-testing-englewood-co':
    'Free battery testing and replacement in Englewood, CO with full charging-system checks. ASE-certified shop serving Denver south metro. Call (720) 749-3965.',
  'electrical-system-englewood-co':
    'Auto electrical repair in Englewood, CO — alternator, starter, wiring, and parasitic draw diagnosis. ASE-certified techs. Call (720) 749-3965.',
  'exhaust-system-englewood-co':
    'Exhaust system repair in Englewood, CO — mufflers, catalytic converters, pipes, and emissions service. ASE shop at $120/hr. Call (720) 749-3965.',
  'heating-ac-englewood-co':
    'Auto AC and heating repair in Englewood, CO — R134a and R1234yf recharge, leak testing, compressors. ASE shop at $120/hr. Call (720) 749-3965.',
  'preventative-maintenance-englewood-co':
    'Preventative maintenance in Englewood, CO — scheduled service that prevents costly breakdowns across the Denver south metro. $120/hr. Call (720) 749-3965.',
  'suspension-steering-englewood-co':
    'ASE suspension and steering repair in Englewood, CO — shocks, struts, ball joints, and alignment. Denver south metro. $120/hr. Call (720) 749-3965.',
};

function loadEnv() {
  for (const line of fs.readFileSync('C:/Users/BS/molecule-work/.env.local', 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m && !process.env[m[1].trim()]) process.env[m[1].trim()] = m[2].trim();
  }
}

function sparkRewrite(title, current, attempt = 1) {
  loadEnv();
  const BASE = process.env.OPENAI_BASE_URL || 'http://100.110.254.98:4001/v1';
  const KEY = process.env.OPENAI_API_KEY || process.env.BIFROST_KEY_PARTNER_PROJECT;
  const model = attempt % 2 === 1 ? DS_RESEARCH : DS_SMART;
  const req = path.join(ROOT, `.tmp-meta-req-${attempt}.json`);
  const res = path.join(ROOT, `.tmp-meta-res-${attempt}.json`);
  fs.writeFileSync(
    req,
    JSON.stringify({
      model,
      temperature: 0.15,
      max_tokens: 300,
      messages: [
        {
          role: 'system',
          content:
            'Write ONE Google meta description for RKC Automotive (Englewood CO ASE shop). Return ONLY JSON {"description":"..."}. 145-160 chars. Include Englewood CO and (720) 749-3965. Fact-dense, no keyword lists.',
        },
        {
          role: 'user',
          content: JSON.stringify({ title, current }),
        },
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
      'Content-Type: application/json; charset=utf-8',
      '--data-binary',
      `@${req}`,
      '--max-time',
      '60',
      '-o',
      res,
    ],
    { encoding: 'utf8', timeout: 90000 },
  );
  if (r.status !== 0) throw new Error(`curl ${r.status}`);
  const j = JSON.parse(fs.readFileSync(res, 'utf8'));
  if (j.error) throw new Error(JSON.stringify(j.error));
  let c = (j.choices?.[0]?.message?.content || '').trim();
  if (c.startsWith('```')) c = c.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
  const s = c.indexOf('{');
  const e = c.lastIndexOf('}');
  const parsed = JSON.parse(c.slice(s, e + 1));
  return {
    description: String(parsed.description || '').trim(),
    model: j.extra_fields?.resolved_model_used || j.model,
    sparkKey: j.extra_fields?.routing_info?.key,
  };
}

function extractCurrentDescription(content) {
  const m = content.match(
    /createServicePageMetadata\(\s*\n?\s*(['"])(?:(?!\1).)*\1,\s*\n?\s*(['"])((?:(?!\2).)*)\2/,
  );
  return m ? m[3] : null;
}

function replaceDescription(content, oldDesc, newDesc) {
  if (!content.includes(oldDesc)) return null;
  return content.replace(oldDesc, newDesc);
}

const results = [];
for (const [slug, curated] of Object.entries(CURATED)) {
  const file = path.join(ROOT, 'app/services', slug, 'page.tsx');
  if (!fs.existsSync(file)) {
    console.warn('missing', slug);
    continue;
  }
  let content = fs.readFileSync(file, 'utf8');
  const current = extractCurrentDescription(content);
  if (!current) {
    console.warn('no desc', slug);
    continue;
  }

  if (current.length >= 145 && current.length <= 165) {
    console.log(`${slug}: skip len=${current.length} (already in ideal range)`);
    continue;
  }

  let next = curated;
  let model = 'curated';
  let sparkKey = null;

  if (useSpark) {
    try {
      const out = sparkRewrite(slug, current, 1);
      if (out.description.length >= 140 && out.description.length <= 165) {
        next = out.description;
        model = out.model;
        sparkKey = out.sparkKey;
      } else {
        console.warn(`[spark] ${slug} bad len=${out.description.length}, using curated`);
      }
    } catch (err) {
      console.warn(`[spark] ${slug} fail: ${String(err.message).slice(0, 100)} — curated`);
    }
  }

  console.log(`${slug}: ${current.length} → ${next.length} via ${model}${sparkKey ? ` (${sparkKey})` : ''}`);
  const updated = replaceDescription(content, current, next);
  if (updated) {
    fs.writeFileSync(file, updated);
    results.push({ slug, from: current.length, to: next.length, model, sparkKey, description: next });
  }
}

fs.writeFileSync(path.join(ROOT, '.tmp-service-meta-results.json'), JSON.stringify(results, null, 2));
console.log('done', results.length);
