import fs from 'fs';
import path from 'path';

const services = [
  ['brake-repair-englewood-co', 'Brake Repair and Service', 'Professional brake repair and service including brake pad replacement, rotor resurfacing, caliper repair, and complete brake system diagnostics in Englewood, CO.'],
  ['engine-diagnostics-englewood-co', 'Engine Diagnostics and Repair', 'Expert engine diagnostics and repair using advanced equipment for all makes and models in Englewood, CO.'],
  ['transmission-services-englewood-co', 'Transmission Service and Repair', 'Automatic and manual transmission repair, fluid service, and diagnostics in Englewood, CO.'],
  ['suspension-steering-englewood-co', 'Suspension and Steering Repair', 'Professional suspension and steering repair including shocks, struts, ball joints, and alignment in Englewood, CO.'],
  ['heating-ac-englewood-co', 'Automotive Heating and Air Conditioning Service', 'Auto AC repair, heating service, compressor replacement, and climate control diagnostics in Englewood, CO.'],
  ['electrical-system-englewood-co', 'Automotive Electrical System Repair', 'Battery, alternator, starter, wiring, and electrical diagnostics in Englewood, CO.'],
  ['oil-changes-englewood-co', 'Oil Change Service', 'Conventional, synthetic, and high-mileage oil change service in Englewood, CO.'],
  ['check-engine-light-englewood-co', 'Check Engine Light Diagnosis', 'Check engine light diagnosis and repair for drivability and emissions issues in Englewood, CO.'],
  ['battery-testing-englewood-co', 'Battery Testing and Replacement', 'Free battery testing and professional battery replacement in Englewood, CO.'],
  ['exhaust-system-englewood-co', 'Exhaust System Repair', 'Muffler, catalytic converter, exhaust pipe, and emissions repair in Englewood, CO.'],
  ['preventative-maintenance-englewood-co', 'Preventative Maintenance', 'Scheduled preventative maintenance to keep your vehicle reliable and prevent costly repairs in Englewood, CO.'],
];

for (const [slug, type, desc] of services) {
  const file = path.join('app', 'services', slug, 'page.tsx');
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('const schema = {')) {
    console.log('Skip (already updated):', file);
    continue;
  }
  if (!content.includes("from '@/lib/seo'")) {
    content = content.replace(
      "import { createServicePageMetadata } from '@/lib/og';",
      "import { createServicePageMetadata } from '@/lib/og';\nimport { createServiceSchema } from '@/lib/seo';",
    );
  }
  content = content.replace(
    /const schema = \{[\s\S]*?\};\n\n/,
    `const schema = createServiceSchema(\n  '${type}',\n  '${desc}',\n  '/services/${slug}',\n);\n\n`,
  );
  fs.writeFileSync(file, content);
  console.log('Updated', file);
}
