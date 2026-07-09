/**
 * Download missing Ford/Toyota/Mercedes WebPs from current CSV URLs.
 * Run: node scripts/download-missing-brand-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const TARGET_MAKES = new Set(['Ford', 'Toyota', 'Mercedes-Benz']);

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

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const lines = fs.readFileSync(path.join(root, 'data', 'vehicle-images.csv'), 'utf8').split(/\r?\n/).filter(Boolean);
const header = parseCsvLine(lines[0]);
const makeIdx = header.indexOf('Make');
const modelIdx = header.indexOf('Model');
const urlIdx = header.indexOf('Best Image URL / Source Reference');
const pathIdx = header.indexOf('Recommended Save Path');

const todo = [];
for (let i = 1; i < lines.length; i += 1) {
  const fields = parseCsvLine(lines[i]);
  if (!TARGET_MAKES.has(fields[makeIdx])) continue;
  const webPath = fields[pathIdx].replace(/^\/public/, '');
  const destPath = path.join(root, 'public', webPath.replace(/^\//, ''));
  if (!fs.existsSync(destPath)) {
    todo.push({ key: `${fields[makeIdx]}::${fields[modelIdx]}`, url: fields[urlIdx], destPath, webPath });
  }
}

console.log(`Missing ${todo.length} files`);
const sharp = (await import('sharp')).default;

for (const item of todo) {
  for (let attempt = 1; attempt <= 10; attempt += 1) {
    try {
      const response = await fetch(item.url, { headers: { 'User-Agent': 'RKC-Automotive-Site/1.0' } });
      if ((response.status === 429 || response.status === 503) && attempt < 10) {
        await sleep(15000 * attempt);
        continue;
      }
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      fs.mkdirSync(path.dirname(item.destPath), { recursive: true });
      await sharp(buffer).rotate().resize(1600, 900, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).toFile(item.destPath);
      console.log(`Saved ${item.webPath}`);
      break;
    } catch (error) {
      if (attempt === 10) console.log(`FAIL ${item.key}: ${error.message}`);
      else await sleep(15000 * attempt);
    }
  }
  await sleep(12000);
}
