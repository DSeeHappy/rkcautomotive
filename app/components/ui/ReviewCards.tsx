import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEWS_URL, VERIFIED_REVIEWS_4_PLUS, type VerifiedReview } from '@/lib/constants';
import FadeIn from './FadeIn';

type ReviewCardsProps = {
  reviews?: readonly VerifiedReview[];
  className?: string;
  showCtas?: boolean;
};

export default function ReviewCards({
  reviews = VERIFIED_REVIEWS_4_PLUS,
  className = '',
  showCtas = true,
}: ReviewCardsProps) {
  return (
    <div className={className}>
      <div className="grid gap-6 lg:grid-cols-3">
        {reviews.map((review, i) => (
          <FadeIn key={`${review.author}-${review.source}`} delay={i * 0.08}>
            <blockquote className="flex h-full flex-col justify-between rounded-3xl border border-[color:var(--line)] bg-white/80 p-8 shadow-[0_20px_60px_-40px_rgba(12,18,34,0.35)] backdrop-blur-sm">
              <div>
                {review.rating ? (
                  <p className="text-primary-green" aria-label={`${review.rating} out of 5 stars`}>
                    {'★'.repeat(review.rating)}
                  </p>
                ) : null}
                <p className="mt-5 text-lg leading-relaxed text-foreground">&ldquo;{review.quote}&rdquo;</p>
              </div>
              <footer className="mt-8 border-t border-[color:var(--line)] pt-5">
                <p className="font-bold text-primary-blue">{review.author}</p>
                <a
                  href={review.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm text-ink-muted hover:text-primary-green"
                >
                  {review.source}
                  <ExternalLink className="size-3" aria-hidden />
                </a>
              </footer>
            </blockquote>
          </FadeIn>
        ))}
      </div>

      {showCtas ? (
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-green">
            Read our Google reviews
            <ExternalLink className="size-4" aria-hidden />
          </a>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-blue">
            Leave a Google review
            <ExternalLink className="size-4" aria-hidden />
          </a>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white px-7 py-3.5 text-base font-semibold text-foreground transition hover:border-primary-green/40 hover:text-primary-green">
            Contact the shop
          </Link>
        </div>
      ) : null}
    </div>
  );
}
