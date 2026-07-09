'use client';

import { AlertTriangle, Clock, Droplets, Gauge } from 'lucide-react';
import type { BreadcrumbItem } from '@/app/components/ui/Breadcrumbs';
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
} from '@/app/components/ui/services/ServiceSharedSections';
import RelatedServices from '@/app/components/ui/RelatedServices';
import { BUSINESS } from '@/lib/constants';
import type { ModelDeepDiveContent } from '@/lib/modelDeepDiveContent';

const SYMPTOM_ICONS = [AlertTriangle, Clock, Droplets, Gauge];

type ModelServiceDeepDiveContentProps = {
  content: ModelDeepDiveContent;
  image: string;
  imageAlt: string;
  breadcrumbs: BreadcrumbItem[];
};

export default function ModelServiceDeepDiveContent({
  content,
  image,
  imageAlt,
  breadcrumbs,
}: ModelServiceDeepDiveContentProps) {
  return (
    <div>
      <ServiceCinematicHero
        breadcrumbs={breadcrumbs}
        image={image}
        imageAlt={imageAlt}
        eyebrow={content.heroEyebrow}
        title={content.heroTitle}
        description={content.heroDescription}
        primaryCta={{ href: '/contact', label: content.primaryCtaLabel }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: `Call ${BUSINESS.phone}` }}
      />

      <ServiceRealityBand
        quote={content.realityQuote}
        body={
          <>
            {content.realityParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </>
        }
      />

      <ServiceSymptomGrid
        eyebrow={content.symptomsEyebrow}
        title={content.symptomsTitle}
        intro={content.symptomsIntro}
        cards={content.symptoms.map((card) => ({
          ...card,
          icon: SYMPTOM_ICONS[card.iconIndex % SYMPTOM_ICONS.length],
        }))}
      />

      <ServiceTechnicalSection
        eyebrow={content.technicalEyebrow}
        title={content.technicalTitle}
        intro={content.technicalIntro}
        cards={content.technicalCards}
        tableTitle={content.tableTitle}
        tableIntro={content.tableIntro}
        table={{
          caption: content.tableCaption,
          columns: content.tableColumns,
          rows: content.tableRows,
        }}
      />

      <ServiceProcessTimeline
        eyebrow={content.processEyebrow}
        title={content.processTitle}
        intro={content.processIntro}
        steps={content.processSteps}
        bgImage={image}
        bgImageAlt={`${content.heroEyebrow} service at RKC Automotive Englewood CO`}
      />

      <ServiceChecklistGrid
        eyebrow={content.checklistEyebrow}
        title={content.checklistTitle}
        intro={content.checklistIntro}
        groups={content.checklistGroups}
        bgClass="bg-white"
      />

      <ServiceLaborBand title={content.laborTitle} description={content.laborDescription} />

      <ServiceFAQSection title={content.faqTitle} intro={content.faqIntro} items={content.faqItems} />

      <RelatedServices slug={content.relatedServiceSlug} title={content.relatedTitle} />
      <ServiceAreaServed serviceLabel={content.serviceAreaLabel} />
      <ServiceFinalCTA
        title={content.finalCtaTitle}
        description={content.finalCtaDescription}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: 'Schedule service' }}
        image={image}
        imageAlt={imageAlt}
      />
    </div>
  );
}
