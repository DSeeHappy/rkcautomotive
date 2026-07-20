'use client';

import Link from 'next/link';
import { buildModelHubPath } from '@/lib/modelHubRoutes';
import { VEHICLE_BRANDS } from '@/lib/vehicleBrands';
import { getModelsByBrand } from '@/lib/vehicleModels';
import { useLanguage } from '@/lib/language';
import { localizedModelServiceTitle, vehicleCopy } from '@/lib/i18n/vehicleCopy';

const TOP_SERVICES_PER_MODEL = 4;

export default function VehicleDeepDiveCrawlLinks() {
  const { lang } = useLanguage();
  const copy = vehicleCopy(lang).crawl;

  return (
    <section
      id="model-services"
      lang={lang}
      className="scroll-mt-28 border-t border-[color:var(--line)] bg-[color:var(--accent-gray-light)] py-16 sm:py-20"
    >
      <div className="wrap">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-lg text-ink-muted">{copy.intro}</p>
        </div>

        <div className="mt-14 space-y-12">
          {VEHICLE_BRANDS.map((brand) => {
            const models = getModelsByBrand(brand.slug);

            return (
              <div
                key={brand.slug}
                id={brand.slug}
                className="rounded-[1.75rem] border border-[color:var(--line)] bg-white p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[color:var(--line)] pb-5">
                  <h3 className="font-display text-3xl tracking-wide text-primary-blue">{brand.name}</h3>
                  <Link
                    href="/vehicles-we-service#brands"
                    className="text-sm font-semibold text-primary-green hover:text-primary-green-dark"
                  >
                    {copy.brandDiagnostics}
                  </Link>
                </div>

                <ul className="mt-6 grid gap-8 lg:grid-cols-2">
                  {models.map((vehicle) => (
                    <li key={vehicle.slug}>
                      <Link
                        href={buildModelHubPath(vehicle.brand, vehicle.model)}
                        className="font-display text-2xl tracking-wide text-foreground hover:text-primary-green"
                      >
                        {vehicle.model}
                      </Link>
                      <p className="mt-1 text-sm text-ink-muted">{vehicle.yearRange}</p>
                      <ul className="mt-3 space-y-1.5">
                        {vehicle.commonServices.slice(0, TOP_SERVICES_PER_MODEL).map((service) => (
                          <li key={service.id}>
                            <Link
                              href={service.href}
                              className="text-sm font-medium text-primary-blue hover:text-primary-green"
                            >
                              {localizedModelServiceTitle(vehicle.model, service.id, lang)}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {vehicle.commonServices.length > TOP_SERVICES_PER_MODEL ? (
                        <Link
                          href={buildModelHubPath(vehicle.brand, vehicle.model)}
                          className="mt-2 inline-block text-sm font-semibold text-primary-green hover:text-primary-green-dark"
                        >
                          {copy.allServices(vehicle.commonServices.length, vehicle.model)}
                        </Link>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
