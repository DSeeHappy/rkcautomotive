import { getServiceCatalogEntry } from '@/lib/modelCommonServices';
import { VEHICLE_MODELS } from '@/lib/vehicleModels';

export type ServiceDeepDiveLink = {
  href: string;
  title: string;
};

const FEATURED_BRAND_MODELS = [
  'toyota-camry',
  'honda-cr-v',
  'ford-f-150',
  'subaru-outback',
  'bmw-x3',
  'jeep-wrangler',
] as const;

/** One flagship model per major brand for platform-specific diagnostic deep-dives. */
const PLATFORM_BRAND_MODELS = [
  'ford-f-150',
  'chevrolet-silverado',
  'bmw-x3',
  'jeep-wrangler',
  'toyota-camry',
  'honda-cr-v',
] as const;

function collectServiceIdsForPage(servicePageSlug: string): Set<string> {
  const serviceHref = `/services/${servicePageSlug}`;
  const serviceIds = new Set<string>();

  for (const vehicle of VEHICLE_MODELS) {
    for (const service of vehicle.commonServices) {
      const catalog = getServiceCatalogEntry(service.id);
      if (catalog?.href === serviceHref) {
        serviceIds.add(service.id);
      }
    }
  }

  return serviceIds;
}

function buildDeepDiveLinks(
  serviceIds: Set<string>,
  modelSlugs: readonly string[],
  limit: number,
): ServiceDeepDiveLink[] {
  if (serviceIds.size === 0) return [];

  const links: ServiceDeepDiveLink[] = [];

  for (const modelSlug of modelSlugs) {
    const vehicle = VEHICLE_MODELS.find((m) => m.slug === modelSlug);
    if (!vehicle) continue;

    const match = vehicle.commonServices.find((service) => serviceIds.has(service.id));
    if (!match) continue;

    links.push({ href: match.href, title: match.title });
    if (links.length >= limit) break;
  }

  if (links.length < limit) {
    for (const vehicle of VEHICLE_MODELS) {
      if (links.length >= limit) break;
      const match = vehicle.commonServices.find((service) => serviceIds.has(service.id));
      if (!match || links.some((link) => link.href === match.href)) continue;
      links.push({ href: match.href, title: match.title });
    }
  }

  return links;
}

/** Popular model-specific deep-dives that map to a generic /services/* page. */
export function getPopularDeepDivesForServicePage(
  servicePageSlug: string,
  limit = 6,
): ServiceDeepDiveLink[] {
  return buildDeepDiveLinks(collectServiceIdsForPage(servicePageSlug), FEATURED_BRAND_MODELS, limit);
}

/** Platform-specific diagnostic deep-dives (Ford, Chevy, BMW, etc.) per service hub page. */
export function getPlatformDiagnosticsForServicePage(
  servicePageSlug: string,
  limit = 6,
): ServiceDeepDiveLink[] {
  return buildDeepDiveLinks(
    collectServiceIdsForPage(servicePageSlug),
    PLATFORM_BRAND_MODELS,
    limit,
  );
}
