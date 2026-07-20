'use client';

import { Ban, Droplets, Link2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';
import { useLanguage } from '@/lib/language';
import { warrantyCopy } from '@/lib/i18n/warrantyCopy';
import { SECTION_PAD, SECTION_HEADER } from './warrantyShared';

const TACTIC_ICONS: LucideIcon[] = [Ban, Droplets, Link2];
const TACTIC_STYLES = [
  {
    accent: 'text-red-400',
    accentBg: 'bg-red-500/10',
    accentBorder: 'border-red-500/25',
  },
  {
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/25',
  },
  {
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentBorder: 'border-sky-500/25',
  },
] as const;

type TacticItem = {
  icon: LucideIcon;
  tactic: string;
  adjusterClaim: string;
  rkcResponse: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  featured?: boolean;
};

function TacticCard({
  item,
  index,
  labels,
}: {
  item: TacticItem;
  index: number;
  labels: { tacticLabel: string; adjusterClaimLabel: string; ourFightLabel: string };
}) {
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
              {labels.tacticLabel} {index + 1}
            </p>
            <h3 className="font-display text-2xl tracking-wide text-primary-blue sm:text-[1.65rem]">
              {item.tactic}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-5 px-8 py-7">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">{labels.adjusterClaimLabel}</p>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-muted sm:text-base">{item.adjusterClaim}</p>
        </div>
        <div className="mt-auto rounded-2xl border border-primary-green/20 bg-primary-green/[0.06] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-green">{labels.ourFightLabel}</p>
          <p className="mt-2.5 text-sm leading-relaxed text-foreground sm:text-base">{item.rkcResponse}</p>
        </div>
      </div>
    </article>
  );
}

export default function WarrantyDenialTactics() {
  const { lang } = useLanguage();
  const copy = warrantyCopy(lang).denialTactics;
  const tactics: TacticItem[] = copy.tactics.map((item, i) => ({
    ...item,
    icon: TACTIC_ICONS[i] ?? Ban,
    ...TACTIC_STYLES[i],
    featured: i === 0,
  }));
  const [featured, ...rest] = tactics;

  return (
    <section lang={lang} className={`${SECTION_PAD} bg-white`}>
      <div className="wrap">
        <FadeIn className={SECTION_HEADER}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{copy.eyebrow}</p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">{copy.title}</h2>
          <p className="mt-4 text-lg text-ink-muted">{copy.intro}</p>
        </FadeIn>

        <Stagger className="grid gap-6 lg:grid-cols-2 lg:grid-rows-2 lg:gap-6" stagger={0.08} delay={0.05}>
          <StaggerItem className="lg:row-span-2">
            <TacticCard
              item={featured}
              index={0}
              labels={{
                tacticLabel: copy.tacticLabel,
                adjusterClaimLabel: copy.adjusterClaimLabel,
                ourFightLabel: copy.ourFightLabel,
              }}
            />
          </StaggerItem>
          {rest.map((item, i) => (
            <StaggerItem key={item.tactic}>
              <TacticCard
                item={item}
                index={i + 1}
                labels={{
                  tacticLabel: copy.tacticLabel,
                  adjusterClaimLabel: copy.adjusterClaimLabel,
                  ourFightLabel: copy.ourFightLabel,
                }}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
