/**
 * Parses data/vehicle-images.csv (+ site supplements), downloads source images,
 * converts to WebP, and generates lib/vehicleImages.ts for runtime lookup.
 *
 * Run: node scripts/sync-vehicle-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const csvPath = path.join(root, 'data', 'vehicle-images.csv');
const supplementPath = path.join(root, 'data', 'site-model-supplements.csv');
const brandsPath = path.join(root, 'lib', 'vehicleBrands.ts');
const outTsPath = path.join(root, 'lib', 'vehicleImages.ts');
const DOWNLOAD_DELAY_MS = 2000;

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseCsvLine(line) {
  const fields = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (char === ',' && !inQuotes) {
      fields.push(current.trim());
      current = '';
      continue;
    }
    current += char;
  }
  fields.push(current.trim());
  return fields;
}

function parseCsv(content) {
  const lines = content.split(/\r?\n/).filter(Boolean);
  const header = parseCsvLine(lines[0]);
  const rows = [];

  for (let i = 1; i < lines.length; i += 1) {
    const values = parseCsvLine(lines[i]);
    const row = {};
    header.forEach((key, index) => {
      row[key] = values[index] ?? '';
    });
    rows.push(row);
  }

  return rows;
}

function makeKey(make, model) {
  return `${slugify(make)}::${slugify(model)}`;
}

function publicPathToFs(publicPath) {
  const webPath = publicPath.replace(/^\//, '');
  return path.join(root, 'public', webPath);
}

function isDownloadableUrl(url) {
  return (
    /^https?:\/\//.test(url) &&
    !url.endsWith('/') &&
    !url.includes('media.alpinecars.com') &&
    !url.includes('media.polestar.com')
  );
}

async function downloadAndConvert(sourceUrl, destPath, attempt = 1) {
  const response = await fetch(sourceUrl, {
    headers: { 'User-Agent': 'RKC-Automotive-Site/1.0 (vehicle image sync)' },
  });
  if (response.status === 429 && attempt < 5) {
    const waitMs = DOWNLOAD_DELAY_MS * attempt * 2;
    console.log(`Rate limited, retrying in ${waitMs}ms: ${sourceUrl}`);
    await sleep(waitMs);
    return downloadAndConvert(sourceUrl, destPath, attempt + 1);
  }
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${sourceUrl}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });

  const sharp = (await import('sharp')).default;
  await sharp(buffer)
    .rotate()
    .resize(1600, 900, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(destPath);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function escapeTs(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function loadSiteModelKeys() {
  const keys = new Set();
  const brandsTs = fs.readFileSync(brandsPath, 'utf8');
  const brandBlocks = brandsTs.matchAll(/slug: '([^']+)'[\s\S]*?commonModels: \[([\s\S]*?)\]/g);

  for (const match of brandBlocks) {
    const slug = match[1];
    const models = [...match[2].matchAll(/'([^']+)'/g)].map((m) => m[1]);
    for (const model of models) {
      const makeSlug = slug === 'mercedes' ? 'mercedes-benz' : slug;
      keys.add(`${makeSlug}::${slugify(model)}`);
    }
  }

  return keys;
}

function mergeCsvRows() {
  const mainRows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
  const header = parseCsvLine(fs.readFileSync(csvPath, 'utf8').split(/\r?\n/)[0]);
  const seen = new Set(mainRows.map((row) => makeKey(row.Make, row.Model)));
  const merged = [...mainRows];

  if (fs.existsSync(supplementPath)) {
    const supplementRows = parseCsv(fs.readFileSync(supplementPath, 'utf8'));
    for (const row of supplementRows) {
      const key = makeKey(row.Make, row.Model);
      if (!seen.has(key)) {
        merged.push(row);
        seen.add(key);
      }
    }
  }

  const mergedBody = [
    header.join(','),
    ...merged.map((row) => header.map((key) => row[key] ?? '').join(',')),
  ].join('\n');
  fs.writeFileSync(csvPath, `${mergedBody}\n`);

  return merged;
}

const siteModelKeys = loadSiteModelKeys();
const rows = mergeCsvRows();
const regenerateOnly = process.argv.includes('--regenerate-only');

const entries = rows.map((row) => {
  const make = row.Make;
  const model = row.Model;
  const publicPath = row['Recommended Save Path'].replace(/^\/public/, '');
  const sourceUrl = row['Best Image URL / Source Reference'];
  const fallbackNeeded = row['Fallback Needed'] === 'Yes';

  return {
    make,
    makeSlug: slugify(make),
    model,
    modelSlug: slugify(model),
    key: makeKey(make, model),
    yearRange: row['Recommended Year Range'].replace(/-/g, '–'),
    sourceUrl,
    publicPath,
    alt: row['SEO Alt Text'],
    fallbackNeeded,
    license: row['License / Commercial Note'],
    quality: Number.parseFloat(row['Quality (1-10)']) || 8,
    siteRelevant: siteModelKeys.has(makeKey(make, model)),
  };
});

const downloadOrder = [
  ...entries.filter((entry) => entry.siteRelevant),
  ...entries.filter((entry) => !entry.siteRelevant),
];

let downloaded = 0;
let skipped = 0;
let failed = 0;

for (const entry of downloadOrder) {
  const destPath = publicPathToFs(entry.publicPath);

  if (regenerateOnly || fs.existsSync(destPath)) {
    skipped += 1;
    continue;
  }

  if (!isDownloadableUrl(entry.sourceUrl) || entry.fallbackNeeded) {
    console.log(`Skip (no direct URL): ${entry.make} ${entry.model}`);
    skipped += 1;
    continue;
  }

  try {
    await downloadAndConvert(entry.sourceUrl, destPath);
    downloaded += 1;
    console.log(`Saved ${entry.publicPath}`);
    await sleep(DOWNLOAD_DELAY_MS);
  } catch (error) {
    failed += 1;
    console.warn(`Failed ${entry.make} ${entry.model}: ${error.message}`);
  }
}

const ts = `/**
 * Auto-generated by scripts/sync-vehicle-images.mjs — do not edit by hand.
 * Source: data/vehicle-images.csv + data/site-model-supplements.csv
 */

