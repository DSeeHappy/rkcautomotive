import HomeContent from './components/ui/HomeContent';
import {
  FACEBOOK_URL,
  GOOGLE_REVIEWS_URL,
  INSTAGRAM_URL,
  OPENING_HOURS_SCHEMA,
  PHOTOS,
  YAHOO_LOCAL_URL,
} from '@/lib/constants';
import { createPageMetadata } from '@/lib/og';

export const metadata = createPageMetadata({
  title: "RKC Automotive | Englewood's Bay for Work You Can Trust",
  description:
    'Professional auto repair and maintenance in Englewood, CO. Expert service for brakes, engines, batteries, and more. Call (720) 749-3965 for service today.',
  path: '/',
  titleAbsolute: true,
  image: PHOTOS.heroMain,
  imageAlt: 'RKC Automotive shop bay in Englewood, CO',
  keywords:
    'auto repair Englewood CO, car repair Denver, mechanic Englewood, brake repair, oil change, battery replacement',
});

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutomotiveBusiness',
            name: 'RKC Automotive',
            image: 'https://rkcautomotive.com/images/shop-exterior.webp',
            telephone: '+1-720-749-3965',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '2120 W Evans Ave',
              addressLocality: 'Englewood',
              addressRegion: 'CO',
              postalCode: '80110',
              addressCountry: 'US',
            },
            openingHoursSpecification: OPENING_HOURS_SCHEMA,
            sameAs: [FACEBOOK_URL, INSTAGRAM_URL, GOOGLE_REVIEWS_URL, YAHOO_LOCAL_URL],
            priceRange: '$$',
            areaServed: { '@type': 'City', name: 'Englewood' },
          }),
        }}
      />
      <HomeContent />
    </div>
  );
}
