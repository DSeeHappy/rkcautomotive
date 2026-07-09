'use client';

import { Clock, Gauge, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from '@/app/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';
import { SECTION_PAD, SECTION_HEADER } from './warrantyShared';

const TIMELINE: {
  step: string;
  icon: LucideIcon;
  title: string;
  timeframe: string;
  accent: string;
  accentBg: string;
  accentRing: string;
  paragraphs: string[];
}[] = [
  {
    step: '01',
    icon: Zap,
    title: 'Standard Component Claims',
    timeframe: '1–3 business days',
    accent: 'text-emerald-400',
    accentBg: 'bg-emerald-500/15',
    accentRing: 'ring-emerald-400/30',
    paragraphs: [
      'Alternators, starters, brake master cylinders, and similar single-component failures follow a predictable approval path once we submit structured evidence packages with photos, scan data, and AllData labor times.',
      'Adjusters see hundreds of claims daily — vague descriptions get pushed to the back of the queue. RKC formats documentation exactly how claims departments expect.',
    ],
  },
  {
    step: '02',
    icon: Gauge,
    title: 'Major Powertrain Claims',
    timeframe: '3–7+ business days',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/15',
    accentRing: 'ring-amber-400/30',
    paragraphs: [
      'Engine, transmission, and differential failures trigger field inspectors, teardown authorizations, and maintenance-history scrutiny. These claims routinely stretch a full week or longer.',
      'RKC plans for this timeline upfront so you are not left without a vehicle wondering what happened to your claim.',
    ],
  },
  {
    step: '03',
    icon: Clock,
    title: 'How RKC Accelerates Approval',
    timeframe: 'Direct adjuster access',
    accent: 'text-sky-400',
    accentBg: 'bg-sky-500/15',
    accentRing: 'ring-sky-400/30',
    paragraphs: [
      'We maintain direct lines to claims departments at Endurance, CarShield, Royal Administration, and other major administrators — not the general customer service number.',
      'Every submission includes digital evidence: timestamped photos, OBD-II freeze-frame data, fluid analysis, and labor at our transparent $120/hr rate.',
    ],
  },
];

function TimelineNode({
  card,
  index,
  reduce,
}: {
  card: (typeof TIMELINE)[number];
  index: number;
  reduce: boolean | null;
}) {
  const Icon = card.icon;

  return (
    <motion.div
      className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Node on horizontal line — desktop only */}
      <div className="relative z-10 mb-6 hidden lg:flex lg:w-full lg:items-center">
        <span
          className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${card.accentBg} ring-2 ${card.accentRing}`}
        >
          <Icon className={`size-7 ${card.accent}`} aria-hidden />
        </span>
        <span className={`ml-4 font-display text-4xl tracking-wide text-primary-blue/15`}>
          {card.step}
        </span>
      </div>

      <article className="group relative h-full w-full overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-white p-8 shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-36px_rgba(28,61,145,0.28)]">
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-60 ${card.accent}`}
        />

        {/* Mobile icon row */}
        <div className="mb-5 flex items-center justify-between gap-3 lg:hidden">
          <span
            className={`flex size-12 items-center justify-center rounded-2xl ${card.accentBg} ring-1 ${card.accentRing}`}
          >
            <Icon className={`size-6 ${card.accent}`} aria-hidden />
          </span>
          <span className="font-display text-3xl tracking-wide text-primary-blue/20">{card.step}</span>
        </div>

        <span
          className={`inline-block rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide ${card.accentBg} ${card.accent}`}
        >
          {card.timeframe}
        </span>
        <h3 className="mt-4 font-display text-2xl tracking-wide text-primary-blue sm:text-[1.65rem]">
          {card.title}
        </h3>
        {card.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 36)} className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            {paragraph}
          </p>
        ))}
      </article>
    </motion.div>
  );
}

export default function WarrantyApprovalTimes() {
  const reduce = useReducedMotion();

  return (
    <section className={`${SECTION_PAD} bg-[var(--background)]`}>
      <div className="wrap">
        <FadeIn className={SECTION_HEADER}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
            The harsh reality
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
            How Long Does Approval Actually Take?
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Warranty companies advertise fast claims. The reality at independent shops is measured in
            business days — and major powertrain failures can take a week or more.
          </p>
        </FadeIn>

        {/* Horizontal timeline connector — desktop */}
        <div className="relative mb-2 hidden lg:block">
          <div
            aria-hidden
            className="absolute left-[8%] right-[8%] top-7 h-0.5 bg-gradient-to-r from-emerald-400/30 via-amber-400/50 to-sky-400/30"
          />
          <div className="grid grid-cols-3 gap-8">
            {TIMELINE.map((card) => (
              <div key={card.title} className="flex justify-start pl-0">
                <span
                  className={`relative z-10 flex size-14 items-center justify-center rounded-full border-4 border-[var(--background)] ${card.accentBg}`}
                >
                  <card.icon className={`size-6 ${card.accent}`} aria-hidden />
                </span>
              </div>
            ))}
          </div>
        </div>

        <Stagger className="grid gap-8 lg:grid-cols-3 lg:gap-8" stagger={0.08} delay={0.05}>
          {TIMELINE.map((card, i) => (
            <StaggerItem key={card.title}>
              <TimelineNode card={card} index={i} reduce={reduce} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
