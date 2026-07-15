import JsonLd from '@/app/components/JsonLd';
import OilChangesContent from '@/app/components/ui/services/OilChangesContent';
import { OIL_CHANGES_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Oil Change Service in Englewood, CO | RKC Automotive",
  "Fast, affordable oil changes in Englewood, CO — conventional, synthetic, and high-mileage oil with fluid top-off. Serving Denver south metro. Call (720) 749-3965.",
  "oil-changes-englewood-co",
  PHOTOS.teamCollab,
  "Oil Changes at RKC Automotive Englewood CO",
  "oil change Englewood CO, synthetic oil Denver, high mileage oil service, fluid top off",
);

const SERVICE_PATH = "/services/oil-changes-englewood-co";

export default function OilChangesPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Oil Change and Lubrication Service",
            "Fast, affordable oil changes in Englewood, CO — conventional, synthetic, and high-mileage oil with fluid top-off. Serving Denver south metro. Call (720) 749-3965.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(OIL_CHANGES_PAGE_FAQ, '/services/oil-changes-englewood-co'),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: "Oil Changes", path: SERVICE_PATH },
          ]),
        ]}
      />
      <OilChangesContent />
    </>
  );
}
