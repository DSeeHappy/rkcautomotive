/**
 * Phase 9 as tiny smart checklist items (avoids long research resets).
 * Writes scripts/.spark-logs/phase9-review.json from Spark only.
 */
import fs from 'fs';
import path from 'path';
import { sparkRoutedRetry, getCallCount, LOG_DIR } from './spark-routed.mjs';

const discovery = JSON.parse(fs.readFileSync(path.join(LOG_DIR, 'discovery-local.json'), 'utf8'));

const items = [
  {
    id: 'seo',
    prompt: `RKC Automotive Next.js site. Inventory: ${JSON.stringify({ pages: discovery.pageTsxCount, hubsMissing: discovery.missingBrandHubs, logos: discovery.logoOk })}. Return ONLY JSON: {"area":"seo","checks":["3 short actionable SEO checks"],"severity":"med"}`,
  },
  {
    id: 'ux',
    prompt: `RKC Automotive auto shop site, Englewood CO. New brand hubs: GMC Lexus Acura Tesla Alfa. Return ONLY JSON: {"area":"ux","checks":["3 short UX checks for BrandTabs/vehicles"],"priority":"med"}`,
  },
  {
    id: 'security',
    prompt: `Next.js site with CSP headers, mailto contact form, no AggregateRating. Return ONLY JSON: {"area":"security","checks":["3 short security checks"],"priority":"low"}`,
  },
];

const reviews = [];
try {
  for (const item of items) {
    const out = sparkRoutedRetry('small', `phase9-${item.id}`, item.prompt, { max_tokens: 280 }, 3);
    reviews.push({ ...out.parsed, meta: out.meta });
  }
} catch (err) {
  console.error('PHASE9 PARTIAL FAIL — saving what we have. Do not invent.');
  console.error(String(err.message || err).slice(0, 300));
  if (!reviews.length) process.exit(1);
}

const payload = {
  via: 'bifrost-spark',
  method: 'tiny-smart-checklist',
  calls: getCallCount(),
  reviews,
};
fs.writeFileSync(path.join(LOG_DIR, 'phase9-review.json'), JSON.stringify(payload, null, 2));
console.log(`WROTE phase9-review.json items=${reviews.length} calls=${getCallCount()}`);
