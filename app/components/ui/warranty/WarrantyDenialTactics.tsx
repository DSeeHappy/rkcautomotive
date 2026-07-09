'use client';

import { Ban, Droplets, Link2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';

const SECTION_PAD = 'py-24 sm:py-28';

const DENIAL_TACTICS: {
  icon: LucideIcon;
  tactic: string;
  adjusterClaim: string;
  rkcResponse: string;
}[] = [
  {
    icon: Ban,
    tactic: 'Pre-Existing Condition',
    adjusterClaim:
      'Adjusters argue the failed component showed wear before your policy took effect — especially on high-mileage vehicles. They cite inspection photos, prior repair orders, or vague language in your contract about "gradual deterioration."',
    rkcResponse:
      'RKC pulls OBD-II freeze-frame data captured at the moment of failure. Freeze frames timestamp exactly when a sensor reading went out of range — proving the component operated within spec until a sudden, catastrophic event. Combined with prior scan history when available, this evidence directly contradicts gradual-wear denial arguments.',
  },
  {
    icon: Droplets,
    tactic: 'Lack of Maintenance',
    adjusterClaim:
      'Sludge in the valve cover, dark oil on the dipstick, or missing dealer stamps in your service booklet become grounds for total claim denial. Powertrain administrators use maintenance exclusions more aggressively than any other contract clause.',
    rkcResponse:
      'We distinguish between cosmetic sludge and mechanical neglect. Oil analysis, bearing inspection photos, and metallurgical evidence of sudden failure — spun bearings, fractured timing chains, cracked pistons — prove the component failed catastrophically rather than from incremental neglect. When maintenance records exist, we cross-reference intervals against manufacturer specifications.',
  },
  {
    icon: Link2,
    tactic: 'Consequential Damage Loophole',
    adjusterClaim:
      'Your covered water pump failed and destroyed the timing belt, tensioner, and cylinder head — but the adjuster approves only the water pump. They classify everything else as "consequential damage" from an excluded wear item, leaving you with thousands in uncovered repairs.',
    rkcResponse:
      'RKC documents the complete sequence of failure before disassembly. We photograph coolant intrusion paths, timing marks, and secondary damage in a single chronological evidence package. When a covered component failure directly causes downstream damage, we cite the contract language requiring administrators to cover consequential repairs — and escalate to supervisor review when front-line adjusters apply the loophole incorrectly.',
  },
];

export default function WarrantyDenialTactics() {
  return (
    <section className={`${SECTION_PAD} border-t border-[color:var(--line)] bg-[var(--background)]`}>
      <div className="wrap">
        <FadeIn className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
            Fighting back
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
            Denial Tactics &amp; RKC Counter-Measures
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Extended warranty companies deny roughly 30–40% of initial claims. The denials follow
            predictable patterns — and each one has a technical counter when your shop knows how to
            document evidence properly.
          </p>
        </FadeIn>

        <Stagger className="grid gap-8 lg:grid-cols-3" stagger={0.08} delay={0.05}>
          {DENIAL_TACTICS.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.tactic}>
                <article
                  className={`h-full overflow-hidden rounded-3xl border border-[color:var(--line)] ${
                    index % 2 === 0 ? 'bg-white' : 'bg-white'
                  }`}
                >
                  <div className="border-b border-[color:var(--line)] bg-primary-blue/5 px-8 py-6">
                    <div className="flex items-center gap-4">
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                          Tactic {index + 1}
                        </p>
                        <h3 className="text-xl font-bold text-primary-blue">{item.tactic}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5 px-8 py-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                        What adjusters claim
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.adjusterClaim}</p>
                    </div>
                    <div className="rounded-2xl bg-primary-green/5 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-green">
                        RKC counter-measure
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">{item.rkcResponse}</p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
