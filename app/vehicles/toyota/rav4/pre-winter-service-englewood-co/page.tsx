import JsonLd from '@/app/components/JsonLd';
import Rav4PreWinterContent from '@/app/components/ui/vehicles/rav4/Rav4PreWinterContent';
import { RAV4_PRE_WINTER_PAGE_FAQ } from '@/lib/constants';
import { createPageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';
import { RAV4_IMAGE, RAV4_IMAGE_ALT, RAV4_PATHS } from '@/app/components/ui/vehicles/rav4/rav4Shared';

export const metadata = createPageMetadata({
  title: 'RAV4 Pre-Winter Colorado Inspection in Englewood, CO | RKC Automotive',
  description:
    'Toyota RAV4 pre-winter inspection in Englewood, CO — battery CCA test, AWD fluid, brakes, tires, hybrid cooling, I-70 readiness. Call (720) 749-3965.',
  path: RAV4_PATHS.preWinter,
  titleAbsolute: true,
  image: RAV4_IMAGE,
  imageAlt: RAV4_IMAGE_ALT,
  keywords:
    'RAV4 pre-winter service Englewood CO, Toyota winter inspection Denver, RAV4 AWD fluid Colorado, hybrid RAV4 winter prep',
});

const SERVICE_DESCRIPTION =
  'Toyota RAV4 pre-winter Colorado inspection — battery load test, coolant freeze point, AWD fluid, brake and tire check, hybrid inverter cooling, and mountain-pass readiness for Englewood and Denver metro owners.';

export default function Rav4PreWinterPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            'Toyota RAV4 Pre-Winter Colorado Inspection',
            SERVICE_DESCRIPTION,
            RAV4_PATHS.preWinter,
          ),
          createFAQPageSchema(RAV4_PRE_WINTER_PAGE_FAQ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Vehicles We Service', path: '/vehicles-we-service' },
            { name: 'Toyota RAV4 Pre-Winter', path: RAV4_PATHS.preWinter },
          ]),
        ]}
      />
      <Rav4PreWinterContent />
    </>
  );
}
