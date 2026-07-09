/**
 * Recompute Wikimedia Commons upload paths from filenames (fixes wrong MD5 dirs).
 * Run: node scripts/repair-wikimedia-urls.mjs
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const csvPath = path.join(root, 'data', 'vehicle-images.csv');

function wikimediaUrlFromWikiFilename(wikiFilename) {
  const hash = crypto.createHash('md5').update(wikiFilename).digest('hex');
  const encoded = wikiFilename.replace(/[^A-Za-z0-9._-]/g, (ch) => encodeURIComponent(ch));
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

const lines = fs.readFileSync(csvPath, 'utf8').split(/\r?\n/);
const header = parseCsvLine(lines[0]);
const urlIdx = header.indexOf('Best Image URL / Source Reference');
const sourceIdx = header.indexOf('Source Website');

let repaired = 0;
const out = [lines[0]];

for (let i = 1; i < lines.length; i += 1) {
  const line = lines[i];
  if (!line.trim()) continue;
  const fields = parseCsvLine(line);
  const source = fields[sourceIdx];
  const url = fields[urlIdx];
  if (source === 'Wikimedia Commons' && url.includes('upload.wikimedia.org')) {
    const wikiFilename = decodeURIComponent(url.split('/').pop());
    const fixed = wikimediaUrlFromWikiFilename(wikiFilename);
    if (fixed !== url) {
      fields[urlIdx] = fixed;
      repaired += 1;
    }
  }
  out.push(fields.join(','));
}

fs.writeFileSync(csvPath, `${out.join('\n')}\n`);
console.log(`Repaired ${repaired} Wikimedia URL paths`);
