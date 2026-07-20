/**
 * Phase 9: Spark architecture / SEO / UX review (large → research).
 * Writes scripts/.spark-logs/phase9-review.json from Spark output only.
 */
import fs from 'fs';
import path from 'path';
import { ROOT, sparkRoutedRetry, getCallCount, LOG_DIR } from './spark-routed.mjs';

const discovery = JSON.parse(fs.readFileSync(path.join(LOG_DIR, 'discovery-local.json'), 'utf8'));

const context = {
  pageTsxCount: discovery.pageTsxCount,
  missingBrandHubs: discovery.missingBrandHubs,
  logoOk: discovery.logoOk,
  scripts: discovery.scripts,
  locked: ['no AggregateRating without data', 'no fake hreflang', 'no AMP', 'preserve RKC brand'],
  knownIssues: [
    'Tesla/Alfa/GMC/Lexus/Acura were logo-only without VEHICLE_BRANDS hubs',
    'www 525 Cloudflare SSL (infra)',
    'EN/ES client toggle shares URLs',
  ],
};

const out = sparkRoutedRetry(
  'large',
  'phase9-seo-arch',
  `You are auditing rkcautomotive.com (Next.js App Router auto shop site, Englewood CO).
Given this inventory JSON, return ONLY JSON:
{
  "priorityFixes": [{"severity":"high|med|low","area":"...","issue":"...","action":"..."}],
  "seoChecks": ["..."],
  "uxChecks": ["..."],
  "perfChecks": ["..."],
  "a11yChecks": ["..."],
  "securityChecks": ["..."],
  "verifyOnly": ["items that need Lighthouse/browser and cannot be confirmed from inventory"]
}
Inventory:
${JSON.stringify(context)}`,
  { max_tokens: 1400, temperature: 0.2 },
  3,
);

const payload = {
  via: 'bifrost-spark',
  ...out.meta,
  review: out.parsed,
};
fs.writeFileSync(path.join(LOG_DIR, 'phase9-review.json'), JSON.stringify(payload, null, 2));
console.log(`WROTE phase9-review.json calls=${getCallCount()} key=${out.meta.routingKey}`);
