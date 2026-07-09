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
