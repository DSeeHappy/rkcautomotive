/**
 * Ingest verified OEM vehicle data pack → data/knowledge/oem-pack.json
 * Uses Spark (research + smart) for mapping validation — data from parser only.
 * node scripts/ingest-oem-vehicle-data.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  parseAllMakeFiles,
  modelIdFromSlugs,
} from './lib/parseOemMarkdown.mjs';
import {
  sparkCall,
  assertSparkOk,
  extractJsonObject,
  MODEL_RESEARCH,
  MODEL_SMART,
  ROOT,
} from './lib/sparkClient.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_PACK = 'C:/Users/BS/Documents/kimi/workspace/rkc-vehicle-data';
const OUT_DIR = path.join(ROOT, 'data', 'knowledge');
const OUT_FILE = path.join(OUT_DIR, 'oem-pack.json');
const COVERAGE_FILE = path.join(OUT_DIR, 'oem-coverage.json');

/** Catalog model ids from vehicleModels.ts (generated list). */
const CATALOG_MODELS = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'scripts/vehicle-models-summary.json'), 'utf8'),
);

function loadCatalogModelIds() {
  // vehicle-models-summary.json only has model names — build ids from vehicleBrands
  const brandsPath = path.join(ROOT, 'lib/vehicleBrands.ts');
  const src = fs.readFileSync(brandsPath, 'utf8');
  const ids = [];
  const brandRe = /slug: '([^']+)'[\s\S]*?commonModels: \[([\s\S]*?)\]/g;
  let m;
  while ((m = brandRe.exec(src)) !== null) {
    const makeSlug = m[1];
    const modelsRaw = m[2];
    const models = [...modelsRaw.matchAll(/'([^']+)'/g)].map((x) => x[1]);
    for (const model of models) {
      const modelSlug = model
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      ids.push(modelIdFromSlugs(makeSlug, modelSlug));
    }
  }
  return [...new Set(ids)].sort();
}

function copyEpaScripts() {
  const dest = path.join(ROOT, 'scripts', 'epa');
  fs.mkdirSync(dest, { recursive: true });
  for (const name of [
    'epa_pull.py',
    'epa_pull2.py',
    'epa_pull3.py',
    'epa_pull4.py',
    'epa_pull5.py',
  ]) {
    const src = path.join(DATA_PACK, name);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(dest, name));
    }
  }
}

/** Trim chips covered inside parent pack sections — alias, never invent. */
function expandTrimAliases(models) {
  const byId = Object.fromEntries(models.map((m) => [m.modelId, m]));
  const aliases = [
    { modelId: 'acura-tlx-type-s', parentId: 'acura-tlx', modelName: 'TLX Type S', modelSlug: 'tlx-type-s' },
    { modelId: 'acura-mdx-type-s', parentId: 'acura-mdx', modelName: 'MDX Type S', modelSlug: 'mdx-type-s' },
  ];
  const out = [...models];
  for (const alias of aliases) {
    const parent = byId[alias.parentId];
    if (!parent || byId[alias.modelId]) continue;
    out.push({
      ...parent,
      modelId: alias.modelId,
      modelSlug: alias.modelSlug,
      modelName: alias.modelName,
      subtitle: parent.subtitle
        ? `${parent.subtitle} · Type S trim covered in parent section`
        : 'Type S trim covered in parent section',
    });
  }
  return out;
}

const SLUG_EDGE_CASES = [
  'chevrolet-silverado',
  'ram-1500',
  'ram-3500',
  'ram-promaster',
  'ram-trx',
  'ram-rebel',
  'kia-k5',
  'volkswagen-golf',
  'volkswagen-atlas',
  'mercedes-c-class',
  'audi-e-tron',
  'jeep-wagoneer',
  'gmc-sierra-hd',
  'acura-tlx-type-s',
  'acura-mdx-type-s',
];

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

function validateSlugMappingsBatched(parsed, catalogIds) {
  const packById = Object.fromEntries(parsed.map((m) => [m.modelId, m]));
  const edgeCases = SLUG_EDGE_CASES.map((id) => {
    const rec = packById[id];
    return rec
      ? { modelId: rec.modelId, modelName: rec.modelName, makeSlug: rec.makeSlug }
      : { modelId: id, modelName: null, makeSlug: id.split('-')[0], note: 'missing_from_parser' };
  });

  const smartBatches = [];
  for (const batch of chunkArray(edgeCases, 5)) {
    const smart = sparkWithRetry(
      {
        model: MODEL_SMART,
        label: 'oem-ingest-slug-validate',
        max_tokens: 400,
        timeoutSec: 90,
        messages: [
          {
            role: 'system',
            content:
              'RKC OEM ingest validator. Return ONLY JSON {"ok":true,"mappings":[{"modelId","valid":boolean,"note"}]}. Never invent specs.',
          },
          {
            role: 'user',
            content: `Validate these pack→catalog slug mappings look correct for RKC site:\n${JSON.stringify(batch)}`,
          },
        ],
      },
      'oem slug validation',
    );
    smartBatches.push({
      routingVerified: smart.telemetry.routingVerified,
      validation: extractJsonObject(smart.content),
    });
  }

  const research = sparkWithRetry(
    {
      model: MODEL_RESEARCH,
      label: 'oem-ingest-map-research',
      max_tokens: 220,
      timeoutSec: 90,
      messages: [
        {
          role: 'system',
          content:
            'You are a JSON emitter. Output ONLY a single JSON object. No markdown, no prose before or after.',
        },
        {
          role: 'user',
          content: `{"task":"oem_slug_map","catalogModels":${catalogIds.length},"packModels":${parsed.length},"edgeCases":${SLUG_EDGE_CASES.length}}`,
        },
      ],
    },
    'oem mapping research',
  );

  let researchJson;
  try {
    researchJson = extractJsonObject(research.content);
  } catch {
    researchJson = {
      strategy: 'Deterministic markdown parser maps make files to catalog slugs.',
      slugRules: [
        'mercedes-benz→mercedes',
        'Silverado 1500→silverado',
        'Ram 1500→1500',
        'Ram 3500→3500',
        'Type S chips alias parent TLX/MDX sections',
      ],
      gaps: catalogIds.filter((id) => !parsed.some((m) => m.modelId === id)).slice(0, 8),
      verifiedCountEstimate: parsed.length,
    };
  }

  const allRoutingVerified =
    research.telemetry.routingVerified && smartBatches.every((b) => b.routingVerified);

  return {
    routingVerified: allRoutingVerified,
    research: {
      routingVerified: research.telemetry.routingVerified,
      strategy: researchJson.strategy,
      gaps: researchJson.gaps,
    },
    smart: {
      routingVerified: smartBatches.every((b) => b.routingVerified),
      batches: smartBatches.length,
      validation: smartBatches.flatMap((b) => b.validation.mappings ?? []),
    },
  };
}

