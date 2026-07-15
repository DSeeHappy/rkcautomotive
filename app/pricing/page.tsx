import PricingContent from '@/app/components/ui/PricingContent';
import JsonLd from '@/app/components/JsonLd';
import { PHOTOS, PRICING_PAGE_FAQ } from '@/lib/constants';
import { createPageMetadata } from '@/lib/og';
import {
  createBreadcrumbSchema,
  createFAQPageSchema,
  createWebPageSchema,
} from '@/lib/seo';

export const metadata = createPageMetadata({
  title: '$120/hr Auto Repair Pricing | RKC Automotive Englewood',
  description:
    'RKC Automotive posts $120/hr online — less than Denver dealerships and typical Englewood shops. ASE-certified, written estimates, no upselling. Call (720) 749-3965.',
  path: '/pricing',
  titleAbsolute: true,
  image: PHOTOS.brandedBay,
  imageAlt: 'RKC Automotive shop with posted $120/hr labor rate in Englewood, CO',
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          createWebPageSchema(
            'Auto Repair Pricing at RKC Automotive',
            'Posted $120/hr labor rate for ASE-certified auto repair in Englewood, CO.',
            '/pricing',
          ),
          createFAQPageSchema(PRICING_PAGE_FAQ, '/pricing'),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Pricing', path: '/pricing' },
          ]),
        ]}
      />
      <PricingContent />
    </>
  );
}
