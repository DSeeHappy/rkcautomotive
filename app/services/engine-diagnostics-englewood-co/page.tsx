import JsonLd from '@/app/components/JsonLd';
import EngineDiagnosticsContent from '@/app/components/ui/services/EngineDiagnosticsContent';
import { ENGINE_DIAGNOSTICS_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Engine Diagnostics in Englewood, CO | RKC Automotive",
  "ASE engine diagnostics in Englewood, CO for all makes and models. Find the real fault before parts. $120/hr labor. Call (720) 749-3965.",
  "engine-diagnostics-englewood-co",
  PHOTOS.engineBay,
  "Engine Diagnostics at RKC Automotive Englewood CO",
);

const SERVICE_PATH = "/services/engine-diagnostics-englewood-co";

export default function EngineDiagnosticsPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Engine Diagnostics and Repair",
            "Expert engine diagnostics and repair in Englewood, CO. Advanced equipment for all makes and models in the Denver south metro. Call (720) 749-3965 for service.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(ENGINE_DIAGNOSTICS_PAGE_FAQ, '/services/engine-diagnostics-englewood-co'),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: "Engine Diagnostics", path: SERVICE_PATH },
          ]),
        ]}
      />
      <EngineDiagnosticsContent />
    </>
  );
}
