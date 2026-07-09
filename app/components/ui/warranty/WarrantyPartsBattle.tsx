'use client';

import { useCallback, useRef } from 'react';
import { Check, Minus, PackageCheck, PackageX, ShieldCheck, X } from 'lucide-react';
import FadeIn from '@/app/components/ui/FadeIn';
import { SECTION_PAD, SECTION_HEADER } from './warrantyShared';

type TierTone = 'red' | 'muted' | 'highlight';
type RowDataKey = 'warranty' | 'chain' | 'rkc';

const COMPARISON_TIERS = [
  {
    id: 'warranty',
    label: 'Warranty mandate',
    value: 'LKQ / salvage',
    dataKey: 'warranty' as const satisfies RowDataKey,
    highlight: false,
    tone: 'red' as const satisfies TierTone,
    summary:
      'Administrators mandate salvage or the cheapest reman on their vendor list — minimal oversight before install.',
  },
  {
    id: 'chain',
    label: 'Typical chain',
    value: 'Lowest reman',
    dataKey: 'chain' as const satisfies RowDataKey,
    highlight: false,
    tone: 'muted' as const satisfies TierTone,
    summary:
      'National chains source from the same low-cost reman vendors — whatever lot arrives gets installed, no rejection process.',
  },
  {
    id: 'rkc',
    label: 'RKC standard',
    value: 'Tier-one reman',
    dataKey: 'rkc' as const satisfies RowDataKey,
    highlight: true,
    tone: 'highlight' as const satisfies TierTone,
    summary:
      'We specify tier-one remanufacturers with ISO-certified processes and reject substandard lots before they touch your vehicle.',
  },
] as const;

const COMPARISON_ROWS = [
  {
    key: 'source' as const,
    label: 'Part source',
    warranty: 'LKQ salvage / cheapest reman',
    chain: 'Vendor-list reman only — lowest approved option',
    rkc: 'Tier-one reman or OEM when allowed',
  },
  {
    key: 'quality' as const,
    label: 'Quality control',
    warranty: 'Minimal — lowest bidder wins',
    chain: 'Install whatever arrives — no on-delivery inspection',
    rkc: 'On-delivery inspection & rejection',
  },
  {
    key: 'docs' as const,
    label: 'Documentation',
    warranty: 'Authorization number only',
    chain: 'Basic invoice — no lot photos or rejection records',
    rkc: 'Timestamped photos + written rejections',
  },
  {
    key: 'outcome' as const,
    label: 'Your outcome',
    warranty: 'May fail again in 12 months',
    chain: 'Variable — depends on part lot and vendor batch',
    rkc: 'Repair built to last your coverage term',
  },
];

function tierIcon(tier: (typeof COMPARISON_TIERS)[number]) {
  if (tier.highlight) return Check;
  if (tier.tone === 'red') return X;
  return Minus;
}

function tierIconClass(tier: (typeof COMPARISON_TIERS)[number], onHighlight = false) {
  if (tier.highlight) return onHighlight ? 'text-primary-green-light' : 'text-primary-green';
  if (tier.tone === 'red') return 'text-red-400';
  return 'text-amber-500';
}

function tierPillClass(tone: TierTone) {
  if (tone === 'highlight') {
    return 'bg-gradient-to-b from-primary-blue to-primary-blue-dark text-white shadow-[0_20px_60px_-30px_rgba(28,61,145,0.55)] ring-2 ring-primary-green';
  }
  if (tone === 'red') return 'border border-red-500/25 bg-red-500/[0.04]';
  return 'border border-[color:var(--line)] bg-white';
}

