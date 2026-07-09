import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import JsonLd from '@/app/components/JsonLd';
import { ALL_FAQS, BUSINESS, FAQ_CATEGORIES, PHOTOS } from '@/lib/constants';
import FAQAccordion from '@/app/components/ui/FAQAccordion';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { createPageMetadata } from '@/lib/og';
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
          createFAQPageSchema(ALL_FAQS),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/frequently-asked-questions' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="FAQ"
        title="Answers before the wrench turns"
        description="Straight talk on scheduling, pricing, warranties, and what to expect at RKC Automotive."
        imageSrc={PHOTOS.techCloseup}
        imageAlt="ASE-certified technician at RKC Automotive in Englewood, CO"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
          {FAQ_CATEGORIES.map((category, i) => (
            <FadeIn key={category.title} delay={i * 0.04}>
              <h2 className="font-display text-3xl tracking-wide text-primary-blue">{category.title}</h2>
              <div className="mt-6">
                <FAQAccordion items={category.items} />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.brandedBack}
            alt="RKC Automotive branded shop bay in Englewood, Colorado"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">Still have questions?</h2>
            <p className="mt-3 max-w-lg text-white/75">
              Call our Englewood shop — we are happy to walk you through pricing, timing, and what to expect.
            </p>
          </div>
          <a href={BUSINESS.phoneHref} className="btn-green">
            <Phone className="size-5" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
