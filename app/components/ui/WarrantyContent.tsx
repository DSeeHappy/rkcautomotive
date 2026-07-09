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
import { BUSINESS, LABOR_RATE, PHOTOS, WARRANTY_CLAIM_PROCESS, WARRANTY_PAGE_FAQ } from '@/lib/constants';
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

const PROCESS_ICONS: LucideIcon[] = [ClipboardList, ScanSearch, Phone, Wrench];

export default function WarrantyContent() {
  return (
    <div>
      <WarrantyHero />

      <WarrantyRealityCheck />

      <WarrantyApprovalTimes />

      <WarrantyTeardownWarning />

      <WarrantyDenialTactics />

      <WarrantyPartsBattle />

      {/* Process — dark section with photo bg, step connectors like homepage */}
      <section className="relative overflow-hidden bg-[#0c1222] py-24 text-white sm:py-28">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={PHOTOS.brandedBay}
            alt="RKC Automotive shop bay in Englewood, Colorado"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative wrap">
          <FadeIn className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
              How we handle your claim
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide sm:text-6xl">
              Four steps. Zero phone-tree misery.
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Drop off at our Englewood shop — we take it from diagnosis through approved repair,
              fighting denials and documenting every interaction with your warranty administrator.
            </p>
          </FadeIn>

          {/* Step number connectors — desktop */}
          <div className="relative mb-2 hidden lg:block">
            <div
              aria-hidden
              className="absolute left-[12.5%] right-[12.5%] top-6 h-px bg-gradient-to-r from-primary-green/20 via-primary-green/50 to-primary-green/20"
            />
          </div>

          <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {WARRANTY_CLAIM_PROCESS.map((step, i) => {
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

      {/* FAQ — centered like Pricing */}
      <section className={`${SECTION_PAD} bg-[var(--background)]`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER_CENTER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">FAQ</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Extended warranty questions
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Straight answers on teardown authorizations, denial appeals, parts quality, approval
              timelines, and what to expect at our Englewood shop.
            </p>
          </FadeIn>
          <FadeIn delay={0.06} className="mx-auto max-w-3xl">
            <FAQAccordion items={WARRANTY_PAGE_FAQ} />
          </FadeIn>
        </div>
      </section>

      {/* Final CTA band — matches PricingContent */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.exteriorBay}
            alt="RKC Automotive shop exterior in Englewood, Colorado"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
          <FadeIn>
            <p className="font-display text-[clamp(2.5rem,8vw,4.5rem)] leading-none tracking-wide text-primary-green-light">
              {LABOR_RATE}
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-wide text-white sm:text-5xl lg:text-6xl">
              Ready to file your warranty claim?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">
              Bring your vehicle and contract to {BUSINESS.address.full}. We look up coverage, fight
              denials, and handle the entire claims process at {LABOR_RATE}.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
                <Phone className="size-5" />
                {BUSINESS.phone}
              </MotionAnchor>
              <Link href="/contact" className="btn-ghost-light">
                <CalendarCheck className="size-5" />
                Schedule diagnostic
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                Contact
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
                Get directions
              </MotionAnchor>
            </div>
          </FadeIn>
        </div>
      </section>

      <PageCTAs variant="band" />
    </div>
  );
}
