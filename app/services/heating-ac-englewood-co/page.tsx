import { PHOTOS } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';
import { createServicePageMetadata } from '@/lib/og';

export const metadata = createServicePageMetadata(
  'Auto AC Repair & Heating Service in Englewood, CO | RKC Automotive',
  'Expert auto AC repair and heating service in Englewood, CO. AC recharge, compressor replacement, heater repair. Stay comfortable year-round. Call (720) 749-3965.',
  'heating-ac-englewood-co',
  PHOTOS.interior,
  'Heating & AC at RKC Automotive Englewood CO',
  'auto AC repair Englewood CO, car heater repair Denver, AC recharge',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Automotive Heating and Air Conditioning Service',
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
  description: 'Auto AC repair, recharge, compressor service, and heating system repair in Englewood, CO.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

const symptoms = [
  'AC blows warm or loses cold air',
  'Weak airflow from vents',
  'Unusual smells when climate is on',
  'Little or no cabin heat in winter',
  'Foggy windows that will not clear',
];

const includes = [
  'AC system performance testing',
  'Refrigerant leak evaluation',
  'Compressor and condenser service',
  'Heater and coolant flow checks',
  'Blower motor and cabin filter review',
];

export default function Page() {
  return (
    <ServicePageShell
      title="Heating & AC in Englewood, CO"
      description="Stay comfortable through Colorado summers and winters with climate-control diagnostics and repair."
      breadcrumbLabel="Heating & AC"
      imageSrc={PHOTOS.interior}
      quickAnswer="Warm AC vents or weak cabin heat? We diagnose refrigerant, compressor, blend doors, and heater issues before recommending repairs."
      schemaJson={schema}
      highlights={['AC performance testing', 'Heater system checks', 'Year-round comfort']}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Climate control that works when you need it</h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          Englewood summers demand strong air conditioning; winters demand reliable heat and defrost. RKC Automotive diagnoses AC and heating problems with proper testing — not just a quick recharge that masks a leak.
        </p>
        <p className="leading-relaxed text-ink-muted">
          From compressors and condensers to heater cores and blower motors, we identify the fault, quote clearly, and restore cabin comfort for daily drivers across the Denver metro.
        </p>
      </section>

      <section>
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">Common heating & AC symptoms</h3>
        <ul className="mt-6 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {symptoms.map((s) => (
            <li key={s} className="py-4 text-foreground">{s}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Climate services we offer</h3>
        <ul className="mt-2 divide-y divide-[color:var(--line)] border-y border-[color:var(--line)]">
          {includes.map((item) => (
            <li key={item} className="py-4 font-medium text-foreground">{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">Schedule with RKC Automotive</h3>
        <p className="leading-relaxed text-ink-muted">
          Call (720) 749-3965 to schedule auto AC or heater service before extreme temperatures hit.
        </p>
      </section>
    </ServicePageShell>
  );
}
