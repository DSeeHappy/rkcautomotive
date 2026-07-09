'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { GOOGLE_REVIEWS_URL, VERIFIED_REVIEWS_4_PLUS, type VerifiedReview } from '@/lib/constants';

const ROTATION_INTERVAL_MS = 1000;
const COMPACT_INDICATOR_THRESHOLD = 10;
const ease = [0.22, 1, 0.36, 1] as const;

type ReviewCardsProps = {
  reviews?: readonly VerifiedReview[];
  className?: string;
  showCtas?: boolean;
  /** Auto-rotate when the pool exceeds visible slots. Pass `false` to force a static grid. */
  rotate?: boolean;
  intervalMs?: number;
};

function reviewKey(review: VerifiedReview) {
  return `${review.author}-${review.source}`;
}

function getVisibleReviews(reviews: readonly VerifiedReview[], startIndex: number, count: number) {
  if (reviews.length === 0) return [];
  if (count >= reviews.length) return [...reviews];
  return Array.from({ length: count }, (_, i) => reviews[(startIndex + i) % reviews.length]!);
}

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setCount(mq.matches ? 3 : 1);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return count;
}

function ReviewCard({ review }: { review: VerifiedReview }) {
  return (
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
  );
}

export default function ReviewCards({
  reviews = VERIFIED_REVIEWS_4_PLUS,
  className = '',
  showCtas = true,
  rotate,
  intervalMs = ROTATION_INTERVAL_MS,
}: ReviewCardsProps) {
  const reduceMotion = useReducedMotion();
  const visibleCount = useVisibleCount();
  const shouldRotate = rotate ?? reviews.length > visibleCount;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const useCompactIndicator = reviews.length >= COMPACT_INDICATOR_THRESHOLD;

  const slotCount = shouldRotate ? visibleCount : reviews.length;
  const visibleReviews = useMemo(
    () => getVisibleReviews(reviews, currentIndex, slotCount),
    [reviews, currentIndex, slotCount],
  );

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (!shouldRotate || isPaused || reduceMotion) return;
    const id = window.setInterval(advance, intervalMs);
    return () => window.clearInterval(id);
  }, [shouldRotate, isPaused, reduceMotion, advance, intervalMs]);

  const gridClass = slotCount >= 3 ? 'lg:grid-cols-3' : slotCount === 2 ? 'sm:grid-cols-2' : '';
  const progressPercent = reviews.length > 0 ? ((currentIndex + 1) / reviews.length) * 100 : 0;

  return (
    <div className={className}>
      {shouldRotate ? (
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="relative flex size-2" aria-hidden>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-green/40" />
            <span className="relative inline-flex size-2 rounded-full bg-primary-green" />
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
            Live verified reviews
          </span>
        </div>
      ) : null}

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setIsPaused(false);
          }
        }}
        aria-roledescription="carousel"
        aria-label="Verified customer reviews"
        aria-live="polite"
      >
        {shouldRotate ? (
          <div className={`grid gap-6 ${gridClass}`}>
            {Array.from({ length: slotCount }, (_, slot) => {
              const review = visibleReviews[slot]!;
              return (
                <div key={slot} className="min-h-[280px]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={reviewKey(review)}
                      className="h-full"
                      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
                      transition={{ duration: 0.45, ease }}
                    >
                      <ReviewCard review={review} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={`grid gap-6 ${gridClass}`}>
            {visibleReviews.map((review) => (
              <ReviewCard key={reviewKey(review)} review={review} />
            ))}
          </div>
        )}

        {shouldRotate ? (
          useCompactIndicator ? (
            <div className="mt-8 space-y-2" aria-label="Review rotation progress">
              <div className="flex items-center justify-between text-xs text-ink-muted">
                <span>
                  Review {currentIndex + 1} of {reviews.length}
                </span>
                <span className="font-medium text-primary-green">{reviews.length} verified</span>
              </div>
              <div
                className="h-1.5 overflow-hidden rounded-full bg-[color:var(--line)]"
                role="progressbar"
                aria-valuemin={1}
                aria-valuemax={reviews.length}
                aria-valuenow={currentIndex + 1}
                aria-label={`Showing review ${currentIndex + 1} of ${reviews.length}`}
              >
                <div
                  className="h-full rounded-full bg-primary-green transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          ) : (
            <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Review slides">
              {reviews.map((review, index) => (
                <button
                  key={reviewKey(review)}
                  type="button"
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Show review from ${review.author}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-6 bg-primary-green'
                      : 'w-2 bg-[color:var(--line)] hover:bg-primary-green/40'
                  }`}
                />
              ))}
            </div>
          )
        ) : null}
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
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white px-7 py-3.5 text-base font-semibold text-foreground transition hover:border-primary-green/40 hover:text-primary-green"
          >
            Contact the shop
          </Link>
        </div>
      ) : null}
    </div>
  );
}
