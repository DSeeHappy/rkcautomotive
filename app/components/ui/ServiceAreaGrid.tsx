'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  SERVICE_AREAS_DATA,
  type ServiceArea,
  type ServiceAreaNeighborhood,
} from '@/lib/serviceAreas';
import { useLanguage } from '@/lib/language';
import { siteCopy } from '@/lib/siteCopy';

type ServiceAreaGridProps = {
  /** Show all neighborhoods as tags; when false, show first 4 + count */
  showAllNeighborhoods?: boolean;
  /** Grid columns at large breakpoint */
  columns?: 2 | 3 | 4;
  className?: string;
};

/**
 * County seals, city logos, and seal-centric flags. object-cover on tall cards
 * crops rim text (e.g. DOUGLAS / 1861); contain + pad keeps the full mark visible.
 */
const CONTAINED_FLAG_BACKGROUNDS = new Set([
  '/images/flags/highlands-ranch.svg',
  '/images/flags/columbine.svg',
  '/images/flags/morrison.svg',
  '/images/flags/bow-mar.svg',
  '/images/flags/littleton.svg',
  '/images/flags/sheridan.svg',
  '/images/flags/greenwood-village.svg',
  '/images/flags/cherry-hills-village.svg',
  '/images/flags/glendale.svg',
  '/images/flags/englewood.webp',
  '/images/flags/edgewater.webp',
  '/images/flags/douglas-county.svg',
  '/images/flags/arapahoe-county.svg',
  '/images/flags/jefferson-county.svg',
]);

function usesContainedFlagBackground(flagPath: string): boolean {
  return CONTAINED_FLAG_BACKGROUNDS.has(flagPath);
}

function NeighborhoodChip({ neighborhood }: { neighborhood: ServiceAreaNeighborhood }) {
  return (
    <li className="flex items-center gap-1.5 rounded-full border border-white/25 bg-black/55 px-2.5 py-0.5 text-xs font-medium text-white">
      <span className="relative size-4 shrink-0 overflow-hidden rounded-sm ring-1 ring-white/20">
        <Image
          src={neighborhood.flag}
          alt={`${neighborhood.name} neighborhood flag`}
          fill
          sizes="16px"
          quality={90}
          className="object-cover"
        />
      </span>
      {neighborhood.name}
    </li>
  );
}

function ServiceAreaCard({
  area,
  index,
  showAllNeighborhoods,
}: {
  area: ServiceArea;
  index: number;
  showAllNeighborhoods: boolean;
}) {
  const { lang } = useLanguage();
  const copy = siteCopy(lang).areaGrid;
  const description = copy.descriptions[area.slug] ?? area.description;
  const visibleNeighborhoods = showAllNeighborhoods
    ? area.neighborhoods
    : area.neighborhoods.slice(0, 4);
  const hiddenCount = area.neighborhoods.length - visibleNeighborhoods.length;
  const containFlag = usesContainedFlagBackground(area.flag);

  return (
    <Link
      href={area.href}
      className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-[color:var(--line)] bg-[#0b1220] transition hover:border-primary-green/60 hover:shadow-[0_16px_48px_-20px_rgba(14,133,54,0.45)]"
    >
      {/* Flag / seal background — opaque layers only (no mix-blend / backdrop-blur) to avoid scroll flash */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={area.flag}
          alt={`${area.name}, Colorado area flag`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
          quality={90}
          className={
            containFlag
              ? 'object-contain object-center p-7 sm:p-9'
              : 'object-cover object-center'
          }
          priority={index < 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/68 to-black/45" />
        <div className="absolute inset-0 bg-[#1c3d91]/18" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-3xl tracking-wide text-white transition group-hover:text-primary-green sm:text-4xl">
            {area.name}
          </h3>
          <ArrowRight
            className="size-5 shrink-0 text-primary-green opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
            aria-hidden
          />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-white/85">{description}</p>
        <div className="mt-4 flex flex-1 flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-green">
            {copy.neighborhoods}
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {visibleNeighborhoods.map((n) => (
              <NeighborhoodChip key={n.name} neighborhood={n} />
            ))}
            {hiddenCount > 0 && (
              <li className="rounded-full bg-primary-green/35 px-2.5 py-0.5 text-xs font-semibold text-white">
                {copy.more(hiddenCount)}
              </li>
            )}
          </ul>
        </div>
        <p className="mt-4 text-xs font-semibold text-white/70 transition group-hover:text-primary-green">
          {copy.viewRepair(area.name)}
        </p>
      </div>
    </Link>
  );
}

export default function ServiceAreaGrid({
  showAllNeighborhoods = false,
  columns = 3,
  className = '',
}: ServiceAreaGridProps) {
  const { lang } = useLanguage();
  const colClass =
    columns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : columns === 2
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div lang={lang} className={`grid gap-4 ${colClass} ${className}`}>
      {SERVICE_AREAS_DATA.map((area, i) => (
        <ServiceAreaCard
          key={area.slug}
          area={area}
          index={i}
          showAllNeighborhoods={showAllNeighborhoods}
        />
      ))}
    </div>
  );
}
