import BrandMarquee from './BrandMarquee';
import BrandTabs from './BrandTabs';

type BrandSectionProps = {
  /** Homepage audit: avoid duplicate h3 panel titles in the tab carousel */
  homepage?: boolean;
};

export default function BrandSection({ homepage = false }: BrandSectionProps) {
  return (
    <section id="brands" className="relative z-0 scroll-mt-28 bg-white">
      <BrandMarquee />
      <BrandTabs plainPanelTitles={homepage} />
    </section>
  );
}
