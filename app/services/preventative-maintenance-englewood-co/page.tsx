import JsonLd from '@/app/components/JsonLd';
import PreventativeMaintenanceContent from '@/app/components/ui/services/PreventativeMaintenanceContent';
import { PREVENTATIVE_MAINTENANCE_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Preventative Maintenance | Englewood, CO",
  "Preventative maintenance in Englewood, CO. Scheduled service keeps your vehicle reliable and prevents costly repairs across the Denver south metro. Call (720) 749-3965.",
  "preventative-maintenance-englewood-co",
  PHOTOS.brandedBay,
  "Preventative Maintenance at RKC Automotive Englewood CO",
  "preventative maintenance Englewood CO, scheduled auto service Denver, 30k 60k 90k service, fleet maintenance",
);

const SERVICE_PATH = "/services/preventative-maintenance-englewood-co";

export default function PreventativeMaintenancePage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Preventative Maintenance",
            "Preventative maintenance in Englewood, CO. Scheduled service keeps your vehicle reliable and prevents costly repairs across the Denver south metro. Call (720) 749-3965.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(PREVENTATIVE_MAINTENANCE_PAGE_FAQ),
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
