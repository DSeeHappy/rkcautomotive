/**
 * Local WebP assets converted from public/rkc photos/*.jpg
 * Prefer these over remote stock imagery site-wide.
 */
export const PHOTOS = {
  /** Green bay entrance + branded shirt — homepage hero */
  heroMain: '/images/hero-main.webp',
  /** Shop exterior with RKC signage — contact / location */
  exterior: '/images/shop-exterior.webp',
  /** Green & blue branded shop bay + tire stack */
  exteriorBay: '/images/shop-detail-04.webp',
  /** Wide shop interior bay */
  interior: '/images/shop-interior-bay.webp',
  /** Classic car on lift — vehicles / hero secondary */
  classicLift: '/images/classic-car-lift.webp',
  /** Mechanic undercarriage close-up */
  undercarriage: '/images/mechanic-undercarriage.webp',
  /** Two techs collaborating under lift */
  teamCollab: '/images/team-lift-collaboration.webp',
  /** Cuevas under car with team watching */
  teamCuevas: '/images/shop-detail-02.webp',
  /** Three techs inspecting undercarriage */
  teamInspect: '/images/shop-detail-03.webp',
  /** Branded shirt back + busy bay */
  brandedBay: '/images/shop-detail-06.webp',
  /** Cuevas working with pry bar */
  techCloseup: '/images/shop-detail-01.webp',
  /** Engine bay teamwork close-up */
  engineBay: '/images/engine-bay-teamwork.webp',
  /** Engine rebuild with two techs */
  engineRebuild: '/images/engine-rebuild-team.webp',
  /** Three techs on classic engine */
  classicEngine: '/images/shop-detail-10.webp',
  /** Logo on shirt back closeup */
  brandedBack: '/images/shop-detail-14.webp',
  /** Additional shop details for galleries / cards */
  gallery: [
    '/images/shop-detail-05.webp',
    '/images/shop-detail-07.webp',
    '/images/shop-detail-08.webp',
    '/images/shop-detail-09.webp',
    '/images/shop-detail-11.webp',
    '/images/shop-detail-12.webp',
    '/images/shop-detail-13.webp',
    '/images/shop-detail-15.webp',
    '/images/shop-detail-16.webp',
    '/images/shop-detail-17.webp',
    '/images/shop-detail-18.webp',
    '/images/shop-detail-19.webp',
    '/images/shop-detail-20.webp',
    '/images/shop-detail-21.webp',
    '/images/shop-detail-22.webp',
    '/images/shop-detail-23.webp',
    '/images/shop-detail-24.webp',
  ],
} as const;

/** Vehicles hub hero — classic sports car steady-cam loop (8s, muted) */
export const VEHICLE_HERO_VIDEO = {
  webm: '/videos/vehicles-hero.webm',
  mp4: '/videos/vehicles-hero.mp4',
  poster: '/videos/vehicles-hero-poster.webp',
  posterJpg: '/videos/vehicles-hero-poster.jpg',
} as const;

/** Check engine light service hero — dashboard MIL loop (8s, muted) */
export const CHECK_ENGINE_HERO_VIDEO = {
  webm: '/videos/check-engine-hero.webm',
  mp4: '/videos/check-engine-hero.mp4',
  poster: '/videos/check-engine-hero-poster.webp',
  posterJpg: '/videos/check-engine-hero-poster.jpg',
} as const;

/** Shared shape for hero/figure video sources (poster stays LCP) */
export type ModelVideoSources = {
  webm: string;
  mp4: string;
  poster: string;
  posterJpg: string;
};

/**
 * Per-model hub hero video overrides, keyed by `${makeSlug}/${modelSlug}`.
 * Mirrors the service heroVideo pattern — models not listed keep their photo hero.
 */
export const MODEL_HERO_VIDEOS: Record<string, ModelVideoSources> = {
  'tesla/model-y': {
    webm: '/videos/model-y-hero.webm',
    mp4: '/videos/model-y-hero.mp4',
    poster: '/videos/model-y-hero-poster.webp',
    posterJpg: '/videos/model-y-hero-poster.jpg',
  },
  'tesla/model-3': {
    webm: '/videos/model-3-hero.webm',
    mp4: '/videos/model-3-hero.mp4',
    poster: '/videos/model-3-hero-poster.webp',
    posterJpg: '/videos/model-3-hero-poster.jpg',
  },
  'toyota/4runner': {
    webm: '/videos/4runner-hero.webm',
    mp4: '/videos/4runner-hero.mp4',
    poster: '/videos/4runner-hero-poster.webp',
    posterJpg: '/videos/4runner-hero-poster.jpg',
  },
  'ford/bronco': {
    webm: '/videos/bronco-hero.webm',
    mp4: '/videos/bronco-hero.mp4',
    poster: '/videos/bronco-hero-poster.webp',
    posterJpg: '/videos/bronco-hero-poster.jpg',
  },
  'ford/mustang': {
    webm: '/videos/mustang-hero.webm',
    mp4: '/videos/mustang-hero.mp4',
    poster: '/videos/mustang-hero-poster.webp',
    posterJpg: '/videos/mustang-hero-poster.jpg',
  },
};

/** Per-model knowledge-overview figure video overrides, keyed by `${makeSlug}/${modelSlug}` */
export const MODEL_KNOWLEDGE_VIDEOS: Record<string, ModelVideoSources> = {
  'tesla/cybertruck': {
    webm: '/videos/cybertruck-hero.webm',
    mp4: '/videos/cybertruck-hero.mp4',
    poster: '/videos/cybertruck-hero-poster.webp',
    posterJpg: '/videos/cybertruck-hero-poster.jpg',
  },
};

/**
 * Models whose hero video displaced a photo the page should keep —
 * the former hero photo relocates to the services section figure.
 */
export const MODEL_HERO_PHOTO_RELOCATED = new Set([
  'toyota/4runner',
  'ford/bronco',
  'ford/mustang',
]);

/** Full-bleed hero backgrounds — cap decoded width at 1920px for next/image */
export const HERO_IMAGE_SIZES =
  '(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 1920px';

/** Service-page hero photo by slug */
export const SERVICE_PHOTOS: Record<string, string> = {
  'brake-repair-englewood-co': PHOTOS.undercarriage,
  'engine-diagnostics-englewood-co': PHOTOS.engineBay,
  'engine-rebuilds-englewood-co': PHOTOS.engineRebuild,
  'camshaft-lifter-repair-englewood-co': PHOTOS.classicEngine,
  'transmission-services-englewood-co': PHOTOS.classicLift,
  'suspension-steering-englewood-co': PHOTOS.techCloseup,
  'heating-ac-englewood-co': PHOTOS.interior,
  'electrical-system-englewood-co': PHOTOS.teamInspect,
  'oil-changes-englewood-co': PHOTOS.teamCollab,
  'check-engine-light-englewood-co': PHOTOS.engineRebuild,
  'battery-testing-englewood-co': PHOTOS.teamCuevas,
  'exhaust-system-englewood-co': PHOTOS.undercarriage,
  'preventative-maintenance-englewood-co': PHOTOS.brandedBay,
};
