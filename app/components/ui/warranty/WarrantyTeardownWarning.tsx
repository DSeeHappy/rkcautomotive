'use client';

import { AlertTriangle, Camera, FileWarning } from 'lucide-react';
import FadeIn from '@/app/components/ui/FadeIn';

const SECTION_PAD = 'py-24 sm:py-28';

export default function WarrantyTeardownWarning() {
  return (
    <section className={`${SECTION_PAD} bg-[#0c1222]`}>
      <div className="wrap">
        <FadeIn>
          <div className="overflow-hidden rounded-[1.75rem] border-2 border-amber-500/60 bg-[#141c2e] shadow-[0_0_60px_-20px_rgba(245,158,11,0.25)]">
            <div className="border-b border-amber-500/30 bg-amber-500/10 px-6 py-4 sm:px-10">
              <div className="flex items-center gap-3">
                <AlertTriangle className="size-6 shrink-0 text-amber-400" aria-hidden />
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
                  Critical: The Teardown Authorization Trap
                </p>
              </div>
            </div>

            <div className="space-y-6 px-6 py-10 sm:px-10">
              <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl">
                Your Engine Won&apos;t Run — But the Warranty Won&apos;t Pay to Find Out Why
              </h2>

              <p className="max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg">
                This is the single most expensive surprise in extended warranty repair. When your
                engine or transmission fails catastrophically — seized, no compression, metal in
                the oil pan — the warranty company will not authorize internal inspection until you,
                the vehicle owner, sign a teardown authorization. That authorization commits you to
                pay for disassembly labor if the adjuster ultimately denies the claim.
              </p>

              <p className="max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg">
                If the internal failure is covered under your contract, the warranty reimburses
                teardown labor along with the repair. If the adjuster finds sludge from missed oil
                changes, a pre-existing crack, or an excluded component that caused the failure, you
                absorb the teardown cost — often $800 to $2,500 before a single covered part is
                replaced.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6">
                  <div className="flex items-center gap-3">
                    <FileWarning className="size-5 text-red-400" aria-hidden />
                    <h3 className="font-bold text-red-200">When You Pay</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Excluded failures, neglect, pre-existing conditions, or consequential damage from
                    an uncovered component. The adjuster issues a denial letter and you owe teardown
                    labor plus any parts already ordered.
                  </p>
                </div>
                <div className="rounded-2xl border border-primary-green/30 bg-primary-green/5 p-6">
                  <div className="flex items-center gap-3">
                    <Camera className="size-5 text-primary-green-light" aria-hidden />
                    <h3 className="font-bold text-primary-green-light">How RKC Protects You</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Full-bay photography documents every fastener removed, every component inspected,
                    and every finding before and after teardown. We present this evidence to the
                    adjuster before you commit — so you know the realistic coverage outlook before
                    signing authorization paperwork.
                  </p>
                </div>
              </div>

              <p className="max-w-4xl text-base leading-relaxed text-white/70">
                Never authorize a teardown at a shop that cannot show you documented failure evidence
                first. RKC runs preliminary diagnostics — compression tests, oil analysis, borescope
                inspection — to build the strongest possible case before you assume financial risk.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
