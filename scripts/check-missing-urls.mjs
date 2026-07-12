/**
 * HEAD-check missing site image URLs — classify 404 vs OK.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function slugify(text) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function parseCsv(content) {
  const lines = content.split(/\r?\n/).filter(Boolean);
  const header = lines[0].split(',');
  return lines.slice(1).map((line) => {
    const fields = []; let current = ''; let inQuotes = false;
    for (const char of line) {
      if (char === '"') { inQuotes = !inQuotes; continue; }
      if (char === ',' && !inQuotes) { fields.push(current.trim()); current = ''; continue; }
      current += char;
    }
    fields.push(current.trim());
    const row = {}; header.forEach((k, i) => { row[k.trim()] = fields[i] ?? ''; }); return row;
  });
}

const brandsTs = fs.readFileSync(path.join(root, 'lib', 'vehicleBrands.ts'), 'utf8');
const siteKeys = new Set();
for (const match of brandsTs.matchAll(/slug: '([^']+)'[\s\S]*?commonModels: \[([\s\S]*?)\]/g)) {
  const makeSlug = match[1] === 'mercedes' ? 'mercedes-benz' : match[1];
  for (const m of [...match[2].matchAll(/'([^']+)'/g)]) siteKeys.add(`${makeSlug}::${slugify(m[1])}`);
}

const rows = parseCsv(fs.readFileSync(path.join(root, 'data', 'vehicle-images.csv'), 'utf8'));
const aliases = { bmw: { '3 series': '3-series', '5 series': '5-series' }, chevrolet: { silverado: 'silverado-1500' } };

const missing = [];
for (const slug of siteKeys) {
  const [makeSlug, modelSlug] = slug.split('::');
  const brandSlug = makeSlug === 'mercedes-benz' ? 'mercedes' : makeSlug;
  const aliasModel = aliases[brandSlug]?.[modelSlug.replace(/-/g, ' ')] ?? modelSlug;
  const row = rows.find((r) => slugify(r.Make) === makeSlug && slugify(r.Model) === aliasModel)
    ?? rows.find((r) => slugify(r.Make) === makeSlug && slugify(r.Model) === modelSlug);
  if (!row) continue;
  const webPath = row['Recommended Save Path'].replace(/^\/public/, '');
  if (!fs.existsSync(path.join(root, 'public', webPath.replace(/^\//, '')))) {
    missing.push({ slug, url: row['Best Image URL / Source Reference'] });
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const bad404 = [];
const ok = [];
for (const m of missing) {
  try {
    const r = await fetch(m.url, { method: 'HEAD', headers: { 'User-Agent': 'RKC-Automotive/1.0' } });
    if (r.status === 200) ok.push(m.slug);
    else bad404.push({ ...m, status: r.status });
    console.log(r.status, m.slug);
  } catch (e) {
    bad404.push({ ...m, status: 'err' });
    console.log('ERR', m.slug, e.message);
  }
  await sleep(4000);
}
console.log('\n404/bad:', bad404.length, bad404.map((b) => b.slug).join(', '));
console.log('OK to download:', ok.length);
