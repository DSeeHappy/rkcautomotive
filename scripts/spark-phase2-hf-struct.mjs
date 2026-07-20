/**
 * Continuous small smart ownership structuring — Honda/Ford first.
 * Keep source payloads tiny to avoid curl-56. Log every call.
 */
import fs from 'fs';
import path from 'path';
import { sparkRoutedRetry, LOG_DIR, ROOT } from './spark-routed.mjs';

const OUT = path.join(
  LOG_DIR,
  `phase2-hf-struct-${new Date().toISOString().replace(/[:.]/g, '-')}.json`,
);

const SYS =
  'RKC Phase 2. Return ONLY valid JSON. NEVER invent failure modes/years/specs. Use ONLY the SOURCE text. If not grounded → Unable to verify with available data.';

const MODELS = [
  {
    id: 'honda-civic',
    source: `1.5L Turbo (L15B7) Oil Dilution: Raw fuel passes the low-tension piston rings during cold idles, mixing directly into the engine oil crankcase, thinning out viscosity, and wearing out cam lobes prematurely. 10-Speed Automatic Planetary Gear Wear: Erratic hydraulic pressure drops cause harsh 3rd-to-4th shifts under load. BuyerWarning: Avoid 2016–2021 Honda CR-Vs and Civics with the 1.5L Turbo engine if they are only driven on short, stop-and-go winter commutes (severe oil dilution risk). ColoradoNotes: In sub-zero Denver winters, the 1.5L turbo struggles to reach optimal operating temperature on short trips, severely worsening the fuel-in-oil dilution cycle.`,
  },
  {
    id: 'honda-accord',
    source: `V6 VCM Cylinder Deactivation Failure: Earth Dreams 3.5L V6 engines shut off cylinders to save fuel, forcing the engine to run unbalanced. This shreds hydraulic motor mounts and causes heavy oil blow-by, fouling spark plugs on cylinders 1 through 4. 10-Speed Automatic Planetary Gear Wear: Erratic hydraulic pressure drops cause harsh 3rd-to-4th shifts under load. BuyerWarning: Avoid any Honda V6 without inspecting for oil-fouled spark plugs unless a VCM muzzler bypass has been installed. ColoradoNotes: In sub-zero Denver winters, the 1.5L turbo struggles to reach optimal operating temperature on short trips, severely worsening the fuel-in-oil dilution cycle.`,
  },
  {
    id: 'honda-cr-v',
    source: `1.5L Turbo (L15B7) Oil Dilution: Raw fuel passes the low-tension piston rings during cold idles, mixing directly into the engine oil crankcase, thinning out viscosity, and wearing out cam lobes prematurely. BuyerWarning: Avoid 2016–2021 Honda CR-Vs and Civics with the 1.5L Turbo engine if they are only driven on short, stop-and-go winter commutes (severe oil dilution risk). ColoradoNotes: In sub-zero Denver winters, the 1.5L turbo struggles to reach optimal operating temperature on short trips, severely worsening the fuel-in-oil dilution cycle.`,
  },
  {
    id: 'honda-pilot',
    source: `V6 VCM Cylinder Deactivation Failure: Earth Dreams 3.5L V6 engines shut off cylinders to save fuel, forcing the engine to run unbalanced. This shreds hydraulic motor mounts and causes heavy oil blow-by, fouling spark plugs on cylinders 1 through 4. 10-Speed Automatic Planetary Gear Wear: Erratic hydraulic pressure drops cause harsh 3rd-to-4th shifts under load. BuyerWarning: Avoid any Honda V6 without inspecting for oil-fouled spark plugs unless a VCM muzzler bypass has been installed. ColoradoNotes: In sub-zero Denver winters, the 1.5L turbo struggles to reach optimal operating temperature on short trips, severely worsening the fuel-in-oil dilution cycle.`,
  },
  {
    id: 'ford-f-150',
    source: `3.5L / 2.7L EcoBoost Cam Phaser Rattle: Intended oil pressure fails to lock the variable valve timing (VCT) sprockets on cold starts, causing a severe, metallic slapping noise that leads to timing chain stretch. 10R80 Transmission Valve Body Distortion: The CDF clutch drum bushing moves out of place internally on the 10-speed transmission, blocking hydraulic fluid channels and causing structural gear hunting and total loss of power. BuyerWarning: Avoid early 2017–2019 10-speed F-150s showing erratic shifts without pulling transmission adaptive learning values. ColoradoNotes: Pulling heavy trailers up the I-70 mountain corridor massively spikes transmission fluid temperatures on the 10R80 block, making auxiliary external cooling loops critical.`,
  },
  {
    id: 'ford-explorer',
    source: `3.5L Duratec Internal Water Pump Disaster: The water pump is hidden inside the front timing cover driven by the timing chain. When the internal bearing seals fail, it dumps gallons of glycol coolant directly into the engine oil pan, instantly destroying all main crankshaft bearings. 10R80 Transmission Valve Body Distortion: The CDF clutch drum bushing moves out of place internally on the 10-speed transmission, blocking hydraulic fluid channels and causing structural gear hunting and total loss of power. BuyerWarning: Avoid used Ford Explorers or Edges with the 3.5L Cyclone/Duratec V6 unless there is bulletproof proof the internal water pump has been replaced. ColoradoNotes: Pulling heavy trailers up the I-70 mountain corridor massively spikes transmission fluid temperatures on the 10R80 block, making auxiliary external cooling loops critical.`,
  },
  {
    id: 'ford-escape',
    source: `3.5L / 2.7L EcoBoost Cam Phaser Rattle: Intended oil pressure fails to lock the variable valve timing (VCT) sprockets on cold starts, causing a severe, metallic slapping noise that leads to timing chain stretch. 3.5L Duratec Internal Water Pump Disaster: The water pump is hidden inside the front timing cover driven by the timing chain. When the internal bearing seals fail, it dumps gallons of glycol coolant directly into the engine oil pan, instantly destroying all main crankshaft bearings. BuyerWarning: Avoid used Ford Explorers or Edges with the 3.5L Cyclone/Duratec V6 unless there is bulletproof proof the internal water pump has been replaced. ColoradoNotes: Pulling heavy trailers up the I-70 mountain corridor massively spikes transmission fluid temperatures on the 10R80 block, making auxiliary external cooling loops critical.`,
  },
  {
    id: 'ford-mustang',
    source: `3.5L / 2.7L EcoBoost Cam Phaser Rattle: Intended oil pressure fails to lock the variable valve timing (VCT) sprockets on cold starts, causing a severe, metallic slapping noise that leads to timing chain stretch. ColoradoNotes: Pulling heavy trailers up the I-70 mountain corridor massively spikes transmission fluid temperatures on the 10R80 block, making auxiliary external cooling loops critical. BuyerWarning: Avoid early 2017–2019 10-speed F-150s showing erratic shifts without pulling transmission adaptive learning values.`,
  },
];

