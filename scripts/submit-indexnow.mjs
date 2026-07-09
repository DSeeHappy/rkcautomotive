#!/usr/bin/env node
/**
 * Submit URL(s) to IndexNow (Bing, Yandex, etc.).
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs                    # homepage
 *   node scripts/submit-indexnow.mjs --sitemap          # all sitemap URLs (batched)
 *   node scripts/submit-indexnow.mjs https://rkcautomotive.com/about
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const INDEXNOW_KEY = '97fad61e97c347309a1f078e4f810086';
const SITE_URL = 'https://rkcautomotive.com';
const INDEXNOW_HOST = 'rkcautomotive.com';
const INDEXNOW_API = 'https://api.indexnow.org/indexnow';
const BATCH_SIZE = 10_000;

function parseArgs(argv) {
  const flags = new Set();
  const urls = [];
  for (const arg of argv) {
    if (arg === '--sitemap') flags.add('sitemap');
    else if (arg.startsWith('http')) urls.push(arg);
  }
  return { flags, urls };
}

function readSeoRoutes() {
  const seoPath = path.join(root, 'lib/seo.ts');
  const content = fs.readFileSync(seoPath, 'utf8');
  if (!content.includes('getAllSiteRoutes')) {
    throw new Error('lib/seo.ts missing getAllSiteRoutes()');
  }

  const routes = new Set(['/']);

  const coreMatch = content.match(/const CORE_ROUTES = \[([\s\S]*?)\] as const/);
  if (coreMatch) {
    for (const m of coreMatch[1].matchAll(/'([^']+)'/g)) routes.add(m[1]);
  }

  for (const m of content.matchAll(/SERVICES\.map\(\(s\) => s\.href\)/g)) {
    void m;
  }
  const servicesFile = path.join(root, 'lib/constants.ts');
  const constants = fs.readFileSync(servicesFile, 'utf8');
  const servicesBlock = constants.match(/export const SERVICES = \[([\s\S]*?)\] as const/);
  if (servicesBlock) {
    for (const m of servicesBlock[1].matchAll(/href:\s*'([^']+)'/g)) routes.add(m[1]);
  }

  const areasFile = path.join(root, 'lib/serviceAreas.ts');
  const areas = fs.readFileSync(areasFile, 'utf8');
  for (const m of areas.matchAll(/href:\s*'(\/areas-we-serve\/[^']+)'/g)) routes.add(m[1]);

  const hubFile = path.join(root, 'lib/modelHubRoutes.ts');
  if (fs.existsSync(hubFile)) {
    const hub = fs.readFileSync(hubFile, 'utf8');
    for (const m of hub.matchAll(/['"`](\/vehicles\/[^'"`]+)['"`]/g)) routes.add(m[1]);
  }

  const diveFile = path.join(root, 'lib/modelDeepDiveRoutes.ts');
  if (fs.existsSync(diveFile)) {
    const dive = fs.readFileSync(diveFile, 'utf8');
    for (const m of dive.matchAll(/['"`](\/vehicles\/[^'"`]+)['"`]/g)) routes.add(m[1]);
  }

  return [...routes].map((route) => (route === '/' ? SITE_URL : `${SITE_URL}${route}`));
}

async function submitBatch(urlList) {
  const response = await fetch(INDEXNOW_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList,
    }),
  });

  return { status: response.status, count: urlList.length };
}

async function main() {
  const { flags, urls: cliUrls } = parseArgs(process.argv.slice(2));

  let urls = cliUrls;
  if (flags.has('sitemap')) {
    urls = readSeoRoutes();
    console.log(`Collected ${urls.length} URLs from sitemap routes`);
  } else if (urls.length === 0) {
    urls = [SITE_URL];
  }

  const unique = [...new Set(urls)];
  let accepted = 0;

  for (let i = 0; i < unique.length; i += BATCH_SIZE) {
    const batch = unique.slice(i, i + BATCH_SIZE);
    const { status, count } = await submitBatch(batch);
    const ok = status === 200 || status === 202;
    console.log(
      `Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${count} URL(s) → HTTP ${status}${ok ? ' (accepted)' : ' (check response)'}`,
    );
    if (ok) accepted += count;
    else process.exitCode = 1;
  }

  console.log(`\nIndexNow: submitted ${accepted}/${unique.length} URL(s) to ${INDEXNOW_API}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
