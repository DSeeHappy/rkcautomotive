'use client';

import { Tab, TabGroup, TabPanel, TabPanels } from '@headlessui/react';
import { AlertTriangle, ChevronRight, MapPin, MousePointerClick, Phone } from 'lucide-react';
import Link from 'next/link';
import { getBrandFailureProfile } from '@/lib/brandFailureProfiles';
import { getBrandReliabilitySnapshot } from '@/lib/brandReliabilityNotes';
import { getBrandAccentGlow, getBrandPanelBackground, VEHICLE_BRANDS } from '@/lib/vehicleBrands';
import { BUSINESS } from '@/lib/constants';
import { useLanguage } from '@/lib/language';
import { siteCopy } from '@/lib/siteCopy';
import { BRAND_CONTENT_ES } from '@/lib/i18n/brandContentEs';
import PhoneLink from '@/app/components/ui/PhoneLink';
import AnimatedBrandTabList from './AnimatedBrandTabList';
import BrandLogo from './BrandLogo';
import BrandModelPicker from './BrandModelPicker';
import FadeIn, { Stagger, StaggerItem } from './FadeIn';

export default function BrandTabs({ plainPanelTitles = false }: { plainPanelTitles?: boolean }) {
  const { lang } = useLanguage();
  const brandsCopy = siteCopy(lang).brand;

  return (
    <FadeIn className="wrap pb-20 pt-12 sm:pb-24 sm:pt-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
          {brandsCopy.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          {brandsCopy.title}
        </h2>
        <p className="mt-4 text-lg text-ink-muted">{brandsCopy.intro}</p>
      </div>

      <TabGroup>
        <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--accent-gray-light)]/70 p-4 shadow-sm sm:p-5">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <MousePointerClick className="size-4 shrink-0 text-primary-green" aria-hidden />
              <p className="text-sm font-semibold text-foreground sm:text-base">{brandsCopy.pickMake}</p>
            </div>
            <p className="mt-1.5 pl-6 text-sm leading-relaxed text-ink-muted">{brandsCopy.tapBrand}</p>
          </div>

          <AnimatedBrandTabList aria-label={brandsCopy.ariaMakes} className="flex flex-wrap gap-2 md:gap-2">
            {VEHICLE_BRANDS.map((brand) => (
              <Tab
                key={brand.slug}
                data-brand-tab
                aria-label={brandsCopy.brandAria(brand.name)}
                className="brand-tab group flex cursor-pointer items-center gap-2 rounded-full border border-[color:var(--line)] bg-white px-3 py-2 text-xs font-semibold text-ink-muted shadow-sm outline-none transition-colors sm:px-4 sm:py-2.5 sm:text-sm data-selected:border-transparent data-selected:bg-[#0c1222] data-selected:text-white data-hover:border-primary-green/40 data-hover:bg-white data-hover:text-foreground data-focus-visible:ring-2 data-focus-visible:ring-primary-green/30"
              >
                <BrandLogo
                  slug={brand.slug}
                  color={brand.color}
                  size={20}
                  src={brand.logoPath}
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
            const es = lang === 'es' ? BRAND_CONTENT_ES[brand.slug] : undefined;
            const failureProfiles = es?.failureProfiles ?? profile?.failureProfiles ?? [];
            const buyerWarning = es?.buyerWarning ?? profile?.buyerWarning ?? '';
            const coloradoNotes = es?.coloradoNotes ?? profile?.coloradoNotes ?? '';
            const brandName = profile?.name ?? brand.name;

            return (
              <TabPanel
                key={brand.slug}
                unmount={false}
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
                    src={brand.logoPath}
                    className="!size-[min(52vw,18rem)] sm:!size-[min(40vw,22rem)] lg:!size-[24rem]"
                  />
                </div>

                <div className="relative z-10 p-6 sm:p-10">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                        {brand.category === 'domestic' ? brandsCopy.domestic : brandsCopy.import} ·{' '}
                        {brandsCopy.servicedAt}
                      </p>
                      {plainPanelTitles ? (
                        <p className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
                          {brandName} {brandsCopy.diagnostics}
                        </p>
                      ) : (
                        <h3 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
                          {brandName} {brandsCopy.diagnostics}
                        </h3>
                      )}
                    </div>
                    <Link
                      href="/vehicles-we-service#brands"
                      className="btn-ghost-light inline-flex shrink-0 items-center gap-2 self-start px-4 py-2 text-sm"
                    >
                      {brandsCopy.allInfo(brand.name)}
                      <ChevronRight className="size-4" aria-hidden />
                    </Link>
                  </div>

                  {profile ? (
                    <>
                      <p className="mt-10 text-sm font-semibold text-white/90 sm:text-base">
                        {brandsCopy.pickModel(brand.name)}
                      </p>
                      <Stagger className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-4" stagger={0.06}>
                        {reliabilitySnapshot ? (
                          <BrandModelPicker brand={brand} reliabilitySnapshot={reliabilitySnapshot} />
                        ) : null}

                        <StaggerItem className="rounded-2xl border border-white/20 bg-[#060a12]/45 p-5 backdrop-blur-sm">
                          <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                            {brandsCopy.failureProfiles}
                          </p>
                          <div className="mt-4 space-y-5">
                            {failureProfiles.map((failure) => (
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
                                🚨 {brandsCopy.buyerWarning}
                              </p>
                            </div>
                            <p className="relative mt-4 text-sm font-medium leading-relaxed text-white">
                              {buyerWarning}
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
                              {brandsCopy.coloradoNotes}
                            </p>
                            <p className="mt-4 text-sm font-medium leading-relaxed text-white">{coloradoNotes}</p>
                          </div>
                        </StaggerItem>
                      </Stagger>
                    </>
                  ) : null}

                  <FadeIn delay={0.12} className="mt-8 flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-green">
                      {brandsCopy.scheduleDiagnostic(brand.name)}
                    </Link>
                    <PhoneLink className="btn-ghost-light inline-flex items-center gap-2">
                      <Phone className="size-4" aria-hidden />
                      {brandsCopy.call(BUSINESS.phone)}
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
