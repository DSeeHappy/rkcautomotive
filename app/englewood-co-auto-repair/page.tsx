import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import PhoneLink from '@/app/components/ui/PhoneLink';
import JsonLd from '@/app/components/JsonLd';
import {
  BUSINESS,
  GOOGLE_REVIEWS_URL,
  MAP_EMBED,
  PHOTOS,
  SERVICE_AREAS_DATA,
  SERVICES,
  VERIFIED_REVIEWS_4_PLUS,
} from '@/lib/constants';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import ReviewCards from '@/app/components/ui/ReviewCards';
import SocialLinks from '@/app/components/ui/SocialLinks';
import { createPageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createLocalBusinessSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Englewood CO Auto Repair | RKC Automotive Location',
  description:
    'Visit RKC Automotive at 2120 W Evans Ave, Englewood, CO 80110. ASE-certified auto repair for Denver south metro. Mon–Fri 8AM–6PM, Sat 8AM–12PM. Call (720) 749-3965.',
  path: '/englewood-co-auto-repair',
  titleAbsolute: true,
  image: PHOTOS.exterior,
  imageAlt: 'RKC Automotive location at 2120 W Evans Ave, Englewood, CO 80110',
});

export default function LocationPage() {
  return (
    <div>
      <JsonLd
        data={[
          createLocalBusinessSchema({
            pageUrl: '/englewood-co-auto-repair',
            description:
              'ASE-certified auto repair at 2120 W Evans Ave, Englewood, CO 80110. Serving the Denver south metro.',
            areaServed: 'Englewood',
            includeRating: true,
          }),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Englewood Location', path: '/englewood-co-auto-repair' },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Location"
        title="The W Evans Ave bay"
        description="ASE-certified service at 2120 W Evans Ave — easy access for Englewood and Denver metro drivers."
        imageSrc={PHOTOS.exterior}
        imageAlt="RKC Automotive shop at 2120 W Evans Ave, Englewood, CO 80110"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Englewood Location' },
        ]}
      />

      <section className="py-20">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-green">Find us</p>
              <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground">
                {BUSINESS.address.street}
              </h2>
              <p className="mt-2 text-xl text-ink-muted">
                {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[color:var(--line)] bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Phone</p>
                  <PhoneLink className="mt-2 block font-display text-3xl tracking-wide text-primary-green">
                    {BUSINESS.phone}
                  </PhoneLink>
                </div>
                <div className="rounded-2xl border border-[color:var(--line)] bg-white p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Hours</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{BUSINESS.hours.weekdays}</p>
                  <p className="text-sm font-medium text-foreground">{BUSINESS.hours.saturday}</p>
                  <p className="text-sm text-ink-muted">{BUSINESS.hours.sunday}</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <PhoneLink className="btn-green">
                  <Phone className="size-4" />
                  Call now
                </PhoneLink>
                <a
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue"
                >
                  Get directions
                </a>
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-blue">
                  Google reviews
                </a>
              </div>
              <div className="mt-8">
                <SocialLinks />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image src={PHOTOS.exteriorBay} alt="RKC Automotive shop exterior in Englewood, CO" fill className="object-cover" sizes="50vw" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] bg-[var(--background)] py-20">
        <div className="wrap">
          <FadeIn className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">Verified reviews</p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-foreground">What customers say</h2>
          </FadeIn>
          <ReviewCards reviews={VERIFIED_REVIEWS_4_PLUS} />
        </div>
      </section>

      <iframe
        title="RKC Automotive Location"
        src={MAP_EMBED}
        width="100%"
        height="450"
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <section className="py-20">
        <div className="wrap">
          <h2 className="font-display text-4xl tracking-wide text-foreground">Areas we serve</h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            {SERVICE_AREAS_DATA.length} cities across the south Denver metro — click any city for neighborhoods and directions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {SERVICE_AREAS_DATA.map((area) => (
              <Link
                key={area.slug}
                href={area.href}
                className="rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary-green/40 hover:text-primary-green"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <Link
            href="/areas-we-serve"
            className="mt-6 inline-block text-sm font-bold text-primary-blue hover:text-primary-green"
          >
            View all areas with neighborhood details →
          </Link>
          <div className="mt-14">
            <h3 className="font-display text-3xl tracking-wide text-foreground">Popular services</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.slice(0, 6).map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex items-center justify-between rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 font-semibold text-foreground transition hover:border-primary-green/40 hover:text-primary-green"
                >
                  {s.name}
                  <span className="opacity-0 transition group-hover:opacity-100">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
