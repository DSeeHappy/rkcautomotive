'use client';

import { usePathname } from 'next/navigation';
import GeoCiteFacts from '@/app/components/ui/GeoCiteFacts';
import { areaGeoOneLiner } from '@/lib/areaGeoCite';
import { useLanguage } from '@/lib/language';

/** Pages that embed GeoCiteFacts mid-content (avoid duplicate blocks). */
function skipsEmbeddedGeoCite(pathname: string): boolean {
  if (pathname === '/') return true;
  if (pathname.startsWith('/services/')) return true;
  if (/^\/vehicles\/[^/]+\/[^/]+\/[^/]+$/.test(pathname)) return true;
  return false;
}

/**
 * Sitewide GEO cite block for pages without an embedded GeoCiteFacts.
 * Bing GEO: verifiable facts + data-snippet on every indexable template.
 */
export default function GeoCiteFactsSite() {
  const pathname = usePathname() ?? '';
  const { lang } = useLanguage();
  if (skipsEmbeddedGeoCite(pathname)) return null;

  const areaMatch = pathname.match(/^\/areas-we-serve\/([^/]+)$/);
  const areaSlug = areaMatch?.[1];
  const areaLine = areaSlug ? areaGeoOneLiner(areaSlug, lang) : undefined;

  return <GeoCiteFacts areaOneLiner={areaLine} />;
}
