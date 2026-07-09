import { PHOTOS } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';
import { createServicePageMetadata } from '@/lib/og';

export const metadata = createServicePageMetadata(
  'Engine Diagnostics & Repair in Englewood, CO | RKC Automotive',
  'Expert engine diagnostics and repair in Englewood, CO. Advanced diagnostic equipment for all makes and models. Call (720) 749-3965 for engine service.',
  'engine-diagnostics-englewood-co',
  PHOTOS.engineBay,
  'Engine Diagnostics at RKC Automotive Englewood CO',
  'engine diagnostics Englewood CO, engine repair Denver, car diagnostics, check engine diagnosis',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Engine Diagnostics and Repair',
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
  description: 'Professional engine diagnostics and repair using advanced equipment for all makes and models in Englewood, CO.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

const symptoms = [
  'Loss of power or poor acceleration',
  'Rough idle, stalling, or hard starts',
  'Unusual noises from the engine bay',
  'Poor fuel economy that appears suddenly',
  'Check engine light or related warnings',
];

const includes = [
  'Computer code scan and live data',
  'Component and sensor testing',
  'Visual inspection under the hood',
  'Road test when appropriate',
  'Clear next-step repair plan',
];

export default function Page() {
  return (
    <ServicePageShell
      title="Engine Diagnostics in Englewood, CO"
      description="Advanced diagnostics that find the real problem fast — then clear written estimates before repairs begin."
      breadcrumbLabel="Engine Diagnostics"
      imageSrc={PHOTOS.engineBay}
      quickAnswer="Rough idle, power loss, or odd noises? We scan, test, and verify so you are not guessing — fee often applied toward approved repairs."
      schemaJson={schema}
      highlights={['Advanced scan tools', 'Road-test verification', 'Honest repair plans']}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Find the problem. Fix it once.</h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          Modern engines are complex. At RKC Automotive in Englewood, our ASE-certified technicians use professional diagnostic equipment to identify issues accurately — from misfires and sensor faults to timing and fuel-delivery problems.
        </p>
        <p className="leading-relaxed text-ink-muted">
          We do not throw parts at codes. We verify the root cause, explain it in plain language, and provide a written estimate before any repair work starts. Serving Englewood, Denver, Littleton, and the nearby metro.
        </p>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">When to schedule engine diagnostics</h3>
        <ul className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {symptoms.map((s) => (
            <li key={s} className="py-4 text-foreground">{s}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">What diagnostics include</h3>
        <ul className="mt-2 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {includes.map((item) => (
            <li key={item} className="py-4 font-medium text-foreground">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Schedule with RKC Automotive</h3>
        <p className="leading-relaxed text-ink-muted">
          Whether you drive a daily commuter or a specialty vehicle, accurate diagnostics save time and money. Call (720) 749-3965 to schedule engine service at our W Evans Ave shop.
        </p>
      </section>
    </ServicePageShell>
  );
}
