import JsonLd from '@/app/components/JsonLd';
import EngineRebuildsContent from '@/app/components/ui/services/EngineRebuildsContent';
import { ENGINE_REBUILDS_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata, SITE_URL } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  'Complete Engine Rebuilds & Overhauls in Englewood, CO | RKC Automotive',
  'Professional long-block and short-block engine rebuilding, machining, and blueprinting in Englewood. Precision piston rings, bearings, and complete block restoration.',
  'engine-rebuilds-englewood-co',
  PHOTOS.engineRebuild,
  'Engine rebuild and overhaul service at RKC Automotive Englewood CO',
  'engine rebuild Englewood CO, long block rebuild Denver, short block overhaul, engine machining blueprinting',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Engine Rebuild and Overhaul',
  provider: {
    '@type': 'AutomotiveBusiness',
    name: 'RKC Automotive',
    image: `${SITE_URL}/images/shop-exterior.webp`,
    telephone: '+1-720-749-3965',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2120 W Evans Ave',
      addressLocality: 'Englewood',
      addressRegion: 'CO',
      postalCode: '80110',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '39.6711', longitude: '-105.0239' },
    url: SITE_URL,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
  },
  areaServed: {
    '@type': 'City',
    name: 'Englewood',
    '@id': 'https://en.wikipedia.org/wiki/Englewood,_Colorado',
  },
  description:
    'Professional long-block and short-block engine rebuilding, machining, and blueprinting in Englewood, CO — precision piston rings, bearings, and complete block restoration.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

export default function EngineRebuildsPage() {
  return (
    <>
      <JsonLd
        data={[
          schema,
          createFAQPageSchema(ENGINE_REBUILDS_PAGE_FAQ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Engine Rebuilds', path: '/services/engine-rebuilds-englewood-co' },
          ]),
        ]}
      />
      <EngineRebuildsContent />
    </>
  );
}
