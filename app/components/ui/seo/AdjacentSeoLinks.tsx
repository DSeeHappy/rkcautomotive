import Link from 'next/link';
import FadeIn from '@/app/components/ui/FadeIn';
import {
  getAdjacentCities,
  getCrossCityServiceLinks,
  getFeaturedServiceCities,
  type CrossCityServiceLink,
} from '@/lib/adjacentSeoLinks';
import type { ServiceArea } from '@/lib/serviceAreas';

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
  title = 'Nearby cities we serve',
  intro,
  className = 'py-16 sm:py-20',
}: NearbyCityLinksProps) {
  const adjacent = getAdjacentCities(currentSlug);

  if (adjacent.length === 0) return null;

  return (
    <section className={`border-t border-[color:var(--line)] ${className}`}>
      <div className="wrap">
        <FadeIn className="mb-10 max-w-3xl">
          <h2 className="font-display text-4xl tracking-wide text-foreground">{title}</h2>
          {intro ? <p className="mt-3 text-ink-muted">{intro}</p> : null}
        </FadeIn>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {adjacent.map((area) => (
            <SeoLinkCard
              key={area.slug}
              href={area.href}
              label={`Auto repair in ${area.name}, CO`}
              description={`${area.distanceFromShop} from our Englewood shop`}
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
  const links = getCrossCityServiceLinks(currentSlug);

  if (links.length === 0) return null;

  return (
    <section className="border-t border-[color:var(--line)] bg-[color:var(--accent-gray-light)] py-16 sm:py-20">
      <div className="wrap">
        <FadeIn className="mb-10 max-w-3xl">
          <h2 className="font-display text-4xl tracking-wide text-foreground">
            {title ?? `Popular services near ${cityName}`}
          </h2>
          <p className="mt-3 text-ink-muted">
            {intro ??
              `Same Englewood shop — hub service pages for drivers in ${cityName} and neighboring cities.`}
          </p>
        </FadeIn>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link: CrossCityServiceLink) => (
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
  const featured = cities ?? getFeaturedServiceCities();

  if (featured.length === 0) return null;

  return (
    <FadeIn delay={0.12} className="mt-10">
      <h3 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
        {serviceLabel} near you
      </h3>
      <p className="mt-3 max-w-3xl text-ink-muted">
        Our Englewood shop serves drivers across the south Denver metro — schedule the same service from any of
        these cities.
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((area) => (
          <li key={area.slug}>
            <Link
              href={area.href}
              className="group block rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 transition hover:border-primary-green/40 hover:bg-primary-green/5"
            >
              <span className="font-semibold text-foreground group-hover:text-primary-green">
                {serviceLabel} for {area.name} drivers
              </span>
              <span className="mt-1 block text-sm text-ink-muted">{area.distanceFromShop} from shop</span>
            </Link>
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
