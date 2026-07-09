/**
 * Verify exact image lookups for all 14 BrandTabs commonModels.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const BRAND_SLUGS = [
  'toyota', 'honda', 'ford', 'chevrolet', 'bmw', 'mercedes', 'audi', 'nissan',
  'subaru', 'jeep', 'ram', 'hyundai', 'kia', 'volkswagen',
];

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
let exact = 0;
let issues = 0;
const bad = [];

const MODEL_ALIASES = {
  bmw: { '3 series': '3-series', '5 series': '5-series' },
  chevrolet: { silverado: 'silverado-1500' },
};

function resolveKey(makeSlug, model) {
  const brandSlug = makeSlug === 'mercedes-benz' ? 'mercedes' : makeSlug;
  const modelSlug = MODEL_ALIASES[brandSlug]?.[model.toLowerCase()] ?? slugify(model);
  return `${makeSlug}::${modelSlug}`;
}

for (const slug of BRAND_SLUGS) {
  const makeSlug = slug === 'mercedes' ? 'mercedes-benz' : slug;
  for (const model of loadCommonModels(slug)) {
    const key = resolveKey(makeSlug, model);
    const record = lookup.get(key);
    const fileExists = record ? fs.existsSync(path.join(root, 'public', record.imagePath.replace(/^\//, ''))) : false;
    const ok = record && !record.fallbackNeeded && fileExists;

    if (ok) {
      exact += 1;
      console.log(`OK  ${key} -> ${record.imagePath}`);
    } else {
      issues += 1;
      bad.push(key);
      console.log(`BAD ${key} record=${!!record} fallback=${record?.fallbackNeeded} file=${fileExists}`);
    }
  }
}

console.log(`\nExact matches: ${exact}, issues: ${issues}`);
if (issues) {
  console.log('Missing:', bad.join(', '));
  process.exit(1);
}
