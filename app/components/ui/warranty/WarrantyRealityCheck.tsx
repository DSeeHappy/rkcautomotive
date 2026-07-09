'use client';

import { Clock, FileCheck, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import FadeIn from '@/app/components/ui/FadeIn';

const STATS: { icon: LucideIcon; value: string; label: string; detail: string }[] = [
  {
    icon: Clock,
    value: '1–7 days',
    label: 'Typical approval window',
    detail: 'Component claims in 1–3 days · powertrain 3–7+',
  },
  {
    icon: FileCheck,
    value: '500+',
    label: 'Claims handled',
    detail: 'Extended warranty diagnostics & submissions',
  },
  {
    icon: Shield,
    value: '30+ yrs',
    label: 'Shop experience',
    detail: 'ASE-certified Englewood bay since day one',
  },
];

export default function WarrantyRealityCheck() {
  return (
    <section className="relative overflow-hidden bg-[#0c1222] py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-green/40 to-transparent"
      />

      <div className="wrap relative">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary-green-light">
            Warranty advocacy
          </p>
          <blockquote className="mt-6 font-display text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.05] tracking-wide text-white">
            &ldquo;We fight the claim so you don&apos;t fight the adjuster.&rdquo;
          </blockquote>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/65 sm:text-lg">
            Extended warranty companies profit when claims stall or get denied. RKC documents every failure, negotiates
            teardown authorizations, and escalates when adjusters play games.
          </p>
        </FadeIn>

        <div className="mt-14 grid divide-y divide-white/10 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <FadeIn key={stat.label} delay={i * 0.08} className="px-6 py-10 sm:px-8">
                <Icon className="size-8 text-primary-green-light" aria-hidden />
                <p className="mt-4 font-display text-5xl tracking-wide text-white sm:text-6xl">{stat.value}</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-primary-green-light">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm text-white/55">{stat.detail}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