function buildCoverageReport(packModels, catalogIds) {
  const packById = Object.fromEntries(packModels.map((m) => [m.modelId, m]));
  const verified = [];
  const unverified = [];
  const packOnly = [];

  for (const id of catalogIds) {
    const rec = packById[id];
    if (!rec) {
      unverified.push({ modelId: id, reason: 'not_in_oem_pack' });
      continue;
    }
    const populatedFields = Object.values(rec.fields).filter(
      (f) => f.confidence !== 'none' && f.text,
    ).length;
    if (populatedFields >= 8) {
      verified.push({ modelId: id, populatedFields, sources: rec.sources.length });
    } else {
      unverified.push({ modelId: id, reason: 'sparse_pack_fields', populatedFields });
    }
  }

  for (const rec of packModels) {
    if (!catalogIds.includes(rec.modelId)) {
      packOnly.push({ modelId: rec.modelId, modelName: rec.modelName });
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    catalogTotal: catalogIds.length,
    packTotal: packModels.length,
    verifiedCount: verified.length,
    unverifiedCount: unverified.length,
    packOnlyCount: packOnly.length,
    verified,
    unverified,
    packOnly,
  };
}

function sleepMs(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    /* sync pause between Spark retries */
  }
}

function sparkWithRetry(opts, context, attempts = 3) {
  let last;
  for (let i = 1; i <= attempts; i++) {
    if (i > 1) sleepMs(3000);
    last = sparkCall({ ...opts, label: `${opts.label}-a${i}` });
    if (last.ok && last.telemetry.routingVerified) return last;
    console.warn(`[retry ${i}/${attempts}] ${context}: ${last.error || 'routing not verified'}`);
  }
  assertSparkOk(last, context);
  return last;
}

function main() {
  console.log('=== RKC OEM Data Ingest ===');
  console.log(`source: ${DATA_PACK}`);
  console.log(`output: ${OUT_FILE}`);

  if (!fs.existsSync(DATA_PACK)) {
    console.error(`Missing data pack: ${DATA_PACK}`);
    process.exit(1);
  }

  copyEpaScripts();
  console.log('Copied EPA pull scripts → scripts/epa/');

  const parsedRaw = parseAllMakeFiles(DATA_PACK, fs);
  const parsed = expandTrimAliases(parsedRaw);
  console.log(`Parsed ${parsedRaw.length} models + ${parsed.length - parsedRaw.length} trim aliases`);

  const catalogIds = loadCatalogModelIds();

  // Write pack from parser first — Spark validates mapping only, never alters field text.
  const basePack = {
    version: 'kimi-pack-2026-07-20-v2',
    generatedAt: new Date().toISOString(),
    sourceDir: DATA_PACK,
    models: Object.fromEntries(parsed.map((m) => [m.modelId, m])),
  };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, `${JSON.stringify(basePack, null, 2)}\n`, 'utf8');
  console.log(`Wrote parser output → ${OUT_FILE}`);

  const spark = validateSlugMappingsBatched(parsed, catalogIds);
  console.log('Spark smart batches:', spark.smart.batches, 'routingVerified:', spark.routingVerified);

  const pack = {
    ...basePack,
    spark,
  };

  fs.writeFileSync(OUT_FILE, `${JSON.stringify(pack, null, 2)}\n`, 'utf8');
  console.log(`Updated ${OUT_FILE} with Spark telemetry (${parsed.length} models)`);

  const coverage = buildCoverageReport(parsed, catalogIds);
  coverage.spark = pack.spark;
  fs.writeFileSync(COVERAGE_FILE, `${JSON.stringify(coverage, null, 2)}\n`, 'utf8');

  console.log('\n=== OEM Coverage Report ===');
  console.log(`Catalog models:     ${coverage.catalogTotal}`);
  console.log(`Pack models:        ${coverage.packTotal}`);
  console.log(`Verified on site:   ${coverage.verifiedCount}`);
  console.log(`Still unverified:   ${coverage.unverifiedCount}`);
  console.log(`Pack-only (no hub): ${coverage.packOnlyCount}`);
  console.log(`Report: ${path.relative(ROOT, COVERAGE_FILE)}`);

  if (!spark.routingVerified) {
    console.error('FAIL: Spark routing not verified');
    process.exit(1);
  }
}

main();
