/**
 * Local discovery inventory (no Spark — structural). Writes scripts/.spark-logs/discovery-local.json
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LOG = path.join(ROOT, 'scripts', '.spark-logs');
fs.mkdirSync(LOG, { recursive: true });

function walkPages(dir, base = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'api') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...walkPages(p, `${base}/${e.name}`));
    } else if (/^page\.(tsx|ts|jsx|js)$/.test(e.name)) {
      let route = base || '/';
      route = route.replace(/\/\(.*?\)/g, '');
      out.push(route);
    }
  }
  return out;
}

const pages = walkPages(path.join(ROOT, 'app')).sort();
const brandsSrc = fs.readFileSync(path.join(ROOT, 'lib/vehicleBrands.ts'), 'utf8');
const vbEnd = brandsSrc.indexOf('export function getBrandBySlug');
const vb = brandsSrc.slice(0, vbEnd >= 0 ? vbEnd : brandsSrc.length);
const target = ['gmc', 'lexus', 'acura', 'tesla', 'alfa-romeo'];
const hasHub = Object.fromEntries(target.map((s) => [s, vb.includes(`slug: '${s}'`)]));
const logos = fs.existsSync(path.join(ROOT, 'public/images/brands'))
  ? fs.readdirSync(path.join(ROOT, 'public/images/brands'))
  : [];
const logoOk = {
  'gmc.svg': logos.includes('gmc.svg'),
  'lexus.png': logos.includes('lexus.png'),
  'acura.svg': logos.includes('acura.svg'),
  'tesla.svg': logos.includes('tesla.svg'),
  'alfa-romeo.svg': logos.includes('alfa-romeo.svg'),
};
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
const out = {
  ts: new Date().toISOString(),
  via: 'agent-local-discovery',
  pageTsxCount: pages.length,
  routes: pages,
  missingBrandHubs: target.filter((s) => !hasHub[s]),
  hasHub,
  logoOk,
  scripts: Object.keys(pkg.scripts || {}),
};
fs.writeFileSync(path.join(LOG, 'discovery-local.json'), JSON.stringify(out, null, 2));
console.log(
  JSON.stringify(
    {
      pageTsxCount: out.pageTsxCount,
      missingBrandHubs: out.missingBrandHubs,
      logoOk,
      scripts: out.scripts,
    },
    null,
    2,
  ),
);
