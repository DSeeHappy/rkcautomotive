import Link from 'next/link';
import { PHOTOS, LABOR_RATE } from '@/lib/constants';
import ServicePageShell from '@/app/components/ui/ServicePageShell';
import { createServicePageMetadata } from '@/lib/og';

export const metadata = createServicePageMetadata(
  'Complete Engine Rebuilds & Overhauls in Englewood, CO | RKC Automotive',
  'Professional long-block and short-block engine rebuilding, machining, and blueprinting in Englewood. Precision piston rings, bearings, and complete block restoration.',
  'engine-rebuilds-englewood-co',
  PHOTOS.engineRebuild,
  'Engine rebuild and overhaul service at RKC Automotive Englewood CO',
  'engine rebuild Englewood CO, long block rebuild Denver, short block overhaul, engine machining blueprinting',
);

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Engine Rebuild and Overhaul',
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
    'Professional long-block and short-block engine rebuilding, machining, and blueprinting in Englewood, CO — precision piston rings, bearings, and complete block restoration.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
};

export default function EngineRebuildsPage() {
  return (
    <ServicePageShell
      title="Precision Engine Rebuilding & Remanufacturing in Englewood, CO"
      description="When an engine suffers catastrophic failure or severe wear, a fast fix won't cut it. We pull, strip, machine, blueprint, and rebuild domestic and import engines down to the bare block right here in our Evans Ave bay."
      breadcrumbLabel="Engine Rebuilds"
      imageSrc={PHOTOS.engineRebuild}
      quickAnswer="Rod knock, low oil pressure, or blow-by past the rings? A full rebuild restores clearances, sealing surfaces, and rotating-assembly balance — with a written estimate and your approval before teardown begins."
      schemaJson={schema}
      highlights={['Long- & short-block rebuilds', 'Machine shop blueprinting', 'Written estimates first']}
      relatedServices={[
        { name: 'Engine Diagnostics', href: '/services/engine-diagnostics-englewood-co' },
        { name: 'Check Engine Light', href: '/services/check-engine-light-englewood-co' },
        { name: 'Camshaft & Lifters', href: '/services/camshaft-lifter-repair-englewood-co' },
        { name: 'Oil Changes', href: '/services/oil-changes-englewood-co' },
      ]}
    >
      <section className="space-y-5">
        <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          The Symptoms of a Tired Block
        </h2>
        <p className="text-lg leading-relaxed text-ink-muted">
          An engine that has lived past its useful life does not always fail all at once. Often the warning signs
          accumulate quietly — until a single drive home from the mountains turns into an expensive tow. Blow-by past
          worn piston rings pressurizes the crankcase, forcing oil past seals and producing blue exhaust smoke under
          load. Low oil pressure at idle — especially once the engine is hot — usually traces back to bearing
          clearances that have opened up far beyond factory spec. Rod knock from spun main or rod bearings is the
          unmistakable hammering that means metal has already moved where it should not.
        </p>
        <p className="leading-relaxed text-ink-muted">
          At RKC Automotive in Englewood, we see these failures on high-mileage commuters, neglected oil-change
          intervals, and engines that ran hot after a coolant loss. Colorado altitude and towing loads accelerate
          wear on domestic V8s and turbocharged imports alike. If compression is uneven, oil consumption is climbing,
          or you hear bottom-end knock, a band-aid repair will not restore reliability — the block needs to come
          apart, measured, and rebuilt to spec.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          The Machine Shop &amp; Blueprinting Process
        </h2>
        <p className="leading-relaxed text-ink-muted">
          A proper rebuild starts with the engine on a stand and every fastener cataloged. We strip the assembly to
          the bare casting — block, crank, rods, pistons, heads — and send components through our machine-shop
          workflow. Blocks are hot-tanked to remove sludge and scale, then magnafluxed to reveal hairline cracks that
          would doom a fresh assembly. Cylinders are bored and honed with torque plates installed so the final finish
          matches what the engine sees under head-bolt clamping load. Deck surfaces are resurfaced for a flat, true
          sealing surface — critical when you are running a multi-layer steel head gasket that tolerates almost zero
          imperfection.
        </p>
        <p className="leading-relaxed text-ink-muted">
          Blueprinting means measuring everything against factory or performance spec and correcting what is out of
          tolerance. Crankshafts are mic&apos;d, polished or ground as needed, and dynamically balanced with the rod
          and piston assemblies they will spin with. That balance work reduces vibration, protects bearings, and helps
          a rebuilt engine feel as smooth as it did on the showroom floor. Every step is documented so you know
          exactly what was machined, replaced, or reused — no mystery inside the block when it goes back in the
          vehicle.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          The Component Checklist
        </h2>
        <p className="leading-relaxed text-ink-muted">
          Reassembly is only as good as the parts going in. We match pistons to bore size — hyper-eutectic for many
          daily-driver rebuilds, forged slugs when boost, nitrous, or towing demands extra margin. Rings are file-fit
          to each bore for correct gap and sealing. Bearings come from trusted names like Clevite and King, sized to
          the actual clearances we measured rather than pulled blindly from a shelf. Oil pumps, timing sets, and
          gaskets/seals round out the rotating assembly and front-end drive so lubrication and timing are restored
          from the first crank rotation.
        </p>
        <p className="leading-relaxed text-ink-muted">
          Labor is billed at our posted {LABOR_RATE} rate using AllData and Mitchell book times as a baseline — but
          every rebuild gets a written estimate before teardown, and we call with photos if we find cracks, scored
          journals, or head damage that changes scope. Nothing moves forward without your approval. Major engine work
          is a significant investment; transparent pricing and documented machine work are how we earn the trust of
          Englewood, Denver, and south-metro drivers who need the job done once, done right.
        </p>
      </section>

      <section className="space-y-5 rounded-2xl border border-[color:var(--line)] bg-primary-blue/[0.04] p-6 sm:p-8">
        <h3 className="text-xl font-bold tracking-tight text-foreground">Ready for a rebuild estimate?</h3>
        <p className="leading-relaxed text-ink-muted">
          Book a consultation at our W Evans Ave shop. We review symptoms, discuss long-block vs. short-block options,
          and provide a written estimate with labor at {LABOR_RATE} plus parts — before the first bolt comes off.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-blue">
            Request an Estimate
          </Link>
          <a href="tel:+17207493965" className="btn-outline">
            Call (720) 749-3965
          </a>
        </div>
      </section>
    </ServicePageShell>
  );
}
