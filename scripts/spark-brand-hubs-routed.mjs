/**
 * Generate missing brand hubs with correct routing:
 * - EN hub chunks (paragraphs/failures) → large → research
 * - Tiny fields / ES one-object translates → small → smart
 *
 * Usage: node scripts/spark-brand-hubs-routed.mjs [slug...]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  ROOT,
  sparkRoutedRetry,
  getCallCount,
  extractJsonFromSparkFile,
  BASE,
} from './spark-routed.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  'Translate RKC Automotive Englewood CO copy to natural US/Mexican Spanish. Return ONLY JSON identical keys. Keep proper nouns, models, I-25, I-70, ASE, $120/hr. Use usted.';

function tryResumeEn(slug) {
  const logDir = path.join(ROOT, 'scripts', '.spark-logs');
  const files = fs.readdirSync(logDir).filter((f) => f.startsWith(`res-${slug}-`) && f.endsWith('.json'));
  if (!files.length) return null;
  const byLabel = {};
  for (const f of files) {
    // res-gmc-services-vllm_research-c1-....json
    const m = f.match(new RegExp(`^res-${slug}-(services|paragraphs|failures|picks)-`));
    if (!m) continue;
    const label = m[1];
    const full = path.join(logDir, f);
    try {
      const ex = extractJsonFromSparkFile(full);
      // prefer smart picks if research truncated; prefer latest by mtime
      const st = fs.statSync(full);
      if (!byLabel[label] || st.mtimeMs > byLabel[label].mtime) {
        byLabel[label] = { ...ex, mtime: st.mtimeMs, file: f };
      }
    } catch {
      /* skip bad */
    }
  }
  if (!byLabel.services || !byLabel.paragraphs || !byLabel.failures || !byLabel.picks) return null;
  return {
    services: byLabel.services.parsed.services,
    coloradoNotes: byLabel.services.parsed.coloradoNotes,
    paragraphs: byLabel.paragraphs.parsed.paragraphs,
    failureProfiles: byLabel.failures.parsed.failureProfiles,
    buyerWarning: byLabel.failures.parsed.buyerWarning,
    reliablePicks: byLabel.picks.parsed.reliablePicks,
    higherScrutiny: byLabel.picks.parsed.higherScrutiny,
    coloradoAngle: byLabel.picks.parsed.coloradoAngle,
    resumeFrom: Object.fromEntries(Object.entries(byLabel).map(([k, v]) => [k, v.file])),
  };
}

