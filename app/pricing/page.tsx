import type { Metadata } from 'next';
import PricingContent from '@/app/components/ui/PricingContent';

export const metadata: Metadata = {
  title: 'Pricing & Estimates | RKC Automotive Englewood, CO',
  description:
    'Transparent auto repair pricing in Englewood, CO. Oil changes from $49, brake service from $189, free inspections. Call (720) 749-3965 for a written estimate.',
  openGraph: {
    title: 'Auto Repair Pricing | RKC Automotive',
    description: 'Fair, transparent pricing for auto repair and maintenance in Englewood, CO.',
    url: 'https://rkcautomotive.com/pricing',
    type: 'website',
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
