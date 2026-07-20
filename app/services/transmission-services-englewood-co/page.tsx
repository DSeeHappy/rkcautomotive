import JsonLd from '@/app/components/JsonLd';
import TransmissionServicesContent from '@/app/components/ui/services/TransmissionServicesContent';
import { TRANSMISSION_SERVICES_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Transmission Repair in Englewood, CO | RKC Automotive",
  "Transmission repair in Englewood, CO — automatic, manual, CVT, and fluid service. ASE techs at $120/hr labor. Call (720) 749-3965.",
  "transmission-services-englewood-co",
  PHOTOS.classicLift,
  "Transmission Services at RKC Automotive Englewood CO",
);

const SERVICE_PATH = "/services/transmission-services-englewood-co";

export default function TransmissionServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Transmission Repair and Service",
            "Transmission service and repair in Englewood, CO — automatic, manual, fluid service, and diagnostics for Denver south metro drivers. Call (720) 749-3965.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(TRANSMISSION_SERVICES_PAGE_FAQ, '/services/transmission-services-englewood-co'),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: "Transmission Services", path: SERVICE_PATH },
          ]),
        ]}
      />
      <TransmissionServicesContent />
    </>
  );
}
