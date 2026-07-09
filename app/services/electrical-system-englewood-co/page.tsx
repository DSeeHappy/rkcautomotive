import JsonLd from '@/app/components/JsonLd';
import ElectricalSystemContent from '@/app/components/ui/services/ElectricalSystemContent';
import { ELECTRICAL_SYSTEM_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Auto Electrical System Repair in Englewood, CO | RKC Automotive",
  "Expert auto electrical repair in Englewood, CO. Battery, alternator, starter, wiring, and electrical diagnostics. Call (720) 749-3965 for reliable electrical service.",
  "electrical-system-englewood-co",
  PHOTOS.teamInspect,
  "Electrical System at RKC Automotive Englewood CO",
  "auto electrical repair Englewood CO, alternator replacement Denver, starter repair, wiring diagnostics",
);

const SERVICE_PATH = "/services/electrical-system-englewood-co";

export default function ElectricalSystemPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Automotive Electrical System Repair",
            "Expert auto electrical repair in Englewood, CO. Battery, alternator, starter, wiring, and electrical diagnostics. Call (720) 749-3965 for reliable electrical service.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(ELECTRICAL_SYSTEM_PAGE_FAQ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: "Electrical System", path: SERVICE_PATH },
          ]),
        ]}
      />
      <ElectricalSystemContent />
    </>
  );
}
