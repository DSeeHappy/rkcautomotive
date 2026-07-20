import JsonLd from '@/app/components/JsonLd';
import CheckEngineLightContent from '@/app/components/ui/services/CheckEngineLightContent';
import { CHECK_ENGINE_LIGHT_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Check Engine Light Diagnosis in Englewood, CO | RKC Automotive",
  "Check engine light diagnosis in Englewood, CO. ASE techs find the root cause — not every sensor on the diagram. Call (720) 749-3965 today.",
  "check-engine-light-englewood-co",
  PHOTOS.engineRebuild,
  "Check Engine Light at RKC Automotive Englewood CO",
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
