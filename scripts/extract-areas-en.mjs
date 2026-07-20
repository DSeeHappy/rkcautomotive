/**
 * Extract area city body EN from lib/serviceAreas.ts → .tmp-areas-en.json
 * Then translate via ds Sparks into lib/i18n/areaBodiesEs.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const runner = `
import { SERVICE_AREAS_DATA } from './lib/serviceAreas.ts';
const cities = SERVICE_AREAS_DATA.map((a) => ({
  slug: a.slug,
  name: a.name,
  description: a.description,
  directions: a.directions,
  whyChoose: a.whyChoose,
  localParagraphs: a.localParagraphs,
}));
console.log(JSON.stringify({ cities }, null, 2));
`;
fs.writeFileSync(path.join(ROOT, '.tmp-extract-areas.ts'), runner);
const r = spawnSync('npx', ['--yes', 'tsx', '.tmp-extract-areas.ts'], {
  cwd: ROOT,
  encoding: 'utf8',
  timeout: 120000,
  shell: true,
});
if (r.status !== 0) {
  console.error(r.stderr?.slice(0, 2000));
  process.exit(1);
}
fs.writeFileSync(path.join(ROOT, '.tmp-areas-en.json'), r.stdout, 'utf8');
const j = JSON.parse(r.stdout);
console.log('cities', j.cities.length);