function TierHeader({
  tier,
  variant,
}: {
  tier: (typeof COMPARISON_TIERS)[number];
  variant: 'pill' | 'card' | 'table';
}) {
  const labelClass =
    variant === 'table'
      ? tier.highlight
        ? 'text-white/70'
        : 'text-ink-muted'
      : tier.highlight
        ? 'text-white/60'
        : tier.tone === 'red'
          ? 'text-red-600/70'
          : 'text-ink-muted';

  const valueClass =
    variant === 'table'
      ? tier.highlight
        ? 'text-white'
        : 'text-foreground'
      : tier.highlight
        ? 'text-primary-green-light'
        : tier.tone === 'red'
          ? 'text-red-600'
          : 'text-foreground';

  if (variant === 'table') {
    return (
      <>
        <span className="block">{tier.label}</span>
        <span
          className={`mt-1 block text-[10px] font-semibold normal-case tracking-normal ${
            tier.highlight ? 'text-primary-green-light' : 'text-ink-muted'
          }`}
        >
          {tier.value}
        </span>
        {tier.highlight && (
          <span className="mt-1 block text-[10px] font-semibold normal-case tracking-normal text-primary-green-light">
            Your shop
          </span>
        )}
      </>
    );
  }

  const valueSize =
    variant === 'pill' ? 'mt-2 font-display text-3xl tracking-wide sm:text-4xl' : 'mt-2 font-display text-3xl tracking-wide';

  return (
    <>
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${labelClass}`}>{tier.label}</p>
      <p className={`${valueSize} ${valueClass}`}>{tier.value}</p>
      {variant === 'card' && tier.highlight && (
        <span className="mt-2 inline-block rounded-full bg-primary-green px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
          Your shop
        </span>
      )}
    </>
  );
}

export default function WarrantyPartsBattle() {
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToTier = useCallback((tierId: string) => {
    const card = cardRefs.current[tierId];
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    card.focus({ preventScroll: true });
  }, []);

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

        {/* Tier highlight bar — tappable on mobile to jump to matching card */}
        <FadeIn className="mb-10">
          <div className="grid gap-4 sm:grid-cols-3">
            {COMPARISON_TIERS.map((tier) => {
              const inner = (
                <>
                  <TierHeader tier={tier} variant="pill" />
                </>
              );

              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => scrollToTier(tier.id)}
                  className={`rounded-2xl px-6 py-5 text-center transition-transform active:scale-[0.98] lg:pointer-events-none lg:cursor-default ${tierPillClass(tier.tone)}`}
                  aria-label={`Jump to ${tier.label}: ${tier.value}`}
                >
                  {inner}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Desktop comparison table */}
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
                  {COMPARISON_TIERS.map((tier) => (
                    <th
                      key={tier.id}
                      scope="col"
                      className={`px-6 py-5 text-sm font-bold uppercase tracking-[0.12em] ${
                        tier.highlight ? 'bg-primary-blue text-white' : 'text-foreground'
                      }`}
                    >
                      <TierHeader tier={tier} variant="table" />
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
                    {COMPARISON_TIERS.map((tier) => {
                      const RowIcon = tierIcon(tier);
                      return (
                        <td
                          key={`${tier.id}-${row.key}`}
                          className={`px-6 py-5 text-sm ${
                            tier.highlight
                              ? 'bg-primary-blue/5 font-semibold text-primary-blue'
                              : 'text-ink-muted'
                          }`}
                        >
                          <span className="flex items-start gap-2">
                            <RowIcon
                              className={`mt-0.5 size-4 shrink-0 ${tierIconClass(tier, tier.highlight)}`}
                              aria-hidden
                            />
                            <span className="min-w-0 flex-1">{row[tier.dataKey]}</span>
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Mobile cards — labels mirror highlight pills; text wrapped to avoid flex clipping */}
        <div className="grid gap-6 lg:hidden">
          {COMPARISON_TIERS.map((tier) => {
            const RowIcon = tierIcon(tier);
            return (
              <article
                key={tier.id}
                id={`parts-tier-${tier.id}`}
                ref={(node) => {
                  cardRefs.current[tier.id] = node;
                }}
                tabIndex={-1}
                className={`overflow-hidden rounded-[1.75rem] p-6 outline-none focus-visible:ring-2 focus-visible:ring-primary-green ${
                  tier.highlight
                    ? 'bg-gradient-to-b from-primary-blue to-primary-blue-dark text-white shadow-[0_30px_80px_-30px_rgba(28,61,145,0.65)] ring-2 ring-primary-green'
                    : 'border border-[color:var(--line)] bg-white'
                }`}
              >
                <TierHeader tier={tier} variant="card" />
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    tier.highlight ? 'text-white/80' : 'text-ink-muted'
                  }`}
                >
                  {tier.summary}
                </p>
                <dl className="mt-6 space-y-4">
                  {COMPARISON_ROWS.map((row) => (
                    <div key={row.key}>
                      <dt
                        className={`text-xs font-bold uppercase tracking-[0.16em] ${
                          tier.highlight ? 'text-white/60' : 'text-ink-muted'
                        }`}
                      >
                        {row.label}
                      </dt>
                      <dd
                        className={`mt-1 flex items-start gap-2 text-sm ${
                          tier.highlight ? 'font-semibold text-white' : 'text-foreground'
                        }`}
                      >
                        <RowIcon
                          className={`mt-0.5 size-4 shrink-0 ${tierIconClass(tier, tier.highlight)}`}
                          aria-hidden
                        />
                        <span className="min-w-0 flex-1 leading-relaxed">{row[tier.dataKey]}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            );
          })}
        </div>

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
