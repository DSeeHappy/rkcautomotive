#!/usr/bin/env node
/**
 * Bifrost analysis of Lighthouse summary JSON.
 * large → vllm/research; small → vllm/smart
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sparkRoutedRetry, LOG_DIR, ROOT } from './spark-routed.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const summaryPath = process.argv[2] || path.join(LOG_DIR, 'lh-summary-prod.json');
const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));

const payload = JSON.stringify({
  base: summary.base,
  pages: summary.pages.map((p) => ({
    slug: p.slug,
    performance: p.performance,
    accessibility: p.accessibility,
    lcp: p.lcp,
    cls: p.cls,
    tbt: p.tbt,
    fcp: p.fcp,
  })),
  failures: summary.failures?.length ?? 0,
});

const user = `RKC Automotive Next.js site Lighthouse mobile audit (production).
Data: ${payload}
Return ONLY JSON:
{
  "summary": "1-2 sentence overall CWV assessment",
  "homeFocus": "biggest home-page LCP/TBT issue in plain English",
  "fixes": ["3 actionable code fixes already applied or recommended — no generic advice"],
  "scoreBand": "green|amber|red",
  "verified": true
}`;

console.log('[spark] lighthouse review via smart (compact payload)...');
const { parsed, meta } = sparkRoutedRetry('small', 'lh-review', user, { max_tokens: 700 });
const out = {
  via: 'bifrost-spark',
  ts: new Date().toISOString(),
  summaryFile: path.relative(ROOT, summaryPath),
  model: meta.model,
  resFile: meta.resFile,
  review: parsed,
};
const outPath = path.join(LOG_DIR, 'lh-spark-review.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log('Wrote', path.relative(ROOT, outPath));
console.log(JSON.stringify(parsed, null, 2));
