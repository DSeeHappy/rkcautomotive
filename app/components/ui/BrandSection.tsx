import BrandMarquee from './BrandMarquee';
import BrandTabs from './BrandTabs';

export default function BrandSection() {
  return (
    <section id="brands" className="scroll-mt-28 bg-white">
      <BrandMarquee />
      <BrandTabs />
    </section>
  );
}
