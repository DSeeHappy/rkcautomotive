import type { Metadata } from 'next';
import Image from 'next/image';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS, GOOGLE_REVIEWS_URL, MAP_EMBED, PHOTOS } from '@/lib/constants';
import ContactForm from '@/app/components/ui/ContactForm';
import FadeIn from '@/app/components/ui/FadeIn';
import SocialLinks from '@/app/components/ui/SocialLinks';

export const metadata: Metadata = {
  title: 'Contact Us | RKC Automotive Englewood, CO',
  description:
    'Contact RKC Automotive for auto repair in Englewood, CO. Call (720) 749-3965 or visit us at 2120 W Evans Ave. Mon-Fri 8-6, Sat 8-12.',
  openGraph: {
    title: 'Contact RKC Automotive | Englewood, CO',
    description: 'Get in touch with RKC Automotive for expert auto repair and maintenance.',
    url: 'https://rkcautomotive.com/contact',
    type: 'website',
  },
};

const details = [
  {
    icon: Phone,
    label: 'Phone',
    value: BUSINESS.phone,
    href: BUSINESS.phoneHref,
    note: 'Fastest way to schedule',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: BUSINESS.address.full,
    href: BUSINESS.directionsUrl,
    note: 'Walk-ins welcome',
    external: true,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: `${BUSINESS.hours.weekdays} · ${BUSINESS.hours.saturday}`,
    note: BUSINESS.hours.sunday,
  },
  {
    icon: Mail,
    label: 'Email',
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    note: 'We reply as soon as we can',
  },
];

export default function ContactPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact RKC Automotive',
            url: 'https://rkcautomotive.com/contact',
            mainEntity: {
              '@type': 'AutomotiveBusiness',
              name: 'RKC Automotive',
              telephone: '+1-720-749-3965',
              email: BUSINESS.email,
              address: {
                '@type': 'PostalAddress',
                streetAddress: BUSINESS.address.street,
                addressLocality: BUSINESS.address.city,
                addressRegion: BUSINESS.address.state,
                postalCode: BUSINESS.address.zip,
                addressCountry: 'US',
              },
            },
          }),
        }}
      />

      {/* Split full-bleed photo + form — agency quality */}
      <section className="relative min-h-[100svh] lg:grid lg:grid-cols-2">
        <div className="relative min-h-[42svh] lg:min-h-full">
          <Image
            src={PHOTOS.exterior}
            alt="RKC Automotive shop exterior on W Evans Ave"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="photo-veil absolute inset-0" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 pt-28 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">Contact</p>
            <h1 className="mt-3 font-display text-5xl tracking-wide text-white sm:text-6xl lg:text-7xl">
              Reach the bay
            </h1>
            <p className="mt-4 max-w-md text-lg text-white/80">
              Call for same-day availability, or leave a message with your vehicle and symptoms — we&apos;ll follow up
              fast.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {details.map((d) => (
                <div key={d.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-primary-green-light">
                    <d.icon className="size-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em]">{d.label}</span>
                  </div>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.external ? '_blank' : undefined}
                      rel={d.external ? 'noopener noreferrer' : undefined}
                      className="mt-2 block text-sm font-semibold text-white hover:text-primary-green-light"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm font-semibold text-white">{d.value}</p>
                  )}
                  <p className="mt-1 text-xs text-white/55">{d.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center bg-[var(--background)] px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto w-full max-w-lg">
            <ContactForm />
            <div className="mt-10 border-t border-[color:var(--line)] pt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
                Connect &amp; reviews
              </p>
              <SocialLinks />
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green mt-6 w-full justify-center"
              >
                Leave a Google review
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <FadeIn>
          <iframe
            title="RKC Automotive Location"
            src={MAP_EMBED}
            width="100%"
            height="480"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </FadeIn>
      </section>
    </div>
  );
}
