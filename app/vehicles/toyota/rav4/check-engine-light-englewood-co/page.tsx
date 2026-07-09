import JsonLd from '@/app/components/JsonLd';
import Rav4CheckEngineContent from '@/app/components/ui/vehicles/rav4/Rav4CheckEngineContent';
import { RAV4_CHECK_ENGINE_PAGE_FAQ } from '@/lib/constants';
import { createPageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';
import { RAV4_IMAGE, RAV4_IMAGE_ALT, RAV4_PATHS } from '@/app/components/ui/vehicles/rav4/rav4Shared';

export const metadata = createPageMetadata({
  title: 'RAV4 Check Engine Light Diagnostics in Englewood, CO | RKC Automotive',
  description:
    'Toyota RAV4 check engine light diagnosis in Englewood, CO — P0420, 2AZ oil consumption, P0171 lean, hybrid codes, AWD faults. $120/hr labor. Call (720) 749-3965.',
  path: RAV4_PATHS.checkEngine,
  titleAbsolute: true,
  image: RAV4_IMAGE,
  imageAlt: RAV4_IMAGE_ALT,
  keywords:
    'RAV4 check engine light Englewood CO, P0420 RAV4 Denver, 2AZ-FE oil consumption, RAV4 hybrid codes Colorado',
});

const SERVICE_DESCRIPTION =
  'Toyota RAV4 check engine light diagnostics — P0420 catalyst, 2AZ-FE oil consumption misfires, P0171 lean faults, hybrid system codes, and AWD actuator faults for Englewood and Denver metro drivers.';

export default function Rav4CheckEnginePage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            'Toyota RAV4 Check Engine Light Diagnostics',
            SERVICE_DESCRIPTION,
            RAV4_PATHS.checkEngine,
          ),
          createFAQPageSchema(RAV4_CHECK_ENGINE_PAGE_FAQ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Vehicles We Service', path: '/vehicles-we-service' },
            { name: 'Toyota RAV4 Check Engine Light', path: RAV4_PATHS.checkEngine },
          ]),
        ]}
      />
      <Rav4CheckEngineContent />
    </>
  );
}
