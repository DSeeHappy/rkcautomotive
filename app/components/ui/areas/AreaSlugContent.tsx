'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, ArrowLeft } from 'lucide-react';
import { SERVICE_AREAS_DATA, type ServiceArea } from '@/lib/serviceAreas';
import PhoneLink from '@/app/components/ui/PhoneLink';
import { BUSINESS, PHOTOS, TOP_AREA_SERVICES } from '@/lib/constants';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { CrossCityServiceLinks, NearbyCityLinks } from '@/app/components/ui/seo/AdjacentSeoLinks';
import { useLanguage } from '@/lib/language';
import { areaCopy } from '@/lib/i18n/areaCopy';
import { localizedServiceDescription, localizedServiceName } from '@/lib/siteCopy';

type AreaSlugContentProps = {
  area: ServiceArea;
  slug: string;
};

export default function AreaSlugContent({ area, slug }: AreaSlugContentProps) {
  const { lang } = useLanguage();
  const copy = areaCopy(lang);

  return (
    <div lang={lang}>
      <PageHero
        eyebrow={copy.servingEyebrow(area.name)}
        title={copy.heroTitle(area.name)}
        description={area.description}
        breadcrumbs={[
          { label: copy.home, href: '/' },
          { label: copy.areasCrumb, href: '/areas-we-serve' },
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
              {copy.repairHeading(area.name)}
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
                {copy.neighborhoodsHeading(area.name)}
              </h2>
              <p className="mt-4 text-lg text-ink-muted">
                {copy.neighborhoodsIntro(BUSINESS.address.full, area.distanceFromShop, area.name)}
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
                        alt={copy.neighborhoodFlagAlt(n.name)}
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
                  {copy.whyHeading(area.name)}
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
              {copy.popularHeading(area.name)}
            </h2>
            <p className="mt-3 text-ink-muted">
              {copy.popularIntro(area.distanceFromShop, area.name)}
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
                  {copy.serviceInEnglewood(localizedServiceName(service.slug, lang, service.name))}
                </span>
                <p className="mt-1 text-sm text-ink-muted">
                  {localizedServiceDescription(service.slug, lang, service.description)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CrossCityServiceLinks currentSlug={slug} cityName={area.name} />

      <section className="border-y border-[color:var(--line)] bg-[color:var(--accent-gray-light)] py-16 sm:py-20">
        <div className="wrap">
          <FadeIn className="max-w-3xl">
            <h2 className="font-display text-4xl tracking-wide text-foreground">
              {copy.directionsHeading(area.name)}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{area.directions}</p>
            <p className="mt-4 text-sm text-ink-muted">
              {copy.shopAddress}{' '}
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
              <PhoneLink className="btn-green">
                <Phone className="size-5" />
                {BUSINESS.phone}
              </PhoneLink>
              <a
                href={BUSINESS.directionsUrl}
                className="btn-blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="size-5" />
                {copy.getDirections}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <NearbyCityLinks
        currentSlug={slug}
        title={copy.moreAreas}
        intro={copy.moreAreasIntro(SERVICE_AREAS_DATA.length, area.name)}
        className="py-16 sm:py-20"
      />

      <div className="wrap pb-16 sm:pb-20">
        <Link
          href="/areas-we-serve"
          className="inline-flex items-center gap-2 text-sm font-bold text-primary-blue hover:text-primary-green"
        >
          <ArrowLeft className="size-4" />
          {copy.allAreas}
        </Link>
      </div>
    </div>
  );
}
