export type ModelReliabilityBullet = {
  label: string;
  text: string;
};

export type ModelReliabilitySnapshot = {
  id: string;
  intro: string;
  bullets: ModelReliabilityBullet[];
  faqs: { question: string; answer: string }[];
};

const MODEL_RELIABILITY_SNAPSHOTS: ModelReliabilitySnapshot[] = [
  {
    id: 'toyota-rav4',
    intro:
      'The Toyota RAV4 is the default Colorado crossover — AWD, hybrid, and gas trims all show up at RKC with different failure calendars. We separate 2AZ-FE timing-belt era concerns from 2013+ chain platforms and hybrid inverter coolant before quoting service.',
    bullets: [
      {
        label: 'Common issues',
        text: 'Rear differential and driveshaft-disconnect groaning on tight turns, D-4S cold-start hesitation, 2AZ-FE oil consumption on 2006–2012 models, and sealed WS transmission shudder after mountain towing.',
      },
      {
        label: 'Colorado angle',
        text: 'I-70 descents glaze torque-converter clutches when WS fluid is never exchanged. Hybrid RAV4s need inverter coolant and 12V battery load tests before the first sub-zero Federal Blvd morning.',
      },
      {
        label: 'Service notes',
        text: 'RKC documents belt-vs-chain platform by VIN, load-tests batteries at rated CCA, and services rear diff fluid before ski season — not just oil changes.',
      },
    ],
    faqs: [
      {
        question: 'Does my RAV4 need timing belt or chain service?',
        answer:
          '2006–2012 gas RAV4s with the 2AZ-FE use a timing belt and water pump — overdue belts on this interference engine risk valve damage. 2013+ gas and hybrid RAV4s use timing chains inspected for stretch at high mileage. Bring your VIN to RKC and we confirm the platform before quoting.',
      },
      {
        question: 'Why does my RAV4 groan in parking lots?',
        answer:
          'AWD coupling and rear differential fluid degradation causes groaning on tight turns — common after a winter of neglected fluid. Fresh Toyota-spec gear oil and coupling inspection at our Englewood shop costs far less than driveshaft-disconnect repair after binding.',
      },
    ],
  },
  {
    id: 'toyota-4runner',
    intro:
      '4Runners are built for Colorado trails and daily I-25 duty — but the same solid rear axle and sealed automatic that survive Moab also hide deferred transfer-case fluid and timing-cover seep on 4.0L V6 trucks. RKC treats every 4Runner as a tow-and-trail platform, not a sedan with taller ride height.',
    bullets: [
      {
        label: 'Common issues',
        text: '4.0L 1GR-FE timing-cover oil seep, KDSS hydraulic lean on TRD Off-Road, front hub actuator grinding in 4WD, and rear drum-to-disc parking brake drag on older fifth-gen trucks.',
      },
      {
        label: 'Colorado angle',
        text: 'Fire-road suspension wear accelerates ball joints and tie rods; neglected transfer-case fluid binds after repeated Loveland Pass runs. KDSS accumulators fail faster when trucks sit nose-high on steep driveways.',
      },
      {
        label: 'Service notes',
        text: 'Pre-trip inspections cover hitch wiring, rear diff fluid, and 4WD actuator function. RKC aligns lifted 4Runners to modified ride-height specs, not sedan defaults.',
      },
    ],
    faqs: [
      {
        question: 'How often should 4Runner transfer case fluid be changed?',
        answer:
          'Toyota labels many 4Runner transfer cases “sealed,” but Colorado towing and 4WD use qualifies as severe duty. RKC recommends inspection every 30,000 miles and fluid exchange when color smells burnt or shift delay appears — especially before hauling campers over I-70.',
      },
      {
        question: 'What is KDSS and when does it fail?',
        answer:
          'Kinetic Dynamic Suspension System (KDSS) uses hydraulic accumulators to reduce body roll off-road. Leaking accumulators cause a persistent lean, clunks over bumps, and uneven tire wear. RKC diagnoses KDSS with ride-height measurements before recommending accumulator or sway-bar service.',
      },
    ],
  },
  {
    id: 'toyota-highlander',
    intro:
      'Highlanders carry Denver families and third-row gear — 3.5L 2GR-FE V6, hybrid, and older 2.4L four-cylinder platforms each bring different shop visits. RKC focuses on timing-cover seep, D-4S carbon, and third-row HVAC complaints that dealers often mislabel as “normal aging.”',
    bullets: [
      {
        label: 'Common issues',
        text: '2GR-FE passenger-side timing-cover oil leak, D-4S port-injector imbalance causing cold stumble, rear HVAC blend-door actuators clicking, and dynamic torque-vectoring AWD groan on 2014+ models.',
      },
      {
        label: 'Colorado angle',
        text: 'Third-row heat demands work harder at 5,280 feet — weak blend doors leave rear passengers cold on C-470 commutes. Hybrid Highlanders need inverter coolant separate from engine coolant before winter.',
      },
      {
        label: 'Service notes',
        text: 'RKC scopes D-4S carbon when cold-start hesitation appears, pressure-tests cooling systems on 2GR-FE timing-cover jobs, and services rear diff fluid on AWD trims before mountain towing season.',
      },
    ],
    faqs: [
      {
        question: 'Is Highlander timing-cover seep worth fixing?',
        answer:
          'A slow 2GR-FE timing-cover seep can contaminate belts, smell hot at stoplights, and drip onto exhaust shields. RKC measures seep rate and oil consumption — active leaks on daily drivers are worth fixing before they reach the alternator and ignition harness below the cover.',
      },
      {
        question: 'Why is my third-row heat weak in winter?',
        answer:
          'Rear blend-door actuators and auxiliary HVAC lines fail independently of front heat. RKC tests actuator command with scan data and verifies coolant flow to the rear heater core — not just thermostat replacement on the engine.',
      },
    ],
  },
  {
    id: 'toyota-camry',
    intro:
      'Camry sedans dominate Englewood commuter lanes — 2.5L Dynamic Force, older 2.4L 2AZ-FE, and hybrid Camry trims each need different maintenance math. RKC tracks oil consumption era engines, CVT vs. automatic fluid schedules, and hybrid inverter coolant separate from engine service.',
    bullets: [
      {
        label: 'Common issues',
        text: '2AZ-FE oil consumption and piston-ring carbon, 8-speed UA80E harsh 2–3 shifts when fluid degrades, hybrid inverter coolant neglect, and rear wheel-bearing hum mistaken for tire noise on 2012–2017 cars.',
      },
      {
        label: 'Colorado angle',
        text: 'Short Federal Blvd commutes never warm 2AZ-FE engines — oil consumption accelerates. 2018+ 8-speed transmissions hunt gears on uphill I-25 merges when WS fluid is overdue.',
      },
      {
        label: 'Service notes',
        text: 'RKC uses oil consumption tests on 2AZ-FE platforms, scopes direct-injection carbon when cold stumble appears, and documents hybrid inverter coolant color before quoting engine-only cooling work.',
      },
    ],
    faqs: [
      {
        question: 'Which Camry engines have oil consumption problems?',
        answer:
          '2007–2011 Camrys with the 2.4L 2AZ-FE are notorious for ring-groove carbon and quart-per-1,000-mile consumption. RKC measures consumption over 1,000 miles and inspects catalytic efficiency before recommending ring service versus engine replacement.',
      },
      {
        question: 'Does my 2018+ Camry need transmission fluid service?',
        answer:
          'Yes — Toyota WS fluid in the 8-speed automatic degrades under Colorado stop-and-go and mountain grades even when labeled “lifetime.” RKC recommends fluid inspection near 60,000 miles and exchange when color is dark or 2–3 shifts feel harsh.',
      },
    ],
  },
  {
    id: 'toyota-corolla',
    intro:
      'Corolla commuters rack up miles on 1.8L and 2.0L Dynamic Force engines — reliable until short-trip oil dilution, CVT shudder, or neglected brake fluid turns a $200 service into a $2,000 repair. RKC treats Corollas as high-mileage daily drivers, not disposable lease returns.',
    bullets: [
      {
        label: 'Common issues',
        text: 'CVT K313 shudder and delayed launch when fluid overheats, 2ZR-FE oil consumption on high-mileage 2009–2013 cars, rear drum brake corrosion on base trims, and TPMS sensor failures after tire rotations.',
      },
      {
        label: 'Colorado angle',
        text: 'CVT fluid runs hotter on sustained I-25 grades — shudder at 35 mph often traces to degraded Toyota CVT-FE fluid, not “normal CVT feel.” Winter road salt accelerates rear drum hardware seizure on older sedans.',
      },
      {
        label: 'Service notes',
        text: 'RKC exchanges CVT fluid with Toyota-spec CVT-FE, load-tests batteries before winter, and inspects rear brakes for rust ridge — common on cars that only see mall parking lots.',
      },
    ],
    faqs: [
      {
        question: 'Should I change Corolla CVT fluid?',
        answer:
          'Toyota calls CVT fluid “lifetime,” but Colorado heat cycles and mountain grades degrade CVT-FE fluid. RKC recommends inspection near 60,000 miles and exchange when launch shudder, whine, or delayed engagement appears — especially on 2014+ CVT Corollas.',
      },
      {
        question: 'Why does my Corolla burn oil between changes?',
        answer:
          'High-mileage 2ZR-FE engines can develop ring-groove carbon similar to the larger 2AZ-FE. RKC measures consumption rate and inspects PCV function before recommending piston-ring service — short Englewood commutes worsen consumption when the engine rarely reaches full operating temperature.',
      },
    ],
  },
];

/** All shop-observation reliability snapshots — not OEM-verified specs. */
export function getAllModelReliabilitySnapshots(): readonly ModelReliabilitySnapshot[] {
  return MODEL_RELIABILITY_SNAPSHOTS;
}

export function getModelReliabilitySnapshot(
  brandSlug: string,
  modelSlug: string,
): ModelReliabilitySnapshot | undefined {
  return MODEL_RELIABILITY_SNAPSHOTS.find((entry) => entry.id === `${brandSlug}-${modelSlug}`);
}
