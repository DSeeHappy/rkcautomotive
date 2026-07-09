import HomeContent from './components/ui/HomeContent';
import JsonLd from './components/JsonLd';
import { PHOTOS } from '@/lib/constants';
import { createPageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createLocalBusinessSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'RKC Automotive | Auto Repair in Englewood, CO',
  description:
    'ASE-certified auto repair in Englewood, CO. Brakes, diagnostics, oil changes & more at $120/hr. Serving Denver south metro. Call (720) 749-3965 today.',
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
      <JsonLd
        data={[
          createLocalBusinessSchema({
            pageUrl: '/',
            includeRating: true,
          }),
          createBreadcrumbSchema([{ name: 'Home', path: '/' }]),
        ]}
      />
      <HomeContent />
    </div>
  );
}
