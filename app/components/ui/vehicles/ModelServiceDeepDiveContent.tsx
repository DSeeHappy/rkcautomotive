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
import GeoCiteFacts from '@/app/components/ui/GeoCiteFacts';
import ModelSiblingServices, { type ModelServiceLink } from '@/app/components/ui/vehicles/ModelSiblingServices';
import { BUSINESS } from '@/lib/constants';
import { useLanguage } from '@/lib/language';
import { localizedModelServiceTitle, vehicleCopy } from '@/lib/i18n/vehicleCopy';
import { getModelDeepDiveContent, type ModelDeepDiveContent } from '@/lib/modelDeepDiveContent';
import { parseServiceIdFromSlug } from '@/lib/modelCommonServices';

const SYMPTOM_ICONS = [AlertTriangle, Clock, Droplets, Gauge];

type ModelServiceDeepDiveContentProps = {
  content: ModelDeepDiveContent;
  make: string;
  modelSlug: string;
  serviceSlug: string;
  image: string;
  imageAlt: string;
  breadcrumbs: BreadcrumbItem[];
  siblingServices: ModelServiceLink[];
  modelName: string;
  brandName: string;
};

export default function ModelServiceDeepDiveContent({
  content: ssrContent,
  make,
  modelSlug,
  serviceSlug,
  image,
  imageAlt,
  breadcrumbs: ssrBreadcrumbs,
  siblingServices,
  modelName,
  brandName,
}: ModelServiceDeepDiveContentProps) {
  const { lang } = useLanguage();
  const copy = vehicleCopy(lang);
  const content = getModelDeepDiveContent(make, modelSlug, serviceSlug, lang) ?? ssrContent;

  const breadcrumbs: BreadcrumbItem[] =
    lang === 'es'
      ? [
          { label: copy.hub.home, href: '/' },
          { label: copy.hub.vehiclesCrumb, href: '/vehicles-we-service' },
          ssrBreadcrumbs[2] ?? { label: `${brandName} ${modelName}` },
          { label: content.serviceName },
        ]
      : ssrBreadcrumbs;

  const localizedSiblings = siblingServices.map((service) => {
    const slug = service.href.split('/').filter(Boolean).pop() ?? '';
    const serviceId = parseServiceIdFromSlug(slug);
    return {
      href: service.href,
      title: serviceId
        ? localizedModelServiceTitle(modelName, serviceId, lang)
        : service.title,
    };
  });

  return (
    <div lang={lang}>
      <ServiceCinematicHero
        breadcrumbs={breadcrumbs}
        image={image}
        imageAlt={imageAlt}
        eyebrow={content.heroEyebrow}
        title={content.heroTitle}
        description={content.heroDescription}
        primaryCta={{ href: '/contact', label: content.primaryCtaLabel }}
        secondaryCta={{ href: BUSINESS.phoneHref, label: copy.deepDive.call(BUSINESS.phone) }}
      />

      <GeoCiteFacts />

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
        bgImageAlt={copy.deepDive.processBgAlt(content.heroEyebrow)}
      />

      <ServiceChecklistGrid
        eyebrow={content.checklistEyebrow}
        title={content.checklistTitle}
        intro={content.checklistIntro}
        groups={content.checklistGroups}
        bgClass="bg-white"
      />

      <ServiceLaborBand title={content.laborTitle} description={content.laborDescription} />

      <ServiceFAQSection
        title={content.faqTitle}
        intro={content.faqIntro}
        items={content.faqItems}
        serviceKey={content.relatedServiceSlug}
      />

      <ModelSiblingServices
        modelName={modelName}
        brandName={brandName}
        services={localizedSiblings}
      />
      <RelatedServices slug={content.relatedServiceSlug} title={content.relatedTitle} />
      <ServiceAreaServed serviceLabel={content.serviceAreaLabel} />
      <ServiceFinalCTA
        title={content.finalCtaTitle}
        description={content.finalCtaDescription}
        primaryCta={{ href: BUSINESS.phoneHref, label: BUSINESS.phone }}
        secondaryCta={{ href: '/contact', label: copy.deepDive.scheduleService }}
        image={image}
        imageAlt={imageAlt}
      />
    </div>
  );
}
