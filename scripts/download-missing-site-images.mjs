/**
 * Download only missing site-relevant vehicle WebP files.
 * Run: node scripts/download-missing-site-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const DELAY_MS = 45000;
const MAX_ATTEMPTS = 10;
const PRIORITY_SLUGS = [
  'nissan::sentra',
  'hyundai::ioniq-5',
  'jeep::wrangler',
];

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

async function downloadAndConvert(sourceUrl, destPath, attempt = 1) {
  const response = await fetch(sourceUrl, {
    headers: { 'User-Agent': 'RKC-Automotive-Site/1.0 (vehicle image sync)' },
  });
  if ((response.status === 429 || response.status === 503) && attempt < MAX_ATTEMPTS) {
    const waitMs = DELAY_MS * attempt;
    console.log(`Rate limited (${response.status}), retry in ${waitMs}ms`);
    await sleep(waitMs);
    return downloadAndConvert(sourceUrl, destPath, attempt + 1);
  }
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  const sharp = (await import('sharp')).default;
  await sharp(buffer).rotate().resize(1600, 900, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).toFile(destPath);
}

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

const brandsTs = fs.readFileSync(path.join(root, 'lib', 'vehicleBrands.ts'), 'utf8');
const siteKeys = new Set();
for (const match of brandsTs.matchAll(/slug: '([^']+)'[\s\S]*?commonModels: \[([\s\S]*?)\]/g)) {
  const makeSlug = match[1] === 'mercedes' ? 'mercedes-benz' : match[1];
  for (const m of [...match[2].matchAll(/'([^']+)'/g)]) siteKeys.add(`${makeSlug}::${slugify(m[1])}`);
}

const rows = parseCsv(fs.readFileSync(path.join(root, 'data', 'vehicle-images.csv'), 'utf8'));
const aliases = { bmw: { '3 series': '3-series', '5 series': '5-series' }, chevrolet: { silverado: 'silverado-1500' } };

let downloaded = 0;
let failed = 0;

const orderedSlugs = [
  ...PRIORITY_SLUGS.filter((s) => siteKeys.has(s)),
  ...[...siteKeys].filter((s) => !PRIORITY_SLUGS.includes(s)).sort(),
];

for (const slug of orderedSlugs) {
  const [makeSlug, modelSlug] = slug.split('::');
  const brandSlug = makeSlug === 'mercedes-benz' ? 'mercedes' : makeSlug;
  const aliasModel = aliases[brandSlug]?.[modelSlug.replace(/-/g, ' ')] ?? modelSlug;
  const row = rows.find((r) => slugify(r.Make) === makeSlug && slugify(r.Model) === aliasModel)
    ?? rows.find((r) => slugify(r.Make) === makeSlug && slugify(r.Model) === modelSlug);
  if (!row || row['Fallback Needed'] === 'Yes') continue;

  const webPath = row['Recommended Save Path'].replace(/^\/public/, '');
  const destPath = path.join(root, 'public', webPath.replace(/^\//, ''));
  if (fs.existsSync(destPath)) continue;

  const url = row['Best Image URL / Source Reference'];
  try {
    await downloadAndConvert(url, destPath);
    downloaded += 1;
    console.log(`Saved ${webPath}`);
  } catch (e) {
    failed += 1;
    console.warn(`Failed ${slug}: ${e.message}`);
  }
  await sleep(DELAY_MS);
}

console.log(`\nDownloaded: ${downloaded}, failed: ${failed}`);
