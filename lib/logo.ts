export const RKC_LOGO_VIDEO_WEBM = '/videos/rkc-logo-animation.webm';
export const RKC_LOGO_VIDEO_MP4 = '/videos/rkc-logo-animation.mp4';
/**
 * Optional lite WebM (<500 KB). Add `public/videos/rkc-logo-animation-lite.webm`
 * after re-encoding for fastest mobile splash. Falls back to full sources.
 */
export const RKC_LOGO_VIDEO_LITE_WEBM = '/videos/rkc-logo-animation-lite.webm';

/** Preferred splash intro source (WebM); MP4 used as fallback in SplashScreen */
export const RKC_LOGO_VIDEO = RKC_LOGO_VIDEO_WEBM;

/** Transparent logo — light nav / glass backgrounds */
export const RKC_LOGO_PNG = '/images/rkc-logo.png';
export const RKC_LOGO_WEBP = '/images/rkc-logo.webp';
export const RKC_LOGO_NAV_WEBP = '/images/rkc-logo-nav.webp';

/** White card logo — dark hero, splash, nav over photo */
export const RKC_LOGO_CARD_PNG = '/images/rkc-logo-card.png';
export const RKC_LOGO_CARD_WEBP = '/images/rkc-logo-card.webp';

/** Processed transparent asset dimensions (from scripts/process-logo.mjs) */
export const RKC_LOGO_WIDTH = 1024;
export const RKC_LOGO_HEIGHT = 1123;

/** Square white-card asset dimensions */
export const RKC_LOGO_CARD_SIZE = 1040;

/** Nav logo — compact when scrolled (px) */
export const NAV_LOGO_SCROLLED_HEIGHT = { base: 56, sm: 64, lg: 72 } as const;

/** Nav logo scale at top (transparent) vs compact scrolled size — keep ≤1.2 so Chrome overflow clip never crops the mark */
export const NAV_LOGO_TOP_SCALE = { base: 1.12, sm: 1.15, lg: 1.18 } as const;

export type SplashVideoSource = { src: string; type: string };

/** MP4-first on mobile (smaller + hardware decode); WebM-first on desktop. */
export function getSplashVideoSources(preferMp4First: boolean): SplashVideoSource[] {
  const mp4: SplashVideoSource = { src: RKC_LOGO_VIDEO_MP4, type: 'video/mp4' };
  const webm: SplashVideoSource = { src: RKC_LOGO_VIDEO_WEBM, type: 'video/webm' };
  return preferMp4First ? [mp4, webm] : [webm, mp4];
}

/** Preload href — smallest format for the connection (MP4 is ~180 KB smaller today). */
export function getSplashVideoPreloadHref(preferMp4First: boolean): string {
  return preferMp4First ? RKC_LOGO_VIDEO_MP4 : RKC_LOGO_VIDEO_WEBM;
}

export function getNavTopScale(): number {
  if (typeof window === 'undefined') return NAV_LOGO_TOP_SCALE.sm;
  const w = window.innerWidth;
  if (w >= 1024) return NAV_LOGO_TOP_SCALE.lg;
  if (w >= 640) return NAV_LOGO_TOP_SCALE.sm;
  return NAV_LOGO_TOP_SCALE.base;
}
