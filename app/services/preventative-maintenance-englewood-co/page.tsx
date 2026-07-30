import JsonLd from '@/app/components/JsonLd';
import PreventativeMaintenanceContent from '@/app/components/ui/services/PreventativeMaintenanceContent';
import { PREVENTATIVE_MAINTENANCE_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Preventative Maintenance in Englewood, CO | RKC Automotive",
  "Preventative maintenance and timing belt replacement in Englewood, CO — VIN-specific 30k/60k/90k service, fluids, belts, and water pumps. Call today.",
  "preventative-maintenance-englewood-co",
  PHOTOS.brandedBay,
  "Preventative Maintenance at RKC Automotive Englewood CO",
);

const SERVICE_PATH = "/services/preventative-maintenance-englewood-co";

export default function PreventativeMaintenancePage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Preventative Maintenance",
            "Preventative maintenance and timing belt replacement in Englewood, CO. VIN-specific scheduled service prevents costly repairs across the Denver south metro.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(PREVENTATIVE_MAINTENANCE_PAGE_FAQ, '/services/preventative-maintenance-englewood-co'),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: "Preventative Maintenance", path: SERVICE_PATH },
          ]),
        ]}
      />
      <PreventativeMaintenanceContent />
    </>
  );
}
