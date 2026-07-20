import { ALL_FAQS, PHOTOS } from '@/lib/constants';
import FAQPageContent from '@/app/components/ui/FAQPageContent';
import { createPageMetadata } from '@/lib/og';
import JsonLd from '@/app/components/JsonLd';
import { createBreadcrumbSchema, createFAQPageSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Auto Repair FAQ | RKC Automotive Englewood, CO',
  description:
    'Frequently asked questions about auto repair at RKC Automotive in Englewood, CO — pricing, warranties, same-day service, maintenance, and Denver south metro coverage.',
  path: '/frequently-asked-questions',
  image: PHOTOS.exteriorBay,
  imageAlt: 'RKC Automotive shop in Englewood, CO — auto repair FAQ',
});

export default function FAQPage() {
  return (
    <div>
      <JsonLd
        data={[
          createFAQPageSchema(ALL_FAQS, '/frequently-asked-questions'),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/frequently-asked-questions' },
          ]),
        ]}
      />
      <FAQPageContent />
    </div>
  );
}
