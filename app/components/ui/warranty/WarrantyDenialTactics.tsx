'use client';

import { Ban, Droplets, Link2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';
import { SECTION_PAD, SECTION_HEADER } from './warrantyShared';

const DENIAL_TACTICS: {
  icon: LucideIcon;
  tactic: string;
  adjusterClaim: string;
  rkcResponse: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  featured?: boolean;
}[] = [
  {
    icon: Ban,
    tactic: 'Pre-Existing Condition',
    adjusterClaim:
      'Adjusters argue the failed component showed wear before your policy took effect — especially on high-mileage vehicles. They cite inspection photos, prior repair orders, or vague language in your contract about "gradual deterioration."',
    rkcResponse:
      'RKC pulls OBD-II freeze-frame data captured at the moment of failure. Freeze frames timestamp exactly when a sensor reading went out of range — proving the component operated within spec until a sudden, catastrophic event. Combined with prior scan history when available, this evidence directly contradicts gradual-wear denial arguments.',
    accent: 'text-red-400',
    accentBg: 'bg-red-500/10',
    accentBorder: 'border-red-500/25',
    featured: true,
  },
  {
    icon: Droplets,
    tactic: 'Lack of Maintenance',
    adjusterClaim:
      'Sludge in the valve cover, dark oil on the dipstick, or missing dealer stamps become grounds for total claim denial. Powertrain administrators use maintenance exclusions more aggressively than any other contract clause.',
    rkcResponse:
      'We distinguish cosmetic sludge from mechanical neglect. Oil analysis, bearing inspection photos, and metallurgical evidence of sudden failure prove catastrophic failure rather than incremental neglect.',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/25',
  },
  {
    icon: Link2,
    tactic: 'Consequential Damage Loophole',
    adjusterClaim:
      'Your covered water pump failed and destroyed the timing belt and cylinder head — but the adjuster approves only the water pump. They classify everything else as "consequential damage" from an excluded wear item.',
    rkcResponse:
      'RKC documents the complete sequence of failure before disassembly. When a covered component failure directly causes downstream damage, we cite contract language requiring administrators to cover consequential repairs.',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/25',
  },
];

function TacticCard({ item, index }: { item: (typeof DENIAL_TACTICS)[number]; index: number }) {
  const Icon = item.icon;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border ${item.accentBorder} bg-[var(--background)] shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-36px_rgba(28,61,145,0.28)]`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent ${item.accent}`}
      />
      <div className={`border-b ${item.accentBorder} ${item.accentBg} px-8 py-7`}>
        <div className="flex items-center gap-4">
          <span
            className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${item.accentBg} ring-1 ${item.accentBorder}`}
          >
            <Icon className={`size-6 ${item.accent}`} aria-hidden />
          </span>
          <div>
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${item.accent}`}>
              Tactic {index + 1}
            </p>
            <h3 className="font-display text-2xl tracking-wide text-primary-blue sm:text-[1.65rem]">
              {item.tactic}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5 px-8 py-7">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">What adjusters claim</p>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-muted sm:text-base">{item.adjusterClaim}</p>
        </div>
        <div className="mt-auto rounded-2xl border border-primary-green/20 bg-primary-green/[0.06] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-green">Our fight</p>
          <p className="mt-2.5 text-sm leading-relaxed text-foreground sm:text-base">{item.rkcResponse}</p>
        </div>
      </div>
    </article>
  );
}

export default function WarrantyDenialTactics() {
  const [featured, ...rest] = DENIAL_TACTICS;

  return (
    <section className={`${SECTION_PAD} bg-white`}>
      <div className="wrap">
        <FadeIn className={SECTION_HEADER}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
            Fighting back
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
            Denial Tactics &amp; RKC Counter-Measures
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Extended warranty companies deny roughly 30–40% of initial claims. The denials follow
            predictable patterns — and each one has a technical counter when your shop documents
            evidence properly.
          </p>
        </FadeIn>

        {/* Bento grid: 1 large + 2 small */}
        <Stagger className="grid gap-6 lg:grid-cols-2 lg:grid-rows-2 lg:gap-6" stagger={0.08} delay={0.05}>
          <StaggerItem className="lg:row-span-2">
            <TacticCard item={featured} index={0} />
          </StaggerItem>
          {rest.map((item, i) => (
            <StaggerItem key={item.tactic}>
              <TacticCard item={item} index={i + 1} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
