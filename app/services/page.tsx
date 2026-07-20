import Link from 'next/link';
import Image from 'next/image';
import { Phone, Shield, Sparkles } from 'lucide-react';
import JsonLd from '@/app/components/JsonLd';
import { BUSINESS, PHOTOS, SERVICE_CATEGORIES, SERVICES } from '@/lib/constants';
import { HERO_IMAGE_SIZES } from '@/lib/photos';
import PhoneLink from '@/app/components/ui/PhoneLink';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';
import { createPageMetadata } from '@/lib/og';
import {
  createBreadcrumbSchema,
  createItemListSchema,
  createWebPageSchema,
} from '@/lib/seo';

const serviceBySlug = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

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
            '/services',
          ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
        ]}
      />
      <PageHero
        shell="services"
        eyebrow="Services"
        title="Every system. One Englewood shop."
        description="Engine rebuilds to oil changes — ASE-certified technicians, $120/hr posted labor, and written estimates before any wrench turns at 2120 W Evans Ave."
        imageSrc={PHOTOS.interior}
        imageAlt="Auto repair service bays at RKC Automotive in Englewood, CO"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="wrap">
          <FadeIn className="mb-10 flex flex-wrap gap-4">
            <Link
              href="/warranty"
              className="group flex flex-1 min-w-[16rem] items-center gap-4 rounded-2xl border border-primary-green/25 bg-primary-green/5 p-6 transition hover:border-primary-green/40 hover:bg-primary-green/8"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary-green/15 ring-1 ring-primary-green/25">
                <Shield className="size-6 text-primary-green" />
              </span>
              <span>
                <span className="block font-display text-2xl tracking-wide text-primary-blue">Extended warranty repair</span>
                <span className="mt-1 block text-sm text-ink-muted">Endurance, CarShield, and third-party claims welcome</span>
              </span>
            </Link>
            <Link
              href="/services/engine-rebuilds-englewood-co"
              className="group flex flex-1 min-w-[16rem] items-center gap-4 rounded-2xl border border-primary-blue/20 bg-primary-blue/5 p-6 transition hover:border-primary-blue/35 hover:bg-primary-blue/8"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary-blue/15 ring-1 ring-primary-blue/25">
                <Sparkles className="size-6 text-primary-blue" />
              </span>
              <span>
                <span className="block font-display text-2xl tracking-wide text-primary-blue">Engine rebuilds &amp; camshaft</span>
                <span className="mt-1 block text-sm text-ink-muted">Long-block, short-block, HEMI tick, GM AFM valvetrain</span>
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {SERVICE_CATEGORIES.map((category, catIndex) => (
        <section
          key={category.label}
          className={`py-16 sm:py-20 ${catIndex % 2 === 0 ? 'bg-[var(--background)]' : 'bg-white'}`}
        >
          <div className="wrap">
            <FadeIn className="mb-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">{category.label}</p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground sm:text-5xl">{category.label}</h2>
              <p className="mt-4 text-lg text-ink-muted">{category.description}</p>
            </FadeIn>

            <Stagger className="grid gap-5 sm:grid-cols-2" stagger={0.06}>
              {category.slugs.map((slug) => {
                const service = serviceBySlug[slug];
                if (!service) return null;
                const Icon = service.icon;
                const isPremium = slug === 'engine-rebuilds-englewood-co' || slug === 'camshaft-lifter-repair-englewood-co';
                return (
                  <StaggerItem key={slug}>
                    <Link
                      href={service.href}
                      className="group grid overflow-hidden rounded-3xl bg-[#0c1222] sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
                    >
                      <div className="relative min-h-[180px] sm:min-h-[220px]">
                        <Image
                          src={service.image}
                          alt={`${service.name} at RKC Automotive in Englewood, CO`}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.accent} mix-blend-multiply opacity-40`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222]/60 to-transparent" />
                      </div>
                      <div className="flex flex-col justify-center p-6 sm:p-8">
                        <div className="flex items-center gap-3">
                          <Icon className="size-7 text-primary-green-light" aria-hidden />
                          {isPremium && <Sparkles className="size-4 text-primary-green-light" aria-hidden />}
                        </div>
                        <h3 className="mt-3 font-display text-3xl tracking-wide text-white sm:text-4xl">{service.name}</h3>
                        <p className="mt-2 text-sm text-white/70 sm:text-base">{service.description}</p>
                        <span className="mt-5 text-sm font-bold text-primary-green-light">Learn more →</span>
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={PHOTOS.exteriorBay}
            alt="RKC Automotive shop exterior in Englewood, Colorado"
            fill
            className="object-cover"
            sizes={HERO_IMAGE_SIZES}
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
          <PhoneLink className="btn-green">
            <Phone className="size-5" />
            {BUSINESS.phone}
          </PhoneLink>
        </div>
      </section>
    </div>
  );
}
