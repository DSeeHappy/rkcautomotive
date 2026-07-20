import fs from 'fs';
import path from 'path';
import { sparkRoutedRetry, LOG_DIR, ROOT } from './spark-routed.mjs';

const OUT = path.join(LOG_DIR, `phase2-foundation-retry-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
const SYS = 'RKC Phase 2 reviewer. Return ONLY valid JSON. Never invent vehicle specs.';
const results = { startedAt: new Date().toISOString(), calls: [] };

function safe(label, size, user, opts = {}) {
  try {
    const r = sparkRoutedRetry(size, label, user, { system: SYS, ...opts }, size === 'large' ? 3 : 4);
    results.calls.push({
      label,
      ok: true,
      routingKey: r.meta.routingKey,
      httpStatus: r.meta.httpStatus,
      latencyMs: r.meta.latencyMs,
      resFile: r.meta.resFile,
      parsed: r.parsed,
    });
    console.log(`[ok] ${label}`);
  } catch (err) {
    results.calls.push({ label, ok: false, error: String(err.message || err) });
    console.error(`[fail] ${label}: ${String(err.message).slice(0, 120)}`);
  }
}

safe(
  'fieldPolicy',
  'small',
  'Phase2 VerifiedField + shop_observation claims + empty OEM specs. JSON {approvedPolicies:string[5],forbiddenPatterns:string[5],pilotReadiness,pilotReadinessReason,oneLineVerdict}',
  { max_tokens: 500 },
);

safe(
  'pilotSanity',
  'small',
  'Toyota RAV4 and 4Runner pilot hubs. JSON {pilots:[{model,showVerified,showShopObservations,hideInventedSpecs}],honestGapMessage}',
  { max_tokens: 450 },
);

safe(
  'schemaReview',
  'large',
  'Review RKC lib/knowledge TypeScript schema: Manufacturer, Model, Generation, Year, Trim, Spec categories, Claim, VerifiedField. JSON {verdict,strengths,gaps,migrationRisks,phase3Recommendations}',
  { max_tokens: 2000, temperature: 0.25 },
);

safe(
  'contentStructure',
  'large',
  'Phase2 overview sections for vehicle authority pages. JSON {overviewSections:[{id,title,purpose}],specCategories:[{id,priority}],claimsPromotion:{promoteNow,quarantine}}',
  { max_tokens: 1600, temperature: 0.25 },
);

results.finishedAt = new Date().toISOString();
fs.writeFileSync(OUT, `${JSON.stringify(results, null, 2)}\n`, 'utf8');
console.log(`wrote ${path.relative(ROOT, OUT)}`);
