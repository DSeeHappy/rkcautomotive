import { notFound } from 'next/navigation';
import {
  getAllServiceAreaSlugs,
  getServiceAreaBySlug,
} from '@/lib/serviceAreas';
import JsonLd from '@/app/components/JsonLd';
import AreaSlugContent from '@/app/components/ui/areas/AreaSlugContent';
import { PHOTOS } from '@/lib/constants';
import { createBreadcrumbSchema, createFAQPageSchema, createLocalBusinessSchema } from '@/lib/seo';
import { createPageMetadata } from '@/lib/og';
import { getAreaFaqs } from '@/lib/areaFaqs';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({ slug }));
}

/** Unknown city slugs → real 404 with SSR not-found HTML (Google meaningful status codes). */
export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) {
    return {
      title: { absolute: 'Area Not Found | RKC Automotive' },
      description: 'The service area page you requested was not found.',
      robots: { index: false, follow: true },
    };
  }

  return createPageMetadata({
    title: `Auto Repair in ${area.name}, CO`,
    description: area.metaDescription,
    path: area.href,
    image: PHOTOS.exterior,
    imageAlt: `Auto repair serving ${area.name}, CO from RKC Automotive in Englewood`,
  });
}

export default async function CityServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) notFound();

  return (
    <div>
      <JsonLd
        data={[
          createLocalBusinessSchema({
            description: area.metaDescription,
            areaServed: { name: area.name, type: 'City' },
          }),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Areas We Serve', path: '/areas-we-serve' },
            { name: `${area.name}, CO`, path: area.href },
          ]),
          // Mirrors the visible city FAQ accordion (English SSR copy from verified data).
          createFAQPageSchema(getAreaFaqs(slug, area, 'en'), area.href),
        ]}
      />

      <AreaSlugContent area={area} slug={slug} />
    </div>
  );
}