function generateBrand(slug) {
  const meta = BRANDS[slug];
  if (!meta) throw new Error(`unknown ${slug}`);
  const models = meta.commonModels.join(', ');
  const callMetas = [];
  let en = tryResumeEn(slug);

  if (en) {
    console.log(`[resume] ${slug} EN from Spark logs: ${JSON.stringify(en.resumeFrom)}`);
  } else {
    const a = sparkRoutedRetry(
      'large',
      `${slug}-services`,
      `For ${meta.name} (${meta.category}) at RKC Englewood. Models: ${models}.
Return JSON: {"services":["5 short service lines"],"coloradoNotes":"1-2 sentences Colorado-specific for this brand"}`,
      { max_tokens: 700 },
    );
    callMetas.push(a.meta);

    const b = sparkRoutedRetry(
      'large',
      `${slug}-paragraphs`,
      `For ${meta.name} at RKC Automotive Englewood CO. Models: ${models}.
Return JSON: {"paragraphs":["p1","p2","p3"]} — three unique SEO intro paragraphs, 2-3 sentences each, mention Englewood.`,
      { max_tokens: 900 },
    );
    callMetas.push(b.meta);

    const c = sparkRoutedRetry(
      'large',
      `${slug}-failures`,
      `For ${meta.name} diagnostics at RKC Englewood. Models: ${models}.
${slug === 'tesla' ? 'Independent shop: HV safety, 12V, brakes, suspension, thermal — NOT Tesla Service Center.' : ''}
Return JSON: {"failureProfiles":[{"title":"...","description":"..."},{"title":"...","description":"..."},{"title":"...","description":"..."}],"buyerWarning":"1 paragraph for used buyers"}`,
      { max_tokens: 1100 },
    );
    callMetas.push(c.meta);

    const d = sparkRoutedRetry(
      'small',
      `${slug}-picks`,
      `For ${meta.name}. Models: ${models}.
Return ONLY JSON: {"reliablePicks":["3-5 names"],"higherScrutiny":"1 sentence","coloradoAngle":"1 sentence"}`,
      { max_tokens: 400 },
    );
    callMetas.push(d.meta);

    en = {
      services: a.parsed.services,
      coloradoNotes: a.parsed.coloradoNotes,
      paragraphs: b.parsed.paragraphs,
      failureProfiles: c.parsed.failureProfiles,
      buyerWarning: c.parsed.buyerWarning,
      reliablePicks: d.parsed.reliablePicks,
      higherScrutiny: d.parsed.higherScrutiny,
      coloradoAngle: d.parsed.coloradoAngle,
    };
  }

  // Checkpoint EN before ES so Tailscale resets don't lose Spark EN work
  const enOut = {
    meta,
    via: 'bifrost-spark',
    endpoint: `${BASE}/chat/completions`,
    resumedEn: Boolean(en.resumeFrom),
    resumeFrom: en.resumeFrom || null,
    enOnly: true,
    callsThisBrand: callMetas.length,
    callMetas: [...callMetas],
    en: {
      services: en.services,
      coloradoNotes: en.coloradoNotes,
      paragraphs: en.paragraphs,
      failureProfiles: en.failureProfiles,
      buyerWarning: en.buyerWarning,
      reliablePicks: en.reliablePicks,
      higherScrutiny: en.higherScrutiny,
      coloradoAngle: en.coloradoAngle,
    },
    es: null,
  };
  fs.writeFileSync(path.join(ROOT, `.tmp-brand-hub-${slug}.json`), JSON.stringify(enOut, null, 2));
  console.log(`CHECKPOINT EN .tmp-brand-hub-${slug}.json`);

  // ES: one field / one profile at a time → small → smart (avoids Tailscale resets)
  const esParts = { failureProfiles: [] };
  try {
    for (let i = 0; i < en.failureProfiles.length; i++) {
      const out = sparkRoutedRetry(
        'small',
        `${slug}-es-fp${i}`,
        `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ item: en.failureProfiles[i] })}`,
        { system: ES_SYS, max_tokens: 350 },
        5,
      );
      callMetas.push(out.meta);
      esParts.failureProfiles.push(out.parsed.item);
    }
    for (const field of ['buyerWarning', 'coloradoNotes', 'higherScrutiny', 'coloradoAngle']) {
      const out = sparkRoutedRetry(
        'small',
        `${slug}-es-${field}`,
        `Translate to Spanish. Return ONLY JSON: ${JSON.stringify({ [field]: en[field] })}`,
        { system: ES_SYS, max_tokens: 280 },
        5,
      );
      callMetas.push(out.meta);
      esParts[field] = out.parsed[field];
    }
  } catch (err) {
    console.error(`[es-partial] ${slug} EN checkpoint kept; ES incomplete: ${String(err.message).slice(0, 160)}`);
    console.log(`WROTE .tmp-brand-hub-${slug}.json (enOnly=true) sessionCalls=${getCallCount()}`);
    return enOut;
  }

  const out = {
    ...enOut,
    enOnly: false,
    callsThisBrand: callMetas.length,
    callMetas,
    es: esParts,
  };
  fs.writeFileSync(path.join(ROOT, `.tmp-brand-hub-${slug}.json`), JSON.stringify(out, null, 2));
  console.log(`WROTE .tmp-brand-hub-${slug}.json sessionCalls=${getCallCount()}`);
  return out;
}

const slugs = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(BRANDS);
try {
  for (const slug of slugs) {
    generateBrand(slug);
  }
  console.log(`DONE brands=${slugs.length} bifrostCalls=${getCallCount()}`);
} catch (err) {
  console.error(`SPARK FAILED after ${getCallCount()} calls — STOP. Do not invent copy.`);
  console.error(String(err.message || err).slice(0, 500));
  process.exit(1);
}
