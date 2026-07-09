import fs from 'fs';
import path from 'path';

const updates = {
  'engine-diagnostics-englewood-co': {
    title: 'Engine Diagnostics in Englewood, CO | RKC Automotive',
    description:
      'Expert engine diagnostics and repair in Englewood, CO. Advanced equipment for all makes and models in the Denver south metro. Call (720) 749-3965 for service.',
  },
  'transmission-services-englewood-co': {
    title: 'Transmission Repair in Englewood, CO | RKC Automotive',
    description:
      'Transmission service and repair in Englewood, CO — automatic, manual, fluid service, and diagnostics for Denver south metro drivers. Call (720) 749-3965.',
  },
  'suspension-steering-englewood-co': {
    title: 'Suspension & Steering Repair | Englewood, CO',
    description:
      'Suspension and steering repair in Englewood, CO — shocks, struts, ball joints, and alignment from ASE-certified techs. Serving Denver south metro. Call (720) 749-3965.',
  },
  'heating-ac-englewood-co': {
    title: 'Auto AC & Heating Repair | Englewood, CO',
    description:
      'Auto AC repair and heating service in Englewood, CO. AC recharge, compressor replacement, and climate diagnostics for Denver south metro. Call (720) 749-3965.',
  },
  'oil-changes-englewood-co': {
    title: 'Oil Change Service in Englewood, CO | RKC Automotive',
    description:
      'Fast, affordable oil changes in Englewood, CO — conventional, synthetic, and high-mileage oil with fluid top-off. Serving Denver south metro. Call (720) 749-3965.',
  },
  'check-engine-light-englewood-co': {
    title: 'Check Engine Light Diagnosis | Englewood, CO',
    description:
      'Check engine light diagnosis in Englewood, CO. Find the real problem — not every sensor on the diagram — with ASE-certified diagnostics. Call (720) 749-3965.',
  },
  'battery-testing-englewood-co': {
    title: 'Battery Testing & Replacement | Englewood, CO',
    description:
      'Free battery testing and replacement in Englewood, CO. Stay ahead of Colorado winter breakdowns with reliable batteries and ASE-certified install. Call (720) 749-3965.',
  },
  'exhaust-system-englewood-co': {
    title: 'Exhaust System Repair in Englewood, CO | RKC',
    description:
      'Exhaust system repair in Englewood, CO — mufflers, catalytic converters, pipes, and emissions service for Denver south metro drivers. Call (720) 749-3965.',
  },
  'preventative-maintenance-englewood-co': {
    title: 'Preventative Maintenance | Englewood, CO',
    description:
      'Preventative maintenance in Englewood, CO. Scheduled service keeps your vehicle reliable and prevents costly repairs across the Denver south metro. Call (720) 749-3965.',
  },
};

for (const [slug, meta] of Object.entries(updates)) {
  const file = path.join('app', 'services', slug, 'page.tsx');
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /export const metadata = createServicePageMetadata\(\s*'[^']*',\s*'[^']*',/,
    `export const metadata = createServicePageMetadata(\n  '${meta.title}',\n  '${meta.description}',`,
  );
  fs.writeFileSync(file, content);
  console.log('Updated metadata:', slug);
}
