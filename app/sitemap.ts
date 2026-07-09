import { getAllSiteRoutes } from '@/lib/seo';
import { SITE_URL } from '@/lib/og';

export default function sitemap() {
  return getAllSiteRoutes().map((path) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith('/services/') || path.startsWith('/areas-we-serve/')
      ? ('monthly' as const)
      : ('weekly' as const),
    priority:
      path === '/'
        ? 1
        : path === '/englewood-co-auto-repair' || path === '/contact'
          ? 0.9
          : path.startsWith('/services/')
            ? 0.8
            : path.startsWith('/areas-we-serve/')
              ? 0.7
              : 0.75,
  }));
}
