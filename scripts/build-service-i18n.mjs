/**
 * Build Spanish service page bodies via Bifrost Spark (vllm/smart → smart-spark).
 * Writes lib/i18n/serviceBodies/<slug>.ts and a registry.
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'lib/i18n/serviceBodies');

function loadEnv() {
  for (const line of fs.readFileSync('C:/Users/BS/molecule-work/.env.local', 'utf8').split(/\r?\n/)) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m && !process.env[m[1].trim()]) process.env[m[1].trim()] = m[2].trim();
  }
}
loadEnv();

const BASE = process.env.OPENAI_BASE_URL || 'http://100.110.254.98:4001/v1';
const SPARK = 'vllm/smart';
const KEY = process.env.OPENAI_API_KEY || process.env.BIFROST_KEY_PARTNER_PROJECT;

const SYSTEM = `Translate RKC Automotive Englewood CO auto-repair website copy to natural US/Mexican Spanish.
Return ONLY valid JSON with identical keys/arrays. No markdown. No commentary.
Keep proper nouns and tech: RKC Automotive, Englewood, Denver, Littleton, ASE, AllData, Mitchell, OBD-II, STFT, LTFT, MAF, MAP, VVT, EVAP, P0xxx codes, I-70, I-25, C-470, Evans Ave, Broadway, EcoBoost, TDI, $120/hr, $99, DOT, VIN, brand names.
Use usted form.`;

function sparkTranslate(obj, label) {
  const req = path.join(ROOT, `.tmp-spark-req-${label}.json`);
  const res = path.join(ROOT, `.tmp-spark-res-${label}.json`);
  const body = {
    model: SPARK,
    temperature: 0.1,
    max_tokens: 12000,
    messages: [
      { role: 'system', content: SYSTEM },
      {
        role: 'user',
        content: `Translate every string value to Spanish. Keep keys identical.\n\n${JSON.stringify(obj)}`,
      },
    ],
  };
  fs.writeFileSync(req, JSON.stringify(body), 'utf8');
  let lastErr;
  for (let attempt = 1; attempt <= 4; attempt++) {
    const r = spawnSync(
      'curl.exe',
      [
        '-sS', '-X', 'POST', `${BASE}/chat/completions`,
        '-H', `Authorization: Bearer ${KEY}`,
        '-H', 'Content-Type: application/json; charset=utf-8',
        '--data-binary', `@${req}`,
        '--max-time', '180',
        '-o', res,
      ],
      { encoding: 'utf8', timeout: 200000 },
    );
    try {
      if (r.status !== 0) throw new Error(`curl ${r.status} ${r.stderr}`);
      const json = JSON.parse(fs.readFileSync(res, 'utf8'));
      if (json.error) throw new Error(JSON.stringify(json.error));
      const sparkKey = json.extra_fields?.routing_info?.key;
      let content = (json.choices?.[0]?.message?.content || '').trim();
      content = content.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
      const s = content.indexOf('{');
      const e = content.lastIndexOf('}');
      if (s < 0 || e <= s) throw new Error('no JSON object in response');
      const parsed = JSON.parse(content.slice(s, e + 1));
      console.log(`[spark] ${label} OK sparkKey=${sparkKey} attempt=${attempt}`);
      try { fs.unlinkSync(req); } catch {}
      try { fs.unlinkSync(res); } catch {}
      return parsed;
    } catch (err) {
      lastErr = err;
      console.error(`[spark] ${label} fail attempt=${attempt}:`, String(err.message).slice(0, 180));
      spawnSync('powershell', ['-Command', 'Start-Sleep -Seconds 2'], { stdio: 'ignore' });
    }
  }
  throw lastErr;
}

function deepMerge(target, source) {
  for (const [k, v] of Object.entries(source)) {
    if (v && typeof v === 'object' && !Array.isArray(v) && target[k] && typeof target[k] === 'object') {
      deepMerge(target[k], v);
    } else {
      target[k] = v;
    }
  }
  return target;
}

function translateInChunks(en, slug, chunkKeys) {
  const es = {};
  for (const keys of chunkKeys) {
    const part = {};
    for (const k of keys) part[k] = en[k];
    const translated = sparkTranslate(part, `${slug}-${keys.join('_')}`);
    deepMerge(es, translated);
  }
  return es;
}

function writeModule(slug, en, es) {
  fs.mkdirSync(OUT, { recursive: true });
  const exportName = slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) + 'BodyCopy';
  const constName = slug.replace(/-/g, '_').toUpperCase() + '_BODY';
  const code = `import type { Lang } from '@/lib/language';

/** Service page body copy — ES via Bifrost Spark vllm/smart (smart-spark). */
export const ${constName} = {
  en: ${JSON.stringify(en, null, 2)},
  es: ${JSON.stringify(es, null, 2)},
} as const;

