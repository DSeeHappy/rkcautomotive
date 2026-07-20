'use client';

import { ChevronRight, CircleCheck, MapPin, MousePointerClick, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import type { BrandReliabilitySnapshot } from '@/lib/brandReliabilityNotes';
import { buildModelHubPath } from '@/lib/modelHubRoutes';
import type { VehicleBrand } from '@/lib/vehicleBrands';
import { useLanguage } from '@/lib/language';
import { siteCopy } from '@/lib/siteCopy';
import { BRAND_CONTENT_ES } from '@/lib/i18n/brandContentEs';
import { StaggerItem } from './FadeIn';

type BrandModelPickerProps = {
  brand: VehicleBrand;
  reliabilitySnapshot: BrandReliabilitySnapshot;
};

function stripPickQualifiers(pick: string): string {
  return pick.replace(/\s*\([^)]*\)/g, '').replace(/\s+\d\.\d+L.*$/i, '').replace(/\s+Cummins.*$/i, '').trim();
}

function resolveModelHubPath(brand: VehicleBrand, pick: string): string | null {
  const base = stripPickQualifiers(pick).toLowerCase();
  const match = brand.commonModels.find((model) => {
    const normalized = model.toLowerCase();
    return normalized === base || base.includes(normalized) || normalized.includes(base);
  });
  return match ? buildModelHubPath(brand.slug, match) : null;
}

export default function BrandModelPicker({ brand, reliabilitySnapshot }: BrandModelPickerProps) {
  const { lang } = useLanguage();
  const brandsCopy = siteCopy(lang).brand;
  const es = lang === 'es' ? BRAND_CONTENT_ES[brand.slug] : undefined;

  const scrutinyEn = reliabilitySnapshot.bullets.find((bullet) => bullet.label === 'Higher scrutiny');
  const coloradoEn = reliabilitySnapshot.bullets.find((bullet) => bullet.label === 'Colorado angle');
  const scrutinyText = es?.higherScrutiny ?? scrutinyEn?.text;
  const coloradoText = es?.coloradoAngle ?? coloradoEn?.text;

  return (
    <StaggerItem className="rounded-2xl border border-white/20 bg-[#060a12]/45 p-5 backdrop-blur-sm">
      <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white">
        <CircleCheck className="size-4 shrink-0 text-emerald-300" aria-hidden />
        {brandsCopy.reliablePicks}
      </p>
      <ul role="list" className="mt-4 space-y-2">
        {reliabilitySnapshot.reliablePicks.map((pick) => {
          const href = resolveModelHubPath(brand, pick);

          return (
            <li key={pick} role="listitem" className="flex gap-2 text-sm text-white">
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: brand.color }}
                aria-hidden
              />
              {href ? (
                <Link
                  href={href}
                  className="font-medium text-emerald-200 underline decoration-emerald-400/40 underline-offset-2 transition hover:text-white hover:decoration-emerald-300/70"
                >
                  {pick}
                </Link>
              ) : (
                <span className="font-medium text-white/95">{pick}</span>
              )}
            </li>
          );
        })}
      </ul>

      {scrutinyText ? (
        <div className="mt-5">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
            <ShieldAlert className="size-3.5 shrink-0" aria-hidden />
            {brandsCopy.higherScrutiny}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/85">{scrutinyText}</p>
        </div>
      ) : null}

      {coloradoText ? (
        <div className="mt-4">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-sky-300">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            {brandsCopy.coloradoAngle}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/85">{coloradoText}</p>
        </div>
      ) : null}

      <div className="mt-5 border-t border-white/10 pt-5">
        <div className="flex items-center gap-2">
          <MousePointerClick className="size-4 shrink-0 text-primary-green-light" aria-hidden />
          <p className="text-sm font-semibold text-white">{brandsCopy.selectModel(brand.name)}</p>
        </div>
        <p className="mt-1.5 pl-6 text-xs leading-relaxed text-white/60">{brandsCopy.tapModel}</p>
        <ul role="list" className="mt-4 flex flex-wrap gap-2">
          {brand.commonModels.map((model) => (
            <li key={model} role="listitem">
              <Link
                href={buildModelHubPath(brand.slug, model)}
                aria-label={brandsCopy.viewModelServices(brand.name, model)}
                className="group inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition duration-200 hover:scale-[1.03] hover:border-white/45 hover:bg-white/20 hover:shadow-[0_4px_16px_-4px_rgba(255,255,255,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060a12] active:scale-[0.98] sm:text-sm"
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
