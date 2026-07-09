import PricingContent from '@/app/components/ui/PricingContent';
import { PHOTOS } from '@/lib/constants';
import { createPageMetadata } from '@/lib/og';

export const metadata = createPageMetadata({
  title: '$120/hr Auto Repair Pricing | RKC Automotive Englewood, CO',
  description:
    'RKC Automotive charges $120/hr — posted online, less than national chains ($140–160/hr menu pricing), typical Englewood shops ($130–175/hr), and dealerships ($180–220/hr). ASE-certified, written estimates, no upselling. Call (720) 749-3965.',
  path: '/pricing',
  titleAbsolute: true,
  image: PHOTOS.brandedBay,
  imageAlt: 'RKC Automotive shop with posted $120/hr labor rate in Englewood, CO',
});

export default function PricingPage() {
  return <PricingContent />;
}
