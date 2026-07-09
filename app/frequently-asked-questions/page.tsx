import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { ALL_FAQS, BUSINESS, FAQ_CATEGORIES, PHOTOS } from '@/lib/constants';
import FAQAccordion from '@/app/components/ui/FAQAccordion';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { createPageMetadata } from '@/lib/og';

export const metadata = createPageMetadata({
  title: 'Frequently Asked Questions',
  description:
    'FAQ about auto repair at RKC Automotive in Englewood, CO — pricing, warranties, same-day service, maintenance, and more.',
  path: '/frequently-asked-questions',
  image: PHOTOS.exteriorBay,
  imageAlt: 'RKC Automotive shop in Englewood, CO — auto repair FAQ',
});

export default function FAQPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: ALL_FAQS.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <PageHero
        eyebrow="FAQ"
        title="Answers before the wrench turns"
        description="Straight talk on scheduling, pricing, warranties, and what to expect at RKC Automotive."
        imageSrc={PHOTOS.techCloseup}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
          {FAQ_CATEGORIES.map((category, i) => (
            <FadeIn key={category.title} delay={i * 0.04}>
              <h2 className="font-display text-3xl tracking-wide text-primary-blue">{category.title}</h2>
              <div className="mt-4">
                <FAQAccordion items={category.items} />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PHOTOS.brandedBack} alt="" fill className="object-cover" sizes="100vw" />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">Still have a question?</h2>
            <p className="mt-2 text-white/75">Call us — real people pick up during shop hours.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={BUSINESS.phoneHref} className="btn-green">
              <Phone className="size-5" />
              {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn-ghost-light">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
