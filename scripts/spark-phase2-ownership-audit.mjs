/**
 * Phase 2 ownership audit — map existing shop text into ClaimRecord topics.
 * Ping Bifrost FIRST; large → vllm/research | small → vllm/smart
 */
import fs from 'fs';
import path from 'path';
import { sparkRoutedRetry, LOG_DIR, ROOT } from './spark-routed.mjs';

const OUT = path.join(
  LOG_DIR,
  `phase2-ownership-audit-${new Date().toISOString().replace(/[:.]/g, '-')}.json`,
);

const SYS =
  'RKC Automotive Phase 2 ownership audit. Return ONLY valid JSON. NEVER invent vehicle specs, failure modes, years-to-avoid, or OEM claims. Map ONLY text provided in the user message. When unsure use Unable to verify with available data.';

function readExcerpt(file, startMarker, endMarker, max = 2400) {
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const start = src.indexOf(startMarker);
  if (start < 0) return src.slice(0, max);
  const end = endMarker ? src.indexOf(endMarker, start + startMarker.length) : -1;
  const chunk = end > start ? src.slice(start, end) : src.slice(start, start + max);
  return chunk.slice(0, max);
}

const toyotaSample = readExcerpt(
  'lib/modelReliabilityNotes.ts',
  "id: 'toyota-rav4'",
  "id: 'toyota-4runner'",
);
const hondaProfile = readExcerpt(
  'lib/brandFailureProfiles.ts',
  "id: 'honda'",
  "id: 'ford'",
);
const brandNotes = readExcerpt(
  'lib/brandReliabilityNotes.ts',
  "id: 'honda'",
  "id: 'ford'",
);

const results = { startedAt: new Date().toISOString(), calls: [] };

function safe(label, size, user, opts = {}) {
  try {
    const r = sparkRoutedRetry(size, label, user, { system: SYS, ...opts }, size === 'large' ? 4 : 5);
    results.calls.push({
      label,
      ok: true,
      model: r.meta.model,
      routingKey: r.meta.routingKey,
      httpStatus: r.meta.httpStatus,
      latencyMs: r.meta.latencyMs,
      usage: r.meta.usage,
      resFile: r.meta.resFile,
      parsed: r.parsed,
    });
    console.log(`[ok] ${label} key=${r.meta.routingKey} http=${r.meta.httpStatus}`);
  } catch (err) {
    results.calls.push({ label, ok: false, error: String(err.message || err) });
    console.error(`[fail] ${label}: ${String(err.message).slice(0, 200)}`);
  }
}

safe(
  'p2-own-ping',
  'small',
  'Return ONLY JSON {"ok":true,"task":"phase2_ownership_audit_ping","proof":"bifrost-live"}',
  { max_tokens: 120 },
);

safe(
  'p2-own-sources',
  'small',
  `JSON {task:"audit_sources",verified:[{module,purpose,entityLevel}],modelOwnershipFrom:["modelReliabilityNotes","brandFailureProfiles.commonModels"],manufacturerFrom:["brandReliabilityNotes","brandFailureProfiles"],neverCopyBrandToModelOwnership:true,gapMessage:"Unable to verify with available data."}`,
  { max_tokens: 450 },
);

safe(
  'p2-own-map-toyota',
  'small',
  `Map ONLY this existing Toyota RAV4 text into ClaimRecord topics shop_observation, common-issues, colorado-angle, service-notes, faq. Do not add text.\n---\n${toyotaSample}\n---\nJSON {modelId:"toyota-rav4",topicsMapped:[string],claimsCount:number,doNotFabricate:[string]}`,
  { max_tokens: 500 },
);

safe(
  'p2-own-map-failure',
  'large',
  `Map ONLY this Honda brandFailureProfiles excerpt into model ClaimRecords for commonModels Civic, Accord, CR-V, Pilot, Odyssey, RidgeLine. Topics: shop_observation (first failure profile), common-issues (all profiles), colorado-angle, service-notes (buyerWarning). Do not invent models or failure modes.\n---\n${hondaProfile}\n---\nJSON {brand:"honda",modelsMapped:[string],topicPlan:[{topic,sourceField}],skipWhenModelReliabilityNotes:true}`,
  { max_tokens: 1800, temperature: 0.2 },
);

safe(
  'p2-own-promotion',
  'large',
  `Promotion rules using excerpts below. brandReliabilityNotes → manufacturer shop_observation only. brandFailureProfiles.commonModels → model ownership when no modelReliabilityNotes. brandReliabilityNotes bullets must NOT copy into model ownership.\nbrandReliabilityNotes excerpt:\n${brandNotes}\nJSON {promotions:[{from,to,entityType,topics}],quarantine:[string],ownershipPopulatedWhen:[string],remainingGap:"Unable to verify with available data."}`,
  { max_tokens: 1600, temperature: 0.2 },
);

results.finishedAt = new Date().toISOString();
results.okCount = results.calls.filter((c) => c.ok).length;
results.failCount = results.calls.filter((c) => !c.ok).length;
fs.writeFileSync(OUT, `${JSON.stringify(results, null, 2)}\n`, 'utf8');
console.log(
  `[phase2-ownership-audit] wrote ${path.relative(ROOT, OUT)} ok=${results.okCount} fail=${results.failCount}`,
);
if (results.okCount === 0) process.exit(1);
