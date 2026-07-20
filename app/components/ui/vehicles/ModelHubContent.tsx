'use client';

import Link from 'next/link';
import PhoneLink from '@/app/components/ui/PhoneLink';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { BUSINESS } from '@/lib/constants';
import { buildModelHubPath } from '@/lib/modelHubRoutes';
import { useLanguage } from '@/lib/language';
import {
  localizedModelServiceDescription,
  localizedModelServiceTitle,
  localizedVehicleDescription,
  vehicleCopy,
} from '@/lib/i18n/vehicleCopy';
import { localizeReliabilitySnapshot } from '@/lib/i18n/reliabilitySnapshotsEs';
import type { ModelReliabilitySnapshot } from '@/lib/modelReliabilityNotes';
import type { VehicleModel } from '@/lib/vehicleModels';

type ModelHubContentProps = {
  vehicle: VehicleModel;
  image: string;
  brandName: string | undefined;
  siblingModels: VehicleModel[];
  modelSnapshot: ModelReliabilitySnapshot | null;
  heroDescription: string;
};

export default function ModelHubContent({
  vehicle,
  image,
  brandName,
  siblingModels,
  modelSnapshot,
  heroDescription,
}: ModelHubContentProps) {
  const { lang } = useLanguage();
  const copy = vehicleCopy(lang).hub;
  const brand = brandName ?? vehicle.brandName;
  const snapshot =
    modelSnapshot && lang === 'es'
      ? localizeReliabilitySnapshot(modelSnapshot, lang)
      : modelSnapshot;
  const vLabel = vehicleCopy(lang).deepDive.vehicleLabel[vehicle.vehicleType] ?? vehicle.vehicleType;
  const resolvedHero =
    snapshot?.intro ??
    localizedVehicleDescription(vehicle.brandName, vehicle.model, vLabel, lang, heroDescription);

  return (
    <div lang={lang}>
      <PageHero
        eyebrow={`${vehicle.brandName} ${vehicle.model}`}
        title={copy.repairTitle(vehicle.brandName, vehicle.model)}
        description={resolvedHero}
        imageSrc={image}
        imageAlt={
          lang === 'es'
            ? `Servicio ${vehicle.brandName} ${vehicle.model} en RKC Automotive Englewood CO`
            : `${vehicle.brandName} ${vehicle.model} service at RKC Automotive Englewood CO`
        }
        breadcrumbs={[
          { label: copy.home, href: '/' },
          { label: copy.vehiclesCrumb, href: '/vehicles-we-service' },
          { label: `${vehicle.brandName} ${vehicle.model}` },
        ]}
      />

      <section className="border-b border-[color:var(--line)] bg-white py-16 sm:py-20">
        <div className="wrap">
          <FadeIn className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              {copy.modelServices}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              {copy.servicesHeading(vehicle.brandName, vehicle.model)}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              {copy.servicesIntro(vehicle.yearRange, vehicle.brandName, vehicle.model)}
            </p>
          </FadeIn>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {vehicle.commonServices.map((service) => (
              <li key={service.id}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-[color:var(--line)] bg-[var(--background)] px-5 py-4 transition hover:border-primary-green/40 hover:bg-primary-green/5"
                >
                  <span className="font-semibold text-foreground group-hover:text-primary-green">
                    {localizedModelServiceTitle(vehicle.model, service.id, lang)}
                  </span>
                  <span className="mt-2 line-clamp-3 text-sm text-ink-muted">
                    {localizedModelServiceDescription(
                      vehicle.brandName,
                      vehicle.model,
                      service.id,
                      lang,
                      service.description,
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <PhoneLink className="btn-green">{copy.call(BUSINESS.phone)}</PhoneLink>
            <Link
              href={`/contact?vehicle=${encodeURIComponent(`${vehicle.brandName} ${vehicle.model}`)}`}
              className="btn-blue"
            >
              {copy.schedule(vehicle.model)}
            </Link>
          </div>
        </div>
      </section>

      {snapshot ? (
        <section className="border-b border-[color:var(--line)] bg-[color:var(--accent-gray-light)] py-16 sm:py-20">
          <div className="wrap">
            <FadeIn className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
                {copy.atRkc(vehicle.brandName, vehicle.model)}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
                {copy.issuesHeading}
              </h2>
              <p className="mt-4 text-lg text-ink-muted">{snapshot.intro}</p>
            </FadeIn>

            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {snapshot.bullets.map((bullet) => (
                <li
                  key={bullet.label}
                  className="rounded-2xl border border-[color:var(--line)] bg-white p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-green">
                    {bullet.label}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{bullet.text}</p>
                </li>
              ))}
            </ul>

            {snapshot.faqs.length > 0 ? (
              <div className="mt-12">
                <h3 className="font-display text-3xl tracking-wide text-foreground">
                  {copy.faqsHeading(vehicle.model)}
                </h3>
                <dl className="mt-6 space-y-6">
                  {snapshot.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-2xl border border-[color:var(--line)] bg-white p-6">
                      <dt className="font-semibold text-foreground">{faq.question}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-ink-muted">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {siblingModels.length > 0 && brand ? (
        <section className="border-b border-[color:var(--line)] bg-[color:var(--accent-gray-light)] py-16 sm:py-20">
          <div className="wrap">
            <FadeIn className="mb-8 max-w-3xl">
              <h2 className="font-display text-4xl tracking-wide text-foreground">
                {copy.moreModels(brand)}
              </h2>
              <p className="mt-3 text-ink-muted">{copy.moreModelsIntro(brand)}</p>
            </FadeIn>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {siblingModels.map((sibling) => (
                <li key={sibling.slug}>
                  <Link
                    href={buildModelHubPath(sibling.brand, sibling.model)}
                    className="group flex items-center justify-between rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 font-semibold text-foreground transition hover:border-primary-green/40 hover:text-primary-green"
                  >
                    {sibling.model}
                    <span className="opacity-0 transition group-hover:opacity-100" aria-hidden>
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="py-16 sm:py-20">
        <div className="wrap">
          <FadeIn>
            <Link
              href="/vehicles-we-service#model-services"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-blue hover:text-primary-green"
            >
              {copy.allMakes}
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
