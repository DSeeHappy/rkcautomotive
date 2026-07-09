import { getModelCommonServices, type ModelCommonService } from '@/lib/modelCommonServices';
import { VEHICLE_BRANDS } from '@/lib/vehicleBrands';
import { getVehicleImage, resolveVehicleImageSrc } from '@/lib/vehicleImages';

export type { ModelCommonService };

export type VehicleType = 'truck' | 'suv' | 'sedan' | 'hybrid' | 'ev' | 'performance' | 'van' | 'luxury';

export type MaintenanceInterval = {
  interval: string;
  items: string[];
};

export type Model3dCategory = 'truck' | 'suv' | 'sedan' | 'performance' | 'ev' | 'van' | 'hybrid' | 'luxury';

export type VehicleModel = {
  brand: string;
  brandName: string;
  model: string;
  slug: string;
  image: string;
  vehicleType: VehicleType;
  model3dCategory: Model3dCategory;
  model3dUrl?: string;
  yearRange: string;
  maintenanceSchedule: MaintenanceInterval[];
  commonServices: ModelCommonService[];
  description: string;
};

/** Category GLB files — one per body style, not per model. */
const MODEL_3D_URLS: Record<VehicleType, string> = {
  truck: '/models/vehicles/truck.glb',
  suv: '/models/vehicles/suv.glb',
  sedan: '/models/vehicles/sedan.glb',
  hybrid: '/models/vehicles/sedan.glb',
  ev: '/models/vehicles/sedan.glb',
  performance: '/models/vehicles/performance.glb',
  van: '/models/vehicles/van.glb',
  luxury: '/models/vehicles/luxury.glb',
};

/** Unsplash hero images by vehicle category (allowed in next.config). */
const CATEGORY_IMAGES: Record<VehicleType, string> = {
  truck:
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
  suv: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
  sedan:
    'https://images.unsplash.com/photo-1621007947382-bcb3e7982f1b?auto=format&fit=crop&w=1200&q=80',
  hybrid:
    'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80',
  ev: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80',
  performance:
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
  van: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80',
  luxury:
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
};

/** Model-specific type overrides — defaults to sedan when not listed. */
const MODEL_TYPES: Record<string, Record<string, VehicleType>> = {
  toyota: {
    Camry: 'sedan',
    RAV4: 'suv',
    Tacoma: 'truck',
    '4Runner': 'suv',
    Highlander: 'suv',
    Corolla: 'sedan',
    Prius: 'hybrid',
  },
  honda: {
    Accord: 'sedan',
    Civic: 'sedan',
    'CR-V': 'suv',
    Pilot: 'suv',
    Odyssey: 'van',
    'HR-V': 'suv',
    Ridgeline: 'truck',
  },
  ford: {
    'F-150': 'truck',
    Explorer: 'suv',
    Escape: 'suv',
    Mustang: 'performance',
    Bronco: 'suv',
    Edge: 'suv',
    Ranger: 'truck',
  },
  chevrolet: {
    Silverado: 'truck',
    Equinox: 'suv',
    Traverse: 'suv',
    Colorado: 'truck',
    Malibu: 'sedan',
    Tahoe: 'suv',
    Suburban: 'suv',
  },
  bmw: {
    '3 Series': 'sedan',
    '5 Series': 'sedan',
    X3: 'suv',
    X5: 'suv',
    X1: 'suv',
    M3: 'performance',
    i4: 'ev',
  },
  mercedes: {
    'C-Class': 'luxury',
    'E-Class': 'luxury',
    GLC: 'suv',
    GLE: 'suv',
    GLA: 'suv',
    'S-Class': 'luxury',
    Sprinter: 'van',
  },
  audi: {
    A4: 'sedan',
    A6: 'sedan',
    Q5: 'suv',
    Q7: 'suv',
    Q3: 'suv',
    'e-tron': 'ev',
    S4: 'performance',
  },
  nissan: {
    Altima: 'sedan',
    Rogue: 'suv',
    Sentra: 'sedan',
    Pathfinder: 'suv',
    Frontier: 'truck',
    Murano: 'suv',
    Kicks: 'suv',
  },
  subaru: {
    Outback: 'suv',
    Forester: 'suv',
    Crosstrek: 'suv',
    Impreza: 'sedan',
    Ascent: 'suv',
    WRX: 'performance',
    Legacy: 'sedan',
  },
  jeep: {
    Wrangler: 'suv',
    'Grand Cherokee': 'suv',
    Cherokee: 'suv',
    Compass: 'suv',
    Gladiator: 'truck',
    Renegade: 'suv',
    Wagoneer: 'suv',
  },
  ram: {
    '1500': 'truck',
    '2500': 'truck',
    '3500': 'truck',
    ProMaster: 'van',
    'ProMaster City': 'van',
    TRX: 'performance',
    Rebel: 'truck',
  },
  hyundai: {
    Elantra: 'sedan',
    Sonata: 'sedan',
    Tucson: 'suv',
    'Santa Fe': 'suv',
    Palisade: 'suv',
    Kona: 'suv',
    'Ioniq 5': 'ev',
  },
  kia: {
    Forte: 'sedan',
    K5: 'sedan',
    Sportage: 'suv',
    Sorento: 'suv',
    Telluride: 'suv',
    Soul: 'suv',
    EV6: 'ev',
  },
  volkswagen: {
    Jetta: 'sedan',
    Passat: 'sedan',
    Tiguan: 'suv',
    Atlas: 'suv',
    Golf: 'sedan',
    'ID.4': 'ev',
    Taos: 'suv',
  },
};

