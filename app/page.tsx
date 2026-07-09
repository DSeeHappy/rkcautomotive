import HomeContent from './components/ui/HomeContent';
import JsonLd from './components/JsonLd';
import { createPageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createLocalBusinessSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'RKC Automotive — Engine & Auto Repair Experts in Englewood, CO',
  description:
    'ASE-certified engine and auto repair in Englewood, CO. Diagnostics, transmission, brakes & maintenance at $120/hr. Serving Denver metro. Call (720) 749-3965.',
  path: '/',
  titleAbsolute: true,
  image: '/og/rkc-automotive-og.jpg',
  imageAlt: 'RKC Automotive — Engine & auto repair in Englewood, CO',
  keywords:
    'engine repair Englewood CO, auto repair Denver, mechanic Englewood, transmission repair, brake repair, oil change',
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
