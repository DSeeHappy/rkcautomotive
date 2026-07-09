'use client';

import { Check, PackageCheck, PackageX, ShieldCheck, X } from 'lucide-react';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';
import { SECTION_PAD, SECTION_HEADER } from './warrantyShared';

const COMPARISON_COLUMNS = [
  { name: 'Warranty default', highlight: false, tone: 'red' as const },
  { name: 'Chain shop typical', highlight: false, tone: 'muted' as const },
  { name: 'RKC Automotive', highlight: true, tone: 'green' as const },
] as const;

const COMPARISON_ROWS = [
  {
    key: 'source' as const,
    label: 'Part source',
    warranty: 'LKQ salvage / cheapest reman',
    chain: 'Vendor-list reman only',
    rkc: 'Tier-one reman or OEM when allowed',
  },
  {
    key: 'quality' as const,
    label: 'Quality control',
    warranty: 'Minimal — lowest bidder wins',
    chain: 'Install whatever arrives',
    rkc: 'On-delivery inspection & rejection',
  },
  {
    key: 'docs' as const,
    label: 'Documentation',
    warranty: 'Authorization number only',
    chain: 'Basic invoice',
    rkc: 'Timestamped photos + written rejections',
  },
  {
    key: 'outcome' as const,
    label: 'Your outcome',
    warranty: 'May fail again in 12 months',
    chain: 'Variable — depends on part lot',
    rkc: 'Repair built to last your coverage term',
  },
];

