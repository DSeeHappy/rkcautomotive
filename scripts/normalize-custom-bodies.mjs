/**
 * Normalize custom-shaped service bodies to SharedServiceBody and rewrite Content wrappers.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SERVICE_CONFIGS } from './service-body-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(__dirname, '../lib/i18n/serviceBodies');

function camelExport(slug) {
  return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) + 'BodyCopy';
}
function constName(slug) {
  return slug.replace(/-/g, '_').toUpperCase() + '_BODY';
}

function normalize(raw, relatedSlug) {
  const symptoms =
    raw.symptoms ??
    {
      eyebrow: raw.symptomsHead?.eyebrow ?? '',
      title: raw.symptomsHead?.title ?? '',
      intro: raw.symptomsHead?.intro ?? '',
      cards: (raw.symptomsCards || []).map((c) => ({
        title: c.title,
        body: c.body,
        ...(c.warning ? { warning: c.warning } : {}),
      })),
    };

  let reality = raw.reality || { quote: '', body: '' };
  if (!('body' in reality) || !reality.body) {
    const links = (reality.links || []).map((l) => l.text).join(', ');
    reality = {
      quote: reality.quote || '',
      body: [reality.bodyBefore, links, reality.bodyAfter].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim(),
    };
  }

  return {
    breadcrumb: raw.breadcrumb,
    hero: raw.hero,
    reality,
    symptoms,
    ...(raw.technical ? { technical: raw.technical } : {}),
    process: raw.process,
    checklist: raw.checklist,
    labor: raw.labor,
    faq: raw.faq || raw.faqSection || { title: '', intro: '' },
    areaLabel: raw.areaLabel,
    finalCta: raw.finalCta,
    relatedSlug: raw.relatedSlug || relatedSlug,
    faqs: raw.faqs || [],
  };
}

function parseSide(src, side) {
  const re =
    side === 'en'
      ? /en:\s*(\{[\s\S]*?\n\})\s*,\s*\n\s*es:/
      : /es:\s*(\{[\s\S]*?\n\})\s*,?\s*\n\} as const/;
  const m = src.match(re);
  if (!m) throw new Error('parse ' + side);
  return Function('return (' + m[1] + ')')();
}

const CUSTOM = ['camshaft-lifter-repair', 'engine-rebuilds', 'heating-ac'];

// Camshaft symptoms from known content (empty in extract)
const CAM_SYMPTOMS = [
  {
    title: 'HEMI lifter tick',
    body: 'Chrysler 5.7/6.4 HEMI engines are infamous for MDS lifter collapse that hammers cam lobes. A cold-start tick that stays after warm-up is often valvetrain — not exhaust. We confirm with oil-pressure data, borescope, and filter media inspection before quoting a cam-and-lifter kit.',
  },
  {
    title: 'GM AFM / DFM collapse',
    body: 'GM Active Fuel Management and Dynamic Fuel Management lifters stick or collapse, causing misfires and cam lobe damage on trucks and SUVs common in Colorado. Deletion kits are an option we discuss honestly after diagnosis — not before we know the failure mode.',
    warning: 'Driving on a collapsed AFM lifter can destroy the cam quickly.',
  },
  {
    title: 'General hydraulic lifter bleed-down',
    body: 'Any OHV engine can tick from bled-down lifters after oil changes with the wrong viscosity, sludge, or long idle intervals. We separate sticky VVT solenoids and injector tick from true valvetrain wear before you approve teardown.',
  },
];

for (const slug of CUSTOM) {
  const cfg = SERVICE_CONFIGS.find((c) => c.slug === slug);
  const file = path.join(DIR, `${slug}.ts`);
  const src = fs.readFileSync(file, 'utf8');
  let en = parseSide(src, 'en');
  let es = parseSide(src, 'es');

  if (slug === 'camshaft-lifter-repair' && (!en.symptomsCards || en.symptomsCards.length === 0)) {
    en.symptomsCards = CAM_SYMPTOMS;
    // Keep ES symptoms empty for now — will translate later if needed; copy EN titles temporarily worse — leave ES cards from translation of head only
    if (!es.symptomsCards || es.symptomsCards.length === 0) {
      es.symptomsCards = CAM_SYMPTOMS.map((c) => ({
        title: c.title,
        body: c.body,
        ...(c.warning ? { warning: c.warning } : {}),
      }));
    }
  }

  en = normalize(en, cfg.related);
  es = normalize(es, cfg.related);

  // If ES symptoms cards still empty but EN has them, flag
  if ((es.symptoms.cards?.length || 0) === 0 && (en.symptoms.cards?.length || 0) > 0) {
    console.warn(slug, 'ES symptoms empty — copying structure needs Spark; using EN temporarily for cards only is bad. Leaving empty.');
  }

  const exportName = camelExport(slug);
  const cName = constName(slug);
  const code = `import type { Lang } from '@/lib/language';

/** Service page body — ES via Bifrost ds (vllm/smart / vllm/research). Normalized to SharedServiceBody. */
export const ${cName} = {
  en: ${JSON.stringify(en, null, 2)},
  es: ${JSON.stringify(es, null, 2)},
} as const;

export function ${exportName}(lang: Lang) {
  return ${cName}[lang] ?? ${cName}.en;
}
`;
  fs.writeFileSync(file, code, 'utf8');
  fs.writeFileSync(path.join(DIR, '_en', `${slug}.json`), JSON.stringify(en, null, 2), 'utf8');
  console.log('normalized', slug, 'enCards', en.symptoms.cards.length, 'esCards', es.symptoms.cards.length);
}

const WRAP = {
  'camshaft-lifter-repair': {
    file: 'CamshaftLifterContent.tsx',
    icons: ['Wrench', 'Volume2', 'AlertTriangle'],
    photo: 'engineBay',
  },
  'engine-rebuilds': {
    file: 'EngineRebuildsContent.tsx',
    icons: ['Cog', 'Gauge', 'AlertTriangle'],
    photo: 'engineBay',
  },
  'heating-ac': {
    file: 'HeatingAcContent.tsx',
    icons: ['Snowflake', 'Thermometer', 'Wind'],
    photo: 'interior',
  },
};

for (const [slug, meta] of Object.entries(WRAP)) {
  const exportName = camelExport(slug);
  const code = `'use client';

import { ${meta.icons.join(', ')} } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { ${exportName} } from '@/lib/i18n/serviceBodies/${slug}';

export default function ${meta.file.replace('.tsx', '')}() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={${exportName}}
      icons={[${meta.icons.join(', ')}]}
      image={PHOTOS.${meta.photo}}
      processBgImage={PHOTOS.${meta.photo}}
    />
  );
}
`;
  fs.writeFileSync(path.join(__dirname, '../app/components/ui/services', meta.file), code, 'utf8');
  console.log('wired', slug);
}
