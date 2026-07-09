import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import JsonLd from '@/app/components/JsonLd';
import { BUSINESS, PHOTOS, SERVICES } from '@/lib/constants';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { createPageMetadata } from '@/lib/og';
import {
  createBreadcrumbSchema,
  createItemListSchema,
  createWebPageSchema,
} from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Auto Repair Services in Englewood, CO | RKC Automotive',
  description:
    'Complete auto repair in Englewood, CO: brakes, engine diagnostics, oil changes, transmission, AC, electrical, and more. ASE-certified. Call (720) 749-3965.',
  path: '/services',
  image: PHOTOS.interior,
  imageAlt: 'Full-service auto repair bays at RKC Automotive in Englewood, CO',
});

export default function ServicesPage() {
  return (
    <div>
      <JsonLd
        data={[
          createWebPageSchema(
            'Auto Repair Services',
            'Complete auto repair services in Englewood, CO and the south Denver metro.',
            '/services',
          ),
          createItemListSchema(
            'RKC Automotive Services',
            SERVICES.map((s) => ({
              name: s.name,
              url: s.href,
              description: s.description,
            })),
          ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Eleven lanes of real shop work"
        description="From preventative maintenance to diesel, transmission, and extended-warranty repairs — ASE-certified technicians behind every job at our Englewood shop."
        imageSrc={PHOTOS.interior}
        imageAlt="Auto repair service bays at RKC Automotive in Englewood, CO"
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
                    alt={`${service.name} at RKC Automotive in Englewood, CO`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0c1222]/20 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <service.icon className="size-8 text-primary-green" />
                  <h2 className="mt-4 font-display text-4xl tracking-wide text-white">{service.name}</h2>
                  <p className="mt-3 text-white/70">{service.description}</p>
                  <span className="mt-6 text-sm font-bold text-primary-green">Learn more →</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.exteriorBay}
            alt="RKC Automotive shop exterior in Englewood, Colorado"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="photo-veil-deep absolute inset-0" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
              Not sure what you need?
            </h2>
            <p className="mt-3 max-w-lg text-white/75">
              Call our Englewood shop — we will diagnose the issue and give you a written estimate before any work
              begins.
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
