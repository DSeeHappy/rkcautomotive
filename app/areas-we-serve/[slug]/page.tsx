import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, ArrowLeft } from 'lucide-react';
import {
  getAllServiceAreaSlugs,
  getServiceAreaBySlug,
  SERVICE_AREAS_DATA,
} from '@/lib/serviceAreas';
import JsonLd from '@/app/components/JsonLd';
import { BUSINESS, PHOTOS, TOP_AREA_SERVICES } from '@/lib/constants';
import { createBreadcrumbSchema, createLocalBusinessSchema } from '@/lib/seo';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { createPageMetadata } from '@/lib/og';
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return { title: 'Area Not Found' };

  return createPageMetadata({
    title: `Auto Repair in ${area.name}, CO`,
    description: area.metaDescription,
    path: area.href,
    image: PHOTOS.exterior,
    imageAlt: `Auto repair serving ${area.name}, CO from RKC Automotive in Englewood`,
  });
}

export default async function CityServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) notFound();

  const otherAreas = SERVICE_AREAS_DATA.filter((a) => a.slug !== slug).slice(0, 6);

  return (
    <div>
      <JsonLd
        data={[
          createLocalBusinessSchema({
            pageUrl: area.href,
            description: area.metaDescription,
            areaServed: { name: area.name, type: 'City' },
            includeRating: true,
          }),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Areas We Serve', path: '/areas-we-serve' },
            { name: `${area.name}, CO`, path: area.href },
          ]),
        ]}
      />

      <PageHero
        eyebrow={`Serving ${area.name}, CO`}
        title={`Auto repair for ${area.name} & nearby neighborhoods`}
        description={area.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Areas We Serve', href: '/areas-we-serve' },
          { label: area.name },
        ]}
        imageSrc={PHOTOS.exterior}
        imageAlt={`Auto repair serving ${area.name}, CO from RKC Automotive in Englewood`}
      />

      <section className="border-b border-[color:var(--line)] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[color:var(--line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {area.whyChoose.slice(0, 3).map((item) => (
            <div key={item} className="flex items-center gap-3 px-6 py-5">
              <span className="size-2 shrink-0 rounded-full bg-primary-green" />
              <p className="text-sm font-semibold text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="wrap">
          <FadeIn className="max-w-3xl">
            <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              Auto repair for {area.name} drivers
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{area.description}</p>
            {area.localParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="mt-4 text-lg leading-relaxed text-ink-muted">
                {paragraph}
              </p>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-7">
              <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
                Neighborhoods we serve in {area.name}
              </h2>
              <p className="mt-4 text-lg text-ink-muted">
                RKC Automotive at {BUSINESS.address.full} is {area.distanceFromShop} from{' '}
                {area.name}. We welcome drivers from these neighborhoods and surrounding areas.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {area.neighborhoods.map((n) => (
                  <li
                    key={n.name}
                    className="flex items-center gap-3 rounded-xl border border-[color:var(--line)] bg-white px-4 py-3 text-sm font-semibold text-foreground"
                  >
                    <span className="relative size-6 shrink-0 overflow-hidden rounded-sm ring-1 ring-[color:var(--line)]">
                      <Image
                        src={n.flag}
                        alt={`${n.name} neighborhood flag`}
                        fill
                        sizes="24px"
                        className="object-cover"
                      />
                    </span>
                    {n.name}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-5">
              <div className="rounded-3xl border border-[color:var(--line)] bg-white p-8">
                <h3 className="font-display text-3xl tracking-wide text-primary-blue">
                  Why {area.name} drivers choose RKC
                </h3>
                <ul className="mt-6 space-y-4">
                  {area.whyChoose.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--line)] bg-[color:var(--accent-gray-light)] py-16 sm:py-20">
        <div className="wrap">
          <FadeIn className="mb-10 max-w-3xl">
            <h2 className="font-display text-4xl tracking-wide text-foreground">
              Popular services for {area.name} drivers
            </h2>
            <p className="mt-3 text-ink-muted">
              From our Englewood shop on W Evans Ave — {area.distanceFromShop} from {area.name} — we handle the repairs
              neighbors call about most.
            </p>
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TOP_AREA_SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 transition hover:border-primary-green/40 hover:text-primary-green"
              >
                <span className="font-semibold text-foreground group-hover:text-primary-green">
                  {service.name} in Englewood
                </span>
                <p className="mt-1 text-sm text-ink-muted">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[color:var(--line)] bg-[color:var(--accent-gray-light)] py-16 sm:py-20">
        <div className="wrap">
          <FadeIn className="max-w-3xl">
            <h2 className="font-display text-4xl tracking-wide text-foreground">
              Directions from {area.name}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{area.directions}</p>
            <p className="mt-4 text-sm text-ink-muted">
              Shop address:{' '}
              <a
                href={BUSINESS.directionsUrl}
                className="font-semibold text-primary-blue hover:text-primary-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                {BUSINESS.address.full}
              </a>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={BUSINESS.phoneHref} className="btn-green">
                <Phone className="size-5" />
                {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.directionsUrl}
                className="btn-blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="size-5" />
                Get directions
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="wrap">
          <FadeIn className="mb-10">
            <h2 className="font-display text-4xl tracking-wide text-foreground">
              More areas we serve
            </h2>
            <p className="mt-3 text-ink-muted">
              RKC Automotive serves {SERVICE_AREAS_DATA.length} cities across the south Denver metro.
            </p>
          </FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={a.href}
                className="group flex items-center justify-between rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 font-semibold text-foreground transition hover:border-primary-green/40 hover:text-primary-green"
              >
                {a.name}, CO
                <span className="opacity-0 transition group-hover:opacity-100">→</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/areas-we-serve"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-blue hover:text-primary-green"
            >
              <ArrowLeft className="size-4" />
              All service areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
