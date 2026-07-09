'use client';

import { Tab, TabGroup, TabPanel, TabPanels } from '@headlessui/react';
import { AlertTriangle, ChevronRight, MapPin, MousePointerClick, Phone } from 'lucide-react';
import Link from 'next/link';
import { getBrandFailureProfile } from '@/lib/brandFailureProfiles';
import { getBrandReliabilitySnapshot } from '@/lib/brandReliabilityNotes';
import { getBrandAccentGlow, getBrandPanelBackground, VEHICLE_BRANDS } from '@/lib/vehicleBrands';
import { BUSINESS } from '@/lib/constants';
import PhoneLink from '@/app/components/ui/PhoneLink';
import AnimatedBrandTabList from './AnimatedBrandTabList';
import BrandLogo from './BrandLogo';
import BrandModelPicker from './BrandModelPicker';
import FadeIn, { Stagger, StaggerItem } from './FadeIn';

export default function BrandTabs() {
  return (
    <FadeIn className="wrap pb-20 pt-12 sm:pb-24 sm:pt-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">All makes &amp; models</p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          Expert diagnostics for every brand we work on
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          RKC Automotive in Englewood services Toyota, Ford, BMW, Subaru, and every major make on Colorado roads.
          Select a brand for hyper-specific failure profiles, buyer warnings, and local altitude context.
        </p>
      </div>

      <TabGroup>
        <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--accent-gray-light)]/70 p-4 shadow-sm sm:p-5">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <MousePointerClick className="size-4 shrink-0 text-primary-green" aria-hidden />
              <p className="text-sm font-semibold text-foreground sm:text-base">Pick your make</p>
            </div>
            <p className="mt-1.5 pl-6 text-sm leading-relaxed text-ink-muted">
              Tap a brand to see common failures and services for your model
            </p>
          </div>

          <AnimatedBrandTabList aria-label="Vehicle makes" className="flex flex-wrap gap-2 md:gap-2">
            {VEHICLE_BRANDS.map((brand) => (
              <Tab
                key={brand.slug}
                data-brand-tab
                className="brand-tab group flex cursor-pointer items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-3 py-2 text-xs font-semibold text-ink-muted shadow-sm outline-none transition-colors sm:px-4 sm:py-2.5 sm:text-sm data-selected:border-transparent data-selected:bg-[#0c1222] data-selected:text-white data-hover:border-primary-green/40 data-hover:bg-white data-hover:text-foreground data-focus-visible:ring-2 data-focus-visible:ring-primary-green/30"
              >
                <BrandLogo
                  slug={brand.slug}
                  color={brand.color}
                  size={20}
                  className="brand-tab-logo group-data-selected:!bg-white"
                />
                <span className="relative z-[1]">{brand.name}</span>
              </Tab>
            ))}
          </AnimatedBrandTabList>
        </div>

        <TabPanels className="mt-8">
          {VEHICLE_BRANDS.map((brand) => {
            const profile = getBrandFailureProfile(brand.slug);
            const reliabilitySnapshot = getBrandReliabilitySnapshot(brand.slug);

            return (
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
                  className="pointer-events-none absolute -right-[6%] top-1/2 z-[1] -translate-y-1/2 opacity-[0.14] sm:-right-[3%] sm:opacity-[0.18] lg:-right-[1%] lg:opacity-[0.20]"
                  aria-hidden
                >
                  <BrandLogo
                    slug={brand.slug}
                    color="#ffffff"
                    size={320}
                    className="!size-[min(52vw,18rem)] sm:!size-[min(40vw,22rem)] lg:!size-[24rem]"
                  />
                </div>

                <div className="relative z-10 p-6 sm:p-10">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                        {brand.category === 'domestic' ? 'Domestic' : 'Import'} · Serviced at RKC Englewood
                      </p>
                      <h3 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
                        {profile?.name ?? brand.name} Diagnostics
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

                  {profile && reliabilitySnapshot ? (
                    <>
                      <p className="mt-10 text-sm font-semibold text-white/90 sm:text-base">
                        {brand.name} — select your model
                      </p>
                      <Stagger className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-4" stagger={0.06}>
                        <BrandModelPicker brand={brand} reliabilitySnapshot={reliabilitySnapshot} />

                        <StaggerItem className="rounded-2xl border border-white/20 bg-[#060a12]/45 p-5 backdrop-blur-sm">
                          <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                            Hyper-Specific Failure Profiles
                          </p>
                          <div className="mt-4 space-y-5">
                            {profile.failureProfiles.map((failure) => (
                              <div key={failure.title}>
                                <p className="text-sm font-bold leading-snug text-white">{failure.title}</p>
                                <p className="mt-1.5 text-sm leading-relaxed text-white/85">{failure.description}</p>
                              </div>
                            ))}
                          </div>
                        </StaggerItem>

                        <StaggerItem className="relative overflow-hidden rounded-2xl border-2 border-amber-500/50 bg-gradient-to-br from-[#1a1208] via-[#0c1222] to-[#0c1222] p-5 shadow-[0_0_32px_-8px_rgba(245,158,11,0.35)]">
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.14),transparent_60%)]"
                          />
                          <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(239,68,68,0.08),transparent_55%)]"
                          />
                          <div className="relative">
                            <div className="flex items-start gap-3">
                              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/25 ring-2 ring-amber-400/40">
                                <AlertTriangle className="size-5 text-amber-300" aria-hidden />
                              </span>
                              <p className="text-sm font-bold uppercase leading-snug tracking-[0.12em] text-amber-200">
                                🚨 Buyer&apos;s Warning: What to Avoid / Inspect Before Buying
                              </p>
                            </div>
                            <p className="relative mt-4 text-sm font-medium leading-relaxed text-white">
                              {profile.buyerWarning}
                            </p>
                          </div>
                        </StaggerItem>

                        <StaggerItem>
                          <div
                            className="h-full rounded-2xl border p-5 backdrop-blur-sm"
                            style={{
                              borderColor: `color-mix(in srgb, ${brand.color} 35%, transparent)`,
                              backgroundColor: `color-mix(in srgb, ${brand.color} 12%, rgba(6,10,18,0.45))`,
                            }}
                          >
                            <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-white">
                              <MapPin className="size-4 shrink-0" aria-hidden />
                              Colorado Notes
                            </p>
                            <p className="mt-4 text-sm font-medium leading-relaxed text-white">{profile.coloradoNotes}</p>
                          </div>
                        </StaggerItem>
                      </Stagger>
                    </>
                  ) : null}

                  <FadeIn delay={0.12} className="mt-8 flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-green">
                      Schedule {brand.name} Diagnostic
                    </Link>
                    <PhoneLink className="btn-ghost-light inline-flex items-center gap-2">
                      <Phone className="size-4" aria-hidden />
                      Call {BUSINESS.phone}
                    </PhoneLink>
                  </FadeIn>
                </div>
              </TabPanel>
            );
          })}
        </TabPanels>
      </TabGroup>
    </FadeIn>
  );
}
