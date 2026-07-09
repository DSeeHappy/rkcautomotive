import { SITE_URL } from '@/lib/og';
import { SITEMAP_SHARD_IDS } from '@/lib/seo';

export const dynamic = 'force-static';

function buildSitemapIndexXml(): string {
  const entries = SITEMAP_SHARD_IDS.map(
    (id) =>
      `  <sitemap>\n    <loc>${SITE_URL}/sitemap/${id}.xml</loc>\n  </sitemap>`,
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;
}

export function GET() {
  return new Response(buildSitemapIndexXml(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
