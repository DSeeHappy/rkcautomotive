import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/og';

/** Hostname only — Yandex Host rules reject a scheme; Google ignores Host and uses Sitemap. */
const SITE_HOST = new URL(SITE_URL).host;

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
    host: SITE_HOST,
  };
}
