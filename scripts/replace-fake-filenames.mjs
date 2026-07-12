/**
 * Replace non-existent Wikimedia filenames with verified Commons files.
 * Run: node scripts/replace-fake-filenames.mjs
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const csvPath = path.join(root, 'data', 'vehicle-images.csv');

/** Make::Model -> verified Wikimedia filename */
const REPLACEMENTS = {
  'Toyota::RAV4': '2019 Toyota RAV4 LE front 3.27.19.jpg',
  'Toyota::Tacoma': '2019 Toyota Tacoma SR5 4WD Access Cab, front right, 09-03-2022.jpg',
  'Toyota::4Runner': '2019 Toyota 4Runner SR5 4.0L front 6.16.19.jpg',
  'Toyota::Highlander': '2020 Toyota Highlander XLE AWD, front.jpg',
  'Ford::F-150': '2021 Ford F-150 (fourteenth generation) front view 01.png',
  'Ford::Explorer': '2020 Ford Explorer XLT in Oxford White, front left.jpg',
  'Ford::Escape': '2020 Ford Escape ST-Line AWD front.jpg',
  'Ford::Ranger': 'NAIAS 2019 Ford Ranger XLT right front.jpg',
  'Chevrolet::Silverado 1500': '2019 Chevrolet Silverado 1500 Crew Cab LT (front), 10.20.19.jpg',
  'Chevrolet::Equinox': '2018 Chevrolet Equinox LT, front 3.24.19.jpg',
  'BMW::X5': '2019 BMW X5 M50d 3.0 Front.jpg',
  'Honda::Pilot': '2019 Honda Pilot EX-L 3.5L front 1.5.19.jpg',
  'Subaru::Forester': '2019 Subaru Forester Sport AWD front NYIAS 2019.jpg',
  'Mercedes-Benz::C-Class': '2022 Mercedes-Benz C300 AMG Line Premium - 1999cc 2.0 (258PS) Petrol - Obsidian Black - 02-2024, Front.jpg',
  'Mercedes-Benz::GLE': '2020 Mercedes-Benz GLE 350 4Matic front 6.16.19.jpg',
};

function wikimediaUrl(filename) {
  const wikiName = filename.replace(/ /g, '_');
  const hash = crypto.createHash('md5').update(wikiName).digest('hex');
  const encoded = wikiName.replace(/[^A-Za-z0-9._-]/g, (ch) => encodeURIComponent(ch));
  return `https://upload.wikimedia.org/wikipedia/commons/${hash[0]}/${hash.slice(0, 2)}/${encoded}`;
}

function parseCsvLine(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') { inQuotes = !inQuotes; continue; }
    if (char === ',' && !inQuotes) { fields.push(current.trim()); current = ''; continue; }
    current += char;
  }
  fields.push(current.trim());
  return fields;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const lines = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/);
const header = parseCsvLine(lines[0]);
const makeIdx = header.indexOf('Make');
const modelIdx = header.indexOf('Model');
const urlIdx = header.indexOf('Best Image URL / Source Reference');
const pathIdx = header.indexOf('Recommended Save Path');

let updated = 0;
const out = [lines[0]];

for (let i = 1; i < lines.length; i += 1) {
  const line = lines[i];
  if (!line.trim()) continue;
  const fields = parseCsvLine(line);
  const key = `${fields[makeIdx]}::${fields[modelIdx]}`;
  const filename = REPLACEMENTS[key];
  if (filename) {
    const url = wikimediaUrl(filename);
    // Verify URL exists
    let head;
    for (let attempt = 1; attempt <= 6; attempt += 1) {
      head = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'RKC/1.0' } });
      if (head.status === 429 || head.status === 503) {
        await sleep(8000 * attempt);
        continue;
      }
      break;
    }
    if (head.status !== 200) {
      console.warn(`SKIP ${key}: HTTP ${head.status} for ${filename}`);
    } else {
      fields[urlIdx] = url;
      updated += 1;
      console.log(`OK ${key} -> ${filename}`);
      const dest = fields[pathIdx].replace(/^\/public/, '');
      const destPath = path.join(root, 'public', dest.replace(/^\//, ''));
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
    }
    await sleep(6000);
  }
  out.push(fields.join(','));
}

fs.writeFileSync(csvPath, `${out.join('\n')}\n`);
console.log(`\nUpdated ${updated} filename replacements`);
