/**
 * One-time URL updater for Jeep/Nissan/Hyundai rows in vehicle-images.csv.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const csvPath = path.join(__dirname, '..', 'data', 'vehicle-images.csv');

const URLS = {
  'Jeep::Wrangler': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=80',
  'Jeep::Grand Cherokee': 'https://images.unsplash.com/photo-1758223165169-d4ee038a0cea?auto=format&fit=crop&w=1600&q=80',
  'Jeep::Cherokee': 'https://images.unsplash.com/photo-1500921726673-e4bdc09efa55?auto=format&fit=crop&w=1600&q=80',
  'Jeep::Compass': 'https://upload.wikimedia.org/wikipedia/commons/e/e0/2019_Jeep_Compass_Limited_2.4L%2C_front_7.6.19.jpg',
  'Jeep::Gladiator': 'https://images.unsplash.com/photo-1684292584802-09a4768a05cb?auto=format&fit=crop&w=1600&q=80',
  'Jeep::Renegade': 'https://images.unsplash.com/photo-1635626398909-e33615b0c1d6?auto=format&fit=crop&w=1600&q=80',
  'Jeep::Wagoneer': 'https://images.unsplash.com/photo-1769000480375-8abe6e92d483?auto=format&fit=crop&w=1600&q=80',
  'Nissan::Altima': 'https://images.unsplash.com/photo-1575501707067-0e4c7db2a950?auto=format&fit=crop&w=1600&q=80',
  'Nissan::Rogue': 'https://images.unsplash.com/photo-1551817280-6d59c77ce1b8?auto=format&fit=crop&w=1600&q=80',
  'Nissan::Sentra': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1600&q=80',
  'Nissan::Pathfinder': 'https://images.unsplash.com/photo-1587856657352-a12a4849af5b?auto=format&fit=crop&w=1600&q=80',
  'Nissan::Frontier': 'https://upload.wikimedia.org/wikipedia/commons/0/06/Nissan_Frontier_D40_Unib%C3%A9ton.jpg',
  'Nissan::Murano': 'https://images.unsplash.com/photo-1618782530124-fa5ddd7358df?auto=format&fit=crop&w=1600&q=80',
  'Nissan::Kicks': 'https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Nissan_Kicks_S_in_Gun_Metallic%2C_Front_Left%2C_10-09-2023.jpg',
  'Hyundai::Elantra': 'https://upload.wikimedia.org/wikipedia/commons/b/b1/2021_Hyundai_Elantra_Limited_in_Quartz_White%2C_front_right.jpg',
  'Hyundai::Sonata': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80',
  'Hyundai::Tucson': 'https://images.unsplash.com/photo-1575090536203-2a6193126514?auto=format&fit=crop&w=1600&q=80',
  'Hyundai::Santa Fe': 'https://upload.wikimedia.org/wikipedia/commons/5/57/Hyundai_Santa_Fe_09-22-2019_1.jpg',
  'Hyundai::Palisade': 'https://upload.wikimedia.org/wikipedia/commons/9/99/2020_Hyundai_Palisade_front_NYIAS_2019.jpg',
  'Hyundai::Kona': 'https://upload.wikimedia.org/wikipedia/commons/7/74/2019_Hyundai_Kona_Premium_SE_EV_Automatic.jpg',
  'Hyundai::Ioniq 5': 'https://images.unsplash.com/photo-1655126275641-21e114342284?auto=format&fit=crop&w=1600&q=80',
};

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
      fields.push(current);
      current = '';
      continue;
    }
    current += char;
  }
  fields.push(current);
  return fields;
}

const lines = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/);
const header = parseCsvLine(lines[0]);
const makeIdx = header.indexOf('Make');
const modelIdx = header.indexOf('Model');
const urlIdx = header.indexOf('Best Image URL / Source Reference');
const sourceIdx = header.indexOf('Source Website');
const licenseIdx = header.indexOf('License / Commercial Note');
const fallbackIdx = header.indexOf('Fallback Needed');
const reviewIdx = header.indexOf('Manual License Review');

let updated = 0;
const out = [lines[0]];

for (let i = 1; i < lines.length; i += 1) {
  if (!lines[i].trim()) continue;
  const row = parseCsvLine(lines[i]);
  const key = `${row[makeIdx]}::${row[modelIdx]}`;
  if (URLS[key]) {
    const isUnsplash = URLS[key].includes('unsplash.com');
    row[urlIdx] = URLS[key];
    row[sourceIdx] = isUnsplash ? 'Unsplash' : 'Wikimedia Commons';
    row[licenseIdx] = isUnsplash ? 'Unsplash Commercial License' : 'CC BY-SA 4.0';
    row[fallbackIdx] = 'No';
    row[reviewIdx] = isUnsplash ? 'Yes' : 'No';
    updated += 1;
  }
  out.push(row.join(','));
}

fs.writeFileSync(csvPath, `${out.join('\n')}\n`);
console.log(`Updated ${updated} rows`);