const BASE_INTERVALS: MaintenanceInterval[] = [
  {
    interval: 'Every 5,000 miles / 6 months',
    items: [
      'Engine oil & filter change',
      'Tire rotation & pressure check',
      'Multi-point fluid level inspection',
      'Brake pad & rotor visual inspection',
      'Battery test & terminal cleaning',
      'Wiper blade & exterior light check',
    ],
  },
  {
    interval: 'Every 15,000 miles',
    items: [
      'Engine air filter replacement',
      'Cabin air filter replacement',
      'Brake system inspection',
      'Steering & suspension check',
      'Exhaust system inspection',
      'Drive belt inspection',
    ],
  },
  {
    interval: 'Every 30,000 miles',
    items: [
      'Coolant flush & refill',
      'Brake fluid flush',
      'Fuel system cleaning',
      'Transmission fluid inspection',
      'Wheel alignment check',
      'Spark plug inspection (if applicable)',
    ],
  },
  {
    interval: 'Every 60,000 miles',
    items: [
      'Transmission fluid service',
      'Spark plug replacement',
      'Drive belt replacement',
      'Suspension bushing & joint inspection',
      'Fuel filter replacement (if equipped)',
      'Cooling system pressure test',
    ],
  },
  {
    interval: 'Every 100,000 miles',
    items: [
      'Timing belt or chain inspection',
      'Water pump inspection',
      'Full cooling system service',
      'Differential fluid service',
      'PCV valve & intake service',
      'Comprehensive drivetrain inspection',
    ],
  },
];

