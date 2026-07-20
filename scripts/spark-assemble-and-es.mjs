/**
 * Assemble .tmp-brand-hub-{slug}.json EN from proven Spark log files (no new invent).
 * Then translate ES one tiny field at a time via smart (small) / research only if batch large.
 *
 * Usage: node scripts/spark-assemble-and-es.mjs gmc
 */
import fs from 'fs';
import path from 'path';
import {
  ROOT,
  sparkRoutedRetry,
  extractJsonFromSparkFile,
  getCallCount,
  BASE,
} from './spark-routed.mjs';

const BRANDS = {
  gmc: {
    name: 'GMC',
    slug: 'gmc',
    category: 'domestic',
    color: '#C41230',
    commonModels: ['Sierra 1500', 'Yukon', 'Terrain', 'Acadia', 'Canyon', 'Sierra HD', 'Yukon XL'],
  },
  lexus: {
    name: 'Lexus',
    slug: 'lexus',
    category: 'import',
    color: '#1A1A1A',
    logoPath: '/images/brands/lexus.png',
    commonModels: ['RX', 'ES', 'NX', 'GX', 'IS', 'UX', 'TX'],
  },
  acura: {
    name: 'Acura',
    slug: 'acura',
    category: 'import',
    color: '#000000',
    commonModels: ['MDX', 'TLX', 'RDX', 'Integra', 'TLX Type S', 'MDX Type S', 'ZDX'],
  },
  tesla: {
    name: 'Tesla',
    slug: 'tesla',
    category: 'domestic',
    color: '#CC0000',
    commonModels: ['Model 3', 'Model Y', 'Model S', 'Model X', 'Cybertruck'],
  },
  'alfa-romeo': {
    name: 'Alfa Romeo',
    slug: 'alfa-romeo',
    category: 'import',
    color: '#981E32',
    commonModels: ['Giulia', 'Stelvio', 'Tonale'],
  },
};

const ES_SYS =
  'Translate to natural US/Mexican Spanish. Return ONLY JSON same keys. Keep proper nouns. Use usted.';

function loadEnFromLogs(slug) {
  const logDir = path.join(ROOT, 'scripts', '.spark-logs');
  const files = fs.readdirSync(logDir).filter((f) => f.startsWith(`res-${slug}-`) && f.endsWith('.json'));
  const byLabel = {};
  for (const f of files) {
    const m = f.match(new RegExp(`^res-${slug}-(services|paragraphs|failures|picks)-`));
    if (!m) continue;
    const label = m[1];
    const full = path.join(logDir, f);
    try {
      const ex = extractJsonFromSparkFile(full);
      const st = fs.statSync(full);
      // Prefer complete JSON; for picks prefer smart if research truncated
      if (!byLabel[label] || st.mtimeMs > byLabel[label].mtime) {
        byLabel[label] = { ...ex, mtime: st.mtimeMs, file: f };
      }
    } catch {
      /* skip */
    }
  }
  if (!byLabel.services?.parsed?.services) throw new Error(`${slug}: missing services Spark log`);
  if (!byLabel.paragraphs?.parsed?.paragraphs) throw new Error(`${slug}: missing paragraphs Spark log`);
  if (!byLabel.failures?.parsed?.failureProfiles) throw new Error(`${slug}: missing failures Spark log`);
  if (!byLabel.picks?.parsed?.reliablePicks) throw new Error(`${slug}: missing picks Spark log`);
  return {
    en: {
      services: byLabel.services.parsed.services,
      coloradoNotes: byLabel.services.parsed.coloradoNotes,
      paragraphs: byLabel.paragraphs.parsed.paragraphs,
      failureProfiles: byLabel.failures.parsed.failureProfiles,
      buyerWarning: byLabel.failures.parsed.buyerWarning,
      reliablePicks: byLabel.picks.parsed.reliablePicks,
      higherScrutiny: byLabel.picks.parsed.higherScrutiny,
      coloradoAngle: byLabel.picks.parsed.coloradoAngle,
    },
    resumeFrom: Object.fromEntries(Object.entries(byLabel).map(([k, v]) => [k, v.file])),
  };
}

function translateEsTiny(en) {
  const callMetas = [];
  const es = { failureProfiles: [] };

  // Each failure profile alone = small → smart
  for (let i = 0; i < en.failureProfiles.length; i++) {
    const out = sparkRoutedRetry(
      'small',
      `es-fp-${i}`,
      `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ item: en.failureProfiles[i] })}`,
      { system: ES_SYS, max_tokens: 350 },
      5,
    );
    callMetas.push(out.meta);
    es.failureProfiles.push(out.parsed.item);
  }

  for (const field of ['buyerWarning', 'coloradoNotes', 'higherScrutiny', 'coloradoAngle']) {
    const out = sparkRoutedRetry(
      'small',
      `es-${field}`,
      `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ [field]: en[field] })}`,
      { system: ES_SYS, max_tokens: 280 },
      5,
    );
    callMetas.push(out.meta);
    es[field] = out.parsed[field];
  }
  return { es, callMetas };
}

const slug = process.argv[2];
if (!slug || !BRANDS[slug]) {
  console.error('Usage: node scripts/spark-assemble-and-es.mjs <slug>');
  process.exit(1);
}

try {
  const { en, resumeFrom } = loadEnFromLogs(slug);
  console.log(`[assemble] ${slug} EN from Spark logs`, resumeFrom);
  const { es, callMetas } = translateEsTiny(en);
  const out = {
    meta: BRANDS[slug],
    via: 'bifrost-spark',
    endpoint: `${BASE}/chat/completions`,
    resumedEn: true,
    resumeFrom,
    callsThisBrand: callMetas.length,
    callMetas,
    en,
    es,
  };
  fs.writeFileSync(path.join(ROOT, `.tmp-brand-hub-${slug}.json`), JSON.stringify(out, null, 2));
  console.log(`WROTE .tmp-brand-hub-${slug}.json calls=${getCallCount()}`);
} catch (err) {
  console.error(`SPARK FAILED after ${getCallCount()} calls — STOP.`);
  console.error(String(err.message || err).slice(0, 500));
  process.exit(1);
}
