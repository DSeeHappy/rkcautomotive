import type { MetadataRoute } from 'next';
import {
  BUSINESS,
  OPENING_HOURS_SCHEMA,
  SAME_AS,
  SERVICE_AREAS,
  SERVICES,
  type FAQItem,
} from './constants';
import { SERVICE_AREAS_DATA } from './serviceAreas';
import { PHOTOS } from './photos';
import { absoluteUrl, SITE_URL } from './og';
import { getAllModelDeepDiveRoutes } from './modelDeepDiveRoutes';
import { getAllModelHubRoutes } from './modelHubRoutes';

/** AutoRepair is a LocalBusiness subtype; LocalBusiness first helps NAP auditors that match that type literally. */
const LOCAL_BUSINESS_TYPES = ['LocalBusiness', 'AutoRepair'] as const;

export const SITEMAP_SHARD_IDS = ['core', 'services', 'cities', 'vehicles'] as const;
export type SitemapShardId = (typeof SITEMAP_SHARD_IDS)[number];
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;

/** Stable fragment ids — homepage uses `/#frag` so @id always includes a slash before `#`. */
export function schemaEntityId(pagePath: string, fragment: string): string {
  const url = absoluteUrl(pagePath);
  if (url === SITE_URL || pagePath === '/') {
    return `${SITE_URL}/#${fragment}`;
  }
  return `${url}#${fragment}`;
}

const CORE_ROUTES = [
  '/',
  '/about',
  '/reviews',
  '/contact',
  '/pricing',
  '/warranty',
  '/services',
  '/englewood-co-auto-repair',
  '/frequently-asked-questions',
  '/privacy',
  '/terms',
  '/areas-we-serve',
  '/vehicles-we-service',
] as const;

export const BUSINESS_GEO = {
  latitude: 39.6784,
  longitude: -105.0125,
} as const;

const HOMEPAGE_AUTO_REPAIR_DESCRIPTION =
  'RKC Automotive provides reliable auto repair, engine diagnostics, brake service, oil changes, and preventative maintenance in Englewood, Colorado and the Denver metro area.';

const HOMEPAGE_AREA_SERVED = [
  { '@type': 'AdministrativeArea' as const, name: 'Englewood, CO' },
  { '@type': 'AdministrativeArea' as const, name: 'Denver, CO' },
  { '@type': 'AdministrativeArea' as const, name: 'Littleton, CO' },
  { '@type': 'AdministrativeArea' as const, name: 'Lakewood, CO' },
  { '@type': 'AdministrativeArea' as const, name: 'Centennial, CO' },
];

const HAS_MAP_URL =
  'https://maps.google.com/?q=2120+W+Evans+Ave,+Englewood,+CO+80110';

export type BreadcrumbItem = { name: string; path?: string };

const POSTAL_ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.city,
  addressRegion: BUSINESS.address.state,
  postalCode: BUSINESS.address.zip,
  addressCountry: 'US',
};

const SCHEMA_OPENING_HOURS = ['Mo-Fr 08:00-18:00', 'Sa 08:00-12:00'] as const;

const DEFAULT_AREA_SERVED = SERVICE_AREAS.map((name) => ({
  '@type': 'City' as const,
  name,
  containedInPlace: { '@type': 'State' as const, name: 'Colorado' },
}));

/** Routes grouped for sharded sitemaps */
export function getCoreRoutes(): string[] {
  return [...CORE_ROUTES];
}

export function getServiceRoutes(): string[] {
  return SERVICES.map((s) => s.href);
}

export function getCityRoutes(): string[] {
  return SERVICE_AREAS_DATA.map((a) => a.href);
}

export function getVehicleRoutes(): string[] {
  return [...getAllModelHubRoutes(), ...getAllModelDeepDiveRoutes()];
}

export function getRoutesForSitemapShard(shardId: SitemapShardId): string[] {
  switch (shardId) {
    case 'core':
      return getCoreRoutes();
    case 'services':
      return getServiceRoutes();
    case 'cities':
      return getCityRoutes();
    case 'vehicles':
      return getVehicleRoutes();
  }
}

