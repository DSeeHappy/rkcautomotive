#!/usr/bin/env node
/**
 * Submit URL(s) to IndexNow (Bing, Yandex, etc.).
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs                    # homepage
 *   node scripts/submit-indexnow.mjs --changed          # changed static pages (production deploys)
 *   node scripts/submit-indexnow.mjs --sitemap          # all sitemap URLs (batched)
 *   node scripts/submit-indexnow.mjs --changed --dry-run
 *   node scripts/submit-indexnow.mjs https://rkcautomotive.com/about
 */
import path from 'path';
import { execFileSync } from 'child_process';
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
    else if (arg === '--changed') flags.add('changed');
    else if (arg === '--dry-run') flags.add('dry-run');
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

async function submitUrl(url) {
  const params = new URLSearchParams({
    url,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
  });
  const response = await fetch(`${INDEXNOW_API}?${params}`);
  return response.status;
}

function gitLines(args) {
  try {
    return execFileSync('git', args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .split(/\r?\n/)
      .map((line) => line.trim().replaceAll('\\', '/'))
      .filter(Boolean);
  } catch {
    return [];
  }
}

function changedFiles() {
  const current = process.env.VERCEL_GIT_COMMIT_SHA || 'HEAD';
  const previous = process.env.VERCEL_GIT_PREVIOUS_SHA;
  if (previous && previous !== current) {
    const files = gitLines(['diff', '--name-only', previous, current]);
    if (files.length > 0) return files;
  }
  if (!process.env.VERCEL_GIT_COMMIT_SHA) {
    const localChanges = [
      ...gitLines(['diff', '--name-only', 'HEAD']),
      ...gitLines(['diff', '--name-only', '--cached']),
    ];
    if (localChanges.length > 0) return [...new Set(localChanges)];
  }
  return gitLines(['show', '--pretty=', '--name-only', current]);
}

function staticRouteForPage(file) {
  const match = file.match(/^app\/(.*\/)?page\.[jt]sx?$/);
  if (!match) return null;
  const segments = (match[1] || '')
    .split('/')
    .filter(Boolean)
    .filter((segment) => !(segment.startsWith('(') && segment.endsWith(')')));
  if (segments.some((segment) => segment.includes('['))) return null;
  return segments.length === 0 ? '/' : `/${segments.join('/')}`;
}

function changedUrls() {
  const files = changedFiles();
  const routes = new Set();

  for (const file of files) {
    const route = staticRouteForPage(file);
    if (route) routes.add(route);

    // These shared files change the business entity shown on the core local pages.
    if (file === 'lib/constants.ts') {
      routes.add('/');
      routes.add('/about');
      routes.add('/contact');
      routes.add('/englewood-co-auto-repair');
    }
  }

  // A deploy with source changes should still generate one fresh crawl signal.
  if (
    routes.size === 0 &&
    files.some((file) => /^(app|components|content|data|lib)\//.test(file))
  ) {
    routes.add('/');
  }

  return [...routes].map((route) => (route === '/' ? SITE_URL : `${SITE_URL}${route}`));
}

async function main() {
  const { flags, urls: cliUrls } = parseArgs(process.argv.slice(2));

  if (
    flags.has('changed') &&
    process.env.VERCEL_ENV &&
    process.env.VERCEL_ENV !== 'production' &&
    !flags.has('dry-run')
  ) {
    console.log(`IndexNow: skipped ${process.env.VERCEL_ENV} deployment`);
    return;
  }

  let urls = cliUrls;
  if (flags.has('sitemap')) {
    const routes = readSeoRoutes();
    urls = routes.map((route) => (route === '/' ? SITE_URL : `${SITE_URL}${route}`));
    console.log(`Collected ${urls.length} URLs from getAllSiteRoutes()`);
  } else if (flags.has('changed')) {
    urls = changedUrls();
    console.log(`Collected ${urls.length} changed public URL(s) from Git`);
  } else if (urls.length === 0) {
    urls = [SITE_URL];
  }

  const unique = [...new Set(urls)];
  if (unique.length === 0) {
    console.log('IndexNow: no public page changes to submit');
    return;
  }

  if (flags.has('dry-run')) {
    console.log(unique.join('\n'));
    return;
  }

  let accepted = 0;

  if (!flags.has('sitemap')) {
    for (const url of unique) {
      const status = await submitUrl(url);
      const ok = status === 200 || status === 202;
      console.log(`${url} → HTTP ${status}${ok ? ' (accepted)' : ' (check response)'}`);
      if (ok) accepted += 1;
      else process.exitCode = 1;
    }
    console.log(`\nIndexNow: streamed ${accepted}/${unique.length} URL(s) to ${INDEXNOW_API}`);
    return;
  }

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
