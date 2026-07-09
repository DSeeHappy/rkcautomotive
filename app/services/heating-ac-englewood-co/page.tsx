import JsonLd from '@/app/components/JsonLd';
import HeatingAcContent from '@/app/components/ui/services/HeatingAcContent';
import { HEATING_AC_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Auto AC & Heating Repair | Englewood, CO",
  "Auto AC repair and heating service in Englewood, CO. AC recharge, compressor replacement, and climate diagnostics for Denver south metro. Call (720) 749-3965.",
  "heating-ac-englewood-co",
  PHOTOS.interior,
  "Heating & AC at RKC Automotive Englewood CO",
  "AC repair Englewood CO, auto heating Denver, AC recharge Colorado, compressor replacement",
);

const SERVICE_PATH = "/services/heating-ac-englewood-co";

export default function HeatingAcPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Heating and Air Conditioning Repair",
            "Auto AC repair and heating service in Englewood, CO. AC recharge, compressor replacement, and climate diagnostics for Denver south metro. Call (720) 749-3965.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(HEATING_AC_PAGE_FAQ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: "Heating & AC", path: SERVICE_PATH },
          ]),
        ]}
      />
      <HeatingAcContent />
    </>
  );
}
