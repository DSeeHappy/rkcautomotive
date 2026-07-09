import { PHOTOS } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';
import { createServicePageMetadata } from '@/lib/og';
import { createServiceSchema } from '@/lib/seo';

export const metadata = createServicePageMetadata(
  'Brake Repair in Englewood, CO | Expert Brake Service | RKC Automotive',
  'Professional brake repair and service in Englewood, CO. Brake pads, rotors, calipers, and complete brake system service. Call (720) 749-3965 for same-day service.',
  'brake-repair-englewood-co',
  PHOTOS.undercarriage,
  'Brake Repair Service at RKC Automotive Englewood CO',
  'brake repair Englewood CO, brake service Denver, brake pads replacement, rotor resurfacing, brake inspection',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Brake Repair and Service',
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
  description:
    'Professional brake repair and service including brake pad replacement, rotor resurfacing, caliper repair, and complete brake system diagnostics in Englewood, CO.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

const symptoms = [
  'Squealing or grinding when braking',
  'Soft, spongy, or vibrating brake pedal',
  'Vehicle pulls to one side under braking',
  'Longer stopping distances than usual',
  'Brake warning light on the dash',
];

const includes = [
  'Brake pad and rotor inspection',
  'Pad replacement and rotor service',
  'Caliper and hardware evaluation',
  'Brake fluid condition check',
  'Test drive and final safety verification',
];

export default function BrakeRepairPage() {
  return (
    <ServicePageShell
      title="Brake Repair in Englewood, CO"
      description="Pads, rotors, calipers, and full brake-system service from ASE-certified technicians — with written estimates before any work begins."
      breadcrumbLabel="Brake Repair"
      imageSrc={PHOTOS.undercarriage}
      quickAnswer="If you hear grinding, feel vibration, or notice a soft pedal, schedule brake service soon — we inspect for free and only recommend what you need."
      schemaJson={schema}
      highlights={['Free brake inspection', 'Pads & rotors done right', 'Same-day openings when available']}
    >
      <section className="space-y-5">
        <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          Expert brake service you can feel
        </h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          Your brakes are the most important safety system on your vehicle. At RKC Automotive in Englewood, we
          diagnose noise, vibration, and pedal feel issues with a thorough inspection — then give you a clear
          written estimate for pads, rotors, calipers, or fluid service before we start.
        </p>
        <p className="leading-relaxed text-ink-muted">
          Colorado hills, traffic, and winter conditions put extra demand on braking systems. Whether you commute
          through Denver metro or drive locally around Englewood, worn pads and warped rotors can sneak up fast.
          We service domestic, Asian, and European vehicles with quality parts and ASE-certified workmanship.
        </p>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
          Signs you need brake repair
        </h3>
        <ul className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {symptoms.map((s) => (
            <li key={s} className="py-4 text-foreground">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">What our brake service includes</h3>
        <p className="leading-relaxed text-ink-muted">
          Every brake job starts with a full visual inspection. We check pad thickness, rotor condition, caliper
          function, hoses, and fluid. If repairs are needed, you approve the estimate first — no surprises.
        </p>
        <ul className="mt-2 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {includes.map((item) => (
            <li key={item} className="py-4 font-medium text-foreground">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">
          Why Englewood drivers choose RKC for brakes
        </h3>
        <p className="leading-relaxed text-ink-muted">
          We don&apos;t upsell unnecessary rotor replacements or premium packages you don&apos;t need. You get
          honest recommendations, competitive pricing versus dealerships, and repairs backed by our commitment to
          quality. Many brake jobs can be completed the same day when parts are on hand — call (720) 749-3965 to
          check availability.
        </p>
      </section>
    </ServicePageShell>
  );
}
