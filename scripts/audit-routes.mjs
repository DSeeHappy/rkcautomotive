#!/usr/bin/env node
/**
 * Quick HTTP audit: status codes, title, canonical, h1 for sample routes.
 */
const BASE = process.env.AUDIT_BASE || 'http://localhost:3000';

const ROUTES = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/services/brake-repair-englewood-co',
  '/vehicles/gmc/sierra-1500',
  '/vehicles/lexus/rx',
  '/vehicles/acura/mdx',
  '/vehicles/tesla/model-3',
  '/vehicles/alfa-romeo/giulia',
  '/vehicles-we-service',
  '/vehicles/toyota/camry',
  '/vehicles/toyota/camry/brake-repair-service-englewood-co',
  '/areas-we-serve/englewood-co',
  '/warranty',
  '/reviews',
  '/frequently-asked-questions',
  '/pricing',
  '/privacy',
  '/terms',
  '/englewood-co-auto-repair',
  '/this-should-404',
  '/faq',
  '/services/brake-repair-englewood-co?service=brake',
];

function extract(html, re) {
  const m = html.match(re);
  return m ? m[1].replace(/&amp;/g, '&').trim() : null;
}

const issues = [];
const results = [];

for (const route of ROUTES) {
  const url = `${BASE}${route}`;
  try {
    const res = await fetch(url, { redirect: 'follow' });
    const html = await res.text();
    const title = extract(html, /<title[^>]*>([^<]+)<\/title>/i);
    const canonical = extract(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
      ?? extract(html, /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
    const h1 = extract(html, /<h1[^>]*>([^<]+)/i);
    const ogTitle = extract(html, /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/i);
    const robots = extract(html, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i);

    const row = { route, status: res.status, finalUrl: res.url, title, canonical, h1, ogTitle };
    results.push(row);

    if (route === '/this-should-404' && res.status !== 404) {
      issues.push(`${route}: expected 404, got ${res.status}`);
    }
    if (route === '/faq' && !res.url.includes('frequently-asked-questions')) {
      issues.push(`${route}: redirect to FAQ failed (${res.url})`);
    }
    if (res.status >= 400 && route !== '/this-should-404') {
      issues.push(`${route}: HTTP ${res.status}`);
    }
    if (res.status === 200 && !title) {
      issues.push(`${route}: missing <title>`);
    }
    if (res.status === 200 && route !== '/this-should-404' && !h1) {
      issues.push(`${route}: missing H1`);
    }
    if (res.status === 200 && canonical && !canonical.startsWith('https://rkcautomotive.com')) {
      issues.push(`${route}: canonical not apex (${canonical})`);
    }
    if (res.status === 200 && title && title.length > 70) {
      issues.push(`${route}: title too long (${title.length} chars)`);
    }
    if (robots && /noindex/i.test(robots) && route !== '/this-should-404') {
      issues.push(`${route}: noindex (${robots})`);
    }
  } catch (e) {
    issues.push(`${route}: fetch failed — ${e.message}`);
  }
}

console.log(`\nRoute audit — ${BASE}\n`);
for (const r of results) {
  console.log(`${r.status} ${r.route}`);
  console.log(`  title: ${r.title?.slice(0, 80) ?? 'MISSING'}`);
  console.log(`  h1: ${r.h1?.slice(0, 60) ?? 'MISSING'}`);
  if (r.canonical) console.log(`  canonical: ${r.canonical}`);
}

console.log(`\n${issues.length ? 'ISSUES' : 'All checks passed'} (${issues.length})`);
issues.forEach((i) => console.log(`  ✗ ${i}`));
process.exit(issues.length ? 1 : 0);
