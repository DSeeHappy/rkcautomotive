import { VEHICLE_MODELS } from '@/lib/vehicleModels';
import {
  getServiceUrlSlug,
  slugifyModel,
  type ModelDeepDiveParam,
} from '@/lib/modelCommonServices';

export type { ModelDeepDiveParam };

export function getAllModelDeepDiveParams(): ModelDeepDiveParam[] {
  const params: ModelDeepDiveParam[] = [];
  for (const vehicle of VEHICLE_MODELS) {
    for (const service of vehicle.commonServices) {
      params.push({
        make: vehicle.brand,
        model: slugifyModel(vehicle.model),
        serviceSlug: getServiceUrlSlug(service.id),
      });
    }
  }
  return params;
}

export function getAllModelDeepDiveRoutes(): string[] {
  return getAllModelDeepDiveParams().map(
    ({ make, model, serviceSlug }) => `/vehicles/${make}/${model}/${serviceSlug}`,
  );
}
