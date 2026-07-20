import JsonLd from '@/app/components/JsonLd';
import { PHOTOS, SERVICE_AREAS_DATA } from '@/lib/constants';
import AreasPageChrome from '@/app/components/ui/AreasPageChrome';
import { createPageMetadata } from '@/lib/og';
import {
  createBreadcrumbSchema,
  createItemListSchema,
  createWebPageSchema,
} from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Service Areas | Auto Repair South Denver Metro',
  description:
    'RKC Automotive serves 20 cities across south Denver metro — Englewood, Denver, Littleton, Highlands Ranch, Centennial, Aurora, Lakewood & more. Call (720) 749-3965.',
  path: '/areas-we-serve',
  image: PHOTOS.exterior,
  imageAlt: 'RKC Automotive serving the south Denver metro from Englewood, CO',
});

export default function AreasPage() {
  return (
    <div>
      <JsonLd
        data={[
          createWebPageSchema(
            'Areas We Serve',
            'Auto repair service areas across the south Denver metro from RKC Automotive in Englewood, CO.',
            '/areas-we-serve',
          ),
          createItemListSchema(
            'RKC Automotive Service Areas',
            SERVICE_AREAS_DATA.map((a) => ({
              name: `${a.name}, CO`,
              url: a.href,
              description: a.metaDescription,
            })),
            '/areas-we-serve',
          ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Areas We Serve', path: '/areas-we-serve' },
          ]),
        ]}
      />
      <AreasPageChrome />
    </div>
  );
}
