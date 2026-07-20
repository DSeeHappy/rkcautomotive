import JsonLd from '@/app/components/JsonLd';
import ServicesIndexContent from '@/app/components/ui/ServicesIndexContent';
import { PHOTOS, SERVICES } from '@/lib/constants';
import { createPageMetadata } from '@/lib/og';
import {
  createBreadcrumbSchema,
  createItemListSchema,
  createWebPageSchema,
} from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Auto Repair Services in Englewood, CO | RKC Automotive',
  description:
    'Complete auto repair in Englewood, CO: brakes, engine diagnostics, oil changes, transmission, AC, electrical, and more. ASE-certified. Call (720) 749-3965.',
  path: '/services',
  image: PHOTOS.interior,
  imageAlt: 'Full-service auto repair bays at RKC Automotive in Englewood, CO',
});

export default function ServicesPage() {
  return (
    <div>
      <JsonLd
        data={[
          createWebPageSchema(
            'Auto Repair Services',
            'Complete auto repair services in Englewood, CO and the south Denver metro.',
            '/services',
          ),
          createItemListSchema(
            'RKC Automotive Services',
            SERVICES.map((s) => ({
              name: s.name,
              url: s.href,
              description: s.description,
            })),
            '/services',
          ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
        ]}
      />
      <ServicesIndexContent />
    </div>
  );
}
