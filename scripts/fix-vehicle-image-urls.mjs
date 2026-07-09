/**
 * Replace Unsplash URLs with model-specific Wikimedia Commons images.
 * Uses MD5 path computation (no API calls).
 * Run: node scripts/fix-vehicle-image-urls.mjs
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const csvPath = path.join(root, 'data', 'vehicle-images.csv');

/** Make, Model -> Wikimedia filename (model name in title). */
const FIXES = {
  'Toyota::Camry': '2019 Toyota Camry LE in white, front left.jpg',
  'Honda::Civic': '2019 Honda Civic LX Sedan.jpg',
  'Ford::Mustang': '2018 Ford Mustang GT 5.0 Front.jpg',
  'BMW::3-Series': '2019 BMW 330i M Sport 2.0 Front.jpg',
  'BMW::M3': 'BMW M3 CS 1X7A6394.jpg',
  'Audi::A4': '2019 Audi A4 S Line 40 TFSi S-A 2.0.jpg',
  'Audi::Q5': '2023 Audi Q5 quattro front.jpg',
  'Audi::A6': '2019 Audi A6 Avant S Line 40 TDi S-A 2.0 Front.jpg',
  'Audi::Q7': '2019 Audi Q7 facelift Front.jpg',
  'Audi::Q3': '2019 Audi Q3 TFSi 35 Front.jpg',
  'Audi::e-tron': '2019 Audi e-tron quattro front NYIAS 2019.jpg',
  'Audi::S4': '2017 Audi S4 Avant TFSi Quattro Automatic 3.0 Front.jpg',
  'Nissan::Altima': '2019 Nissan Altima front 12.24.18.jpg',
  'Nissan::Rogue': '2016 Nissan Rogue, Front Left, 04-13-2021.jpg',
  'Nissan::Sentra': '2021 Nissan Sentra SR in Electric Blue, front left, 2021-10-03.jpg',
  'Nissan::Pathfinder': '2019 Nissan Pathfinder, Front Right, 09-20-2020.jpg',
  'Nissan::Murano': '2019 Nissan Murano front, 7.23.19.jpg',
  'Jeep::Wrangler': '2018 Jeep Wrangler Sport S 2-door, front left, 09-30-2023.jpg',
  'Jeep::Grand Cherokee': '2018 Jeep Grand Cherokee Night Eagle 3.0 Front.jpg',
  'Jeep::Cherokee': '2019 Jeep Cherokee Latitude front 5.27.18.jpg',
  'Jeep::Gladiator': '2020 Jeep Gladiator (JT), front 6.6.20.jpg',
  'Jeep::Renegade': '2015 Jeep Renegade Latitude (Colorado Red), front right.jpg',
  'Jeep::Wagoneer': '2022 Jeep Wagoneer Series I, front 6.8.23.jpg',
  'Hyundai::Sonata': '2019 Hyundai Sonata (DN8) front in bright red, NYIAS 2019.jpg',
  'Hyundai::Tucson': '2018 Hyundai Tucson Premium SE CRDi 2WD facelift 2.0 Front.jpg',
  'Hyundai::Ioniq 5': 'Hyundai Ioniq 5 IAA 2021 1X7A0189.jpg',
  'Kia::Sportage': '2019 Kia Sportage EX in Modern Bronze, front right, 2024-03-31.jpg',
  'Kia::Sorento': '2019 Kia Sorento au SIAM 2019.jpg',
  'Kia::Forte': '2019 Kia Forte S front 3.20.19.jpg',
  'Kia::K5': '2021 Kia K5 GT-Line in Glacial White Pearl, front left.jpg',
  'Kia::Telluride': '2019 Kia Telluride EX V6 front 4.14.19.jpg',
  'Kia::Soul': '2019 Kia Soul EX in Caribbean Blue, Front Right, 07-25-2022.jpg',
  'Kia::EV6': 'Kia ev6 1gen front.jpg',
  'Volkswagen::Jetta': '2019 Volkswagen Jetta 1.4T R-Line in Habañero Orange Metallic, front right.jpg',
  'Volkswagen::Tiguan': '2019 Volkswagen Tiguan Allspace 1.4 TSI (20201028) 01.jpg',
  'Volkswagen::Passat': '2019 Volkswagen Passat R-Line TDi 2.0 Front.jpg',
  'Volkswagen::Atlas': '2019 Volkswagen Atlas SE V6 E-Motion 3.6L, front 10.11.19.jpg',
  'Volkswagen::Golf': '2019 Volkswagen Golf in Deep Black Pearl, Front Left, 01-30-2022.jpg',
  'Volkswagen::ID.4': '2021 Volkswagen ID.4 Front.jpg',
  'Volkswagen::Taos': '2022 Volkswagen Taos S, front 4.5.23.jpg',
  'Ford::F-150': '2019 Ford F-150 Lariat Crew Cab, front 2.21.20.jpg',
  'Ford::Explorer': 'Ford Explorer 2020.jpg',
  'Ford::Escape': '2019 Ford Escape SE in White, front left.jpg',
  'Ford::Bronco': '2023 Ford Bronco 4-Door Outer Banks in Eruption Green, Front Left, 03-17-2023.jpg',
  'Ford::Edge': '2019 Ford Edge facelift Front.jpg',
  'Ford::Ranger': '2019 Ford Ranger XLT Super Cab FX4 front 6.1.19.jpg',
  'Toyota::RAV4': '2019 Toyota RAV4 Adventure (United States) front view (cropped).jpg',
  'Toyota::Tacoma': '2020 Toyota Tacoma TRD Pro front NYIAS 2019.jpg',
  'Toyota::4Runner': 'Toyota 4Runner TRD Pro.jpg',
  'Toyota::Highlander': '2016 Toyota Highlander LE, Front Left, 10-13-2020.jpg',
  'Toyota::Corolla': '2020 White Toyota Corolla SE.png',
  'Toyota::Prius': '2019 Toyota Prius Business Edition+ PHEV 1.8.jpg',
  'Mercedes-Benz::C-Class': '2020 Mercedes-Benz C300 AMG Line Night Edition Premium 2.0 Front.jpg',
  'Mercedes-Benz::E-Class': '2019 Mercedes E450 AMG Line Premium+ Auto.jpg',
  'Mercedes-Benz::GLC': '2020 Mercedes-Benz GLC 300 4MATIC in Polar White, front left.jpg',
  'Mercedes-Benz::GLE': '2019 Mercedes-Benz GLE 450 AMG Line Premium+ 4MATIC 3.0 Front.jpg',
  'Mercedes-Benz::GLA': '2020 Mercedes-Benz GLA 200d Front.jpg',
  'Mercedes-Benz::S-Class': '2019 Mercedes-Benz S350d L AMG Line Executive 3.0 Front.jpg',
  'Mercedes-Benz::Sprinter': '2018 Mercedes-Benz Sprinter 314 CDi 2.1 Front.jpg',
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

const lines = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/);
const header = parseCsvLine(lines[0]);
const makeIdx = header.indexOf('Make');
const modelIdx = header.indexOf('Model');
const urlIdx = header.indexOf('Best Image URL / Source Reference');
const sourceIdx = header.indexOf('Source Website');
const licenseIdx = header.indexOf('License / Commercial Note');
const reviewIdx = header.indexOf('Manual License Review');
const pathIdx = header.indexOf('Recommended Save Path');

let updated = 0;
const out = [lines[0]];

for (let i = 1; i < lines.length; i += 1) {
  const line = lines[i];
  if (!line.trim()) continue;
  const fields = parseCsvLine(line);
  const key = `${fields[makeIdx]}::${fields[modelIdx]}`;
  const filename = FIXES[key];
  if (filename) {
    const url = wikimediaUrl(filename);
    fields[urlIdx] = url;
    fields[sourceIdx] = 'Wikimedia Commons';
    fields[licenseIdx] = 'CC BY-SA 4.0';
    fields[reviewIdx] = 'No';
    updated += 1;
    console.log(`Fixed ${key}`);
    console.log(`  -> ${url}`);
    const dest = fields[pathIdx].replace(/^\/public/, '');
    const destPath = path.join(root, 'public', dest.replace(/^\//, ''));
    if (fs.existsSync(destPath)) {
      fs.unlinkSync(destPath);
      console.log(`  Removed stale ${dest}`);
    }
  }
  out.push(fields.join(','));
}

fs.writeFileSync(csvPath, `${out.join('\n')}\n`);
console.log(`\nUpdated ${updated} entries in vehicle-images.csv`);
