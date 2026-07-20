/**
 * Phase 2 multi-make expansion — wire brands with catalog + brandReliabilityNotes.
 * Ping Bifrost FIRST; large → vllm/research | small → vllm/smart
 */
import fs from 'fs';
import path from 'path';
import { sparkRoutedRetry, LOG_DIR, ROOT } from './spark-routed.mjs';

const OUT = path.join(
  LOG_DIR,
  `phase2-multi-make-${new Date().toISOString().replace(/[:.]/g, '-')}.json`,
);

const SYS =
  'RKC Automotive Phase 2 multi-make expansion. Return ONLY valid JSON. NEVER invent vehicle specs, HP, torque, MPG, dimensions, or OEM claims. When unsure use Unable to verify with available data.';

const WIRED_BRANDS = [
  'toyota',
  'honda',
  'ford',
  'chevrolet',
  'bmw',
  'mercedes',
  'audi',
  'nissan',
  'subaru',
  'jeep',
  'ram',
  'hyundai',
  'kia',
  'volkswagen',
  'gmc',
  'lexus',
  'acura',
  'tesla',
  'alfa-romeo',
];

const MODEL_CLAIMS = [
  'toyota-rav4',
  'toyota-4runner',
  'toyota-highlander',
  'toyota-camry',
  'toyota-corolla',
];

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

// Mandatory ping first
safe(
  'p2-multi-ping',
  'small',
  'Return ONLY JSON {"ok":true,"task":"phase2_multi_make_ping","proof":"bifrost-live"}',
  { max_tokens: 120 },
);

safe(
  'p2-multi-brands',
  'small',
  `JSON {task:"wire_brands",brands:${JSON.stringify(WIRED_BRANDS)},source:"brandReliabilityNotes",modelClaimsFrom:"modelReliabilityNotes",modelsWithClaims:${JSON.stringify(MODEL_CLAIMS)},specsEmpty:true,ownershipGap:"Unable to verify with available data."}`,
  { max_tokens: 450 },
);

safe(
  'p2-multi-phase3',
  'small',
  'JSON {task:"phase3_all_wired",sections:["overview","engineering","ownership","enthusiast","comparison"],populateOverviewFrom:"catalog_identity",populateOwnershipFrom:"modelReliabilityNotes_only",emptyWhenNoClaims:true}',
  { max_tokens: 400 },
);

safe(
  'p2-multi-brand-claims',
  'large',
  `Map brandReliabilityNotes into manufacturer ClaimRecords for ${WIRED_BRANDS.length} brands. Topics: reliable-picks, generally-solid, higher-scrutiny, colorado-angle. JSON {brands:[{id,claimsMapped,reliablePicksCount}],doNotFabricate:[string],modelOwnershipOnlyWhen:[string]}`,
  { max_tokens: 2200, temperature: 0.25 },
);

safe(
  'p2-multi-hub-wire',
  'large',
  `Wire /vehicles/[make]/[model] hubs for brands with brandReliabilityNotes. ${WIRED_BRANDS.join(', ')}. Phase 3 shells on all catalog models in those makes. JSON {wiredBrands:[string],modelCount:127,showModelKnowledgeOverview:true,phase3ForAll:true,ownershipEmptyUnless:"modelReliabilityNotes"}`,
  { max_tokens: 1800, temperature: 0.25 },
);

safe(
  'p2-multi-promotion',
  'large',
  'Claim promotion rules for multi-make expansion. brandReliabilityNotes → manufacturer shop_observation. modelReliabilityNotes → model shop_observation. No brand claims copied to model ownership. JSON {promotions:[{from,to,entityType}],quarantine:[string],nextSteps:[string]}',
  { max_tokens: 1600, temperature: 0.25 },
);

results.finishedAt = new Date().toISOString();
results.okCount = results.calls.filter((c) => c.ok).length;
results.failCount = results.calls.filter((c) => !c.ok).length;
fs.writeFileSync(OUT, `${JSON.stringify(results, null, 2)}\n`, 'utf8');
console.log(
  `[phase2-multi-make] wrote ${path.relative(ROOT, OUT)} ok=${results.okCount} fail=${results.failCount}`,
);
if (results.okCount === 0) process.exit(1);
