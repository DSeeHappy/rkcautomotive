'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS, PHOTOS, SERVICE_AREAS_DATA } from '@/lib/constants';
import { HERO_IMAGE_SIZES } from '@/lib/photos';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import ServiceAreaGrid from '@/app/components/ui/ServiceAreaGrid';
import { useLanguage } from '@/lib/language';
import { siteCopy } from '@/lib/siteCopy';

export default function AreasPageChrome() {
  const { lang } = useLanguage();
  const chrome = siteCopy(lang);
  const shell = chrome.shells.areas;

  return (
    <>
      <PageHero
        shell="areas"
        shellArgs={{ street: BUSINESS.address.street, cityCount: SERVICE_AREAS_DATA.length }}
        eyebrow="Areas"
        title="Englewood hub. Metro reach."
        description={`Centered in Englewood at ${BUSINESS.address.street}, RKC serves ${SERVICE_AREAS_DATA.length} cities across the south Denver metro — with neighborhood-level coverage and ASE-certified auto repair.`}
        imageSrc={PHOTOS.exterior}
        imageAlt="RKC Automotive shop serving the south Denver metro from Englewood, CO"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Areas We Serve' },
        ]}
      />

      <section className="py-20 sm:py-24" lang={lang}>
        <div className="wrap">
          <FadeIn className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              {shell.sectionEyebrow(SERVICE_AREAS_DATA.length)}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              {shell.sectionTitle}
            </h2>
            <p className="mt-4 text-lg text-ink-muted">{shell.sectionIntro}</p>
          </FadeIn>
          <ServiceAreaGrid />
        </div>
      </section>

      <section className="relative overflow-hidden" lang={lang}>
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.interior}
            alt="RKC Automotive service bays in Englewood, Colorado"
            fill
            className="object-cover"
            sizes={HERO_IMAGE_SIZES}
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
              {lang === 'es' ? 'Sirviendo su vecindario' : 'Serving your neighborhood'}
            </h2>
            <p className="mt-3 max-w-lg text-white/75">
              {lang === 'es'
                ? 'Una ubicación en Englewood, equipo certificado ASE y precios honestos para conductores del sur del área metro de Denver.'
                : 'One Englewood location, ASE-certified crew, and honest pricing for drivers across the south Denver metro.'}
            </p>
          </div>
          <Link href="/contact" className="btn-green">
            {chrome.serviceChrome.scheduleService}
          </Link>
        </div>
      </section>
    </>
  );
}
