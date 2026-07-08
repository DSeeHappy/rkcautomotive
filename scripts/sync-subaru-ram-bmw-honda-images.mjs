/**
 * Targeted downloader for Subaru/Ram/BMW/Honda BrandTabs images.
 * Run: node scripts/sync-subaru-ram-bmw-honda-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const csvPath = path.join(root, 'data', 'vehicle-images.csv');
const DELAY_MS = 8000;

const TARGET_MAKES = new Set(['Subaru', 'Ram', 'BMW', 'Honda']);

function parseCsvLine(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;
  for (const char of line) {
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (char === ',' && !inQuotes) {
      fields.push(current.trim());
      current = '';
      continue;
    }
    current += char;
  }
  fields.push(current.trim());
  return fields;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function downloadAndConvert(sourceUrl, destPath, attempt = 1) {
  const response = await fetch(sourceUrl, {
    headers: { 'User-Agent': 'RKC-Automotive-Site/1.0 (subaru/ram/bmw/honda image sync)' },
  });
  if (response.status === 429 && attempt < 5) {
    const waitMs = DELAY_MS * attempt * 2;
    console.log(`Rate limited, retrying in ${waitMs}ms: ${sourceUrl}`);
    await sleep(waitMs);
    return downloadAndConvert(sourceUrl, destPath, attempt + 1);
  }
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  const sharp = (await import('sharp')).default;
  await sharp(buffer)
    .rotate()
    .resize(1600, 900, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(destPath);
}

const lines = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/).filter(Boolean);
const header = parseCsvLine(lines[0]);
const makeIdx = header.indexOf('Make');
const modelIdx = header.indexOf('Model');
const urlIdx = header.indexOf('Best Image URL / Source Reference');
const pathIdx = header.indexOf('Recommended Save Path');
const fallbackIdx = header.indexOf('Fallback Needed');

let downloaded = 0;
let skipped = 0;
let failed = 0;

for (let i = 1; i < lines.length; i += 1) {
  const row = parseCsvLine(lines[i]);
  const make = row[makeIdx];
  if (!TARGET_MAKES.has(make)) continue;

  const model = row[modelIdx];
  const sourceUrl = row[urlIdx];
  const fallbackNeeded = row[fallbackIdx] === 'Yes';
  const publicPath = row[pathIdx].replace(/^\/public/, '');
  const destPath = path.join(root, 'public', publicPath.replace(/^\//, ''));

  if (fallbackNeeded || !sourceUrl.startsWith('http')) {
    console.log(`Skip (no direct URL): ${make} ${model}`);
    skipped += 1;
    continue;
  }

  if (fs.existsSync(destPath)) {
    console.log(`Exists ${publicPath} (${make} ${model})`);
    skipped += 1;
    continue;
  }

  try {
    await downloadAndConvert(sourceUrl, destPath);
    downloaded += 1;
    console.log(`Saved ${publicPath} (${make} ${model})`);
    await sleep(DELAY_MS);
  } catch (error) {
    failed += 1;
    console.warn(`Failed ${make} ${model}: ${error.message}`);
  }
}

console.log(`Subaru/Ram/BMW/Honda download complete: ${downloaded} saved, ${skipped} skipped, ${failed} failed`);
