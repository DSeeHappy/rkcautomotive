import { PHOTOS } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';
import { createServicePageMetadata } from '@/lib/og';
import { createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  'Auto Electrical System Repair in Englewood, CO | RKC Automotive',
  'Expert auto electrical repair in Englewood, CO. Battery, alternator, starter, wiring, and electrical diagnostics. Call (720) 749-3965 for reliable electrical service.',
  'electrical-system-englewood-co',
  PHOTOS.teamInspect,
  'Electrical System at RKC Automotive Englewood CO',
  'auto electrical repair Englewood CO, alternator starter Denver, car wiring',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Automotive Electrical System Repair',
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
  description: 'Automotive electrical diagnostics and repair including alternator, starter, wiring, and charging systems in Englewood, CO.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

const symptoms = [
  'Slow crank or no-start conditions',
  'Dim headlights or flickering interior lights',
  'Battery or charging warning lights',
  'Accessories cutting out unexpectedly',
  'Burning smell or visible wire damage',
];

const includes = [
  'Battery and charging system tests',
  'Starter draw and engagement checks',
  'Alternator output verification',
  'Ground and connection inspection',
  'Module and circuit diagnostics as needed',
];

export default function Page() {
  return (
    <ServicePageShell
      title="Electrical System Repair in Englewood, CO"
      description="Charging issues, starters, wiring faults, and electrical quirks diagnosed with methodical testing."
      breadcrumbLabel="Electrical System"
      imageSrc={PHOTOS.teamInspect}
      quickAnswer="Dim lights, no-crank starts, or random warning lights often start in the charging or starter circuit — we test before replacing parts."
      schemaJson={schema}
      highlights={['Charging system tests', 'Starter diagnostics', 'No parts-guessing']}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Electrical problems need proof, not guesswork</h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          Modern vehicles rely on dozens of sensors, modules, and power circuits. RKC Automotive traces electrical faults carefully — verifying batteries, alternators, starters, grounds, and wiring before recommending replacement.
        </p>
        <p className="leading-relaxed text-ink-muted">
          Intermittent issues are the hardest. We take the time to reproduce symptoms when possible and give you a written plan so you are not stuck swapping expensive parts hope-to-hope.
        </p>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">Electrical warning signs</h3>
        <ul className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {symptoms.map((s) => (
            <li key={s} className="py-4 text-foreground">{s}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Electrical services</h3>
        <ul className="mt-2 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {includes.map((item) => (
            <li key={item} className="py-4 font-medium text-foreground">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Schedule with RKC Automotive</h3>
        <p className="leading-relaxed text-ink-muted">
          Need electrical diagnostics in Englewood? Call (720) 749-3965 — we will get to the root cause.
        </p>
      </section>
    </ServicePageShell>
  );
}
