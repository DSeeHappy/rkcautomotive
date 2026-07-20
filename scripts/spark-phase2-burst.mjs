/**
 * Phase 2 continuous Spark burst — meters must move.
 * large → vllm/research | small → vllm/smart
 */
import fs from 'fs';
import path from 'path';
import { sparkRoutedRetry, LOG_DIR, ROOT } from './spark-routed.mjs';

const OUT = path.join(
  LOG_DIR,
  `phase2-burst-${new Date().toISOString().replace(/[:.]/g, '-')}.json`,
);

const SYS =
  'RKC Automotive Phase 2. Return ONLY valid JSON. NEVER invent vehicle specs, HP, torque, MPG, dimensions, or OEM claims. When unsure use Unable to verify with available data.';

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

// SMALL first — keep meters alive
safe(
  'p2-field-check',
  'small',
  'JSON {task:"field_check",verifiedFields:["make","model","yearRange_catalog"],unverifiedMustStayEmpty:["hp","torque","mpg","dimensions"],policy:string}',
  { max_tokens: 450 },
);

safe(
  'p2-pilot-pages',
  'small',
  'JSON {task:"pilot_pages",pilots:["toyota-rav4","toyota-4runner"],showShopObservations:true,hideInventedSpecs:true,gapMessage:"Unable to verify with available data."}',
  { max_tokens: 400 },
);

safe(
  'p2-claim-promote',
  'small',
  'JSON {task:"claim_promotion",promote:["shop_observation"],quarantine:["marketing_copy","brandFailureProfiles_as_fact"],neverPromoteWithoutSource:true}',
  { max_tokens: 400 },
);

safe(
  'p2-keep-shop',
  'small',
  'JSON {keep:["NAP","ASE","services","local_SEO","warranty_advocacy"],avoid:["inventory","financing","trade_in","fabricated_specs"]}',
  { max_tokens: 350 },
);

// LARGE — schema / mapping / authority structure
safe(
  'p2-schema-design',
  'large',
  'Design Phase2 knowledge schema. Hierarchy Manufacturer>Model>Generation>Year>Trim>Specs. JSON {tables:[string],verifiedFieldShape:{value,confidence,reviewStatus,sources},exitCriteria:[string],doNotFabricate:[string]}',
  { max_tokens: 2200, temperature: 0.25 },
);

safe(
  'p2-catalog-map',
  'large',
  'Catalog mapping from vehicleBrands, vehicleModels, vehicleImages, modelReliabilityNotes into knowledge graph. JSON {mappings:[{from,to,confidence,notes}],gaps:[string],pilotStrategy:string}',
  { max_tokens: 2000, temperature: 0.25 },
);

safe(
  'p2-authority-structure',
  'large',
  'Authority page structure for /vehicles/[make]/[model] Phase2 pilots. JSON {sections:[{id,title,dataSource,showIfUnverified}],ctaKeepShop:true,neverInvent:[string]}',
  { max_tokens: 1800, temperature: 0.25 },
);

results.finishedAt = new Date().toISOString();
results.okCount = results.calls.filter((c) => c.ok).length;
results.failCount = results.calls.filter((c) => !c.ok).length;
fs.writeFileSync(OUT, `${JSON.stringify(results, null, 2)}\n`, 'utf8');
console.log(`[phase2-burst] wrote ${path.relative(ROOT, OUT)} ok=${results.okCount} fail=${results.failCount}`);
if (results.okCount === 0) process.exit(1);
