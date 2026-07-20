/**
 * Translate all 20 area city bodies via Bifrost ds (vllm/smart failover research).
 * Writes lib/i18n/areaBodies.ts
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';
import {
  sparkTranslate,
  DS_SMART,
  DS_RESEARCH,
  flattenStrings,
  unflattenStrings,
} from './spark-ds-parallel.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_PATH = path.join(ROOT, '.tmp-areas-en.json');
const OUT = path.join(ROOT, 'lib/i18n/areaBodies.ts');
const PROGRESS = path.join(ROOT, '.tmp-areas-progress.json');

function sleep(ms) {
  spawnSync('powershell', ['-Command', `Start-Sleep -Milliseconds ${ms}`], { stdio: 'ignore' });
}

function translateCity(city, doneKeys) {
  const payload = {
    description: city.description,
    directions: city.directions,
    whyChoose: city.whyChoose,
    localParagraphs: city.localParagraphs,
  };
  const flat = flattenStrings(payload);
  const esFlat = {};
  for (const [k, v] of Object.entries(flat)) {
    const id = `${city.slug}:${k}`;
    if (doneKeys[id]) {
      esFlat[k] = doneKeys[id];
      continue;
    }
    const { parsed } = sparkTranslate({ [k]: v }, `area-${city.slug}-${k.replace(/[^a-z0-9]/gi, '_')}`, {
      models: [DS_SMART, DS_RESEARCH],
    });
    esFlat[k] = parsed[k];
    doneKeys[id] = parsed[k];
    fs.writeFileSync(PROGRESS, JSON.stringify(doneKeys, null, 2));
    sleep(250);
  }
  return unflattenStrings(esFlat);
}

async function main() {
  if (!fs.existsSync(EN_PATH)) {
    console.error('Missing', EN_PATH, '— extract areas first');
    process.exit(1);
  }
  const { cities } = JSON.parse(fs.readFileSync(EN_PATH, 'utf8'));
  const doneKeys = fs.existsSync(PROGRESS) ? JSON.parse(fs.readFileSync(PROGRESS, 'utf8')) : {};
  console.log('cities', cities.length, 'resume keys', Object.keys(doneKeys).length);

  const ping = sparkTranslate({ ping: 'AREA_OK' }, 'area-main-ping', { models: [DS_SMART, DS_RESEARCH] });
  console.log('ping', ping.model, ping.sparkKey, ping.parsed);

  const bySlug = {};
  for (const city of cities) {
    console.log('translating', city.slug);
    const es = translateCity(city, doneKeys);
    bySlug[city.slug] = {
      en: {
        description: city.description,
        directions: city.directions,
        whyChoose: city.whyChoose,
        localParagraphs: city.localParagraphs,
      },
      es: {
        description: es.description,
        directions: es.directions,
        whyChoose: es.whyChoose,
        localParagraphs: es.localParagraphs,
      },
    };
  }

  const code = `import type { Lang } from '@/lib/language';

export type AreaBodyCopy = {
  description: string;
  directions: string;
  whyChoose: string[];
  localParagraphs: string[];
};

/** City page body fields — ES via Bifrost ds (vllm/smart / vllm/research). SEO meta stays English. */
export const AREA_BODIES: Record<string, { en: AreaBodyCopy; es: AreaBodyCopy }> = ${JSON.stringify(bySlug, null, 2)};

export function areaBodyCopy(slug: string, lang: Lang): AreaBodyCopy | null {
  const entry = AREA_BODIES[slug];
  if (!entry) return null;
  return entry[lang] ?? entry.en;
}
`;
  fs.writeFileSync(OUT, code, 'utf8');
  console.log('WROTE', OUT, 'cities', Object.keys(bySlug).length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