export default function WarrantyPartsBattle() {
  return (
    <section className={`${SECTION_PAD} bg-[var(--background)]`}>
      <div className="wrap">
        <FadeIn className={SECTION_HEADER}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
            Parts quality
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
            LKQ Salvage vs. Quality Remanufactured
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Warranty administrators mandate the cheapest parts available. RKC inspects, rejects, and
            documents every component before it goes on your vehicle.
          </p>
        </FadeIn>

        {/* Rate-style highlight bar */}
        <FadeIn className="mb-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Warranty mandate', value: 'LKQ / salvage', tone: 'red' as const },
              { label: 'Typical chain', value: 'Lowest reman', tone: 'muted' as const },
              { label: 'RKC standard', value: 'Tier-one reman', tone: 'highlight' as const },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl px-6 py-5 text-center ${
                  item.tone === 'highlight'
                    ? 'bg-gradient-to-b from-primary-blue to-primary-blue-dark text-white shadow-[0_20px_60px_-30px_rgba(28,61,145,0.55)] ring-2 ring-primary-green'
                    : item.tone === 'red'
                      ? 'border border-red-500/25 bg-red-500/[0.04]'
                      : 'border border-[color:var(--line)] bg-white'
                }`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-[0.2em] ${
                    item.tone === 'highlight'
                      ? 'text-white/60'
                      : item.tone === 'red'
                        ? 'text-red-600/70'
                        : 'text-ink-muted'
                  }`}
                >
                  {item.label}
                </p>
                <p
                  className={`mt-2 font-display text-3xl tracking-wide sm:text-4xl ${
                    item.tone === 'highlight'
                      ? 'text-primary-green-light'
                      : item.tone === 'red'
                        ? 'text-red-600'
                        : 'text-foreground'
                  }`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Desktop comparison table — Pricing pattern */}
        <FadeIn className="hidden lg:block">
          <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-white shadow-[0_20px_60px_-40px_rgba(12,18,34,0.25)]">
            <table className="w-full text-left">
              <caption className="sr-only">
                Comparison of warranty-mandated parts vs RKC Automotive quality standards
              </caption>
              <thead>
                <tr className="border-b border-[color:var(--line)] bg-[var(--background)]">
                  <th scope="col" className="px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
                    &nbsp;
                  </th>
                  {COMPARISON_COLUMNS.map((col) => (
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
                          Your shop
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, ri) => (
                  <tr
                    key={row.key}
                    className={ri < COMPARISON_ROWS.length - 1 ? 'border-b border-[color:var(--line)]' : ''}
                  >
                    <th scope="row" className="px-8 py-5 text-sm font-bold text-foreground">
                      {row.label}
                    </th>
                    <td className="px-6 py-5 text-sm text-ink-muted">
                      <span className="flex items-start gap-2">
                        <X className="mt-0.5 size-4 shrink-0 text-red-400" aria-hidden />
                        {row.warranty}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-ink-muted">{row.chain}</td>
                    <td className="bg-primary-blue/5 px-6 py-5 text-sm font-semibold text-primary-blue">
                      <span className="flex items-start gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary-green" aria-hidden />
                        {row.rkc}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Mobile cards */}
        <Stagger className="grid gap-6 lg:hidden" stagger={0.1}>
          {COMPARISON_COLUMNS.map((col) => {
            const dataKey = col.highlight ? 'rkc' : col.tone === 'red' ? 'warranty' : 'chain';
            return (
              <StaggerItem key={col.name}>
                <article
                  className={`overflow-hidden rounded-[1.75rem] p-6 ${
                    col.highlight
                      ? 'bg-gradient-to-b from-primary-blue to-primary-blue-dark text-white shadow-[0_30px_80px_-30px_rgba(28,61,145,0.65)] ring-2 ring-primary-green'
                      : 'border border-[color:var(--line)] bg-white'
                  }`}
                >
                  <h3 className="font-display text-3xl tracking-wide">{col.name}</h3>
                  {col.highlight && (
                    <span className="mt-2 inline-block rounded-full bg-primary-green px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                      Your shop
                    </span>
                  )}
                  <dl className="mt-6 space-y-4">
                    {COMPARISON_ROWS.map((row) => (
                      <div key={row.key}>
                        <dt
                          className={`text-xs font-bold uppercase tracking-[0.16em] ${
                            col.highlight ? 'text-white/60' : 'text-ink-muted'
                          }`}
                        >
                          {row.label}
                        </dt>
                        <dd
                          className={`mt-1 flex items-start gap-2 text-sm ${
                            col.highlight ? 'font-semibold text-white' : 'text-foreground'
                          }`}
                        >
                          {col.highlight ? (
                            <Check className="mt-0.5 size-4 shrink-0 text-primary-green-light" aria-hidden />
                          ) : col.tone === 'red' ? (
                            <X className="mt-0.5 size-4 shrink-0 text-red-400" aria-hidden />
                          ) : null}
                          {row[dataKey]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Context cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <div className="h-full overflow-hidden rounded-[1.75rem] border border-red-500/20 bg-white">
              <div className="flex items-center gap-3 border-b border-red-500/15 bg-red-500/[0.06] px-8 py-5">
                <PackageX className="size-6 text-red-500" aria-hidden />
                <h3 className="text-xl font-bold text-foreground">What warranty companies push</h3>
              </div>
              <p className="px-8 py-6 text-base leading-relaxed text-ink-muted">
                LKQ parts sourced from salvage yards cost the warranty company a fraction of a
                remanufactured unit. When LKQ inventory is unavailable, administrators authorize the
                cheapest reman from their vendor list — minimal quality control, short warranties.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full overflow-hidden rounded-[1.75rem] border border-primary-green/25 bg-white">
              <div className="flex items-center gap-3 border-b border-primary-green/20 bg-primary-green/[0.06] px-8 py-5">
                <ShieldCheck className="size-6 text-primary-green" aria-hidden />
                <h3 className="text-xl font-bold text-foreground">How RKC fights for better parts</h3>
              </div>
              <div className="space-y-4 px-8 py-6">
                <p className="text-base leading-relaxed text-ink-muted">
                  Every provider-supplied part is inspected on delivery. Parts that fail inspection are
                  photographed, rejected in writing, and returned — adjusters cannot override without
                  escalating to a supervisor.
                </p>
                <div className="flex items-start gap-3 rounded-2xl border border-primary-green/20 bg-primary-green/[0.05] p-5">
                  <PackageCheck className="mt-0.5 size-5 shrink-0 text-primary-green" aria-hidden />
                  <p className="text-sm leading-relaxed text-foreground">
                    When your contract allows remanufactured components, we specify tier-one
                    remanufacturers with ISO-certified processes.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
