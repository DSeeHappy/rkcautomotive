'use client';

import { PackageCheck, PackageX, ShieldCheck, X } from 'lucide-react';
import FadeIn from '@/app/components/ui/FadeIn';

const SECTION_PAD = 'py-24 sm:py-28';

const COMPARISON_ROWS = [
  { label: 'Part source', warranty: 'LKQ salvage / cheapest reman', rkc: 'Tier-one reman or OEM when allowed' },
  { label: 'Quality control', warranty: 'Minimal — lowest bidder wins', rkc: 'On-delivery inspection & rejection' },
  { label: 'Documentation', warranty: 'Authorization number only', rkc: 'Timestamped photos + written rejections' },
  { label: 'Your outcome', warranty: 'May fail again in 12 months', rkc: 'Repair built to last your coverage term' },
] as const;

export default function WarrantyPartsBattle() {
  return (
    <section className={`${SECTION_PAD} bg-[var(--background)]`}>
      <div className="wrap">
        <FadeIn className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
            Parts quality
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
            The Battle for Quality Parts: LKQ vs. Remanufactured
          </h2>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <div className="h-full overflow-hidden rounded-[1.75rem] border border-red-500/20 bg-white shadow-[0_20px_60px_-40px_rgba(12,18,34,0.18)]">
              <div className="flex items-center gap-3 border-b border-red-500/15 bg-red-500/[0.06] px-8 py-5">
                <PackageX className="size-6 text-red-500" aria-hidden />
                <h3 className="text-xl font-bold text-foreground">What warranty companies push</h3>
              </div>
              <div className="space-y-5 px-8 py-7">
                <p className="text-base leading-relaxed text-ink-muted">
                  Most extended warranty administrators mandate LKQ — Like Kind and Quality — parts
                  sourced from salvage yards and recycling operations. An LKQ transmission from a
                  high-mileage donor vehicle costs the warranty company a fraction of a remanufactured
                  unit.
                </p>
                <p className="text-base leading-relaxed text-ink-muted">
                  When LKQ inventory is unavailable, administrators authorize the cheapest remanufactured
                  option from their approved vendor list — components with minimal quality control,
                  short warranties, and no guarantee of matching your vehicle&apos;s specifications.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-full overflow-hidden rounded-[1.75rem] border border-primary-green/25 bg-white shadow-[0_20px_60px_-40px_rgba(12,18,34,0.18)]">
              <div className="flex items-center gap-3 border-b border-primary-green/20 bg-primary-green/[0.06] px-8 py-5">
                <ShieldCheck className="size-6 text-primary-green" aria-hidden />
                <h3 className="text-xl font-bold text-foreground">How RKC fights for better parts</h3>
              </div>
              <div className="space-y-5 px-8 py-7">
                <p className="text-base leading-relaxed text-ink-muted">
                  Every provider-supplied part is inspected on delivery at our Englewood shop. We check
                  casting numbers, mating surface condition, internal tolerances where visible, and
                  packaging integrity. Parts that fail inspection are photographed, rejected in writing,
                  and returned.
                </p>
                <p className="text-base leading-relaxed text-ink-muted">
                  When your contract language allows remanufactured components, we specify tier-one
                  remanufacturers with ISO-certified processes — not the lowest bidder on the
                  administrator&apos;s vendor list.
                </p>
                <div className="flex items-start gap-3 rounded-2xl border border-primary-green/20 bg-primary-green/[0.05] p-5">
                  <PackageCheck className="mt-0.5 size-5 shrink-0 text-primary-green" aria-hidden />
                  <p className="text-sm leading-relaxed text-foreground">
                    We document every rejected part with timestamped photos and written rejection
                    notices. Adjusters cannot override our quality standards without escalating to a
                    supervisor.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Comparison table */}
        <FadeIn delay={0.15} className="mt-10 overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-white shadow-[0_20px_60px_-40px_rgba(12,18,34,0.15)]">
          <div className="grid grid-cols-3 border-b border-[color:var(--line)] bg-[var(--background)] text-xs font-bold uppercase tracking-[0.16em] sm:text-sm">
            <div className="px-4 py-4 text-ink-muted sm:px-6">Factor</div>
            <div className="border-l border-[color:var(--line)] px-4 py-4 text-red-600 sm:px-6">Warranty default</div>
            <div className="border-l border-[color:var(--line)] px-4 py-4 text-primary-green sm:px-6">RKC policy</div>
          </div>
          {COMPARISON_ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 ${i < COMPARISON_ROWS.length - 1 ? 'border-b border-[color:var(--line)]' : ''}`}
            >
              <div className="px-4 py-4 text-sm font-semibold text-foreground sm:px-6 sm:text-base">{row.label}</div>
              <div className="flex items-start gap-2 border-l border-[color:var(--line)] px-4 py-4 sm:px-6">
                <X className="mt-0.5 size-4 shrink-0 text-red-400" aria-hidden />
                <span className="text-sm text-ink-muted sm:text-base">{row.warranty}</span>
              </div>
              <div className="flex items-start gap-2 border-l border-[color:var(--line)] bg-primary-green/[0.03] px-4 py-4 sm:px-6">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary-green" aria-hidden />
                <span className="text-sm text-foreground sm:text-base">{row.rkc}</span>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
