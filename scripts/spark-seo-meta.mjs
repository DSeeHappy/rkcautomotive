/**
 * Rewrite service page meta descriptions via Bifrost ds (vllm/research → Nemotron).
 * Google Snippets guidance: 1–2 sentences, unique, fact-dense, 150–160 chars ideal.
 *
 * Usage: node scripts/spark-seo-meta.mjs [--dry-run]
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { DS_RESEARCH, DS_SMART } from './spark-ds-parallel.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const dryRun = process.argv.includes('--dry-run');

const SERVICES = [
  {
    file: 'app/services/brake-repair-englewood-co/page.tsx',
    slug: 'brake-repair-englewood-co',
    title: 'Brake Repair in Englewood, CO',
    description:
      'Professional brake repair and service in Englewood, CO. Brake pads, rotors, calipers, and complete brake system service. Call (720) 749-3965 for same-day service.',
  },
  {
    file: 'app/services/engine-diagnostics-englewood-co/page.tsx',
    slug: 'engine-diagnostics-englewood-co',
    title: 'Engine Diagnostics in Englewood, CO',
    description:
      'Expert engine diagnostics and repair in Englewood, CO. Advanced equipment for all makes and models in the Denver south metro. Call (720) 749-3965 for service.',
  },
  {
    file: 'app/services/transmission-services-englewood-co/page.tsx',
    slug: 'transmission-services-englewood-co',
    title: 'Transmission Repair in Englewood, CO',
    description:
      'Transmission service and repair in Englewood, CO — automatic, manual, fluid service, and diagnostics for Denver south metro drivers. Call (720) 749-3965.',
  },
  {
    file: 'app/services/oil-changes-englewood-co/page.tsx',
    slug: 'oil-changes-englewood-co',
    title: 'Oil Change Service in Englewood, CO',
    description:
      'Fast, affordable oil changes in Englewood, CO — conventional, synthetic, and high-mileage oil with fluid top-off. Serving Denver south metro. Call (720) 749-3965.',
  },
  {
    file: 'app/services/check-engine-light-englewood-co/page.tsx',
    slug: 'check-engine-light-englewood-co',
    title: 'Check Engine Light Diagnosis in Englewood, CO',
    description:
      'Check engine light diagnosis in Englewood, CO. Find the real problem — not every sensor on the diagram — with ASE-certified diagnostics. Call (720) 749-3965.',
  },
  {
    file: 'app/services/engine-rebuilds-englewood-co/page.tsx',
    slug: 'engine-rebuilds-englewood-co',
    title: 'Engine Rebuilds in Englewood, CO',
    description:
      'Professional long-block and short-block engine rebuilding, machining, and blueprinting in Englewood. Precision piston rings, bearings, and complete block restoration.',
  },
  {
    file: 'app/services/camshaft-lifter-repair-englewood-co/page.tsx',
    slug: 'camshaft-lifter-repair-englewood-co',
    title: 'Camshaft & Lifter Repair in Englewood, CO',
    description:
      'Expert replacement for worn camshaft lobes, collapsed hydraulic lifters, and valve-train failures. Fix your engine tick or misfire in the Denver metro area.',
  },
  {
    file: 'app/services/battery-testing-englewood-co/page.tsx',
    slug: 'battery-testing-englewood-co',
    title: 'Battery Testing in Englewood, CO',
    description:
      'Free battery testing and professional battery replacement in Englewood, CO. Charging-system checks included — do not get stranded. Call (720) 749-3965 today.',
  },
  {
    file: 'app/services/electrical-system-englewood-co/page.tsx',
    slug: 'electrical-system-englewood-co',
    title: 'Electrical System Repair in Englewood, CO',
    description:
      'Expert auto electrical repair in Englewood, CO. Battery, alternator, starter, wiring, and electrical diagnostics. Call (720) 749-3965 for reliable electrical service.',
  },
  {
    file: 'app/services/exhaust-system-englewood-co/page.tsx',
    slug: 'exhaust-system-englewood-co',
    title: 'Exhaust System Repair in Englewood, CO',
    description:
      'Exhaust system repair in Englewood, CO — mufflers, catalytic converters, pipes, and emissions service for Denver south metro drivers. Call (720) 749-3965.',
  },
  {
    file: 'app/services/heating-ac-englewood-co/page.tsx',
    slug: 'heating-ac-englewood-co',
    title: 'Heating & AC Repair in Englewood, CO',
    description:
      'Auto AC and heating repair in Englewood, CO. R134a and R1234yf recharge, leak testing, compressor and heater-core service. Call (720) 749-3965.',
  },
  {
    file: 'app/services/preventative-maintenance-englewood-co/page.tsx',
    slug: 'preventative-maintenance-englewood-co',
    title: 'Preventative Maintenance in Englewood, CO',
    description:
      'Preventative maintenance in Englewood, CO. Scheduled service keeps your vehicle reliable and prevents costly repairs across the Denver south metro. Call (720) 749-3965.',
  },
  {
    file: 'app/services/suspension-steering-englewood-co/page.tsx',
    slug: 'suspension-steering-englewood-co',
    title: 'Suspension & Steering Repair in Englewood, CO',
    description:
      'Suspension and steering repair in Englewood, CO — shocks, struts, ball joints, and alignment from ASE-certified techs. Serving Denver south metro. Call (720) 749-3965.',
  },
];

const SYSTEM = `You write Google meta descriptions for RKC Automotive, an ASE-certified auto repair shop at 2120 W Evans Ave, Englewood, CO 80110.
Rules:
- Return ONLY valid JSON: { "description": "..." }
- One or two sentences, 145–165 characters (strict).
- Fact-dense: service name, Englewood CO, ASE-certified, $120/hr labor when relevant, phone (720) 749-3965.
- Unique per page — no boilerplate duplication.
- Natural language, no keyword lists, no clickbait.
- Keep proper nouns: RKC Automotive, Englewood, Denver metro, R134a, R1234yf, OBD-II, CVT, AFM, HEMI when relevant.`;

function loadEnv() {
  for (const line of fs.readFileSync('C:/Users/BS/molecule-work/.env.local', 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m && !process.env[m[1].trim()]) process.env[m[1].trim()] = m[2].trim();
  }
}
loadEnv();

function sparkSeoOnce(obj, label, attempt = 1) {
  const req = path.join(ROOT, `.tmp-seo-req-${label}-${attempt}.json`);
  const res = path.join(ROOT, `.tmp-seo-res-${label}-${attempt}.json`);
  const BASE = process.env.OPENAI_BASE_URL || 'http://100.110.254.98:4001/v1';
  const KEY = process.env.OPENAI_API_KEY || process.env.BIFROST_KEY_PARTNER_PROJECT;
  const model = attempt % 2 === 1 ? DS_RESEARCH : DS_SMART;
  fs.writeFileSync(
    req,
    JSON.stringify({
      model,
      temperature: 0.15,
      max_tokens: 400,
      messages: [
        { role: 'system', content: SYSTEM },
        { role: 'user', content: JSON.stringify(obj) },
      ],
    }),
  );
  const r = spawnSync(
    'curl.exe',
    ['-sS', '--http1.1', '-X', 'POST', `${BASE}/chat/completions`, '-H', `Authorization: Bearer ${KEY}`, '-H', 'Content-Type: application/json; charset=utf-8', '--data-binary', `@${req}`, '--max-time', '90', '-o', res],
    { encoding: 'utf8', timeout: 120000 },
  );
  if (r.status !== 0) throw new Error(`curl ${r.status}: ${(r.stderr || '').slice(0, 80)}`);
  const j = JSON.parse(fs.readFileSync(res, 'utf8'));
  if (j.error) throw new Error(JSON.stringify(j.error));
  let c = (j.choices?.[0]?.message?.content || '').trim();
  if (c.startsWith('```')) c = c.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
  const s = c.indexOf('{');
  const e = c.lastIndexOf('}');
  if (s < 0 || e <= s) throw new Error(`no json: ${c.slice(0, 80)}`);
  return {
    parsed: JSON.parse(c.slice(s, e + 1)),
    model: j.extra_fields?.resolved_model_used || j.model,
    sparkKey: j.extra_fields?.routing_info?.key,
  };
}

function patchDescription(filePath, oldDesc, newDesc) {
  const abs = path.join(ROOT, filePath);
  let content = fs.readFileSync(abs, 'utf8');
  const escaped = oldDesc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(escaped);
  if (!re.test(content)) {
    console.warn(`[seo-meta] pattern miss ${filePath}`);
    return false;
  }
  content = content.replace(re, newDesc);
  fs.writeFileSync(abs, content);
  return true;
}

async function main() {
  console.log(`[seo-meta] services=${SERVICES.length} dryRun=${dryRun} models=${DS_RESEARCH}/${DS_SMART}`);
  const results = [];

  for (const svc of SERVICES) {
    const len = svc.description.length;
    if (len >= 145 && len <= 165) {
      console.log(`[seo-meta] skip ${svc.slug} len=${len} (already in range)`);
      continue;
    }

    let parsed, model, sparkKey;
    let lastErr;
    for (let attempt = 1; attempt <= 6; attempt++) {
      try {
        ({ parsed, model, sparkKey } = sparkSeoOnce(
          {
            page: svc.title,
            currentDescription: svc.description,
            instruction: 'Rewrite meta description per rules.',
          },
          svc.slug,
          attempt,
        ));
        break;
      } catch (err) {
        lastErr = err;
        spawnSync('powershell', ['-Command', 'Start-Sleep -Milliseconds 800'], { stdio: 'ignore' });
      }
    }
    if (!parsed) throw lastErr;

    const desc = String(parsed.description || parsed.metaDescription || '').trim();
    if (!desc || desc.length < 120 || desc.length > 175) {
      console.warn(`[seo-meta] bad length ${svc.slug} len=${desc.length}: ${desc.slice(0, 80)}`);
      continue;
    }

    console.log(`[seo-meta] ${svc.slug} len=${len}→${desc.length} model=${model} spark=${sparkKey}`);
    results.push({ ...svc, newDescription: desc, model, sparkKey });

    if (!dryRun) {
      patchDescription(svc.file, svc.description, desc);
    }
  }

  fs.writeFileSync(path.join(ROOT, '.tmp-seo-meta-results.json'), JSON.stringify(results, null, 2));
  console.log(`[seo-meta] updated ${results.length} descriptions`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
