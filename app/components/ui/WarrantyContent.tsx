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

const PROCESS_ICONS: LucideIcon[] = [ClipboardList, ScanSearch, Phone, Wrench];

const SECTION_PAD = 'py-24 sm:py-28';

export default function WarrantyContent() {
  return (
    <div>
      <WarrantyHero />

      <WarrantyApprovalTimes />

      <WarrantyTeardownWarning />

      <WarrantyDenialTactics />

      <WarrantyPartsBattle />

      {/* Process */}
      <section className={`${SECTION_PAD} border-t border-[color:var(--line)] bg-[var(--background)]`}>
        <div className="wrap">
          <FadeIn className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              How we handle your claim
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Four steps. Zero phone-tree misery.
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Drop off at our Englewood shop — we take it from diagnosis through approved repair,
              fighting denials and documenting every interaction with your warranty administrator.
            </p>
          </FadeIn>

          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08} delay={0.05}>
            {WARRANTY_CLAIM_PROCESS.map((step, i) => {
              const Icon = PROCESS_ICONS[i] ?? ShieldCheck;
              return (
                <StaggerItem key={step.step}>
                  <div className="h-full rounded-3xl border border-[color:var(--line)] bg-white p-8">
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

      {/* Verified providers — clickable logo grid */}
      <section className={`${SECTION_PAD} bg-white`}>
        <div className="wrap">
          <FadeIn className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              Verified active providers
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              We work directly with your warranty company
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              These administrators are verified active partners with direct claims portals. RKC submits
              diagnostics, negotiates approvals, and tracks your claim through completion — you never
              sit on hold with a call center.
            </p>
          </FadeIn>
          <WarrantyPageProviders />
        </div>
      </section>

      <WarrantyProviderIndex />

      {/* FAQ */}
      <section className={`${SECTION_PAD} border-t border-[color:var(--line)] bg-white`}>
        <div className="wrap">
          <FadeIn className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">FAQ</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Extended warranty questions
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Straight answers on teardown authorizations, denial appeals, parts quality, approval
              timelines, and what to expect at our Englewood shop.
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
              Bring your vehicle and contract to {BUSINESS.address.full}. We look up coverage, fight
              denials, and handle the entire claims process.
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
