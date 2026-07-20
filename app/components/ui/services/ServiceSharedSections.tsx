'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import Image from 'next/image';
import {
  AlertTriangle,
  Award,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  ASE_ARIA_LABEL,
  ASE_URL,
  BUSINESS,
  LABOR_RATE,
  SERVICE_AREAS_DATA,
  type FAQItem,
} from '@/lib/constants';
import {
  getPopularDeepDivesForServicePage,
  getPlatformDiagnosticsForServicePage,
  localizeServiceDeepDiveLinkTitle,
} from '@/lib/serviceDeepDiveLinks';
import { getFeaturedServiceCities } from '@/lib/adjacentSeoLinks';
import { HERO_IMAGE_SIZES, PHOTOS } from '@/lib/photos';
import Breadcrumbs, { type BreadcrumbItem } from '@/app/components/ui/Breadcrumbs';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';
import FAQAccordion from '@/app/components/ui/FAQAccordion';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import { useLanguage } from '@/lib/language';
import { serviceCopy } from '@/lib/i18n/serviceCopy';
import { siteCopy } from '@/lib/siteCopy';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { useGsapParallax } from '@/lib/useGsapParallax';
import { useGsapReveal } from '@/lib/useGsapReveal';
import { SECTION_PAD, SECTION_HEADER, SECTION_HEADER_CENTER } from './servicesShared';

export type HeroTrustPill = {
  icon: LucideIcon;
  label: string;
  sub: string;
  href?: string;
};

const TRUST_PILL_ICONS = [Wrench, Award, ClipboardCheck, MapPin] as const;

export function useLocalizedTrustPills(): HeroTrustPill[] {
  const { lang } = useLanguage();
  const pills = siteCopy(lang).serviceChrome.trustPills;
  return [
    { icon: TRUST_PILL_ICONS[0], label: LABOR_RATE, sub: pills[0].sub },
    { icon: TRUST_PILL_ICONS[1], label: 'ASE', sub: pills[1].sub, href: ASE_URL },
    {
      icon: TRUST_PILL_ICONS[2],
      label: 'label' in pills[2] ? pills[2].label! : 'Written',
      sub: pills[2].sub,
    },
    {
      icon: TRUST_PILL_ICONS[3],
      label: 'label' in pills[3] ? pills[3].label! : 'Evans Ave',
      sub: pills[3].sub,
    },
  ];
}

/** Static EN defaults — prefer useLocalizedTrustPills in UI */
export const TRUST_PILLS = [
  { icon: Wrench, label: LABOR_RATE, sub: 'posted labor rate' },
  { icon: Award, label: 'ASE', sub: 'certified techs', href: ASE_URL },
  { icon: ClipboardCheck, label: 'Written', sub: 'estimates first' },
  { icon: MapPin, label: 'Evans Ave', sub: 'Englewood shop' },
] as const;

const HERO_PILL_CLASS =
  'flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 backdrop-blur-md transition-colors';

