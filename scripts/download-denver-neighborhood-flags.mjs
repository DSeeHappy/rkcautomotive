/**
 * Download ALL Denver neighborhood flags from Wikimedia Commons.
 * Parses the live wiki page, skips TBD/broken/placeholder entries, rate-limits requests.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'images', 'flags', 'neighborhoods', 'denver');
fs.mkdirSync(outDir, { recursive: true });

const API =
  'https://commons.wikimedia.org/w/api.php?action=parse&page=Flags_of_counties_and_municipalities_in_Colorado&prop=text&format=json';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function slugify(name) {
  return name
    .replace(/'/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function fetchWithRetry(url, retries = 4) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(url, {
      redirect: 'follow',
      headers: { 'User-Agent': 'RKCAutomotive/1.0 (flag download; rkcautomotive.com)' },
    });
    if (res.ok) return res;
    if (res.status === 429 && attempt < retries) {
      const wait = 3000 * (attempt + 1);
      console.warn(`  Rate limited — waiting ${wait / 1000}s…`);
      await sleep(wait);
      continue;
    }
    throw new Error(`HTTP ${res.status}`);
  }
  throw new Error('Max retries exceeded');
}

async function parseDenverFlags() {
  const res = await fetch(API, {
    headers: { 'User-Agent': 'RKCAutomotive/1.0 (flag download; rkcautomotive.com)' },
  });
  const data = await res.json();
  const html = data.parse.text['*'];
  const start = html.indexOf('id="Neighborhoods_of_Denver"');
  const end = html.indexOf('<h2', start + 50);
  const section = html.slice(start, end);

  const neighborhoods = [];
  for (const cell of section.matchAll(
    /<td width="202" align="center" style="display: inline-block;">([\s\S]*?)<\/td>/g
  )) {
    const cellHtml = cell[1];
    const isBroken = cellHtml.includes('[[Image:|');
    const altMatch = cellHtml.match(/<img alt="([^"]+)"/);
    const captionMatch = cellHtml.match(
      /<tr><td width="202" align="center"><a[^>]*>([^<]+)<\/a>/
    );
    const brokenNameMatch = cellHtml.match(/\[\[Image:\|[^|]*\|[^|]*\|<a[^>]*>([^<]+)<\/a>\]\]/);
    const rawName = (captionMatch?.[1] ?? altMatch?.[1] ?? brokenNameMatch?.[1] ?? '')
      .replace(/&#39;/g, "'")
      .replace(/\s*\[N 3\]\s*$/, '')
      .trim();
    if (!rawName) continue;

    let wikiFile = null;
    const fileMatch = cellHtml.match(/href="\/wiki\/File:([^"?#]+)/);
    if (fileMatch && !isBroken) {
      const file = decodeURIComponent(fileMatch[1]);
      if (!file.includes('Placeholderflag')) wikiFile = file;
    }

    neighborhoods.push({
      name: rawName,
      slug: slugify(rawName),
      wikiFile,
      status: isBroken || !wikiFile ? 'tbd' : 'available',
    });
  }
  return neighborhoods;
}

const sharp = (await import('sharp')).default;
const neighborhoods = await parseDenverFlags();
const available = neighborhoods.filter((n) => n.status === 'available');
const tbd = neighborhoods.filter((n) => n.status === 'tbd');

console.log(`Found ${neighborhoods.length} Denver neighborhoods on Wikimedia`);
console.log(`  Available flags: ${available.length}`);
console.log(`  TBD/broken: ${tbd.length}\n`);

let downloaded = 0;
let skipped = 0;
let failed = 0;

for (const { name, slug, wikiFile } of available) {
  const local = `${slug}.webp`;
  const outPath = path.join(outDir, local);
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 1000) {
    console.log(`Skipping ${name} — ${local} already exists`);
    skipped++;
    continue;
  }
  try {
    const filePathUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(wikiFile)}`;
    console.log(`Downloading ${name} (${wikiFile})…`);
    await sleep(2500);
    const res = await fetchWithRetry(filePathUrl);
    const buf = Buffer.from(await res.arrayBuffer());
    await sharp(buf)
      .resize({ width: 1200, height: 800, fit: 'inside', withoutEnlargement: false })
      .webp({ quality: 90, effort: 4 })
      .toFile(outPath);
    const size = fs.statSync(outPath).size;
    console.log(`  → ${local} (${(size / 1024).toFixed(1)} KB)`);
    downloaded++;
  } catch (err) {
    console.warn(`  ⚠ Skipped ${name}: ${err.message}`);
    failed++;
  }
}

console.log(`\nDone. Downloaded: ${downloaded}, Skipped: ${skipped}, Failed: ${failed}, TBD on wiki: ${tbd.length}`);
