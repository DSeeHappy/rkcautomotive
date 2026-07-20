/**
 * Phase 2 expansion Spark batch — map Toyota pilots + Phase 3 section shells.
 * large → vllm/research | small → vllm/smart
 */
import fs from 'fs';
import path from 'path';
import { sparkRoutedRetry, LOG_DIR, ROOT } from './spark-routed.mjs';

const OUT = path.join(
  LOG_DIR,
  `phase2-expand-${new Date().toISOString().replace(/[:.]/g, '-')}.json`,
);

const SYS =
  'RKC Automotive Phase 2 expansion. Return ONLY valid JSON. NEVER invent vehicle specs, HP, torque, MPG, dimensions, or OEM claims. When unsure use Unable to verify with available data.';

const PILOTS = [
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

safe(
  'p2-expand-pilots',
  'small',
  `JSON {task:"expand_pilots",pilots:${JSON.stringify(PILOTS)},wireKnowledgeOverview:true,claimsFrom:"modelReliabilityNotes",specsEmpty:true}`,
  { max_tokens: 350 },
);

safe(
  'p2-phase3-shells',
  'small',
  'JSON {task:"phase3_shells",sections:["overview","engineering","ownership","enthusiast","comparison"],populateFrom:["shop_observation","catalog_identity"],emptySections:["engineering","enthusiast","comparison"],gapMessage:"Unable to verify with available data."}',
  { max_tokens: 400 },
);

safe(
  'p2-ownership-map',
  'small',
  'JSON {task:"ownership_map",topics:["common-issues","colorado-angle","service-notes","faq"],source:"modelReliabilityNotes",confidence:"medium",reviewStatus:"shop_observation"}',
  { max_tokens: 350 },
);

safe(
  'p2-toyota-batch',
  'large',
  `Map Toyota models with modelReliabilityNotes into lib/knowledge catalog. Pilots: ${PILOTS.join(', ')}. JSON {models:[{id,claimsMapped,generationsEmpty:boolean,pilot:boolean}],doNotFabricate:[string],phase3SectionPlan:[{id,dataSource,showWhenEmpty:boolean}]}`,
  { max_tokens: 2200, temperature: 0.25 },
);

safe(
  'p2-phase3-layout',
  'large',
  'Phase 3 authority layout for /vehicles/[make]/[model] pilots. Sections Overview Engineering Ownership Enthusiast Comparison. JSON {sections:[{id,title,allowedSources,emptyMessage}],neverInvent:[string],keepShopCTA:true}',
  { max_tokens: 1800, temperature: 0.25 },
);

safe(
  'p2-catalog-claims',
  'large',
  'Catalog claim promotion rules. modelReliabilityNotes → ClaimRecord shop_observation. vehicleImages → yearRange medium. vehicleBrands/models → identity high. JSON {promotions:[{from,to,confidence}],quarantine:[string],nextBatchBrands:[string]}',
  { max_tokens: 1600, temperature: 0.25 },
);

results.finishedAt = new Date().toISOString();
results.okCount = results.calls.filter((c) => c.ok).length;
results.failCount = results.calls.filter((c) => !c.ok).length;
fs.writeFileSync(OUT, `${JSON.stringify(results, null, 2)}\n`, 'utf8');
console.log(`[phase2-expand] wrote ${path.relative(ROOT, OUT)} ok=${results.okCount} fail=${results.failCount}`);
if (results.okCount === 0) process.exit(1);
