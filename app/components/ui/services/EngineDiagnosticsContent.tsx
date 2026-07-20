'use client';

import { Gauge, Zap, Activity } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS, PHOTOS } from '@/lib/constants';
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
import GeoCiteFacts from '@/app/components/ui/GeoCiteFacts';
import { getServiceBreadcrumbs } from './servicesShared';
import { useLanguage } from '@/lib/language';
import { engineDiagnosticsBody } from '@/lib/i18n/serviceBodies/engine-diagnostics';

const icons = [Gauge, Zap, Activity];
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

export default function EngineDiagnosticsContent() {
  const { lang } = useLanguage();
  const t = engineDiagnosticsBody(lang);

  const symptoms = t.symptomsCards.map((card, i) => ({
    icon: icons[i % icons.length],
    title: card.title,
    body: card.body,
    ...SYMPTOM_ACCENTS[i % SYMPTOM_ACCENTS.length],
  }));

  const processSteps = t.process.steps.map((step, i) => ({
    step: String(i + 1).padStart(2, '0'),
    title: step.title,
    body: step.body,
  }));

  return (
    <div lang={lang}>
      <ServiceCinematicHero
        breadcrumbs={getServiceBreadcrumbs(t.breadcrumb, lang)}
        image={PHOTOS.engineBay}
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

      <GeoCiteFacts />

      <ServiceRealityBand
        quote={t.reality.quote}
        body={
          <>
            {t.reality.bodyBefore}{' '}
            <Link
              href="/services/check-engine-light-englewood-co"
              className="font-semibold text-primary-green-light hover:text-white"
            >
              {t.reality.linkText}
            </Link>{' '}
            {t.reality.bodyAfter}
          </>
        }
      />

      <ServiceSymptomGrid
        eyebrow={t.symptomsHead.eyebrow}
        title={t.symptomsHead.title}
        intro={t.symptomsHead.intro}
        cards={symptoms}
      />

      <ServiceTechnicalSection
        eyebrow={t.techHead.eyebrow}
        title={t.techHead.title}
        intro={t.techHead.intro}
        cards={t.techCards.map((card, i) => ({
          ...card,
          ...TECH_ACCENTS[i % TECH_ACCENTS.length],
        }))}
        tableTitle={t.techTable.tableTitle}
        tableIntro={t.techTable.tableIntro}
        table={{
          caption: t.techTable.tableCaption,
          columns: [...t.techTable.tableColumns],
          rows: t.techTable.tableRows.map((row, i) => ({
            label: row.label,
            values: [...row.values],
            highlight: i === 0 ? 1 : undefined,
          })),
        }}
      />

      <ServiceProcessTimeline
        eyebrow={t.process.eyebrow}
        title={t.process.title}
        intro={t.process.intro}
        steps={processSteps}
        bgImage={PHOTOS.engineBay}
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
        title={t.faqSection.title}
        intro={t.faqSection.intro}
        items={[...t.faqs]}
        serviceKey="engine-diagnostics-englewood-co"
      />
      <RelatedServices slug="engine-diagnostics-englewood-co" />
      <ServiceAreaServed serviceLabel={t.areaLabel} relatedServiceSlug="engine-diagnostics-englewood-co" />
      <ServiceFinalCTA
        title={t.finalCta.title}
        description={t.finalCta.description}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: t.finalCta.secondaryCta }}
      />
    </div>
  );
}
