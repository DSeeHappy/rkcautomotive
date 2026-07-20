/**
 * Continuous ownership structuring — Honda/Ford/Chevy/Jeep.
 * Ultra-small smart prompts to keep Bifrost meters moving (avoid curl-56).
 * STOP on first Bifrost failure after retries.
 */
import fs from 'fs';
import path from 'path';
import { sparkRoutedRetry, LOG_DIR, ROOT } from './spark-routed.mjs';

const OUT = path.join(
  LOG_DIR,
  `phase2-own-struct-cont-${new Date().toISOString().replace(/[:.]/g, '-')}.json`,
);

const SYS =
  'RKC Phase 2. ONLY JSON. NEVER invent failure modes/years/specs. Use ONLY SOURCE. If ungrounded: Unable to verify with available data.';

/** Compact verbatim excerpts from brandFailureProfiles — one model each. */
const JOBS = [
  {
    id: 'honda-civic',
    source:
      'Oil Dilution L15B7: fuel mixes into oil on cold idles, thins viscosity, wears cam lobes. 10-speed: harsh 3rd-4th under load. Avoid 2016-2021 Civic 1.5T on short winter trips. Denver winters worsen dilution.',
  },
  {
    id: 'honda-accord',
    source:
      'V6 VCM: cylinder deactivation shreds mounts, oil blow-by fouls plugs cyl 1-4. 10-speed: harsh 3rd-4th under load. Avoid V6 without oil-fouled plug check unless VCM muzzler installed.',
  },
  {
    id: 'honda-cr-v',
    source:
      'Oil Dilution L15B7: fuel mixes into oil on cold idles, thins viscosity, wears cam lobes. Avoid 2016-2021 CR-V 1.5T on short winter trips. Denver winters worsen dilution.',
  },
  {
    id: 'honda-pilot',
    source:
      'V6 VCM: cylinder deactivation shreds mounts, oil blow-by fouls plugs cyl 1-4. 10-speed: harsh 3rd-4th under load. Avoid V6 without oil-fouled plug check unless VCM muzzler installed.',
  },
  {
    id: 'ford-f-150',
    source:
      'EcoBoost cam phaser rattle on cold starts → timing chain stretch. 10R80 CDF bushing → gear hunting/power loss. Avoid early 2017-2019 10-speed F-150s with erratic shifts. I-70 towing spikes 10R80 temps.',
  },
  {
    id: 'ford-explorer',
    source:
      '3.5L Duratec internal water pump dumps coolant into oil → destroys bearings. 10R80 CDF bushing → gear hunting. Avoid Explorers with Cyclone/Duratec V6 unless water pump replaced. I-70 towing spikes 10R80 temps.',
  },
  {
    id: 'ford-escape',
    source:
      'EcoBoost cam phaser rattle on cold starts → timing chain stretch. Duratec internal water pump can dump coolant into oil. I-70 corridor spikes transmission fluid temperatures.',
  },
  {
    id: 'ford-mustang',
    source:
      'EcoBoost cam phaser rattle on cold starts → timing chain stretch. ColoradoNotes about 10R80 I-70 towing may not apply to Mustang — omit if not grounded.',
  },
  {
    id: 'chevrolet-silverado',
    source:
      '5.3/6.2 AFM/DFM lifter collapse gouges cam, steel shards in oil. 8L90 torque converter shudder like rumble strips. Avoid 2014-2021 V8 trucks without lifter delete/history. Avoid 8-speed shudder above 40 mph.',
  },
  {
    id: 'chevrolet-tahoe',
    source:
      '5.3/6.2 AFM/DFM lifter collapse gouges cam, steel shards in oil. 8L90 torque converter shudder. Avoid 2014-2021 V8 without lifter delete/history. Avoid 8-speed shudder above 40 mph. Altitude+freeze builds PCV moisture.',
  },
  {
    id: 'chevrolet-equinox',
    source:
      '1.5L Turbo LYX PCV freeze-up: moisture freezes, crankcase pressure blows rear main seal. Colorado: altitude+freeze builds moisture in turbo PCV lines.',
  },
  {
    id: 'chevrolet-malibu',
    source:
      '1.5L Turbo LYX PCV freeze-up: moisture freezes, crankcase pressure blows rear main seal. Colorado: altitude+freeze builds moisture in turbo PCV lines.',
  },
  {
    id: 'jeep-wrangler',
    source:
      '3.6 Pentastar rocker needle bearings seize → tick/misfire. Death wobble: track bar bushings/steering box play. Avoid Pentastar with sharp metallic tick. Trail driving stresses front-end; HD track bars common.',
  },
  {
    id: 'jeep-grand-cherokee',
    source:
      '3.6 Pentastar rocker needle bearings seize → tick/misfire. Plastic oil filter housing cracks, oil/coolant pools in valley. Avoid Pentastar with metallic tick; flashlight-check valley for pooled oil.',
  },
  {
    id: 'jeep-gladiator',
    source:
      '3.6 Pentastar rocker needle bearings seize → tick/misfire. Death wobble: track bar bushings/steering box play. Trail driving stresses front-end; HD track bars common.',
  },
];

