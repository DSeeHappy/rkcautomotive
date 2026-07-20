#!/usr/bin/env node
/**
 * Run Lighthouse CLI against RKC key pages (local or production).
 * Output: scripts/.spark-logs/lh-{slug}.json + lh-summary.json
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LOG_DIR = path.join(ROOT, 'scripts', '.spark-logs');
fs.mkdirSync(LOG_DIR, { recursive: true });

const BASE = process.env.LH_BASE || 'http://localhost:3000';

const PAGES = [
  { slug: 'home', path: '/' },
  { slug: 'service-brake', path: '/services/brake-repair-englewood-co' },
  { slug: 'vehicle-gmc', path: '/vehicles/gmc/sierra-1500' },
  { slug: 'area-englewood', path: '/areas-we-serve/englewood-co' },
  { slug: 'contact', path: '/contact' },
];

function runLighthouse(url, outPath) {
  const r = spawnSync(
    'npx',
    [
      '--yes',
      'lighthouse',
      url,
      '--output=json',
      `--output-path=${outPath}`,
      '--quiet',
      '--chrome-flags=--headless --no-sandbox --disable-gpu',
      '--only-categories=performance,accessibility,best-practices,seo',
      '--form-factor=mobile',
      '--screenEmulation.mobile=true',
    ],
    { encoding: 'utf8', timeout: 180000, cwd: ROOT, shell: true },
  );
  // Windows often exits 1 on Chrome temp-dir cleanup (EPERM) after JSON is written.
  const hasJson = fs.existsSync(outPath) && fs.statSync(outPath).size > 1000;
  return { ok: hasJson, exit: r.status, stderr: (r.stderr || '').slice(-500) };
}

function extractScores(lhr) {
  const cats = lhr.categories || {};
  const audits = lhr.audits || {};
  const score = (id) => Math.round((cats[id]?.score ?? 0) * 100);
  const metric = (id) => audits[id]?.displayValue ?? audits[id]?.numericValue ?? null;
  return {
    performance: score('performance'),
    accessibility: score('accessibility'),
    bestPractices: score('best-practices'),
    seo: score('seo'),
    lcp: metric('largest-contentful-paint'),
    cls: metric('cumulative-layout-shift'),
    tbt: metric('total-blocking-time'),
    fcp: metric('first-contentful-paint'),
    si: metric('speed-index'),
    inp: audits['experimental-interaction-to-next-paint']?.displayValue ?? audits['interaction-to-next-paint']?.displayValue ?? null,
    lcpElement: audits['largest-contentful-paint-element']?.details?.items?.[0]?.node?.snippet ?? null,
    clsElements: (audits['layout-shift-elements']?.details?.items ?? []).slice(0, 3).map((i) => i.node?.snippet).filter(Boolean),
    renderBlocking: (audits['render-blocking-resources']?.details?.items ?? []).slice(0, 5).map((i) => ({ url: i.url, wastedMs: i.wastedMs })),
    unusedJs: audits['unused-javascript']?.displayValue ?? null,
    imageDelivery: audits['uses-optimized-images']?.score ?? null,
    preloadLcp: audits['prioritize-lcp-image']?.score ?? null,
    fontDisplay: audits['font-display']?.score ?? null,
  };
}

const summary = { base: BASE, ts: new Date().toISOString(), pages: [], failures: [] };

for (const page of PAGES) {
  const url = `${BASE}${page.path}`;
  const outPath = path.join(LOG_DIR, `lh-${page.slug}.json`);
  console.log(`\n[lighthouse] ${page.slug} → ${url}`);
  const { ok, exit, stderr } = runLighthouse(url, outPath);
  if (!ok) {
    summary.failures.push({ slug: page.slug, url, exit, stderr });
    summary.pages.push({ slug: page.slug, url, status: 'failed', exit, stderr: stderr.slice(0, 200) });
    console.error(`  FAILED exit=${exit}`);
    continue;
  }
  const lhr = JSON.parse(fs.readFileSync(outPath, 'utf8'));
  const scores = extractScores(lhr);
  summary.pages.push({ slug: page.slug, url, status: 'ok', ...scores });
  console.log(`  perf=${scores.performance} a11y=${scores.accessibility} bp=${scores.bestPractices} seo=${scores.seo} LCP=${scores.lcp} CLS=${scores.cls}`);
}

const summaryPath = path.join(LOG_DIR, 'lh-summary.json');
fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
console.log(`\nWrote ${path.relative(ROOT, summaryPath)}`);
if (summary.failures.length) process.exit(1);
