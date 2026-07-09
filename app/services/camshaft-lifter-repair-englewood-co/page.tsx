import JsonLd from '@/app/components/JsonLd';
import CamshaftLifterContent from '@/app/components/ui/services/CamshaftLifterContent';
import { CAMSHAFT_LIFTER_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata, SITE_URL } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  'Camshaft & Hydraulic Lifter Repair in Englewood, CO | RKC Automotive',
  'Expert replacement for worn camshaft lobes, collapsed hydraulic lifters, and valve-train failures. Fix your engine tick or misfire in the Denver metro area.',
  'camshaft-lifter-repair-englewood-co',
  PHOTOS.classicEngine,
  'Camshaft and hydraulic lifter repair at RKC Automotive Englewood CO',
  'camshaft repair Englewood CO, lifter tick Denver, hydraulic lifter replacement, valvetrain repair HEMI AFM',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Camshaft and Hydraulic Lifter Repair',
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
    'Expert camshaft and hydraulic lifter replacement for worn lobes, collapsed lifters, and valvetrain failures in Englewood, CO and the Denver metro area.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

export default function CamshaftLifterRepairPage() {
  return (
    <>
      <JsonLd
        data={[
          schema,
          createFAQPageSchema(CAMSHAFT_LIFTER_PAGE_FAQ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Camshaft & Lifters', path: '/services/camshaft-lifter-repair-englewood-co' },
          ]),
        ]}
      />
      <CamshaftLifterContent />
    </>
  );
}
