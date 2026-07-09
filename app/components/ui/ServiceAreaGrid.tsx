import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import {
  SERVICE_AREAS_DATA,
  type ServiceArea,
  type ServiceAreaNeighborhood,
} from '@/lib/serviceAreas';

type ServiceAreaGridProps = {
  /** Show all neighborhoods as tags; when false, show first 4 + count */
  showAllNeighborhoods?: boolean;
  /** Grid columns at large breakpoint */
  columns?: 2 | 3 | 4;
  className?: string;
};

function NeighborhoodChip({ neighborhood }: { neighborhood: ServiceAreaNeighborhood }) {
  return (
    <li className="flex items-center gap-1.5 rounded-full border border-white/25 bg-black/35 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
      <span className="relative size-4 shrink-0 overflow-hidden rounded-sm ring-1 ring-white/20">
        <Image
          src={neighborhood.flag}
          alt={`${neighborhood.name} neighborhood flag`}
          fill
          sizes="16px"
          className="object-cover"
          style={{ imageRendering: 'auto' }}
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
  const visibleNeighborhoods = showAllNeighborhoods
    ? area.neighborhoods
    : area.neighborhoods.slice(0, 4);
  const hiddenCount = area.neighborhoods.length - visibleNeighborhoods.length;

  return (
    <FadeIn delay={index * 0.03}>
      <Link
        href={area.href}
        className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-[color:var(--line)] transition hover:border-primary-green/60 hover:shadow-[0_16px_48px_-20px_rgba(14,133,54,0.45)]"
      >
        {/* Full-bleed flag background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src={area.flag}
            alt={`${area.name}, Colorado area flag`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority={index < 3}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/35" />
          <div className="absolute inset-0 bg-primary-blue/10 mix-blend-multiply" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-3xl tracking-wide text-white transition group-hover:text-primary-green sm:text-4xl">
              {area.name}
            </h3>
            <ArrowRight className="size-5 shrink-0 text-primary-green opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/85">{area.description}</p>
          <div className="mt-4 flex flex-1 flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-green">
              Neighborhoods served
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {visibleNeighborhoods.map((n) => (
                <NeighborhoodChip key={n.name} neighborhood={n} />
              ))}
              {hiddenCount > 0 && (
                <li className="rounded-full bg-primary-green/25 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm">
                  +{hiddenCount} more
                </li>
              )}
            </ul>
          </div>
          <p className="mt-4 text-xs font-semibold text-white/70 transition group-hover:text-primary-green">
            View {area.name} auto repair →
          </p>
        </div>
      </Link>
    </FadeIn>
  );
}

export default function ServiceAreaGrid({
  showAllNeighborhoods = false,
  columns = 3,
  className = '',
}: ServiceAreaGridProps) {
  const colClass =
    columns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : columns === 2
        ? 'sm:grid-cols-2'
        : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid gap-4 ${colClass} ${className}`}>
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
