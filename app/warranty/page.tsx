import WarrantyContent from '@/app/components/ui/WarrantyContent';
import JsonLd from '@/app/components/JsonLd';
import { PHOTOS, WARRANTY_PAGE_FAQ } from '@/lib/constants';
import { createPageMetadata } from '@/lib/og';
import {
  createBreadcrumbSchema,
  createFAQPageSchema,
  createWarrantyAutoRepairSchema,
  createWarrantyServiceSchema,
  createWebPageSchema,
} from '@/lib/seo';

const WARRANTY_PAGE_DESCRIPTION =
  'Extended warranty repair in Englewood, CO. We manage diagnostics, teardown approvals, claims, and denial appeals with major warranty providers. Call today.';

export const metadata = createPageMetadata({
  title: 'Extended Warranty Repair in Englewood, CO | RKC Automotive',
  description: WARRANTY_PAGE_DESCRIPTION,
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
            'Extended Warranty Repair in Englewood, CO | RKC Automotive',
            WARRANTY_PAGE_DESCRIPTION,
            '/warranty',
          ),
          createWarrantyServiceSchema(),
          createWarrantyAutoRepairSchema(),
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
