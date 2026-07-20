import JsonLd from '@/app/components/JsonLd';
import HeatingAcContent from '@/app/components/ui/services/HeatingAcContent';
import { HEATING_AC_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  "Auto AC & Heating Repair in Englewood, CO | RKC Automotive",
  "Auto AC and heating repair in Englewood, CO. R134a and R1234yf recharge, leak testing, compressor and heater-core service. Call (720) 749-3965.",
  "heating-ac-englewood-co",
  PHOTOS.interior,
  "Heating & AC at RKC Automotive Englewood CO",
  "AC repair Englewood CO, R134a recharge Denver, R1234yf service Colorado, auto heating repair, AC compressor replacement, heater core leak, EPA Section 609",
);

const SERVICE_PATH = "/services/heating-ac-englewood-co";

export default function HeatingAcPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            "Heating and Air Conditioning Repair",
            "Expert auto AC repair and heating service in Englewood, CO. R134a and R1234yf recharge, EPA-compliant leak detection, compressor and heater core repair for Denver metro. Call (720) 749-3965.",
            SERVICE_PATH,
          ),
          createFAQPageSchema(HEATING_AC_PAGE_FAQ, '/services/heating-ac-englewood-co'),
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
