'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { Calendar, Phone, Wrench, X } from 'lucide-react';
import Link from 'next/link';
import { getBrandAccentGlow, getBrandPanelBackground } from '@/lib/vehicleBrands';
import { BUSINESS } from '@/lib/constants';
import type { VehicleBrand } from '@/lib/vehicleBrands';
import { getCategoryImage, type VehicleModel } from '@/lib/vehicleModels';
import { getVehicleImage } from '@/lib/vehicleImages';
import BrandLogo from './BrandLogo';
import VehicleImagePanel from './VehicleImagePanel';

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

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-[#060a12]/70 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-4 sm:pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-2xl lg:max-w-5xl xl:max-w-6xl">
              <div className="relative flex h-full flex-col overflow-hidden shadow-2xl">
                <div
                  className="absolute inset-0"
                  style={{ background: getBrandPanelBackground(brand) }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 opacity-90"
                  style={{ background: getBrandAccentGlow(brand) }}
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-primary-blue/15"
                  aria-hidden
                />

                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-black/40 p-2 text-white transition hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/50"
                  aria-label="Close model details"
                >
                  <X className="size-5" aria-hidden />
                </button>

                <div className="relative z-10 flex min-h-0 flex-1 flex-col lg:flex-row">
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

                  <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
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
                              className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
                            >
                              <p className="text-sm font-semibold text-white">
                                {entry.interval}
                              </p>
                              <ul className="mt-3 space-y-2">
                                {entry.items.map((item) => (
                                  <li key={item} className="flex gap-2 text-sm text-white">
                                    <span
                                      className="mt-1.5 size-1.5 shrink-0 rounded-full"
                                      style={{ backgroundColor: brand.color }}
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

                      <section className="mt-8">
                        <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white">
                          <Wrench className="size-4" aria-hidden />
                          Common RKC services for the {model.model}
                        </h3>
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                          {model.commonServices.map((service) => (
                            <li
                              key={service}
                              className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white"
                            >
                              {service}
                            </li>
                          ))}
                        </ul>
                      </section>

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
