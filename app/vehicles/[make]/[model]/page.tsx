import { notFound } from 'next/navigation';
import JsonLd from '@/app/components/JsonLd';
import ModelHubContent from '@/app/components/ui/vehicles/ModelHubContent';
import { buildModelHubPath, getAllModelHubParams } from '@/lib/modelHubRoutes';
import { getModelReliabilitySnapshot } from '@/lib/modelReliabilityNotes';
import { createPageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createItemListSchema, createWebPageSchema } from '@/lib/seo';
import { getModelsByBrand, resolveModelImage } from '@/lib/vehicleModels';
import { slugifyModel } from '@/lib/modelCommonServices';
import { getBrandBySlug } from '@/lib/vehicleBrands';

type PageProps = {
  params: Promise<{ make: string; model: string }>;
};

export function generateStaticParams() {
  return getAllModelHubParams();
}

/** Unknown make/model URLs → real 404 (not a thin JS error shell). */
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps) {
  const { make, model } = await params;
  const vehicle = getModelsByBrand(make).find(
    (m) => slugifyModel(m.model) === model,
  );
  if (!vehicle) {
    return {
      title: { absolute: 'Vehicle Not Found | RKC Automotive' },
      description: 'The vehicle page you requested was not found.',
      robots: { index: false, follow: true },
    };
  }

  const path = buildModelHubPath(make, vehicle.model);
  const image = resolveModelImage(vehicle);

  return createPageMetadata({
    title: `${vehicle.brandName} ${vehicle.model} Repair in Englewood, CO`,
    description: `RKC Automotive services ${vehicle.brandName} ${vehicle.model} in Englewood, CO — ${vehicle.commonServices.length} model-specific repair guides, factory maintenance, and ASE-certified diagnostics.`,
    path,
    image,
    imageAlt: `${vehicle.brandName} ${vehicle.model} service at RKC Automotive Englewood CO`,
  });
}

export default async function VehicleModelHubPage({ params }: PageProps) {
  const { make, model } = await params;
  const vehicle = getModelsByBrand(make).find(
    (m) => slugifyModel(m.model) === model,
  );
  if (!vehicle) notFound();

  const brand = getBrandBySlug(make);
  const hubPath = buildModelHubPath(make, vehicle.model);
  const image = resolveModelImage(vehicle);
  const siblingModels = getModelsByBrand(make).filter((m) => m.slug !== vehicle.slug);
  const modelSnapshot = getModelReliabilitySnapshot(make, model);
  const heroDescription = modelSnapshot?.intro ?? vehicle.description;

  return (
    <div>
      <JsonLd
        data={[
          createWebPageSchema(
            `${vehicle.brandName} ${vehicle.model} Service`,
            vehicle.description,
            hubPath,
          ),
          createItemListSchema(
            `${vehicle.brandName} ${vehicle.model} services at RKC Automotive`,
            vehicle.commonServices.map((service) => ({
              name: service.title,
              url: service.href,
              description: service.description,
            })),
            hubPath,
          ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Vehicles We Service', path: '/vehicles-we-service' },
            { name: `${vehicle.brandName} ${vehicle.model}`, path: hubPath },
          ]),
        ]}
      />

      <ModelHubContent
        vehicle={vehicle}
        image={image}
        brandName={brand?.name}
        siblingModels={siblingModels}
        modelSnapshot={modelSnapshot ?? null}
        heroDescription={heroDescription}
      />
    </div>
  );
}
