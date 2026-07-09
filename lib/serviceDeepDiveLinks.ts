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

/** Popular model-specific deep-dives that map to a generic /services/* page. */
export function getPopularDeepDivesForServicePage(
  servicePageSlug: string,
  limit = 4,
): ServiceDeepDiveLink[] {
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

  if (serviceIds.size === 0) return [];

  const links: ServiceDeepDiveLink[] = [];

  for (const modelSlug of FEATURED_BRAND_MODELS) {
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