export function HeroTrustPills({
  pills,
  className = 'flex flex-wrap gap-3',
}: {
  pills: readonly HeroTrustPill[];
  className?: string;
}) {
  return (
    <div className={className}>
      {pills.map((pill) => {
        const Icon = pill.icon;
        const content = (
          <>
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary-green/20 ring-1 ring-primary-green/30">
              <Icon className="size-4 text-primary-green-light" aria-hidden />
            </span>
            <div>
              <p className="font-display text-xl tracking-wide text-white">{pill.label}</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">{pill.sub}</p>
            </div>
          </>
        );

        if (pill.href) {
          return (
            <MotionAnchor
              key={pill.sub}
              href={pill.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ASE_ARIA_LABEL}
              className={`${HERO_PILL_CLASS} hover:border-primary-green/40`}
            >
              {content}
            </MotionAnchor>
          );
        }

        return (
          <div key={pill.sub} className={HERO_PILL_CLASS}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

export type ServiceCta = { href: string; label: string };

export type ServiceHeroProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: ServiceCta;
  secondaryCta: ServiceCta;
  breadcrumbs?: BreadcrumbItem[];
};

export function ServiceCinematicHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  breadcrumbs,
}: ServiceHeroProps) {
  const { lang } = useLanguage();
  const crumbCopy = serviceCopy(lang).breadcrumbs;
  const heroCopy = serviceCopy(lang).hero;
  const reduce = usePrefersReducedMotion();
  const trustPills = useLocalizedTrustPills();
  const { sectionRef, bgRef, contentRef } = useGsapParallax<HTMLElement>(reduce, {
    yPercent: 16,
    fadeTo: 0.4,
  });
  const eyebrowRef = useGsapReveal<HTMLParagraphElement>({ y: 16, duration: 0.6 });
  const titleRef = useGsapReveal<HTMLHeadingElement>({ delay: 0.06, y: 28, duration: 0.75 });
  const descriptionRef = useGsapReveal<HTMLParagraphElement>({ delay: 0.14, y: 16, duration: 0.6 });
  const ctasRef = useGsapReveal<HTMLDivElement>({ delay: 0.22, y: 12, duration: 0.5 });

  const localizedBreadcrumbs = breadcrumbs?.map((crumb, index) => {
    if (index === 0 && (crumb.label === 'Home' || crumb.label === 'Inicio')) {
      return { ...crumb, label: crumbCopy.home };
    }
    if (index === 1 && (crumb.label === 'Services' || crumb.label === 'Servicios')) {
      return { ...crumb, label: crumbCopy.services };
    }
    return crumb;
  });

  const localizedSecondary =
    secondaryCta.label.startsWith('Call ') || secondaryCta.label.startsWith('Llamar ')
      ? { ...secondaryCta, label: heroCopy.call(BUSINESS.phone) }
      : secondaryCta;

  return (
    <section ref={sectionRef} className="relative isolate min-h-[58svh] overflow-hidden bg-[#0c1222] sm:min-h-[65svh]">
      <div ref={bgRef} className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className={`object-cover object-center ${reduce ? '' : 'ken-burns'}`}
          sizes={HERO_IMAGE_SIZES}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(12, 18, 34, 0.5) 0%, rgba(12, 18, 34, 0.25) 40%, rgba(12, 18, 34, 0.88) 100%), linear-gradient(90deg, rgba(14, 133, 54, 0.22) 0%, transparent 50%, rgba(28, 61, 145, 0.15) 100%)',
          }}
        />
        <div className="photo-veil absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c1222]/80 via-[#0c1222]/20 to-transparent"
        />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex min-h-[58svh] flex-col px-4 pt-20 sm:min-h-[65svh] sm:px-6 sm:pt-22 lg:px-8 lg:pt-24"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center pb-12 text-center sm:pb-16">
          <div className="mx-auto w-full max-w-3xl">
            {localizedBreadcrumbs && localizedBreadcrumbs.length > 0 && (
              <Breadcrumbs items={localizedBreadcrumbs} className="mb-6 flex justify-center" variant="light" />
            )}
            <p
              ref={eyebrowRef}
              className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-green-light"
            >
              {eyebrow}
            </p>
            <h1
              ref={titleRef}
              className="mt-4 font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[0.98] tracking-wide text-white"
            >
              {title}
            </h1>
            <p
              ref={descriptionRef}
              className="mx-auto mt-5 max-w-2xl text-lg font-medium text-white/85 sm:text-xl"
            >
              {description}
            </p>
            <div ref={ctasRef} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href={primaryCta.href} className="btn-green">
                <CalendarCheck className="size-5" />
                {primaryCta.label}
              </Link>
              <MotionAnchor href={localizedSecondary.href} className="btn-ghost-light">
                <Phone className="size-5" />
                {localizedSecondary.label}
              </MotionAnchor>
            </div>
          </div>

          <div className="relative z-20 mt-10 w-full lg:mt-12">
            <HeroTrustPills pills={trustPills} className="flex flex-wrap justify-center gap-3" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}

export type ServiceRealityBandProps = {
  eyebrow?: string;
  quote: string;
  body: ReactNode;
};

export function ServiceRealityBand({ eyebrow, quote, body }: ServiceRealityBandProps) {
  const { lang } = useLanguage();
  const resolvedEyebrow = eyebrow ?? siteCopy(lang).serviceChrome.realityCheck;
  return (
    <section className="relative overflow-hidden bg-[#0c1222] py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-green/40 to-transparent"
      />
      <div className="wrap relative">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-green-light">{resolvedEyebrow}</p>
          <blockquote className="mt-6 font-display text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.05] tracking-wide text-white">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/65 sm:text-lg">{body}</p>
        </FadeIn>
      </div>
    </section>
  );
}

export type SymptomCard = {
  icon: LucideIcon;
  title: string;
  body: string;
  warning?: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
};

export type ServiceSymptomGridProps = {
  eyebrow: string;
  title: string;
  intro: string;
  cards: SymptomCard[];
  bgClass?: string;
};

export function ServiceSymptomGrid({
  eyebrow,
  title,
  intro,
  cards,
  bgClass = 'bg-white',
}: ServiceSymptomGridProps) {
  return (
    <section className={`${SECTION_PAD} ${bgClass}`}>
      <div className="wrap">
        <FadeIn className={SECTION_HEADER}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{eyebrow}</p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">{title}</h2>
          <p className="mt-4 text-lg text-ink-muted">{intro}</p>
        </FadeIn>

        <Stagger className="grid gap-6 lg:grid-cols-3" stagger={0.08}>
          {cards.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border ${item.accentBorder} bg-[var(--background)] shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)] transition duration-300 hover:-translate-y-1`}
                >
                  <div className={`border-b ${item.accentBorder} ${item.accentBg} px-8 py-7`}>
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${item.accentBg} ring-1 ${item.accentBorder}`}
                      >
                        <Icon className={`size-6 ${item.accent}`} aria-hidden />
                      </span>
                      <h3 className="font-display text-2xl tracking-wide text-primary-blue">{item.title}</h3>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 px-8 py-7">
                    <p className="text-sm leading-relaxed text-ink-muted sm:text-base">{item.body}</p>
                    {item.warning && (
                      <div className="mt-auto flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
                        <AlertTriangle className="mt-0.5 size-5 shrink-0 text-red-400" aria-hidden />
                        <p className="text-sm font-semibold text-red-700">{item.warning}</p>
                      </div>
                    )}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export type ProcessStep = { step?: string; title: string; body: string };

export type ServiceProcessTimelineProps = {
  eyebrow: string;
  title: string;
  intro: string;
  steps: readonly ProcessStep[];
  bgImage?: string;
  bgImageAlt?: string;
};

export function ServiceProcessTimeline({
  eyebrow,
  title,
  intro,
  steps,
  bgImage,
  bgImageAlt,
}: ServiceProcessTimelineProps) {
  return (
    <section className="relative overflow-hidden bg-[#0c1222] py-24 text-white sm:py-28">
      {bgImage && (
        <div className="absolute inset-0 opacity-25">
          <Image
            src={bgImage}
            alt={bgImageAlt ?? ''}
            aria-hidden={bgImageAlt ? undefined : true}
            fill
            className="object-cover"
            sizes={HERO_IMAGE_SIZES}
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
      )}
      <div className="relative wrap">
        <FadeIn className="mb-16 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">{eyebrow}</p>
          <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">{title}</h2>
          <p className="mt-4 text-lg text-white/70">{intro}</p>
        </FadeIn>

        <div className="relative mb-2 hidden lg:block">
          <div
            aria-hidden
            className="absolute left-[8%] right-[8%] top-6 h-px bg-gradient-to-r from-primary-green/20 via-primary-green/50 to-primary-green/20"
          />
        </div>

        <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {steps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="group relative border-t border-white/20 pt-6 transition duration-300 hover:border-primary-green/50">
                <p className="font-display text-5xl text-primary-green-light">{step.step}</p>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{step.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export type ChecklistGroup = { category: string; items: readonly string[] };

export type ServiceChecklistGridProps = {
  eyebrow: string;
  title: string;
  intro: string;
  groups: ChecklistGroup[];
  bgClass?: string;
};

export function ServiceChecklistGrid({
  eyebrow,
  title,
  intro,
  groups,
  bgClass = 'bg-[var(--background)]',
}: ServiceChecklistGridProps) {
  return (
    <section className={`${SECTION_PAD} ${bgClass}`}>
      <div className="wrap">
        <FadeIn className={SECTION_HEADER}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{eyebrow}</p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">{title}</h2>
          <p className="mt-4 text-lg text-ink-muted">{intro}</p>
        </FadeIn>

        <Stagger className="grid gap-6 sm:grid-cols-2" stagger={0.08}>
          {groups.map((group) => (
            <StaggerItem key={group.category}>
              <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-white p-8 shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)]">
                <h3 className="font-display text-2xl tracking-wide text-primary-blue">{group.category}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary-green" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export type LaborBandItem = { icon: LucideIcon; title: string; detail: string };

export type ServiceLaborBandProps = {
  title: string;
  description: string;
  items?: LaborBandItem[];
};

const LABOR_ICONS = [FileText, ClipboardCheck, ShieldCheck] as const;

export function ServiceLaborBand({ title, description, items }: ServiceLaborBandProps) {
  const { lang } = useLanguage();
  const localized = siteCopy(lang).serviceChrome.laborItems;
  const resolvedItems =
    items ??
    localized.map((item, i) => ({
      icon: LABOR_ICONS[i] ?? FileText,
      title: item.title,
      detail: item.detail,
    }));

  return (
    <section className="relative overflow-hidden bg-[#0c1222] py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,133,54,0.12),transparent_60%)]"
      />
      <div className="wrap relative">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <p className="font-display text-[clamp(4rem,14vw,8rem)] leading-[0.85] tracking-wide text-primary-green-light">
            {LABOR_RATE}
          </p>
          <h2 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">{description}</p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-3" stagger={0.08}>
          {resolvedItems.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-center backdrop-blur-sm">
                  <Icon className="mx-auto size-8 text-primary-green-light" aria-hidden />
                  <h3 className="mt-4 font-display text-xl tracking-wide text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{item.detail}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

export type ServiceFAQSectionProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  items: FAQItem[];
  /** Service page slug or short duration key — drives the repair-time FAQ. */
  serviceKey?: string | null;
};

export function ServiceFAQSection({
  eyebrow,
  title,
  intro,
  items,
  serviceKey = null,
}: ServiceFAQSectionProps) {
  const { lang } = useLanguage();
  const resolvedEyebrow = eyebrow ?? siteCopy(lang).serviceChrome.faq;
  return (
    <section className={`${SECTION_PAD} bg-[var(--background)]`}>
      <div className="wrap">
        <FadeIn className={SECTION_HEADER_CENTER}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{resolvedEyebrow}</p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">{title}</h2>
          <p className="mt-4 text-lg text-ink-muted">{intro}</p>
        </FadeIn>
        <FadeIn delay={0.06} className="mx-auto max-w-3xl">
          <FAQAccordion items={items} serviceKey={serviceKey} injectRepairTimeFaq />
        </FadeIn>
      </div>
    </section>
  );
}

export type ServiceFinalCTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: ServiceCta;
  secondaryCta: ServiceCta;
  image?: string;
  imageAlt?: string;
};

export function ServiceFinalCTA({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image = PHOTOS.exteriorBay,
  imageAlt = 'RKC Automotive shop bay in Englewood Colorado',
}: ServiceFinalCTAProps) {
  const { lang } = useLanguage();
  const chrome = siteCopy(lang).serviceChrome;
  const heroCopy = serviceCopy(lang).hero;
  const resolvedEyebrow = eyebrow ?? chrome.finalCtaEyebrow;
  const localizedSecondaryLabel =
    secondaryCta.label === 'Schedule service' ||
    secondaryCta.label === 'Book service' ||
    secondaryCta.label === 'Programar servicio' ||
    secondaryCta.label === 'Agendar servicio'
      ? secondaryCta.label.startsWith('Book') || secondaryCta.label.startsWith('Agendar')
        ? heroCopy.bookService
        : heroCopy.scheduleService
      : secondaryCta.label;

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill className="object-cover object-center" sizes={HERO_IMAGE_SIZES} />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"
        />
      </div>
      <div className="relative z-10 px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-[#0c1222]/95 shadow-2xl backdrop-blur-md">
            <div className="px-5 py-6 text-center sm:px-8 sm:py-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-green-light sm:mb-4">
                {resolvedEyebrow}
              </p>
              <h2 className="text-balance text-2xl font-bold leading-relaxed tracking-normal text-white sm:text-3xl lg:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg">
                {description}
              </p>
            </div>
            <div className="px-5 py-5 text-center sm:px-8 sm:py-6">
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <MotionAnchor href={primaryCta.href} className="btn-green">
                  <Phone className="size-5" />
                  {primaryCta.label}
                </MotionAnchor>
                <Link href={secondaryCta.href} className="btn-ghost-light">
                  <CalendarCheck className="size-5" />
                  {localizedSecondaryLabel}
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm leading-relaxed text-white/75">
                <span>{BUSINESS.address.full}</span>
                <span aria-hidden>·</span>
                <MotionAnchor
                  href={BUSINESS.directionsUrl}
                  className="inline-flex items-center gap-1.5 text-white/75 transition hover:text-white"
                >
                  <MapPin className="size-4" />
                  {chrome.getDirections}
                </MotionAnchor>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export type ComparisonRow = {
  label: string;
  values: readonly string[];
  highlight?: number | string;
};

export type ServiceComparisonTableProps = {
  columns: readonly string[];
  rows: readonly ComparisonRow[];
  caption?: string;
};

export function ServiceComparisonTable({ columns, rows, caption }: ServiceComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] text-left text-sm">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.04]">
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/55 first:rounded-tl-[1.75rem] last:rounded-tr-[1.75rem]"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-white/5 last:border-0">
                <th scope="row" className="px-6 py-4 font-semibold text-white/90">
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td
                    key={`${row.label}-${i}`}
                    className={`px-6 py-4 leading-relaxed ${
                      row.highlight === i ? 'font-semibold text-primary-green-light' : 'text-white/65'
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export type TechnicalCard = {
  title: string;
  body: string;
  accent?: string;
  accentBg?: string;
  accentBorder?: string;
};

export type ServiceTechnicalSectionProps = {
  eyebrow: string;
  title: string;
  intro: string;
  cards?: TechnicalCard[];
  table?: ServiceComparisonTableProps;
  tableTitle?: string;
  tableIntro?: string;
  bgClass?: string;
};

export function ServiceTechnicalSection({
  eyebrow,
  title,
  intro,
  cards,
  table,
  tableTitle,
  tableIntro,
  bgClass = 'bg-[#0c1222] text-white',
}: ServiceTechnicalSectionProps) {
  return (
    <section className={`${SECTION_PAD} ${bgClass}`}>
      <div className="wrap">
        <FadeIn className={SECTION_HEADER}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">{eyebrow}</p>
          <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">{title}</h2>
          <p className="mt-4 text-lg text-white/70">{intro}</p>
        </FadeIn>

        {cards && cards.length > 0 && (
          <Stagger className="grid gap-6 lg:grid-cols-2" stagger={0.08}>
            {cards.map((card) => (
              <StaggerItem key={card.title}>
                <article
                  className={`flex h-full flex-col overflow-hidden rounded-[1.75rem] border ${card.accentBorder ?? 'border-white/10'} bg-white/[0.04]`}
                >
                  <div
                    className={`border-b ${card.accentBorder ?? 'border-white/10'} ${card.accentBg ?? 'bg-white/[0.02]'} px-8 py-6`}
                  >
                    <h3 className={`font-display text-2xl tracking-wide ${card.accent ?? 'text-white'}`}>
                      {card.title}
                    </h3>
                  </div>
                  <p className="flex-1 px-8 py-6 text-sm leading-relaxed text-white/65 sm:text-base">{card.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        )}

        {table && (
          <FadeIn delay={0.1} className={cards && cards.length > 0 ? 'mt-14' : ''}>
            {tableTitle && (
              <h3 className="font-display text-3xl tracking-wide text-white">{tableTitle}</h3>
            )}
            {tableIntro && <p className="mt-3 max-w-3xl text-base text-white/65">{tableIntro}</p>}
            <div className={tableTitle || tableIntro ? 'mt-8' : ''}>
              <ServiceComparisonTable {...table} />
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

export type ServicePullQuoteProps = {
  quote: string;
  attribution?: string;
};

export function ServicePullQuote({ quote, attribution }: ServicePullQuoteProps) {
  return (
    <aside className="relative my-8 rounded-2xl border border-primary-green/25 bg-primary-green/5 px-8 py-6">
      <blockquote className="font-display text-2xl leading-snug tracking-wide text-primary-blue sm:text-3xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {attribution && (
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">{attribution}</p>
      )}
    </aside>
  );
}

export type ServiceAreaServedProps = {
  serviceLabel: string;
  relatedServiceSlug?: string;
};

export function ServiceAreaServed({ serviceLabel, relatedServiceSlug }: ServiceAreaServedProps) {
  const { lang } = useLanguage();
  const copy = serviceCopy(lang).areaServed;
  const featuredAreas = getFeaturedServiceCities();
  const popularDeepDives = relatedServiceSlug
    ? getPopularDeepDivesForServicePage(relatedServiceSlug)
    : [];
  const platformDiagnostics = relatedServiceSlug
    ? getPlatformDiagnosticsForServicePage(relatedServiceSlug)
    : [];

  return (
    <section className="border-t border-[color:var(--line)] bg-[var(--background)] py-12 sm:py-16">
      <div className="wrap">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-foreground sm:text-4xl">
            {copy.title(serviceLabel)}
          </h2>
          <p className="mt-4 max-w-3xl text-ink-muted">
            {copy.bodyLead(BUSINESS.address.full, serviceLabel)}{' '}
            {featuredAreas.map((area, index) => (
              <span key={area.slug}>
                {index > 0 && (index === featuredAreas.length - 1 ? copy.and : ', ')}
                <Link href={area.href} className="font-semibold text-primary-blue hover:text-primary-green">
                  {area.name}
                </Link>
              </span>
            ))}
            .{' '}
            <Link href="/areas-we-serve" className="font-semibold text-primary-blue hover:text-primary-green">
              {copy.viewAll(SERVICE_AREAS_DATA.length)}
            </Link>
            .
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <h3 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
            {copy.nearYou(serviceLabel)}
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={area.href}
                  className="group block rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 transition hover:border-primary-green/40 hover:bg-primary-green/5"
                >
                  <span className="font-semibold text-foreground group-hover:text-primary-green">
                    {copy.forDrivers(serviceLabel, area.name)}
                  </span>
                  <span className="mt-1 block text-sm text-ink-muted">
                    {copy.fromShop(area.distanceFromShop)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </FadeIn>

        {popularDeepDives.length > 0 ? (
          <FadeIn delay={0.14} className="mt-10">
            <h3 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
              {copy.popularModels}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {popularDeepDives.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group block rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 transition hover:border-primary-green/40 hover:bg-primary-green/5"
                  >
                    <span className="font-semibold text-foreground group-hover:text-primary-green">
                      {localizeServiceDeepDiveLinkTitle(link, lang)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        ) : null}

        {platformDiagnostics.length > 0 ? (
          <FadeIn delay={0.18} className="mt-10">
            <h3 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
              {copy.platformHeading}
            </h3>
            <p className="mt-3 max-w-3xl text-ink-muted">{copy.platformIntro}</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {platformDiagnostics.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group block rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 transition hover:border-primary-green/40 hover:bg-primary-green/5"
                  >
                    <span className="font-semibold text-foreground group-hover:text-primary-green">
                      {localizeServiceDeepDiveLinkTitle(link, lang)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}
