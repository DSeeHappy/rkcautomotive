'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { BUSINESS, PHOTOS, PRICING_PACKAGES, PRICING_TIERS } from '@/lib/constants';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';

export default function PricingContent() {
  const reduce = useReducedMotion();

  return (
    <div>
      <section className="relative isolate min-h-[60svh] overflow-hidden bg-[#0c1222] pt-24">
        <Image src={PHOTOS.teamCollab} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="photo-veil absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">Pricing</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl tracking-wide text-white sm:text-6xl lg:text-7xl">
            Clear packages. Written estimates. No theatre.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl">
            Starting prices for common Colorado miles. Every job still gets a written estimate before work begins.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BUSINESS.phoneHref} className="btn-green">
              <Phone className="size-5" />
              {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn-ghost-light">
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--line)] bg-white py-8">
        <FadeIn className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
            Prices shown are starting estimates and may vary by make, model, and condition. Free multi-point inspection
            with any service. Diagnostic fees are often applied toward approved repairs.
          </p>
        </FadeIn>
      </section>

      {/* Elevated SaaS-style packages */}
      <section className="bg-[var(--background)] py-24">
        <div className="wrap">
          <FadeIn className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Packages</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Pick a starting lane
            </h2>
          </FadeIn>

          <Stagger className="grid items-stretch gap-6 lg:grid-cols-3" stagger={0.1}>
            {PRICING_PACKAGES.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-8 transition-transform hover:-translate-y-1 ${
                    pkg.featured
                      ? 'bg-gradient-to-b from-primary-blue to-primary-blue-dark text-white shadow-[0_30px_80px_-30px_rgba(28,61,145,0.65)] ring-2 ring-primary-green'
                      : 'border border-[color:var(--line)] bg-white shadow-[0_20px_60px_-40px_rgba(12,18,34,0.3)]'
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-primary-green px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                      Most requested
                    </span>
                  )}
                  <h3 className="font-display text-3xl tracking-wide">{pkg.name}</h3>
                  <p className={`mt-2 text-sm ${pkg.featured ? 'text-white/70' : 'text-ink-muted'}`}>
                    {pkg.description}
                  </p>
                  <p className="mt-8 font-display text-5xl tracking-wide">{pkg.price}</p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle
                          className={`mt-0.5 size-4 shrink-0 ${pkg.featured ? 'text-primary-green-light' : 'text-primary-green'}`}
                        />
                        <span className={pkg.featured ? 'text-white/85' : 'text-foreground/80'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={BUSINESS.phoneHref}
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 font-semibold transition ${
                      pkg.featured
                        ? 'bg-primary-green text-white hover:bg-primary-green-dark'
                        : 'bg-primary-blue text-white hover:bg-primary-blue-dark'
                    }`}
                    whileHover={reduce ? undefined : { y: -2 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                  >
                    {pkg.cta}
                  </motion.a>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-14 text-center">
            <h2 className="font-display text-5xl tracking-wide text-foreground">À la carte starting prices</h2>
            <p className="mt-3 text-lg text-ink-muted">Individual services when you know exactly what you need</p>
          </FadeIn>
          <div className="space-y-12">
            {PRICING_TIERS.map((tier, ti) => (
              <FadeIn key={tier.category} delay={ti * 0.05}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-green">
                  {tier.category}
                </h3>
                <div className="mt-4 overflow-hidden rounded-2xl border border-[color:var(--line)]">
                  {tier.items.map((item, ii) => (
                    <div
                      key={item.service}
                      className={`grid gap-2 px-6 py-5 sm:grid-cols-12 sm:items-center sm:gap-6 ${
                        ii > 0 ? 'border-t border-[color:var(--line)]' : ''
                      } ${ii % 2 === 0 ? 'bg-white' : 'bg-[var(--background)]'}`}
                    >
                      <div className="sm:col-span-8">
                        <p className="font-semibold text-foreground">{item.service}</p>
                        <p className="mt-1 text-sm text-ink-muted">{item.note}</p>
                      </div>
                      <p className="font-display text-3xl tracking-wide text-primary-blue sm:col-span-4 sm:text-right">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PHOTOS.exteriorBay} alt="" fill className="object-cover" sizes="100vw" />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-display text-5xl tracking-wide text-white sm:text-6xl">Need a custom estimate?</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">
              Every vehicle is different. Call for a personalized quote on any repair or maintenance service.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.a
                href={BUSINESS.phoneHref}
                className="btn-green"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                <Phone className="size-5" />
                {BUSINESS.phone}
              </motion.a>
              <Link href="/contact" className="btn-ghost-light">
                Contact online
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
