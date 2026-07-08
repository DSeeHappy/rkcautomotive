'use client';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { Calendar, Phone, Wrench, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getBrandAccentGlow, getBrandPanelBackground } from '@/lib/vehicleBrands';
import { BUSINESS } from '@/lib/constants';
import type { VehicleBrand } from '@/lib/vehicleBrands';
import { resolveModelImage, type VehicleModel } from '@/lib/vehicleModels';
import BrandLogo from './BrandLogo';

type ModelDetailPanelProps = {
  model: VehicleModel | null;
  brand: VehicleBrand | null;
  open: boolean;
  onClose: () => void;
};

export default function ModelDetailPanel({ model, brand, open, onClose }: ModelDetailPanelProps) {
  if (!model || !brand) return null;

  const imageSrc = resolveModelImage(model);

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-[#060a12]/70 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-4 sm:pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-2xl">
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

                <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto">
                  <div className="relative h-52 shrink-0 overflow-hidden sm:h-64">
                    <Image
                      src={imageSrc}
                      alt={`${brand.name} ${model.model}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 672px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-[#0c1222]/40 to-transparent" />

                    <button
                      type="button"
                      onClick={onClose}
                      className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 p-2 text-white transition hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/50"
                      aria-label="Close model details"
                    >
                      <X className="size-5" aria-hidden />
                    </button>

                    <div className="absolute bottom-4 left-6 right-6">
                      <p
                        className="text-xs font-semibold uppercase tracking-[0.2em]"
                        style={{ color: `color-mix(in srgb, ${brand.color} 55%, white)` }}
                      >
                        {brand.name} · {model.yearRange}
                      </p>
                      <DialogTitle className="mt-1 font-display text-3xl tracking-wide text-white sm:text-4xl">
                        {model.model}
                      </DialogTitle>
                    </div>
                  </div>

                  <div className="flex-1 p-6 sm:p-8">
                    <div className="flex items-start gap-4">
                      <BrandLogo slug={brand.slug} color={brand.color} size={40} className="shrink-0" />
                      <p className="text-base leading-relaxed text-white/78">{model.description}</p>
                    </div>

                    <section className="mt-8">
                      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
                        <Calendar className="size-4" aria-hidden />
                        Factory maintenance schedule
                      </h3>
                      <div className="mt-4 space-y-4">
                        {model.maintenanceSchedule.map((entry) => (
                          <div
                            key={entry.interval}
                            className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm"
                          >
                            <p
                              className="text-sm font-semibold"
                              style={{ color: `color-mix(in srgb, ${brand.color} 50%, white)` }}
                            >
                              {entry.interval}
                            </p>
                            <ul className="mt-3 space-y-2">
                              {entry.items.map((item) => (
                                <li key={item} className="flex gap-2 text-sm text-white/85">
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
                      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
                        <Wrench className="size-4" aria-hidden />
                        Common RKC services for the {model.model}
                      </h3>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {model.commonServices.map((service) => (
                          <li
                            key={service}
                            className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/85"
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
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
