import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import JsonLd from '@/app/components/JsonLd';
import { BUSINESS, PHOTOS, SERVICE_AREAS_DATA } from '@/lib/constants';
import ServiceAreaGrid from '@/app/components/ui/ServiceAreaGrid';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { createPageMetadata } from '@/lib/og';
import {
  createBreadcrumbSchema,
  createItemListSchema,
  createWebPageSchema,
} from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Service Areas | Auto Repair South Denver Metro',
  description:
    'RKC Automotive serves 20 cities across south Denver metro — Englewood, Denver, Littleton, Highlands Ranch, Centennial, Aurora, Lakewood & more. Call (720) 749-3965.',
  path: '/areas-we-serve',
  image: PHOTOS.exterior,
  imageAlt: 'RKC Automotive serving the south Denver metro from Englewood, CO',
});

export default function AreasPage() {
  return (
    <div>
      <JsonLd
        data={[
          createWebPageSchema(
            'Areas We Serve',
            'Auto repair service areas across the south Denver metro from RKC Automotive in Englewood, CO.',
            '/areas-we-serve',
          ),
          createItemListSchema(
            'RKC Automotive Service Areas',
            SERVICE_AREAS_DATA.map((a) => ({
              name: `${a.name}, CO`,
              url: a.href,
              description: a.metaDescription,
            })),
          ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Areas We Serve', path: '/areas-we-serve' },
          ]),
        ]}
      />
      <PageHero
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
              Click any city for neighborhood details, directions from your area, and why local drivers choose RKC over
              dealerships and chains.
            </p>
          </FadeIn>
          <ServiceAreaGrid showAllNeighborhoods />
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.interior}
            alt="RKC Automotive service bays in Englewood, Colorado"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">Serving your neighborhood</h2>
            <p className="mt-3 max-w-lg text-white/75">
              One Englewood location, ASE-certified crew, and honest pricing for drivers across the south Denver metro.
            </p>
          </div>
          <Link href="/contact" className="btn-green">
            Schedule service
          </Link>
        </div>
      </section>
    </div>
  );
}
