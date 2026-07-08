'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { ExternalLink, MapPin, Wrench } from 'lucide-react';
import Link from 'next/link';
import { VEHICLE_BRANDS } from '@/lib/vehicleBrands';
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
              className="group flex shrink-0 items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-4 py-2.5 text-sm font-semibold text-ink-muted outline-none transition data-selected:border-primary-green data-selected:bg-primary-green/[0.08] data-selected:text-primary-green data-hover:border-primary-green/40 data-hover:text-foreground data-focus-visible:ring-2 data-focus-visible:ring-primary-green/30"
            >
              <BrandLogo slug={brand.slug} color={brand.color} size={20} />
              <span>{brand.name}</span>
            </Tab>
          ))}
        </TabList>

        <TabPanels className="mt-8">
          {VEHICLE_BRANDS.map((brand) => (
            <TabPanel
              key={brand.slug}
              className="rounded-[2rem] border border-[color:var(--line)] bg-white p-6 shadow-[0_24px_64px_-32px_rgba(12,18,34,0.18)] sm:p-10"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="flex size-16 items-center justify-center rounded-2xl sm:size-20"
                    style={{ backgroundColor: `${brand.color}14` }}
                  >
                    <BrandLogo slug={brand.slug} color={brand.color} size={40} className="sm:!size-12" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue">
                      {brand.category === 'domestic' ? 'Domestic' : 'Import'} · Serviced at RKC Englewood
                    </p>
                    <h3 className="mt-1 font-display text-3xl tracking-wide text-foreground sm:text-4xl">
                      {brand.name} Service
                    </h3>
                  </div>
                </div>
                <a
                  href={brand.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[color:var(--line)] px-4 py-2 text-sm font-semibold text-primary-blue transition hover:border-primary-blue/30 hover:bg-primary-blue/[0.04]"
                >
                  Visit {brand.name}
                  <ExternalLink className="size-4" aria-hidden />
                </a>
              </div>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-muted">
                {brand.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl bg-accent-gray-light/70 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary-blue">
                    <Wrench className="size-4" aria-hidden />
                    Common models
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {brand.commonModels.map((model) => (
                      <li
                        key={model}
                        className="rounded-full bg-white px-3 py-1 text-sm font-medium text-foreground shadow-sm"
                      >
                        {model}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-accent-gray-light/70 p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary-green">
                    <Wrench className="size-4" aria-hidden />
                    RKC services
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground">
                    {brand.services.map((service) => (
                      <li key={service} className="flex gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary-green" aria-hidden />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-primary-green/15 bg-primary-green/[0.04] p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary-green">
                    <MapPin className="size-4" aria-hidden />
                    Colorado notes
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{brand.coloradoNotes}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-green">
                  Schedule {brand.name} service
                </Link>
                <Link href="/services" className="btn-blue">
                  View all services
                </Link>
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </FadeIn>
  );
}
