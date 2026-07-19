import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/og';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/llms.txt', '/.well-known/llms.txt'],
      },
      { userAgent: 'Bingbot', allow: '/' },
    ],
    // Conventional /sitemap.xml rewrites to the sharded index; keep /sitemap-index explicit for auditors.
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/sitemap-index`],
    host: SITE_URL,
  };
}
