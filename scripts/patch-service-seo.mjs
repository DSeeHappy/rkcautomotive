#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, '..', 'app', 'components', 'ui', 'services');

const services = [
  ['EngineDiagnosticsContent.tsx', 'engine-diagnostics-englewood-co', 'Engine Diagnostics', 'engine diagnostics'],
  ['CheckEngineLightContent.tsx', 'check-engine-light-englewood-co', 'Check Engine Light', 'check engine light diagnosis'],
  ['EngineRebuildsContent.tsx', 'engine-rebuilds-englewood-co', 'Engine Rebuilds', 'engine rebuilds'],
  ['CamshaftLifterContent.tsx', 'camshaft-lifter-repair-englewood-co', 'Camshaft & Lifters', 'camshaft and lifter repair'],
  ['BrakeRepairContent.tsx', 'brake-repair-englewood-co', 'Brake Repair', 'brake repair'],
  ['SuspensionSteeringContent.tsx', 'suspension-steering-englewood-co', 'Suspension & Steering', 'suspension and steering repair'],
  ['TransmissionServicesContent.tsx', 'transmission-services-englewood-co', 'Transmission Services', 'transmission service'],
  ['OilChangesContent.tsx', 'oil-changes-englewood-co', 'Oil Changes', 'oil changes'],
  ['PreventativeMaintenanceContent.tsx', 'preventative-maintenance-englewood-co', 'Preventative Maintenance', 'preventative maintenance'],
  ['HeatingAcContent.tsx', 'heating-ac-englewood-co', 'Heating & AC', 'heating and AC repair'],
  ['ElectricalSystemContent.tsx', 'electrical-system-englewood-co', 'Electrical System', 'electrical system repair'],
  ['BatteryTestingContent.tsx', 'battery-testing-englewood-co', 'Battery Testing', 'battery testing'],
  ['ExhaustSystemContent.tsx', 'exhaust-system-englewood-co', 'Exhaust System', 'exhaust system repair'],
];

let updated = 0;

for (const [file, slug, name, label] of services) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (!content.includes('RelatedServices')) {
    if (content.includes("from './ServiceSharedSections'")) {
      content = content.replace(
        "from './ServiceSharedSections';",
        "from './ServiceSharedSections';\nimport RelatedServices from '@/app/components/ui/RelatedServices';\nimport { getServiceBreadcrumbs } from './servicesShared';",
      );
      changed = true;
    }
  }

  if (!content.includes('ServiceAreaServed')) {
    content = content.replace(
      /(\s+ServiceFinalCTA,\n)(\} from '\.\/ServiceSharedSections';)/,
      '$1  ServiceAreaServed,\n$2',
    );
    changed = true;
  }

  if (!content.includes('breadcrumbs={getServiceBreadcrumbs')) {
    content = content.replace(
      '<ServiceCinematicHero\n',
      `<ServiceCinematicHero\n        breadcrumbs={getServiceBreadcrumbs('${name}')}\n`,
    );
    changed = true;
  }

  if (!content.includes('<RelatedServices slug=')) {
    content = content.replace(
      /\n(\s*<ServiceFinalCTA)/,
      `\n      <RelatedServices slug="${slug}" />\n      <ServiceAreaServed serviceLabel="${label}" />$1`,
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    updated++;
    console.log('Updated', file);
  }
}

console.log('Total updated:', updated);
