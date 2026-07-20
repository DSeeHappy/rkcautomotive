'use client';

import { Check, Minus, PackageCheck, PackageX, ShieldCheck, X } from 'lucide-react';
import FadeIn from '@/app/components/ui/FadeIn';
import { useLanguage } from '@/lib/language';
import { warrantyCopy } from '@/lib/i18n/warrantyCopy';
import { SECTION_PAD, SECTION_HEADER } from './warrantyShared';

type TierTone = 'red' | 'muted' | 'highlight';
type RowDataKey = 'warranty' | 'chain' | 'rkc';

function tierIcon(highlight: boolean, tone: TierTone) {
  if (highlight) return Check;
  if (tone === 'red') return X;
  return Minus;
}

function tierIconClass(highlight: boolean, tone: TierTone, onHighlight = false) {
  if (highlight) return onHighlight ? 'text-primary-green-light' : 'text-primary-green';
  if (tone === 'red') return 'text-red-400';
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
  yourShop,
}: {
  tier: {
    label: string;
    value: string;
    highlight: boolean;
    tone: TierTone;
  };
  variant: 'pill' | 'card' | 'table';
  yourShop: string;
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
            {yourShop}
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
          {yourShop}
        </span>
      )}
    </>
  );
}

export default function WarrantyPartsBattle() {
  const { lang } = useLanguage();
  const copy = warrantyCopy(lang).partsBattle;

  const tiers = [
    { ...copy.tiers[0], id: 'warranty', dataKey: 'warranty' as const satisfies RowDataKey, highlight: false, tone: 'red' as const satisfies TierTone },
    { ...copy.tiers[1], id: 'chain', dataKey: 'chain' as const satisfies RowDataKey, highlight: false, tone: 'muted' as const satisfies TierTone },
    { ...copy.tiers[2], id: 'rkc', dataKey: 'rkc' as const satisfies RowDataKey, highlight: true, tone: 'highlight' as const satisfies TierTone },
  ];

  return (
    <section lang={lang} className={`${SECTION_PAD} bg-[var(--background)]`}>
      <div className="wrap">
        <FadeIn className={SECTION_HEADER}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{copy.eyebrow}</p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">{copy.title}</h2>
          <p className="mt-4 text-lg text-ink-muted">{copy.intro}</p>
        </FadeIn>

        <FadeIn className="hidden lg:block">
          <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-white shadow-[0_20px_60px_-40px_rgba(12,18,34,0.25)]">
            <table className="w-full text-left">
              <caption className="sr-only">{copy.tableCaption}</caption>
              <thead>
                <tr className="border-b border-[color:var(--line)] bg-[var(--background)]">
                  <th scope="col" className="px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">
                    &nbsp;
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.id}
                      scope="col"
                      className={`px-6 py-5 text-sm font-bold uppercase tracking-[0.12em] ${
                        tier.highlight ? 'bg-primary-blue text-white' : 'text-foreground'
                      }`}
                    >
                      <TierHeader tier={tier} variant="table" yourShop={copy.yourShop} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.rows.map((row, ri) => (
                  <tr
                    key={row.label}
                    className={ri < copy.rows.length - 1 ? 'border-b border-[color:var(--line)]' : ''}
                  >
                    <th scope="row" className="px-8 py-5 text-sm font-bold text-foreground">
                      {row.label}
                    </th>
                    {tiers.map((tier) => {
                      const RowIcon = tierIcon(tier.highlight, tier.tone);
                      return (
                        <td
                          key={`${tier.id}-${row.label}`}
                          className={`px-6 py-5 text-sm ${
                            tier.highlight
                              ? 'bg-primary-blue/5 font-semibold text-primary-blue'
                              : 'text-ink-muted'
                          }`}
                        >
                          <span className="flex items-start gap-2">
                            <RowIcon
                              className={`mt-0.5 size-4 shrink-0 ${tierIconClass(tier.highlight, tier.tone, tier.highlight)}`}
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

        <FadeIn className="lg:hidden">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
            {tiers.map((tier) => {
              const RowIcon = tierIcon(tier.highlight, tier.tone);
              return (
                <div key={tier.id} className="flex min-w-0 flex-col gap-3">
                  <div
                    className={`rounded-2xl px-4 py-4 text-center sm:px-5 sm:py-5 ${tierPillClass(tier.tone)}`}
                  >
                    <TierHeader tier={tier} variant="pill" yourShop={copy.yourShop} />
                    {tier.highlight && (
                      <span className="mt-2 inline-block rounded-full bg-primary-green px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                        {copy.yourShop}
                      </span>
                    )}
                  </div>
                  <article
                    id={`parts-tier-${tier.id}`}
                    className={`flex flex-1 flex-col overflow-hidden rounded-[1.75rem] p-5 sm:p-6 ${
                      tier.highlight
                        ? 'bg-gradient-to-b from-primary-blue to-primary-blue-dark text-white shadow-[0_30px_80px_-30px_rgba(28,61,145,0.65)] ring-2 ring-primary-green'
                        : 'border border-[color:var(--line)] bg-white'
                    }`}
                  >
                    <dl className="space-y-4">
                      {copy.rows.map((row) => (
                        <div key={row.label}>
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
                              className={`mt-0.5 size-4 shrink-0 ${tierIconClass(tier.highlight, tier.tone, tier.highlight)}`}
                              aria-hidden
                            />
                            <span className="min-w-0 flex-1 leading-relaxed">{row[tier.dataKey]}</span>
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <p
                      className={`mt-6 border-t pt-4 text-sm leading-relaxed ${
                        tier.highlight
                          ? 'border-white/15 text-white/80'
                          : 'border-[color:var(--line)] text-ink-muted'
                      }`}
                    >
                      {tier.summary}
                    </p>
                  </article>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <div className="h-full overflow-hidden rounded-[1.75rem] border border-red-500/20 bg-white">
              <div className="flex items-center gap-3 border-b border-red-500/15 bg-red-500/[0.06] px-8 py-5">
                <PackageX className="size-6 text-red-500" aria-hidden />
                <h3 className="text-xl font-bold text-foreground">{copy.warrantyPushTitle}</h3>
              </div>
              <p className="px-8 py-6 text-base leading-relaxed text-ink-muted">{copy.warrantyPushBody}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full overflow-hidden rounded-[1.75rem] border border-primary-green/25 bg-white">
              <div className="flex items-center gap-3 border-b border-primary-green/20 bg-primary-green/[0.06] px-8 py-5">
                <ShieldCheck className="size-6 text-primary-green" aria-hidden />
                <h3 className="text-xl font-bold text-foreground">{copy.rkcFightTitle}</h3>
              </div>
              <div className="space-y-4 px-8 py-6">
                <p className="text-base leading-relaxed text-ink-muted">{copy.rkcFightBody}</p>
                <div className="flex items-start gap-3 rounded-2xl border border-primary-green/20 bg-primary-green/[0.05] p-5">
                  <PackageCheck className="mt-0.5 size-5 shrink-0 text-primary-green" aria-hidden />
                  <p className="text-sm leading-relaxed text-foreground">{copy.rkcFightCallout}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
