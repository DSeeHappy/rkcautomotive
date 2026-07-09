'use client';

import { Clock, Gauge, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';

const SECTION_PAD = 'py-24 sm:py-28';

const TIMELINE_CARDS: {
  icon: LucideIcon;
  title: string;
  timeframe: string;
  paragraphs: string[];
}[] = [
  {
    icon: Zap,
    title: 'Standard Component Claims',
    timeframe: '1–3 business days',
    paragraphs: [
      'Alternators, starters, brake master cylinders, window regulators, and similar single-component failures follow a relatively predictable approval path. Once we complete a full diagnostic scan, capture failure codes, and submit labor times from AllData or Mitchell guides, most administrators approve within one to three business days.',
      'The key is documentation quality. Adjusters see hundreds of claims daily — vague descriptions get pushed to the back of the queue. RKC submits structured evidence packages with photos, scan data, and component test results formatted exactly how claims departments expect.',
    ],
  },
  {
    icon: Gauge,
    title: 'Major Powertrain Claims',
    timeframe: '3–7+ business days',
    paragraphs: [
      'Engine, transmission, and differential failures trigger a completely different review process. Warranty companies dispatch field inspectors, demand teardown authorizations before approving internal inspection, and scrutinize your maintenance history for any excuse to deny coverage.',
      'These claims routinely stretch to a full week or longer — especially when the adjuster requests supplemental estimates after teardown reveals additional damage. RKC plans for this timeline upfront so you are not left without a vehicle wondering what happened to your claim.',
    ],
  },
  {
    icon: Clock,
    title: 'How RKC Accelerates Approval',
    timeframe: 'Direct adjuster access',
    paragraphs: [
      'We maintain direct lines to claims departments at Endurance, CarShield, Royal Administration, and other major administrators — not the general customer service number that puts you on hold for forty minutes.',
      'Every submission includes digital evidence packages: timestamped photos, OBD-II freeze-frame data, fluid analysis when relevant, and labor documentation at our transparent $120/hr rate. Adjusters who receive complete files approve faster because they do not need to request supplements or schedule re-inspections.',
    ],
  },
];

export default function WarrantyApprovalTimes() {
  return (
    <section className={`${SECTION_PAD} bg-white`}>
      <div className="wrap">
        <FadeIn className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
            The harsh reality
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
            The Elephant in the Shop: How Long Does Approval Actually Take?
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Warranty companies advertise fast claims. The reality at independent shops is measured in
            business days — and major powertrain failures can take a week or more. Here is what
            actually happens after you drop off your vehicle.
          </p>
        </FadeIn>

        <Stagger className="grid gap-8 lg:grid-cols-3" stagger={0.08} delay={0.05}>
          {TIMELINE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.title}>
                <article className="h-full rounded-3xl border border-[color:var(--line)] bg-[var(--background)] p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
                      <Icon className="size-6" />
                    </span>
                    <span className="rounded-full bg-primary-green/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-green">
                      {card.timeframe}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">{card.title}</h3>
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-ink-muted">
                      {paragraph}
                    </p>
                  ))}
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
