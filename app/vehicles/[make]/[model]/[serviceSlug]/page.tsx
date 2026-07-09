import { notFound } from 'next/navigation';
import JsonLd from '@/app/components/JsonLd';
import ModelServiceDeepDiveContent from '@/app/components/ui/vehicles/ModelServiceDeepDiveContent';
import { getModelDeepDiveContent } from '@/lib/modelDeepDiveContent';
import { getAllModelDeepDiveParams } from '@/lib/modelDeepDiveRoutes';
import { createPageMetadata } from '@/lib/og';
import { createBreadcrumbSchema, createFAQPageSchema, createServiceSchema } from '@/lib/seo';
import { getModelsByBrand, resolveModelImage } from '@/lib/vehicleModels';
import { getVehicleImage, resolveVehicleImageAlt } from '@/lib/vehicleImages';

type PageProps = {
  params: Promise<{ make: string; model: string; serviceSlug: string }>;
};

export async function generateStaticParams() {
  return getAllModelDeepDiveParams();
}

export async function generateMetadata({ params }: PageProps) {
  const { make, model, serviceSlug } = await params;
  const content = getModelDeepDiveContent(make, model, serviceSlug);
  if (!content) return {};

  const vehicle = getModelsByBrand(make).find(
    (m) => m.model.toLowerCase().replace(/[^a-z0-9]+/g, '-') === model,
  );
  const imageRecord = vehicle
    ? getVehicleImage(vehicle.brand, vehicle.brandName, vehicle.model).record
    : undefined;
  const image = vehicle ? resolveModelImage(vehicle) : undefined;
  const imageAlt = imageRecord
    ? resolveVehicleImageAlt(imageRecord, vehicle!.brandName, vehicle!.model)
    : `${content.heroTitle} at RKC Automotive`;

  return createPageMetadata({
    title: `${content.heroTitle} | RKC Automotive`,
    description: content.metaDescription,
    path: content.path,
    titleAbsolute: true,
    image,
    imageAlt,
    keywords: content.metaKeywords,
  });
}

export default async function ModelServiceDeepDivePage({ params }: PageProps) {
  const { make, model, serviceSlug } = await params;
  const content = getModelDeepDiveContent(make, model, serviceSlug);
  if (!content) notFound();

  const vehicle = getModelsByBrand(make).find(
    (m) => m.model.toLowerCase().replace(/[^a-z0-9]+/g, '-') === model,
  );
  if (!vehicle) notFound();

  const image = resolveModelImage(vehicle);
  const imageRecord = getVehicleImage(vehicle.brand, vehicle.brandName, vehicle.model).record;
  const imageAlt = resolveVehicleImageAlt(imageRecord, vehicle.brandName, vehicle.model);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Vehicles We Service', href: '/vehicles-we-service' },
    { label: `${vehicle.brandName} ${vehicle.model}`, href: '/vehicles-we-service' },
    { label: content.serviceName },
  ];

  const serviceDescription = content.realityParagraphs[0] ?? content.metaDescription;

  return (
    <>
      <JsonLd
        data={[
          createServiceSchema(
            `${vehicle.brandName} ${vehicle.model} ${content.serviceName}`,
            serviceDescription,
            content.path,
          ),
          createFAQPageSchema(content.faqItems),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Vehicles We Service', path: '/vehicles-we-service' },
            { name: `${vehicle.brandName} ${vehicle.model}`, path: '/vehicles-we-service' },
            { name: content.serviceName, path: content.path },
          ]),
        ]}
      />
      <ModelServiceDeepDiveContent
        content={content}
        image={image}
        imageAlt={imageAlt}
        breadcrumbs={breadcrumbs}
      />
    </>
  );
}