const results = { startedAt: new Date().toISOString(), calls: [], snapshots: [] };

function safe(label, user, opts = {}) {
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
    if (r.parsed?.id && r.parsed?.intro) results.snapshots.push(r.parsed);
    console.log(`[ok] ${label} http=${r.meta.httpStatus} ms=${r.meta.latencyMs}`);
    return r.parsed;
  } catch (err) {
    results.calls.push({ label, ok: false, error: String(err.message || err) });
    console.error(`[fail] ${label}: ${String(err.message).slice(0, 220)}`);
    return null;
  }
}

safe(
  'hf-ping',
  'Return ONLY JSON {"ok":true,"task":"honda_ford_struct_ping","proof":"bifrost-live"}',
  { max_tokens: 64 },
);

for (const m of MODELS) {
  safe(
    `hf-${m.id}`,
    `Structure SOURCE into modelReliabilityNotes for ${m.id}. Map failures→Common issues, ColoradoNotes→Colorado angle, BuyerWarning→Service notes. 1 FAQ from SOURCE only.\nSOURCE:\n${m.source}\nJSON {id:"${m.id}",intro:string,bullets:[{label:string,text:string}],faqs:[{question:string,answer:string}]}`,
    { max_tokens: 650, temperature: 0.1 },
  );
}

results.finishedAt = new Date().toISOString();
results.okCount = results.calls.filter((c) => c.ok).length;
results.failCount = results.calls.filter((c) => !c.ok).length;
results.snapshotCount = results.snapshots.length;
fs.writeFileSync(OUT, `${JSON.stringify(results, null, 2)}\n`);
console.log(
  `[hf-struct] ok=${results.okCount} fail=${results.failCount} snapshots=${results.snapshotCount} log=${path.relative(ROOT, OUT)}`,
);
if (results.okCount === 0) process.exit(1);
