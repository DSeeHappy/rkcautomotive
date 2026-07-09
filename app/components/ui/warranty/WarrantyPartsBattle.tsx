'use client';

import { PackageCheck, PackageX, ShieldCheck } from 'lucide-react';
import FadeIn from '@/app/components/ui/FadeIn';

const SECTION_PAD = 'py-24 sm:py-28';

export default function WarrantyPartsBattle() {
  return (
    <section className={`${SECTION_PAD} bg-white`}>
      <div className="wrap">
        <FadeIn className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
            Parts quality
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
            The Battle for Quality Parts: LKQ vs. Remanufactured
          </h2>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <div className="h-full rounded-3xl border border-[color:var(--line)] bg-[var(--background)] p-8">
              <div className="flex items-center gap-3">
                <PackageX className="size-6 text-red-500" aria-hidden />
                <h3 className="text-xl font-bold text-foreground">What Warranty Companies Push</h3>
              </div>
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                Most extended warranty administrators mandate LKQ — Like Kind and Quality — parts
                sourced from salvage yards and recycling operations. An LKQ transmission from a
                high-mileage donor vehicle costs the warranty company a fraction of a remanufactured
                unit. The savings go straight to their bottom line.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                When LKQ inventory is unavailable, administrators authorize the cheapest remanufactured
                option from their approved vendor list — components with minimal quality control,
                short warranties, and no guarantee of matching your vehicle&apos;s specifications.
                You get a part that may fail again in 12 months while your service contract clock keeps
                running.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="h-full rounded-3xl border border-primary-green/20 bg-primary-green/5 p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-primary-green" aria-hidden />
                <h3 className="text-xl font-bold text-foreground">How RKC Fights for Better Parts</h3>
              </div>
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                Every provider-supplied part is inspected on delivery at our Englewood shop. We check
                casting numbers, mating surface condition, internal tolerances where visible, and
                packaging integrity. Parts that fail inspection are photographed, rejected in writing,
                and returned — forcing the adjuster to authorize a remanufactured or OEM-grade
                replacement.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                When your contract language allows remanufactured components, we specify tier-one
                remanufacturers with ISO-certified processes — not the lowest bidder on the
                administrator&apos;s vendor list. Your repair should last the life of your remaining
                coverage, not just long enough to close the claim file.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary-green/20 bg-white p-5">
                <PackageCheck className="mt-0.5 size-5 shrink-0 text-primary-green" aria-hidden />
                <p className="text-sm leading-relaxed text-foreground">
                  We document every rejected part with timestamped photos and written rejection
                  notices. Adjusters cannot override our quality standards without escalating to a
                  supervisor — and supervisors approve better parts when the evidence shows the
                  original authorization was substandard.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
