export type ServiceAreaNeighborhood = {
  name: string;
  /** Local flag path — inherits city or county flag when no neighborhood flag exists */
  flag: string;
  flagSource: string;
};

export type ServiceArea = {
  name: string;
  slug: string;
  href: string;
  neighborhoods: ServiceAreaNeighborhood[];
  description: string;
  flag: string;
  flagSource: string;
  distanceFromShop: string;
  directions: string;
  whyChoose: string[];
  metaDescription: string;
};

/** Wikimedia Commons and official municipal flag sources */
const WIKI = 'https://commons.wikimedia.org/wiki/File:';
const WIKI_EN = 'https://en.wikipedia.org/wiki/File:';
const ARAPAHOE = '/images/flags/arapahoe-county.svg';
const DOUGLAS = '/images/flags/douglas-county.svg';
const JEFFERSON = '/images/flags/jefferson-county.svg';
const ARAPAHOE_COUNTY_SOURCE =
  `${WIKI}Flag_of_Arapahoe_County,_Colorado.svg — Arapahoe County flag (no municipal flag published)`;
const DOUGLAS_COUNTY_SOURCE =
  `${WIKI}Flag_of_Douglas_County,_Colorado.svg — Douglas County flag (unincorporated CDP)`;
const JEFFERSON_COUNTY_SOURCE =
  `${WIKI}Flag_of_Jefferson_County,_Colorado.svg — Jefferson County flag (no municipal flag published)`;

const DENVER = '/images/flags/denver.svg';
const DENVER_FLAG_SOURCE = `${WIKI}Flag_of_Denver,_Colorado.svg — Denver municipal flag (adopted 1926)`;
const DENVER_HOOD_FLAGS = '/images/flags/neighborhoods/denver';
const DENVER_HOOD_WIKI =
  'https://commons.wikimedia.org/wiki/Flags_of_counties_and_municipalities_in_Colorado#Neighborhoods_of_Denver';

const ENGLEWOOD = '/images/flags/englewood.webp';
const ENGLEWOOD_SOURCE =
  'City of Englewood municipal flag (white field + city logo, adopted 2017) — https://www.crwflags.com/fotw/flags/us-coeng.html';

const LITTLETON = '/images/flags/littleton.svg';
const LITTLETON_SOURCE = `${ARAPAHOE_COUNTY_SOURCE}; Littleton has no official municipal flag (confirmed by city, 2009)`;

const SHERIDAN = '/images/flags/sheridan.svg';
const SHERIDAN_SOURCE = `${ARAPAHOE_COUNTY_SOURCE}; Sheridan has no official municipal flag (confirmed by city, 2009)`;

const GREENWOOD_VILLAGE = '/images/flags/greenwood-village.svg';
const GREENWOOD_VILLAGE_SOURCE = `${ARAPAHOE_COUNTY_SOURCE}; Greenwood Village has no official municipal flag`;

const CENTENNIAL = '/images/flags/centennial.svg';
const CENTENNIAL_SOURCE = `${WIKI}Flag_of_Centennial,_Colorado.svg — Centennial municipal flag (official, adopted 2008)`;

const LAKEWOOD = '/images/flags/lakewood.svg';
const LAKEWOOD_SOURCE = `${WIKI}Flag_of_Lakewood,_Colorado.svg — Lakewood municipal flag`;

const AURORA = '/images/flags/aurora.svg';
const AURORA_SOURCE = `${WIKI}Flag_of_Aurora,_Colorado.svg — Aurora municipal flag`;

const CHV = '/images/flags/cherry-hills-village.svg';
const CHV_SOURCE = `${ARAPAHOE_COUNTY_SOURCE}; Cherry Hills Village has no official municipal flag`;

const HIGHLANDS_RANCH = '/images/flags/highlands-ranch.svg';
const HIGHLANDS_RANCH_SOURCE = `${DOUGLAS_COUNTY_SOURCE}; Highlands Ranch is an unincorporated CDP in Douglas County`;

const LONE_TREE = '/images/flags/lone-tree.webp';
const LONE_TREE_SOURCE = `${WIKI_EN}The_new_flag_of_Lone_Tree_selected_in_2025.png — Lone Tree municipal flag (adopted 2025)`;

const GLENDALE = '/images/flags/glendale.svg';
const GLENDALE_SOURCE = `${ARAPAHOE_COUNTY_SOURCE}; Glendale has no official municipal flag (confirmed by city, 2010)`;

const WHEAT_RIDGE = '/images/flags/wheat-ridge.webp';
const WHEAT_RIDGE_SOURCE = `${WIKI_EN}Flag_of_Wheat_Ridge,_Colorado.png — Wheat Ridge municipal flag`;

