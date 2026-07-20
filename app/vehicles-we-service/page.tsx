import JsonLd from '@/app/components/JsonLd';
import VehiclesPageContent from '@/app/components/ui/VehiclesPageContent';
import { PHOTOS } from '@/lib/constants';
import { createPageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'All Makes & Models | Auto Repair Englewood, CO',
  description:
    'RKC Automotive services all makes and models — domestic, Asian imports, and European vehicles in Englewood and the Denver south metro. ASE-certified. Call (720) 749-3965.',
  path: '/vehicles-we-service',
  image: PHOTOS.classicLift,
  imageAlt: 'Classic car on lift at RKC Automotive — all makes and models serviced',
});

export default function VehiclesPage() {
  return (
    <div>
      <JsonLd
        data={[
          createWebPageSchema(
            'Vehicles We Service',
            'All makes and models serviced at RKC Automotive in Englewood, CO.',
            '/vehicles-we-service',
          ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Vehicles We Service', path: '/vehicles-we-service' },
          ]),
        ]}
      />
      <VehiclesPageContent />
    </div>
  );
}
