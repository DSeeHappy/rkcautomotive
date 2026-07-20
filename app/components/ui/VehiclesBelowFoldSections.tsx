import BrandSection from '@/app/components/ui/BrandSection';
import VehicleDeepDiveCrawlLinks from '@/app/components/ui/VehicleDeepDiveCrawlLinks';

/**
 * Below-fold vehicles page sections.
 * Server-rendered so Googlebot (mobile-first) sees brand panels + model crawl links
 * in the initial HTML — do not wrap these in next/dynamic with ssr:false.
 */
export default function VehiclesBelowFoldSections() {
  return (
    <>
      <BrandSection />
      <VehicleDeepDiveCrawlLinks />
    </>
  );
}