const MORRISON = '/images/flags/morrison.svg';
const MORRISON_SOURCE = `${JEFFERSON_COUNTY_SOURCE}; Morrison has no official municipal flag`;

const BOW_MAR = '/images/flags/bow-mar.svg';
const BOW_MAR_SOURCE = `${ARAPAHOE_COUNTY_SOURCE}; Bow Mar has no known municipal flag (incorporated town in Arapahoe/Jefferson counties)`;

const COLUMBINE = '/images/flags/columbine.svg';
const COLUMBINE_SOURCE = `${JEFFERSON_COUNTY_SOURCE}; Columbine is an unincorporated CDP primarily in Jefferson County`;

const ARVADA = '/images/flags/arvada.svg';
const ARVADA_SOURCE = `${WIKI}Flag_of_Arvada,_Colorado.svg — Arvada municipal flag`;

const PARKER = '/images/flags/parker.svg';
const PARKER_SOURCE = `${WIKI}Flag_of_Parker,_Colorado.svg — Parker municipal flag`;

const GOLDEN = '/images/flags/golden.svg';
const GOLDEN_SOURCE = `${WIKI}Flag_of_Golden,_Colorado.svg — Golden municipal flag`;

const EDGEWATER = '/images/flags/edgewater.webp';
const EDGEWATER_SOURCE = `${WIKI_EN}Flag_of_Edgewater,_Colorado.png — Edgewater municipal flag`;

const NO_HOOD_FLAGS =
  'No neighborhood flags on Wikimedia Commons for this city — neighborhoods inherit municipal flag';

const COUNTY_HOOD = (city: string) =>
  `No neighborhood flags on Wikimedia Commons — ${city} has no municipal flag; neighborhoods inherit county flag`;

function hood(name: string, flag: string, flagSource: string): ServiceAreaNeighborhood {
  return { name, flag, flagSource };
}

/** Neighborhoods inherit a published municipal flag (no per-neighborhood flags on Commons). */
function cityHoods(names: string[], flag: string, citySource: string): ServiceAreaNeighborhood[] {
  return names.map((name) => hood(name, flag, `${citySource}; ${NO_HOOD_FLAGS}`));
}

/** Neighborhoods inherit county flag — city has no municipal flag on Commons. */
function countyHoods(
  names: string[],
  flag: string,
  countySource: string,
  cityName: string
): ServiceAreaNeighborhood[] {
  return names.map((name) =>
    hood(name, flag, `${countySource}; ${COUNTY_HOOD(cityName)}`)
  );
}

/** Denver neighborhoods — Flags of Denver project on Wikimedia Commons. */
function denverNeighborhood(
  name: string,
  slug: string,
  wikiFile: string | null,
  localSlug?: string
): ServiceAreaNeighborhood {
  if (wikiFile) {
    return hood(
      name,
      `${DENVER_HOOD_FLAGS}/${localSlug ?? slug}.webp`,
      `${WIKI}${wikiFile} — Denver neighborhood flag (Flags of Denver, Wikimedia Commons)`
    );
  }
  return hood(
    name,
    DENVER,
    `${DENVER_HOOD_WIKI} — IMAGE (TBD) on Wikimedia; using Denver city flag (${DENVER_FLAG_SOURCE})`
  );
}

function area(
  name: string,
  slug: string,
  neighborhoods: ServiceAreaNeighborhood[],
  description: string,
  flag: string,
  flagSource: string,
  distanceFromShop: string,
  directions: string,
  whyChoose: string[],
  metaDescription: string
): ServiceArea {
  return {
    name,
    slug,
    href: `/areas-we-serve/${slug}`,
    neighborhoods,
    description,
    flag,
    flagSource,
    distanceFromShop,
    directions,
    whyChoose,
    metaDescription,
  };
}

