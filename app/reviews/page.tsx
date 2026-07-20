import Link from 'next/link';
import { Phone } from 'lucide-react';
import {
  BUSINESS,
  GOOGLE_REVIEWS_URL,
  PHOTOS,
  VERIFIED_REVIEWS_4_PLUS,
} from '@/lib/constants';
import PhoneLink from '@/app/components/ui/PhoneLink';
import PageHero from '@/app/components/ui/PageHero';
import ReviewCards from '@/app/components/ui/ReviewCards';
import PageCTAs from '@/app/components/ui/PageCTAs';
import FadeIn from '@/app/components/ui/FadeIn';
import JsonLd from '@/app/components/JsonLd';
import { createPageMetadata } from '@/lib/og';
import { createBreadcrumbSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Customer Reviews | RKC Automotive Englewood, CO',
  description:
    'Read verified Google and Facebook reviews for RKC Automotive in Englewood, CO. Honest engine repair, diagnostics, and auto service. Call (720) 749-3965.',
  path: '/reviews',
  image: PHOTOS.exterior,
  imageAlt: 'RKC Automotive shop exterior in Englewood, CO',
  keywords: 'RKC Automotive reviews, auto repair reviews Englewood CO, mechanic reviews Denver',
});

export default function ReviewsPage() {
  return (
    <div>
      <JsonLd
        data={[
          // LocalBusiness/AutoRepair NAP comes from root layout only — no AggregateRating.
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Reviews', path: '/reviews' },
          ]),
        ]}
      />
      <PageHero
        title="Verified Customer Reviews"
        description="Real feedback from Englewood and Denver metro drivers — no placeholders, no invented quotes."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Reviews' },
        ]}
        imageSrc={PHOTOS.exterior}
        imageAlt="RKC Automotive shop in Englewood, CO"
      />

      <section className="py-16 sm:py-20">
        <div className="wrap">
          <FadeIn className="mb-10 max-w-3xl">
            <p className="text-lg text-ink-muted">
              RKC Automotive earns trust through honest diagnostics, fair pricing at {BUSINESS.phone}, and
              ASE-certified work at 2120 W Evans Ave in Englewood. Browse verified reviews below or leave your
              own on Google.
            </p>
          </FadeIn>
          <ReviewCards reviews={VERIFIED_REVIEWS_4_PLUS} />
          <FadeIn className="mt-12 flex flex-wrap gap-4">
            <a href={GOOGLE_REVIEWS_URL} className="btn-blue" target="_blank" rel="noopener noreferrer">
              Read Google reviews
            </a>
            <PhoneLink className="btn-green">
              <Phone className="size-4" />
              Call {BUSINESS.phone}
            </PhoneLink>
            <Link href="/contact" className="btn-outline">
              Book service
            </Link>
          </FadeIn>
        </div>
      </section>

      <PageCTAs variant="band" />
    </div>
  );
}
