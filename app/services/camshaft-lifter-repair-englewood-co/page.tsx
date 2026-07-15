import JsonLd from '@/app/components/JsonLd';
import CamshaftLifterContent from '@/app/components/ui/services/CamshaftLifterContent';
import { CAMSHAFT_LIFTER_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  'Camshaft & Hydraulic Lifter Repair in Englewood, CO | RKC Automotive',
  'Expert replacement for worn camshaft lobes, collapsed hydraulic lifters, and valve-train failures. Fix your engine tick or misfire in the Denver metro area.',
  'camshaft-lifter-repair-englewood-co',
  PHOTOS.classicEngine,
  'Camshaft and hydraulic lifter repair at RKC Automotive Englewood CO',
  'camshaft repair Englewood CO, lifter tick Denver, hydraulic lifter replacement, valvetrain repair HEMI AFM',
);

const SERVICE_PATH = '/services/camshaft-lifter-repair-englewood-co';

export default function CamshaftLifterRepairPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            'Camshaft and Hydraulic Lifter Repair',
            'Expert camshaft and hydraulic lifter replacement for worn lobes, collapsed lifters, and valvetrain failures in Englewood, CO and the Denver metro area.',
            SERVICE_PATH,
          ),
          createFAQPageSchema(CAMSHAFT_LIFTER_PAGE_FAQ, SERVICE_PATH),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Camshaft & Lifter Repair', path: SERVICE_PATH },
          ]),
        ]}
      />
      <CamshaftLifterContent />
    </>
  );
}
