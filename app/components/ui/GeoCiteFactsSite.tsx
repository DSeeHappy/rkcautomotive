'use client';

import { usePathname } from 'next/navigation';
import GeoCiteFacts from '@/app/components/ui/GeoCiteFacts';
import { areaGeoOneLiner } from '@/lib/areaGeoCite';
import { useLanguage } from '@/lib/language';

/**
 * Sitewide GEO cite block — rendered just above the footer on every page.
 * Bing GEO: verifiable facts + data-snippet on every indexable template.
 */
export default function GeoCiteFactsSite() {
  const pathname = usePathname() ?? '';
  const { lang } = useLanguage();

  const areaMatch = pathname.match(/^\/areas-we-serve\/([^/]+)$/);
  const areaSlug = areaMatch?.[1];
  const areaLine = areaSlug ? areaGeoOneLiner(areaSlug, lang) : undefined;

  return <GeoCiteFacts areaOneLiner={areaLine} />;
}
