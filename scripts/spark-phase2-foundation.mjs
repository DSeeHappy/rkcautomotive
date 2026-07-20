/**
 * Phase 2 Knowledge DB foundation — Spark schema review + field-check batches.
 * large → vllm/research | small → vllm/smart
 */
import fs from 'fs';
import path from 'path';
import { sparkRoutedRetry, LOG_DIR, ROOT } from './spark-routed.mjs';

const OUT = path.join(LOG_DIR, `phase2-foundation-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);

const CTX = `RKC Phase 2 knowledge layer (implemented):
- lib/knowledge/types.ts — Manufacturer, Model, Generation, Year, Trim, Spec categories, Claim, VerifiedField with confidence + sources
- lib/knowledge/buildCatalog.ts — migrates vehicleBrands, vehicleModels, vehicleImages year ranges, modelReliabilityNotes as shop_observation claims
- lib/knowledge/db-schema.ts — Postgres-ready DDL mirror
- Pilot pages: /vehicles/toyota/rav4 and /vehicles/toyota/4runner wired to ModelKnowledgeOverview
- Policy: never fabricate HP/torque/OEM specs; gaps = "Unable to verify with available data."
- NOT building: AI chat, comparison engine, community, CMS`;

const SYS =
  'RKC Automotive Phase 2 architecture reviewer. Return ONLY valid JSON. Never suggest inventing vehicle specs. Shop-first repair site.';

const results = { startedAt: new Date().toISOString(), calls: [] };

function push(label, r) {
  results.calls.push({
    label,
    model: r.meta.model,
    routingKey: r.meta.routingKey,
    httpStatus: r.meta.httpStatus,
    latencyMs: r.meta.latencyMs,
    usage: r.meta.usage,
    resFile: r.meta.resFile,
    parsed: r.parsed,
  });
  console.log(`[ok] ${label} key=${r.meta.routingKey} http=${r.meta.httpStatus} ms=${r.meta.latencyMs}`);
}

try {
  console.log('[phase2] research schema review');
  push(
    'schemaReview',
    sparkRoutedRetry(
      'large',
      'phase2-schema',
      `${CTX}\n\nReview the TypeScript knowledge schema design. JSON keys: verdict, strengths, gaps, migrationRisks, phase3Recommendations, dataIntegrityChecks`,
      { system: SYS, max_tokens: 2200, temperature: 0.25 },
      5,
    ),
  );

  console.log('[phase2] smart field policy check');
  push(
    'fieldPolicy',
    sparkRoutedRetry(
      'small',
      'phase2-field-policy',
      `${CTX}\n\nJSON {approvedPolicies:string[5], forbiddenPatterns:string[5], pilotReadiness:"ready"|"needs_work", oneLineVerdict:string}`,
      { system: SYS, max_tokens: 500 },
      4,
    ),
  );

  console.log('[phase2] research content structure');
  push(
    'contentStructure',
    sparkRoutedRetry(
      'large',
      'phase2-content-structure',
      `${CTX}\n\nJSON {overviewSections:[{id,title,purpose,dataSource}], specCategories:[{id,priority,verificationPath}], claimsPromotion:{promoteNow,quarantineUntilSourced}}`,
      { system: SYS, max_tokens: 1800, temperature: 0.25 },
      5,
    ),
  );

  console.log('[phase2] smart pilot sanity');
  push(
    'pilotSanity',
    sparkRoutedRetry(
      'small',
      'phase2-pilot-sanity',
      'Toyota RAV4 and 4Runner pilot hubs — JSON {pilots:[{model,showVerified,showShopObservations,hideInventedSpecs}],honestGapMessage}',
      { system: SYS, max_tokens: 450 },
      4,
    ),
  );

  results.finishedAt = new Date().toISOString();
  results.callCount = results.calls.length;
  fs.writeFileSync(OUT, `${JSON.stringify(results, null, 2)}\n`, 'utf8');
  console.log(`[phase2] wrote ${path.relative(ROOT, OUT)} (${results.callCount} calls)`);
} catch (err) {
  results.error = String(err.message || err);
  fs.writeFileSync(OUT, `${JSON.stringify(results, null, 2)}\n`, 'utf8');
  console.error('[phase2] failed:', err.message);
  process.exit(1);
}
