import Link from 'next/link';
import { PHOTOS, LABOR_RATE } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';
import { createServicePageMetadata } from '@/lib/og';

export const metadata = createServicePageMetadata(
  'Camshaft & Hydraulic Lifter Repair in Englewood, CO | RKC Automotive',
  'Expert replacement for worn camshaft lobes, collapsed hydraulic lifters, and valve-train failures. Fix your engine tick or misfire in the Denver metro area.',
  'camshaft-lifter-repair-englewood-co',
  PHOTOS.classicEngine,
  'Camshaft and hydraulic lifter repair at RKC Automotive Englewood CO',
  'camshaft repair Englewood CO, lifter tick Denver, hydraulic lifter replacement, valvetrain repair HEMI AFM',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Camshaft and Hydraulic Lifter Repair',
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
    'Expert camshaft and hydraulic lifter replacement for worn lobes, collapsed lifters, and valvetrain failures in Englewood, CO and the Denver metro area.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

export default function CamshaftLifterRepairPage() {
  return (
    <ServicePageShell
      title="Camshaft Replacement & Hydraulic Lifter Repair in Englewood, CO"
      description="Eliminate engine ticking, localized misfires, and valvetrain metal wear before it destroys your entire engine block. Expert diagnostics and replacement for worn lobes and collapsed lifters."
      breadcrumbLabel="Camshaft & Lifters"
      imageSrc={PHOTOS.classicEngine}
      quickAnswer="Tick at startup that fades, or a misfire on one cylinder? Worn cam lobes and collapsed lifters are common on HEMI, GM AFM/DFM, and high-mileage overhead-valve engines — we diagnose before recommending a full valvetrain rebuild."
      schemaJson={schema}
      highlights={['Valvetrain diagnostics', 'Cam & lifter replacement', 'Oil gallery flush included']}
      relatedServices={[
        { name: 'Engine Diagnostics', href: '/services/engine-diagnostics-englewood-co' },
        { name: 'Check Engine Light', href: '/services/check-engine-light-englewood-co' },
        { name: 'Engine Rebuilds', href: '/services/engine-rebuilds-englewood-co' },
        { name: 'Oil Changes', href: '/services/oil-changes-englewood-co' },
      ]}
    >
      <section className="space-y-5">
        <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          The Infamous &apos;Engine Tick&apos; Explained
        </h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          That rhythmic tick from the valve cover is one of the most searched engine noises in Colorado — and for
          good reason. Hydraulic lifters rely on engine oil pressure to maintain zero lash in the valvetrain. When
          they bleed down overnight, you hear a cold-start tick that may fade as oil pressure builds. When they seize
          or collapse permanently, the tick stays — and the cam lobe takes the punishment. The HEMI lifter tick is
          practically a meme in Mopar circles: collapsed roller lifters let the follower hammer a flat spot into the
          cam, killing lift on that cylinder.
        </p>
        <p className="leading-relaxed text-ink-muted">
          GM&apos;s Active Fuel Management (AFM) and Dynamic Fuel Management (DFM) systems add another failure mode.
          Solenoids disable lifters on select cylinders for fuel economy, but oil starvation, deferred oil changes, and
          stuck AFM hardware cause lifters to collapse and lobes to wear prematurely — often triggering misfire codes
          on cylinders 1, 4, 6, or 7 depending on the engine family. Ignoring the tick does not make it go away; it
          sends metal through the oil galleries and into bearings you cannot see without a teardown.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          The Diagnostic Strategy
        </h2>
        <p className="leading-relaxed text-ink-muted">
          We do not swap a cam because the internet said so. Diagnosis starts with valvetrain clearance measurement
          where the engine design allows it, comparing intake and exhaust side readings against spec. A borescope
          through the spark-plug hole — or oil-cap opening on overhead-cam engines — lets us inspect lobe shape and
          follower wear without pulling the heads first. Compression and leak-down tests isolate whether a misfire is
          valvetrain-related or sealing-related.
        </p>
        <p className="leading-relaxed text-ink-muted">
          Oil filter debris analysis is the tell that confirms internal wear: metallic glitter or bronze-colored
          material in the filter media means the valvetrain is already shedding material downstream. We correlate
          scan-tool misfire counts, freeze-frame data, and physical findings before quoting cam-and-lifter work. That
          approach saves Englewood and Denver metro drivers from paying for a top-end job when the real issue is a
          sticking VVT solenoid, collapsed AFM tower, or a single bad injector masquerading as valvetrain noise.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Complete Valvetrain Component Restoration
        </h2>
        <p className="leading-relaxed text-ink-muted">
          When the cam is worn, partial repair is false economy. We replace the full cam assembly with a quality
          unit matched to your engine&apos;s VIN and performance needs — stock replacement for daily drivers, or
          upgraded profiles when you are already in there and want more usable range. Lifters are always replaced as
          a matched set; reusing collapsed units guarantees the tick comes back. Pushrods are inspected for straightness
          and end-cup wear, valve springs are checked for tension and height, and stem seals are replaced while the
          heads are accessible.
        </p>
        <p className="leading-relaxed text-ink-muted">
          Before buttoning up, we flush oil galleries to remove the debris that caused the failure in the first place.
          Labor is billed at our posted {LABOR_RATE} using published book times for cam-in-block and overhead-cam
          layouts — and you get a written estimate with your approval required before we order parts or open the
          engine. Whether you drive a ticking 5.7 HEMI, a Silverado with AFM misfires, or a high-mileage import with
          VVT rattle, RKC Automotive on Evans Ave handles the diagnosis and the repair under one roof.
        </p>
      </section>

      <section className="space-y-5 rounded-2xl border border-[color:var(--line)] bg-primary-blue/[0.04] p-6 sm:p-8">
        <h3 className="text-xl font-bold tracking-tight text-foreground">Stop the tick before it spreads</h3>
        <p className="leading-relaxed text-ink-muted">
          Schedule valvetrain diagnostics at our Englewood shop. We provide a clear written estimate at {LABOR_RATE}{' '}
          labor plus parts — and we will not start cam or lifter replacement until you approve the scope.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-blue">
            Book Valvetrain Service
          </Link>
          <a href="tel:+17207493965" className="btn-outline">
            Call (720) 749-3965
          </a>
        </div>
      </section>
    </ServicePageShell>
  );
}
