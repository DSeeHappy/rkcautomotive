'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Award, CalendarCheck, Phone, ShieldCheck, Users, Wrench } from 'lucide-react';
import { ASE_URL, BUSINESS, LABOR_RATE, OTHER_WARRANTY_PROVIDERS, PHOTOS } from '@/lib/constants';
import { HERO_IMAGE_SIZES } from '@/lib/photos';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import { HeroTrustPills } from '@/app/components/ui/services/ServiceSharedSections';
import Breadcrumbs from '@/app/components/ui/Breadcrumbs';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { useGsapParallax } from '@/lib/useGsapParallax';
import { useGsapReveal } from '@/lib/useGsapReveal';
import { useLanguage } from '@/lib/language';
import { siteCopy } from '@/lib/siteCopy';
import { warrantyCopy } from '@/lib/i18n/warrantyCopy';

export default function WarrantyHero() {
  const { lang } = useLanguage();
  const shell = siteCopy(lang).shells.warranty;
  const hero = warrantyCopy(lang).hero;
  const reduce = usePrefersReducedMotion();
  const { sectionRef, bgRef, contentRef } = useGsapParallax<HTMLElement>(reduce, {
    yPercent: 16,
    fadeTo: 0.4,
  });
  const eyebrow = useGsapReveal<HTMLParagraphElement>({ y: 16, duration: 0.6 });
  const title = useGsapReveal<HTMLHeadingElement>({ delay: 0.06, y: 28, duration: 0.75 });
  const description = useGsapReveal<HTMLParagraphElement>({ delay: 0.14, y: 16, duration: 0.6 });
  const ctas = useGsapReveal<HTMLDivElement>({ delay: 0.22, y: 12, duration: 0.5 });

  const partnerCount = 13 + OTHER_WARRANTY_PROVIDERS.length;

  const statPills = [
    { icon: Wrench, label: LABOR_RATE, sub: shell.trustSubs.labor },
    { icon: Users, label: '13+', sub: shell.trustSubs.partners },
    { icon: Award, label: 'ASE', sub: shell.trustSubs.ase, href: ASE_URL },
    { icon: ShieldCheck, label: '30+ yrs', sub: shell.trustSubs.shop },
  ] as const;

  return (
    <section lang={lang} ref={sectionRef} className="relative isolate w-full min-h-[70svh] overflow-hidden bg-[#0c1222] sm:min-h-[78svh]">
      <div ref={bgRef} className="hero-media-layer absolute inset-0 size-full">
        <div className="relative size-full">
          <Image
            src={PHOTOS.engineRebuild}
            alt="ASE-certified technicians rebuilding an engine at RKC Automotive in Englewood, CO"
            fill
            priority
            className={`object-cover object-center ${reduce ? '' : 'ken-burns'}`}
            sizes={HERO_IMAGE_SIZES}
          />
        </div>
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
        className="relative z-10 flex min-h-[70svh] flex-col px-4 pt-20 sm:min-h-[78svh] sm:px-6 sm:pt-22 lg:px-8 lg:pt-24"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end pb-20 sm:pb-24">
          <div className="max-w-4xl">
            <Breadcrumbs
              items={[
                { label: shell.home, href: '/' },
                { label: shell.crumb },
              ]}
              className="mb-6"
              variant="light"
            />
            <p
              ref={eyebrow}
              className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-green-light"
            >
              {shell.eyebrow}
            </p>

            <h1
              ref={title}
              className="mt-4 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95] tracking-wide text-white"
            >
              {hero.titleBefore}{' '}
              <span className="bg-gradient-to-r from-primary-green-light via-emerald-300 to-primary-green-light bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>{' '}
              {hero.titleAfter}
            </h1>

            <p ref={description} className="mt-5 max-w-2xl text-lg font-medium text-white/85 sm:text-xl">
              {hero.description}
            </p>

            <div ref={ctas} className="mt-8 flex flex-wrap items-center gap-4">
              <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
                <Phone className="size-5" />
                {shell.call(BUSINESS.phone)}
              </MotionAnchor>
              <Link href="/contact" className="btn-ghost-light">
                <CalendarCheck className="size-5" />
                {hero.scheduleCta}
              </Link>
            </div>
          </div>

          <div className="relative z-20 mt-10 lg:mt-12">
            <HeroTrustPills
              pills={statPills.map((pill) => ({
                ...pill,
                label: pill.label === '13+' ? `${partnerCount}+` : pill.label,
              }))}
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}
