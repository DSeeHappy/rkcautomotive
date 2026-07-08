import type { Metadata } from 'next';
import { PHOTOS } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';

export const metadata: Metadata = {
  title: 'Oil Change Service in Englewood, CO | Quick & Affordable | RKC Automotive',
  description: 'Fast, affordable oil change service in Englewood, CO. Synthetic, conventional, and high-mileage oil. Fluid top-off included. Call (720) 749-3965 today.',
  keywords: 'oil change Englewood CO, synthetic oil change Denver, quick oil change',
  openGraph: {
    title: 'Oil Change Service in Englewood, CO | RKC Automotive',
    description: 'Conventional and synthetic oil changes with multi-point inspection.',
    url: 'https://rkcautomotive.com/services/oil-changes-englewood-co',
    type: 'website',
    images: [{
      url: '/images/team-lift-collaboration.webp',
      width: 1200,
      height: 630,
      alt: 'Oil Changes at RKC Automotive Englewood CO',
    }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Oil Change Service',
  provider: {
    '@type': 'AutomotiveBusiness',
    name: 'RKC Automotive',
    image: 'https://rkcautomotive.com/images/shop-exterior.webp',
    telephone: '+1-720-749-3965',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2120 W Evans Ave',
      addressLocality: 'Englewood',
      addressRegion: 'CO',
      postalCode: '80110',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: '39.6711', longitude: '-105.0239' },
    url: 'https://rkcautomotive.com',
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
  },
  areaServed: {
    '@type': 'City',
    name: 'Englewood',
    '@id': 'https://en.wikipedia.org/wiki/Englewood,_Colorado',
  },
  description: 'Conventional, synthetic, and high-mileage oil change service with filter replacement in Englewood, CO.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

const symptoms = [
  'You are due by miles or months on the sticker',
  'Oil looks dark or gritty on the dipstick',
  'Oil life monitor indicates service needed',
  'Engine is louder than usual at startup',
  'You are prepping for a long trip or mountain drive',
];

const includes = [
  'Drain and refill with correct oil type',
  'New oil filter installation',
  'Fluid and filter top-off checks',
  'Tire pressure visual review',
  'Multi-point inspection notes',
];

export default function Page() {
  return (
    <ServicePageShell
      title="Oil Changes in Englewood, CO"
      description="Conventional and synthetic oil service with filter replacement and a multi-point inspection."
      breadcrumbLabel="Oil Changes"
      imageSrc={PHOTOS.teamCollab}
      quickAnswer="Regular oil changes are the cheapest way to protect your engine in Colorado heat, cold, and altitude — conventional from $49, synthetic from $79."
      schemaJson={schema}
      highlights={['Filter included', 'Multi-point lookover', 'Fast, careful service']}
    >
      <section className="space-y-5">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Simple maintenance that protects big repairs</h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          Fresh oil and a quality filter keep engines lubricated under Colorado temperature swings. At RKC Automotive we install the correct viscosity for your vehicle, replace the filter, and check other fluids while your car is in the bay.
        </p>
        <p className="leading-relaxed text-ink-muted">
          We are not a five-minute lube with endless upsells. You get makers-aware recommendations, a free multi-point inspection with service, and clear notes if something else needs attention.
        </p>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">It is time for an oil change when</h3>
        <ul className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {symptoms.map((s) => (
            <li key={s} className="py-4 text-foreground">{s}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">What is included</h3>
        <ul className="mt-2 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {includes.map((item) => (
            <li key={item} className="py-4 font-medium text-foreground">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Schedule with RKC Automotive</h3>
        <p className="leading-relaxed text-ink-muted">
          Walk in or call (720) 749-3965 for a fast oil change in Englewood — Mon–Fri 8–5, Sat 8–12.
        </p>
      </section>
    </ServicePageShell>
  );
}
