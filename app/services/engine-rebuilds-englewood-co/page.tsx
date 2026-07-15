import JsonLd from '@/app/components/JsonLd';
import EngineRebuildsContent from '@/app/components/ui/services/EngineRebuildsContent';
import { ENGINE_REBUILDS_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  'Complete Engine Rebuilds & Overhauls in Englewood, CO | RKC Automotive',
  'Professional long-block and short-block engine rebuilding, machining, and blueprinting in Englewood. Precision piston rings, bearings, and complete block restoration.',
  'engine-rebuilds-englewood-co',
  PHOTOS.engineRebuild,
  'Engine rebuild and overhaul service at RKC Automotive Englewood CO',
  'engine rebuild Englewood CO, long block rebuild Denver, short block overhaul, engine machining blueprinting',
);

const SERVICE_PATH = '/services/engine-rebuilds-englewood-co';

export default function EngineRebuildsPage() {
  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            'Engine Rebuild and Overhaul',
            'Professional long-block and short-block engine rebuilding, machining, and blueprinting in Englewood, CO — precision piston rings, bearings, and complete block restoration.',
            SERVICE_PATH,
          ),
          createFAQPageSchema(ENGINE_REBUILDS_PAGE_FAQ, SERVICE_PATH),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Engine Rebuilds', path: SERVICE_PATH },
          ]),
        ]}
      />
      <EngineRebuildsContent />
    </>
  );
}
