import JsonLd from '@/app/components/JsonLd';
import SuspensionSteeringContent from '@/app/components/ui/services/SuspensionSteeringContent';
import { SUSPENSION_STEERING_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Suspension & Steering Repair | Englewood, CO",
  "Suspension and steering repair in Englewood, CO — shocks, struts, ball joints, and alignment from ASE-certified techs. Serving Denver south metro. Call (720) 749-3965.",
  "suspension-steering-englewood-co",
  PHOTOS.techCloseup,
  "Suspension & Steering at RKC Automotive Englewood CO",
  "suspension repair Englewood CO, steering repair Denver, strut replacement, ball joint service",
);

const SERVICE_PATH = "/services/suspension-steering-englewood-co";

export default function SuspensionSteeringPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Suspension and Steering Repair",
            "Suspension and steering repair in Englewood, CO — shocks, struts, ball joints, and alignment from ASE-certified techs. Serving Denver south metro. Call (720) 749-3965.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(SUSPENSION_STEERING_PAGE_FAQ),
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
