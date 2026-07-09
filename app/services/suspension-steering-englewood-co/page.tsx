import { PHOTOS } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';
import { createServicePageMetadata } from '@/lib/og';

export const metadata = createServicePageMetadata(
  'Suspension & Steering Repair in Englewood, CO | RKC Automotive',
  'Professional suspension and steering repair in Englewood, CO. Shocks, struts, ball joints, alignment, and steering system service. Call (720) 749-3965.',
  'suspension-steering-englewood-co',
  PHOTOS.techCloseup,
  'Suspension & Steering at RKC Automotive Englewood CO',
  'suspension repair Englewood CO, steering repair Denver, shocks struts ball joints',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Suspension and Steering Repair',
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
  description: 'Suspension and steering repair including shocks, struts, ball joints, and steering components in Englewood, CO.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

const symptoms = [
  'Clunking or rattling over bumps',
  'Nose dive or excessive bouncing',
  'Steering wander or play in the wheel',
  'Uneven or rapid tire wear',
  'Vehicle leans or feels unstable in turns',
];

const includes = [
  'Shock and strut evaluation',
  'Ball joint and control arm inspection',
  'Tie rod and steering component checks',
  'Bushing and mount assessment',
  'Recommendations for alignment needs',
];

export default function Page() {
  return (
    <ServicePageShell
      title="Suspension & Steering in Englewood, CO"
      description="Restore ride quality and confident handling — shocks, struts, ball joints, and steering components done right."
      breadcrumbLabel="Suspension & Steering"
      imageSrc={PHOTOS.techCloseup}
      quickAnswer="Clunks over bumps, wandering steering, or uneven tire wear usually point to worn suspension or steering parts — we inspect and quote before replacing."
      schemaJson={schema}
      highlights={['Ride & handling focus', 'Safety-critical parts', 'Colorado-road ready']}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Handle Colorado roads with confidence</h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          Potholes, freeze-thaw cycles, and uneven pavement wear out shocks, struts, bushings, and ball joints. RKC Automotive diagnoses noise, wander, and tire wear issues with careful undercarriage inspection.
        </p>
        <p className="leading-relaxed text-ink-muted">
          We prioritize safety-critical components and explain what is worn versus what can wait — so you invest where it matters for ride quality and tire life.
        </p>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">Symptoms of worn suspension or steering</h3>
        <ul className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {symptoms.map((s) => (
            <li key={s} className="py-4 text-foreground">{s}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Suspension & steering services</h3>
        <ul className="mt-2 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {includes.map((item) => (
            <li key={item} className="py-4 font-medium text-foreground">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Schedule with RKC Automotive</h3>
        <p className="leading-relaxed text-ink-muted">
          Schedule suspension or steering service at (720) 749-3965. Same-day openings are often available for common repairs.
        </p>
      </section>
    </ServicePageShell>
  );
}
