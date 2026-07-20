import { PHOTOS } from '@/lib/constants';
import AboutContent from '@/app/components/ui/AboutContent';
import { createPageMetadata } from '@/lib/og';
import JsonLd from '@/app/components/JsonLd';
import { createAboutPageSchema, createBreadcrumbSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'About RKC Automotive | ASE Auto Repair Englewood, CO',
  description:
    'Meet RKC Automotive — ASE-certified auto repair in Englewood, CO. 30+ years serving Denver south metro with honest pricing, written estimates, and $120/hr labor.',
  path: '/about',
  image: PHOTOS.teamCollab,
  imageAlt: 'ASE-certified technicians at RKC Automotive in Englewood, CO',
});

export default function AboutPage() {
  return (
    <div>
      <JsonLd
        data={[
          createAboutPageSchema(),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />
      <AboutContent />
    </div>
  );
}
