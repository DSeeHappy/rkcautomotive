import Image from 'next/image';
import { Phone } from 'lucide-react';
import JsonLd from '@/app/components/JsonLd';
import { BUSINESS, PHOTOS } from '@/lib/constants';
import { HERO_IMAGE_SIZES } from '@/lib/photos';
import PhoneLink from '@/app/components/ui/PhoneLink';
import PageHero from '@/app/components/ui/PageHero';
import VehicleCategoryCards from '@/app/components/ui/VehicleCategoryCards';
import VehiclesBelowFoldSections from '@/app/components/ui/VehiclesBelowFoldSections';
import { createPageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'All Makes & Models | Auto Repair Englewood, CO',
  description:
    'RKC Automotive services all makes and models — domestic, Asian imports, and European vehicles in Englewood and the Denver south metro. ASE-certified. Call (720) 749-3965.',
  path: '/vehicles-we-service',
  image: PHOTOS.classicLift,
  imageAlt: 'Classic car on lift at RKC Automotive — all makes and models serviced',
});

export default function VehiclesPage() {
  return (
    <div>
      <JsonLd
        data={[
          createWebPageSchema(
            'Vehicles We Service',
            'All makes and models serviced at RKC Automotive in Englewood, CO.',
            '/vehicles-we-service',
          ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Vehicles We Service', path: '/vehicles-we-service' },
          ]),
        ]}
      />
      <PageHero
        shell="vehicles"
        eyebrow="Vehicles"
        title="If it rolls into Englewood, we can help"
        description="From daily drivers to classics and European imports — ASE-certified tools and experience for every vehicle."
        imageSrc={PHOTOS.classicLift}
        imageAlt="Classic vehicle on lift at RKC Automotive in Englewood, CO"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Vehicles We Service' },
        ]}
      />

      <VehicleCategoryCards />

      <VehiclesBelowFoldSections />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.engineBay}
            alt="Engine bay service at RKC Automotive in Englewood, Colorado"
            fill
            className="object-cover"
            sizes={HERO_IMAGE_SIZES}
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">Your make. Our expertise.</h2>
            <p className="mt-3 max-w-lg text-white/75">
              Domestic, import, or European — same ASE-certified crew, same $120/hr posted rate.
            </p>
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
