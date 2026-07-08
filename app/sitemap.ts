import { BUSINESS, SERVICES } from '@/lib/constants';
import { SERVICE_AREAS_DATA } from '@/lib/serviceAreas';

export default function sitemap() {
  const base = BUSINESS.website;

  const pages = [
    '',
    '/about',
    '/contact',
    '/pricing',
    '/services',
    '/englewood-co-auto-repair',
    '/frequently-asked-questions',
    '/areas-we-serve',
    '/vehicles-we-service',
    ...SERVICES.map((s) => s.href),
    ...SERVICE_AREAS_DATA.map((a) => a.href),
  ];

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith('/services/') ? ('monthly' as const) : ('weekly' as const),
    priority: path === '' ? 1 : path.startsWith('/services/') ? 0.8 : 0.7,
  }));
}
