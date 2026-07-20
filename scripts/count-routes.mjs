/**
 * Count all crawlable sitemap routes and classify by template family.
 */
import { createRequire } from 'module';
import { pathToFileURL } from 'url';
import path from 'path';
import { register } from 'node:module';

// Use tsx via dynamic import of compiled path — fallback: parse source counts
import fs from 'fs';

const root = path.resolve(import.meta.dirname, '..');

function countMatches(file, re) {
  const src = fs.readFileSync(path.join(root, file), 'utf8');
  return [...src.matchAll(re)].length;
}

// Prefer live imports via child process with tsx
import { spawnSync } from 'child_process';

const runner = `
import { getAllSiteRoutes, getCoreRoutes, getServiceRoutes, getCityRoutes, getVehicleRoutes } from './lib/seo.ts';
import { getAllModelHubRoutes } from './lib/modelHubRoutes.ts';
import { getAllModelDeepDiveRoutes } from './lib/modelDeepDiveRoutes.ts';

const all = getAllSiteRoutes();
const hubs = getAllModelHubRoutes();
const deep = getAllModelDeepDiveRoutes();
const core = getCoreRoutes();
const services = getServiceRoutes();
const cities = getCityRoutes();
const vehicles = getVehicleRoutes();

const by = {};
for (const p of all) {
  const key = p === '/' ? 'root' : p.split('/').filter(Boolean)[0];
  by[key] = (by[key] || 0) + 1;
}

console.log(JSON.stringify({
  total: all.length,
  unique: new Set(all).size,
  core: core.length,
  services: services.length,
  cities: cities.length,
  vehicleHubs: hubs.length,
  vehicleDeepDives: deep.length,
  vehiclesShard: vehicles.length,
  byPrefix: by,
}, null, 2));
`;

fs.writeFileSync(path.join(root, '.tmp-count-routes.ts'), runner);
const r = spawnSync('npx', ['--yes', 'tsx', '.tmp-count-routes.ts'], {
  cwd: root,
  encoding: 'utf8',
  timeout: 180000,
  shell: true,
});
if (r.stdout) process.stdout.write(r.stdout);
if (r.stderr) process.stderr.write(r.stderr.slice(0, 2000));
process.exit(r.status ?? 1);
