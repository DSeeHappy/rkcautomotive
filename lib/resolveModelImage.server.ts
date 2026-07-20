import fs from 'node:fs';
import path from 'node:path';
import type { VehicleModel } from '@/lib/vehicleModels';
import { getVehicleImage, resolveVehicleImageSrc } from '@/lib/vehicleImages';

function localVehicleImageExists(webPath: string | undefined): boolean {
  if (!webPath || !webPath.startsWith('/')) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', webPath.replace(/^\//, '')));
  } catch {
    return false;
  }
}

/** Server hub resolver — prefer synced WebP; hotlink licensed source when local file missing. */
export function resolveModelImageForHub(model: VehicleModel): string {
  const vehicleImage = getVehicleImage(model.brand, model.brandName, model.model);
  const record = vehicleImage.record;
  const localSrc = resolveVehicleImageSrc(record);
  if (localSrc && localVehicleImageExists(localSrc)) return localSrc;
  if (record?.sourceUrl?.startsWith('http')) return record.sourceUrl;
  return localSrc ?? model.image;
}
