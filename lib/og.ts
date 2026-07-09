import type { Metadata } from 'next';
import { BUSINESS } from './constants';

/** Canonical metadata uses www; apex→www redirect stays disabled until DNS/SSL 525 is fixed (see next.config.ts). */
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
  return path.startsWith('/') ? path : `/${path}`;
}

export function absoluteUrl(path: string): string {
  const normalized = normalizePath(path);
  return normalized === '/' ? SITE_URL : `${SITE_URL}${normalized}`;
}

export function ogImage(path: string, alt: string) {
  return [
    {
      url: path,
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

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    ...(robots ? { robots } : {}),
    alternates: {
      canonical: url,
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

export const rootOpenGraphDefaults: Metadata['openGraph'] = {
  siteName: SITE_NAME,
  locale: OG_LOCALE,
  type: 'website',
  images: [DEFAULT_OG_IMAGE],
};

export const rootTwitterDefaults: Metadata['twitter'] = {
  card: 'summary_large_image',
  title: 'RKC Automotive — Engine & Auto Repair Experts in Englewood, CO',
  description:
    'ASE-certified engine and auto repair in Englewood, CO. Diagnostics, brakes, oil changes & more. Call (720) 749-3965. Hablamos Español.',
  images: [absoluteUrl(DEFAULT_OG_IMAGE.url)],
};
