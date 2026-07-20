/**
 * Phase 2 ownership — structure brandFailureProfiles into modelReliabilityNotes JSON.
 * Ping Bifrost FIRST; one model per smart call with COMPACT source JSON (avoid curl-56).
 */
import fs from 'fs';
import path from 'path';
import { sparkRoutedRetry, LOG_DIR, ROOT } from './spark-routed.mjs';

const OUT = path.join(
  LOG_DIR,
  `phase2-ownership-structured-${new Date().toISOString().replace(/[:.]/g, '-')}.json`,
);

const SYS =
  'RKC Automotive Phase 2 ownership structurer. Return ONLY valid JSON. NEVER invent vehicle specs, failure modes, years, or OEM claims. Use ONLY text in source JSON verbatim or lightly adapted for the named model. Omit failure modes that clearly do not apply. When unsure use Unable to verify with available data.';

/** Verbatim fields from lib/brandFailureProfiles.ts — compact for small Spark prompts. */
const SOURCE = {
  honda: {
    failureProfiles: [
      {
        title: '1.5L Turbo (L15B7) Oil Dilution',
        description:
          'Raw fuel passes the low-tension piston rings during cold idles, mixing directly into the engine oil crankcase, thinning out viscosity, and wearing out cam lobes prematurely.',
      },
      {
        title: 'V6 VCM Cylinder Deactivation Failure',
        description:
          'Earth Dreams 3.5L V6 engines shut off cylinders to save fuel, forcing the engine to run unbalanced. This shreds hydraulic motor mounts and causes heavy oil blow-by, fouling spark plugs on cylinders 1 through 4.',
      },
      {
        title: '10-Speed Automatic Planetary Gear Wear',
        description:
          'Erratic hydraulic pressure drops cause harsh 3rd-to-4th shifts under load.',
      },
    ],
    buyerWarning:
      'Avoid 2016–2021 Honda CR-Vs and Civics with the 1.5L Turbo engine if they are only driven on short, stop-and-go winter commutes (severe oil dilution risk). Avoid any Honda V6 without inspecting for oil-fouled spark plugs unless a VCM muzzler bypass has been installed.',
    coloradoNotes:
      'In sub-zero Denver winters, the 1.5L turbo struggles to reach optimal operating temperature on short trips, severely worsening the fuel-in-oil dilution cycle.',
  },
  ford: {
    failureProfiles: [
      {
        title: '3.5L / 2.7L EcoBoost Cam Phaser Rattle',
        description:
          'Intended oil pressure fails to lock the variable valve timing (VCT) sprockets on cold starts, causing a severe, metallic slapping noise that leads to timing chain stretch.',
      },
      {
        title: '10R80 Transmission Valve Body Distortion',
        description:
          'The CDF clutch drum bushing moves out of place internally on the 10-speed transmission, blocking hydraulic fluid channels and causing structural gear hunting and total loss of power.',
      },
      {
        title: '3.5L Duratec Internal Water Pump Disaster',
        description:
          'The water pump is hidden inside the front timing cover driven by the timing chain. When the internal bearing seals fail, it dumps gallons of glycol coolant directly into the engine oil pan, instantly destroying all main crankshaft bearings.',
      },
    ],
    buyerWarning:
      'Avoid used Ford Explorers or Edges with the 3.5L Cyclone/Duratec V6 unless there is bulletproof proof the internal water pump has been replaced. Avoid early 2017–2019 10-speed F-150s showing erratic shifts without pulling transmission adaptive learning values.',
    coloradoNotes:
      'Pulling heavy trailers up the I-70 mountain corridor massively spikes transmission fluid temperatures on the 10R80 block, making auxiliary external cooling loops critical.',
  },
  chevrolet: {
    failureProfiles: [
      {
        title: '5.3L / 6.2L EcoTec3 Lifter Collapse (AFM/DFM)',
        description:
          'The internal locking pins inside the fuel-management lifters jam mechanically. The lifter turns sideways and gouges the camshaft lobe, sending hardened steel shards through the engine oil galleys.',
      },
      {
        title: '8L90 8-Speed Torque Converter Shudder',
        description:
          'Hydroscopic transmission fluid selection causes the torque converter clutch to constantly cycle and slip, creating a violent vibration that feels like driving over rumble strips.',
      },
      {
        title: '1.5L Turbo (LYX) PCV Freeze-Up',
        description:
          'The PCV system accumulates moisture, which freezes solid in extreme cold, building extreme crankcase pressure until it blows out the rear main engine crankshaft seal.',
      },
    ],
    buyerWarning:
      'Avoid 2014–2021 Chevy/GMC trucks with 5.3L or 6.2L V8 engines unless a mechanical lifter delete has been performed or extensive valvetrain service history is provided. Avoid any 8-speed GM truck displaying a shudder above 40 MPH.',
    coloradoNotes:
      'The high-altitude pressure differential combined with freezing mountain gaps causes rapid moisture build-up inside GM eco-boost and small-displacement turbo PCV lines.',
  },
  jeep: {
    failureProfiles: [
      {
        title: '3.6L Pentastar Rocker Arm Needle Bearing Failure',
        description:
          'The tiny internal needle bearings inside the roller rocker arms seize up. The rocker arm drops and digs directly into the intake/exhaust camshaft lobes, causing a loud ticking noise and throwing misfire codes.',
      },
      {
        title: 'Plastic Oil Filter Housing Crack',
        description:
          'The plastic oil cooler assembly mounted deep in the engine "V" under the intake manifold cracks due to over-tightening or heat, pooling raw oil and engine coolant inside the engine block valley.',
      },
      {
        title: 'Wrangler Steering Gear Box Play ("Death Wobble")',
        description:
          'Widespread wear on front track bar bushings and loose internal steering box tolerances cause violent, uncontrollable front-end shaking after hitting highway bumps.',
      },
    ],
    buyerWarning:
      'Avoid any 3.6L Pentastar engine displaying a sharp, metallic tick from the valve covers. Look straight down past the intake manifold with a flashlight to verify there is no pooled engine oil in the block valley.',
    coloradoNotes:
      'Rocky Mountain trail driving puts extreme lateral stress on Jeep front-end components, making heavy-duty tracking bars and stabilizer upgrades a common necessity.',
  },
};

