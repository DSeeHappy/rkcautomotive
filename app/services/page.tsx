import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { BUSINESS, PHOTOS, SERVICES } from '@/lib/constants';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Auto Repair Services in Englewood, CO',
  description:
    'Complete auto repair services in Englewood, CO: brakes, diagnostics, oil changes, batteries, transmission, AC, and more. Call (720) 749-3965.',
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Eleven lanes of real shop work"
        description="From preventative maintenance to diesel, transmission, and extended-warranty repairs — ASE-certified technicians behind every job at our Englewood shop."
        imageSrc={PHOTOS.interior}
      />

      <section className="py-20 sm:py-24">
        <div className="wrap space-y-5">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.href} delay={Math.min(i * 0.03, 0.24)}>
              <Link
                href={service.href}
                className="group grid overflow-hidden rounded-3xl bg-[#0c1222] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
              >
                <div className="relative min-h-[200px] md:min-h-[260px]">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-green-light">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">{service.name}</h2>
                  <p className="mt-3 max-w-md text-white/65">{service.description}</p>
                  <span className="mt-6 inline-flex text-sm font-bold text-primary-green-light transition group-hover:gap-2">
                    Learn more →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={PHOTOS.exteriorBay} alt="" fill className="object-cover" sizes="100vw" />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <FadeIn>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">Not sure which service?</h2>
            <p className="mt-2 max-w-lg text-white/75">
              Describe the symptoms — we&apos;ll point you in the right direction or start with a diagnostic.
            </p>
          </FadeIn>
          <div className="flex flex-wrap gap-3">
            <a href={BUSINESS.phoneHref} className="btn-green">
              <Phone className="size-5" />
              {BUSINESS.phone}
            </a>
            <Link href="/pricing" className="btn-ghost-light">
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
