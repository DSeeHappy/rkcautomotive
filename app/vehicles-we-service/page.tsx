import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { BUSINESS, PHOTOS, VEHICLE_CATEGORIES } from '@/lib/constants';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { createPageMetadata } from '@/lib/og';

export const metadata = createPageMetadata({
  title: 'Vehicles We Service',
  description:
    'RKC Automotive services all makes and models — domestic, Asian imports, and European vehicles in Englewood, CO. Call (720) 749-3965.',
  path: '/vehicles-we-service',
  image: PHOTOS.classicLift,
  imageAlt: 'Classic car on lift at RKC Automotive — all makes and models serviced',
});

export default function VehiclesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Vehicles"
        title="If it rolls into Englewood, we can help"
        description="From daily drivers to classics and European imports — ASE-certified tools and experience for every vehicle."
        imageSrc={PHOTOS.classicLift}
      />

      <section className="py-20 sm:py-24">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-3">
            {VEHICLE_CATEGORIES.map((cat, i) => (
              <FadeIn key={cat.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-[color:var(--line)] bg-white p-8">
                  <h3 className="font-display text-3xl tracking-wide text-primary-blue">{cat.title}</h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {cat.brands.map((brand) => (
                      <li
                        key={brand}
                        className="rounded-full border border-[color:var(--line)] bg-[var(--background)] px-3.5 py-1.5 text-sm font-medium text-foreground"
                      >
                        {brand}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[360px]">
          <Image src={PHOTOS.classicEngine} alt="Classic car engine work at RKC" fill className="object-cover" sizes="50vw" />
        </div>
        <div className="relative flex flex-col justify-center overflow-hidden bg-primary-green px-8 py-16 text-white sm:px-12">
          <h2 className="font-display text-5xl tracking-wide">Domestic. Import. European.</h2>
          <p className="mt-4 max-w-md text-white/85">
            We service the full mix you see on Colorado roads — including the ones dealerships like to overcharge.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary-green hover:bg-gray-100">
              <Phone className="size-5" />
              {BUSINESS.phone}
            </a>
            <Link href="/services" className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10">
              Browse services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
