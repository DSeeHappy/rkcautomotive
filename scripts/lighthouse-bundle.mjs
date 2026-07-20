#!/usr/bin/env node
/**
 * Merge local + production Lighthouse summaries for audit report.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOG = path.join(__dirname, '.spark-logs');

function read(name) {
  const p = path.join(LOG, name);
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : null;
}

const prod = read('lh-summary-prod.json');
const localDev = read('lh-summary-local-dev.json') || null;
const localProdBuild = read('lh-summary-prod-build.json');

// Preserve prod as canonical; save local dev if we have it
if (!localDev && fs.existsSync(path.join(LOG, 'lh-summary.json'))) {
  const cur = read('lh-summary.json');
  if (cur?.base?.includes('localhost:3000')) {
    fs.writeFileSync(path.join(LOG, 'lh-summary-local-dev.json'), JSON.stringify(cur, null, 2));
  }
}

const out = {
  ts: new Date().toISOString(),
  canonical: 'https://rkcautomotive.com (mobile Lighthouse CLI)',
  production: prod,
  localProdBuild,
  sparkReview: fs.existsSync(path.join(LOG, 'lh-spark-review.json'))
    ? read('lh-spark-review.json')
    : { status: 'failed', reason: 'Bifrost curl 56 during this session — see session-ledger.jsonl' },
};
fs.writeFileSync(path.join(LOG, 'lh-audit-bundle.json'), JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
