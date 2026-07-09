import { PHOTOS } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';
import { createServicePageMetadata } from '@/lib/og';

export const metadata = createServicePageMetadata(
  'Car Battery Testing & Replacement in Englewood, CO | RKC Automotive',
  "Free battery testing and professional battery replacement in Englewood, CO. Don't get stranded. Call (720) 749-3965 for battery service today.",
  'battery-testing-englewood-co',
  PHOTOS.teamCuevas,
  'Battery Testing at RKC Automotive Englewood CO',
  'battery testing Englewood CO, car battery replacement Denver, free battery test',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Battery Testing and Replacement',
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
  description: 'Free battery testing and professional battery replacement service in Englewood, CO.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

const symptoms = [
  'Slow engine crank, especially when cold',
  'Clicking sounds when starting',
  'Electrical accessories acting weak',
  'Battery older than 3–5 years',
  'Corrosion on terminals or a swollen case',
];

const includes = [
  'Free load / health testing',
  'Terminal and cable inspection',
  'Alternator output verification',
  'Correct-fit battery replacement',
  'Post-install start and charge confirmation',
];

export default function Page() {
  return (
    <ServicePageShell
      title="Battery Testing & Replacement in Englewood, CO"
      description="Free testing, charging-system checks, and quality replacements before a dead battery strands you."
      breadcrumbLabel="Battery Testing"
      imageSrc={PHOTOS.teamCuevas}
      quickAnswer="Slow starts in cold weather? Get a free battery test — we also check the alternator so you do not replace a battery that is being killed by a charging fault."
      schemaJson={schema}
      highlights={['Free battery test', 'Charging system check', 'Quality replacements']}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Colorado cold is hard on batteries</h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          Altitude, cold mornings, and short trips shorten battery life. RKC Automotive offers free battery testing so you know where you stand before you are stuck in a parking lot.
        </p>
        <p className="leading-relaxed text-ink-muted">
          If replacement is needed, we install the correct group size and verify the charging system. No guesswork, no ignored alternator problems that would ruin a new battery.
        </p>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">Battery red flags</h3>
        <ul className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {symptoms.map((s) => (
            <li key={s} className="py-4 text-foreground">{s}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Battery services</h3>
        <ul className="mt-2 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {includes.map((item) => (
            <li key={item} className="py-4 font-medium text-foreground">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Schedule with RKC Automotive</h3>
        <p className="leading-relaxed text-ink-muted">
          Stop by or call (720) 749-3965 for free battery testing at 2120 W Evans Ave in Englewood.
        </p>
      </section>
    </ServicePageShell>
  );
}
