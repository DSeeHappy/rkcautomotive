/**
 * Apply verified Commons filename replacements (no HEAD checks).
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const csvPath = path.join(root, 'data', 'vehicle-images.csv');

const REPLACEMENTS = {
  'Toyota::RAV4': '2019 Toyota RAV4 LE front 3.27.19.jpg',
  'Toyota::Tacoma': '2019 Toyota Tacoma SR5 4WD Access Cab, front right, 09-03-2022.jpg',
  'Toyota::4Runner': '2019 Toyota 4Runner SR5 4.0L front 6.16.19.jpg',
  'Toyota::Highlander': '2020 Toyota Highlander XLE AWD, front.jpg',
  'Toyota::Corolla': '2020 Toyota Corolla SE 2.0L sedan, 12.28.19.jpg',
  'Toyota::Prius': '2019 Toyota Prius, Front Left, 09-01-2020.jpg',
  'Ford::F-150': '2021 Ford F-150 (fourteenth generation) front view 01.png',
  'Ford::Explorer': '2020 Ford Explorer XLT in Oxford White, front left.jpg',
  'Ford::Escape': '2020 Ford Escape ST-Line AWD front.jpg',
  'Ford::Bronco': '2021 Ford Bronco Outer Banks, Front Right, 10-10-2021.jpg',
  'Ford::Ranger': 'NAIAS 2019 Ford Ranger XLT right front.jpg',
  'Chevrolet::Silverado 1500': '2019 Chevrolet Silverado 1500 Crew Cab LT (front), 10.20.19.jpg',
  'Chevrolet::Equinox': '2018 Chevrolet Equinox LT, front 3.24.19.jpg',
  'Chevrolet::Traverse': '2019 Chevrolet Traverse Redline Edition in Summit White, front left.jpg',
  'Chevrolet::Colorado': '2019 Chevrolet Colorado RST front NYIAS 2019.jpg',
  'Chevrolet::Malibu': '2019 Chevrolet Malibu (facelift) LT, front 10.19.19.jpg',
  'Chevrolet::Tahoe': '2021 Chevrolet Tahoe front view (United States).jpg',
  'Chevrolet::Suburban': '2021 Chevrolet Suburban LT, front 6.14.21.jpg',
  'BMW::X5': '2019 BMW X5 M50d 3.0 Front.jpg',
  'Honda::CR-V': '2023 Honda CR-V EX-L in Urban Grey Pearl, Front Left, 04-07-2023.jpg',
  'Honda::Pilot': '2019 Honda Pilot EX-L 3.5L front 1.5.19.jpg',
  'Subaru::Forester': '2019 Subaru Forester Sport AWD front NYIAS 2019.jpg',
  'Mercedes-Benz::C-Class': '2022 Mercedes-Benz C300 AMG Line Premium - 1999cc 2.0 (258PS) Petrol - Obsidian Black - 02-2024, Front.jpg',
  'Mercedes-Benz::E-Class': '2019 Mercedes E450 AMG Line Premium+ Auto.jpg',
  'Mercedes-Benz::GLC': '2018 Mercedes-Benz GLC 250 Urban Edition 4MATIC 2.0 Front.jpg',
  'Mercedes-Benz::GLE': '2020 Mercedes-Benz GLE 350 4Matic front 6.16.19.jpg',
  'Mercedes-Benz::GLA': '2019 Mercedes-Benz GLA 200 AMG Line Edition 1.6 Front (1).jpg',
  'Mercedes-Benz::S-Class': '2022 Mercedes-Benz S500 4MATIC AMG Line, front left, 02-13-2023.jpg',
  'Mercedes-Benz::Sprinter': 'Mercedes Benz Sprinter 2500 2017 Front View.jpg',
};

function wikimediaUrl(filename) {
  const wikiName = filename.replace(/ /g, '_');
  const hash = crypto.createHash('md5').update(wikiName).digest('hex');
  const encoded = wikiName.replace(/[^A-Za-z0-9._-]/g, (ch) => encodeURIComponent(ch));
  return `https://upload.wikimedia.org/wikipedia/commons/${hash[0]}/${hash.slice(0, 2)}/${encoded}`;
}

function parseCsvLine(line) {
  const fields = []; let current = ''; let inQuotes = false;
  for (const char of line) {
    if (char === '"') { inQuotes = !inQuotes; continue; }
    if (char === ',' && !inQuotes) { fields.push(current.trim()); current = ''; continue; }
    current += char;
  }
  fields.push(current.trim());
  return fields;
}

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
    fields[urlIdx] = wikimediaUrl(filename);
    updated += 1;
    const dest = fields[pathIdx].replace(/^\/public/, '');
    const destPath = path.join(root, 'public', dest.replace(/^\//, ''));
    if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
    console.log(`${key} -> ${filename}`);
  }
  out.push(fields.join(','));
}
fs.writeFileSync(csvPath, `${out.join('\n')}\n`);
console.log(`Updated ${updated} entries`);
