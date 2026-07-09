/**
 * HEAD-check Ford/Toyota/Mercedes CSV URLs.
 * Run: node scripts/check-brand-urls.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

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

const lines = fs.readFileSync(path.join(root, 'data', 'vehicle-images.csv'), 'utf8').split(/\r?\n/).filter(Boolean);
const header = parseCsvLine(lines[0]);
const makeIdx = header.indexOf('Make');
const modelIdx = header.indexOf('Model');
const urlIdx = header.indexOf('Best Image URL / Source Reference');
const targets = new Set(['ford', 'toyota', 'mercedes-benz']);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (let i = 1; i < lines.length; i += 1) {
  const fields = parseCsvLine(lines[i]);
  const make = fields[makeIdx];
  if (!targets.has(slugify(make))) continue;
  const url = fields[urlIdx];
  try {
    const r = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'RKC-Automotive/1.0' } });
    console.log(`${r.status}\t${make}\t${fields[modelIdx]}`);
  } catch (e) {
    console.log(`ERR\t${make}\t${fields[modelIdx]}\t${e.message}`);
  }
  await sleep(2500);
}
