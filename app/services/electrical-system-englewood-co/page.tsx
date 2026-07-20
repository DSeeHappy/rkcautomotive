import JsonLd from '@/app/components/JsonLd';
import ElectricalSystemContent from '@/app/components/ui/services/ElectricalSystemContent';
import { ELECTRICAL_SYSTEM_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Auto Electrical System Repair in Englewood, CO | RKC Automotive",
  "Auto electrical repair in Englewood, CO — alternator, starter, wiring, and parasitic draw diagnosis. ASE-certified techs. Call (720) 749-3965.",
  "electrical-system-englewood-co",
  PHOTOS.teamInspect,
  "Electrical System at RKC Automotive Englewood CO",
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
          createFAQPageSchema(ELECTRICAL_SYSTEM_PAGE_FAQ, '/services/electrical-system-englewood-co'),
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
