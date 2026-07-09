import WarrantyContent from '@/app/components/ui/WarrantyContent';
import JsonLd from '@/app/components/JsonLd';
import { PHOTOS, WARRANTY_PAGE_FAQ } from '@/lib/constants';
import { createPageMetadata } from '@/lib/og';
import {
  createBreadcrumbSchema,
  createFAQPageSchema,
  createServiceSchema,
  createWebPageSchema,
} from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Extended Warranty Repair in Englewood, CO | RKC Automotive',
  description:
    'We work directly with Endurance, CarShield, CARCHEX, and all major auto service contracts. Bring your car to our shop on W Evans Ave and let us handle your claim.',
  path: '/warranty',
  image: PHOTOS.engineBay,
  imageAlt: 'Extended warranty repair and diagnostics at RKC Automotive in Englewood, CO',
});

export default function WarrantyPage() {
  return (
    <>
      <JsonLd
        data={[
          createWebPageSchema(
            'Extended Warranty Repair at RKC Automotive',
            'Third-party extended warranty claim handling and ASE-certified repairs in Englewood, CO.',
            '/warranty',
          ),
          createServiceSchema(
            'Extended Warranty Repair',
            'We work directly with Endurance, CarShield, CARCHEX, Royal Administration Services, and all major auto service contracts. Bring your car to our Englewood shop and let us handle your claim.',
            '/warranty',
          ),
          createFAQPageSchema(WARRANTY_PAGE_FAQ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Extended Warranty', path: '/warranty' },
          ]),
        ]}
      />
      <WarrantyContent />
    </>
  );
}
