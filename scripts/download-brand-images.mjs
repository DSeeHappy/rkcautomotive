/**
 * Download missing WebP files for Ford, Toyota, Mercedes-Benz only.
 * Run: node scripts/download-brand-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const DELAY_MS = 10000;
const TARGET_MAKES = new Set(['ford', 'toyota', 'mercedes-benz']);

function slugify(text) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function parseCsvLine(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;
  for (const char of line) {
    if (char === '"') { inQuotes = !inQuotes; continue; }
    if (char === ',' && !inQuotes) { fields.push(current.trim()); current = ''; continue; }
    current += char;
  }
  fields.push(current.trim());
  return fields;
}

async function downloadAndConvert(sourceUrl, destPath, attempt = 1) {
  const response = await fetch(sourceUrl, {
    headers: { 'User-Agent': 'RKC-Automotive-Site/1.0 (vehicle image sync)' },
  });
  if ((response.status === 429 || response.status === 503) && attempt < 8) {
    const waitMs = DELAY_MS * attempt;
    console.log(`Rate limited (${response.status}), retry in ${waitMs}ms`);
    await new Promise((r) => setTimeout(r, waitMs));
    return downloadAndConvert(sourceUrl, destPath, attempt + 1);
  }
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  const sharp = (await import('sharp')).default;
  await sharp(buffer).rotate().resize(1600, 900, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).toFile(destPath);
}

const lines = fs.readFileSync(path.join(root, 'data', 'vehicle-images.csv'), 'utf8').split(/\r?\n/).filter(Boolean);
const header = parseCsvLine(lines[0]);
const makeIdx = header.indexOf('Make');
const modelIdx = header.indexOf('Model');
const urlIdx = header.indexOf('Best Image URL / Source Reference');
const pathIdx = header.indexOf('Recommended Save Path');
const fallbackIdx = header.indexOf('Fallback Needed');

const brandsTs = fs.readFileSync(path.join(root, 'lib', 'vehicleBrands.ts'), 'utf8');
const siteKeys = new Set();
for (const match of brandsTs.matchAll(/slug: '([^']+)'[\s\S]*?commonModels: \[([\s\S]*?)\]/g)) {
  const makeSlug = match[1] === 'mercedes' ? 'mercedes-benz' : match[1];
  if (!TARGET_MAKES.has(makeSlug)) continue;
  for (const m of [...match[2].matchAll(/'([^']+)'/g)]) {
    siteKeys.add(`${makeSlug}::${slugify(m[1])}`);
  }
}

let downloaded = 0;
let failed = 0;
let skipped = 0;

for (let i = 1; i < lines.length; i += 1) {
  const fields = parseCsvLine(lines[i]);
  const key = `${slugify(fields[makeIdx])}::${slugify(fields[modelIdx])}`;
  if (!siteKeys.has(key)) continue;
  if (fields[fallbackIdx] === 'Yes') continue;

  const webPath = fields[pathIdx].replace(/^\/public/, '');
  const destPath = path.join(root, 'public', webPath.replace(/^\//, ''));
  if (fs.existsSync(destPath)) {
    skipped += 1;
    continue;
  }

  const url = fields[urlIdx];
  try {
    await downloadAndConvert(url, destPath);
    downloaded += 1;
    console.log(`Saved ${webPath}`);
  } catch (e) {
    failed += 1;
    console.warn(`Failed ${key}: ${e.message}`);
  }
  await new Promise((r) => setTimeout(r, DELAY_MS));
}

console.log(`\nDownloaded: ${downloaded}, skipped: ${skipped}, failed: ${failed}`);
