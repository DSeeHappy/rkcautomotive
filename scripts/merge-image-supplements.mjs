/** Merge site-model-supplements.csv into vehicle-images.csv (idempotent). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const csvPath = path.join(root, 'data', 'vehicle-images.csv');
const supplementPath = path.join(root, 'data', 'site-model-supplements.csv');

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
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
  return { header, rows: lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    const row = {};
    header.forEach((key, index) => {
      row[key] = values[index] ?? '';
    });
    return row;
  }) };
}

function makeKey(make, model) {
  return `${slugify(make)}::${slugify(model)}`;
}

const { header, rows: mainRows } = parseCsv(fs.readFileSync(csvPath, 'utf8'));
const seen = new Set(mainRows.map((row) => makeKey(row.Make, row.Model)));
let added = 0;

if (fs.existsSync(supplementPath)) {
  const { rows: supplementRows } = parseCsv(fs.readFileSync(supplementPath, 'utf8'));
  for (const row of supplementRows) {
    const key = makeKey(row.Make, row.Model);
    if (!seen.has(key)) {
      mainRows.push(row);
      seen.add(key);
      added += 1;
    }
  }
}

const body = [
  header.join(','),
  ...mainRows.map((row) => header.map((key) => row[key] ?? '').join(',')),
].join('\n');
fs.writeFileSync(csvPath, `${body}\n`);
console.log(`Merged ${added} supplement rows; total ${mainRows.length} image catalog rows.`);
