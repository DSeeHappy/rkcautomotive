import {
  BUSINESS,
  FACEBOOK_URL,
  GOOGLE_REVIEWS_URL,
  INSTAGRAM_URL,
  OPENING_HOURS_SCHEMA,
  SERVICES,
  VERIFIED_REVIEWS_4_PLUS,
  YAHOO_LOCAL_URL,
  type FAQItem,
} from './constants';
import { SERVICE_AREAS_DATA } from './serviceAreas';
import { PHOTOS } from './photos';
import { absoluteUrl, SITE_URL } from './og';

export const BUSINESS_GEO = {
  latitude: 39.6785,
  longitude: -105.0125,
} as const;

export type BreadcrumbItem = { name: string; path?: string };

const POSTAL_ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.city,
  addressRegion: BUSINESS.address.state,
  postalCode: BUSINESS.address.zip,
  addressCountry: 'US',
};

const SAME_AS = [FACEBOOK_URL, INSTAGRAM_URL, GOOGLE_REVIEWS_URL, YAHOO_LOCAL_URL];

/** All indexable routes for sitemap and SEO verification */
export function getAllSiteRoutes(): string[] {
  return [
    '/',
    '/about',
    '/contact',
    '/pricing',
    '/services',
    '/englewood-co-auto-repair',
    '/frequently-asked-questions',
    '/areas-we-serve',
    '/vehicles-we-service',
    ...SERVICES.map((s) => s.href),
    ...SERVICE_AREAS_DATA.map((a) => a.href),
  ];
}

export function createAggregateRating() {
  const rated = VERIFIED_REVIEWS_4_PLUS.filter((r) => r.rating !== undefined);
  if (rated.length === 0) return undefined;

  const sum = rated.reduce((acc, r) => acc + (r.rating ?? 0), 0);
  const avg = sum / rated.length;

  return {
    '@type': 'AggregateRating' as const,
    ratingValue: avg.toFixed(1),
    reviewCount: String(rated.length),
    bestRating: '5',
    worstRating: '4',
  };
}

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: absoluteUrl('/images/logo.png'),
    image: absoluteUrl(PHOTOS.exterior),
    telephone: '+1-720-749-3965',
    email: BUSINESS.email,
    address: POSTAL_ADDRESS,
    sameAs: SAME_AS,
    description: BUSINESS.shortDescription,
  };
}

export function createWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
  };
}

type LocalBusinessOptions = {
  pageUrl?: string;
  description?: string;
  areaServed?: string | { name: string; type?: 'City' | 'AdministrativeArea' };
  includeRating?: boolean;
};

export function createLocalBusinessSchema(options: LocalBusinessOptions = {}) {
  const {
    pageUrl = '/',
    description = BUSINESS.shortDescription,
    areaServed = 'Englewood',
    includeRating = true,
  } = options;

  const areaServedValue =
    typeof areaServed === 'string'
      ? { '@type': 'City' as const, name: areaServed }
      : {
          '@type': areaServed.type ?? ('City' as const),
          name: areaServed.name,
          containedInPlace: { '@type': 'State' as const, name: 'Colorado' },
        };

  const aggregateRating = includeRating ? createAggregateRating() : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${absoluteUrl(pageUrl)}#business`,
    name: BUSINESS.name,
    image: absoluteUrl(PHOTOS.exterior),
    url: absoluteUrl(pageUrl),
    telephone: '+1-720-749-3965',
    email: BUSINESS.email,
    priceRange: '$$',
    description,
    address: POSTAL_ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: String(BUSINESS_GEO.latitude),
      longitude: String(BUSINESS_GEO.longitude),
    },
    openingHoursSpecification: OPENING_HOURS_SCHEMA,
    areaServed: areaServedValue,
    sameAs: SAME_AS,
    ...(aggregateRating ? { aggregateRating } : {}),
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function createServiceSchema(
  serviceType: string,
  description: string,
  servicePath: string,
  areaName = 'Englewood',
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    name: serviceType,
    description,
    url: absoluteUrl(servicePath),
    provider: {
      '@type': 'AutoRepair',
      name: BUSINESS.name,
      url: SITE_URL,
      telephone: '+1-720-749-3965',
      address: POSTAL_ADDRESS,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: String(BUSINESS_GEO.latitude),
        longitude: String(BUSINESS_GEO.longitude),
      },
      openingHoursSpecification: OPENING_HOURS_SCHEMA,
    },
    areaServed: {
      '@type': 'City',
      name: areaName,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
  };
}

export function createFAQPageSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function createContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact RKC Automotive',
    url: absoluteUrl('/contact'),
    mainEntity: {
      '@type': 'AutoRepair',
      name: BUSINESS.name,
      telephone: '+1-720-749-3965',
      email: BUSINESS.email,
      address: POSTAL_ADDRESS,
      url: SITE_URL,
    },
  };
}

export function createAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `About ${BUSINESS.name}`,
    url: absoluteUrl('/about'),
    description:
      'Learn about RKC Automotive — ASE-certified auto repair in Englewood, CO with 30+ years of honest service.',
    mainEntity: { '@id': `${SITE_URL}/#organization` },
  };
}

export function createItemListSchema(
  name: string,
  items: { name: string; url: string; description?: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.url),
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

export function createWebPageSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  };
}

/** Serialize one or more JSON-LD objects for dangerouslySetInnerHTML */
export function jsonLdHtml(...schemas: object[]): string {
  return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
}
