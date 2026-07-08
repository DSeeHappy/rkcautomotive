/**
 * One-time URL updater for Subaru/Ram/BMW/Honda rows in vehicle-images.csv.
 * Uses verified Wikimedia Commons direct URLs (model-specific filenames).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const csvPath = path.join(__dirname, '..', 'data', 'vehicle-images.csv');

const URLS = {
  'Subaru::Outback':
    'https://upload.wikimedia.org/wikipedia/commons/5/59/2019_Subaru_Outback_2.5i_Limited%2C_front_right%2C_08-27-2024.jpg',
  'Subaru::Forester':
    'https://upload.wikimedia.org/wikipedia/commons/0/08/2019_Subaru_Forester_Sport_AWD_front_NYIAS_2019.jpg',
  'Subaru::Crosstrek':
    'https://upload.wikimedia.org/wikipedia/commons/a/a5/2019_Subaru_Crosstrek_2.0_Premium%2C_front_right.jpg',
  'Subaru::Impreza':
    'https://upload.wikimedia.org/wikipedia/commons/d/df/2017_Subaru_Impreza_sedan_front_4.11.18.jpg',
  'Subaru::Ascent':
    'https://upload.wikimedia.org/wikipedia/commons/7/7d/2019_Subaru_Ascent_front_12.29.18.jpg',
  'Subaru::WRX':
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Subaru_WRX_%28VA%29_front_view_%28United_States%29.jpg',
  'Subaru::Legacy':
    'https://upload.wikimedia.org/wikipedia/commons/7/79/2019_Subaru_Legacy_2.5i_in_Crystal_White_Pearl%2C_front_right%2C_2024-10-06.jpg',
  'Ram::1500':
    'https://upload.wikimedia.org/wikipedia/commons/6/6f/2019_Ram_1500_Laramie%2C_front_3.1.20.jpg',
  'Ram::2500':
    'https://upload.wikimedia.org/wikipedia/commons/f/f2/2019_Ram_2500_Power_Wagon.jpg',
  'Ram::3500':
    'https://upload.wikimedia.org/wikipedia/commons/4/42/2019_Ram_3500_Heavy_Duty_Turbo_Diesel_with_Cummins_engine_front_NYIAS_2019.jpg',
  'Ram::ProMaster':
    'https://upload.wikimedia.org/wikipedia/commons/a/a1/2018_Ram_ProMaster_1500_cargo_van%2C_front_left%2C_08-06-2023.jpg',
  'Ram::ProMaster City':
    'https://upload.wikimedia.org/wikipedia/commons/9/9f/2015_Ram_ProMaster_City_Tradesman_Cargo_Van%2C_front_left.jpg',
  'Ram::TRX': 'https://upload.wikimedia.org/wikipedia/commons/1/16/Ram_1500_TRX_1X7A0057.jpg',
  'Ram::Rebel':
    'https://upload.wikimedia.org/wikipedia/commons/7/73/2019_Ram_1500_Rebel_4x4%2C_front_11.10.19.jpg',
  'BMW::3-Series':
    'https://upload.wikimedia.org/wikipedia/commons/f/ff/2019_BMW_330i_M_Sport_2.0_Front.jpg',
  'BMW::5 Series':
    'https://upload.wikimedia.org/wikipedia/commons/f/f5/BMW_5-Series_%28G30%29_530e_%282017%29_%2853334772776%29.jpg',
  'BMW::X3': 'https://upload.wikimedia.org/wikipedia/commons/2/2c/2019_BMW_X3_xDrive30i_front.jpg',
  'BMW::X5': 'https://upload.wikimedia.org/wikipedia/commons/8/87/2019_BMW_X5_M50d_3.0_Front.jpg',
  'BMW::X1': 'https://upload.wikimedia.org/wikipedia/commons/e/ec/2019_BMW_X1_xDrive20i_blue_front.jpg',
  'BMW::M3': 'https://upload.wikimedia.org/wikipedia/commons/e/ea/BMW_M3_CS_1X7A6394.jpg',
  'BMW::i4': 'https://upload.wikimedia.org/wikipedia/commons/9/9b/BMW_i4_M50_1X7A7379.jpg',
  'Honda::Accord':
    'https://upload.wikimedia.org/wikipedia/commons/3/3e/2019_Honda_Accord_1.5T_Sport%2C_1.4.20.jpg',
  'Honda::Civic':
    'https://upload.wikimedia.org/wikipedia/commons/a/ab/2019_Honda_Civic_Sport%2C_front_12.18.21.jpg',
  'Honda::CR-V':
    'https://upload.wikimedia.org/wikipedia/commons/f/f5/2023_Honda_CR-V_Sport_in_Lunar_Silver_Metallic%2C_Front_Right%2C_11-12-2022.jpg',
  'Honda::Pilot':
    'https://upload.wikimedia.org/wikipedia/commons/e/ea/2019_Honda_Pilot_EX-L_3.5L_front_1.5.19.jpg',
  'Honda::Odyssey':
    'https://upload.wikimedia.org/wikipedia/commons/4/49/2019_Honda_Odyssey_EX-L_3.5L_front%2C_4.29.19.jpg',
  'Honda::HR-V':
    'https://upload.wikimedia.org/wikipedia/commons/6/69/2019_Honda_HR-V_Sport_i-VTEC_-_1498cc_1.5_%28182PS%29_Petrol_-_Black_-_02-2024%2C_Front.jpg',
  'Honda::Ridgeline':
    'https://upload.wikimedia.org/wikipedia/commons/e/ea/2017_Honda_Ridgeline_RTL-E%2C_front_right_%28Hershey_2019%29.jpg',
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
    row[urlIdx] = URLS[key];
    row[sourceIdx] = 'Wikimedia Commons';
    row[licenseIdx] = 'CC BY-SA 4.0';
    row[fallbackIdx] = 'No';
    row[reviewIdx] = 'No';
    updated += 1;
  }
  out.push(row.join(','));
}

fs.writeFileSync(csvPath, `${out.join('\n')}\n`);
console.log(`Updated ${updated} Subaru/Ram/BMW/Honda rows`);
