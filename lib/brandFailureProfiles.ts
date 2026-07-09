export type BrandFailureProfile = {
  id: string;
  name: string;
  commonModels: string[];
  failureProfiles: { title: string; description: string }[];
  buyerWarning: string;
  coloradoNotes: string;
};

export const BRAND_FAILURE_PROFILES: BrandFailureProfile[] = [
  {
    id: 'toyota',
    name: 'Toyota',
    commonModels: ['Camry', 'RAV4', 'Tacoma', 'Tundra', 'Highlander', 'Prius', '4Runner'],
    failureProfiles: [
      {
        title: '2.4L (2AZ-FE) & 2.5L (2AR-FE) Ring Pack Failure',
        description:
          'Severe oil consumption caused by oil-return holes in the piston ring grooves pinning shut with carbon, starving the cylinder walls and destroying catalytic converters.',
      },
      {
        title: 'Direct Injection Carbon (D-4S Systems)',
        description:
          'Auxiliary port injectors can suffer balancing issues, leading to hard cold-start hesitations.',
      },
      {
        title: 'Dynamic Torque Vectoring AWD Actuators',
        description:
          'Driveshaft disconnect clutches on modern RAV4/Highlander models bound up, causing loud groaning noises on tight turns.',
      },
    ],
    buyerWarning:
      'Avoid 2007–2011 Toyota models with the 2.4L 2AZ-FE engine due to catastrophic oil consumption. On used 3.5L V6 models (2GR-FE), rigorously inspect the timing cover for the notorious, high-labor passenger-side oil leak.',
    coloradoNotes:
      'Mountain driving demands frequent transmission downshifts; neglected fluid on older sealed Toyota world-standard (WS) transmissions leads to rapid torque converter clutch glazing.',
  },
  {
    id: 'honda',
    name: 'Honda',
    commonModels: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'RidgeLine'],
    failureProfiles: [
      {
        title: '1.5L Turbo (L15B7) Oil Dilution',
        description:
          'Raw fuel passes the low-tension piston rings during cold idles, mixing directly into the engine oil crankcase, thinning out viscosity, and wearing out cam lobes prematurely.',
      },
      {
        title: 'V6 VCM Cylinder Deactivation Failure',
        description:
          'Earth Dreams 3.5L V6 engines shut off cylinders to save fuel, forcing the engine to run unbalanced. This shreds hydraulic motor mounts and causes heavy oil blow-by, fouling spark plugs on cylinders 1 through 4.',
      },
      {
        title: '10-Speed Automatic Planetary Gear Wear',
        description:
          'Erratic hydraulic pressure drops cause harsh 3rd-to-4th shifts under load.',
      },
    ],
    buyerWarning:
      'Avoid 2016–2021 Honda CR-Vs and Civics with the 1.5L Turbo engine if they are only driven on short, stop-and-go winter commutes (severe oil dilution risk). Avoid any Honda V6 without inspecting for oil-fouled spark plugs unless a VCM muzzler bypass has been installed.',
    coloradoNotes:
      'In sub-zero Denver winters, the 1.5L turbo struggles to reach optimal operating temperature on short trips, severely worsening the fuel-in-oil dilution cycle.',
  },
  {
    id: 'ford',
    name: 'Ford',
    commonModels: ['F-150', 'Explorer', 'Escape', 'Focus', 'Mustang', 'Super Duty'],
    failureProfiles: [
      {
        title: '3.5L / 2.7L EcoBoost Cam Phaser Rattle',
        description:
          'Intended oil pressure fails to lock the variable valve timing (VCT) sprockets on cold starts, causing a severe, metallic slapping noise that leads to timing chain stretch.',
      },
      {
        title: '10R80 Transmission Valve Body Distortion',
        description:
          'The CDF clutch drum bushing moves out of place internally on the 10-speed transmission, blocking hydraulic fluid channels and causing structural gear hunting and total loss of power.',
      },
      {
        title: '3.5L Duratec Internal Water Pump Disaster',
        description:
          'The water pump is hidden inside the front timing cover driven by the timing chain. When the internal bearing seals fail, it dumps gallons of glycol coolant directly into the engine oil pan, instantly destroying all main crankshaft bearings.',
      },
    ],
    buyerWarning:
      'Avoid used Ford Explorers or Edges with the 3.5L Cyclone/Duratec V6 unless there is bulletproof proof the internal water pump has been replaced. Avoid early 2017–2019 10-speed F-150s showing erratic shifts without pulling transmission adaptive learning values.',
    coloradoNotes:
      'Pulling heavy trailers up the I-70 mountain corridor massively spikes transmission fluid temperatures on the 10R80 block, making auxiliary external cooling loops critical.',
  },
  {
    id: 'chevrolet',
    name: 'Chevrolet / GMC',
    commonModels: ['Silverado', 'Tahoe', 'Equinox', 'Malibu', 'Suburban', 'Yukon'],
    failureProfiles: [
      {
        title: '5.3L / 6.2L EcoTec3 Lifter Collapse (AFM/DFM)',
        description:
          'The internal locking pins inside the fuel-management lifters jam mechanically. The lifter turns sideways and gouges the camshaft lobe, sending hardened steel shards through the engine oil galleys.',
      },
      {
        title: '8L90 8-Speed Torque Converter Shudder',
        description:
          'Hydroscopic transmission fluid selection causes the torque converter clutch to constantly cycle and slip, creating a violent vibration that feels like driving over rumble strips.',
      },
      {
        title: '1.5L Turbo (LYX) PCV Freeze-Up',
        description:
          'The PCV system accumulates moisture, which freezes solid in extreme cold, building extreme crankcase pressure until it blows out the rear main engine crankshaft seal.',
      },
    ],
    buyerWarning:
      'Avoid 2014–2021 Chevy/GMC trucks with 5.3L or 6.2L V8 engines unless a mechanical lifter delete has been performed or extensive valvetrain service history is provided. Avoid any 8-speed GM truck displaying a shudder above 40 MPH.',
    coloradoNotes:
      'The high-altitude pressure differential combined with freezing mountain gaps causes rapid moisture build-up inside GM eco-boost and small-displacement turbo PCV lines.',
  },
  {
    id: 'bmw',
    name: 'BMW',
    commonModels: ['3 Series', '5 Series', 'X3', 'X5', '7 Series'],
    failureProfiles: [
      {
        title: 'N20 / N26 Timing Chain Guide Shattering',
        description:
          'The plastic composite timing chain guides turn brittle due to heat and break apart, falling into the oil pan oil-pickup tube, starving the engine of oil, and causing total seizure.',
      },
      {
        title: 'Plastic Cooling Assembly Brittle Failures',
        description:
          'Plastic oil filter housings, radiator necks, and the thermostat junction blocks crack under normal heat cycling, causing sudden, total coolant loss.',
      },
      {
        title: 'B58 / N55 Valve Cover PCV Diaphragm',
        description:
          'The integrated PCV valve inside the plastic valve cover tears, drawing raw oil directly into the intake manifold, causing loud whistling noises and clouds of white exhaust smoke.',
      },
    ],
    buyerWarning:
      'Avoid 2012–2015 BMWs equipped with the N20/N26 4-cylinder engine unless the timing chain and oil pump drive assembly have been updated to the redesigned components.',
    coloradoNotes:
      'Mountain grades push turbo temperatures to extreme levels; plastic cooling components that survive flat sea-level states fail rapidly under high-altitude thermal pressure in Colorado.',
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    commonModels: ['C-Class', 'E-Class', 'GLC', 'GLE', 'S-Class', 'Sprinter'],
    failureProfiles: [
      {
        title: 'M274 2.0L Turbo Piston Detonation',
        description:
          'Low-speed pre-ignition (LSPI) causes the wrist pin or ring lands on piston number 1 or 2 to crack under light acceleration, resulting in immediate loss of compression and severe misfires.',
      },
      {
        title: 'AirMATIC Strut Core Air Leakage',
        description:
          'Rubber air bladders develop microscopic dry-rot cracks along the fold lines, causing the air compressor to run continuously until the pump motor burns out completely.',
      },
      {
        title: '7G-Tronic (722.9) Conductor Plate Speed Sensors',
        description:
          'Speed sensors integrated into the internal transmission conductor plate fail electrically, locking the transmission into 2nd gear limp-home mode.',
      },
    ],
    buyerWarning:
      'Avoid 2015–2018 C300 and GLC300 models with the M274 2.0L engine without performing a relative compression test to rule out hairline piston cracking.',
    coloradoNotes:
      'Extreme temperature swings from daytime warmth to sub-zero mountain nights rapidly accelerate the cracking of rubber compounds inside premium AirMATIC suspension systems.',
  },
  {
    id: 'audi',
    name: 'Audi',
    commonModels: ['A4', 'A6', 'Q5', 'Q7', 'S4'],
    failureProfiles: [
      {
        title: '2.0T (EA888) Piston Ring Scraping Fault',
        description:
          'Direct-injection fuel washing combined with sub-par oil scraper ring design causes massive oil consumption (1 quart every 500 miles) and heavy carbon build-up on the intake valves.',
      },
      {
        title: '3.0T V6 Supercharged Timing Chain Rattle',
        description:
          'The upper timing chain tensioners bleed oil pressure down overnight, causing severe chain rattle on morning starts that eventually jumps timing teeth and bends valves.',
      },
      {
        title: 'DL501 DSG Dual-Clutch Mechatronic Circuit Corrosion',
        description:
          'Debris in the transmission fluid wears out the internal solenoid wiring tracks, causing harsh downshifts and loss of odd or even gear sets.',
      },
    ],
    buyerWarning:
      'Avoid 2009–2015 Audi models with the 2.0T engine unless there is documented proof of updated piston and ring installation. Always listen for a 2-second metallic rattle on a cold start when evaluating any Audi 3.0T.',
    coloradoNotes:
      'Heavy carbon build-up on intake valves robs up to 20% of engine power—a loss that is amplified heavily by the thin air at Mile High altitudes.',
  },
  {
    id: 'nissan',
    name: 'Nissan',
    commonModels: ['Altima', 'Sentra', 'Rogue', 'Pathfinder', 'Frontier', 'Titan'],
    failureProfiles: [
      {
        title: 'Jatco CVT Valve Body Wear',
        description:
          'The steel flow-control valve inside the continuously variable transmission cuts into the aluminum valve body casting, causing internal pressure loss, belt slipping, and the infamous "CVT judder."',
      },
      {
        title: 'VQ35DE Timing Chain Whine',
        description:
          'The secondary timing chain shoes wear through completely, causing the metal chain to ride directly on the hydraulic tensioner piston, creating a high-pitched, siren-like whine.',
      },
      {
        title: 'Frontier/Pathfinder Cross-Contamination (SMOD)',
        description:
          'Internal radiator cooler walls crack, mixing automatic transmission fluid with engine coolant, sending a destructive "Strawberry Milkshake of Death" into the transmission clutches.',
      },
    ],
    buyerWarning:
      'Avoid any used Nissan CVT model that does not have verifiable 30,000-mile fluid exchange receipts. On pre-2011 Frontiers and Pathfinders, instantly inspect the transmission dipstick for pink, milky fluid residue.',
    coloradoNotes:
      'Nissan CVTs are highly prone to overheating on steep, sustained mountain climbs; keeping up with fluid degradation metrics is mandatory for Colorado drivers.',
  },
  {
    id: 'subaru',
    name: 'Subaru',
    commonModels: ['Outback', 'Forester', 'Crosstrek', 'Impreza', 'Legacy', 'WRX'],
    failureProfiles: [
      {
        title: 'EJ25 & Early FB25 Head Gasket Breach',
        description:
          'Multi-layer steel gaskets degrade on the external lower cooling jacket corners, allowing oil and coolant to mix externally or pushing exhaust gases into the overflow tank, causing sudden overheating.',
      },
      {
        title: 'TR580 / TR690 CVT Torque Converter Lock-Up',
        description:
          'The internal lock-up solenoid inside the transmission valve body shorts out electrically, causing the engine to stall out completely when coming to a hard stop.',
      },
      {
        title: 'Camshaft Carrier Oil Seepage',
        description:
          'The liquid RTV sealant used on the massive rear cam carriers breaks down, creating persistent oil leaks that drip directly onto the exhaust system, causing burning smells.',
      },
    ],
    buyerWarning:
      'Avoid any used Subaru showing air bubbles inside the coolant expansion tank during hot idles. Ensure any used model stops smoothly without the engine shuddering or trying to stall, which flags a failing CVT valve body.',
    coloradoNotes:
      'Subarus are the unofficial state vehicle of Colorado, but continuous high-load mountain driving accelerates Boxer head gasket degradation. Upgraded multi-layer steel gaskets are essential for these repairs.',
  },
  {
    id: 'jeep',
    name: 'Jeep',
    commonModels: ['Grand Cherokee', 'Wrangler', 'Cherokee', 'Compass', 'Gladiator'],
    failureProfiles: [
      {
        title: '3.6L Pentastar Rocker Arm Needle Bearing Failure',
        description:
          'The tiny internal needle bearings inside the roller rocker arms seize up. The rocker arm drops and digs directly into the intake/exhaust camshaft lobes, causing a loud ticking noise and throwing misfire codes.',
      },
      {
        title: 'Plastic Oil Filter Housing Crack',
        description:
          'The plastic oil cooler assembly mounted deep in the engine "V" under the intake manifold cracks due to over-tightening or heat, pooling raw oil and engine coolant inside the engine block valley.',
      },
      {
        title: 'Wrangler Steering Gear Box Play ("Death Wobble")',
        description:
          'Widespread wear on front track bar bushings and loose internal steering box tolerances cause violent, uncontrollable front-end shaking after hitting highway bumps.',
      },
    ],
    buyerWarning:
      'Avoid any 3.6L Pentastar engine displaying a sharp, metallic tick from the valve covers. Look straight down past the intake manifold with a flashlight to verify there is no pooled engine oil in the block valley.',
    coloradoNotes:
      'Rocky Mountain trail driving puts extreme lateral stress on Jeep front-end components, making heavy-duty tracking bars and stabilizer upgrades a common necessity.',
  },
  {
    id: 'ram',
    name: 'Ram',
    commonModels: ['1500', '2500', '3500', 'Power Wagon'],
    failureProfiles: [
      {
        title: '5.7L / 6.4L HEMI Exhaust Manifold Stud Shear',
        description:
          'Extreme thermal contraction snaps the rear exhaust manifold bolts clean off flush with the cylinder head, creating a loud, flapping exhaust leak on cold starts.',
      },
      {
        title: 'HEMI Roller Lifter Seizure',
        description:
          'Sub-par oiling flow at low idle speeds causes the roller lifter bearings to lock up completely. The frozen wheel acts like a lathe, grinding the camshaft lobe flat and sending metal particles straight to the oil pump.',
      },
      {
        title: '68RFE Overdrive Clutch Burnout',
        description:
          'Software pressure restrictions cause the 4th, 5th, and 6th gear overdrive clutch packs to slip and burn out prematurely under heavy towing loads.',
      },
    ],
    buyerWarning:
      'Avoid used RAM trucks that have logged excessive idling hours on the dashboard engine hour meter (idle oil starvation triggers the HEMI lifter failure). Test shift performance under load to rule out a slipping 68RFE overdrive circuit.',
    coloradoNotes:
      'Towing heavy campers up high-altitude mountain passes causes rapid exhaust manifold expansion, which is the exact structural trigger that shears off factory manifold studs.',
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    commonModels: ['Sonata', 'Elantra', 'Santa Fe', 'Tucson', 'Palisade'],
    failureProfiles: [
      {
        title: 'Theta II (2.4L / 2.0T) Connecting Rod Bearing Seizure',
        description:
          'Factory manufacturing defects leave metallic machining debris inside the crankshaft oil pathways. This debris cuts off oil flow, causing catastrophic rod bearing spinning, heavy rod knock, and complete engine failure.',
      },
      {
        title: 'GDI Intake Valve Shrouding',
        description:
          'Massive, sticky carbon crusting on the intake valve stems restricts airflow, causing structural hesitations, power drop-offs, and persistent cold-start misfires.',
      },
      {
        title: 'Smartstream Excessive Piston Ring Clearance',
        description:
          'Premature wear on tension rings causes oil to bypass into the combustion chamber at high rates without showing blue smoke out the exhaust tailpipe.',
      },
    ],
    buyerWarning:
      'Avoid any 2011–2019 Hyundai with a Theta II engine unless you can verify the engine was replaced under the national corporate safety recall or passes a physical rod-bearing clearance test.',
    coloradoNotes:
      'The loss of horsepower from direct-injection carbon build-up is felt twice as hard at high altitudes, where the engine is already struggling with less atmospheric oxygen.',
  },
  {
    id: 'kia',
    name: 'Kia',
    commonModels: ['Optima', 'Sorento', 'Sportage', 'Soul', 'Telluride', 'Forte'],
    failureProfiles: [
      {
        title: 'Nu 2.0L & Theta Cylinder Bore Scoring',
        description:
          'Lack of oil piston cooling jets causes the piston skirts to expand rapidly and scratch the cylinder walls ("piston slap"), resulting in deep mechanical ticking and excessive oil burning.',
      },
      {
        title: 'Dry 7-Speed DCT Clutch Actuator Failure',
        description:
          'The electronic clutch actuators overheat in crawling traffic, causing the vehicle to refuse to engage gears or completely drop out odd/even gear paths.',
      },
      {
        title: 'Sorento/Telluride AWD Coupling Stripping',
        description:
          'The splines inside the rear differential AWD coupling hub wear smooth, leaving the vehicle purely front-wheel drive without setting any dashboard fault lights.',
      },
    ],
    buyerWarning:
      'Avoid used Kia Soul or Optima models exhibiting a deep "slapping" noise when cold. For AWD models, rack the vehicle and verify the rear driveshaft physically transfers power to the wheels under load.',
    coloradoNotes:
      'A failed AWD coupling hub means your vehicle will suddenly lose all traction on icy mountain passes, converting your AWD SUV into an unpredictable front-wheel-drive platform.',
  },
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    commonModels: ['Jetta', 'Passat', 'Tiguan', 'Atlas', 'Golf', 'GTI'],
    failureProfiles: [
      {
        title: 'TSI Plastic Thermostat & Water Pump Module Distortion',
        description:
          'The entire composite engine water pump module is mounted under the intake manifold. Oil leaks from the valve cover drip onto the pump seals, causing the plastic housing to swell, warp, and crack.',
      },
      {
        title: '02E / DQ250 DSG Mechatronic Solenoid Contamination',
        description:
          'Internal clutch wear fills the transmission oil with microscopic metallic friction material, grounding out the mechatronic solenoids and causing harsh gear slams.',
      },
      {
        title: 'EA888 Wastegate Arm Rattle & Voltage Fault',
        description:
          'The mechanical pivot linkage on the turbocharger wastegate wears loose, causing a loud rattle and preventing the turbo from holding boost pressure.',
      },
    ],
    buyerWarning:
      'Avoid any VW with active pink crusting or sweet smells coming from under the intake manifold (indicating a leaking water pump housing). Avoid models throwing an under-boost code (P0299), which typically requires a complete turbocharger replacement.',
    coloradoNotes:
      "Standard plastic cooling components degrade even faster when exposed to the extreme expansion and contraction cycles driven by Colorado's intense alpine temperature shifts.",
  },
];

export function getBrandFailureProfile(slug: string): BrandFailureProfile | undefined {
  return BRAND_FAILURE_PROFILES.find((profile) => profile.id === slug);
}