const results = { startedAt: new Date().toISOString(), calls: [], snapshots: [] };
let hardFail = null;

function callOrStop(label, user, opts = {}) {
  try {
    const r = sparkRoutedRetry('small', label, user, { system: SYS, ...opts }, 3);
    const row = {
      label,
      ok: true,
      httpStatus: r.meta.httpStatus,
      latencyMs: r.meta.latencyMs,
      resFile: r.meta.resFile,
      parsed: r.parsed,
    };
    results.calls.push(row);
    console.log(`[ok] ${label} http=${r.meta.httpStatus} ms=${r.meta.latencyMs}`);
    return r.parsed;
  } catch (err) {
    const msg = String(err.message || err);
    results.calls.push({ label, ok: false, error: msg });
    hardFail = { label, error: msg };
    console.error(`[STOP] ${label}: ${msg.slice(0, 300)}`);
    return null;
  }
}

// Keep meters warm
if (
  !callOrStop(
    'own-cont-ping',
    'Return ONLY JSON {"ok":true,"task":"ownership_struct_continuous","proof":"bifrost-live"}',
    { max_tokens: 48 },
  )
) {
  results.finishedAt = new Date().toISOString();
  results.okCount = 0;
  results.failCount = 1;
  results.hardFail = hardFail;
  fs.writeFileSync(OUT, `${JSON.stringify(results, null, 2)}\n`);
  process.exit(1);
}

for (const job of JOBS) {
  if (hardFail) break;

  // Tiny heartbeat between models so meters stay visibly moving
  if (
    !callOrStop(
      `beat-${job.id}`,
      `Return ONLY JSON {"ok":true,"next":"${job.id}"}`,
      { max_tokens: 40 },
    )
  )
    break;

  const parsed = callOrStop(
    `struct-${job.id}`,
    `Model ${job.id}. SOURCE: ${job.source}\nJSON {id:"${job.id}",intro:string,bullets:[{label:"Common issues"|"Colorado angle"|"Service notes",text:string}],faqs:[{question:string,answer:string}]}`,
    { max_tokens: 520, temperature: 0.1 },
  );
  if (!parsed) break;
  if (parsed.id && parsed.intro) results.snapshots.push(parsed);
}

results.finishedAt = new Date().toISOString();
results.okCount = results.calls.filter((c) => c.ok).length;
results.failCount = results.calls.filter((c) => !c.ok).length;
results.snapshotCount = results.snapshots.length;
results.hardFail = hardFail;
fs.writeFileSync(OUT, `${JSON.stringify(results, null, 2)}\n`);
console.log(
  `[own-cont] ok=${results.okCount} fail=${results.failCount} snapshots=${results.snapshotCount} hardFail=${hardFail ? hardFail.label : 'none'}`,
);
console.log(`[own-cont] log=${path.relative(ROOT, OUT)}`);
if (hardFail) process.exit(2);
if (results.okCount === 0) process.exit(1);
