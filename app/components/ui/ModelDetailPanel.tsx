'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { Calendar, Phone, X } from 'lucide-react';
import Link from 'next/link';
import JsonLd from '@/app/components/JsonLd';
import { getBrandAccentGlow, getBrandPanelBackground } from '@/lib/vehicleBrands';
import { BUSINESS } from '@/lib/constants';
import type { VehicleBrand } from '@/lib/vehicleBrands';
import { getCategoryImage, type VehicleModel } from '@/lib/vehicleModels';
import { getVehicleImage } from '@/lib/vehicleImages';
import { createItemListSchema } from '@/lib/seo';
import BrandLogo from './BrandLogo';
import ModelCommonServicesSection from './ModelCommonServicesSection';
import VehicleImagePanel from './VehicleImagePanel';

const FULL_BLEED_BRANDS = [
  'volkswagen',
  'kia',
  'audi',
  'jeep',
  'nissan',
  'hyundai',
  'subaru',
  'ram',
  'bmw',
  'honda',
  'ford',
  'toyota',
  'mercedes',
] as const;

type ModelDetailPanelProps = {
  model: VehicleModel | null;
  brand: VehicleBrand | null;
  open: boolean;
  onClose: () => void;
};

export default function ModelDetailPanel({ model, brand, open, onClose }: ModelDetailPanelProps) {
  if (!model || !brand) return null;

  const vehicleImage = getVehicleImage(brand.slug, brand.name, model.model);
  const imageSrc =
    vehicleImage.src ??
    (vehicleImage.record?.sourceUrl.startsWith('http') ? vehicleImage.record.sourceUrl : undefined) ??
    getCategoryImage(model.vehicleType);
  const imageAlt = vehicleImage.alt;
  const imageYearRange = vehicleImage.yearRange ?? model.yearRange;
  const remoteFallbackSrc = vehicleImage.record?.sourceUrl;
  const isRepresentative = vehicleImage.isRepresentative;
  const isFullBleed = FULL_BLEED_BRANDS.includes(brand.slug as (typeof FULL_BLEED_BRANDS)[number]);

  const servicesSchema = createItemListSchema(
    `Common RKC Services for the ${model.model}`,
    model.commonServices.map((service) => ({
      name: service.title,
      url: service.href,
      description: service.description,
    })),
  );

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <JsonLd data={servicesSchema} />
      <div className="fixed inset-0 bg-[#060a12]/70 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-4 sm:pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-2xl lg:max-w-5xl xl:max-w-6xl">
              <div className="relative flex h-full flex-col overflow-hidden shadow-2xl">
                {isFullBleed ? (
                  <>
                    <VehicleImagePanel
                      src={imageSrc}
                      remoteFallbackSrc={remoteFallbackSrc}
                      alt={imageAlt}
                      brandColor={brand.color}
                      brandName={brand.name}
                      model={model.model}
                      yearRange={imageYearRange}
                      fallbackType={model.vehicleType}
                      isRepresentative={isRepresentative}
                      fullBleed
                    />
                    <div
                      className="pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[68%] bg-gradient-to-l from-[#060a12]/88 via-[#060a12]/52 to-transparent lg:block"
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[72%] bg-gradient-to-t from-[#060a12]/90 via-[#060a12]/48 to-transparent lg:hidden"
                      aria-hidden
                    />
                  </>
                ) : (
                  <>
                    <div
                      className="absolute inset-0"
                      style={{ background: getBrandPanelBackground(brand) }}
                      aria-hidden
                    />
                    <div
                      className="absolute inset-0 opacity-55"
                      style={{ background: getBrandAccentGlow(brand) }}
                      aria-hidden
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-primary-blue/8"
                      aria-hidden
                    />
                  </>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-black/40 p-2 text-white transition hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/50"
                  aria-label="Close model details"
                >
                  <X className="size-5" aria-hidden />
                </button>

                <div
                  className={
                    isFullBleed
                      ? 'relative z-10 flex min-h-0 flex-1 flex-col'
                      : 'relative z-10 flex min-h-0 flex-1 flex-col lg:flex-row'
                  }
                >
                  {!isFullBleed && (
                    <div className="relative shrink-0 lg:sticky lg:top-0 lg:h-full lg:w-[45%] lg:min-h-0">
                      <VehicleImagePanel
                        src={imageSrc}
                        remoteFallbackSrc={remoteFallbackSrc}
                        alt={imageAlt}
                        brandColor={brand.color}
                        brandName={brand.name}
                        model={model.model}
                        yearRange={imageYearRange}
                        fallbackType={model.vehicleType}
                        isRepresentative={isRepresentative}
                      />
                    </div>
                  )}

                  <div
                    className={
                      isFullBleed
                        ? 'flex min-h-0 flex-1 flex-col overflow-y-auto bg-gradient-to-b from-[#0c1222]/98 via-[#0c1222]/96 to-[#0c1222]/98 lg:ml-auto lg:max-w-[58%]'
                        : 'flex min-h-0 flex-1 flex-col overflow-y-auto'
                    }
                  >
                    <div className="border-b border-white/10 p-6 sm:p-8 lg:pt-14">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                        {brand.name} · {model.yearRange}
                      </p>
                      <DialogTitle className="mt-1 font-display text-3xl tracking-wide text-white sm:text-4xl">
                        {model.model}
                      </DialogTitle>
                    </div>

                    <div className="flex-1 p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        <BrandLogo slug={brand.slug} color={brand.color} size={40} className="shrink-0" />
                        <p className="text-base leading-relaxed text-white">{model.description}</p>
                      </div>

                      <section className="mt-8">
                        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white">
                          <Calendar className="size-4" aria-hidden />
                          Factory maintenance schedule
                        </h3>
                        <div className="mt-4 space-y-4">
                          {model.maintenanceSchedule.map((entry) => (
                            <div
                              key={entry.interval}
                              className="rounded-xl border border-white/10 border-l-4 border-l-primary-green bg-[#0c1222]/95 p-4 shadow-lg backdrop-blur-md sm:p-5"
                            >
                              <p className="text-base font-bold text-white sm:text-lg">
                                {entry.interval}
                              </p>
                              <ul className="mt-3 space-y-2">
                                {entry.items.map((item) => (
                                  <li
                                    key={item}
                                    className="flex gap-2 text-sm leading-relaxed text-slate-200 sm:text-base"
                                  >
                                    <span
                                      className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-green"
                                      aria-hidden
                                    />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </section>

                      <ModelCommonServicesSection
                        modelName={model.model}
                        services={model.commonServices}
                        brandColor={brand.color}
                      />

                      <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
                        <a href={BUSINESS.phoneHref} className="btn-green inline-flex items-center gap-2">
                          <Phone className="size-4" aria-hidden />
                          Call {BUSINESS.phone}
                        </a>
                        <Link
                          href={`/contact?vehicle=${encodeURIComponent(`${brand.name} ${model.model}`)}`}
                          className="btn-ghost-light"
                          onClick={onClose}
                        >
                          Book {model.model} service
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
