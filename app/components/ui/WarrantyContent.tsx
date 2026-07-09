'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarCheck,
  ClipboardList,
  Phone,
  ScanSearch,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BUSINESS,
  PHOTOS,
  WARRANTY_CLAIM_PROCESS,
  WARRANTY_PAGE_FAQ,
} from '@/lib/constants';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';
import FAQAccordion from '@/app/components/ui/FAQAccordion';
import PageCTAs from '@/app/components/ui/PageCTAs';
import WarrantyPageProviders from '@/app/components/ui/WarrantyPageProviders';

const PROCESS_ICONS: LucideIcon[] = [ClipboardList, ScanSearch, Phone, Wrench];

const SECTION_PAD = 'py-24 sm:py-28';

export default function WarrantyContent() {
  const reduce = useReducedMotion();

  return (
    <div>
      {/* Hero */}
      <section className="relative isolate min-h-[72svh] overflow-hidden bg-[#0c1222] pt-24 sm:min-h-[78svh]">
        <Image
          src={PHOTOS.engineBay}
          alt="ASE-certified technician performing diagnostics at RKC Automotive in Englewood, CO"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="photo-veil absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
            Extended warranty repair
          </p>
          <motion.h1
            className="mt-4 max-w-4xl font-display text-4xl tracking-wide text-white sm:text-5xl lg:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            We Accept All Major Extended Warranties in Englewood, CO
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Don&apos;t sit on the phone with a claims adjuster. Bring your vehicle to RKC Automotive—we
            look up your coverage, file the claim, and get your repairs approved.
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            We handle the paperwork, phone calls, and diagnostics directly with your warranty company so
            you don&apos;t have to deal with the headache.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/contact" className="btn-green">
              <CalendarCheck className="size-5" />
              Schedule Warranty Diagnostic
            </Link>
            <a href={BUSINESS.phoneHref} className="btn-ghost-light">
              <Phone className="size-5" />
              Call {BUSINESS.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className="wrap">
          <FadeIn className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              How we handle your claim
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Four steps. Zero phone-tree misery.
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Drop off at our Englewood shop — we take it from diagnosis through approved repair.
            </p>
          </FadeIn>

          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08} delay={0.05}>
            {WARRANTY_CLAIM_PROCESS.map((step, i) => {
              const Icon = PROCESS_ICONS[i] ?? ShieldCheck;
              return (
                <StaggerItem key={step.step}>
                  <div className="h-full rounded-3xl border border-[color:var(--line)] bg-[var(--background)] p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-display text-4xl text-primary-green-light">{step.step}</span>
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
                        <Icon className="size-6" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">{step.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Providers */}
      <section className={`${SECTION_PAD} border-t border-[color:var(--line)] bg-[var(--background)]`}>
        <div className="wrap">
          <FadeIn className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              Supported providers
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              We work with your warranty company
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Endurance, CarShield, CARCHEX, Royal Administration Services, and dozens more — bring your
              contract and we coordinate the claim.
            </p>
          </FadeIn>
          <WarrantyPageProviders />
        </div>
      </section>

      {/* FAQ */}
      <section className={`${SECTION_PAD} border-t border-[color:var(--line)] bg-white`}>
        <div className="wrap">
          <FadeIn className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">FAQ</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Extended warranty questions
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Straight answers on dealership requirements, out-of-pocket costs, and what to expect at our
              Englewood shop.
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <FAQAccordion items={WARRANTY_PAGE_FAQ} />
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA band */}
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
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
              Ready to file your warranty claim?
            </h2>
            <p className="mt-3 max-w-lg text-white/75">
              Bring your vehicle and contract to {BUSINESS.address.full}. We look up coverage and handle
              the rest.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-green">
              <CalendarCheck className="size-5" />
              Schedule Warranty Diagnostic
            </Link>
            <a href={BUSINESS.phoneHref} className="btn-ghost-light">
              <Phone className="size-5" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <PageCTAs variant="band" />
    </div>
  );
}
