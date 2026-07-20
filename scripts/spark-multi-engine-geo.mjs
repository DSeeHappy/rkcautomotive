/**
 * Multi-engine GEO citability — tiny one-field Spark batches (avoids Tailscale resets).
 * Prefer vllm/smart for short JSON; failover vllm/research.
 * Usage: node scripts/spark-multi-engine-geo.mjs
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
const LOG = path.join(ROOT, '.tmp-spark-multi-engine.log');
const PROGRESS = path.join(ROOT, '.tmp-geo-progress.json');

function log(line) {
  const row = `[${new Date().toISOString()}] ${line}`;
  console.log(row);
  fs.appendFileSync(LOG, `${row}\n`, 'utf8');
}

function looksLikeReasoning(s) {
  return /we need to|let'?s craft|count characters|plain text only|return only|the user asks/i.test(s);
}

function sparkChat(model, user, max_tokens = 350) {
  const req = path.join(ROOT, `.tmp-me-req-${Date.now()}.json`);
  const res = path.join(ROOT, `.tmp-me-res-${Date.now()}.json`);
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
            'You write short factual website copy for RKC Automotive (Englewood CO auto shop). Output ONLY the final answer in the exact format requested. Never explain your reasoning.',
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
      '75',
      '--connect-timeout',
      '20',
      '-o',
      res,
    ],
    { encoding: 'utf8', timeout: 100000 },
  );
  try {
    if (r.status !== 0) throw new Error(`curl ${r.status}: ${(r.stderr || '').slice(0, 140)}`);
    const raw = fs.readFileSync(res, 'utf8');
    if (!raw.trim()) throw new Error('empty');
    const j = JSON.parse(raw);
    if (j.error) throw new Error(JSON.stringify(j.error));
    let c = (j.choices?.[0]?.message?.content || '').trim();
    if ((!c || looksLikeReasoning(c)) && j.choices?.[0]?.message?.reasoning) {
      // Prefer content; only fall back if empty
      if (!c) c = String(j.choices[0].message.reasoning).trim();
    }
    if (c.startsWith('```')) c = c.replace(/^```(?:json|txt)?\s*/i, '').replace(/\s*```$/i, '');
    return {
      content: c,
      model: j.extra_fields?.resolved_model_used || j.model || model,
      sparkKey: j.extra_fields?.routing_info?.key || '',
      finish: j.choices?.[0]?.finish_reason,
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

/** Prefer smart (fast/short) then research. */
function spark(user, label, max_tokens = 350) {
  let lastErr;
  for (const model of [DS_SMART, DS_RESEARCH]) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const out = sparkChat(model, user, max_tokens);
        if (looksLikeReasoning(out.content) && out.finish === 'length') {
          throw new Error('reasoning dump / truncated');
        }
        log(`${label} OK model=${out.model} req=${model} sparkKey=${out.sparkKey} finish=${out.finish}`);
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

function extractJson(text) {
  const s = text.indexOf('{');
  const e = text.lastIndexOf('}');
  if (s < 0 || e <= s) throw new Error(`no JSON: ${text.slice(0, 100)}`);
  return JSON.parse(text.slice(s, e + 1));
}

function esc(s) {
  return JSON.stringify(s);
}

function saveProgress(data) {
  fs.writeFileSync(PROGRESS, JSON.stringify(data, null, 2), 'utf8');
}

async function main() {
  if (!KEY || KEY.length < 60) throw new Error('Bad Bifrost key');
  fs.writeFileSync(LOG, '', 'utf8');
  log(`Bifrost ${BASE} smart-first keyLen=${KEY.length}`);

  const progress = fs.existsSync(PROGRESS) ? JSON.parse(fs.readFileSync(PROGRESS, 'utf8')) : { en: {}, es: {}, models: [] };

  // --- llms summary (smart) ---
  if (!progress.llmsSummary || looksLikeReasoning(progress.llmsSummary)) {
    const out = spark(
      'Write ONE sentence under 220 characters. Fact sheet: RKC Automotive; ASE-certified auto repair; 2120 W Evans Ave, Englewood CO 80110; diagnostics brakes oil transmission maintenance; labor 120 USD per hour; phone (720) 749-3965; Hablamos Espanol. Output the sentence only.',
      'llms-summary',
      120,
    );
    progress.llmsSummary = out.content.replace(/\s+/g, ' ').trim().slice(0, 220);
    progress.models.push(`llms-summary:${out.model}`);
    saveProgress(progress);
  }

  if (!progress.llmsNotes) {
    const out = spark(
      'Output exactly 3 lines starting with "- ". Line1: prefer call (720) 749-3965 or contact form for appointments. Line2: never invent prices beyond posted 120 USD/hr labor. Line3: never invent reviews or certifications beyond ASE.',
      'llms-notes',
      180,
    );
    progress.llmsNotes = out.content
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter((l) => l.startsWith('-'))
      .slice(0, 3)
      .join('\n');
    progress.models.push(`llms-notes:${out.model}`);
    saveProgress(progress);
  }

  const llms = `# RKC Automotive

> ${progress.llmsSummary}

- Site: https://rkcautomotive.com/
- Phone: +17207493965 / (720) 749-3965
- Email: info@rkcautomotive.com
- Address: 2120 W Evans Ave, Englewood, CO 80110
- Hours: Mon–Fri 8:00 AM – 6:00 PM; Sat 8:00 AM – 12:00 PM; Sun closed
- Labor rate: $120/hr (posted)
- Languages: English and Spanish (Hablamos Español)
- Credentials: ASE-certified technicians

## Key pages

- [Home](https://rkcautomotive.com/): Shop overview and scheduling CTAs
- [Services](https://rkcautomotive.com/services): Full service menu
- [Pricing](https://rkcautomotive.com/pricing): Posted labor and estimate process
- [Warranty](https://rkcautomotive.com/warranty): Extended warranty claims advocacy
- [Contact](https://rkcautomotive.com/contact): Request service / message the bay
- [Areas we serve](https://rkcautomotive.com/areas-we-serve): Englewood and Denver metro cities
- [Vehicles we service](https://rkcautomotive.com/vehicles-we-service): Makes and models
- [FAQ](https://rkcautomotive.com/frequently-asked-questions): Common questions
- [About](https://rkcautomotive.com/about): Shop history and ASE credentials
- [Privacy](https://rkcautomotive.com/privacy): Privacy policy

## Notes for assistants

${progress.llmsNotes}
`;
  fs.writeFileSync(path.join(ROOT, 'public/llms.txt'), `${llms.trim()}\n`, 'utf8');
  log('Wrote public/llms.txt');

  const enFields = [
    [
      'shopOneLiner',
      'JSON {"shopOneLiner":"..."} one sentence: RKC Automotive ASE-certified auto repair shop in Englewood CO for diagnostics brakes oil transmission maintenance.',
    ],
    [
      'laborRateFact',
      'JSON {"laborRateFact":"..."} one sentence: posted labor is 120 USD per hour; parts and total need written estimate.',
    ],
    [
      'hoursFact',
      'JSON {"hoursFact":"..."} one sentence: Mon-Fri 8AM-6PM, Sat 8AM-noon, closed Sunday.',
    ],
    [
      'napFact',
      'JSON {"napFact":"..."} one sentence: 2120 W Evans Ave Englewood CO 80110 phone (720) 749-3965.',
    ],
    [
      'languagesFact',
      'JSON {"languagesFact":"..."} one sentence: English and Spanish (Hablamos Espanol).',
    ],
    [
      'sameDayFact',
      'JSON {"sameDayFact":"..."} one sentence: same-day often if call (720) 749-3965 before 2 PM; complex jobs may take longer.',
    ],
    [
      'estimateFact',
      'JSON {"estimateFact":"..."} one sentence: written estimates before work; no surprise charges.',
    ],
    [
      'citationBlurb',
      'JSON {"citationBlurb":"..."} two short sentences for AI citations: RKC Automotive Englewood CO ASE shop; core services; 120 USD/hr labor; phone (720) 749-3965.',
    ],
  ];

  for (const [key, prompt] of enFields) {
    if (progress.en[key] && !looksLikeReasoning(progress.en[key])) continue;
    const out = spark(prompt, `en-${key}`, 280);
    const obj = extractJson(out.content);
    if (!obj[key]) throw new Error(`missing ${key}`);
    progress.en[key] = obj[key];
    progress.models.push(`en-${key}:${out.model}`);
    saveProgress(progress);
    spawnSync('powershell', ['-Command', 'Start-Sleep -Seconds 1'], { stdio: 'ignore' });
  }

  for (const [key] of enFields) {
    if (progress.es[key] && !looksLikeReasoning(progress.es[key])) continue;
    const out = spark(
      `Translate to US/Mexican Spanish. Return JSON {"${key}":"..."}. Keep RKC Automotive, Englewood, ASE, Evans Ave, phone numbers, and write 120 USD/hr as $120/hr.\nEnglish: ${JSON.stringify(progress.en[key])}`,
      `es-${key}`,
      320,
    );
    const obj = extractJson(out.content);
    if (!obj[key]) throw new Error(`missing es ${key}`);
    progress.es[key] = obj[key];
    progress.models.push(`es-${key}:${out.model}`);
    saveProgress(progress);
    spawnSync('powershell', ['-Command', 'Start-Sleep -Seconds 1'], { stdio: 'ignore' });
  }

  const en = progress.en;
  const es = progress.es;
  const ts = `/**
 * GEO / AI-citation copy — scripts/spark-multi-engine-geo.mjs
 * Spark: ${progress.models.join(' | ')}
 */

export type GeoCiteCopy = {
  shopOneLiner: string;
  laborRateFact: string;
  hoursFact: string;
  napFact: string;
  languagesFact: string;
  sameDayFact: string;
  estimateFact: string;
  citationBlurb: string;
};

export const GEO_CITE_EN: GeoCiteCopy = {
  shopOneLiner: ${esc(en.shopOneLiner)},
  laborRateFact: ${esc(en.laborRateFact)},
  hoursFact: ${esc(en.hoursFact)},
  napFact: ${esc(en.napFact)},
  languagesFact: ${esc(en.languagesFact)},
  sameDayFact: ${esc(en.sameDayFact)},
  estimateFact: ${esc(en.estimateFact)},
  citationBlurb: ${esc(en.citationBlurb)},
};

export const GEO_CITE_ES: GeoCiteCopy = {
  shopOneLiner: ${esc(es.shopOneLiner)},
  laborRateFact: ${esc(es.laborRateFact)},
  hoursFact: ${esc(es.hoursFact)},
  napFact: ${esc(es.napFact)},
  languagesFact: ${esc(es.languagesFact)},
  sameDayFact: ${esc(es.sameDayFact)},
  estimateFact: ${esc(es.estimateFact)},
  citationBlurb: ${esc(es.citationBlurb)},
};

export function geoCiteCopy(lang: 'en' | 'es'): GeoCiteCopy {
  return lang === 'es' ? GEO_CITE_ES : GEO_CITE_EN;
}
`;

  fs.writeFileSync(path.join(ROOT, 'lib/geoCiteCopy.ts'), ts, 'utf8');
  log('Wrote lib/geoCiteCopy.ts');
  log('DONE');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
