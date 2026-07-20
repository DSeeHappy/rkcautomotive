/**
 * Multilingual / multi-regional SEO policy for RKC Automotive.
 *
 * Google guidance:
 * - https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
 * - https://developers.google.com/search/docs/specialty/international/localized-versions
 *
 * Current product: client-side EN|ES toggle (`rkc-lang` localStorage) swaps UI copy.
 * That is UX-only — not separate crawlable language URLs.
 *
 * Implications (Google):
 * - Prefer different URLs per language; cookies / client toggles are often not fully crawled.
 * - Googlebot usually crawls from the US without Accept-Language, so SSR English is what indexes.
 * - Do NOT emit hreflang for EN and ES pointing at the same URL.
 * - Do NOT auto-redirect by guessed language / IP.
 * - When real `/es/...` (or subdomain/ccTLD) pages exist, add bidirectional hreflang + sitemap
 *   xhtml:link alternates, keep English canonicals for English URLs, and link users between versions.
 *
 * Local shop default: keep the toggle for bilingual visitors; English remains the crawlable default.
 * Optional later: a few high-value `/es` landings (home, contact, key services) — not sitewide routing.
 */

/** Language of HTML/metadata Google should see on every current URL. */
export const CRAWLABLE_HTML_LANG = 'en' as const;

/** Locales the client toggle may show. Not equivalent to indexed URL locales. */
export const UX_LOCALES = ['en', 'es'] as const;

/**
 * Flip to true only after real Spanish URL paths (or hosts) ship with distinct content.
 * Until then, Metadata must not set `alternates.languages` / hreflang.
 */
export const HAS_LOCALE_URL_SEGMENTS = false;

export type LocaleAlternatePaths = {
  en: string;
  es: string;
  'x-default': string;
};

/**
 * Relative path map for hreflang — only when Spanish URLs exist.
 * Callers absolute-URL these via `absoluteUrl`. Never returns en/es that share one path.
 */
export function getLocaleAlternateLanguagePaths(
  englishPath: string,
): LocaleAlternatePaths | undefined {
  if (!HAS_LOCALE_URL_SEGMENTS) {
    return undefined;
  }

  // Scaffold for a future `/es` prefix — enable only with real routes + translated HTML.
  const en =
    !englishPath || englishPath === '/'
      ? '/'
      : englishPath.startsWith('/')
        ? englishPath
        : `/${englishPath}`;
  const es = en === '/' ? '/es' : `/es${en}`;

  return {
    en,
    es,
    'x-default': en,
  };
}
