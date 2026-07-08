/**
 * Parse Wikimedia "Neighborhoods of Denver" section for flag file names.
 * Run: node scripts/parse-denver-flags.mjs
 */
import fs from 'node:fs';

const API =
  'https://commons.wikimedia.org/w/api.php?action=parse&page=Flags_of_counties_and_municipalities_in_Colorado&prop=text&format=json';

const res = await fetch(API, {
  headers: { 'User-Agent': 'RKCAutomotive/1.0 (flag parser; rkcautomotive.com)' },
});
const data = await res.json();
const html = data.parse.text['*'];

const start = html.indexOf('id="Neighborhoods_of_Denver"');
const end = html.indexOf('<h2', start + 50);
const section = html.slice(start, end > start ? end : start + 120000);

function slugify(name) {
  const normalized = name.replace(/'/g, '');
  return normalized
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** @type {{ name: string; slug: string; wikiFile: string | null; status: 'available' | 'tbd' | 'coming_soon' }[]} */
const neighborhoods = [];

for (const cell of section.matchAll(
  /<td width="202" align="center" style="display: inline-block;">([\s\S]*?)<\/td>/g
)) {
  const cellHtml = cell[1];
  const isBroken = cellHtml.includes('[[Image:|');
  const hasComingSoon =
    cellHtml.includes('cite_note-TBD') ||
    cellHtml.includes('Placeholderflag') ||
    /\[N 3\]/.test(cellHtml);

  const altMatch = cellHtml.match(/<img alt="([^"]+)"/);
  const captionMatch = cellHtml.match(
    /<tr><td width="202" align="center"><a[^>]*>([^<]+)<\/a>/
  );
  const brokenNameMatch = cellHtml.match(/\[\[Image:\|[^|]*\|[^|]*\|<a[^>]*>([^<]+)<\/a>\]\]/);
  let rawName = (captionMatch?.[1] ?? altMatch?.[1] ?? brokenNameMatch?.[1] ?? '')
    .replace(/&#39;/g, "'")
    .replace(/\s*\[N 3\]\s*$/, '')
    .trim();
  if (!rawName) continue;

  let wikiFile = null;
  const fileMatch = cellHtml.match(/href="\/wiki\/File:([^"?#]+)"/);
  if (fileMatch && !isBroken) {
    const file = decodeURIComponent(fileMatch[1]);
    if (!file.includes('Placeholderflag')) {
      wikiFile = file;
    }
  }

  let status = 'available';
  if (isBroken || !wikiFile) status = 'tbd';
  else if (hasComingSoon) status = 'coming_soon';

  neighborhoods.push({ name: rawName, slug: slugify(rawName), wikiFile, status });
}

const outPath = 'scripts/denver-flags-parsed.json';
fs.writeFileSync(outPath, JSON.stringify(neighborhoods, null, 2));

console.log(JSON.stringify(neighborhoods, null, 2));
console.error(`\nWrote ${outPath}`);
console.error(`Total: ${neighborhoods.length}`);
console.error(`Available: ${neighborhoods.filter((n) => n.status === 'available').length}`);
console.error(`Coming soon [N3]: ${neighborhoods.filter((n) => n.status === 'coming_soon').length}`);
console.error(`TBD/broken: ${neighborhoods.filter((n) => n.status === 'tbd').length}`);
