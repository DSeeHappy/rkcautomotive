export type BrandReliabilityBullet = {
  label: 'Generally solid' | 'Higher scrutiny' | 'Colorado angle';
  text: string;
};

export type BrandReliabilitySnapshot = {
  id: string;
  /** 3–5 standout models worth driving — display names may include year notes */
  reliablePicks: string[];
  bullets: BrandReliabilityBullet[];
};

export const BRAND_RELIABILITY_SNAPSHOTS: BrandReliabilitySnapshot[] = [
  {
    id: 'toyota',
    reliablePicks: ['Camry', 'Corolla', 'RAV4 (2019+)', '4Runner', 'Tacoma'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Camry, Corolla, RAV4 (2019+), 4Runner, and Tacoma with the 3.5L 2GR-FE or 2.7L 2TR-FE — boring in the best way when maintenance is documented.',
      },
      {
        label: 'Higher scrutiny',
        text: '2007–2011 2AZ-FE oil consumption era; 3.5L timing-cover seep on used lots; D-4S cold-start hesitation on newer RAV4/Highlander.',
      },
      {
        label: 'Colorado angle',
        text: 'Sealed WS automatics hate sustained I-70 downshifts — fluid service before mountain towing season is cheap insurance.',
      },
    ],
  },
  {
    id: 'honda',
    reliablePicks: ['Accord', 'Civic (2022+)', 'HR-V', 'Pilot', 'Ridgeline'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Accord and Civic (2022+), HR-V, Pilot, and Ridgeline with full service history — still the sensible default for Denver commuters.',
      },
      {
        label: 'Higher scrutiny',
        text: '2016–2021 1.5L turbo CR-V/Civic on short winter commutes (oil dilution); Earth Dreams V6 with VCM and oil-fouled plugs unless bypassed.',
      },
      {
        label: 'Colorado angle',
        text: 'Sub-zero morning hops to the Park-n-Ride never let the 1.5L turbo fully warm — dilution shows up faster here than on the coast.',
      },
    ],
  },
  {
    id: 'ford',
    reliablePicks: ['F-150 5.0L', 'Ranger', 'Bronco Sport', 'Mustang GT'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'F-150 5.0L Coyote, Ranger, Bronco Sport, and Mustang GT with clean oil-change records — proven platforms we see daily in Englewood.',
      },
      {
        label: 'Higher scrutiny',
        text: 'EcoBoost cam phaser rattle on cold start; Explorer/Edge 3.5L internal water pump; early 2017–2019 10R80 shift hunting.',
      },
      {
        label: 'Colorado angle',
        text: 'Pulling a camper up I-70 cooks 10-speed fluid — auxiliary trans cooling is not optional for repeat mountain runs.',
      },
    ],
  },
  {
    id: 'chevrolet',
    reliablePicks: ['Colorado', 'Tahoe', 'Suburban', 'Silverado 5.3L'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Colorado/Canyon midsize, older 5.3L pre-AFM trucks, and Tahoe/Suburban with a documented lifter delete or 6.2L with clean valvetrain history.',
      },
      {
        label: 'Higher scrutiny',
        text: '2014–2021 5.3L/6.2L AFM/DFM lifter collapse; 8L90 torque-converter shudder above 40 mph; 1.5L turbo PCV freeze-up in deep cold.',
      },
      {
        label: 'Colorado angle',
        text: 'Altitude swings plus freezing mountain gaps load PCV lines with moisture — blown rear main seals show up every winter.',
      },
    ],
  },
  {
    id: 'bmw',
    reliablePicks: ['3 Series', '5 Series', 'X3', 'X5 (2019+)'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'B58-powered 3/5 Series and X3/X5 (2019+) with complete cooling and oil service records — worth owning when maintained.',
      },
      {
        label: 'Higher scrutiny',
        text: '2012–2015 N20/N26 timing chain guides; brittle plastic cooling housings; N55 valve-cover PCV diaphragm tears and oil ingestion.',
      },
      {
        label: 'Colorado angle',
        text: 'Long I-70 grades push turbo temps past what flat-state cooling parts tolerate — leaks appear here first.',
      },
    ],
  },
  {
    id: 'mercedes',
    reliablePicks: ['E-Class', 'GLE', 'S-Class', 'Sprinter'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'E-Class and GLE with maintained AirMATIC, Sprinter diesels with fleet records, and S-Class with documented suspension work.',
      },
      {
        label: 'Higher scrutiny',
        text: '2015–2018 M274 2.0L piston cracking; 722.9 conductor-plate limp mode; aging AirMATIC bladders that kill the compressor.',
      },
      {
        label: 'Colorado angle',
        text: 'Warm afternoons and sub-zero mountain nights crack rubber air bladders faster than owners expect.',
      },
    ],
  },
  {
    id: 'audi',
    reliablePicks: ['Q5', 'Q7 3.0T', 'A4', 'A6'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Q5/Q7 3.0T with timing service done, and Gen 3 EA888 2.0T with documented walnut-blast or port-injector maintenance.',
      },
      {
        label: 'Higher scrutiny',
        text: '2009–2015 2.0T oil consumption; 3.0T cold-start chain rattle; DL501 DSG mechatronic corrosion and harsh shifts.',
      },
      {
        label: 'Colorado angle',
        text: 'Carbon-choked intake valves steal power you cannot spare at Mile High — hesitation feels twice as bad here.',
      },
    ],
  },
  {
    id: 'nissan',
    reliablePicks: ['Frontier (2022+)', 'Titan', 'Altima (manual)', 'Sentra'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Frontier (2022+), Titan with maintained trans, and manual Altima/Sentra when the CVT is not in the picture.',
      },
      {
        label: 'Higher scrutiny',
        text: 'Any Jatco CVT without 30k fluid receipts; pre-2011 Frontier/Pathfinder SMOD radiator cross-contamination; VQ35DE timing-chain whine.',
      },
      {
        label: 'Colorado angle',
        text: 'CVTs overheat on sustained mountain climbs — fluid condition matters more than the window sticker mileage.',
      },
    ],
  },
  {
    id: 'subaru',
    reliablePicks: ['Crosstrek', 'Outback', 'Forester', 'WRX'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Crosstrek, newer Outback/Forester with FB25 and MLS head-gasket upgrade, and WRX with documented maintenance.',
      },
      {
        label: 'Higher scrutiny',
        text: 'EJ25 external head-gasket seep (bubbles in the coolant tank); TR580/690 CVT stall on hard stops; cam-carrier oil seep onto exhaust.',
      },
      {
        label: 'Colorado angle',
        text: 'The unofficial state car still eats gaskets on continuous mountain load — we see it every week in Englewood.',
      },
    ],
  },
  {
    id: 'jeep',
    reliablePicks: ['Gladiator', 'Wrangler JL', 'Grand Cherokee'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Gladiator and Wrangler JL with a clean Pentastar valley, Grand Cherokee with solid front-end geometry and no valley oil pooling.',
      },
      {
        label: 'Higher scrutiny',
        text: '3.6L Pentastar rocker tick and cam damage; plastic oil-filter housing cracks; Wrangler death wobble from worn track-bar bushings.',
      },
      {
        label: 'Colorado angle',
        text: 'Trail and pothole abuse on front-range roads accelerates steering wander — budget for heavy-duty track bars if you wheel.',
      },
    ],
  },
  {
    id: 'ram',
    reliablePicks: ['2500 Cummins', '3500 Cummins', '1500 5.7L', 'Power Wagon'],
    bullets: [
      {
        label: 'Generally solid',
        text: '2500/3500 Cummins with trans service history, 5.7L Hemi with low engine-hour idle time, and Power Wagon with maintained front end.',
      },
      {
        label: 'Higher scrutiny',
        text: 'Hemi lifter seizure on high-idle work trucks; 68RFE overdrive slip under load; snapped exhaust-manifold studs on cold starts.',
      },
      {
        label: 'Colorado angle',
        text: 'Towing campers up Loveland Pass cycles exhaust hardware hard — manifold leaks are a pattern, not bad luck.',
      },
    ],
  },
  {
    id: 'hyundai',
    reliablePicks: ['Palisade', 'Tucson (2022+)', 'Ioniq 5', 'Santa Fe'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Palisade, Tucson (2022+), and Ioniq 5 with clean records — strong value when you verify engine lineage.',
      },
      {
        label: 'Higher scrutiny',
        text: '2011–2019 Theta II rod-bearing failure without recall replacement proof; Smartstream oil consumption; heavy GDI carbon on short trips.',
      },
      {
        label: 'Colorado angle',
        text: 'GDI carbon costs you horsepower you already lack at altitude — misfires and hesitation show up sooner here.',
      },
    ],
  },
  {
    id: 'kia',
    reliablePicks: ['Telluride', 'EV6', 'Sportage (2023+)', 'K5'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Telluride and EV6 with verified maintenance, Sportage (2023+) and K5 when DCT history is clean.',
      },
      {
        label: 'Higher scrutiny',
        text: 'Soul/Optima cold piston slap; dry 7-speed DCT overheating in crawl traffic; AWD coupling wear with no dashboard warning.',
      },
      {
        label: 'Colorado angle',
        text: 'A silent AWD failure means FWD on an icy pass — rack-test rear drive before you buy used.',
      },
    ],
  },
  {
    id: 'volkswagen',
    reliablePicks: ['Golf', 'GTI', 'Tiguan', 'Atlas 3.6'],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Golf/GTI (manual), Tiguan with documented water-pump work, Atlas 3.6 with clean cooling history.',
      },
      {
        label: 'Higher scrutiny',
        text: 'TSI composite water pump under the intake; DQ250 DSG mechatronic contamination; EA888 wastegate rattle and P0299 under-boost.',
      },
      {
        label: 'Colorado angle',
        text: 'Plastic cooling modules hate our alpine freeze-thaw cycles — sweet smell under the hood is a walk-away signal.',
      },
    ],
  },

  {
    id: 'gmc',
    reliablePicks: [
      'Sierra 1500',
      'Yukon',
      'Terrain',
      'Canyon',
      'Sierra HD',
    ],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Sierra 1500, Yukon, Terrain, Canyon, Sierra HD — solid when maintenance is documented.',
      },
      {
        label: 'Higher scrutiny',
        text: 'We recommend bringing your GMC to our Englewood, CO shop for regular maintenance to catch potential issues early and keep your vehicle running smoothly.',
      },
      {
        label: 'Colorado angle',
        text: 'Living in Colorado means dealing with harsh weather and rough roads, so keeping your GMC in top shape at RKC Automotive is essential for reliability.',
      },
    ],
  },

  {
    id: 'lexus',
    reliablePicks: [
      'Lexus RX',
      'Lexus ES',
      'Lexus NX',
    ],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Lexus RX, Lexus ES, Lexus NX — solid when maintenance is documented.',
      },
      {
        label: 'Higher scrutiny',
        text: 'While generally robust, older RX models require specific attention to transmission fluid and suspension bushings to prevent premature wear in Colorado\'s variable conditions.',
      },
      {
        label: 'Colorado angle',
        text: 'Our Englewood technicians specialize in maintaining Lexus reliability against the harsh effects of high-altitude UV exposure and road salt corrosion common in the Rockies.',
      },
    ],
  },

  {
    id: 'acura',
    reliablePicks: [
      '2022 Acura Integra',
      '2021 Acura RDX',
      '2023 Acura MDX',
    ],
    bullets: [
      {
        label: 'Generally solid',
        text: '2022 Acura Integra, 2021 Acura RDX, 2023 Acura MDX — solid when maintenance is documented.',
      },
      {
        label: 'Higher scrutiny',
        text: 'While Acura vehicles are generally robust, owners should monitor for infotainment glitches and potential transmission fluid leaks in older TL and MDX models.',
      },
      {
        label: 'Colorado angle',
        text: 'Our Englewood ASE-certified technicians specialize in maintaining Acura\'s precision engineering against Colorado\'s varied terrain and seasonal road salt.',
      },
    ],
  },

  {
    id: 'tesla',
    reliablePicks: [
      'Model 3',
      'Model Y',
      'Model S',
      'Model X',
      '2023+ Cybertruck',
    ],
    bullets: [
      {
        label: 'Generally solid',
        text: 'Model 3, Model Y, Model S, Model X, 2023+ Cybertruck — solid when maintenance is documented.',
      },
      {
        label: 'Higher scrutiny',
        text: 'At RKC Automotive in Englewood, we recommend buyers have an independent ASE-certified technician inspect the battery health and software calibration history, as these vehicles lack traditional dealer-only diagnostic tools.',
      },
      {
        label: 'Colorado angle',
        text: 'Our Englewood shop specializes in preparing Tesla EVs for Colorado\'s high-altitude driving and harsh winter conditions by ensuring battery thermal management systems are optimized for cold-weather efficiency.',
      },
    ],
  },

  {
    id: 'alfa-romeo',
    reliablePicks: [
      '2018-2020 Giulia Ti',
      '2017-2019 Stelvio Ti',
      '2022+ Tonale Veloce',
    ],
    bullets: [
      {
        label: 'Generally solid',
        text: '2018-2020 Giulia Ti, 2017-2019 Stelvio Ti, 2022+ Tonale Veloce — solid when maintenance is documented.',
      },
      {
        label: 'Higher scrutiny',
        text: 'Alfa Romeo vehicles require strict adherence to manufacturer-specific maintenance schedules and specialized diagnostic tools to prevent electrical gremlins and turbocharger failures common in their high-performance engines.',
      },
      {
        label: 'Colorado angle',
        text: 'As Englewood’s premier ASE-certified specialists, RKC Automotive provides the precise Italian expertise needed to keep your Giulia, Stelvio, or Tonale running with the reliability of a German sedan.',
      },
    ],
  },
];

export function getBrandReliabilitySnapshot(slug: string): BrandReliabilitySnapshot | undefined {
  return BRAND_RELIABILITY_SNAPSHOTS.find((snapshot) => snapshot.id === slug);
}