export type VehicleImageMatchType = 'exact' | 'make' | 'category';

export type VehicleImageRecord = {
  make: string;
  makeSlug: string;
  model: string;
  modelSlug: string;
  yearRange: string;
  imagePath: string;
  sourceUrl: string;
  alt: string;
  fallbackNeeded: boolean;
  license: string;
  quality: number;
};

export const VEHICLE_IMAGE_DATA: VehicleImageRecord[] = [
${entries
  .map(
    (entry) => `  {
    make: '${escapeTs(entry.make)}',
    makeSlug: '${entry.makeSlug}',
    model: '${escapeTs(entry.model)}',
    modelSlug: '${entry.modelSlug}',
    yearRange: '${escapeTs(entry.yearRange)}',
    imagePath: '${entry.publicPath}',
    sourceUrl: '${escapeTs(entry.sourceUrl)}',
    alt: '${escapeTs(entry.alt)}',
    fallbackNeeded: ${entry.fallbackNeeded},
    license: '${escapeTs(entry.license)}',
    quality: ${entry.quality},
  }`,
  )
  .join(',\n')}
];

const IMAGE_LOOKUP = new Map<string, VehicleImageRecord>(
  VEHICLE_IMAGE_DATA.map((record) => [\`\${record.makeSlug}::\${record.modelSlug}\`, record]),
);

/** Site model names that differ from the CSV model column. */
const MODEL_ALIASES: Record<string, Record<string, string>> = {
  bmw: {
    '3 series': '3-series',
    '5 series': '5-series',
  },
  chevrolet: {
    silverado: 'silverado-1500',
  },
  gmc: {
    sierra: 'sierra-1500',
  },
  ram: {
    '1500': '1500',
    '2500': '2500',
    '3500': '3500',
  },
};

/** Brand slugs on the site that differ from CSV make slugs. */
const MAKE_ALIASES: Record<string, string> = {
  mercedes: 'mercedes-benz',
};

function normalizeToken(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function resolveNormalizedMake(makeSlug: string): string {
  return MAKE_ALIASES[makeSlug] ?? makeSlug;
}

function resolveLookupKey(makeSlug: string, model: string): string {
  const normalizedMake = resolveNormalizedMake(makeSlug);
  const normalizedModel = MODEL_ALIASES[makeSlug]?.[model.toLowerCase()] ?? normalizeToken(model);
  return \`\${normalizedMake}::\${normalizedModel}\`;
}

export function getVehicleImageRecord(makeSlug: string, model: string): VehicleImageRecord | undefined {
  return IMAGE_LOOKUP.get(resolveLookupKey(makeSlug, model));
}

function getSameMakeFallback(makeSlug: string, requestedModel: string): VehicleImageRecord | undefined {
  const normalizedMake = resolveNormalizedMake(makeSlug);
  const requestedKey = resolveLookupKey(makeSlug, requestedModel);
  const candidates = VEHICLE_IMAGE_DATA.filter(
    (record) => record.makeSlug === normalizedMake && !record.fallbackNeeded,
  );
  if (candidates.length === 0) return undefined;

  return [...candidates].sort((a, b) => {
    const aExact = \`\${a.makeSlug}::\${a.modelSlug}\` === requestedKey ? 1 : 0;
    const bExact = \`\${b.makeSlug}::\${b.modelSlug}\` === requestedKey ? 1 : 0;
    if (aExact !== bExact) return bExact - aExact;
    return b.quality - a.quality;
  })[0];
}

export function resolveVehicleImageSrc(record: VehicleImageRecord | undefined): string | undefined {
  if (!record) return undefined;
  if (record.fallbackNeeded) {
    return isRemoteImage(record.sourceUrl) ? record.sourceUrl : undefined;
  }
  return record.imagePath;
}

export function resolveVehicleImageAlt(
  record: VehicleImageRecord | undefined,
  brandName: string,
  model: string,
): string {
  return record?.alt ?? \`\${brandName} \${model} maintenance service in Englewood CO\`;
}

function isRemoteImage(src: string): boolean {
  return src.startsWith('http://') || src.startsWith('https://');
}

export function getVehicleImage(makeSlug: string, brandName: string, model: string) {
  const exactRecord = getVehicleImageRecord(makeSlug, model);
  if (exactRecord) {
    return {
      record: exactRecord,
      src: resolveVehicleImageSrc(exactRecord),
      alt: resolveVehicleImageAlt(exactRecord, brandName, model),
      yearRange: exactRecord.yearRange,
      matchType: 'exact' as VehicleImageMatchType,
      isRepresentative: false,
    };
  }

  const makeRecord = getSameMakeFallback(makeSlug, model);
  if (makeRecord) {
    return {
      record: makeRecord,
      src: resolveVehicleImageSrc(makeRecord),
      alt: \`\${brandName} \${model} maintenance service in Englewood CO\`,
      yearRange: makeRecord.yearRange,
      matchType: 'make' as VehicleImageMatchType,
      isRepresentative: true,
    };
  }

  return {
    record: undefined,
    src: undefined,
    alt: \`\${brandName} \${model} maintenance service in Englewood CO\`,
    yearRange: undefined,
    matchType: 'category' as VehicleImageMatchType,
    isRepresentative: true,
  };
}
`;

fs.writeFileSync(outTsPath, ts);
console.log(`Generated ${path.relative(root, outTsPath)}`);
console.log(`Site-relevant models: ${entries.filter((e) => e.siteRelevant).length}`);
console.log(`Downloaded: ${downloaded}, skipped: ${skipped}, failed: ${failed}`);
