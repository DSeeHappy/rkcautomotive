import { PHOTOS } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';
import { createServicePageMetadata } from '@/lib/og';
import { createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  'Exhaust System Repair in Englewood, CO | RKC',
  'Exhaust system repair in Englewood, CO — mufflers, catalytic converters, pipes, and emissions service for Denver south metro drivers. Call (720) 749-3965.',
  'exhaust-system-englewood-co',
  PHOTOS.undercarriage,
  'Exhaust System at RKC Automotive Englewood CO',
  'exhaust repair Englewood CO, muffler replacement Denver, catalytic converter',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Exhaust System Repair',
  provider: {
    '@type': 'AutomotiveBusiness',
    name: 'RKC Automotive',
    image: 'https://www.rkcautomotive.com/images/shop-exterior.webp',
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
    url: 'https://www.rkcautomotive.com',
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
  description: 'Exhaust system repair including mufflers, pipes, catalytic converters, and emissions-related repairs in Englewood, CO.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

const symptoms = [
  'Louder than normal exhaust note',
  'Rattling from under the vehicle',
  'Visible rust holes or dangling parts',
  'Exhaust smell in the cabin',
  'Failed emissions related to exhaust components',
];

const includes = [
  'Full undercarriage exhaust inspection',
  'Muffler and pipe repair or replacement',
  'Catalytic converter diagnosis',
  'Hanger and gasket service',
  'Leak sealing and verification',
];

export default function Page() {
  return (
    <ServicePageShell
      title="Exhaust System Repair in Englewood, CO"
      description="Quieter, safer, emissions-ready exhaust repairs — mufflers, pipes, and catalytic converters."
      breadcrumbLabel="Exhaust System"
      imageSrc={PHOTOS.undercarriage}
      quickAnswer="Loud roar, rattles under the car, or sulfur smells? Exhaust leaks and failing mufflers or converters need inspection soon for safety and emissions."
      schemaJson={schema}
      highlights={['Leak & hangar inspection', 'Muffler & pipe repair', 'Emissions support']}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Quiet, sealed, and roadworthy</h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          Exhaust systems rust, crack, and loosen — especially with Colorado roads and weather. RKC Automotive inspects hangers, flanges, mufflers, resonators, and catalytic converters, then quotes only what is needed.
        </p>
        <p className="leading-relaxed text-ink-muted">
          We help with noise complaints, underbody rattles, and emissions-related exhaust faults that keep check-engine lights or readiness monitors from cooperating.
        </p>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">Exhaust issues to watch for</h3>
        <ul className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {symptoms.map((s) => (
            <li key={s} className="py-4 text-foreground">{s}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Exhaust services</h3>
        <ul className="mt-2 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {includes.map((item) => (
            <li key={item} className="py-4 font-medium text-foreground">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Schedule with RKC Automotive</h3>
        <p className="leading-relaxed text-ink-muted">
          Schedule exhaust repair in Englewood at (720) 749-3965 — safe lifts, honest estimates, quality parts.
        </p>
      </section>
    </ServicePageShell>
  );
}
