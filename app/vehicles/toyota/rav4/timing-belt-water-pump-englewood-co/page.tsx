import JsonLd from '@/app/components/JsonLd';
import Rav4TimingBeltContent from '@/app/components/ui/vehicles/rav4/Rav4TimingBeltContent';
import { RAV4_TIMING_BELT_PAGE_FAQ } from '@/lib/constants';
import { createPageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';
import { RAV4_IMAGE, RAV4_IMAGE_ALT, RAV4_PATHS } from '@/app/components/ui/vehicles/rav4/rav4Shared';

export const metadata = createPageMetadata({
  title: 'RAV4 Timing Belt & Water Pump Service in Englewood, CO | RKC Automotive',
  description:
    'Toyota RAV4 2AZ-FE timing belt, water pump, tensioner, and seal replacement in Englewood, CO. Interference engine expertise, $120/hr labor, written estimates. Call (720) 749-3965.',
  path: RAV4_PATHS.timingBelt,
  titleAbsolute: true,
  image: RAV4_IMAGE,
  imageAlt: RAV4_IMAGE_ALT,
  keywords:
    'RAV4 timing belt Englewood CO, 2AZ-FE timing belt Denver, Toyota RAV4 water pump, interference engine Colorado',
});

const SERVICE_DESCRIPTION =
  'Toyota RAV4 2AZ-FE and 1AZ-FE timing belt, water pump, tensioner, idler, and seal replacement for Englewood and Denver metro drivers — written estimates at $120/hr before teardown.';

export default function Rav4TimingBeltPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            'Toyota RAV4 Timing Belt and Water Pump Service',
            SERVICE_DESCRIPTION,
            RAV4_PATHS.timingBelt,
          ),
          createFAQPageSchema(RAV4_TIMING_BELT_PAGE_FAQ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Vehicles We Service', path: '/vehicles-we-service' },
            { name: 'Toyota RAV4 Timing Belt', path: RAV4_PATHS.timingBelt },
          ]),
        ]}
      />
      <Rav4TimingBeltContent />
    </>
  );
}
