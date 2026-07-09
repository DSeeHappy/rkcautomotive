import { PHOTOS } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';
import { createServicePageMetadata } from '@/lib/og';
import { createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  'Transmission Repair in Englewood, CO | RKC Automotive',
  'Transmission service and repair in Englewood, CO — automatic, manual, fluid service, and diagnostics for Denver south metro drivers. Call (720) 749-3965.',
  'transmission-services-englewood-co',
  PHOTOS.classicLift,
  'Transmission Services at RKC Automotive Englewood CO',
  'transmission repair Englewood CO, transmission fluid service Denver, automatic transmission',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Transmission Service and Repair',
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
  description: 'Transmission diagnostics, fluid service, and repair for automatic and manual transmissions in Englewood, CO.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

const symptoms = [
  'Slipping between gears or delayed engagement',
  'Harsh, jerky, or unpredictable shifts',
  'Burning smell or dark transmission fluid',
  'Whining, clunking, or buzzing noises',
  'Transmission warning light or limp mode',
];

const includes = [
  'Fluid condition and level inspection',
  'Transmission fluid service options',
  'Diagnostic evaluation of shift quality',
  'External leak inspection',
  'Honest repair-vs-service guidance',
];

export default function Page() {
  return (
    <ServicePageShell
      title="Transmission Services in Englewood, CO"
      description="Fluid services, diagnostics, and repairs that protect one of the most expensive systems in your vehicle."
      breadcrumbLabel="Transmission Services"
      imageSrc={PHOTOS.classicLift}
      quickAnswer="Slipping, harsh shifts, or delayed engagement? Get a transmission inspection and estimate before a small issue becomes a rebuild."
      schemaJson={schema}
      highlights={['Fluid & filter service', 'Shift quality diagnostics', 'Written estimates first']}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Smooth shifts start with honest service</h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          Transmission problems rarely fix themselves. RKC Automotive in Englewood provides transmission fluid service, diagnostics, and repair recommendations based on what your vehicle actually needs — not a one-size-fits-all upsell.
        </p>
        <p className="leading-relaxed text-ink-muted">
          Colorado stop-and-go traffic and mountain driving stress transmissions. Early fluid maintenance and accurate diagnosis can extend the life of the unit and prevent roadside failures.
        </p>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">Transmission warning signs</h3>
        <ul className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {symptoms.map((s) => (
            <li key={s} className="py-4 text-foreground">{s}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Transmission care we provide</h3>
        <ul className="mt-2 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {includes.map((item) => (
            <li key={item} className="py-4 font-medium text-foreground">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Schedule with RKC Automotive</h3>
        <p className="leading-relaxed text-ink-muted">
          Call (720) 749-3965 for transmission service in Englewood. We explain findings clearly and never start work without your approval.
        </p>
      </section>
    </ServicePageShell>
  );
}
