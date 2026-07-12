import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/app/components/JsonLd';
import PhoneLink from '@/app/components/ui/PhoneLink';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { BUSINESS } from '@/lib/constants';
import { buildModelHubPath, getAllModelHubParams } from '@/lib/modelHubRoutes';
import { getModelReliabilitySnapshot } from '@/lib/modelReliabilityNotes';
import { createPageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createItemListSchema, createWebPageSchema } from '@/lib/seo';
import { getModelsByBrand, resolveModelImage } from '@/lib/vehicleModels';
import { slugifyModel } from '@/lib/modelCommonServices';
import { getBrandBySlug } from '@/lib/vehicleBrands';

type PageProps = {
  params: Promise<{ make: string; model: string }>;
};

export function generateStaticParams() {
  return getAllModelHubParams();
}

export async function generateMetadata({ params }: PageProps) {
  const { make, model } = await params;
  const vehicle = getModelsByBrand(make).find(
    (m) => slugifyModel(m.model) === model,
  );
  if (!vehicle) return {};

  const path = buildModelHubPath(make, vehicle.model);
  const image = resolveModelImage(vehicle);

  return createPageMetadata({
    title: `${vehicle.brandName} ${vehicle.model} Repair in Englewood, CO`,
    description: `RKC Automotive services ${vehicle.brandName} ${vehicle.model} in Englewood, CO — ${vehicle.commonServices.length} model-specific repair guides, factory maintenance, and ASE-certified diagnostics.`,
    path,
    image,
    imageAlt: `${vehicle.brandName} ${vehicle.model} service at RKC Automotive Englewood CO`,
  });
}

export default async function VehicleModelHubPage({ params }: PageProps) {
  const { make, model } = await params;
  const vehicle = getModelsByBrand(make).find(
    (m) => slugifyModel(m.model) === model,
  );
  if (!vehicle) notFound();

  const brand = getBrandBySlug(make);
  const hubPath = buildModelHubPath(make, vehicle.model);
  const image = resolveModelImage(vehicle);
  const siblingModels = getModelsByBrand(make).filter((m) => m.slug !== vehicle.slug);
  const modelSnapshot = getModelReliabilitySnapshot(make, model);
  const heroDescription = modelSnapshot?.intro ?? vehicle.description;

  return (
    <div>
      <JsonLd
        data={[
          createWebPageSchema(
            `${vehicle.brandName} ${vehicle.model} Service`,
            vehicle.description,
            hubPath,
          ),
          createItemListSchema(
            `${vehicle.brandName} ${vehicle.model} services at RKC Automotive`,
            vehicle.commonServices.map((service) => ({
              name: service.title,
              url: service.href,
              description: service.description,
            })),
          ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Vehicles We Service', path: '/vehicles-we-service' },
            { name: `${vehicle.brandName} ${vehicle.model}`, path: hubPath },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`${vehicle.brandName} ${vehicle.model}`}
        title={`${vehicle.brandName} ${vehicle.model} repair in Englewood`}
        description={heroDescription}
        imageSrc={image}
        imageAlt={`${vehicle.brandName} ${vehicle.model} service at RKC Automotive Englewood CO`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Vehicles We Service', href: '/vehicles-we-service' },
          { label: `${vehicle.brandName} ${vehicle.model}` },
        ]}
      />

      <section className="border-b border-[color:var(--line)] bg-white py-16 sm:py-20">
        <div className="wrap">
          <FadeIn className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Model services</p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              {vehicle.brandName} {vehicle.model} services we perform
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Every guide below is written for the {vehicle.yearRange} {vehicle.brandName} {vehicle.model} — Colorado
              altitude, severe-service wear, and the failure patterns we see at our Englewood shop.
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
                    {service.title}
                  </span>
                  <span className="mt-2 line-clamp-3 text-sm text-ink-muted">{service.description}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <PhoneLink className="btn-green">
              Call {BUSINESS.phone}
            </PhoneLink>
            <Link
              href={`/contact?vehicle=${encodeURIComponent(`${vehicle.brandName} ${vehicle.model}`)}`}
              className="btn-blue"
            >
              Schedule {vehicle.model} service
            </Link>
          </div>
        </div>
      </section>

      {modelSnapshot ? (
        <section className="border-b border-[color:var(--line)] bg-[color:var(--accent-gray-light)] py-16 sm:py-20">
          <div className="wrap">
            <FadeIn className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
                {vehicle.brandName} {vehicle.model} at RKC
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
                Model-specific issues we see in Colorado
              </h2>
              <p className="mt-4 text-lg text-ink-muted">{modelSnapshot.intro}</p>
            </FadeIn>

            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {modelSnapshot.bullets.map((bullet) => (
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

            {modelSnapshot.faqs.length > 0 ? (
              <div className="mt-12">
                <h3 className="font-display text-3xl tracking-wide text-foreground">
                  {vehicle.model} FAQs
                </h3>
                <dl className="mt-6 space-y-6">
                  {modelSnapshot.faqs.map((faq) => (
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
              <h2 className="font-display text-4xl tracking-wide text-foreground">More {brand.name} models we service</h2>
              <p className="mt-3 text-ink-muted">
                Browse other {brand.name} model hubs or return to the full makes list.
              </p>
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
              ← All makes &amp; models
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
