import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { BUSINESS, PHOTOS, SERVICE_AREAS_DATA } from '@/lib/constants';
import ServiceAreaGrid from '@/app/components/ui/ServiceAreaGrid';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { createPageMetadata } from '@/lib/og';

export const metadata = createPageMetadata({
  title: 'Areas We Serve',
  description:
    'RKC Automotive serves Englewood, Denver, Littleton, Highlands Ranch, Centennial, Aurora, Lakewood, Cherry Hills Village, and 12 more south Denver metro cities. Call (720) 749-3965.',
  path: '/areas-we-serve',
  image: PHOTOS.exterior,
  imageAlt: 'RKC Automotive serving the south Denver metro from Englewood, CO',
});
export default function AreasPage() {
  return (
    <div>
      <PageHero
        eyebrow="Areas"
        title="Englewood hub. Metro reach."
        description={`Centered in Englewood at ${BUSINESS.address.street}, RKC serves ${SERVICE_AREAS_DATA.length} cities across the south Denver metro — with neighborhood-level coverage and ASE-certified auto repair.`}
        imageSrc={PHOTOS.exterior}
      />

      <section className="py-20 sm:py-24">
        <div className="wrap">
          <FadeIn className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              {SERVICE_AREAS_DATA.length} cities · 15–20 mile radius
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">
              Every neighborhood. One honest bay.
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Click any city for neighborhood details, directions from your area, and why local drivers
              choose RKC over dealerships and chains.
            </p>
          </FadeIn>
          <ServiceAreaGrid showAllNeighborhoods columns={3} />
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PHOTOS.interior} alt="" fill className="object-cover" sizes="100vw" />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">Drive over. We&apos;ll take it from here.</h2>
            <p className="mt-2 max-w-lg text-white/75">{BUSINESS.address.full}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={BUSINESS.phoneHref} className="btn-green">
              <Phone className="size-5" />
              {BUSINESS.phone}
            </a>
            <Link href="/englewood-co-auto-repair" className="btn-ghost-light">
              Shop details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
