import { slugifyModel } from '@/lib/modelCommonServices';
import { VEHICLE_MODELS } from '@/lib/vehicleModels';

export type ModelHubParam = {
  make: string;
  model: string;
};

export function buildModelHubPath(brandSlug: string, modelName: string): string {
  return `/vehicles/${brandSlug}/${slugifyModel(modelName)}`;
}

export function getAllModelHubParams(): ModelHubParam[] {
  return VEHICLE_MODELS.map((vehicle) => ({
    make: vehicle.brand,
    model: slugifyModel(vehicle.model),
  }));
}

export function getAllModelHubRoutes(): string[] {
  return getAllModelHubParams().map(({ make, model }) => `/vehicles/${make}/${model}`);
}
