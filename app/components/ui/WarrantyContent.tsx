'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarCheck,
  ClipboardList,
  MapPin,
  Phone,
  ScanSearch,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { BUSINESS, LABOR_RATE, PHOTOS } from '@/lib/constants';
import { HERO_IMAGE_SIZES } from '@/lib/photos';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';
import FAQAccordion from '@/app/components/ui/FAQAccordion';
import PageCTAs from '@/app/components/ui/PageCTAs';
import WarrantyHero from '@/app/components/ui/warranty/WarrantyHero';
import WarrantyRealityCheck from '@/app/components/ui/warranty/WarrantyRealityCheck';
import WarrantyApprovalTimes from '@/app/components/ui/warranty/WarrantyApprovalTimes';
import WarrantyTeardownWarning from '@/app/components/ui/warranty/WarrantyTeardownWarning';
import WarrantyDenialTactics from '@/app/components/ui/warranty/WarrantyDenialTactics';
import WarrantyPartsBattle from '@/app/components/ui/warranty/WarrantyPartsBattle';
import WarrantyProviderIndex from '@/app/components/ui/warranty/WarrantyProviderIndex';
import { SECTION_PAD, SECTION_HEADER_CENTER } from '@/app/components/ui/warranty/warrantyShared';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import { useLanguage } from '@/lib/language';
import { warrantyCopy, warrantyCtaBody } from '@/lib/i18n/warrantyCopy';

const PROCESS_ICONS: LucideIcon[] = [ClipboardList, ScanSearch, Phone, Wrench];

export default function WarrantyContent() {
  const { lang } = useLanguage();
  const copy = warrantyCopy(lang);

  return (
    <div lang={lang}>
      <WarrantyHero />

      <WarrantyRealityCheck />

      <WarrantyApprovalTimes />

      <WarrantyTeardownWarning />

      <WarrantyDenialTactics />

      <WarrantyPartsBattle />

      <section className="relative overflow-hidden bg-[#0c1222] py-24 text-white sm:py-28">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={PHOTOS.brandedBay}
            alt={copy.processSectionAlt}
            fill
            className="object-cover"
            sizes={HERO_IMAGE_SIZES}
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative wrap">
          <FadeIn className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
              {copy.process.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">{copy.process.title}</h2>
            <p className="mt-4 text-lg text-white/70">{copy.process.intro}</p>
          </FadeIn>

          <div className="relative mb-2 hidden lg:block">
            <div
              aria-hidden
              className="absolute left-[12.5%] right-[12.5%] top-6 h-px bg-gradient-to-r from-primary-green/20 via-primary-green/50 to-primary-green/20"
            />
          </div>

          <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {copy.process.steps.map((step, i) => {
              const Icon = PROCESS_ICONS[i] ?? ShieldCheck;
              return (
                <StaggerItem key={step.step}>
                  <div className="group relative border-t border-white/20 pt-6 transition duration-300 hover:border-primary-green/50">
                    <div className="mb-4 hidden lg:flex lg:items-center lg:gap-3">
                      <span className="relative z-10 flex size-12 items-center justify-center rounded-full border-4 border-[#0c1222] bg-primary-green/20 ring-1 ring-primary-green/40">
                        <Icon className="size-5 text-primary-green-light" aria-hidden />
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3 lg:block">
                      <p className="font-display text-5xl text-primary-green-light">{step.step}</p>
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10 text-primary-green-light ring-1 ring-white/15 transition duration-300 group-hover:bg-primary-green/15 lg:hidden">
                        <Icon className="size-5" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{step.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <WarrantyProviderIndex />

      <section className="border-y border-[color:var(--line)] bg-white py-16 sm:py-20">
        <div className="wrap">
          <FadeIn className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              {copy.powertrain.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              {copy.powertrain.title}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{copy.powertrain.intro}</p>
          </FadeIn>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {copy.powertrain.links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-[color:var(--line)] bg-[var(--background)] p-6 transition hover:border-primary-green/40 hover:bg-primary-green/5"
              >
                <span className="font-semibold text-foreground group-hover:text-primary-green">{item.title}</span>
                <p className="mt-2 text-sm text-ink-muted">{item.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${SECTION_PAD} bg-[var(--background)]`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER_CENTER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{copy.faq.eyebrow}</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">{copy.faq.title}</h2>
            <p className="mt-4 text-lg text-ink-muted">{copy.faq.intro}</p>
          </FadeIn>
          <FadeIn delay={0.06} className="mx-auto max-w-3xl">
            <FAQAccordion items={[...copy.faq.items]} />
          </FadeIn>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.exteriorBay}
            alt={copy.ctaSectionAlt}
            fill
            className="object-cover"
            sizes={HERO_IMAGE_SIZES}
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
          <FadeIn>
            <p className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-none tracking-wide text-primary-green-light">
              {LABOR_RATE}
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-wide text-white sm:text-5xl lg:text-6xl">
              {copy.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">{warrantyCtaBody(lang)}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
                <Phone className="size-5" />
                {BUSINESS.phone}
              </MotionAnchor>
              <Link href="/contact" className="btn-ghost-light">
                <CalendarCheck className="size-5" />
                {copy.cta.scheduleDiagnostic}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                {copy.cta.contact}
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/50">
              <span>{BUSINESS.address.full}</span>
              <span aria-hidden>·</span>
              <MotionAnchor
                href={BUSINESS.directionsUrl}
                className="inline-flex items-center gap-1.5 text-white/60 transition hover:text-white"
              >
                <MapPin className="size-4" />
                {copy.cta.getDirections}
              </MotionAnchor>
            </div>
          </FadeIn>
        </div>
      </section>

      <PageCTAs variant="band" />
    </div>
  );
}
