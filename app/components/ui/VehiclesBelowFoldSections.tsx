'use client';

import dynamic from 'next/dynamic';

const BrandSection = dynamic(() => import('@/app/components/ui/BrandSection'), {
  ssr: false,
  loading: () => <div className="min-h-[16rem] border-t border-[color:var(--line)]" aria-hidden />,
});

const VehicleDeepDiveCrawlLinks = dynamic(
  () => import('@/app/components/ui/VehicleDeepDiveCrawlLinks'),
  {
    ssr: false,
    loading: () => <div className="min-h-[12rem] border-t border-[color:var(--line)]" aria-hidden />,
  },
);

export default function VehiclesBelowFoldSections() {
  return (
    <>
      <BrandSection />
      <VehicleDeepDiveCrawlLinks />
    </>
  );
}
