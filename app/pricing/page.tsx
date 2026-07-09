import type { Metadata } from 'next';
import PricingContent from '@/app/components/ui/PricingContent';

export const metadata: Metadata = {
  title: '$120/hr Auto Repair Pricing | RKC Automotive Englewood, CO',
  description:
    'RKC Automotive charges $120/hr — less than dealerships ($150–200+/hr) with ASE-certified service, written estimates, and no upselling. Call (720) 749-3965.',
  openGraph: {
    title: '$120/hr Auto Repair | RKC Automotive',
    description:
      'Honest $120/hr labor rate. Beat dealership pricing with ASE-certified service in Englewood, CO.',
    url: 'https://rkcautomotive.com/pricing',
    type: 'website',
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
