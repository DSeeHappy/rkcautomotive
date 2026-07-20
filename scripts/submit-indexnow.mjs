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
import { collectSitemapRoutes } from './collect-sitemap-routes.mjs';

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
  return collectSitemapRoutes();
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
    const routes = readSeoRoutes();
    urls = routes.map((route) => (route === '/' ? SITE_URL : `${SITE_URL}${route}`));
    console.log(`Collected ${urls.length} URLs from getAllSiteRoutes()`);
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
