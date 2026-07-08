/**
 * Verify exact image lookups for Jeep/Nissan/Hyundai commonModels.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function loadCommonModels(slug) {
  const brandsTs = fs.readFileSync(path.join(root, 'lib', 'vehicleBrands.ts'), 'utf8');
  const block = brandsTs.match(new RegExp(`slug: '${slug}'[\\s\\S]*?commonModels: \\[([\\s\\S]*?)\\]`));
  if (!block) return [];
  return [...block[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
}

function loadImageLookup() {
  const ts = fs.readFileSync(path.join(root, 'lib', 'vehicleImages.ts'), 'utf8');
  const lookup = new Map();
  const recordRegex = /makeSlug: '([^']+)'[\s\S]*?modelSlug: '([^']+)'[\s\S]*?imagePath: '([^']+)'[\s\S]*?fallbackNeeded: (true|false)/g;
  let match;
  while ((match = recordRegex.exec(ts)) !== null) {
    lookup.set(`${match[1]}::${match[2]}`, {
      imagePath: match[3],
      fallbackNeeded: match[4] === 'true',
    });
  }
  return lookup;
}

const lookup = loadImageLookup();
const targets = ['jeep', 'nissan', 'hyundai'];
let exact = 0;
let issues = 0;

for (const slug of targets) {
  for (const model of loadCommonModels(slug)) {
    const key = `${slug}::${slugify(model)}`;
    const record = lookup.get(key);
    const fileExists = record ? fs.existsSync(path.join(root, 'public', record.imagePath.replace(/^\//, ''))) : false;
    const ok = record && !record.fallbackNeeded && fileExists;

    if (ok) {
      exact += 1;
      console.log(`OK  ${key} -> ${record.imagePath}`);
    } else {
      issues += 1;
      console.log(`BAD ${key} record=${!!record} fallback=${record?.fallbackNeeded} file=${fileExists}`);
    }
  }
}

console.log(`\nExact matches: ${exact}, issues: ${issues}`);
if (issues) process.exit(1);
