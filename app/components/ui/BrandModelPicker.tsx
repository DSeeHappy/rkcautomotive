'use client';

import { ChevronRight, MousePointerClick, Wrench } from 'lucide-react';
import Link from 'next/link';
import { buildModelHubPath } from '@/lib/modelHubRoutes';
import type { VehicleBrand } from '@/lib/vehicleBrands';
import { StaggerItem } from './FadeIn';

type BrandModelPickerProps = {
  brand: VehicleBrand;
  profileCommonModels: string[];
};

export default function BrandModelPicker({ brand, profileCommonModels }: BrandModelPickerProps) {
  return (
    <StaggerItem className="rounded-2xl border border-white/20 bg-[#060a12]/45 p-5 backdrop-blur-sm">
      <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white">
        <Wrench className="size-4 shrink-0 text-primary-green-light" aria-hidden />
        Common Models Serviced
      </p>
      <ul className="mt-4 space-y-2">
        {profileCommonModels.map((model) => (
          <li key={model} className="flex gap-2 text-sm text-white">
            <span
              className="mt-1.5 size-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: brand.color }}
              aria-hidden
            />
            {model}
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-white/10 pt-5">
        <div className="flex items-center gap-2">
          <MousePointerClick className="size-4 shrink-0 text-primary-green-light" aria-hidden />
          <p className="text-sm font-semibold text-white">Pick your model</p>
        </div>
        <p className="mt-1.5 pl-6 text-xs leading-relaxed text-white/60">
          Tap a model for common issues and service links
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {brand.commonModels.map((model) => (
            <li key={model}>
              <Link
                href={buildModelHubPath(brand.slug, model)}
                aria-label={`View ${brand.name} ${model} services`}
                className="group inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition duration-200 hover:scale-[1.03] hover:border-white/45 hover:bg-white/20 hover:shadow-[0_4px_16px_-4px_rgba(255,255,255,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98] sm:text-sm"
              >
                <span>{model}</span>
                <ChevronRight
                  className="size-3.5 shrink-0 text-white/50 transition duration-200 group-hover:translate-x-0.5 group-hover:text-white/90"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StaggerItem>
  );
}
