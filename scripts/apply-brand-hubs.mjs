/**
 * Apply Spark-generated brand hub JSON (.tmp-brand-hub-{slug}.json) into:
 * - lib/vehicleBrands.ts (VEHICLE_BRANDS + featured flags)
 * - lib/brandFailureProfiles.ts
 * - lib/i18n/brandContentEs.ts
 * - lib/vehicleModels.ts MODEL_TYPES for new slugs
 *
 * Usage: node scripts/apply-brand-hubs.mjs [slug...]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const LOGO_DEFAULTS = {
  gmc: '/images/brands/gmc.svg',
  lexus: '/images/brands/lexus.png',
  acura: '/images/brands/acura.svg',
  tesla: '/images/brands/tesla.svg',
  'alfa-romeo': '/images/brands/alfa-romeo.svg',
};

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function loadHub(slug) {
  const p = path.join(ROOT, `.tmp-brand-hub-${slug}.json`);
  if (!fs.existsSync(p)) throw new Error(`Missing ${p} — run spark-brand-hubs.mjs ${slug} first`);
  const hub = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (hub.via !== 'bifrost-spark') throw new Error(`${slug}: not Spark-generated (via=${hub.via})`);
  return hub;
}

function formatStringArray(arr, indent = '    ') {
  return `[\n${arr.map((s) => `${indent}  '${esc(s)}',`).join('\n')}\n${indent}]`;
}

function formatFailureProfiles(profiles, indent = '      ') {
  return `[\n${profiles
    .map(
      (f) =>
        `${indent}{\n${indent}  title: '${esc(f.title)}',\n${indent}  description:\n${indent}    '${esc(f.description)}',\n${indent}},`,
    )
    .join('\n')}\n${indent.slice(0, -2)}]`;
}

function buildBrandEntry(hub) {
  const { meta, en } = hub;
  const logoPath = meta.logoPath || LOGO_DEFAULTS[meta.slug] || `/images/brands/${meta.slug}.svg`;
  return `  {
    name: '${esc(meta.name)}',
    slug: '${meta.slug}',
    logoPath: '${logoPath}',
    color: '${meta.color}',
    category: '${meta.category}',
    commonModels: ${formatStringArray(meta.commonModels)},
    services: ${formatStringArray(en.services)},
    coloradoNotes:
      '${esc(en.coloradoNotes)}',
    paragraphs: ${formatStringArray(en.paragraphs, '    ')},
  },`;
}

function buildFailureProfile(hub) {
  const { meta, en } = hub;
  return `  {
    id: '${meta.slug}',
    name: '${esc(meta.name)}',
    commonModels: ${formatStringArray(meta.commonModels)},
    failureProfiles: ${formatFailureProfiles(en.failureProfiles)},
    buyerWarning:
      '${esc(en.buyerWarning)}',
    coloradoNotes:
      '${esc(en.coloradoNotes)}',
  },`;
}

function buildBrandContentEs(hub) {
  const { meta, es } = hub;
  const key = /[^a-zA-Z0-9_$]/.test(meta.slug) ? `'${meta.slug}'` : meta.slug;
  return `  ${key}: {
    failureProfiles: ${formatFailureProfiles(es.failureProfiles, '      ')},
    buyerWarning:
      '${esc(es.buyerWarning)}',
    coloradoNotes:
      '${esc(es.coloradoNotes)}',
    higherScrutiny:
      '${esc(es.higherScrutiny)}',
    coloradoAngle:
      '${esc(es.coloradoAngle)}',
  },`;
}

function modelTypesFor(hub) {
  const { meta } = hub;
  const typeMap = {
    tesla: { 'Model 3': 'ev', 'Model Y': 'ev', 'Model S': 'ev', 'Model X': 'ev', Cybertruck: 'truck' },
    gmc: {
      'Sierra 1500': 'truck',
      Yukon: 'suv',
      Terrain: 'suv',
      Acadia: 'suv',
      Canyon: 'truck',
      'Sierra HD': 'truck',
      'Yukon XL': 'suv',
    },
    lexus: { RX: 'luxury', ES: 'luxury', NX: 'suv', GX: 'suv', IS: 'luxury', UX: 'suv', TX: 'suv' },
    acura: { MDX: 'suv', TLX: 'sedan', RDX: 'suv', Integra: 'sedan', 'TLX Type S': 'performance', 'MDX Type S': 'suv', ZDX: 'ev' },
    'alfa-romeo': { Giulia: 'sedan', Stelvio: 'suv', Tonale: 'suv' },
  };
  const types = typeMap[meta.slug] || {};
  const lines = Object.entries(types).map(([model, type]) => `    ${model.includes(' ') ? `'${model}'` : model}: '${type}',`);
  const key = /[^a-zA-Z0-9_$]/.test(meta.slug) ? `'${meta.slug}'` : meta.slug;
  return `  ${key}: {\n${lines.join('\n')}\n  },`;
}

function buildReliability(hub) {
  const { meta, en } = hub;
  const solid = Array.isArray(en.reliablePicks) ? en.reliablePicks.join(', ') : '';
  return `  {
    id: '${meta.slug}',
    reliablePicks: ${formatStringArray(en.reliablePicks || [])},
    bullets: [
      {
        label: 'Generally solid',
        text: '${esc(solid)} — solid when maintenance is documented.',
      },
      {
        label: 'Higher scrutiny',
        text: '${esc(en.higherScrutiny)}',
      },
      {
        label: 'Colorado angle',
        text: '${esc(en.coloradoAngle)}',
      },
    ],
  },`;
}

function sliceEqualsArray(source, constName) {
  const start = source.indexOf(`export const ${constName}`);
  if (start < 0) throw new Error(`Missing export const ${constName}`);
  const eq = source.indexOf('= [', start);
  if (eq < 0) throw new Error(`Missing = [ for ${constName}`);
  const open = eq + 2; // '['
  let depth = 0;
  let end = -1;
  for (let i = open; i < source.length; i++) {
    if (source[i] === '[') depth++;
    else if (source[i] === ']') {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end < 0) throw new Error(`Unclosed array ${constName}`);
  return { open, end };
}

function insertIntoArrayConst(source, constName, block, alreadyHas) {
  const { open, end } = sliceEqualsArray(source, constName);
  const body = source.slice(open + 1, end);
  if (alreadyHas && body.includes(alreadyHas)) {
    console.log(`skip ${constName} ${alreadyHas}`);
    return source;
  }
  const needsComma = body.trim().length > 0 && !body.trim().endsWith(',');
  return source.slice(0, end) + (needsComma ? ',' : '') + '\n' + block + '\n' + source.slice(end);
}

function insertIntoRecordConst(source, constName, block, alreadyHas) {
  const start = source.indexOf(`export const ${constName}`);
  if (start < 0) throw new Error(`Missing ${constName}`);
  const eq = source.indexOf('= {', start);
  if (eq < 0) throw new Error(`Missing = { for ${constName}`);
  const open = eq + 2;
  let depth = 0;
  let end = -1;
  for (let i = open; i < source.length; i++) {
    if (source[i] === '{') depth++;
    else if (source[i] === '}') {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  const body = source.slice(open + 1, end);
  if (alreadyHas && body.includes(alreadyHas)) {
    console.log(`skip ${constName} ${alreadyHas}`);
    return source;
  }
  const needsComma = body.trim().length > 0 && !body.trim().endsWith(',');
  return source.slice(0, end) + (needsComma ? ',' : '') + '\n' + block + '\n' + source.slice(end);
}

function setFeatured(slug, source) {
  const re = new RegExp(`(\\{ name: '[^']+', slug: '${slug}', color: '[^']+', featured: )false`);
  if (re.test(source)) return source.replace(re, '$1true');
  // Insert missing category logos (Tesla / Alfa)
  if (slug === 'tesla' && !source.includes("slug: 'tesla'")) {
    return source.replace(
      "// Domestic\n",
      "// Domestic\n  { name: 'Tesla', slug: 'tesla', color: '#CC0000', featured: true },\n",
    );
  }
  if (slug === 'alfa-romeo' && !source.includes("slug: 'alfa-romeo'")) {
    return source.replace(
      "// European\n",
      "// European\n  { name: 'Alfa Romeo', slug: 'alfa-romeo', color: '#981E32', featured: true },\n",
    );
  }
  return source;
}

const slugs = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ['gmc', 'lexus', 'acura', 'tesla', 'alfa-romeo'];

const hubs = slugs.map((slug) => {
  const hub = loadHub(slug);
  if (hub.via !== 'bifrost-spark') throw new Error(`${slug} not spark`);
  console.log(`loaded ${slug} via=${hub.via} calls=${hub.callsThisBrand || '?'} resumedEn=${hub.resumedEn || false}`);
  return hub;
});

let brandsTs = fs.readFileSync(path.join(ROOT, 'lib/vehicleBrands.ts'), 'utf8');
for (const hub of hubs) {
  brandsTs = insertIntoArrayConst(brandsTs, 'VEHICLE_BRANDS', buildBrandEntry(hub), `slug: '${hub.meta.slug}'`);
  brandsTs = setFeatured(hub.meta.slug, brandsTs);
}
fs.writeFileSync(path.join(ROOT, 'lib/vehicleBrands.ts'), brandsTs, 'utf8');
console.log('updated lib/vehicleBrands.ts');

let failTs = fs.readFileSync(path.join(ROOT, 'lib/brandFailureProfiles.ts'), 'utf8');
for (const hub of hubs) {
  failTs = insertIntoArrayConst(failTs, 'BRAND_FAILURE_PROFILES', buildFailureProfile(hub), `id: '${hub.meta.slug}'`);
}
fs.writeFileSync(path.join(ROOT, 'lib/brandFailureProfiles.ts'), failTs, 'utf8');
console.log('updated lib/brandFailureProfiles.ts');

let esTs = fs.readFileSync(path.join(ROOT, 'lib/i18n/brandContentEs.ts'), 'utf8');
for (const hub of hubs) {
  if (!hub.es?.failureProfiles || !hub.es?.buyerWarning) {
    console.log(`skip BRAND_CONTENT_ES ${hub.meta.slug} — ES not Spark-generated yet (enOnly=${hub.enOnly})`);
    continue;
  }
  esTs = insertIntoRecordConst(esTs, 'BRAND_CONTENT_ES', buildBrandContentEs(hub), `${hub.meta.slug}: {`);
}
fs.writeFileSync(path.join(ROOT, 'lib/i18n/brandContentEs.ts'), esTs, 'utf8');
console.log('updated lib/i18n/brandContentEs.ts');

let relTs = fs.readFileSync(path.join(ROOT, 'lib/brandReliabilityNotes.ts'), 'utf8');
for (const hub of hubs) {
  relTs = insertIntoArrayConst(relTs, 'BRAND_RELIABILITY_SNAPSHOTS', buildReliability(hub), `id: '${hub.meta.slug}'`);
}
fs.writeFileSync(path.join(ROOT, 'lib/brandReliabilityNotes.ts'), relTs, 'utf8');
console.log('updated lib/brandReliabilityNotes.ts');

let modelsTs = fs.readFileSync(path.join(ROOT, 'lib/vehicleModels.ts'), 'utf8');
const mtStart = modelsTs.indexOf('const MODEL_TYPES');
const mtEq = modelsTs.indexOf('= {', mtStart);
const mtOpen = mtEq + 2;
let depth = 0;
let mtEnd = -1;
for (let i = mtOpen; i < modelsTs.length; i++) {
  if (modelsTs[i] === '{') depth++;
  else if (modelsTs[i] === '}') {
    depth--;
    if (depth === 0) {
      mtEnd = i;
      break;
    }
  }
}
let mtBody = modelsTs.slice(mtOpen + 1, mtEnd);
for (const hub of hubs) {
  if (mtBody.includes(`${hub.meta.slug}: {`)) {
    console.log(`skip MODEL_TYPES ${hub.meta.slug}`);
    continue;
  }
  const needsComma = mtBody.trim().length > 0 && !mtBody.trim().endsWith(',');
  mtBody += (needsComma ? ',' : '') + `\n${modelTypesFor(hub)}\n`;
}
modelsTs = modelsTs.slice(0, mtOpen + 1) + mtBody + modelsTs.slice(mtEnd);
fs.writeFileSync(path.join(ROOT, 'lib/vehicleModels.ts'), modelsTs, 'utf8');
console.log('updated lib/vehicleModels.ts MODEL_TYPES');

console.log('apply-brand-hubs done');
