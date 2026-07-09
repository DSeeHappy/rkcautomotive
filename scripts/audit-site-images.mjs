/**
 * Audit site-relevant vehicle images — report missing WebP files.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseCsv(content) {
  const lines = content.split(/\r?\n/).filter(Boolean);
  const header = lines[0].split(',');
  return lines.slice(1).map((line) => {
    const fields = [];
    let current = '';
    let inQuotes = false;
    for (const char of line) {
      if (char === '"') { inQuotes = !inQuotes; continue; }
      if (char === ',' && !inQuotes) { fields.push(current.trim()); current = ''; continue; }
      current += char;
    }
    fields.push(current.trim());
    const row = {};
    header.forEach((k, i) => { row[k.trim()] = fields[i] ?? ''; });
    return row;
  });
}

const brandsTs = fs.readFileSync(path.join(root, 'lib', 'vehicleBrands.ts'), 'utf8');
const siteKeys = new Set();
for (const match of brandsTs.matchAll(/slug: '([^']+)'[\s\S]*?commonModels: \[([\s\S]*?)\]/g)) {
  const slug = match[1];
  const makeSlug = slug === 'mercedes' ? 'mercedes-benz' : slug;
  for (const m of [...match[2].matchAll(/'([^']+)'/g)]) {
    siteKeys.add(`${makeSlug}::${slugify(m[1])}`);
  }
}

const rows = parseCsv(fs.readFileSync(path.join(root, 'data', 'vehicle-images.csv'), 'utf8'));
const aliases = { bmw: { '3 series': '3-series', '5 series': '5-series' }, chevrolet: { silverado: 'silverado-1500' } };

let ok = 0;
let missing = [];
for (const slug of [...siteKeys].sort()) {
  const [makeSlug, modelSlug] = slug.split('::');
  const brandSlug = makeSlug === 'mercedes-benz' ? 'mercedes' : makeSlug;
  const aliasModel = aliases[brandSlug]?.[modelSlug.replace(/-/g, ' ')] ?? modelSlug;
  const row = rows.find((r) => slugify(r.Make) === makeSlug && slugify(r.Model) === aliasModel)
    ?? rows.find((r) => slugify(r.Make) === makeSlug && slugify(r.Model) === modelSlug);
  if (!row) { missing.push({ slug, reason: 'no CSV row' }); continue; }
  const webPath = row['Recommended Save Path'].replace(/^\/public/, '');
  const exists = fs.existsSync(path.join(root, 'public', webPath.replace(/^\//, '')));
  if (exists) { ok += 1; } else { missing.push({ slug, url: row['Best Image URL / Source Reference'], webPath }); }
}

console.log(`OK: ${ok}/${siteKeys.size}`);
console.log(`Missing: ${missing.length}`);
for (const m of missing) console.log(JSON.stringify(m));
