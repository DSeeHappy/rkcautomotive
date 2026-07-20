import type { Metadata } from 'next';
import { getLocaleAlternateLanguagePaths } from '@/lib/i18n/localeSeo';
import { BUSINESS } from './constants';

/**
 * Preferred host for canonicals, sitemaps, and OG URLs: apex HTTPS.
 * When www SSL is fixed, redirect www → apex — do not flip SITE_URL to www.
 * @see next.config.ts
 */
export const SITE_URL = BUSINESS.website;
export const SITE_NAME = BUSINESS.name;
export const OG_LOCALE = 'en_US';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const DEFAULT_OG_IMAGE = {
  url: '/og/rkc-automotive-og.jpg',
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
  alt: 'RKC Automotive — Engine & auto repair experts in Englewood, CO',
} as const;

export type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  /** Use when the page title is already fully formatted (e.g. service pages). */
  titleAbsolute?: boolean;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  keywords?: string | string[];
  robots?: Metadata['robots'];
};

function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  // Match Vercel/Next non-trailing-slash URLs (trailing slash 308s to this form).
  return withSlash.length > 1 && withSlash.endsWith('/')
    ? withSlash.replace(/\/+$/, '')
    : withSlash;
}

export function absoluteUrl(path: string): string {
  // Remote assets (vehicle Wikimedia/Unsplash) are already absolute — do not prefix SITE_URL.
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = normalizePath(path);
  return normalized === '/' ? SITE_URL : `${SITE_URL}${normalized}`;
}

export function ogImage(path: string, alt: string) {
  return [
    {
      url: absoluteUrl(path),
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      alt,
    },
  ];
}

function resolveDisplayTitle(title: string, titleAbsolute?: boolean): string {
  if (titleAbsolute || title.includes(SITE_NAME)) return title;
  return `${title} | ${SITE_NAME}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  titleAbsolute,
  image = DEFAULT_OG_IMAGE.url,
  imageAlt = DEFAULT_OG_IMAGE.alt,
  type = 'website',
  keywords,
  robots,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = resolveDisplayTitle(title, titleAbsolute);
  const images = ogImage(image, imageAlt);
  // Only when HAS_LOCALE_URL_SEGMENTS and paths differ — never hreflang two langs to one URL.
  const localePaths = getLocaleAlternateLanguagePaths(path);
  const enHref = localePaths ? absoluteUrl(localePaths.en) : undefined;
  const esHref = localePaths ? absoluteUrl(localePaths.es) : undefined;
  const languages =
    localePaths && enHref && esHref && enHref !== esHref
      ? {
          en: enHref,
          es: esHref,
          'x-default': absoluteUrl(localePaths['x-default']),
        }
      : undefined;

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    ...(robots ? { robots } : {}),
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type,
      siteName: SITE_NAME,
      locale: OG_LOCALE,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export function createServicePageMetadata(
  title: string,
  description: string,
  slug: string,
  imagePath: string,
  imageAlt: string,
  keywords?: string | string[],
): Metadata {
  return createPageMetadata({
    title,
    description,
    path: `/services/${slug}`,
    titleAbsolute: true,
    image: imagePath,
    imageAlt,
    keywords,
  });
}

const ROOT_TITLE = 'RKC Automotive — Engine & Auto Repair Experts in Englewood, CO';
const ROOT_DESCRIPTION =
  'ASE-certified engine and auto repair in Englewood, CO. Diagnostics, brakes, oil changes & more. Call (720) 749-3965. Hablamos Español.';

export const rootOpenGraphDefaults: Metadata['openGraph'] = {
  title: ROOT_TITLE,
  description: ROOT_DESCRIPTION,
  url: SITE_URL,
  siteName: SITE_NAME,
  locale: OG_LOCALE,
  type: 'website',
  images: ogImage(DEFAULT_OG_IMAGE.url, DEFAULT_OG_IMAGE.alt),
};

export const rootTwitterDefaults: Metadata['twitter'] = {
  card: 'summary_large_image',
  title: ROOT_TITLE,
  description: ROOT_DESCRIPTION,
  images: [absoluteUrl(DEFAULT_OG_IMAGE.url)],
};
