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
  // --- Spark-structured from brandFailureProfiles (2026-07-20); drift stripped ---
  {
    id: 'honda-civic',
    intro:
      'The Honda Civic L15B7 engine is subject to oil dilution where fuel mixes into the oil during cold idling, thinning viscosity and potentially wearing cam lobes. The 10-speed transmission may exhibit harsh shifts in 3rd and 4th gears under load.',
    bullets: [
      {
        label: 'Common issues',
        text: 'Oil dilution occurs on cold idles, thinning viscosity and wearing cam lobes. The 10-speed transmission can have harsh 3rd-4th gear shifts under load.',
      },
      {
        label: 'Colorado angle',
        text: 'Denver winters worsen dilution on short trips when the 1.5L turbo struggles to reach operating temperature.',
      },
      {
        label: 'Service notes',
        text: 'Avoid 2016–2021 Civic 1.5T models if they are only driven on short, stop-and-go winter commutes (severe oil dilution risk).',
      },
    ],
    faqs: [
      {
        question: 'Why is the 2016–2021 Civic 1.5T discouraged in Denver?',
        answer:
          'Denver winters worsen oil dilution caused by fuel mixing into the oil during cold idles, which thins viscosity and wears cam lobes.',
      },
    ],
  },
  {
    id: 'honda-accord',
    intro:
      'The Honda Accord has shop-observed V6 VCM-related mount damage and oil fouling, plus 10-speed transmission harshness under load.',
    bullets: [
      {
        label: 'Common issues',
        text: 'V6 VCM engines may suffer from cylinder deactivation that shreds mounts and causes oil blow-by to foul plugs on cylinders 1–4. The 10-speed transmission can exhibit harsh shifting in 3rd–4th gears under load.',
      },
      {
        label: 'Colorado angle',
        text: 'Unable to verify with available data.',
      },
      {
        label: 'Service notes',
        text: 'Avoid V6 models without an oil-fouled plug check unless a VCM muzzler is installed.',
      },
    ],
    faqs: [
      {
        question: 'What is the primary risk of the V6 VCM system?',
        answer:
          'Cylinder deactivation can shred mounts and cause oil blow-by to foul plugs on cylinders 1–4.',
      },
      {
        question: 'How does the 10-speed transmission behave under load?',
        answer: 'It can be harsh during 3rd–4th gear shifts under load.',
      },
    ],
  },
  {
    id: 'honda-cr-v',
    intro:
      'The Honda CR-V with the L15B7 engine is subject to oil dilution where fuel mixes into the oil during cold idling, thinning viscosity and potentially wearing cam lobes.',
    bullets: [
      {
        label: 'Common issues',
        text: 'Fuel mixes into oil on cold idles, thins viscosity, and wears cam lobes.',
      },
      {
        label: 'Colorado angle',
        text: 'Denver winters worsen dilution.',
      },
      {
        label: 'Service notes',
        text: 'Avoid 2016–2021 CR-V 1.5T on short winter trips.',
      },
    ],
    faqs: [
      {
        question: 'What is the primary mechanical risk of oil dilution in this engine?',
        answer: 'It thins viscosity and wears cam lobes.',
      },
      {
        question: 'Which model years and engine should be avoided for short winter trips?',
        answer: '2016–2021 CR-V 1.5T.',
      },
    ],
  },
  {
    id: 'honda-pilot',
    intro:
      'The Honda Pilot V6 is associated with VCM cylinder deactivation that shreds mounts and oil blow-by that fouls plugs on cylinders 1–4. The 10-speed transmission may exhibit harsh shifting in 3rd–4th gears under load.',
    bullets: [
      {
        label: 'Common issues',
        text: 'V6 VCM cylinder deactivation shreds mounts; oil blow-by fouls plugs on cylinders 1–4; 10-speed transmission causes harsh 3rd–4th shifting under load.',
      },
      {
        label: 'Colorado angle',
        text: 'Unable to verify with available data.',
      },
      {
        label: 'Service notes',
        text: 'Avoid V6 without an oil-fouled plug check unless a VCM muzzler is installed.',
      },
    ],
    faqs: [
      {
        question: 'What are the primary mechanical risks for the Pilot V6?',
        answer:
          'VCM cylinder deactivation can shred mounts, and oil blow-by often fouls plugs on cylinders 1–4.',
      },
      {
        question: 'How should the 10-speed transmission be monitored?',
        answer: 'Watch for harsh shifting in 3rd and 4th gears when under load.',
      },
    ],
  },
  {
    id: 'ford-f-150',
    intro:
      'Ford F-150 models with EcoBoost engines and the 10R80 transmission show cold-start cam phaser rattle, CDF bushing-related gear hunting, and elevated transmission temperatures when towing on I-70.',
    bullets: [
      {
        label: 'Common issues',
        text: 'EcoBoost cam phaser rattle on cold starts is linked to timing chain stretch. The 10R80 transmission may experience gear hunting and power loss due to CDF bushing wear. Early 2017–2019 10-speed F-150s are noted for erratic shifts.',
      },
      {
        label: 'Colorado angle',
        text: 'Pulling heavy trailers up the I-70 mountain corridor spikes 10R80 transmission fluid temperatures.',
      },
      {
        label: 'Service notes',
        text: 'Avoid early 2017–2019 10-speed F-150s showing erratic shifts without pulling transmission adaptive learning values.',
      },
    ],
    faqs: [
      {
        question: 'What causes the rattle on cold starts in EcoBoost F-150s?',
        answer:
          'The rattle is associated with cam phaser issues and can indicate timing chain stretch.',
      },
      {
        question: 'Which F-150 years are flagged for 10-speed shift issues?',
        answer: 'Early 2017–2019 10-speed F-150s are noted for erratic shifts.',
      },
    ],
  },
  {
    id: 'ford-explorer',
    intro:
      'The Ford Explorer is associated with 3.5L Duratec internal water-pump failure that dumps coolant into oil, and 10R80 CDF bushing gear hunting.',
    bullets: [
      {
        label: 'Common issues',
        text: 'The 3.5L Duratec internal water pump can dump coolant into the oil, which destroys bearings. The 10R80 transmission is prone to gear hunting caused by CDF bushing failure.',
      },
      {
        label: 'Colorado angle',
        text: 'I-70 towing spikes 10R80 transmission fluid temperatures.',
      },
      {
        label: 'Service notes',
        text: 'Avoid Explorers with the 3.5L Cyclone/Duratec V6 unless there is proof the internal water pump has been replaced.',
      },
    ],
    faqs: [
      {
        question: 'What causes bearing destruction in the 3.5L Duratec engine?',
        answer: 'The internal water pump can dump coolant into the oil, leading to bearing failure.',
      },
      {
        question: 'What causes gear hunting in the 10R80 transmission?',
        answer: 'Gear hunting is caused by CDF bushing failure.',
      },
    ],
  },
  {
    id: 'ford-escape',
    intro:
      'Ford Escape EcoBoost platforms show cam phaser rattle on cold starts linked to timing chain stretch. Brand notes also flag I-70 corridor transmission fluid temperature spikes.',
    bullets: [
      {
        label: 'Common issues',
        text: 'EcoBoost cam phaser rattle on cold starts is linked to timing chain stretch.',
      },
      {
        label: 'Colorado angle',
        text: 'I-70 corridor spikes transmission fluid temperatures.',
      },
      {
        label: 'Service notes',
        text: 'Unable to verify with available data.',
      },
    ],
    faqs: [
      {
        question: 'What causes the cam phaser rattle on Escape EcoBoost models?',
        answer:
          'The rattle on cold starts in EcoBoost models is associated with timing chain stretch.',
      },
    ],
  },
  {
    id: 'ford-mustang',
    intro:
      'EcoBoost Mustangs show cam phaser rattle on cold starts that can indicate timing chain stretch.',
    bullets: [
      {
        label: 'Common issues',
        text: 'EcoBoost cam phaser rattle on cold starts can indicate timing chain stretch.',
      },
      {
        label: 'Colorado angle',
        text: 'Unable to verify with available data.',
      },
      {
        label: 'Service notes',
        text: 'Unable to verify with available data.',
      },
    ],
    faqs: [
      {
        question: 'What causes the rattle in EcoBoost Mustangs on cold starts?',
        answer:
          'The rattle is associated with cam phaser issues which can lead to timing chain stretch.',
      },
    ],
  },
  {
    id: 'chevrolet-silverado',
    intro:
      'The Chevrolet Silverado is associated with AFM/DFM lifter collapse that gouges the camshaft and introduces steel shards into the oil, plus 8L90 torque converter shudder resembling rumble strips.',
    bullets: [
      {
        label: 'Common issues',
        text: '5.3/6.2 AFM/DFM lifter collapse gouges cam, steel shards in oil. 8L90 torque converter shudder like rumble strips.',
      },
      {
        label: 'Colorado angle',
        text: 'Unable to verify with available data.',
      },
      {
        label: 'Service notes',
        text: 'Avoid 2014–2021 V8 trucks without lifter delete or extensive valvetrain service history. Avoid any 8-speed GM truck displaying a shudder above 40 mph.',
      },
    ],
    faqs: [
      {
        question: 'What is the risk associated with 2014–2021 V8 Silverados?',
        answer:
          'These models are at risk for AFM/DFM lifter collapse which can gouge the cam and cause steel shards to enter the oil system, particularly without a lifter delete or service history.',
      },
      {
        question: 'What transmission issue should be monitored?',
        answer:
          'The 8L90 torque converter may exhibit shudder that feels like rumble strips, specifically above 40 mph.',
      },
    ],
  },
  {
    id: 'chevrolet-tahoe',
    intro:
      'The Chevrolet Tahoe shares 5.3L/6.2L AFM/DFM lifter collapse and 8L90 shudder risks with other GM truck platforms.',
    bullets: [
      {
        label: 'Common issues',
        text: '5.3L and 6.2L V8 engines with AFM/DFM are prone to lifter collapse which can gouge the camshaft and cause steel shards to enter the oil system. The 8L90 transmission may exhibit shudder, particularly above 40 mph.',
      },
      {
        label: 'Colorado angle',
        text: 'High altitude and freeze conditions contribute to moisture buildup in GM turbo PCV lines (brand shop note).',
      },
      {
        label: 'Service notes',
        text: 'Avoid 2014–2021 V8 models without a lifter delete or documented valvetrain history. Avoid vehicles exhibiting 8-speed shudder above 40 mph.',
      },
    ],
    faqs: [
      {
        question: 'What are the primary risks on Tahoe 5.3L and 6.2L V8 engines?',
        answer:
          'AFM/DFM lifter collapse can gouge the camshaft and send steel shards into the oil.',
      },
      {
        question: 'Which model years and configurations should be avoided?',
        answer:
          'Avoid 2014–2021 V8 models unless they have documented lifter-delete history. Also avoid vehicles with 8-speed shudder above 40 mph.',
      },
    ],
  },
  {
    id: 'chevrolet-equinox',
    intro:
      'The 1.5L Turbo LYX Equinox is associated with PCV freeze-up where moisture freezes, crankcase pressure builds, and the rear main seal blows.',
    bullets: [
      {
        label: 'Common issues',
        text: 'Moisture in the PCV system can freeze, causing a blockage that leads to excessive crankcase pressure and rear main seal failure.',
      },
      {
        label: 'Colorado angle',
        text: 'High altitude and freezing temperatures accelerate moisture buildup in turbo PCV lines.',
      },
      {
        label: 'Service notes',
        text: 'Unable to verify with available data.',
      },
    ],
    faqs: [
      {
        question: 'What causes rear main seal failure on the 1.5L Turbo LYX Equinox?',
        answer:
          'Moisture freezing in the PCV system blocks ventilation and causes crankcase pressure to blow out the rear main seal.',
      },
      {
        question: 'Why is this issue more relevant in Colorado?',
        answer:
          'Altitude and freezing temperatures contribute to increased moisture buildup in the turbo PCV lines.',
      },
    ],
  },
  {
    id: 'chevrolet-malibu',
    intro:
      'The 1.5L Turbo (LYX) Malibu is susceptible to PCV freeze-up that can lead to rear main seal failure.',
    bullets: [
      {
        label: 'Common issues',
        text: 'Moisture in the PCV system can freeze, causing crankcase pressure to build up and blow the rear main seal.',
      },
      {
        label: 'Colorado angle',
        text: 'High altitude and freezing temperatures contribute to moisture accumulation in the turbo PCV lines.',
      },
      {
        label: 'Service notes',
        text: 'Unable to verify with available data.',
      },
    ],
    faqs: [
      {
        question: 'What causes the rear main seal to fail on the 1.5L Turbo Malibu?',
        answer:
          'Moisture in the PCV system freezes, leading to increased crankcase pressure that blows the rear main seal.',
      },
      {
        question: 'Why is this issue more common in Colorado?',
        answer:
          'The combination of high altitude and freezing temperatures promotes moisture buildup in the turbo PCV lines.',
      },
    ],
  },
  {
    id: 'jeep-wrangler',
    intro:
      'Jeep Wranglers show 3.6L Pentastar rocker needle-bearing seizure (tick/misfire) and death wobble from track-bar bushings or steering-box play.',
    bullets: [
      {
        label: 'Common issues',
        text: 'The 3.6 Pentastar engine is prone to rocker needle bearing seizure, which causes a tick or misfire. Death wobble is often caused by worn track bar bushings or steering box play.',
      },
      {
        label: 'Colorado angle',
        text: 'Rocky Mountain trail driving puts extreme lateral stress on Jeep front-end components; heavy-duty track bars are a common necessity.',
      },
      {
        label: 'Service notes',
        text: 'Avoid Pentastar engines exhibiting a sharp metallic tick from the valve covers.',
      },
    ],
    faqs: [
      {
        question: "What causes 'death wobble' in a Jeep Wrangler?",
        answer:
          'Death wobble is typically caused by worn track bar bushings or play in the steering box.',
      },
      {
        question: 'What should I avoid when buying a Jeep with a 3.6 Pentastar?',
        answer:
          'Avoid Pentastar engines that exhibit a sharp metallic tick, which indicates potential rocker needle bearing seizure.',
      },
    ],
  },
  {
    id: 'jeep-grand-cherokee',
    intro:
      'The Jeep Grand Cherokee is associated with 3.6 Pentastar rocker needle-bearing seizures and plastic oil filter housing cracks that pool oil and coolant in the valley.',
    bullets: [
      {
        label: 'Common issues',
        text: '3.6 Pentastar rocker needle bearings may seize, causing a tick or misfire. The plastic oil filter housing can crack, leading to oil and coolant pooling in the valley.',
      },
      {
        label: 'Colorado angle',
        text: 'Unable to verify with available data.',
      },
      {
        label: 'Service notes',
        text: 'Avoid Pentastar engines exhibiting a metallic tick; use a flashlight to check the valley for pooled oil.',
      },
    ],
    faqs: [
      {
        question: 'What are the signs of these 3.6 Pentastar failures?',
        answer:
          'Signs include rocker needle bearing seizures resulting in a tick or misfire, and cracks in the plastic oil filter housing that cause oil and coolant to pool in the valley.',
      },
      {
        question: 'How can I inspect for oil pooling in the valley?',
        answer:
          'Use a flashlight to check the valley for pooled oil, which may indicate a cracked plastic oil filter housing.',
      },
    ],
  },
  {
    id: 'jeep-gladiator',
    intro:
      'Jeep Gladiators share 3.6 Pentastar rocker needle-bearing seizure and death wobble (track-bar bushings / steering-box play) with other Jeep platforms.',
    bullets: [
      {
        label: 'Common issues',
        text: 'The 3.6 Pentastar engine may suffer from rocker needle bearing seizures, leading to ticking noises and misfires. Death wobble is often caused by worn track bar bushings or play in the steering box.',
      },
      {
        label: 'Colorado angle',
        text: 'Trail driving places significant stress on front-end components; heavy-duty track bars are a common upgrade.',
      },
      {
        label: 'Service notes',
        text: 'Unable to verify with available data.',
      },
    ],
    faqs: [
      {
        question: 'What causes the 3.6 Pentastar to tick or misfire?',
        answer:
          'Seized rocker needle bearings in the 3.6 Pentastar can cause ticking noises and engine misfires.',
      },
      {
        question: 'How is death wobble typically addressed on the Gladiator?',
        answer:
          'Death wobble is addressed by worn track bar bushings or steering box play; heavy-duty track bars are a common upgrade.',
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
