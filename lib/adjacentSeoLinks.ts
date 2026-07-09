import { TOP_AREA_SERVICES } from '@/lib/constants';
import { getServiceAreaBySlug, SERVICE_AREAS_DATA, type ServiceArea } from '@/lib/serviceAreas';

/** Geographic clusters — each city links to 4–6 neighbors for cross-city SEO. */
const ADJACENT_CITY_SLUGS: Record<string, readonly string[]> = {
  'englewood-co': ['sheridan-co', 'littleton-co', 'denver-co', 'greenwood-village-co', 'cherry-hills-village-co', 'centennial-co'],
  'denver-co': ['englewood-co', 'lakewood-co', 'aurora-co', 'glendale-co', 'edgewater-co', 'littleton-co'],
  'littleton-co': ['englewood-co', 'centennial-co', 'highlands-ranch-co', 'bow-mar-co', 'columbine-co', 'sheridan-co'],
  'sheridan-co': ['englewood-co', 'littleton-co', 'lakewood-co', 'denver-co', 'greenwood-village-co', 'bow-mar-co'],
  'greenwood-village-co': ['englewood-co', 'cherry-hills-village-co', 'centennial-co', 'denver-co', 'lone-tree-co', 'highlands-ranch-co'],
  'centennial-co': ['englewood-co', 'greenwood-village-co', 'highlands-ranch-co', 'aurora-co', 'littleton-co', 'lone-tree-co'],
  'lakewood-co': ['denver-co', 'wheat-ridge-co', 'golden-co', 'morrison-co', 'edgewater-co', 'littleton-co'],
  'aurora-co': ['denver-co', 'centennial-co', 'glendale-co', 'greenwood-village-co', 'highlands-ranch-co', 'parker-co'],
  'cherry-hills-village-co': ['greenwood-village-co', 'englewood-co', 'denver-co', 'littleton-co', 'centennial-co', 'bow-mar-co'],
  'highlands-ranch-co': ['centennial-co', 'littleton-co', 'lone-tree-co', 'parker-co', 'bow-mar-co', 'columbine-co'],
  'lone-tree-co': ['centennial-co', 'highlands-ranch-co', 'greenwood-village-co', 'parker-co', 'englewood-co', 'cherry-hills-village-co'],
  'glendale-co': ['denver-co', 'aurora-co', 'cherry-hills-village-co', 'greenwood-village-co', 'englewood-co', 'centennial-co'],
  'wheat-ridge-co': ['lakewood-co', 'golden-co', 'edgewater-co', 'arvada-co', 'denver-co', 'morrison-co'],
  'morrison-co': ['lakewood-co', 'golden-co', 'wheat-ridge-co', 'littleton-co', 'bow-mar-co', 'arvada-co'],
  'bow-mar-co': ['littleton-co', 'columbine-co', 'highlands-ranch-co', 'morrison-co', 'lakewood-co', 'centennial-co'],
  'columbine-co': ['littleton-co', 'bow-mar-co', 'highlands-ranch-co', 'lakewood-co', 'centennial-co', 'morrison-co'],
  'arvada-co': ['wheat-ridge-co', 'golden-co', 'lakewood-co', 'edgewater-co', 'denver-co', 'morrison-co'],
  'parker-co': ['highlands-ranch-co', 'lone-tree-co', 'centennial-co', 'aurora-co', 'bow-mar-co', 'greenwood-village-co'],
  'golden-co': ['lakewood-co', 'wheat-ridge-co', 'morrison-co', 'arvada-co', 'edgewater-co', 'denver-co'],
  'edgewater-co': ['denver-co', 'lakewood-co', 'wheat-ridge-co', 'arvada-co', 'glendale-co', 'golden-co'],
};

/** Top cities linked from service pages — matches audit priority list. */
export const FEATURED_SERVICE_CITY_SLUGS = [
  'englewood-co',
  'denver-co',
  'littleton-co',
  'lakewood-co',
  'centennial-co',
  'aurora-co',
] as const;

export function getAdjacentCities(currentSlug: string, limit = 6): ServiceArea[] {
  const slugs = ADJACENT_CITY_SLUGS[currentSlug];
  if (slugs) {
    return slugs
      .slice(0, limit)
      .map((slug) => getServiceAreaBySlug(slug))
      .filter((area): area is ServiceArea => Boolean(area));
  }

  return SERVICE_AREAS_DATA.filter((area) => area.slug !== currentSlug).slice(0, limit);
}

export function getFeaturedServiceCities(): ServiceArea[] {
  return FEATURED_SERVICE_CITY_SLUGS.map((slug) => getServiceAreaBySlug(slug)).filter(
    (area): area is ServiceArea => Boolean(area),
  );
}

export type CrossCityServiceLink = {
  href: string;
  label: string;
  description: string;
};

/** Hub service links contextualized with adjacent city names (not city×service routes). */
export function getCrossCityServiceLinks(currentSlug: string, limit = 6): CrossCityServiceLink[] {
  const adjacent = getAdjacentCities(currentSlug, 6);
  if (adjacent.length === 0) return [];

  return TOP_AREA_SERVICES.slice(0, limit).map((service, index) => {
    const nearby = adjacent[index % adjacent.length];
    return {
      href: service.href,
      label: `${service.name} serving ${nearby.name}`,
      description: `${service.description} — ${nearby.distanceFromShop} from ${nearby.name}.`,
    };
  });
}
