import JsonLd from '@/app/components/JsonLd';
import BrakeRepairContent from '@/app/components/ui/services/BrakeRepairContent';
import { BRAKE_REPAIR_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Brake Repair in Englewood, CO | Expert Brake Service | RKC Automotive",
  "ASE-certified brake repair in Englewood, CO — pads, rotors, calipers, and fluid. Written estimates at our posted $120/hr labor rate. Call (720) 749-3965.",
  "brake-repair-englewood-co",
  PHOTOS.undercarriage,
  "Brake Repair Service at RKC Automotive Englewood CO",
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
