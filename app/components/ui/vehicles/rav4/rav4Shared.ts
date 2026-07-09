import type { BreadcrumbItem } from '@/app/components/ui/Breadcrumbs';

export const RAV4_IMAGE = '/vehicles/toyota/rav4.webp';
export const RAV4_IMAGE_ALT = 'Toyota RAV4 service at RKC Automotive Englewood CO';

export const RAV4_PATHS = {
  timingBelt: '/vehicles/toyota/rav4/timing-belt-water-pump-englewood-co',
  preWinter: '/vehicles/toyota/rav4/pre-winter-service-englewood-co',
  checkEngine: '/vehicles/toyota/rav4/check-engine-light-englewood-co',
} as const;

export function getRav4Breadcrumbs(serviceName: string): BreadcrumbItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Vehicles We Service', href: '/vehicles-we-service' },
    { label: 'Toyota RAV4', href: '/vehicles-we-service' },
    { label: serviceName },
  ];
}
