'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Award, CalendarCheck, Phone, ShieldCheck, Users, Wrench } from 'lucide-react';
import { ASE_ARIA_LABEL, ASE_URL, BUSINESS, LABOR_RATE, OTHER_WARRANTY_PROVIDERS, PHOTOS } from '@/lib/constants';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import Breadcrumbs from '@/app/components/ui/Breadcrumbs';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { useGsapParallax } from '@/lib/useGsapParallax';
import { useGsapReveal } from '@/lib/useGsapReveal';

const STAT_PILLS = [
  { icon: Wrench, label: LABOR_RATE, sub: 'posted labor rate' },
  { icon: Users, label: '13+', sub: 'warranty partners' },
  { icon: Award, label: 'ASE', sub: 'certified techs', href: ASE_URL },
  { icon: ShieldCheck, label: '30+ yrs', sub: 'Englewood shop' },
] as const;

export default function WarrantyHero() {
  const reduce = usePrefersReducedMotion();
  const { sectionRef, bgRef, contentRef } = useGsapParallax<HTMLElement>(reduce, {
    yPercent: 16,
    fadeTo: 0.4,
  });
  const eyebrow = useGsapReveal<HTMLParagraphElement>({ y: 16, duration: 0.6 });
  const title = useGsapReveal<HTMLHeadingElement>({ delay: 0.06, y: 28, duration: 0.75 });
  const description = useGsapReveal<HTMLParagraphElement>({ delay: 0.14, y: 16, duration: 0.6 });
  const ctas = useGsapReveal<HTMLDivElement>({ delay: 0.22, y: 12, duration: 0.5 });
  const pills = useGsapReveal<HTMLDivElement>({ delay: 0.32, y: 20, duration: 0.6 });

  const partnerCount = 13 + OTHER_WARRANTY_PROVIDERS.length;

  return (
    <section ref={sectionRef} className="relative isolate min-h-[70svh] overflow-hidden bg-[#0c1222] sm:min-h-[78svh]">
      <div ref={bgRef} className="absolute inset-0">
        <Image
          src={PHOTOS.engineRebuild}
          alt="ASE-certified technicians rebuilding an engine at RKC Automotive in Englewood, CO"
          fill
          priority
          className={`object-cover object-center ${reduce ? '' : 'ken-burns'}`}
          sizes="100vw"
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
        className="relative z-10 flex min-h-[70svh] flex-col px-4 pt-28 sm:min-h-[78svh] sm:px-6 sm:pt-32 lg:px-8 lg:pt-36"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end pb-20 sm:pb-24">
          <div className="max-w-4xl">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Extended Warranty' },
              ]}
              className="mb-6"
              variant="light"
            />
            <p
              ref={eyebrow.ref}
              className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-green-light"
            >
              Warranty advocacy · Englewood, CO
            </p>

            <h1
              ref={title.ref}
              className="mt-4 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95] tracking-wide text-white"
            >
              We Accept{' '}
              <span className="bg-gradient-to-r from-primary-green-light via-emerald-300 to-primary-green-light bg-clip-text text-transparent">
                All Major
              </span>{' '}
              Extended Warranties
            </h1>

            <p ref={description.ref} className="mt-5 max-w-2xl text-lg font-medium text-white/85 sm:text-xl">
              Don&apos;t battle claims adjusters alone. RKC manages diagnostics, teardown authorizations, denial
              appeals, and parts quality — from drop-off through approved repair.
            </p>

            <div ref={ctas.ref} className="mt-8 flex flex-wrap items-center gap-4">
              <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
                <Phone className="size-5" />
                Call {BUSINESS.phone}
              </MotionAnchor>
              <Link href="/contact" className="btn-ghost-light">
                <CalendarCheck className="size-5" />
                Schedule Warranty Diagnostic
              </Link>
            </div>
          </div>

          <div ref={pills.ref} className="mt-10 flex flex-wrap gap-3 lg:mt-12">
            {STAT_PILLS.map((pill) => {
              const Icon = pill.icon;
              const label = pill.label === '13+' ? `${partnerCount}+` : pill.label;
              const pillClassName =
                'flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 backdrop-blur-md transition-colors';
              const content = (
                <>
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary-green/20 ring-1 ring-primary-green/30">
                    <Icon className="size-4 text-primary-green-light" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-xl tracking-wide text-white">{label}</p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">{pill.sub}</p>
                  </div>
                </>
              );

              if ('href' in pill && pill.href) {
                return (
                  <MotionAnchor
                    key={pill.sub}
                    href={pill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ASE_ARIA_LABEL}
                    className={`${pillClassName} hover:border-primary-green/40`}
                  >
                    {content}
                  </MotionAnchor>
                );
              }

              return (
                <div key={pill.sub} className={pillClassName}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}
