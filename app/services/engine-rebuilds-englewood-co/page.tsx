import JsonLd from '@/app/components/JsonLd';
import EngineRebuildsContent from '@/app/components/ui/services/EngineRebuildsContent';
import { ENGINE_REBUILDS_PAGE_FAQ, PHOTOS } from '@/lib/constants';
import { createServicePageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  'Complete Engine Rebuilds & Overhauls in Englewood, CO | RKC Automotive',
  'Engine rebuilds in Englewood, CO — long-block, short-block, and machining with written estimates. ASE shop, $120/hr. Call (720) 749-3965.',
  'engine-rebuilds-englewood-co',
  PHOTOS.engineRebuild,
  'Engine rebuild and overhaul service at RKC Automotive Englewood CO',
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
