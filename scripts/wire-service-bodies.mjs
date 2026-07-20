/**
 * Wire service Content.tsx files to use lib/i18n/serviceBodies/{slug}.ts
 * Skips engine-diagnostics (already hand-wired). Custom layouts get a lighter patch.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SERVICE_CONFIGS } from './service-body-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'app/components/ui/services');
const BODIES = path.join(ROOT, 'lib/i18n/serviceBodies');

function camelExport(slug) {
  return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) + 'BodyCopy';
}

function photoKey(source) {
  const m = source.match(/image=\{PHOTOS\.(\w+)\}/);
  return m?.[1] ?? 'engineBay';
}

function iconImports(source) {
  const m = source.match(/import \{\s*([^}]+)\s*\} from 'lucide-react'/);
  return (m?.[1] ?? 'Wrench').split(',').map((s) => s.trim()).filter(Boolean);
}

function writeStandard(config) {
  const slug = config.slug;
  const bodyFile = path.join(BODIES, `${slug}.ts`);
  if (!fs.existsSync(bodyFile)) {
    console.warn('skip wire', slug, 'no body ts');
    return;
  }
  const srcPath = path.join(DIR, config.file);
  const source = fs.readFileSync(srcPath, 'utf8');
  if (source.includes('BodyCopy') || source.includes('engineDiagnosticsBody')) {
    console.log('already wired', slug);
    return;
  }

  const icons = iconImports(source);
  const photo = photoKey(source);
  const exportName = camelExport(slug);
  const hasTech = source.includes('ServiceTechnicalSection');
  const realityHasLink = Boolean(config.realityLink);

  const code = `'use client';

import { ${icons.join(', ')} } from 'lucide-react';
${realityHasLink ? "import Link from 'next/link';\n" : ''}import { BUSINESS, PHOTOS } from '@/lib/constants';
import {
  ServiceCinematicHero,
  ServiceRealityBand,
  ServiceSymptomGrid,
  ServiceProcessTimeline,
  ServiceChecklistGrid,
  ServiceLaborBand,
  ServiceFAQSection,
  ServiceFinalCTA,
  ServiceAreaServed,${hasTech ? '\n  ServiceTechnicalSection,' : ''}
} from './ServiceSharedSections';
import RelatedServices from '@/app/components/ui/RelatedServices';
import { getServiceBreadcrumbs } from './servicesShared';
import { useLanguage } from '@/lib/language';
import { ${exportName} } from '@/lib/i18n/serviceBodies/${slug}';

const icons = [${icons.join(', ')}];
const SYMPTOM_ACCENTS = [
  { accent: 'text-amber-400', accentBg: 'bg-amber-500/10', accentBorder: 'border-amber-500/25' },
  { accent: 'text-sky-400', accentBg: 'bg-sky-500/10', accentBorder: 'border-sky-500/25' },
  { accent: 'text-red-400', accentBg: 'bg-red-500/10', accentBorder: 'border-red-500/25' },
] as const;
const TECH_ACCENTS = [
  { accent: 'text-sky-400', accentBg: 'bg-sky-500/10', accentBorder: 'border-sky-500/25' },
  { accent: 'text-amber-400', accentBg: 'bg-amber-500/10', accentBorder: 'border-amber-500/25' },
  { accent: 'text-emerald-400', accentBg: 'bg-emerald-500/10', accentBorder: 'border-emerald-500/25' },
  { accent: 'text-red-400', accentBg: 'bg-red-500/10', accentBorder: 'border-red-500/25' },
] as const;

export default function ${config.file.replace('Content.tsx', 'Content')}() {
  const { lang } = useLanguage();
  const t = ${exportName}(lang);

  const symptoms = t.symptoms.cards.map((card, i) => ({
    icon: icons[i % icons.length],
    title: card.title,
    body: card.body,
    ...('warning' in card && card.warning ? { warning: card.warning } : {}),
    ...SYMPTOM_ACCENTS[i % SYMPTOM_ACCENTS.length],
  }));

  return (
    <div lang={lang}>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs(t.breadcrumb, lang)}
        image={PHOTOS.${photo}}
        imageAlt={t.hero.imageAlt}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        primaryCta={{ href: '/contact', label: t.hero.primaryCta }}
        secondaryCta={{
          href: BUSINESS.phoneHref,
          label: \`\${t.hero.callPrefix} \${BUSINESS.phone}\`,
        }}
      />

      <ServiceRealityBand
        quote={t.reality.quote}
        body={${
          realityHasLink
            ? `<>
            {'bodyBefore' in t.reality ? t.reality.bodyBefore : ''}{' '}
            <Link
              href="${config.realityLink}"
              className="font-semibold text-primary-green-light hover:text-white"
            >
              {'linkText' in t.reality ? t.reality.linkText : ''}
            </Link>{' '}
            {'bodyAfter' in t.reality ? t.reality.bodyAfter : ''}
          </>`
            : `'body' in t.reality ? t.reality.body : ''`
        }}
      />

      <ServiceSymptomGrid
        eyebrow={t.symptoms.eyebrow}
        title={t.symptoms.title}
        intro={t.symptoms.intro}
        cards={symptoms}
      />
${
  hasTech
    ? `
      <ServiceTechnicalSection
        eyebrow={t.technical.eyebrow}
        title={t.technical.title}
        intro={t.technical.intro}
        cards={t.technical.cards.map((card, i) => ({
          ...card,
          ...TECH_ACCENTS[i % TECH_ACCENTS.length],
        }))}
        tableTitle={t.technical.tableTitle}
        tableIntro={t.technical.tableIntro}
        table={
          t.technical.table
            ? {
                caption: t.technical.table.caption,
                columns: [...t.technical.table.columns],
                rows: t.technical.table.rows.map((row) => ({
                  label: row.label,
                  values: [...row.values],
                  ...('highlight' in row && row.highlight != null ? { highlight: row.highlight } : {}),
                })),
              }
            : undefined
        }
      />
`
    : ''
}
      <ServiceProcessTimeline
        eyebrow={t.process.eyebrow}
        title={t.process.title}
        intro={t.process.intro}
        steps={t.process.steps}
        bgImage={PHOTOS.${photo}}
        bgImageAlt={t.process.bgImageAlt}
      />

      <ServiceChecklistGrid
        eyebrow={t.checklist.eyebrow}
        title={t.checklist.title}
        intro={t.checklist.intro}
        groups={[...t.checklist.groups]}
        bgClass="bg-white"
      />

      <ServiceLaborBand title={t.labor.title} description={t.labor.description} />

      <ServiceFAQSection
        title={t.faq.title}
        intro={t.faq.intro}
        items={[...t.faqs]}
        serviceKey="${config.related}"
      />
      <RelatedServices slug="${config.related}" />
      <ServiceAreaServed serviceLabel={t.areaLabel} relatedServiceSlug="${config.related}" />
      <ServiceFinalCTA
        title={t.finalCta.title}
        description={t.finalCta.description}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: t.finalCta.secondaryCta }}
      />
    </div>
  );
}
`;

  fs.writeFileSync(srcPath, code, 'utf8');
  console.log('wired', slug);
}

for (const config of SERVICE_CONFIGS) {
  if (config.slug === 'engine-diagnostics') {
    console.log('skip hand-wired', config.slug);
    continue;
  }
  if (config.custom) {
    console.log('custom layout — needs hand wire:', config.slug);
    continue;
  }
  writeStandard(config);
}