export function buildSitemapEntries(paths: string[]): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency: path.startsWith('/services/') || path.startsWith('/areas-we-serve/')
      ? ('monthly' as const)
      : ('weekly' as const),
    priority:
      path === '/'
        ? 1
        : path === '/englewood-co-auto-repair' || path === '/contact'
          ? 0.9
          : path.startsWith('/services/')
            ? 0.8
            : path.startsWith('/areas-we-serve/')
              ? 0.7
              : path.startsWith('/vehicles/')
                ? 0.65
                : 0.75,
  }));
}

/** All indexable routes for sitemap and SEO verification */
export function getAllSiteRoutes(): string[] {
  return SITEMAP_SHARD_IDS.flatMap((shardId) => getRoutesForSitemapShard(shardId));
}

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': [...LOCAL_BUSINESS_TYPES],
    '@id': LOCAL_BUSINESS_ID,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: absoluteUrl('/images/logo.png'),
    image: absoluteUrl(PHOTOS.exterior),
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    address: POSTAL_ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_GEO.latitude,
      longitude: BUSINESS_GEO.longitude,
    },
    openingHoursSpecification: OPENING_HOURS_SCHEMA,
    openingHours: [...SCHEMA_OPENING_HOURS],
    priceRange: '$$',
    hasMap: HAS_MAP_URL,
    areaServed: DEFAULT_AREA_SERVED,
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
    publisher: { '@id': LOCAL_BUSINESS_ID },
    inLanguage: 'en-US',
  };
}

type AreaServedInput =
  | string
  | { name: string; type?: 'City' | 'AdministrativeArea' }
  | Array<string | { name: string; type?: 'City' | 'AdministrativeArea' }>;

type LocalBusinessOptions = {
  description?: string;
  areaServed?: AreaServedInput;
};

function normalizeAreaServed(areaServed: AreaServedInput) {
  const items = Array.isArray(areaServed) ? areaServed : [areaServed];

  return items.map((item) =>
    typeof item === 'string'
      ? {
          '@type': 'City' as const,
          name: item,
          containedInPlace: { '@type': 'State' as const, name: 'Colorado' },
        }
      : {
          '@type': item.type ?? ('City' as const),
          name: item.name,
          containedInPlace: { '@type': 'State' as const, name: 'Colorado' },
        },
  );
}

function resolveAreaServed(areaServed: AreaServedInput) {
  if (
    Array.isArray(areaServed) &&
    areaServed.length > 0 &&
    typeof areaServed[0] === 'object' &&
    '@type' in areaServed[0]
  ) {
    return areaServed;
  }

  return normalizeAreaServed(areaServed);
}

export function createLocalBusinessSchema(options: LocalBusinessOptions = {}) {
  const {
    description = BUSINESS.shortDescription,
    areaServed = DEFAULT_AREA_SERVED,
  } = options;

  const areaServedValue = resolveAreaServed(areaServed as AreaServedInput);

  return {
    '@context': 'https://schema.org',
    '@type': [...LOCAL_BUSINESS_TYPES],
    '@id': LOCAL_BUSINESS_ID,
    name: BUSINESS.name,
    image: absoluteUrl(PHOTOS.exterior),
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    priceRange: '$$',
    description,
    address: POSTAL_ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: String(BUSINESS_GEO.latitude),
      longitude: String(BUSINESS_GEO.longitude),
    },
    openingHours: SCHEMA_OPENING_HOURS,
    openingHoursSpecification: OPENING_HOURS_SCHEMA,
    areaServed: areaServedValue,
    sameAs: [...SAME_AS],
  };
}

