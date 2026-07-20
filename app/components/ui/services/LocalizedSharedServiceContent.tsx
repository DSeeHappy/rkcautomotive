'use client';

import type { LucideIcon } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import {
  ServiceCinematicHero,
  ServiceRealityBand,
  ServiceSymptomGrid,
  ServiceProcessTimeline,
  ServiceChecklistGrid,
  ServiceLaborBand,
  ServiceFAQSection,
  ServiceFinalCTA,
  ServiceAreaServed,
  ServiceTechnicalSection,
} from './ServiceSharedSections';
import RelatedServices from '@/app/components/ui/RelatedServices';
import { getServiceBreadcrumbs } from './servicesShared';
import { useLanguage } from '@/lib/language';

const TECH_ACCENTS = [
  { accent: 'text-sky-400', accentBg: 'bg-sky-500/10', accentBorder: 'border-sky-500/25' },
  { accent: 'text-amber-400', accentBg: 'bg-amber-500/10', accentBorder: 'border-amber-500/25' },
  { accent: 'text-emerald-400', accentBg: 'bg-emerald-500/10', accentBorder: 'border-emerald-500/25' },
  { accent: 'text-red-400', accentBg: 'bg-red-500/10', accentBorder: 'border-red-500/25' },
] as const;

const SYMPTOM_ACCENTS = [
  { accent: 'text-amber-400', accentBg: 'bg-amber-500/10', accentBorder: 'border-amber-500/25' },
  { accent: 'text-sky-400', accentBg: 'bg-sky-500/10', accentBorder: 'border-sky-500/25' },
  { accent: 'text-red-400', accentBg: 'bg-red-500/10', accentBorder: 'border-red-500/25' },
] as const;

/** Shared EN JSON shape used by most /services/* _en/*.json bodies */
export type SharedServiceBody = {
  breadcrumb: string;
  hero: {
    imageAlt: string;
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    callPrefix: string;
  };
  reality: { quote: string; body: string };
  symptoms: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: { title: string; body: string; warning?: string }[];
  };
  technical?: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: { title: string; body: string }[];
    tableTitle?: string;
    tableIntro?: string;
    table?: {
      caption: string;
      columns: string[];
      rows: { label: string; values: string[]; highlight?: number }[];
    };
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    bgImageAlt: string;
    steps: { step?: string; title: string; body: string }[];
  };
  checklist: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: { category: string; items: string[] }[];
  };
  labor: { title: string; description: string };
  faq: { title: string; intro: string };
  areaLabel: string;
  finalCta: { title: string; description: string; secondaryCta: string };
  relatedSlug: string;
  faqs: { question: string; answer: string }[];
};

type Props = {
  bodyCopy: (lang: 'en' | 'es') => SharedServiceBody;
  icons: LucideIcon[];
  image: string;
  processBgImage: string;
};

export default function LocalizedSharedServiceContent({
  bodyCopy,
  icons,
  image,
  processBgImage,
}: Props) {
  const { lang } = useLanguage();
  const t = bodyCopy(lang);

  const symptoms = t.symptoms.cards.map((card, i) => ({
    icon: icons[i % icons.length],
    title: card.title,
    body: card.body,
    warning: card.warning,
    ...SYMPTOM_ACCENTS[i % SYMPTOM_ACCENTS.length],
  }));

  const processSteps = t.process.steps.map((step, i) => ({
    step: step.step ?? String(i + 1).padStart(2, '0'),
    title: step.title,
    body: step.body,
  }));

  return (
    <div lang={lang}>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs(t.breadcrumb, lang)}
        image={image}
        imageAlt={t.hero.imageAlt}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        primaryCta={{ href: '/contact', label: t.hero.primaryCta }}
        secondaryCta={{
          href: BUSINESS.phoneHref,
          label: `${t.hero.callPrefix} ${BUSINESS.phone}`,
        }}
      />

      <ServiceRealityBand quote={t.reality.quote} body={t.reality.body} />

      <ServiceSymptomGrid
        eyebrow={t.symptoms.eyebrow}
        title={t.symptoms.title}
        intro={t.symptoms.intro}
        cards={symptoms}
      />

      {t.technical ? (
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
                  highlight: row.highlight,
                })),
              }
            : undefined
        }
      />
      ) : null}

      <ServiceProcessTimeline
        eyebrow={t.process.eyebrow}
        title={t.process.title}
        intro={t.process.intro}
        steps={processSteps}
        bgImage={processBgImage}
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
        serviceKey={t.relatedSlug}
      />
      <RelatedServices slug={t.relatedSlug} />
      <ServiceAreaServed serviceLabel={t.areaLabel} relatedServiceSlug={t.relatedSlug} />
      <ServiceFinalCTA
        title={t.finalCta.title}
        description={t.finalCta.description}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: t.finalCta.secondaryCta }}
      />
    </div>
  );
}


