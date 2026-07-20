import JsonLd from '@/app/components/JsonLd';
import BatteryTestingContent from '@/app/components/ui/services/BatteryTestingContent';
import { BATTERY_TESTING_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Car Battery Testing & Replacement in Englewood, CO | RKC Automotive",
  "Free battery testing and replacement in Englewood, CO with full charging-system checks. ASE-certified shop serving Denver south metro. Call (720) 749-3965.",
  "battery-testing-englewood-co",
  PHOTOS.teamCuevas,
  "Battery Testing at RKC Automotive Englewood CO",
);

const SERVICE_PATH = "/services/battery-testing-englewood-co";

export default function BatteryTestingPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Battery Testing and Replacement",
            "Free battery testing and professional battery replacement in Englewood, CO. Charging-system checks included — do not get stranded. Call (720) 749-3965 today.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(BATTERY_TESTING_PAGE_FAQ, '/services/battery-testing-englewood-co'),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: "Battery Testing", path: SERVICE_PATH },
          ]),
        ]}
      />
      <BatteryTestingContent />
    </>
  );
}
