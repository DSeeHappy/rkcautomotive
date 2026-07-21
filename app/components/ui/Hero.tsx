'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AlertTriangle, Phone } from 'lucide-react';
import { BUSINESS, PHOTOS } from '@/lib/constants';
import { HERO_IMAGE_SIZES } from '@/lib/photos';
import CheckEngineHelpLink from '@/app/components/ui/CheckEngineHelpLink';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import LanguageToggle from '@/app/components/ui/LanguageToggle';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { useGsapParallax } from '@/lib/useGsapParallax';
import { useGsapReveal } from '@/lib/useGsapReveal';
import { useLanguage } from '@/lib/language';
import { homeCopy } from '@/lib/homeCopy';

export default function Hero() {
  const { lang } = useLanguage();
  const copy = homeCopy(lang);
  const reduce = usePrefersReducedMotion();
  const { sectionRef, bgRef, contentRef } = useGsapParallax<HTMLElement>(reduce, {
    yPercent: 12,
    fadeTo: 0.55,
  });
  const headline = useGsapReveal<HTMLDivElement>({ delay: 0.35, y: 28, duration: 0.8 });
  const ctas = useGsapReveal<HTMLDivElement>({ delay: 0.22, y: 20, duration: 0.7 });
  const alert = useGsapReveal<HTMLDivElement>({ delay: 0.4, y: 16, duration: 0.6 });

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[58svh] overflow-hidden bg-[#0c1222] sm:min-h-[65svh]"
      lang={lang}
    >
      <div ref={bgRef} className="hero-media-layer absolute inset-0">
        <Image
          src={PHOTOS.heroMain}
          alt="RKC Automotive green shop bay entrance in Englewood"
          fill
          priority
          fetchPriority="high"
          className={`object-cover object-[78%_56%] sm:object-[74%_53%] lg:object-[70%_50%] ${reduce ? '' : 'ken-burns'}`}
          sizes={HERO_IMAGE_SIZES}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(12, 18, 34, 0.42) 0%, rgba(12, 18, 34, 0.2) 40%, rgba(12, 18, 34, 0.72) 100%)',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1222]/88 via-[#0c1222]/14 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c1222]/68 via-[#0c1222]/08 to-transparent lg:from-[#0c1222]/55 lg:via-transparent lg:to-transparent"
          aria-hidden
        />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex min-h-[58svh] flex-col px-4 pt-20 sm:min-h-[65svh] sm:px-6 sm:pt-22 lg:px-8 lg:pt-24"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center pb-12 text-center sm:pb-16">
          <div className="w-full max-w-3xl xl:max-w-4xl">
            <div ref={headline}>
              <div className="mb-4 flex justify-center">
                <LanguageToggle variant="hero" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
                {copy.hero.location}
              </p>
              <h1 className="mt-4 font-display text-[clamp(2rem,5.5vw,4.25rem)] leading-[0.98] tracking-wide text-white">
                {copy.hero.headline}
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-lg font-medium text-white/85 sm:text-xl">
                {copy.hero.servicesLine}
              </p>
              <p className="mt-3 text-base text-white/75 sm:text-lg">{copy.hero.serviceArea}</p>
            </div>

            <div ref={ctas} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
                <Phone className="size-5" aria-hidden />
                {copy.hero.callNow} — {BUSINESS.phone}
              </MotionAnchor>
              <Link href="/contact" className="btn-ghost-light">
                {copy.hero.bookService}
              </Link>
            </div>

            <div
              ref={alert}
              className="mx-auto mt-8 max-w-xl rounded-2xl border border-amber-400/30 bg-[rgba(12,18,34,0.82)] p-5 text-left"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-300" aria-hidden />
                <div>
                  <p className="font-bold text-white">{copy.hero.alertTitle}</p>
                  <p className="mt-1 text-sm text-white/75">{copy.hero.alertBody}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <MotionAnchor
                      href={BUSINESS.phoneHref}
                      className="text-sm font-bold text-primary-green-light underline-offset-4 hover:underline"
                    >
                      {copy.hero.emergency}: {BUSINESS.phone}
                    </MotionAnchor>
                    <CheckEngineHelpLink>{copy.hero.checkEngineHelp}</CheckEngineHelpLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </section>
  );
}
