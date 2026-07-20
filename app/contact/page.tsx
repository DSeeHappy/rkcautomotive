import { MAP_EMBED, PHOTOS } from '@/lib/constants';
import ContactPageChrome from '@/app/components/ui/ContactPageChrome';
import FadeIn from '@/app/components/ui/FadeIn';
import { createPageMetadata } from '@/lib/og';

import JsonLd from '@/app/components/JsonLd';
import { createBreadcrumbSchema, createContactPageSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Contact RKC Automotive | Englewood, CO Auto Repair',
  description:
    'Contact RKC Automotive for auto repair in Englewood, CO. Call (720) 749-3965 or visit 2120 W Evans Ave. Mon–Fri 8AM–6PM, Sat 8AM–12PM. Walk-ins welcome.',
  path: '/contact',
  image: PHOTOS.exterior,
  imageAlt: 'RKC Automotive shop exterior at 2120 W Evans Ave, Englewood, CO',
});

export default function ContactPage() {
  return (
    <div>
      <JsonLd
        data={[
          createContactPageSchema(),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />

      <ContactPageChrome />

      <section className="bg-white">
        <FadeIn>
          <iframe
            title="RKC Automotive Location"
            src={MAP_EMBED}
            width="100%"
            height="480"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </FadeIn>
      </section>
    </div>
  );
}
