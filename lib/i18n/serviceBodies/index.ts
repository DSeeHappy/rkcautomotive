import { batteryTestingBodyCopy } from './battery-testing';
import { brakeRepairBodyCopy } from './brake-repair';
import { camshaftLifterRepairBodyCopy } from './camshaft-lifter-repair';
import { checkEngineLightBodyCopy } from './check-engine-light';
import { electricalSystemBodyCopy } from './electrical-system';
import { engineDiagnosticsBodyCopy } from './engine-diagnostics';
import { engineRebuildsBodyCopy } from './engine-rebuilds';
import { exhaustSystemBodyCopy } from './exhaust-system';
import { heatingAcBodyCopy } from './heating-ac';
import { oilChangesBodyCopy } from './oil-changes';
import { preventativeMaintenanceBodyCopy } from './preventative-maintenance';
import { suspensionSteeringBodyCopy } from './suspension-steering';
import { transmissionServicesBodyCopy } from './transmission-services';

export const SERVICE_BODY_REGISTRY = {
  'battery-testing': batteryTestingBodyCopy,
  'brake-repair': brakeRepairBodyCopy,
  'camshaft-lifter-repair': camshaftLifterRepairBodyCopy,
  'check-engine-light': checkEngineLightBodyCopy,
  'electrical-system': electricalSystemBodyCopy,
  'engine-diagnostics': engineDiagnosticsBodyCopy,
  'engine-rebuilds': engineRebuildsBodyCopy,
  'exhaust-system': exhaustSystemBodyCopy,
  'heating-ac': heatingAcBodyCopy,
  'oil-changes': oilChangesBodyCopy,
  'preventative-maintenance': preventativeMaintenanceBodyCopy,
  'suspension-steering': suspensionSteeringBodyCopy,
  'transmission-services': transmissionServicesBodyCopy,
} as const;

export type ServiceBodySlug = keyof typeof SERVICE_BODY_REGISTRY;

export function getServiceBodyCopy(slug: ServiceBodySlug, lang: import('@/lib/language').Lang) {
  return SERVICE_BODY_REGISTRY[slug](lang);
}