export function ${exportName}(lang: Lang) {
  return ${constName}[lang] ?? ${constName}.en;
}
`;
  fs.writeFileSync(path.join(OUT, `${slug}.ts`), code, 'utf8');
  console.log('wrote', slug);
}

// ─── Engine Diagnostics (screenshot page) ───────────────────────────────────
const ENGINE_DIAGNOSTICS_EN = {
  breadcrumb: 'Engine Diagnostics',
  hero: {
    imageAlt: 'Engine Diagnostics at RKC Automotive Englewood CO',
    eyebrow: 'Diagnostics · Englewood, CO',
    title: 'Advanced Engine Diagnostics in Englewood, CO',
    description:
      'Rough idle, power loss, or mystery misfires? We scan OBD-II, analyze live data, run compression and smoke tests, and isolate fuel-trim faults — with a written repair plan before parts get thrown at codes.',
    primaryCta: 'Book Diagnostics',
    callPrefix: 'Call',
  },
  reality: {
    quote: 'A stored code is a clue — not a diagnosis.',
    bodyBefore:
      'Parts stores read P0xxx codes for free, but codes only report which sensor or circuit tripped — not whether the sensor failed, a wire rubbed through, or the root cause is mechanical. Denver metro drivers often replace three oxygen sensors before finding a vacuum leak or burnt exhaust valve. At RKC we verify every code with live data, scope traces, and mechanical tests so you pay for the fix, not the guess. When a',
    linkText: 'check engine light in Englewood',
    bodyAfter: 'points to misfire or fuel-trim faults, we isolate the root cause before recommending parts.',
  },
  symptoms: {
    eyebrow: 'Drivability signs',
    title: 'Symptoms that need real diagnostics',
    intro:
      'Modern powertrains mask problems until load, altitude, or cold-start conditions expose them. These patterns need scan tools and test equipment — not a generic tune-up quote.',
    cards: [
      {
        title: 'Random misfire & fuel trim drift',
        body: 'P0300-series codes with positive long-term fuel trim on multiple banks often mean unmetered air — cracked PCV hoses, intake gasket leaks, or torn MAF boots. Negative trim on one bank can trace to leaking injectors or low compression. We graph fuel trims at idle, 2,500 RPM, and light load on a road test loop near Evans Ave to see which cells are out of spec before recommending coils or plugs.',
      },
      {
        title: 'Rough idle & smoke signals',
        body: 'Blue smoke at startup points to valve-guide seal or turbo seal wear; white smoke that smells sweet suggests coolant in the combustion chamber; black smoke under load is rich fuel or restricted airflow. A smoke-machine test through the intake isolates vacuum leaks in minutes. Compression and leak-down tests separate ring wear from head-gasket failure — critical before you approve a $2,000 head job on a high-mileage SUV.',
      },
      {
        title: 'Power loss at altitude',
        body: "Colorado's thin air stresses turbochargers, VVT solenoids, and fuel delivery. A vehicle that feels fine at sea level may show boost leaks, clogged intercoolers, or MAF scaling errors above 5,000 feet. We compare requested vs. actual boost, knock retard, and catalyst efficiency on live data — especially on EcoBoost, TDI, and direct-injection platforms common in Englewood commutes.",
      },
    ],
  },
  technical: {
    eyebrow: 'Diagnostic depth',
    title: 'OBD-II PIDs, freeze frame, smoke test & relative compression',
    intro:
      'Professional engine diagnostics goes beyond reading codes. We capture the conditions when the fault set, graph live data under load, smoke-test vacuum leaks, and compare cylinder cranking speed — so repairs target root cause, not the cheapest guess.',
    cards: [
      {
        title: 'Live OBD-II PIDs we graph',
        body: 'Short-term and long-term fuel trims (STFT/LTFT), MAF grams-per-second vs. calculated load, O2 sensor switching voltage, misfire counters per cylinder, MAP/MAF correlation, and VVT commanded vs. actual cam angles. Denver altitude exposes marginal sensors that pass at sea level — we test on Englewood routes, not just in the bay.',
      },
      {
        title: 'Freeze-frame capture',
        body: 'When a code sets, the PCM records RPM, coolant temp, fuel status, and load at that moment. A P0171 lean code at cold idle differs from one at 70 mph uphill on C-470. Freeze-frame tells us which operating cell failed — critical for intermittent faults that disappear when you arrive at the shop.',
      },
      {
        title: 'Smoke-machine vacuum & EVAP test',
        body: 'Visible vapor injected into the intake finds cracked PCV hoses, intake gasket leaks, and torn MAF boots that set lean codes. EVAP smoke locates gas-cap, purge-valve, and vent-hose leaks causing P044x codes. Leaks too small to hear are found in minutes — common on high-mileage rubber in Colorado heat.',
      },
      {
        title: 'Relative compression testing',
        body: 'Uses crankshaft position sensor to compare cranking acceleration between cylinders — no spark plugs removed. A weak cylinder shows slower compression stroke speed. We follow with traditional compression or leak-down on flagged cylinders before recommending top-end or bottom-end repair — saving hours on multi-cylinder misfire diagnosis.',
      },
    ],
    tableTitle: 'Key OBD-II PIDs for drivability diagnosis',
    tableIntro: 'These parameters tell us whether the fault is fuel, air, ignition, or mechanical — before parts get ordered.',
    tableCaption: 'Common OBD-II PIDs used during engine diagnostics',
    tableColumns: ['PID', 'What it tells us', 'Red flag'],
    tableRows: [
      { label: 'STFT / LTFT', values: ['Fuel trim correction', '±10% sustained = lean/rich fault'] },
      { label: 'MAF g/s', values: ['Airflow at RPM/load', 'Low vs. calculated load = restriction or bad MAF'] },
      { label: 'O2 B1S1', values: ['Upstream O2 switching', 'Lazy or stuck = fuel or cat issue'] },
      { label: 'Misfire counts', values: ['Per-cylinder misfires', 'Climbing count = coil, injector, or mechanical'] },
      { label: 'VVT actual vs. cmd', values: ['Cam timing correlation', 'Deviation = solenoid, oil, or chain'] },
    ],
  },
  process: {
    eyebrow: 'Diagnostic workflow',
    title: 'How we isolate engine faults',
    intro: 'Our ASE-certified techs follow a verify-first workflow — scan, test, confirm — so the repair matches the failure mode.',
    bgImageAlt: 'Engine Diagnostics at RKC Automotive Englewood CO',
    steps: [
      { title: 'OBD-II scan & freeze frame', body: 'We pull stored, pending, and permanent codes with freeze-frame RPM, load, and fuel status. Pending codes on cold mornings often differ from stored codes after a full warm-up cycle.' },
      { title: 'Live data & bidirectional tests', body: 'Fuel trims, O2 sensor switching, MAP/MAF correlation, and VVT commanded vs. actual angles. Actuator tests command EGR, EVAP purge, and cooling fans to confirm PCM control.' },
      { title: 'Scope & waveform analysis', body: 'Ignition patterns, injector pintle time, and crank/cam correlation on a digital scope catch intermittent faults scan tools miss — especially coil-on-plug breakdown under load.' },
      { title: 'Mechanical verification', body: 'Compression, leak-down, cooling-system pressure test, and smoke test when codes or smoke color suggest internal wear or vacuum leaks.' },
      { title: 'Written repair plan', body: 'You receive a prioritized fix list with parts and labor at $120/hr. Diagnostic fee applies toward approved repairs — you are not paying twice to learn what failed.' },
    ],
  },
  checklist: {
    eyebrow: 'Equipment & tests',
    title: 'Diagnostic tools we use daily',
    intro: 'Professional diagnostics require more than a code reader. Our Englewood bay is equipped for mechanical and electrical root-cause work.',
    groups: [
      { category: 'Electronic diagnostics', items: ['Factory-level scan tools for domestic, Asian, and European platforms', 'Live data graphing and freeze-frame analysis', 'Oscilloscope for ignition and sensor waveforms'] },
      { category: 'Mechanical testing', items: ['Compression and cylinder leak-down testing', 'Cooling-system pressure and combustion-gas detection', 'Smoke-machine vacuum leak isolation'] },
      { category: 'Drivability verification', items: ['Controlled road test on local Englewood routes', 'Fuel trim capture at altitude and under load', 'Post-repair monitor readiness and code clearing'] },
      { category: 'What you receive', items: ['Plain-language explanation of findings', 'Written estimate before repair authorization', 'Diagnostic fee credited toward approved work'] },
    ],
  },
  labor: {
    title: 'Labor transparency on diagnostics',
    description:
      'Engine diagnostics start from $99 and credit toward approved repairs. Labor bills at our posted $120/hr rate with documented test results — not open-ended hourly guessing.',
  },
  faq: {
    title: 'Engine diagnostics questions',
    intro: 'Answers on diagnostic fees, live data, compression tests, and why we do not just clear codes.',
  },
  areaLabel: 'engine diagnostics',
  finalCta: {
    title: 'Need engine diagnostics today?',
    description:
      'Schedule at 2120 W Evans Ave. We find the root cause — misfire, vacuum leak, sensor fault, or mechanical wear — with tests you can understand before you approve the fix.',
    secondaryCta: 'Request appointment',
  },
  faqs: [
    {
      question: 'What is included in an engine diagnostic at RKC?',
      answer:
        'We scan OBD-II for stored, pending, and permanent codes; review freeze-frame data; analyze live fuel trims, sensor response, and misfire counters; and perform targeted tests — smoke test for vacuum leaks, compression or leak-down for mechanical faults, scope traces for ignition patterns. You receive a written repair plan with prioritized fixes at $120/hr labor. The diagnostic fee credits toward approved repairs.',
    },
    {
      question: 'Why should I pay for diagnostics when parts stores scan for free?',
      answer:
        'Free scans read codes — they do not verify root cause. A P0171 lean code can be a vacuum leak, weak fuel pump, dirty MAF, or exhaust leak pulling false air. Throwing parts at codes wastes money. Our paid diagnostic applies professional test equipment and technician time to confirm what failed before you buy parts. The fee is credited toward repair when you approve the work.',
    },
    {
      question: 'When do you recommend a compression or leak-down test?',
      answer:
        'When misfires follow a mechanical pattern — equal on cold start, oil consumption, or coolant loss — or when fuel and ignition tests check out but power remains low. Compression identifies ring or valve sealing issues; leak-down pinpoints which valve or ring land leaks. These tests prevent approving expensive coil or injector jobs on an engine with internal wear.',
    },
    {
      question: 'Can you diagnose rough idle and stalling problems?',
      answer:
        'Yes. Rough idle traces to vacuum leaks, carbon on direct-injection valves, idle-air control faults, or misfires. We graph fuel trims at idle and off-idle, smoke-test intake plumbing, and scope ignition on cylinders that show elevated misfire counts. Denver altitude can expose marginal sensors that pass at sea level — we test under your actual driving conditions.',
    },
    {
      question: 'Do you diagnose diesel engine problems?',
      answer:
        'We handle common diesel drivability — boost leaks, DEF/SCR faults, fuel-filter restrictions, and sensor-related power loss on HD pickups and passenger diesels where equipment allows. Complex emissions-aftertreatment repairs are scoped honestly with parts availability and timeline before authorization.',
    },
    {
      question: 'How long does engine diagnostics take?',
      answer:
        'Straightforward single-code faults may resolve in an hour. Intermittent drivability, multiple codes, or mechanical follow-up tests can take longer. We communicate findings as we go and never expand scope without your approval. Same-day diagnosis is common when you call before early afternoon.',
    },
    {
      question: 'What OBD-II live data PIDs do you monitor during diagnostics?',
      answer:
        'We graph short-term and long-term fuel trims (STFT/LTFT), MAF grams-per-second vs. calculated load, O2 sensor switching voltage, misfire counters per cylinder, MAP/MAF correlation, and VVT commanded vs. actual cam angles. Freeze-frame captures RPM, coolant temp, and fuel status at the moment the fault set — critical for intermittent lean codes on cold mornings in Englewood.',
    },
  ],
};

async function main() {
  console.log(`Bifrost ${BASE} model=${SPARK}`);
  // Ping
  sparkTranslate({ ping: 'Hello' }, 'ping');

  const chunks = [
    ['breadcrumb', 'hero'],
    ['reality'],
    ['symptoms'],
    ['technical'],
    ['process'],
    ['checklist'],
    ['labor', 'faq', 'areaLabel', 'finalCta'],
    ['faqs'],
  ];
  const es = translateInChunks(ENGINE_DIAGNOSTICS_EN, 'engine-diagnostics', chunks);
  writeModule('engine-diagnostics', ENGINE_DIAGNOSTICS_EN, es);
  fs.writeFileSync(path.join(ROOT, '.tmp-engine-diagnostics-es.json'), JSON.stringify(es, null, 2));
  console.log('DONE engine-diagnostics');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
