import HomeContent from './components/ui/HomeContent';
import JsonLd from './components/JsonLd';
import { HOMEPAGE_FAQS } from '@/lib/constants';
import { createPageMetadata } from '@/lib/og';
import {
  createBreadcrumbSchema,
  createFAQPageSchema,
  createWebPageSchema,
} from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Auto Repair Englewood, CO | RKC Automotive',
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
          // LocalBusiness/AutoRepair comes from root layout only — avoid a second
          // conflicting org block with a different image/areaServed/description.
          createWebPageSchema(
            'Auto Repair Englewood, CO | RKC Automotive',
            'ASE-certified auto repair in Englewood, CO. Diagnostics, transmission, brakes & maintenance at $120/hr. Serving Denver metro.',
            '/',
          ),
          createFAQPageSchema(HOMEPAGE_FAQS, '/'),
          createBreadcrumbSchema([{ name: 'Home', path: '/' }]),
        ]}
      />
      <HomeContent />
    </div>
  );
}
