/**
 * Generates lib/vehicleModels.ts stats and optional static JSON export.
 * Run: node scripts/generate-vehicle-models.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

// Load compiled TS via tsx alternative — parse brands from source file
const brandsPath = path.join(root, 'lib', 'vehicleBrands.ts');
const brandsSource = fs.readFileSync(brandsPath, 'utf8');

const modelMatches = [...brandsSource.matchAll(/commonModels:\s*\[([^\]]+)\]/g)];
const models = modelMatches.flatMap((m) =>
  m[1].match(/'([^']+)'/g)?.map((s) => s.replace(/'/g, '')) ?? [],
);

const brandCount = modelMatches.length;
const modelCount = models.length;

console.log(`Vehicle model data: ${modelCount} models across ${brandCount} brands`);
console.log(`Sample models: ${models.slice(0, 5).join(', ')}...`);

// Export summary JSON for verification
const outPath = path.join(root, 'scripts', 'vehicle-models-summary.json');
const summary = {
  generatedAt: new Date().toISOString(),
  brandCount,
  modelCount,
  models: models.sort(),
};
fs.writeFileSync(outPath, JSON.stringify(summary, null, 2));
console.log(`Summary written to ${path.relative(root, outPath)}`);
