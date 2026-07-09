import { PHOTOS } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';
import { createServicePageMetadata } from '@/lib/og';
import { createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  'Check Engine Light Diagnosis | Englewood, CO',
  'Check engine light diagnosis in Englewood, CO. Find the real problem — not every sensor on the diagram — with ASE-certified diagnostics. Call (720) 749-3965.',
  'check-engine-light-englewood-co',
  PHOTOS.engineRebuild,
  'Check Engine Light at RKC Automotive Englewood CO',
  'check engine light Englewood CO, CEL diagnosis Denver, OBD diagnostic',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Check Engine Light Diagnosis',
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
  description: 'Check engine light diagnosis and repair including code verification and root-cause testing in Englewood, CO.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

const symptoms = [
  'Steady check engine or service engine soon light',
  'Flashing check engine light during driving',
  'Failed or incomplete Colorado emissions readiness',
  'Reduced power or limp-mode driving',
  'Fuel smell, rough running, or poor MPG with the light on',
];

const includes = [
  'OBD-II code retrieval and freeze-frame review',
  'Live data and targeted component tests',
  'Smoke or leak checks when relevant',
  'Road test replication of the fault',
  'Prioritized repair estimate',
];

export default function Page() {
  return (
    <ServicePageShell
      title="Check Engine Light Diagnosis in Englewood, CO"
      description="We go beyond the code — verify the fault, explain the fix, and apply diagnostic fees toward approved repairs."
      breadcrumbLabel="Check Engine Light"
      imageSrc={PHOTOS.engineRebuild}
      quickAnswer="Steady light? You can usually drive carefully to the shop. Flashing light? Reduce load and call us — a misfire can damage the catalytic converter quickly."
      schemaJson={schema}
      highlights={['Code + verification', 'Emissions help', 'Fee credit toward repair']}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">A light that deserves a real answer</h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          A check engine light can mean a loose gas cap — or a failing catalytic converter. RKC Automotive in Englewood retrieves codes, then performs follow-up testing so you are not paying for parts that will not clear the light.
        </p>
        <p className="leading-relaxed text-ink-muted">
          We help drivers pass emissions concerns, unravel intermittent faults, and prioritize safety when a flashing light signals an active misfire.
        </p>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">What the light may be telling you</h3>
        <ul className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {symptoms.map((s) => (
            <li key={s} className="py-4 text-foreground">{s}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Our diagnostic approach</h3>
        <ul className="mt-2 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {includes.map((item) => (
            <li key={item} className="py-4 font-medium text-foreground">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Schedule with RKC Automotive</h3>
        <p className="leading-relaxed text-ink-muted">
          Check engine light on in Englewood? Call (720) 749-3965 — diagnostics typically from $99 and often applied to the repair.
        </p>
      </section>
    </ServicePageShell>
  );
}
