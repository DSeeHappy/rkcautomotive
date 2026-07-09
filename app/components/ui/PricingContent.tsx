'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Phone, Clock, Shield, Wrench } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  BUSINESS,
  LABOR_RATE,
  PHOTOS,
  PRICING_COMPARISON,
  PRICING_COMPARISON_ROWS,
  PRICING_PACKAGES,
  PRICING_PHILOSOPHY,
  PRICING_TIERS,
} from '@/lib/constants';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';

export default function PricingContent() {
  const reduce = useReducedMotion();

  return (
    <div>
      {/* Hero — $120/hr anchor */}
      <section className="relative isolate min-h-[68svh] overflow-hidden bg-[#0c1222] pt-24 sm:min-h-[72svh]">
        <Image src={PHOTOS.teamCollab} alt="" fill priority className="object-cover" sizes="100vw" />
        <div className="photo-veil absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">Pricing</p>
          <motion.p
            className="mt-6 font-display text-[clamp(4.5rem,14vw,9rem)] leading-[0.9] tracking-wide text-primary-green-light"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {LABOR_RATE}
          </motion.p>
          <motion.h1
            className="mt-2 max-w-3xl font-display text-5xl tracking-wide text-white sm:text-6xl lg:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Same quality. Better price.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            ASE-certified Englewood shop. Dealers charge $150–200+/hr and upsell what you do not need. We charge{' '}
            {LABOR_RATE}, tell you straight, and get you back on the road.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
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
              Request a quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="relative z-10 -mt-6 border-y border-[color:var(--line)] bg-white/95 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[color:var(--line)] lg:grid-cols-4">
          {[
            { icon: Wrench, label: 'Labor rate', value: LABOR_RATE },
            { icon: Shield, label: 'ASE certified', value: '30+ years' },
            { icon: CheckCircle, label: 'Estimates', value: 'Written first' },
            { icon: Clock, label: 'Hours', value: 'Mon–Fri 8–6' },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.06} className="flex items-center gap-4 px-6 py-8 sm:px-8">
              <item.icon className="size-8 shrink-0 text-primary-green" aria-hidden />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">{item.label}</p>
                <p className="mt-1 font-display text-2xl tracking-wide text-primary-blue sm:text-3xl">{item.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Dealer vs RKC comparison */}
      <section className="bg-[var(--background)] py-24 sm:py-28">
        <div className="wrap">
          <FadeIn className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Compare</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Dealership vs chain vs RKC
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Same ASE-certified work. Different labor rates, different honesty. Here is what Englewood drivers actually
              pay.
            </p>
          </FadeIn>

          {/* Desktop table */}
          <FadeIn className="hidden lg:block">
            <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-white shadow-[0_20px_60px_-40px_rgba(12,18,34,0.25)]">
              <table className="w-full text-left">
                <caption className="sr-only">Comparison of labor rates and service practices</caption>
                <thead>
                  <tr className="border-b border-[color:var(--line)] bg-[var(--background)]">
                    <th scope="col" className="px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
                      &nbsp;
                    </th>
                    {PRICING_COMPARISON.map((col) => (
                      <th
                        key={col.name}
                        scope="col"
                        className={`px-6 py-5 text-sm font-bold uppercase tracking-[0.12em] ${
                          col.highlight
                            ? 'bg-primary-blue text-white'
                            : 'text-foreground'
                        }`}
                      >
                        {col.name}
                        {col.highlight && (
                          <span className="mt-1 block text-[10px] font-semibold normal-case tracking-normal text-primary-green-light">
                            Your shop
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PRICING_COMPARISON_ROWS.map((row, ri) => (
                    <tr
                      key={row.key}
                      className={ri < PRICING_COMPARISON_ROWS.length - 1 ? 'border-b border-[color:var(--line)]' : ''}
                    >
                      <th
                        scope="row"
                        className="px-8 py-5 text-sm font-bold text-foreground"
                      >
                        {row.label}
                      </th>
                      {PRICING_COMPARISON.map((col) => (
                        <td
                          key={`${col.name}-${row.key}`}
                          className={`px-6 py-5 text-sm ${
                            col.highlight
                              ? 'bg-primary-blue/5 font-semibold text-primary-blue'
                              : 'text-ink-muted'
                          }`}
                        >
                          {col[row.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Mobile cards */}
          <Stagger className="grid gap-6 lg:hidden" stagger={0.1}>
            {PRICING_COMPARISON.map((shop) => (
              <StaggerItem key={shop.name}>
                <article
                  className={`overflow-hidden rounded-[1.75rem] p-6 ${
                    shop.highlight
                      ? 'bg-gradient-to-b from-primary-blue to-primary-blue-dark text-white shadow-[0_30px_80px_-30px_rgba(28,61,145,0.65)] ring-2 ring-primary-green'
                      : 'border border-[color:var(--line)] bg-white'
                  }`}
                >
                  <h3 className="font-display text-3xl tracking-wide">{shop.name}</h3>
                  {shop.highlight && (
                    <span className="mt-2 inline-block rounded-full bg-primary-green px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                      Your shop
                    </span>
                  )}
                  <dl className="mt-6 space-y-4">
                    {PRICING_COMPARISON_ROWS.map((row) => (
                      <div key={row.key}>
                        <dt
                          className={`text-xs font-bold uppercase tracking-[0.16em] ${
                            shop.highlight ? 'text-white/60' : 'text-ink-muted'
                          }`}
                        >
                          {row.label}
                        </dt>
                        <dd className={`mt-1 text-sm ${shop.highlight ? 'font-semibold text-white' : 'text-foreground'}`}>
                          {shop[row.key]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why $120/hr */}
      <section className="bg-white py-24 sm:py-28">
        <div className="wrap">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Why {LABOR_RATE}</p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
                Honest rate. Honest answers.
              </h2>
              <p className="mt-5 text-lg text-ink-muted">
                We are not the cheapest shop in Denver — we are the fair one. Lower overhead than a dealership, better
                technicians than a chain, and zero pressure to approve work you do not need.
              </p>
              <a href={BUSINESS.phoneHref} className="btn-green mt-10">
                <Phone className="size-5" />
                Get a written estimate
              </a>
            </FadeIn>
            <div className="space-y-5 lg:col-span-7">
              {PRICING_PHILOSOPHY.map((point, i) => (
                <FadeIn key={point.title} delay={i * 0.06}>
                  <div className="rounded-2xl border border-[color:var(--line)] bg-[var(--background)] p-6 sm:p-8">
                    <h3 className="font-display text-3xl tracking-wide text-primary-blue">{point.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{point.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-[var(--background)] py-24 sm:py-28">
        <div className="wrap">
          <FadeIn className="mb-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Packages</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              Pick a starting lane
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-muted">
              Starting prices for common jobs — all at {LABOR_RATE} labor. Every package gets a written estimate before
              work begins. No upsells tucked in.
            </p>
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
                  <p className={`mt-2 text-xs font-semibold uppercase tracking-[0.16em] ${pkg.featured ? 'text-primary-green-light' : 'text-primary-green'}`}>
                    + {LABOR_RATE} labor
                  </p>
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

      {/* À la carte */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-14 text-center">
            <h2 className="font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              À la carte starting prices
            </h2>
            <p className="mt-3 text-lg text-ink-muted">
              Know exactly what you need? Here are starting prices — parts plus {LABOR_RATE} labor where applicable.
            </p>
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
          <FadeIn className="mt-10 rounded-2xl border border-[color:var(--line)] bg-[var(--background)] px-6 py-5 text-center text-sm text-ink-muted">
            All prices are starting estimates and vary by make, model, and condition. Free multi-point inspection with any
            service. Diagnostic fees applied toward approved repairs.
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PHOTOS.exteriorBay} alt="" fill className="object-cover" sizes="100vw" />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
              Ready to drive?
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-white sm:text-6xl">
              Call for a straight answer
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">
              Tell us what is going on with your vehicle. We will give you an honest estimate at {LABOR_RATE} — no
              upsell, no runaround. ASE certified, 30+ years in Englewood.
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
            <p className="mt-6 text-sm text-white/50">
              {BUSINESS.address.full} · {BUSINESS.hours.weekdays}
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
