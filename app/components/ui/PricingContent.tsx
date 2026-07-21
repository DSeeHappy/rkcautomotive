'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Award,
  CheckCircle,
  Phone,
  Clock,
  Shield,
  ShieldCheck,
  Wrench,
  Calculator,
  TrendingDown,
  CircleDollarSign,
  FileText,
  ClipboardCheck,
  ScanSearch,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  ASE_ARIA_LABEL,
  ASE_URL,
  BUSINESS,
  LABOR_RATE,
  PHOTOS,
  LOCAL_SHOP_RATE_RANGE,
} from '@/lib/constants';
import { HERO_IMAGE_SIZES } from '@/lib/photos';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';
import FAQAccordion from '@/app/components/ui/FAQAccordion';
import PhoneLink from '@/app/components/ui/PhoneLink';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import Breadcrumbs from '@/app/components/ui/Breadcrumbs';
import { useGsapReveal } from '@/lib/useGsapReveal';
import { useLanguage } from '@/lib/language';
import { siteCopy } from '@/lib/siteCopy';
import { pricingCopy } from '@/lib/i18n/pricingCopy';

const RKC_RATE = 120;
const DEALER_RATE = 180;
const CHAIN_RATE = 150;
const LOCAL_RATE = 155;

const PHILOSOPHY_ICONS: Record<string, LucideIcon> = {
  rate: CircleDollarSign,
  shield: ShieldCheck,
  wrench: Wrench,
  diagnostic: ScanSearch,
  estimate: ClipboardCheck,
  certified: Award,
};

const SECTION_PAD = 'py-24 sm:py-28';
const SECTION_HEADER = 'mb-14 max-w-3xl';
const PRICING_CARD =
  'overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-[var(--background)] shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)]';

function formatCurrency(amount: number) {
  return `$${amount.toLocaleString('en-US')}`;
}

function laborCost(hours: number, rate: number) {
  return Math.round(hours * rate);
}

