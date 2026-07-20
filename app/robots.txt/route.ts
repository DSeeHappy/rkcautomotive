import { buildRobotsTxt } from '@/lib/robotsTxt';

export const dynamic = 'force-static';

/** Plain-text robots.txt — required for Yandex Clean-param (not in MetadataRoute.Robots). */
export function GET() {
  return new Response(buildRobotsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}
