'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { ExternalLink, MapPin, Wrench } from 'lucide-react';
import Link from 'next/link';
import { getBrandAccentGlow, getBrandPanelBackground, VEHICLE_BRANDS } from '@/lib/vehicleBrands';
import BrandLogo from './BrandLogo';
import FadeIn from './FadeIn';

export default function BrandTabs() {
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
        <TabList className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {VEHICLE_BRANDS.map((brand) => (
            <Tab
              key={brand.slug}
              className="group flex shrink-0 items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-2.5 text-sm font-semibold text-ink-muted shadow-sm outline-none transition data-selected:border-transparent data-selected:bg-[#0c1222] data-selected:text-white data-selected:shadow-[0_10px_28px_-10px_rgba(12,18,34,0.45)] data-hover:border-primary-green/40 data-hover:text-foreground data-focus-visible:ring-2 data-focus-visible:ring-primary-green/30"
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
                className="absolute inset-0 opacity-90"
                style={{ background: getBrandAccentGlow(brand) }}
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-primary-blue/15"
                aria-hidden
              />

              <div
                className="pointer-events-none absolute -right-[8%] top-1/2 -translate-y-1/2 opacity-[0.11] sm:-right-[4%] sm:opacity-[0.13] lg:-right-[2%] lg:opacity-[0.14]"
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
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.2em]"
                      style={{ color: `color-mix(in srgb, ${brand.color} 55%, white)` }}
                    >
                      {brand.category === 'domestic' ? 'Domestic' : 'Import'} · Serviced at RKC Englewood
                    </p>
                    <h3 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
                      {brand.name} Service
                    </h3>
                  </div>
                  <a
                    href={brand.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-light inline-flex shrink-0 items-center gap-2 self-start px-4 py-2 text-sm"
                  >
                    Visit {brand.name}
                    <ExternalLink className="size-4" aria-hidden />
                  </a>
                </div>

                <div className="mt-8 space-y-5 text-base leading-relaxed text-white/78">
                  {brand.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm">
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
                      <Wrench className="size-4" aria-hidden />
                      Common models
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {brand.commonModels.map((model) => (
                        <li
                          key={model}
                          className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-medium text-white/90"
                        >
                          {model}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm">
                    <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/55">
                      <Wrench className="size-4" aria-hidden />
                      RKC services
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-white/85">
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
                    className="rounded-2xl border p-5 backdrop-blur-sm"
                    style={{
                      borderColor: `color-mix(in srgb, ${brand.color} 35%, transparent)`,
                      backgroundColor: `color-mix(in srgb, ${brand.color} 12%, rgba(255,255,255,0.06))`,
                    }}
                  >
                    <p
                      className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em]"
                      style={{ color: `color-mix(in srgb, ${brand.color} 50%, white)` }}
                    >
                      <MapPin className="size-4" aria-hidden />
                      Colorado notes
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">{brand.coloradoNotes}</p>
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
    </FadeIn>
  );
}
