import { emptySpecFields } from '@/lib/knowledge/verified';
import type { SpecCategory, SpecCategoryId, VehicleSpecs } from '@/lib/knowledge/types';

const SPEC_CATEGORY_LABELS: Record<SpecCategoryId, string> = {
  engine: 'Engine',
  transmission: 'Transmission',
  horsepower: 'Horsepower',
  torque: 'Torque',
  drivetrain: 'Drivetrain',
  dimensions: 'Dimensions',
  mpg: 'Fuel economy (MPG)',
  reliability: 'Reliability',
  knownIssues: 'Known issues',
  maintenance: 'Maintenance',
  performance: 'Performance',
  mods: 'Modifications',
};

const SPEC_FIELD_TEMPLATES: Record<SpecCategoryId, Array<{ key: string; label: string }>> = {
  engine: [
    { key: 'displacement', label: 'Displacement' },
    { key: 'configuration', label: 'Configuration' },
    { key: 'fuelType', label: 'Fuel type' },
  ],
  transmission: [
    { key: 'type', label: 'Type' },
    { key: 'speeds', label: 'Speeds' },
  ],
  horsepower: [{ key: 'peak', label: 'Peak horsepower' }],
  torque: [{ key: 'peak', label: 'Peak torque' }],
  drivetrain: [{ key: 'layout', label: 'Layout' }],
  dimensions: [
    { key: 'length', label: 'Length' },
    { key: 'width', label: 'Width' },
    { key: 'height', label: 'Height' },
    { key: 'wheelbase', label: 'Wheelbase' },
  ],
  mpg: [
    { key: 'city', label: 'City MPG' },
    { key: 'highway', label: 'Highway MPG' },
    { key: 'combined', label: 'Combined MPG' },
  ],
  reliability: [{ key: 'summary', label: 'Reliability summary' }],
  knownIssues: [{ key: 'patterns', label: 'Documented patterns' }],
  maintenance: [{ key: 'intervals', label: 'Service intervals' }],
  performance: [
    { key: 'zeroToSixty', label: '0–60 mph' },
    { key: 'topSpeed', label: 'Top speed' },
  ],
  mods: [{ key: 'common', label: 'Common modifications' }],
};

function buildSpecCategory(category: SpecCategoryId): SpecCategory {
  return {
    category,
    label: SPEC_CATEGORY_LABELS[category],
    fields: emptySpecFields(SPEC_FIELD_TEMPLATES[category]),
  };
}

/** Empty OEM spec scaffold — Phase 2 does not invent HP/torque/dimensions. */
export function createEmptyVehicleSpecs(): VehicleSpecs {
  return (Object.keys(SPEC_CATEGORY_LABELS) as SpecCategoryId[]).reduce<VehicleSpecs>(
    (acc, category) => {
      acc[category] = buildSpecCategory(category);
      return acc;
    },
    {} as VehicleSpecs,
  );
}

export const SPEC_CATEGORY_ORDER: SpecCategoryId[] = [
  'engine',
  'transmission',
  'horsepower',
  'torque',
  'drivetrain',
  'dimensions',
  'mpg',
  'reliability',
  'knownIssues',
  'maintenance',
  'performance',
  'mods',
];
