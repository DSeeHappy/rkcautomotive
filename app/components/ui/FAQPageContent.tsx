'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';
import { BUSINESS, FAQ_CATEGORIES, PHOTOS } from '@/lib/constants';
import { HERO_IMAGE_SIZES } from '@/lib/photos';
import FAQAccordion from '@/app/components/ui/FAQAccordion';
import PhoneLink from '@/app/components/ui/PhoneLink';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { useLanguage } from '@/lib/language';
import { FAQ_CATEGORIES_ES, faqCopy } from '@/lib/i18n/faqCopy';

export default function FAQPageContent() {
  const { lang } = useLanguage();
  const copy = faqCopy(lang);
  const categories = lang === 'es' ? FAQ_CATEGORIES_ES : FAQ_CATEGORIES;

  return (
    <div lang={lang}>
      <PageHero
        shell="faq"
        eyebrow="FAQ"
        title="Answers before the wrench turns"
        description="Straight talk on scheduling, pricing, warranties, and what to expect at RKC Automotive."
        imageSrc={PHOTOS.techCloseup}
        imageAlt={
          lang === 'es'
            ? 'Técnico certificado ASE en RKC Automotive en Englewood, CO'
            : 'ASE-certified technician at RKC Automotive in Englewood, CO'
        }
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
          {categories.map((category, i) => (
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
            alt={
              lang === 'es'
                ? 'Bahía del taller RKC Automotive en Englewood, Colorado'
                : 'RKC Automotive branded shop bay in Englewood, Colorado'
            }
            fill
            className="object-cover"
            sizes={HERO_IMAGE_SIZES}
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">{copy.cta.title}</h2>
            <p className="mt-3 max-w-lg text-white/75">{copy.cta.body}</p>
          </div>
          <PhoneLink className="btn-green">
            <Phone className="size-5" />
            {BUSINESS.phone}
          </PhoneLink>
        </div>
      </section>
    </div>
  );
}
