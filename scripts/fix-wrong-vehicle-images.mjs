/**
 * Re-download vehicle hub images verified wrong during visual audit.
 * Deletes mismatched WebPs, updates Tesla CSV sources to Wikimedia, re-fetches with delay.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const csvPath = path.join(root, 'data', 'vehicle-images.csv');
const DELAY_MS = 45000;

const TESLA_URL_UPDATES = {
  'Model 3':
    'https://upload.wikimedia.org/wikipedia/commons/3/3c/2019_Tesla_Model_3_Long_Range_Dual_Motor_in_Red_Multi-Coat%2C_front_left%2C_2021-05-30.jpg',
  'Model Y': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/2022_Tesla_Model_Y.jpg',
  'Model S':
    'https://upload.wikimedia.org/wikipedia/commons/b/b6/2021_Tesla_Model_S_P2_Long_Range_front_right_view.jpg',
};

/** Site-relevant models with verified wrong on-disk WebP (audit 2026-07-20). */
const WRONG_FILES = [
  'public/vehicles/audi/a4.webp',
  'public/vehicles/audi/q3.webp',
  'public/vehicles/audi/q7.webp',
  'public/vehicles/audi/s4.webp',
  'public/vehicles/audi/e-tron.webp',
  'public/vehicles/tesla/model-y.webp',
  'public/vehicles/tesla/model-3.webp',
  'public/vehicles/tesla/model-s.webp',
  'public/vehicles/hyundai/ioniq-5.webp',
  'public/vehicles/hyundai/sonata.webp',
  'public/vehicles/jeep/cherokee.webp',
  'public/vehicles/jeep/wagoneer.webp',
  'public/vehicles/jeep/wrangler.webp',
  'public/vehicles/kia/forte.webp',
  'public/vehicles/kia/soul.webp',
  'public/vehicles/kia/telluride.webp',
  'public/vehicles/nissan/murano.webp',
  'public/vehicles/nissan/pathfinder.webp',
  'public/vehicles/nissan/rogue.webp',
  'public/vehicles/nissan/sentra.webp',
  'public/vehicles/volkswagen/jetta.webp',
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

function parseCsv(content) {
  const lines = content.split(/\r?\n/).filter(Boolean);
  const header = parseCsvLine(lines[0]);
  const rows = lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const row = {};
    header.forEach((key, index) => {
      row[key] = values[index] ?? '';
    });
    return row;
  });
  return { header, rows };
}

function writeCsv(header, rows) {
  const body = [
    header.join(','),
    ...rows.map((row) => header.map((key) => row[key] ?? '').join(',')),
  ].join('\n');
  fs.writeFileSync(csvPath, `${body}\n`);
}

async function downloadAndConvert(sourceUrl, destPath, attempt = 1) {
  const response = await fetch(sourceUrl, {
    headers: { 'User-Agent': 'RKC-Automotive-Site/1.0 (vehicle image fix)' },
  });
  if ((response.status === 429 || response.status === 503) && attempt < 8) {
    const waitMs = DELAY_MS * attempt * 2;
    console.log(`Rate limited (${response.status}), retry in ${waitMs}ms`);
    await sleep(waitMs);
    return downloadAndConvert(sourceUrl, destPath, attempt + 1);
  }
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${sourceUrl}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  const sharp = (await import('sharp')).default;
  await sharp(buffer)
    .rotate()
    .resize(1600, 900, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(destPath);
}

function updateTeslaCsv() {
  const { header, rows } = parseCsv(fs.readFileSync(csvPath, 'utf8'));
  let updated = 0;
  for (const row of rows) {
    if (row.Make !== 'Tesla') continue;
    const newUrl = TESLA_URL_UPDATES[row.Model];
    if (!newUrl) continue;
    row['Best Image URL / Source Reference'] = newUrl;
    row['Source Website'] = 'Wikimedia Commons';
    row['License / Commercial Note'] = 'CC BY-SA 4.0';
    updated += 1;
  }
  writeCsv(header, rows);
  console.log(`Updated ${updated} Tesla CSV rows to Wikimedia Commons`);
}

function loadCsvRowsByPath() {
  const { rows } = parseCsv(fs.readFileSync(csvPath, 'utf8'));
  const map = new Map();
  for (const row of rows) {
    const webPath = row['Recommended Save Path'].replace(/^\/public/, '');
    map.set(webPath, row);
  }
  return map;
}

async function main() {
  updateTeslaCsv();
  const rowsByPath = loadCsvRowsByPath();

  for (const rel of WRONG_FILES) {
    const abs = path.join(root, rel);
    if (fs.existsSync(abs)) {
      fs.unlinkSync(abs);
      console.log(`Deleted ${rel}`);
    }
  }

  let downloaded = 0;
  let failed = 0;
  for (const rel of WRONG_FILES) {
    const webPath = `/${rel.replace(/^public\/?/, '')}`;
    const row = rowsByPath.get(webPath);
    if (!row) {
      console.warn(`No CSV row for ${webPath}`);
      failed += 1;
      continue;
    }
    const sourceUrl = row['Best Image URL / Source Reference'];
    const destPath = path.join(root, rel);
    try {
      await downloadAndConvert(sourceUrl, destPath);
      downloaded += 1;
      console.log(`Saved ${webPath}`);
      await sleep(DELAY_MS);
    } catch (error) {
      failed += 1;
      console.warn(`Failed ${webPath}: ${error.message}`);
    }
  }

  console.log(`\nDownloaded: ${downloaded}, failed: ${failed}`);
  const sync = spawnSync('node', ['scripts/sync-vehicle-images.mjs', '--regenerate-only'], {
    cwd: root,
    stdio: 'inherit',
  });
  process.exit(sync.status ?? 1);
}

main();
