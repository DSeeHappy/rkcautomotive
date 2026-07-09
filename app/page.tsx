import HomeContent from './components/ui/HomeContent';
import JsonLd from './components/JsonLd';
import { createPageMetadata } from '@/lib/og';
import { createHomepageAutoRepairSchema, createBreadcrumbSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Trusted Auto Repair in Englewood, CO | RKC Automotive',
  description:
    'ASE-certified auto repair in Englewood, CO. Diagnostics, transmission, brakes & maintenance at $120/hr. Serving Denver metro. Call (720) 749-3965.',
  path: '/',
  titleAbsolute: true,
  image: '/og/rkc-automotive-og.jpg',
  imageAlt: 'RKC Automotive — Auto repair in Englewood, CO',
  keywords:
    'auto repair Englewood CO, engine repair Denver, mechanic Englewood, transmission repair, brake repair, oil change',
});

export default function HomePage() {
  return (
    <div>
      <JsonLd
        data={[
          createHomepageAutoRepairSchema(),
          createBreadcrumbSchema([{ name: 'Home', path: '/' }]),
        ]}
      />
      <HomeContent />
    </div>
  );
}
