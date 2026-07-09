/**
 * Verify exact image lookup for Ford, Toyota, Mercedes-Benz site models.
 * Run: node scripts/verify-brand-lookups.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const require = createRequire(import.meta.url);

function slugify(text) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const brandsTs = fs.readFileSync(path.join(root, 'lib', 'vehicleBrands.ts'), 'utf8');
const targetSlugs = new Set(['ford', 'toyota', 'mercedes']);
const models = [];

for (const match of brandsTs.matchAll(/slug: '([^']+)'[\s\S]*?commonModels: \[([\s\S]*?)\]/g)) {
  if (!targetSlugs.has(match[1])) continue;
  for (const m of [...match[2].matchAll(/'([^']+)'/g)]) {
    models.push({ brandSlug: match[1], model: m[1] });
  }
}

// Compile vehicleImages.ts on the fly via tsx/ts-node fallback: parse generated records
const ts = fs.readFileSync(path.join(root, 'lib', 'vehicleImages.ts'), 'utf8');
const MAKE_ALIASES = { mercedes: 'mercedes-benz' };
const records = [...ts.matchAll(/makeSlug: '([^']+)'[\s\S]*?modelSlug: '([^']+)'[\s\S]*?imagePath: '([^']+)'/g)].map((m) => ({
  makeSlug: m[1],
  modelSlug: m[2],
  imagePath: m[3],
}));
const lookup = new Map(records.map((r) => [`${r.makeSlug}::${r.modelSlug}`, r]));

let ok = 0;
let fail = 0;

for (const { brandSlug, model } of models) {
  const makeSlug = MAKE_ALIASES[brandSlug] ?? brandSlug;
  const key = `${makeSlug}::${slugify(model)}`;
  const record = lookup.get(key);
  const exists = record ? fs.existsSync(path.join(root, 'public', record.imagePath.replace(/^\//, ''))) : false;
  if (record && exists) {
    ok += 1;
    console.log(`OK  ${key} -> ${record.imagePath}`);
  } else {
    fail += 1;
    console.log(`FAIL ${key} record=${Boolean(record)} exists=${exists}`);
  }
}

console.log(`\n${ok}/${models.length} exact lookups with local WebP`);
process.exit(fail > 0 ? 1 : 0);
