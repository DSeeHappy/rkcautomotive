import { PHOTOS } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';
import { createServicePageMetadata } from '@/lib/og';

export const metadata = createServicePageMetadata(
  'Preventative Maintenance in Englewood, CO | Keep Your Car Running | RKC Automotive',
  'Comprehensive preventative maintenance in Englewood, CO. Regular service keeps your vehicle reliable and prevents expensive repairs. Call (720) 749-3965 today.',
  'preventative-maintenance-englewood-co',
  PHOTOS.brandedBay,
  'Preventative Maintenance at RKC Automotive Englewood CO',
  'preventative maintenance Englewood CO, scheduled car maintenance Denver, vehicle service',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Preventative Maintenance',
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
  description: 'Comprehensive preventative maintenance and scheduled service for all makes and models in Englewood, CO.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

const symptoms = [
  'Approaching a mileage service interval',
  'Changing seasons (summer heat / winter cold)',
  'Before a long road trip',
  'After buying a used vehicle',
  'When multiple dashboard reminders appear',
];

const includes = [
  'Oil and filter service',
  'Cabin and engine air filters',
  'Fluid flushes when due',
  'Brake and battery inspections',
  'Seasonal Colorado readiness checks',
];

export default function Page() {
  return (
    <ServicePageShell
      title="Preventative Maintenance in Englewood, CO"
      description="Stay ahead of expensive repairs with scheduled service tailored to your vehicle and Colorado driving."
      breadcrumbLabel="Preventative Maintenance"
      imageSrc={PHOTOS.brandedBay}
      quickAnswer="Manufacturer intervals plus Colorado realities (heat, cold, altitude) — we follow recommend schedules and only flag what your car actually needs."
      schemaJson={schema}
      highlights={['Factory-aware schedules', 'Multi-point inspections', 'Fewer surprises']}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Maintenance that protects your wallet</h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          Preventative maintenance is how 5,000+ vehicles stay reliable under RKC care. Oil, filters, fluids, belts, brakes, and batteries — we organize service around your mileage, age, and driving conditions.
        </p>
        <p className="leading-relaxed text-ink-muted">
          You leave with a clear report of what was done and what is coming due. No scare tactics. Just ASE-certified technicians keeping Englewood drivers road-ready.
        </p>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">Good times to book maintenance</h3>
        <ul className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {symptoms.map((s) => (
            <li key={s} className="py-4 text-foreground">{s}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Maintenance we commonly perform</h3>
        <ul className="mt-2 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {includes.map((item) => (
            <li key={item} className="py-4 font-medium text-foreground">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Schedule with RKC Automotive</h3>
        <p className="leading-relaxed text-ink-muted">
          Build a maintenance plan that fits your vehicle — call (720) 749-3965 or visit 2120 W Evans Ave.
        </p>
      </section>
    </ServicePageShell>
  );
}
