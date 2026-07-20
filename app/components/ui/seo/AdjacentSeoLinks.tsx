'use client';

import Link from 'next/link';
import FadeIn from '@/app/components/ui/FadeIn';
import {
  getAdjacentCities,
  getFeaturedServiceCities,
} from '@/lib/adjacentSeoLinks';
import { TOP_AREA_SERVICES } from '@/lib/constants';
import type { ServiceArea } from '@/lib/serviceAreas';
import { useLanguage } from '@/lib/language';
import { areaCopy } from '@/lib/i18n/areaCopy';
import { serviceCopy } from '@/lib/i18n/serviceCopy';
import { localizedServiceDescription, localizedServiceName } from '@/lib/siteCopy';

type LinkCardProps = {
  href: string;
  label: string;
  description?: string;
};

function SeoLinkCard({ href, label, description }: LinkCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 transition hover:border-primary-green/40 hover:bg-primary-green/5"
    >
      <span className="font-semibold text-foreground group-hover:text-primary-green">{label}</span>
      {description ? <p className="mt-1 text-sm text-ink-muted">{description}</p> : null}
    </Link>
  );
}

type NearbyCityLinksProps = {
  currentSlug: string;
  title?: string;
  intro?: string;
  className?: string;
};

export function NearbyCityLinks({
  currentSlug,
  title,
  intro,
  className = 'py-16 sm:py-20',
}: NearbyCityLinksProps) {
  const { lang } = useLanguage();
  const copy = areaCopy(lang);
  const adjacent = getAdjacentCities(currentSlug);

  if (adjacent.length === 0) return null;

  return (
    <section className={`border-t border-[color:var(--line)] ${className}`}>
      <div className="wrap">
        <FadeIn className="mb-10 max-w-3xl">
          <h2 className="font-display text-4xl tracking-wide text-foreground">
            {title ?? copy.nearbyTitle}
          </h2>
          {intro ? <p className="mt-3 text-ink-muted">{intro}</p> : null}
        </FadeIn>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {adjacent.map((area) => (
            <SeoLinkCard
              key={area.slug}
              href={area.href}
              label={copy.autoRepairIn(area.name)}
              description={copy.fromShop(area.distanceFromShop)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type CrossCityServiceLinksProps = {
  currentSlug: string;
  cityName: string;
  title?: string;
  intro?: string;
};

export function CrossCityServiceLinks({
  currentSlug,
  cityName,
  title,
  intro,
}: CrossCityServiceLinksProps) {
  const { lang } = useLanguage();
  const copy = areaCopy(lang);
  const adjacent = getAdjacentCities(currentSlug, 6);

  if (adjacent.length === 0) return null;

  const links = TOP_AREA_SERVICES.slice(0, 6).map((service, index) => {
    const nearby = adjacent[index % adjacent.length];
    const name = localizedServiceName(service.slug, lang, service.name);
    const description = localizedServiceDescription(service.slug, lang, service.description);
    return {
      href: service.href,
      label: copy.crossCityLabel(name, nearby.name),
      description: copy.crossCityDesc(description, nearby.distanceFromShop, nearby.name),
    };
  });

  return (
    <section className="border-t border-[color:var(--line)] bg-[color:var(--accent-gray-light)] py-16 sm:py-20">
      <div className="wrap">
        <FadeIn className="mb-10 max-w-3xl">
          <h2 className="font-display text-4xl tracking-wide text-foreground">
            {title ?? copy.crossCityTitle(cityName)}
          </h2>
          <p className="mt-3 text-ink-muted">{intro ?? copy.crossCityIntro(cityName)}</p>
        </FadeIn>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <SeoLinkCard key={link.label} href={link.href} label={link.label} description={link.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceNearYouLinksProps = {
  serviceLabel: string;
  cities?: ServiceArea[];
};

export function ServiceNearYouLinks({ serviceLabel, cities }: ServiceNearYouLinksProps) {
  const { lang } = useLanguage();
  const svc = serviceCopy(lang).areaServed;
  const featured = cities ?? getFeaturedServiceCities();

  if (featured.length === 0) return null;

  return (
    <FadeIn delay={0.12} className="mt-10">
      <h3 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
        {svc.nearYou(serviceLabel)}
      </h3>
      <p className="mt-3 max-w-3xl text-ink-muted">
        {lang === 'es'
          ? 'Nuestro taller en Englewood atiende conductores del sur del área metro de Denver — agende el mismo servicio desde cualquiera de estas ciudades.'
          : 'Our Englewood shop serves drivers across the south Denver metro — schedule the same service from any of these cities.'}
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((city) => (
          <li key={city.slug}>
            <Link
              href={city.href}
              className="group block rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 transition hover:border-primary-green/40 hover:bg-primary-green/5"
            >
              <span className="font-semibold text-foreground group-hover:text-primary-green">
                {svc.forDrivers(serviceLabel, city.name)}
              </span>
              <span className="mt-1 block text-sm text-ink-muted">
                {svc.fromShop(city.distanceFromShop)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
