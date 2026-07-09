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
import { motion, useReducedMotion } from 'framer-motion';
import { BUSINESS, PHOTOS, WARRANTY_CLAIM_PROCESS, WARRANTY_PAGE_FAQ } from '@/lib/constants';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';
import FAQAccordion from '@/app/components/ui/FAQAccordion';
import PageCTAs from '@/app/components/ui/PageCTAs';
import WarrantyPageProviders from '@/app/components/ui/WarrantyPageProviders';
import WarrantyHero from '@/app/components/ui/warranty/WarrantyHero';
import WarrantyApprovalTimes from '@/app/components/ui/warranty/WarrantyApprovalTimes';
import WarrantyTeardownWarning from '@/app/components/ui/warranty/WarrantyTeardownWarning';
import WarrantyDenialTactics from '@/app/components/ui/warranty/WarrantyDenialTactics';
import WarrantyPartsBattle from '@/app/components/ui/warranty/WarrantyPartsBattle';
import WarrantyProviderIndex from '@/app/components/ui/warranty/WarrantyProviderIndex';
import { MotionAnchor } from '@/app/components/ui/MotionLink';

const PROCESS_ICONS: LucideIcon[] = [ClipboardList, ScanSearch, Phone, Wrench];

const SECTION_PAD = 'py-24 sm:py-28';
const SECTION_HEADER = 'mb-14 max-w-3xl';

export default function WarrantyContent() {
  const reduce = useReducedMotion();

  return (
    <div>
      <WarrantyHero />

      <WarrantyApprovalTimes />

      <WarrantyTeardownWarning />

      <WarrantyDenialTactics />

      <WarrantyPartsBattle />

      {/* Process — dark section with photo bg like homepage */}
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

          <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {WARRANTY_CLAIM_PROCESS.map((step, i) => {
              const Icon = PROCESS_ICONS[i] ?? ShieldCheck;
              return (
                <StaggerItem key={step.step}>
                  <div className="group border-t border-white/20 pt-6 transition duration-300 hover:border-primary-green/50">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-display text-5xl text-primary-green-light">{step.step}</p>
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10 text-primary-green-light ring-1 ring-white/15 transition duration-300 group-hover:bg-primary-green/15">
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

      {/* Verified providers */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              Verified active providers
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              We work directly with your warranty company
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              These administrators are verified active partners with direct claims portals. RKC submits
              diagnostics, negotiates approvals, and tracks your claim through completion.
            </p>
          </FadeIn>
          <WarrantyPageProviders />
        </div>
      </section>

      <WarrantyProviderIndex />

      {/* FAQ — centered like Pricing */}
      <section className={`${SECTION_PAD} bg-[var(--background)]`}>
        <div className="wrap">
          <FadeIn className={`mx-auto ${SECTION_HEADER} text-center`}>
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

      {/* Final CTA band */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.brandedBay}
            alt="RKC Automotive shop bay in Englewood, Colorado"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
              Englewood, CO
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-wide text-white sm:text-5xl lg:text-6xl">
              Ready to file your warranty claim?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">
              Bring your vehicle and contract to {BUSINESS.address.full}. We look up coverage, fight
              denials, and handle the entire claims process.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.div whileHover={reduce ? undefined : { y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
                <Link href="/contact" className="btn-green">
                  <CalendarCheck className="size-5" />
                  Schedule Warranty Diagnostic
                </Link>
              </motion.div>
              <MotionAnchor href={BUSINESS.phoneHref} className="btn-ghost-light">
                <Phone className="size-5" />
                {BUSINESS.phone}
              </MotionAnchor>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                Contact us
              </Link>
              <MotionAnchor
                href={BUSINESS.directionsUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                <MapPin className="size-5" />
                Get directions
              </MotionAnchor>
            </div>
            <p className="mt-6 text-sm text-white/50">
              {BUSINESS.address.full} · {BUSINESS.hours.weekdays}
            </p>
          </FadeIn>
        </div>
      </section>

      <PageCTAs variant="band" />
    </div>
  );
}
