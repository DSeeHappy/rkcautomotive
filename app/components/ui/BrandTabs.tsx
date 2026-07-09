'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { ChevronRight, MapPin, Wrench } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { getBrandAccentGlow, getBrandPanelBackground, VEHICLE_BRANDS, type VehicleBrand } from '@/lib/vehicleBrands';
import { getModel, type VehicleModel } from '@/lib/vehicleModels';
import BrandLogo from './BrandLogo';
import FadeIn from './FadeIn';
import ModelDetailPanel from './ModelDetailPanel';

export default function BrandTabs() {
  const [selectedModel, setSelectedModel] = useState<VehicleModel | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<VehicleBrand | null>(null);

  function openModelDetail(brand: VehicleBrand, modelName: string) {
    const model = getModel(brand.slug, modelName);
    if (!model) return;
    setSelectedBrand(brand);
    setSelectedModel(model);
  }

  function closeModelDetail() {
    setSelectedModel(null);
    setSelectedBrand(null);
  }

  return (
    <FadeIn className="wrap pb-20 pt-12 sm:pb-24 sm:pt-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">All makes &amp; models</p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          Expert service for every brand we work on
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          RKC Automotive in Englewood services Toyota, Ford, BMW, Subaru, and every major make on Colorado roads.
          Select a brand to learn how we keep your vehicle running strong.
        </p>
      </div>

      <TabGroup>
        <TabList className="flex flex-wrap gap-2 pb-2 md:gap-2">
          {VEHICLE_BRANDS.map((brand) => (
            <Tab
              key={brand.slug}
              className="group flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-3 py-2 text-xs font-semibold text-ink-muted shadow-sm outline-none transition sm:px-4 sm:py-2.5 sm:text-sm data-selected:border-transparent data-selected:bg-[#0c1222] data-selected:text-white data-selected:shadow-[0_10px_28px_-10px_rgba(12,18,34,0.45)] data-hover:border-primary-green/40 data-hover:text-foreground data-focus-visible:ring-2 data-focus-visible:ring-primary-green/30"
            >
              <BrandLogo slug={brand.slug} color={brand.color} size={20} className="group-data-selected:!bg-white" />
              <span>{brand.name}</span>
            </Tab>
          ))}
        </TabList>

        <TabPanels className="mt-8">
          {VEHICLE_BRANDS.map((brand) => (
            <TabPanel
              key={brand.slug}
              className="relative overflow-hidden rounded-[2rem] shadow-[0_32px_80px_-24px_rgba(12,18,34,0.55)]"
            >
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

              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full max-w-[82%] bg-gradient-to-r from-[#060a12]/82 via-[#060a12]/38 to-transparent lg:max-w-[74%]"
                aria-hidden
              />

              <div
                className="pointer-events-none absolute -right-[8%] top-1/2 -translate-y-1/2 opacity-[0.18] sm:-right-[4%] sm:opacity-[0.20] lg:-right-[2%] lg:opacity-[0.22]"
                aria-hidden
              >
                <BrandLogo
                  slug={brand.slug}
                  color="#ffffff"
                  size={320}
                  className="!size-[min(62vw,22rem)] sm:!size-[min(48vw,26rem)] lg:!size-[28rem]"
                />
              </div>

              <div className="relative z-10 p-6 sm:p-10 lg:max-w-[68%]">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                      {brand.category === 'domestic' ? 'Domestic' : 'Import'} · Serviced at RKC Englewood
                    </p>
                    <h3 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
                      {brand.name} Service
                    </h3>
                  </div>
                  <Link
                    href="/vehicles-we-service#brands"
                    className="btn-ghost-light inline-flex shrink-0 items-center gap-2 self-start px-4 py-2 text-sm"
                  >
                    All {brand.name} info
                    <ChevronRight className="size-4" aria-hidden />
                  </Link>
                </div>

                <div className="mt-8 space-y-5 text-base leading-relaxed text-white">
                  {brand.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                  <div className="rounded-2xl border border-white/20 bg-[#060a12]/35 p-5">
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white">
                      <Wrench className="size-4" aria-hidden />
                      Common models
                    </p>
                    <p className="mt-1.5 text-xs text-white/60">
                      Tap a model for maintenance schedule &amp; pricing context
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {brand.commonModels.map((model) => (
                        <li key={model}>
                          <button
                            type="button"
                            onClick={() => openModelDetail(brand, model)}
                            aria-label={`View ${brand.name} ${model} details`}
                            className="group inline-flex cursor-pointer items-center gap-1 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition duration-200 hover:scale-[1.03] hover:border-white/45 hover:bg-white/20 hover:shadow-[0_4px_16px_-4px_rgba(255,255,255,0.15)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:scale-[0.98]"
                          >
                            <span>{model}</span>
                            <ChevronRight
                              className="size-3.5 shrink-0 text-white/50 transition duration-200 group-hover:translate-x-0.5 group-hover:text-white/90"
                              aria-hidden
                            />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/20 bg-[#060a12]/35 p-5">
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white">
                      <Wrench className="size-4" aria-hidden />
                      RKC services
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-white">
                      {brand.services.map((service) => (
                        <li key={service} className="flex gap-2">
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full"
                            style={{ backgroundColor: brand.color }}
                            aria-hidden
                          />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="rounded-2xl border p-5"
                    style={{
                      borderColor: `color-mix(in srgb, ${brand.color} 35%, transparent)`,
                      backgroundColor: `color-mix(in srgb, ${brand.color} 12%, rgba(6,10,18,0.35))`,
                    }}
                  >
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white">
                      <MapPin className="size-4" aria-hidden />
                      Colorado notes
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white">{brand.coloradoNotes}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-green">
                    Schedule {brand.name} service
                  </Link>
                  <Link href="/services" className="btn-ghost-light">
                    View all services
                  </Link>
                </div>
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>

      <ModelDetailPanel
        model={selectedModel}
        brand={selectedBrand}
        open={selectedModel !== null}
        onClose={closeModelDetail}
      />
    </FadeIn>
  );
}
