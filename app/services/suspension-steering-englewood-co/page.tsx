import JsonLd from '@/app/components/JsonLd';
import SuspensionSteeringContent from '@/app/components/ui/services/SuspensionSteeringContent';
import { SUSPENSION_STEERING_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Suspension & Steering Repair in Englewood, CO | RKC Automotive",
  "Suspension, steering, and CV axle repair in Englewood, CO — shocks, struts, ball joints, boots, wheel bearings, and alignment. Call (720) 749-3965.",
  "suspension-steering-englewood-co",
  PHOTOS.techCloseup,
  "Suspension & Steering at RKC Automotive Englewood CO",
);

const SERVICE_PATH = "/services/suspension-steering-englewood-co";

export default function SuspensionSteeringPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Suspension and Steering Repair",
            "Suspension, steering, and CV axle repair in Englewood, CO — shocks, struts, ball joints, boots, wheel bearings, and alignment from ASE-certified technicians.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(SUSPENSION_STEERING_PAGE_FAQ, '/services/suspension-steering-englewood-co'),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: "Suspension & Steering", path: SERVICE_PATH },
          ]),
        ]}
      />
      <SuspensionSteeringContent />
    </>
  );
}