const TYPE_INTERVAL_EXTRAS: Record<VehicleType, Partial<Record<string, string[]>>> = {
  truck: {
    'Every 5,000 miles / 6 months': ['4WD hub & locking mechanism check'],
    'Every 15,000 miles': ['Trailer hitch & wiring inspection'],
    'Every 30,000 miles': ['Transfer case fluid service (4WD)', 'Front & rear differential fluid'],
    'Every 60,000 miles': ['Turbocharger inspection (if EcoBoost/Hemi)', 'Leaf spring & U-joint check'],
    'Every 100,000 miles': ['Transfer case rebuild inspection', 'Heavy-duty brake system overhaul'],
  },
  suv: {
    'Every 5,000 miles / 6 months': ['AWD/4WD system visual check'],
    'Every 30,000 miles': ['Transfer case or Haldex fluid service', 'Rear differential fluid'],
    'Every 60,000 miles': ['CV axle boot inspection', 'Alignment & tire wear analysis'],
  },
  sedan: {
    'Every 30,000 miles': ['CVT or automatic transmission fluid check'],
    'Every 60,000 miles': ['Valve cover gasket inspection', 'Fuel injector service'],
  },
  hybrid: {
    'Every 5,000 miles / 6 months': ['Hybrid battery cooling system check', 'Regenerative brake inspection'],
    'Every 30,000 miles': ['Inverter coolant service', 'Hybrid system diagnostic scan'],
    'Every 60,000 miles': ['High-voltage cable inspection', 'Brake fluid flush (regen system)'],
  },
  ev: {
    'Every 5,000 miles / 6 months': ['Battery health scan', 'Charging port & cable inspection'],
    'Every 15,000 miles': ['Battery coolant level check', 'Brake fluid moisture test'],
    'Every 30,000 miles': ['Battery thermal management service', '12V auxiliary battery replacement check'],
    'Every 60,000 miles': ['High-voltage system inspection', 'Reduction gear fluid service'],
  },
  performance: {
    'Every 5,000 miles / 6 months': ['Performance brake pad measurement', 'Turbo/supercharger visual check'],
    'Every 15,000 miles': ['Sport suspension bushing inspection', 'High-performance fluid analysis'],
    'Every 30,000 miles': ['Track-ready brake fluid flush', 'Differential fluid (limited-slip)'],
    'Every 60,000 miles': ['Spark plug replacement (turbo engines)', 'Intercooler & intake cleaning'],
  },
  van: {
    'Every 5,000 miles / 6 months': ['Sliding door & latch lubrication', 'Cargo area tie-down inspection'],
    'Every 30,000 miles': ['Rear HVAC filter service', 'Heavy-load suspension check'],
    'Every 60,000 miles': ['Transmission cooler line inspection', 'Fleet brake system service'],
  },
  luxury: {
    'Every 5,000 miles / 6 months': ['Air suspension height check', 'Adaptive damping system scan'],
    'Every 15,000 miles': ['Cabin filter & climate control service', 'Electrical module diagnostic'],
    'Every 30,000 miles': ['Air strut & compressor inspection', 'Brake fluid flush (DOT 4)'],
    'Every 60,000 miles': ['Airmatic component inspection', 'Cooling system expansion tank service'],
  },
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getModelType(brandSlug: string, model: string): VehicleType {
  return MODEL_TYPES[brandSlug]?.[model] ?? 'sedan';
}

function getOilInterval(type: VehicleType): string {
  if (type === 'ev') return 'Every 10,000 miles / 12 months';
  if (type === 'hybrid' || type === 'luxury' || type === 'performance') return 'Every 7,500 miles / 6 months';
  if (type === 'truck') return 'Every 5,000–7,500 miles / 6 months';
  return 'Every 5,000 miles / 6 months';
}

function buildMaintenanceSchedule(type: VehicleType, brandName: string, model: string): MaintenanceInterval[] {
  const extras = TYPE_INTERVAL_EXTRAS[type];
  const schedule = BASE_INTERVALS.map((entry) => {
    const extraItems = extras[entry.interval] ?? [];
    const items = [...entry.items, ...extraItems];
    if (entry.interval.startsWith('Every 5,000') && type !== 'ev') {
      items[0] = `Engine oil & filter change (${getOilInterval(type).split(' / ')[0]})`;
    }
    if (type === 'ev' && entry.interval === 'Every 5,000 miles / 6 months') {
      return {
        interval: 'Every 10,000 miles / 12 months',
        items: [
          'Tire rotation & pressure check',
          'Multi-point vehicle inspection',
          'Brake pad & rotor inspection',
          'Battery health scan',
          'Cabin air filter check',
          'Software & module update check',
        ],
      };
    }
    return { interval: entry.interval, items };
  });

  if (type === 'truck' && (model.includes('2500') || model.includes('3500') || model.includes('Diesel'))) {
    const idx = schedule.findIndex((s) => s.interval.includes('60,000'));
    if (idx >= 0) {
      schedule[idx] = {
        ...schedule[idx],
        items: [...schedule[idx].items, 'DEF system service', 'Diesel fuel filter replacement'],
      };
    }
  }

  if (brandName === 'Subaru' && (model === 'Outback' || model === 'Forester' || model === 'WRX')) {
    const idx = schedule.findIndex((s) => s.interval.includes('100,000'));
    if (idx >= 0) {
      schedule[idx] = {
        ...schedule[idx],
        items: [...schedule[idx].items, 'Head gasket & cooling system inspection'],
      };
    }
  }

  return schedule;
}

function buildDescription(type: VehicleType, brandName: string, model: string): string {
  const typeLabel: Record<VehicleType, string> = {
    truck: 'truck',
    suv: 'SUV',
    sedan: 'sedan',
    hybrid: 'hybrid',
    ev: 'electric vehicle',
    performance: 'performance vehicle',
    van: 'van',
    luxury: 'luxury vehicle',
  };
  return `RKC Automotive in Englewood services ${brandName} ${model} ${typeLabel[type]}s with factory-schedule maintenance, honest diagnostics, and Colorado-ready inspections. From routine oil changes to major interval service, our ASE-certified team keeps your ${model} reliable on I-25 and mountain roads.`;
}

function getModelImage(type: VehicleType): string {
  return CATEGORY_IMAGES[type];
}

function buildVehicleModel(
  brandSlug: string,
  brandName: string,
  model: string,
): VehicleModel {
  const vehicleType = getModelType(brandSlug, model);
  const modelSlug = slugify(model);
  const slug = `${brandSlug}-${modelSlug}`;
  const vehicleImage = getVehicleImage(brandSlug, brandName, model);

  return {
    brand: brandSlug,
    brandName,
    model,
    slug,
    image: resolveVehicleImageSrc(vehicleImage.record) ?? getModelImage(vehicleType),
    vehicleType,
    model3dCategory: vehicleType,
    model3dUrl: MODEL_3D_URLS[vehicleType],
    yearRange: '2015–2026',
    maintenanceSchedule: buildMaintenanceSchedule(vehicleType, brandName, model),
    commonServices: getModelCommonServices(brandSlug, brandName, model, vehicleType),
    description: buildDescription(vehicleType, brandName, model),
  };
}

export const VEHICLE_MODELS: VehicleModel[] = VEHICLE_BRANDS.flatMap((brand) =>
  brand.commonModels.map((model) => buildVehicleModel(brand.slug, brand.name, model)),
);

export function getModelBySlug(slug: string): VehicleModel | undefined {
  return VEHICLE_MODELS.find((m) => m.slug === slug);
}

export function getModelsByBrand(brandSlug: string): VehicleModel[] {
  return VEHICLE_MODELS.filter((m) => m.brand === brandSlug);
}

export function getModel(brandSlug: string, modelName: string): VehicleModel | undefined {
  return VEHICLE_MODELS.find((m) => m.brand === brandSlug && m.model === modelName);
}

export function getCategoryImage(type: VehicleType): string {
  return CATEGORY_IMAGES[type];
}

export function resolveModelImage(model: VehicleModel): string {
  const record = getVehicleImage(model.brand, model.brandName, model.model).record;
  return resolveVehicleImageSrc(record) ?? model.image;
}

export function resolveModel3dUrl(model: VehicleModel): string {
  return model.model3dUrl ?? MODEL_3D_URLS[model.vehicleType];
}
