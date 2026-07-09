'use client';

import Link from 'next/link';
import { VEHICLE_BRANDS } from '@/lib/vehicleBrands';
import BrandLogo from './BrandLogo';

export default function BrandMarquee() {
  const brands = [...VEHICLE_BRANDS, ...VEHICLE_BRANDS];

  return (
    <div className="overflow-hidden border-y border-[color:var(--line)] bg-white py-8">
      <div className="marquee-track gap-8 px-4 sm:gap-10">
        {brands.map((brand, i) => (
          <Link
            key={`${brand.slug}-${i}`}
            href="/vehicles-we-service#brands"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full px-2 py-1 transition hover:bg-black/[0.03]"
            aria-label={`${brand.name} service at RKC Automotive`}
          >
            <BrandLogo
              slug={brand.slug}
              color={brand.color}
              size={28}
              className="transition group-hover:scale-110 sm:!size-8"
            />
            <span className="font-display text-2xl tracking-wide text-foreground/70 transition group-hover:text-foreground sm:text-3xl">
              {brand.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
