import JsonLd from '@/app/components/JsonLd';
import ExhaustSystemContent from '@/app/components/ui/services/ExhaustSystemContent';
import { EXHAUST_SYSTEM_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Exhaust System Repair in Englewood, CO | RKC Automotive",
  "Exhaust system repair in Englewood, CO — mufflers, catalytic converters, pipes, and emissions work. ASE shop. Call (720) 749-3965 today.",
  "exhaust-system-englewood-co",
  PHOTOS.undercarriage,
  "Exhaust System at RKC Automotive Englewood CO",
);

const SERVICE_PATH = "/services/exhaust-system-englewood-co";

export default function ExhaustSystemPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Exhaust System Repair",
            "Exhaust system repair in Englewood, CO — mufflers, catalytic converters, pipes, and emissions service for Denver south metro drivers. Call (720) 749-3965.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(EXHAUST_SYSTEM_PAGE_FAQ, '/services/exhaust-system-englewood-co'),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: "Exhaust System", path: SERVICE_PATH },
          ]),
        ]}
      />
      <ExhaustSystemContent />
    </>
  );
}