const TARGETS = [
  { brand: 'honda', model: 'Civic', vehicleType: 'sedan', apply: ['1.5L Turbo', '10-Speed'] },
  { brand: 'honda', model: 'Accord', vehicleType: 'sedan', apply: ['V6 VCM', '10-Speed', '1.5L Turbo'] },
  { brand: 'honda', model: 'CR-V', vehicleType: 'suv', apply: ['1.5L Turbo', '10-Speed'] },
  { brand: 'honda', model: 'Pilot', vehicleType: 'suv', apply: ['V6 VCM', '10-Speed'] },
  { brand: 'ford', model: 'F-150', vehicleType: 'truck', apply: ['EcoBoost', '10R80'] },
  { brand: 'ford', model: 'Explorer', vehicleType: 'suv', apply: ['Duratec Water Pump', '10R80'] },
  { brand: 'ford', model: 'Escape', vehicleType: 'suv', apply: ['EcoBoost', 'Duratec Water Pump'] },
  { brand: 'ford', model: 'Mustang', vehicleType: 'performance', apply: ['EcoBoost'] },
  { brand: 'chevrolet', model: 'Silverado', vehicleType: 'truck', apply: ['AFM/DFM', '8L90'] },
  { brand: 'chevrolet', model: 'Tahoe', vehicleType: 'suv', apply: ['AFM/DFM', '8L90'] },
  { brand: 'chevrolet', model: 'Equinox', vehicleType: 'suv', apply: ['1.5L Turbo PCV'] },
  { brand: 'chevrolet', model: 'Malibu', vehicleType: 'sedan', apply: ['1.5L Turbo PCV'] },
  { brand: 'jeep', model: 'Wrangler', vehicleType: 'suv', apply: ['Pentastar', 'Death Wobble'] },
  { brand: 'jeep', model: 'Grand Cherokee', vehicleType: 'suv', apply: ['Pentastar', 'Oil Filter Housing'] },
  { brand: 'jeep', model: 'Gladiator', vehicleType: 'truck', apply: ['Pentastar', 'Death Wobble'] },
];

const results = { startedAt: new Date().toISOString(), calls: [], snapshots: [] };

function safe(label, user, opts = {}) {
  try {
    const r = sparkRoutedRetry('small', label, user, { system: SYS, ...opts }, 4);
    results.calls.push({
      label,
      ok: true,
      httpStatus: r.meta.httpStatus,
      latencyMs: r.meta.latencyMs,
      resFile: r.meta.resFile,
      parsed: r.parsed,
    });
    if (r.parsed?.intro) results.snapshots.push(r.parsed);
    console.log(`[ok] ${label} http=${r.meta.httpStatus}`);
    return r.parsed;
  } catch (err) {
    results.calls.push({ label, ok: false, error: String(err.message || err) });
    console.error(`[fail] ${label}: ${String(err.message).slice(0, 200)}`);
    return null;
  }
}

safe(
  'p2-struct-ping',
  'Return ONLY JSON {"ok":true,"task":"phase2_ownership_structured_ping","proof":"bifrost-live"}',
  { max_tokens: 80 },
);

for (const t of TARGETS) {
  const modelId = `${t.brand}-${t.model.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const src = JSON.stringify(SOURCE[t.brand]);
  safe(
    `p2-struct-${modelId}`,
    `Model: ${t.brand} ${t.model} (${t.vehicleType}). Relevant failure modes: ${t.apply.join(', ')}.\nSOURCE=${src}\nReturn JSON {id:"${modelId}",intro:string,bullets:[{label:"Common issues"|"Colorado angle"|"Service notes",text:string}],faqs:[{question:string,answer:string}],sourceFieldsUsed:[string]}`,
    { max_tokens: 750, temperature: 0.15 },
  );
}

results.finishedAt = new Date().toISOString();
results.okCount = results.calls.filter((c) => c.ok).length;
results.failCount = results.calls.filter((c) => !c.ok).length;
results.snapshotCount = results.snapshots.length;
fs.writeFileSync(OUT, `${JSON.stringify(results, null, 2)}\n`, 'utf8');
console.log(
  `[phase2-ownership-structured] ok=${results.okCount} fail=${results.failCount} snapshots=${results.snapshotCount}`,
);
