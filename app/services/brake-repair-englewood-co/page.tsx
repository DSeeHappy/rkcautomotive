import JsonLd from '@/app/components/JsonLd';
import BrakeRepairContent from '@/app/components/ui/services/BrakeRepairContent';
import { BRAKE_REPAIR_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Brake Repair in Englewood, CO | Expert Brake Service | RKC Automotive",
  "Professional brake repair and service in Englewood, CO. Brake pads, rotors, calipers, and complete brake system service. Call (720) 749-3965 for same-day service.",
  "brake-repair-englewood-co",
  PHOTOS.undercarriage,
  "Brake Repair Service at RKC Automotive Englewood CO",
  "brake repair Englewood CO, brake service Denver, brake pads replacement, rotor resurfacing, brake inspection",
);

const SERVICE_PATH = "/services/brake-repair-englewood-co";

export default function BrakeRepairPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Brake Repair and Service",
            "Professional brake repair and service in Englewood, CO. Brake pads, rotors, calipers, and complete brake system service. Call (720) 749-3965 for same-day service.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(BRAKE_REPAIR_PAGE_FAQ, '/services/brake-repair-englewood-co'),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: "Brake Repair", path: SERVICE_PATH },
          ]),
        ]}
      />
      <BrakeRepairContent />
    </>
  );
}
