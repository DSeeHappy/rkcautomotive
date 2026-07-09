export type BrandReliabilityBullet = {
  label: 'Generally solid' | 'Higher scrutiny' | 'Colorado angle';
  text: string;
};

export type BrandReliabilitySnapshot = {
  id: string;
  bullets: BrandReliabilityBullet[];
};

export const BRAND_RELIABILITY_SNAPSHOTS: BrandReliabilitySnapshot[] = [
  {
    id: 'toyota',
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
];

export function getBrandReliabilitySnapshot(slug: string): BrandReliabilitySnapshot | undefined {
  return BRAND_RELIABILITY_SNAPSHOTS.find((snapshot) => snapshot.id === slug);
}