export default function PricingContent() {
  const { lang } = useLanguage();
  const shell = siteCopy(lang).shells.pricing;
  const body = pricingCopy(lang);
  const competitive = body.why.cards;
  const rateReveal = useGsapReveal<HTMLParagraphElement>({ y: 20, duration: 0.7 });
  const titleReveal = useGsapReveal<HTMLHeadingElement>({ delay: 0.08, y: 24, duration: 0.7 });
  const descReveal = useGsapReveal<HTMLParagraphElement>({ delay: 0.16, y: 16, duration: 0.6 });
  const ctaReveal = useGsapReveal<HTMLDivElement>({ delay: 0.24, y: 12, duration: 0.5 });

  return (
    <div lang={lang}>
      {/* Hero — $120/hr anchor */}
      <section className="relative isolate min-h-[72svh] overflow-hidden bg-[#0c1222] pt-20 sm:min-h-[78svh]">
        <Image src={PHOTOS.teamCollab} alt="ASE-certified technicians collaborating at RKC Automotive in Englewood, CO" fill priority className="object-cover" sizes={HERO_IMAGE_SIZES} />
        <div className="photo-veil absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: shell.home, href: '/' },
              { label: shell.crumb },
            ]}
            className="mb-6"
            variant="light"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">{shell.eyebrow}</p>
          <p ref={rateReveal} className="mt-4 font-display text-[clamp(5rem,16vw,10rem)] leading-[0.85] tracking-wide text-primary-green-light">
            {LABOR_RATE}
          </p>
          <h1 ref={titleReveal} className="mt-1 max-w-4xl font-display text-4xl tracking-wide text-white sm:text-5xl lg:text-6xl">
            {shell.title}
          </h1>
          <p ref={descReveal} className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl">
            {shell.description(LOCAL_SHOP_RATE_RANGE, LABOR_RATE)}
          </p>
          <div ref={ctaReveal} className="mt-8 flex flex-wrap gap-3">
            <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
              <Phone className="size-5" />
              {BUSINESS.phone}
            </MotionAnchor>
            <Link href="/contact" className="btn-ghost-light">
              {shell.getEstimate}
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="relative z-10 -mt-6 border-y border-[color:var(--line)] bg-white/95 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[color:var(--line)] lg:grid-cols-4">
          {[
            { icon: Wrench, label: shell.trustStrip[0].label, value: LABOR_RATE },
            { icon: Shield, label: shell.trustStrip[1].label, value: shell.trustStrip[1].value!, href: ASE_URL },
            { icon: CheckCircle, label: shell.trustStrip[2].label, value: shell.trustStrip[2].value! },
            { icon: Clock, label: shell.trustStrip[3].label, value: shell.trustStrip[3].value! },
          ].map((item, i) => {
            const inner = (
              <>
                <item.icon className="size-8 shrink-0 text-primary-green" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">{item.label}</p>
                  <p className="mt-1 font-display text-2xl tracking-wide text-primary-blue sm:text-3xl">{item.value}</p>
                </div>
              </>
            );

            if ('href' in item && item.href) {
              return (
                <FadeIn key={item.label} delay={i * 0.06}>
                  <MotionAnchor
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ASE_ARIA_LABEL}
                    className="flex items-center gap-4 px-6 py-8 transition-colors hover:bg-primary-green/[0.06] sm:px-8"
                  >
                    {inner}
                  </MotionAnchor>
                </FadeIn>
              );
            }

            return (
              <FadeIn key={item.label} delay={i * 0.06} className="flex items-center gap-4 px-6 py-8 sm:px-8">
                {inner}
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Dealer vs chain vs local vs RKC comparison */}
      <section className={`bg-[var(--background)] ${SECTION_PAD}`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{body.compare.eyebrow}</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              {body.compare.title}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{body.compare.intro}</p>
          </FadeIn>

          {/* Rate highlight bar */}
          <FadeIn className="mb-10">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {body.compare.rateBar.map((item, idx) => {
                const tone = idx === body.compare.rateBar.length - 1 ? 'highlight' : 'muted';
                return (
                  <div
                    key={item.label}
                    className={`rounded-2xl px-6 py-5 text-center ${
                      tone === 'highlight'
                        ? 'bg-gradient-to-b from-primary-blue to-primary-blue-dark text-white shadow-[0_20px_60px_-30px_rgba(28,61,145,0.55)] ring-2 ring-primary-green'
                        : 'border border-[color:var(--line)] bg-white'
                    }`}
                  >
                    <p
                      className={`text-xs font-bold uppercase tracking-[0.2em] ${
                        tone === 'highlight' ? 'text-white/60' : 'text-ink-muted'
                      }`}
                    >
                      {item.label}
                    </p>
                    <p
                      className={`mt-2 font-display text-4xl tracking-wide ${
                        tone === 'highlight' ? 'text-primary-green-light' : 'text-foreground'
                      }`}
                    >
                      {item.rate}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* Desktop table */}
          <FadeIn className="hidden lg:block">
            <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-white shadow-[0_20px_60px_-40px_rgba(12,18,34,0.25)]">
              <table className="w-full text-left">
                <caption className="sr-only">{body.compare.tableCaption}</caption>
                <thead>
                  <tr className="border-b border-[color:var(--line)] bg-[var(--background)]">
                    <th scope="col" className="px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
                      &nbsp;
                    </th>
                    {body.compare.shops.map((col) => (
                      <th
                        key={col.name}
                        scope="col"
                        className={`px-6 py-5 text-sm font-bold uppercase tracking-[0.12em] ${
                          col.highlight ? 'bg-primary-blue text-white' : 'text-foreground'
                        }`}
                      >
                        {col.name}
                        {col.highlight && (
                          <span className="mt-1 block text-[10px] font-semibold normal-case tracking-normal text-primary-green-light">
                            {body.compare.yourShop}
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.compare.rows.map((row, ri) => (
                    <tr
                      key={row.key}
                      className={ri < body.compare.rows.length - 1 ? 'border-b border-[color:var(--line)]' : ''}
                    >
                      <th scope="row" className="px-8 py-5 text-sm font-bold text-foreground">
                        {row.label}
                      </th>
                      {body.compare.shops.map((col) => (
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
            <p className="mt-5 text-center text-xs text-ink-muted">{body.compare.disclaimer}</p>
          </FadeIn>

          {/* Mobile cards */}
          <Stagger className="grid gap-6 lg:hidden" stagger={0.1}>
            {body.compare.shops.map((shop) => (
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
                      {body.compare.yourShop}
                    </span>
                  )}
                  <dl className="mt-6 space-y-4">
                    {body.compare.rows.map((row) => (
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
          <p className="mt-6 text-center text-xs text-ink-muted lg:hidden">{body.compare.disclaimer}</p>
        </div>
      </section>

      {/* Why posted pricing beats quote-only shops */}
      <section className={`border-y border-[color:var(--line)] bg-white ${SECTION_PAD}`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{body.why.eyebrow}</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              {body.why.title}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{body.why.intro(LABOR_RATE)}</p>
          </FadeIn>
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {competitive.map((item) => (
              <StaggerItem key={item.title}>
                <article className="h-full rounded-[1.75rem] border border-[color:var(--line)] bg-[var(--background)] p-8">
                  <h3 className="font-display text-2xl tracking-wide text-primary-blue">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What $120/hr means for you */}
      <section className={`bg-white ${SECTION_PAD}`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{body.math.eyebrow}</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              {body.math.title(LABOR_RATE)}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{body.math.intro}</p>
          </FadeIn>

          <Stagger className="grid gap-6 md:grid-cols-2" stagger={0.08}>
            {body.math.scenarios.map((scenario) => {
              const rkc = laborCost(scenario.hours, RKC_RATE);
              const dealer = laborCost(scenario.hours, DEALER_RATE);
              const chain = laborCost(scenario.hours, CHAIN_RATE);
              const local = laborCost(scenario.hours, LOCAL_RATE);
              const savingsVsDealer = dealer - rkc;
              const savingsVsLocal = local - rkc;

              return (
                <StaggerItem key={scenario.title}>
                  <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-[var(--background)]">
                    <div className="border-b border-[color:var(--line)] bg-white px-6 py-5 sm:px-8">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display text-2xl tracking-wide text-primary-blue sm:text-3xl">
                            {scenario.title}
                          </h3>
                          <p className="mt-1 text-sm text-ink-muted">{body.math.hoursLabor(scenario.hours)}</p>
                        </div>
                        <Calculator className="size-8 shrink-0 text-primary-green" aria-hidden />
                      </div>
                    </div>

                    <div className="flex-1 space-y-4 px-6 py-6 sm:px-8">
                      <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
                        <div className="rounded-xl bg-white p-4 ring-2 ring-primary-green">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary-green">RKC</p>
                          <p className="mt-1 font-display text-2xl tracking-wide text-primary-blue">{formatCurrency(rkc)}</p>
                          <p className="mt-0.5 text-[10px] text-ink-muted">@ $120/hr</p>
                        </div>
                        <div className="rounded-xl bg-white p-4">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-muted">Local</p>
                          <p className="mt-1 font-display text-2xl tracking-wide text-foreground">{formatCurrency(local)}</p>
                          <p className="mt-0.5 text-[10px] text-ink-muted">@ ~$155/hr</p>
                        </div>
                        <div className="rounded-xl bg-white p-4">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                            {lang === 'es' ? 'Cadena' : 'Chain'}
                          </p>
                          <p className="mt-1 font-display text-2xl tracking-wide text-foreground">{formatCurrency(chain)}</p>
                          <p className="mt-0.5 text-[10px] text-ink-muted">@ ~$150/hr</p>
                        </div>
                        <div className="rounded-xl bg-white p-4">
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-muted">
                            {lang === 'es' ? 'Conces.' : 'Dealer'}
                          </p>
                          <p className="mt-1 font-display text-2xl tracking-wide text-foreground">{formatCurrency(dealer)}</p>
                          <p className="mt-0.5 text-[10px] text-ink-muted">@ ~$180/hr</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl bg-primary-green/10 px-4 py-3">
                        <TrendingDown className="size-5 shrink-0 text-primary-green" aria-hidden />
                        <p className="text-sm font-semibold text-primary-blue">
                          {body.math.saveVs(formatCurrency(savingsVsLocal), formatCurrency(savingsVsDealer))}
                        </p>
                      </div>

                      <p className="text-sm leading-relaxed text-ink-muted">{scenario.note}</p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>

          <FadeIn className="mt-10 rounded-2xl border border-primary-blue/15 bg-primary-blue/5 px-6 py-5 sm:px-8">
            <p className="text-sm leading-relaxed text-ink-muted">
              <span className="font-semibold text-primary-blue">{body.math.formulaTitle}</span>{' '}
              {body.math.formulaBody}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing philosophy */}
      <section className={`relative isolate overflow-hidden bg-[var(--background)] ${SECTION_PAD}`}>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(28,61,145,0.07) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-green/30 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-primary-green/[0.06] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-16 size-72 rounded-full bg-primary-blue/[0.06] blur-3xl"
        />

        <div className="wrap relative">
          <FadeIn className={`mx-auto ${SECTION_HEADER} text-center`}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{body.philosophy.eyebrow}</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              {body.philosophy.title}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{body.philosophy.intro}</p>
            <div
              aria-hidden
              className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-primary-green to-transparent"
            />
          </FadeIn>

          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {body.philosophy.items.map((point, index) => {
              const Icon = PHILOSOPHY_ICONS[point.icon];
              const cardClassName =
                'group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-36px_rgba(28,61,145,0.28)] sm:p-8';
              const cardContent = (
                <>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-primary-blue/[0.04] transition duration-300 group-hover:bg-primary-green/[0.06]"
                  />
                  <div className="relative flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-green/15 to-primary-blue/10 ring-1 ring-primary-green/20">
                      <Icon className="size-6 text-primary-green" aria-hidden />
                    </div>
                    <span className="font-display text-4xl leading-none tracking-wide text-primary-blue/15">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="relative mt-5 font-display text-2xl tracking-wide text-primary-blue sm:text-[1.65rem]">
                    {point.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {point.description}
                  </p>
                </>
              );

              return (
                <StaggerItem key={point.title}>
                  {point.icon === 'certified' ? (
                    <MotionAnchor
                      href={ASE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ASE_ARIA_LABEL}
                      className={`${cardClassName} hover:border-primary-green/40`}
                    >
                      {cardContent}
                    </MotionAnchor>
                  ) : (
                    <article className={cardClassName}>{cardContent}</article>
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>

          <FadeIn className="mt-12 border-t border-[color:var(--line)] pt-10">
            <div className="flex flex-wrap justify-center gap-4">
              <PhoneLink className="btn-green">
                <Phone className="size-5" />
                {body.philosophy.getEstimate}
              </PhoneLink>
              <Link href="/contact" className="btn-blue">
                <FileText className="size-5" />
                {body.philosophy.requestQuote}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Starting prices by service */}
      <section className={`bg-white ${SECTION_PAD}`}>
        <div className="wrap">
          <FadeIn className={SECTION_HEADER}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{body.tiers.eyebrow}</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              {body.tiers.title}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{body.tiers.intro(LABOR_RATE)}</p>
          </FadeIn>

          <FadeIn className="mx-auto mb-10 max-w-5xl rounded-[1.75rem] border border-primary-blue/20 bg-primary-blue/5 px-6 py-5 sm:px-8">
            <div className="flex gap-4">
              <FileText className="mt-0.5 size-5 shrink-0 text-primary-blue" aria-hidden />
              <p className="text-sm leading-relaxed text-ink-muted">
                <span className="font-semibold text-primary-blue">{body.tiers.howTitle}</span>{' '}
                {body.tiers.disclaimer}
              </p>
            </div>
          </FadeIn>

          <div className="mx-auto max-w-5xl space-y-12">
            {body.tiers.categories.map((tier, ti) => (
              <FadeIn key={tier.category} delay={ti * 0.05}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-green">
                  {tier.category}
                </h3>
                <div className={`mt-4 ${PRICING_CARD}`}>
                  {tier.items.map((item, ii) => (
                    <div
                      key={item.service}
                      className={`grid gap-2 px-6 py-5 sm:grid-cols-12 sm:items-center sm:gap-4 ${
                        ii > 0 ? 'border-t border-[color:var(--line)]' : ''
                      } ${ii % 2 === 0 ? 'bg-white' : 'bg-[var(--background)]/60'}`}
                    >
                      <div className="sm:col-span-6">
                        <p className="font-semibold text-foreground">{item.service}</p>
                        <p className="mt-1 text-sm text-ink-muted">{item.note}</p>
                      </div>
                      {'laborEstimate' in item && item.laborEstimate && (
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-green sm:col-span-3 sm:text-right">
                          {item.laborEstimate}
                        </p>
                      )}
                      <p
                        className={`font-display text-3xl tracking-wide text-primary-blue sm:col-span-3 sm:text-right ${
                          !('laborEstimate' in item && item.laborEstimate) ? 'sm:col-span-6' : ''
                        }`}
                      >
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mx-auto mt-10 max-w-5xl rounded-[1.75rem] border border-primary-blue/15 bg-primary-blue/5 px-6 py-5 text-center text-sm leading-relaxed text-ink-muted sm:px-8">
            {body.tiers.footerBefore}{' '}
            <span className="font-semibold text-primary-blue">{body.tiers.footerBold}</span>{' '}
            {body.tiers.footerAfter(LABOR_RATE)}
          </FadeIn>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className={`bg-[var(--background)] ${SECTION_PAD}`}>
        <div className="wrap">
          <FadeIn className={`mx-auto ${SECTION_HEADER} text-center`}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{body.faq.eyebrow}</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
              {body.faq.title}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{body.faq.intro}</p>
          </FadeIn>
          <FadeIn className="mx-auto max-w-3xl">
            <FAQAccordion items={[...body.faq.items]} />
          </FadeIn>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PHOTOS.exteriorBay} alt="RKC Automotive shop exterior in Englewood, Colorado" fill className="object-cover" sizes={HERO_IMAGE_SIZES} />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
          <FadeIn>
            <p className="font-display text-[clamp(3rem,10vw,5.5rem)] leading-none tracking-wide text-primary-green-light">
              {LABOR_RATE}
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-wide text-white sm:text-5xl lg:text-6xl">
              {body.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/75">{body.cta.body(LABOR_RATE)}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
                <Phone className="size-5" />
                {BUSINESS.phone}
              </MotionAnchor>
              <Link href="/contact" className="btn-ghost-light">
                {body.cta.getEstimate}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                {body.cta.contact}
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
