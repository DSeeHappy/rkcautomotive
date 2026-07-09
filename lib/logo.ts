export const RKC_LOGO_VIDEO_WEBM = '/videos/rkc-logo-animation.webm';
export const RKC_LOGO_VIDEO_MP4 = '/videos/rkc-logo-animation.mp4';
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

/** Nav logo — compact when scrolled (px), from commit 778e84f */
export const NAV_LOGO_SCROLLED_HEIGHT = { base: 48, sm: 56, lg: 64 } as const;

/** Nav logo scale at top (transparent) vs compact scrolled size — mobile uses smaller delta */
export const NAV_LOGO_TOP_SCALE = { base: 1.3, sm: 1.45, lg: 1.6 } as const;

export function getNavTopScale(): number {
  if (typeof window === 'undefined') return NAV_LOGO_TOP_SCALE.sm;
  const w = window.innerWidth;
  if (w >= 1024) return NAV_LOGO_TOP_SCALE.lg;
  if (w >= 640) return NAV_LOGO_TOP_SCALE.sm;
  return NAV_LOGO_TOP_SCALE.base;
}
