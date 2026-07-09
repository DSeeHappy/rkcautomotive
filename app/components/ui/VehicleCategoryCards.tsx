'use client';

import Link from 'next/link';
import { Car, Globe2, Sparkles } from 'lucide-react';
import { VEHICLE_CATEGORIES } from '@/lib/constants';
import { getBrandByName } from '@/lib/vehicleBrands';
import BrandLogo from './BrandLogo';
import FadeIn, { Stagger, StaggerItem } from './FadeIn';

const CATEGORY_STYLE = {
  Domestic: {
    icon: Car,
    accent: '#1c3d91',
    glow: 'rgba(28,61,145,0.14)',
    gradient:
      'linear-gradient(145deg, color-mix(in srgb, #1c3d91 8%, white) 0%, white 42%, color-mix(in srgb, #0e8536 4%, white) 100%)',
    border: 'rgba(28,61,145,0.18)',
    iconBg: 'from-primary-blue/15 to-primary-blue/5',
  },
  'Import / Asian': {
    icon: Globe2,
    accent: '#0e8536',
    glow: 'rgba(14,133,54,0.16)',
    gradient:
      'linear-gradient(145deg, color-mix(in srgb, #0e8536 10%, white) 0%, white 44%, color-mix(in srgb, #1c3d91 5%, white) 100%)',
    border: 'rgba(14,133,54,0.2)',
    iconBg: 'from-primary-green/18 to-primary-green/6',
  },
  European: {
    icon: Sparkles,
    accent: '#1c3d91',
    glow: 'rgba(28,61,145,0.12)',
    gradient:
      'linear-gradient(145deg, color-mix(in srgb, #1c3d91 12%, white) 0%, white 40%, color-mix(in srgb, #0e8536 6%, white) 100%)',
    border: 'rgba(28,61,145,0.16)',
    iconBg: 'from-primary-blue/12 via-primary-green/8 to-primary-blue/5',
  },
} as const;

function BrandPill({ name }: { name: string }) {
  const brand = getBrandByName(name);

  return (
    <Link
      href="/#brands"
      className="group/pill inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white/90 px-3.5 py-2 text-sm font-semibold text-foreground shadow-[0_4px_14px_-8px_rgba(12,18,34,0.25)] transition duration-200 hover:-translate-y-0.5 hover:border-primary-green/45 hover:bg-white hover:shadow-[0_10px_24px_-12px_rgba(14,133,54,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/35"
    >
      {brand ? (
        <span className="flex size-6 items-center justify-center rounded-full bg-[var(--background)] ring-1 ring-[color:var(--line)] transition group-hover/pill:ring-primary-green/30">
          <BrandLogo slug={brand.slug} color={brand.color} size={14} />
        </span>
      ) : (
        <span className="flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-primary-blue/10 to-primary-green/10 text-[10px] font-bold uppercase tracking-wide text-primary-blue ring-1 ring-[color:var(--line)]">
          {name.charAt(0)}
        </span>
      )}
      <span className="transition group-hover/pill:text-primary-blue">{name}</span>
    </Link>
  );
}

export default function VehicleCategoryCards() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(28,61,145,0.06) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-green/35 to-transparent"
        aria-hidden
      />

      <div className="wrap relative">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Vehicle makes</p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            Domestic, import &amp; European
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Every major manufacturer on Colorado roads — same ASE-certified team, transparent pricing, and dealer-level
            diagnostics without the dealership experience.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid gap-8 lg:grid-cols-3" stagger={0.12} delay={0.08}>
          {VEHICLE_CATEGORIES.map((cat) => {
            const style = CATEGORY_STYLE[cat.title];
            const Icon = style.icon;

            return (
              <StaggerItem key={cat.title}>
                <article
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-8 shadow-[0_24px_70px_-36px_rgba(12,18,34,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_80px_-32px_rgba(28,61,145,0.22)]"
                  style={{
                    background: style.gradient,
                    borderColor: style.border,
                  }}
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full opacity-80 blur-2xl transition duration-500 group-hover:opacity-100"
                    style={{ background: style.glow }}
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
                    aria-hidden
                  />

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${style.iconBg} ring-1 ring-[color:var(--line)]`}
                    >
                      <Icon className="size-5" style={{ color: style.accent }} aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-display text-3xl tracking-wide text-primary-blue">{cat.title}</h3>
                      <p className="mt-1 text-sm text-ink-muted">
                        {cat.brands.length} makes serviced at RKC Englewood
                      </p>
                    </div>
                  </div>

                  <ul className="relative mt-7 flex flex-wrap gap-2.5">
                    {cat.brands.map((brand) => (
                      <li key={brand}>
                        <BrandPill name={brand} />
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-8 border-t border-[color:var(--line)]/80 pt-5">
                    <Link
                      href="/#brands"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-green transition hover:text-primary-green-dark"
                    >
                      Explore featured brands
                      <span aria-hidden className="transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
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
