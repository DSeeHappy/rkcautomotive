/**
 * Write EN-only hub JSON from Spark logs (no invented copy).
 * Optional: --es to translate via smart one field at a time.
 * Usage: node scripts/spark-hub-from-logs.mjs acura [--es]
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import {
  ROOT,
  BASE,
  sparkRoutedRetry,
  extractJsonFromSparkFile,
  getCallCount,
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

function loadEn(slug) {
  const logDir = path.join(ROOT, 'scripts', '.spark-logs');
  const files = fs.readdirSync(logDir).filter((f) => f.startsWith(`res-${slug}-`) && f.endsWith('.json'));
  const byLabel = {};
  for (const f of files) {
    const m = f.match(new RegExp(`^res-${slug}-(services|paragraphs|failures|picks)`));
    if (!m) continue;
    const label = m[1];
    const full = path.join(logDir, f);
    try {
      const ex = extractJsonFromSparkFile(full);
      const st = fs.statSync(full);
      if (!byLabel[label] || st.mtimeMs > byLabel[label].mtime) {
        byLabel[label] = { ...ex, mtime: st.mtimeMs, file: f };
      }
    } catch {
      /* skip */
    }
  }
  for (const need of ['services', 'paragraphs', 'failures', 'picks']) {
    if (!byLabel[need]) throw new Error(`${slug}: missing Spark log for ${need}`);
  }
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

function sleep(sec) {
  spawnSync('powershell', ['-Command', `Start-Sleep -Seconds ${sec}`], { stdio: 'ignore' });
}

const slug = process.argv[2];
const doEs = process.argv.includes('--es');
if (!slug || !BRANDS[slug]) {
  console.error('Usage: node scripts/spark-hub-from-logs.mjs <slug> [--es]');
  process.exit(1);
}

try {
  const { en, resumeFrom } = loadEn(slug);
  const out = {
    meta: BRANDS[slug],
    via: 'bifrost-spark',
    endpoint: `${BASE}/chat/completions`,
    resumedEn: true,
    resumeFrom,
    enOnly: !doEs,
    en,
    es: null,
    callMetas: [],
  };

  if (doEs) {
    const es = { failureProfiles: [] };
    for (let i = 0; i < en.failureProfiles.length; i++) {
      sleep(3);
      const r = sparkRoutedRetry(
        'small',
        `${slug}-es-fp${i}`,
        `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ item: en.failureProfiles[i] })}`,
        { system: ES_SYS, max_tokens: 350 },
        6,
      );
      out.callMetas.push(r.meta);
      es.failureProfiles.push(r.parsed.item);
    }
    for (const field of ['buyerWarning', 'coloradoNotes', 'higherScrutiny', 'coloradoAngle']) {
      sleep(3);
      const r = sparkRoutedRetry(
        'small',
        `${slug}-es-${field}`,
        `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ [field]: en[field] })}`,
        { system: ES_SYS, max_tokens: 280 },
        6,
      );
      out.callMetas.push(r.meta);
      es[field] = r.parsed[field];
    }
    out.es = es;
    out.enOnly = false;
  }

  fs.writeFileSync(path.join(ROOT, `.tmp-brand-hub-${slug}.json`), JSON.stringify(out, null, 2));
  console.log(`WROTE .tmp-brand-hub-${slug}.json enOnly=${out.enOnly} calls=${getCallCount()}`);
} catch (err) {
  console.error(`FAILED after ${getCallCount()} calls — STOP.`);
  console.error(String(err.message || err).slice(0, 500));
  process.exit(1);
}