/** Homepage AutoRepair schema — exact structure for local SEO audits. */
export function createHomepageAutoRepairSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': [...LOCAL_BUSINESS_TYPES],
    '@id': LOCAL_BUSINESS_ID,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    logo: absoluteUrl('/images/rkc-logo-card.png'),
    image: absoluteUrl(PHOTOS.heroMain),
    description: HOMEPAGE_AUTO_REPAIR_DESCRIPTION,
    priceRange: '$$',
    hasMap: HAS_MAP_URL,
    address: POSTAL_ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_GEO.latitude,
      longitude: BUSINESS_GEO.longitude,
    },
    openingHours: [...SCHEMA_OPENING_HOURS],
    openingHoursSpecification: OPENING_HOURS_SCHEMA,
    areaServed: HOMEPAGE_AREA_SERVED,
    sameAs: [...SAME_AS],
  };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  const leafPath = [...items].reverse().find((item) => item.path)?.path ?? '/';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': schemaEntityId(leafPath, 'breadcrumb'),
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
  const url = absoluteUrl(servicePath);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': schemaEntityId(servicePath, 'service'),
    serviceType,
    name: serviceType,
    description,
    url,
    provider: {
      '@id': LOCAL_BUSINESS_ID,
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

export function createFAQPageSchema(faqs: FAQItem[], pagePath = '/frequently-asked-questions') {
  const pageId = schemaEntityId(pagePath, 'faq');

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': pageId,
    mainEntity: faqs.map((item, index) => {
      const questionId = `${pageId}/question-${index + 1}`;
      return {
        '@type': 'Question',
        '@id': questionId,
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          '@id': `${questionId}/answer`,
          text: item.answer,
        },
      };
    }),
  };
}

export function createContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': schemaEntityId('/contact', 'contactpage'),
    name: 'Contact RKC Automotive',
    url: absoluteUrl('/contact'),
    mainEntity: {
      '@type': [...LOCAL_BUSINESS_TYPES],
      '@id': LOCAL_BUSINESS_ID,
      name: BUSINESS.name,
      telephone: BUSINESS.phoneE164,
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
    '@id': schemaEntityId('/about', 'aboutpage'),
    name: `About ${BUSINESS.name}`,
    url: absoluteUrl('/about'),
    description:
      'Learn about RKC Automotive — ASE-certified auto repair in Englewood, CO with 30+ years of honest service.',
    mainEntity: { '@id': LOCAL_BUSINESS_ID },
  };
}

export function createItemListSchema(
  name: string,
  items: { name: string; url: string; description?: string }[],
  pagePath?: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    ...(pagePath ? { '@id': schemaEntityId(pagePath, 'itemlist') } : {}),
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
  const url = absoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': schemaEntityId(path, 'webpage'),
    name,
    description,
    url,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': LOCAL_BUSINESS_ID },
  };
}

const WARRANTY_PAGE_DESCRIPTION =
  'We handle the entire third-party warranty claims process directly. From teardown authorizations to fighting corporate denials with Endurance, CarShield, CARCHEX, and Zurich.';

/** AutoRepair schema scoped to the extended warranty landing page */
export function createWarrantyAutoRepairSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': [...LOCAL_BUSINESS_TYPES],
    '@id': LOCAL_BUSINESS_ID,
    name: BUSINESS.name,
    url: absoluteUrl('/warranty'),
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    image: absoluteUrl(PHOTOS.engineBay),
    description: WARRANTY_PAGE_DESCRIPTION,
    priceRange: '$$',
    address: POSTAL_ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: String(BUSINESS_GEO.latitude),
      longitude: String(BUSINESS_GEO.longitude),
    },
    openingHoursSpecification: OPENING_HOURS_SCHEMA,
    areaServed: DEFAULT_AREA_SERVED,
    sameAs: SAME_AS,
    knowsAbout: [
      'Extended warranty repair',
      'Third-party warranty claims',
      'Vehicle service contracts',
      'Teardown authorization',
      'Warranty claim denial appeals',
    ],
  };
}

export function createWarrantyServiceSchema() {
  return createServiceSchema(
    'Extended Warranty Repair & Claims Advocacy',
    WARRANTY_PAGE_DESCRIPTION,
    '/warranty',
  );
}

/** Serialize one or more JSON-LD objects for dangerouslySetInnerHTML */
export function jsonLdHtml(...schemas: object[]): string {
  return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
}
