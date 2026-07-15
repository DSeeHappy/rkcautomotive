import JsonLd from '@/app/components/JsonLd';
import CheckEngineLightContent from '@/app/components/ui/services/CheckEngineLightContent';
import { CHECK_ENGINE_LIGHT_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Check Engine Light Diagnosis | Englewood, CO",
  "Check engine light diagnosis in Englewood, CO. Find the real problem — not every sensor on the diagram — with ASE-certified diagnostics. Call (720) 749-3965.",
  "check-engine-light-englewood-co",
  PHOTOS.engineRebuild,
  "Check Engine Light at RKC Automotive Englewood CO",
  "check engine light Englewood CO, CEL diagnosis Denver, OBD-II scan, emissions repair Colorado",
);

const SERVICE_PATH = "/services/check-engine-light-englewood-co";

export default function CheckEngineLightPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Check Engine Light Diagnosis",
            "Check engine light diagnosis in Englewood, CO. Find the real problem — not every sensor on the diagram — with ASE-certified diagnostics. Call (720) 749-3965.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(CHECK_ENGINE_LIGHT_PAGE_FAQ, '/services/check-engine-light-englewood-co'),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: "Check Engine Light", path: SERVICE_PATH },
          ]),
        ]}
      />
      <CheckEngineLightContent />
    </>
  );
}
