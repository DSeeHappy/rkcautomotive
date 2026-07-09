'use client';

import { AlertTriangle, Camera, FileWarning, Info } from 'lucide-react';
import FadeIn from '@/app/components/ui/FadeIn';

const SECTION_PAD = 'py-24 sm:py-28';

export default function WarrantyTeardownWarning() {
  return (
    <section className={`${SECTION_PAD} bg-[#0c1222]`}>
      <div className="wrap">
        <FadeIn>
          <div className="overflow-hidden rounded-[1.75rem] border border-amber-500/40 border-l-[6px] border-l-amber-500 bg-[#141c2e] shadow-[0_0_80px_-24px_rgba(245,158,11,0.35)]">
            <div className="border-b border-amber-500/25 bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent px-6 py-5 sm:px-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-amber-500/20 ring-1 ring-amber-400/30">
                  <AlertTriangle className="size-6 text-amber-400" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-300">
                    Critical warning
                  </p>
                  <p className="text-lg font-bold text-white sm:text-xl">
                    The Teardown Authorization Trap
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 px-6 py-10 sm:px-10">
              <div>
                <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl lg:text-[2.75rem]">
                  Your Engine Won&apos;t Run — But the Warranty Won&apos;t Pay to Find Out Why
                </h2>
                <p className="mt-5 max-w-4xl text-base leading-relaxed text-white/80 sm:text-lg">
                  When your engine or transmission fails catastrophically, the warranty company will not
                  authorize internal inspection until you sign a teardown authorization — committing you
                  to pay for disassembly labor if the adjuster denies the claim.
                </p>
              </div>

              {/* What you need to know callout */}
              <div className="rounded-2xl border border-amber-400/25 bg-amber-500/[0.08] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <Info className="mt-0.5 size-6 shrink-0 text-amber-300" aria-hidden />
                  <div>
                    <h3 className="text-lg font-bold text-amber-100">What you need to know</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                      If the internal failure is covered, the warranty reimburses teardown labor along with
                      the repair. If the adjuster finds sludge from missed oil changes, a pre-existing
                      crack, or an excluded component that caused the failure, you absorb the teardown
                      cost — often <span className="font-bold text-amber-200">$800 to $2,500</span> before
                      a single covered part is replaced.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-red-500/35 bg-red-500/[0.07] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-red-500/15">
                      <FileWarning className="size-5 text-red-400" aria-hidden />
                    </span>
                    <h3 className="text-lg font-bold text-red-200">When you pay</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                    Excluded failures, neglect, pre-existing conditions, or consequential damage from
                    an uncovered component. The adjuster issues a denial letter and you owe teardown
                    labor plus any parts already ordered.
                  </p>
                </div>
                <div className="rounded-2xl border border-primary-green/35 bg-primary-green/[0.07] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary-green/15">
                      <Camera className="size-5 text-primary-green-light" aria-hidden />
                    </span>
                    <h3 className="text-lg font-bold text-primary-green-light">How RKC protects you</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                    Full-bay photography documents every fastener removed and every finding before and
                    after teardown. We present evidence to the adjuster before you commit — so you know
                    the realistic coverage outlook before signing authorization paperwork.
                  </p>
                </div>
              </div>

              <p className="max-w-4xl border-t border-white/10 pt-8 text-base leading-relaxed text-white/65">
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