export const SERVICE_AREAS_DATA: ServiceArea[] = [
  area(
    'Englewood',
    'englewood-co',
    cityHoods(
      [
        'Downtown Englewood',
        'City Center',
        'Arapahoe Acres',
        'Belleview Park',
        'Broken Arrow',
        'Bates-Logan',
        'Boyd & Broadway',
        'Hampden corridor',
        'Southwest Englewood',
        'Englewood South',
      ],
      ENGLEWOOD,
      ENGLEWOOD_SOURCE
    ),
    'Home base — our shop at 2120 W Evans Ave sits right in Englewood. Many customers walk or drive just a few minutes for brakes, diagnostics, and maintenance.',
    ENGLEWOOD,
    ENGLEWOOD_SOURCE,
    '0 miles — shop location',
    'We are at 2120 W Evans Ave near S Broadway and Hampden. Take Broadway south from Denver or Hampden west from I-25.',
    [
      'Your neighborhood shop — no highway trek for routine service',
      'Same-day appointments when bays are open',
      '30+ years serving Englewood drivers',
      'Written estimates before any repair begins',
    ],
    'RKC Automotive is your Englewood auto repair shop at 2120 W Evans Ave. ASE-certified brakes, diagnostics, oil changes & more. Call (720) 749-3965.'
  ),
  area(
    'Denver',
    'denver-co',
    [
      denverNeighborhood('Washington Park', 'washington-park', 'Flag_of_Washington_Park,_Denver.jpg'),
      denverNeighborhood('Washington Park West', 'washington-park-west', null),
      denverNeighborhood('Platt Park', 'platt-park', null),
      denverNeighborhood('University Hills', 'university-hills', null),
      denverNeighborhood('University Park', 'university-park', 'Flag_of_University_Park,_Denver.jpg'),
      denverNeighborhood('Virginia Village', 'virginia-village', 'Flag_of_Virginia_Village,_Denver.jpg'),
      denverNeighborhood('Hampden', 'hampden', null),
      denverNeighborhood('Ruby Hill', 'ruby-hill', 'Flag_of_Ruby_Hill,_Denver.png'),
      denverNeighborhood('Mar Lee', 'mar-lee', null),
      denverNeighborhood('Harvey Park', 'harvey-park', 'Flag_of_Harvey_Park,_Denver.png'),
      denverNeighborhood('Harvey Park South', 'harvey-park-south', null),
      denverNeighborhood('Barnum', 'barnum', null),
      denverNeighborhood('Athmar Park', 'athmar-park', 'Flag_of_Athmar_Park,_Denver.png'),
      denverNeighborhood('Overland', 'overland', null),
      denverNeighborhood('Cory-Merrill', 'cory-merrill', 'Flag_of_Cory-Merrill,_Denver.png'),
      denverNeighborhood('Wellshire', 'wellshire', null),
      denverNeighborhood('Rosedale', 'rosedale', 'Flag_of_Rosedale,_Denver.png'),
      denverNeighborhood('University', 'university', 'Flag_of_University,_Denver.jpg'),
      denverNeighborhood(
        'Washington Virginia Vale',
        'washington-virginia-vale',
        null
      ),
      denverNeighborhood('Belcaro', 'belcaro', 'Flag_of_Belcaro,_Denver.jpg'),
      denverNeighborhood('Cherry Creek', 'cherry-creek', null),
      denverNeighborhood('Country Club', 'country-club', null),
      denverNeighborhood('Marston', 'marston', 'Flag_of_Marston,_Denver.png'),
      denverNeighborhood('Valverde', 'valverde', 'Flag_of_Valverde,_Denver.png'),
      denverNeighborhood('Westwood', 'westwood', null),
      denverNeighborhood('Southmoor Park', 'southmoor-park', null),
      denverNeighborhood('Capitol Hill', 'capitol-hill', 'Flag_of_Capitol_Hill,_Denver.png'),
      denverNeighborhood('North Capitol Hill', 'north-capitol-hill', null),
      denverNeighborhood('Congress Park', 'congress-park', 'Flag_of_Congress_Park,_Denver.png'),
      denverNeighborhood('Cheesman Park', 'cheesman-park', 'Flag_of_Cheesman_Park,_Denver.jpg'),
      denverNeighborhood('City Park', 'city-park', 'Flag_of_City_Park,_Denver.png'),
      denverNeighborhood('City Park West', 'city-park-west', null),
      denverNeighborhood('Civic Center', 'civic-center', 'Flag_of_Civic_Center,_Denver.png'),
      denverNeighborhood(
        'LoDo',
        'lodo',
        'Flag_of_Central_Business_District,_Denver.png',
        'central-business-district'
      ),
      denverNeighborhood('Five Points', 'five-points', 'Flag_of_Five_Points,_Denver.png'),
      denverNeighborhood('RiNo (Five Points)', 'rino', 'Flag_of_Five_Points,_Denver.png', 'five-points'),
      denverNeighborhood('Hilltop', 'hilltop', 'Flag_of_Hilltop,_Denver.jpg'),
      denverNeighborhood('Montclair', 'montclair', 'Flag_of_Montclair,_Denver.png'),
      denverNeighborhood('Highland', 'highland', 'Flag_of_Highland,_Denver.png'),
      denverNeighborhood('West Highland', 'west-highland', null),
      denverNeighborhood('Berkeley', 'berkeley', 'Flag_of_Berkeley,_Denver.jpg'),
      denverNeighborhood('Sunnyside', 'sunnyside', 'Flag_of_Sunnyside,_Denver.png'),
      denverNeighborhood('Jefferson Park', 'jefferson-park', null),
      denverNeighborhood("Sloan's Lake", 'slouns-lake', "Flag_of_Sloan's_Lake,_Denver.png"),
      denverNeighborhood('Sun Valley', 'sun-valley', 'Flag_of_Sun_Valley,_Denver.png'),
      denverNeighborhood('Regis', 'regis', 'Flag_of_Regis,_Denver.png'),
      denverNeighborhood('Cole', 'cole', 'Flag_of_Cole,_Denver.png'),
      denverNeighborhood('Clayton', 'clayton', 'Flag_of_Clayton,_Denver.png'),
      denverNeighborhood('Green Valley Ranch', 'green-valley-ranch', 'Flag_of_Green_Valley_Ranch,_Denver.png'),
      denverNeighborhood('Montbello', 'montbello', 'Flag_of_Montbello,_Denver.png'),
      denverNeighborhood('Stapleton', 'stapleton', 'Flag_of_Stapleton,_Denver.jpg'),
      denverNeighborhood('Lowry', 'lowry', 'Flag_of_Lowry_Field,_Denver.png', 'lowry-field'),
    ],
    'South Denver and central Denver neighborhoods are a short drive up Broadway or Hampden to our Englewood bay — convenient for commuters who want dealer-quality work without dealer pricing.',
    DENVER,
    DENVER_FLAG_SOURCE,
    '3–8 miles',
    'From south Denver, take S Broadway south or Hampden Ave west to W Evans Ave. Most south-side neighborhoods reach us in under 15 minutes.',
    [
      'Easy access from Wash Park, Capitol Hill, Five Points, and University Hills',
      'Honest diagnostics — we find the root cause, not just the code',
      'All makes and models, domestic and import',
      'Hablo Español — bilingual service team',
    ],
    'Auto repair for Denver neighborhoods near RKC Automotive in Englewood. Wash Park, Capitol Hill, Five Points, Highland & more. Call (720) 749-3965.'
  ),
  area(
    'Littleton',
    'littleton-co',
    countyHoods(
      [
        'Downtown Littleton',
        'Historic Main Street',
        'Grant Ranch',
        'Ken Caryl area',
        'Columbine Hills',
        'Marlborough',
        'Highland Hills',
        'Sterne Park',
        'Ketring',
        'Littleton/Lasalle',
      ],
      LITTLETON,
      ARAPAHOE_COUNTY_SOURCE,
      'Littleton'
    ),
    'Littleton drivers count on RKC for dependable maintenance and repair — a straight shot north on Broadway or Santa Fe to our W Evans Ave shop.',
    LITTLETON,
    LITTLETON_SOURCE,
    '5–10 miles',
    'From downtown Littleton, head north on S Santa Fe Dr or S Broadway to W Evans Ave in Englewood. Typical drive is 12–18 minutes.',
    [
      'Trusted by Littleton families for preventative maintenance',
      'Brake, transmission, and AC specialists on staff',
      'Free multi-point inspection with most services',
      'Transparent pricing — no surprise line items',
    ],
    'Auto repair serving Littleton, CO neighborhoods. RKC Automotive in nearby Englewood — brakes, oil changes, diagnostics. Call (720) 749-3965.'
  ),
  area(
    'Sheridan',
    'sheridan-co',
    countyHoods(
      [
        'Sheridan Boulevard corridor',
        'Fort Logan',
        'Hampden Heights',
        'Marston',
        'Bear Valley area',
        'Bowles corridor',
        'West Sheridan',
        'Federal Blvd border',
      ],
      SHERIDAN,
      ARAPAHOE_COUNTY_SOURCE,
      'Sheridan'
    ),
    'Sheridan sits right next door to our shop — Fort Logan and Hampden Heights residents are often here in under 10 minutes.',
    SHERIDAN,
    SHERIDAN_SOURCE,
    '2–5 miles',
    'From Sheridan, take Hampden Ave or Federal Blvd north to W Evans Ave. Our shop is minutes from the Sheridan city limits.',
    [
      'Closest independent shop for many Sheridan neighborhoods',
      'Quick turnaround on oil changes and brake work',
      'ASE-certified technicians',
      'Walk-ins welcome — call ahead for faster service',
    ],
    'Auto repair near Sheridan, CO. RKC Automotive on W Evans Ave in Englewood — minutes from Fort Logan & Hampden Heights. Call (720) 749-3965.'
  ),
  area(
    'Greenwood Village',
    'greenwood-village-co',
    countyHoods(
      [
        'Orchard Hills',
        'Denver Tech Center',
        'Greenwood Hills',
        'Belleview',
        'Happy Canyon',
        'The Preserve',
        'Coventry',
        'Sundance',
        'Orchard Mesa',
        'Cherry Creek border',
      ],
      GREENWOOD_VILLAGE,
      ARAPAHOE_COUNTY_SOURCE,
      'Greenwood Village'
    ),
    'Greenwood Village professionals and families choose RKC for dealership-alternative service — honest estimates and expert work on every make.',
    GREENWOOD_VILLAGE,
    GREENWOOD_VILLAGE_SOURCE,
    '4–8 miles',
    'From Greenwood Village, take I-25 north to Hampden Ave west, or take Belleview east to Broadway south. About 10–15 minutes to our shop.',
    [
      'Convenient for DTC and Orchard Hills commuters',
      'European and luxury vehicle experience',
      'Written estimates before any repair',
      'Same-day service available for many jobs',
    ],
    'Auto repair serving Greenwood Village, CO — Orchard Hills, DTC & Belleview. RKC Automotive in Englewood. Call (720) 749-3965.'
  ),
  area(
    'Centennial',
    'centennial-co',
    cityHoods(
      [
        'Southglenn',
        'Willow Creek',
        'Cherry Knolls',
        'Walnut Hills',
        'Fox Ridge',
        'Homestead',
        'Piney Creek',
        'Inverness',
        'Smoky Hill',
        'Centennial Hills',
      ],
      CENTENNIAL,
      CENTENNIAL_SOURCE
    ),
    'Centennial commuters heading north on I-25 or Broadway find RKC an easy stop for brakes, batteries, and scheduled maintenance.',
    CENTENNIAL,
    CENTENNIAL_SOURCE,
    '6–12 miles',
    'From Southglenn or Willow Creek, take S Broadway north or I-25 north to Hampden west. Plan 15–20 minutes depending on traffic.',
    [
      'Reliable maintenance for Centennial daily drivers',
      'Check-engine light diagnosis from $99',
      'Quality parts with warranty coverage explained upfront',
      'Locally owned — not a national chain',
    ],
    'Auto repair for Centennial, CO — Southglenn, Willow Creek, Cherry Knolls & more. RKC Automotive in Englewood. Call (720) 749-3965.'
  ),
  area(
    'Lakewood',
    'lakewood-co',
    cityHoods(
      [
        'Belmar',
        'Green Mountain',
        'Bear Creek',
        'Union Square',
        'Molholm',
        'Eiber',
        "O'Kane Park",
        'Carmody',
        'Kendrick Lake',
        'Solterra',
      ],
      LAKEWOOD,
      LAKEWOOD_SOURCE
    ),
    'Lakewood drivers west of Denver trust RKC for thorough diagnostics and fair pricing — worth the short trip to our Englewood bay.',
    LAKEWOOD,
    LAKEWOOD_SOURCE,
    '8–14 miles',
    'From Belmar or Green Mountain, take W Alameda or Hampden Ave east toward Englewood. W Evans Ave is just off Hampden near Broadway.',
    [
      'Full-service shop for Lakewood import and domestic vehicles',
      'Suspension, steering, and alignment expertise',
      'Comfortable waiting area or convenient drop-off',
      '30+ years of metro Denver experience',
    ],
    'Auto repair serving Lakewood, CO — Belmar, Green Mountain, Bear Creek & more. RKC Automotive in Englewood. Call (720) 749-3965.'
  ),
  area(
    'Aurora',
    'aurora-co',
    cityHoods(
      [
        'Southlands',
        'CentrePoint',
        'Saddle Rock',
        'Tallgrass',
        'Heather Ridge',
        'Southshore',
        'Murphy Creek',
        'Montview corridor',
        'Fitzsimons',
        'Dam East',
      ],
      AURORA,
      AURORA_SOURCE
    ),
    'South Aurora and east-metro drivers make the trip to RKC for work they can trust — real diagnostics, not code-only guesses.',
    AURORA,
    AURORA_SOURCE,
    '10–18 miles',
    'From south Aurora, take I-225 north to I-25 north, exit Hampden west to W Evans. Alternatively, take Iliff or Mississippi west to Santa Fe north.',
    [
      'Worth the drive for honest second opinions',
      'Emissions and exhaust repair for Colorado inspections',
      'Transmission fluid service and diagnostics',
      'Bilingual team — Hablo Español',
    ],
    'Auto repair for south Aurora, CO neighborhoods. RKC Automotive in Englewood — honest diagnostics & ASE-certified service. Call (720) 749-3965.'
  ),
  area(
    'Cherry Hills Village',
    'cherry-hills-village-co',
    countyHoods(
      [
        'Cherry Hills Country Club',
        'Gallup Gardens',
        'Holly Park',
        'Cherry Hills Farm',
        'Quincy Ave corridor',
        'Greenwood Village border',
      ],
      CHV,
      ARAPAHOE_COUNTY_SOURCE,
      'Cherry Hills Village'
    ),
    'Cherry Hills Village residents appreciate RKC\'s professional, no-pressure approach — expert care for luxury and daily drivers alike.',
    CHV,
    CHV_SOURCE,
    '4–7 miles',
    'From Cherry Hills Village, take Hampden Ave west or University Blvd north to Hampden, then west to W Evans Ave. About 10–12 minutes.',
    [
      'Experienced with European and premium vehicles',
      'Discreet, professional service',
      'Written estimates — no upsell pressure',
      'Preventative maintenance programs',
    ],
    'Auto repair near Cherry Hills Village, CO. RKC Automotive in Englewood — expert service for luxury & daily drivers. Call (720) 749-3965.'
  ),
  area(
    'Highlands Ranch',
    'highlands-ranch-co',
    countyHoods(
      [
        'Northridge',
        'Westridge',
        'Backcountry',
        'Town Center',
        'Highlands Point',
        'Eastridge',
        'Southridge',
        'Wildcat Reserve',
        'North Springs',
        'Backcountry Wilderness',
      ],
      HIGHLANDS_RANCH,
      DOUGLAS_COUNTY_SOURCE,
      'Highlands Ranch (unincorporated CDP)'
    ),
    'Highlands Ranch is one of our busiest service areas — families and commuters head north on Broadway for maintenance they can count on.',
    HIGHLANDS_RANCH,
    HIGHLANDS_RANCH_SOURCE,
    '8–12 miles',
    'From Highlands Ranch Town Center, take S Broadway north directly to W Evans Ave in Englewood. Typical drive is 15–20 minutes.',
    [
      'Popular with Highlands Ranch families for oil changes and brakes',
      'Multi-vehicle fleet discounts available — ask when you call',
      'Same-day slots when available',
      'All major makes serviced',
    ],
    'Auto repair serving Highlands Ranch, CO — Northridge, Backcountry, Town Center & more. RKC Automotive in Englewood. Call (720) 749-3965.'
  ),
  area(
    'Lone Tree',
    'lone-tree-co',
    cityHoods(
      [
        'RidgeGate',
        'Heritage Hills',
        'Carriage Club',
        'Lincoln Station',
        'Park Meadows',
        'Sweetwater',
        'Acres Green',
        'Lincoln Square',
      ],
      LONE_TREE,
      LONE_TREE_SOURCE
    ),
    'Lone Tree and RidgeGate commuters use RKC for dependable service north on I-25 or Broadway — expert work without the dealership wait.',
    LONE_TREE,
    LONE_TREE_SOURCE,
    '8–12 miles',
    'From Lone Tree, take I-25 north to Hampden Ave west, or take S Broadway north through Centennial to W Evans Ave.',
    [
      'Convenient for RidgeGate and Park Meadows area workers',
      'Quick oil change and inspection appointments',
      'Engine and transmission diagnostics',
      'Fair pricing with written estimates',
    ],
    'Auto repair serving Lone Tree, CO — RidgeGate, Heritage Hills & Park Meadows area. RKC Automotive in Englewood. Call (720) 749-3965.'
  ),
  area(
    'Glendale',
    'glendale-co',
    countyHoods(
      [
        'Cherry Creek corridor',
        'Colorado Blvd',
        'Bellaire',
        'Creekside',
        'Village East',
        'Holly Hills border',
      ],
      GLENDALE,
      ARAPAHOE_COUNTY_SOURCE,
      'Glendale'
    ),
    'Glendale\'s Cherry Creek corridor is a quick hop to our Englewood shop — ideal for lunch-break oil changes and brake inspections.',
    GLENDALE,
    GLENDALE_SOURCE,
    '5–8 miles',
    'From Glendale, take Colorado Blvd south to Hampden Ave west, or take Leetsdale Dr west to Broadway south.',
    [
      'Fast access from Cherry Creek and Colorado Blvd',
      'Same-day brake and battery service',
      'AC and heating diagnostics',
      'Locally owned Englewood shop',
    ],
    'Auto repair near Glendale, CO and the Cherry Creek corridor. RKC Automotive on W Evans Ave — brakes, diagnostics, oil changes. Call (720) 749-3965.'
  ),
  area(
    'Wheat Ridge',
    'wheat-ridge-co',
    cityHoods(
      [
        'Applewood',
        'Bel Aire',
        'Prospect Park',
        'Crown Hill',
        'Ranchland',
        '38th Ave corridor',
        'Lakeside border',
        'Paramount Heights',
      ],
      WHEAT_RIDGE,
      WHEAT_RIDGE_SOURCE
    ),
    'Wheat Ridge drivers heading east on Alameda or Hampden find RKC a trusted alternative to chain shops — real technicians, real answers.',
    WHEAT_RIDGE,
    WHEAT_RIDGE_SOURCE,
    '10–14 miles',
    'From Wheat Ridge, take W 38th Ave or W Alameda Ave east to S Wadsworth Blvd south to Hampden Ave east to W Evans.',
    [
      'Honest alternative to quick-lube chains',
      'Coolant flushes and Colorado winter prep',
      'Electrical and charging system diagnostics',
      'ASE-certified team',
    ],
    'Auto repair serving Wheat Ridge, CO — Applewood, Prospect Park & Bel Aire. RKC Automotive in Englewood. Call (720) 749-3965.'
  ),
  area(
    'Morrison',
    'morrison-co',
    countyHoods(
      [
        'Downtown Morrison',
        'Bear Creek canyon',
        'Red Rocks area',
        'Mount Vernon Country Club',
        'Tiny Town',
        'Kittredge border',
      ],
      MORRISON,
      JEFFERSON_COUNTY_SOURCE,
      'Morrison'
    ),
    'Morrison and Bear Creek canyon residents make the drive to RKC for service they trust — especially before mountain trips and winter seasons.',
    MORRISON,
    MORRISON_SOURCE,
    '12–16 miles',
    'From Morrison, take Bear Creek Ave or Hampden Ave (Hwy 285) east to S Wadsworth Blvd north to Hampden east to W Evans.',
    [
      'Pre-trip inspections for mountain driving',
      'Brake and suspension work for canyon roads',
      'Battery testing before winter',
      'Trusted by west-metro commuters',
    ],
    'Auto repair serving Morrison, CO — Bear Creek, Red Rocks & west metro. RKC Automotive in Englewood. Call (720) 749-3965.'
  ),
  area(
    'Bow Mar',
    'bow-mar-co',
    countyHoods(
      [
        'Bow Mar proper',
        'Bow Mar Lake',
        'Bow Mar South',
        'Grant Ranch border',
        'W Bow Mar Dr area',
      ],
      BOW_MAR,
      ARAPAHOE_COUNTY_SOURCE,
      'Bow Mar'
    ),
    'Bow Mar\'s quiet lakeside community is just minutes from our Englewood shop — convenient for scheduled maintenance and repairs.',
    BOW_MAR,
    BOW_MAR_SOURCE,
    '4–6 miles',
    'From Bow Mar, take S Wadsworth Blvd or S Broadway north to W Evans Ave. Most Bow Mar residents reach us in under 10 minutes.',
    [
      'Neighborhood-close independent shop',
      'Scheduled maintenance reminders',
      'Quality oil changes and fluid services',
      'No high-pressure sales tactics',
    ],
    'Auto repair near Bow Mar, CO and Bow Mar Lake. RKC Automotive in Englewood — ASE-certified maintenance minutes away. Call (720) 749-3965.'
  ),
  area(
    'Columbine',
    'columbine-co',
    countyHoods(
      [
        'Columbine Valley',
        'Columbine West',
        'Dutch Creek',
        'Leawood',
        'Columbine Knolls',
        'Columbine South',
        'Ken Caryl border',
      ],
      COLUMBINE,
      JEFFERSON_COUNTY_SOURCE,
      'Columbine (unincorporated CDP)'
    ),
    'Columbine and Columbine Valley neighbors are among our closest customers — a quick drive up Wadsworth or Broadway to W Evans Ave.',
    COLUMBINE,
    COLUMBINE_SOURCE,
    '3–6 miles',
    'From Columbine, take S Wadsworth Blvd or S Pierce St north to W Evans Ave. Under 10 minutes from most Columbine neighborhoods.',
    [
      'One of the closest full-service shops to Columbine',
      'Trusted for brakes, tires, and suspension',
      'Family-friendly service',
      '30+ years in the south metro',
    ],
    'Auto repair serving Columbine and Columbine Valley, CO. RKC Automotive in Englewood — ASE-certified, minutes away. Call (720) 749-3965.'
  ),
  area(
    'Arvada',
    'arvada-co',
    cityHoods(
      [
        'Olde Town Arvada',
        'Ralston Valley',
        'Candelas',
        'Lake Arbor',
        'Meadowglen',
        'West Woods',
        'Leyden Rock',
        'Allendale',
        'Arvada West',
      ],
      ARVADA,
      ARVADA_SOURCE
    ),
    'Arvada drivers on the west side of the metro choose RKC when they want thorough work and straight answers — not a sales pitch.',
    ARVADA,
    ARVADA_SOURCE,
    '12–18 miles',
    'From Olde Town Arvada, take W 58th Ave or W Colfax Ave east to Wadsworth Blvd south to Hampden Ave east to W Evans.',
    [
      'Full diagnostic capabilities',
      'Exhaust and emissions repair',
      'Competitive pricing vs. Arvada dealerships',
      'Written estimates on every job',
    ],
    'Auto repair serving Arvada, CO — Olde Town, Ralston Valley & west metro. RKC Automotive in Englewood. Call (720) 749-3965.'
  ),
  area(
    'Parker',
    'parker-co',
    cityHoods(
      [
        'Stonegate',
        'The Pinery',
        'Meridian Village',
        'Stroh Ranch',
        'Canterberry',
        'Ponderosa Highlands',
        'Cottonwood',
        'Lincoln Meadows',
      ],
      PARKER,
      PARKER_SOURCE
    ),
    'Parker and Stonegate residents heading north on Parker Rd or I-25 rely on RKC for maintenance that keeps their commute worry-free.',
    PARKER,
    PARKER_SOURCE,
    '14–18 miles',
    'From Parker, take Parker Rd north to E-470 west to I-25 north to Hampden west, or take S Parker Rd to Arapahoe Rd west to I-25.',
    [
      'Trusted by south-metro commuters',
      'Transmission and engine diagnostics',
      'Preventative maintenance packages',
      'Quality parts and labor',
    ],
    'Auto repair serving Parker, CO — Stonegate, The Pinery & Meridian Village. RKC Automotive in Englewood. Call (720) 749-3965.'
  ),
  area(
    'Golden',
    'golden-co',
    cityHoods(
      [
        'Downtown Golden',
        'Coal Creek',
        'Mesa Meadows',
        'North Golden',
        'West Colfax corridor',
        'Applewood border',
        'Golden Gate Canyon',
      ],
      GOLDEN,
      GOLDEN_SOURCE
    ),
    'Golden and west-metro drivers visit RKC for dependable service before canyon drives and daily commutes into Denver.',
    GOLDEN,
    GOLDEN_SOURCE,
    '14–18 miles',
    'From downtown Golden, take W Colfax Ave or 6th Ave east to S Wadsworth Blvd south to Hampden Ave east to W Evans.',
    [
      'Pre-canyon trip safety inspections',
      'Brake and tire expertise for mountain roads',
      'Honest, experienced technicians',
      'All makes and models',
    ],
    'Auto repair serving Golden, CO and west metro. RKC Automotive in Englewood — brakes, diagnostics & maintenance. Call (720) 749-3965.'
  ),
  area(
    'Edgewater',
    'edgewater-co',
    cityHoods(
      [
        'Downtown Edgewater',
        "Sloan's Lake border",
        '20th Ave corridor',
        'Sheridan Blvd border',
        'Jefferson Park border',
        'W 26th Ave corridor',
      ],
      EDGEWATER,
      EDGEWATER_SOURCE
    ),
    'Edgewater\'s compact community is a quick trip south on Sheridan or Wadsworth to our Englewood bay.',
    EDGEWATER,
    EDGEWATER_SOURCE,
    '8–12 miles',
    'From Edgewater, take Sheridan Blvd or W 20th Ave south to Hampden Ave west to W Evans Ave.',
    [
      'Close alternative to Sloans Lake area shops',
      'Oil changes and brake service',
      'Electrical diagnostics',
      'Fair, transparent pricing',
    ],
    'Auto repair near Edgewater, CO and Sloans Lake. RKC Automotive in Englewood — brakes, diagnostics, oil changes. Call (720) 749-3965.'
  ),
];

/** City name list for backwards compatibility */
export const SERVICE_AREAS = SERVICE_AREAS_DATA.map((a) => a.name) as readonly string[];

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return SERVICE_AREAS_DATA.find((a) => a.slug === slug);
}

export function getAllServiceAreaSlugs(): string[] {
  return SERVICE_AREAS_DATA.map((a) => a.slug);
}
