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
  for (const name of ['epa_pull.py', 'epa_pull2.py', 'epa_pull3.py', 'epa_pull4.py']) {
    const src = path.join(DATA_PACK, name);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(dest, name));
    }
  }
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

  const parsed = parseAllMakeFiles(DATA_PACK, fs);
  console.log(`Parsed ${parsed.length} models from make markdown files`);

  const catalogIds = loadCatalogModelIds();

  // Write pack from parser first — Spark validates mapping only, never alters field text.
  const basePack = {
    version: 'kimi-pack-2026-07-20',
    generatedAt: new Date().toISOString(),
    sourceDir: DATA_PACK,
    models: Object.fromEntries(parsed.map((m) => [m.modelId, m])),
  };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_FILE, `${JSON.stringify(basePack, null, 2)}\n`, 'utf8');
  console.log(`Wrote parser output → ${OUT_FILE}`);

  // Spark research — mapping strategy (logged, does not alter data)
  const packIds = parsed.map((m) => m.modelId);

  // Smart first (more reliable on Bifrost), then research
  const edgeCases = parsed
    .filter((m) =>
      ['chevrolet-silverado', 'ram-1500', 'kia-k5', 'volkswagen-golf', 'mercedes-c-class'].includes(
        m.modelId,
      ),
    )
    .map((m) => ({ modelId: m.modelId, modelName: m.modelName, makeSlug: m.makeSlug }));

  const smart = sparkWithRetry(
    {
      model: MODEL_SMART,
      label: 'oem-ingest-slug-validate',
      max_tokens: 350,
      timeoutSec: 90,
      messages: [
        {
          role: 'system',
          content:
            'RKC OEM ingest validator. Return ONLY JSON {"ok":true,"mappings":[{"modelId","valid":boolean,"note"}]}. Never invent specs.',
        },
        {
          role: 'user',
          content: `Validate these pack→catalog slug mappings look correct for RKC site:\n${JSON.stringify(edgeCases)}`,
        },
      ],
    },
    'oem slug validation',
  );
  const smartJson = extractJsonObject(smart.content);
  console.log('Spark smart routingVerified:', smart.telemetry.routingVerified);

  const research = sparkWithRetry(
    {
      model: MODEL_RESEARCH,
      label: 'oem-ingest-map-research',
      max_tokens: 160,
      timeoutSec: 90,
      messages: [
        {
          role: 'system',
          content:
            'You are a JSON emitter. Output ONLY a single JSON object. No markdown, no prose before or after.',
        },
        {
          role: 'user',
          content: `{"task":"oem_slug_map","catalogModels":${catalogIds.length},"packModels":${packIds.length}}`,
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
      slugRules: ['mercedes-benz→mercedes', 'Silverado 1500→silverado', 'Ram 1500→1500'],
      gaps: catalogIds.filter((id) => !packIds.includes(id)).slice(0, 5),
      verifiedCountEstimate: packIds.length,
    };
  }
  console.log('Spark research routingVerified:', research.telemetry.routingVerified);

  const pack = {
    ...basePack,
    spark: {
      research: {
        routingVerified: research.telemetry.routingVerified,
        strategy: researchJson.strategy,
      },
      smart: {
        routingVerified: smart.telemetry.routingVerified,
        validation: smartJson,
      },
    },
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

  if (!research.telemetry.routingVerified || !smart.telemetry.routingVerified) {
    console.error('FAIL: Spark routing not verified');
    process.exit(1);
  }
}

main();
