'use client';

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { GOOGLE_REVIEWS_URL, VERIFIED_REVIEWS_4_PLUS, type VerifiedReview } from '@/lib/constants';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

const ROTATION_INTERVAL_MS = 15000;
const COMPACT_INDICATOR_THRESHOLD = 10;

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
    <blockquote className="flex h-full flex-col justify-between rounded-3xl border border-[color:var(--line)] bg-white p-8 shadow-[0_20px_60px_-40px_rgba(12,18,34,0.35)] [color-scheme:light]">
      <div>
        {review.rating ? (
          <p className="text-primary-green" aria-label={`${review.rating} out of 5 stars`}>
            {'★'.repeat(review.rating)}
          </p>
        ) : null}
        <p className="mt-5 text-lg leading-relaxed text-[#0c1222]">&ldquo;{review.quote}&rdquo;</p>
      </div>
      <footer className="mt-8 border-t border-[color:var(--line)] pt-5">
        <p className="font-bold text-[#1c3d91]">{review.author}</p>
        <a
          href={review.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-1 text-sm text-[#5a6478] hover:text-primary-green"
        >
          {review.source}
          <ExternalLink className="size-3" aria-hidden />
        </a>
      </footer>
    </blockquote>
  );
}

function AnimatedReviewSlot({ review, reduceMotion }: { review: VerifiedReview; reduceMotion: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const key = reviewKey(review);

  useGSAP(
    () => {
      if (reduceMotion || !ref.current) return;

      gsap.set(ref.current, { y: 20, willChange: 'transform' });
      gsap.to(ref.current, {
        y: 0,
        duration: 0.45,
        ease: 'power2.out',
        onComplete: () => {
          if (ref.current) gsap.set(ref.current, { clearProps: 'willChange' });
        },
      });
    },
    { scope: ref, dependencies: [key, reduceMotion] },
  );

  return (
    <div ref={ref} className="h-full">
      <ReviewCard review={review} />
    </div>
  );
}

export default function ReviewCards({
  reviews = VERIFIED_REVIEWS_4_PLUS,
  className = '',
  showCtas = true,
  rotate,
  intervalMs = ROTATION_INTERVAL_MS,
}: ReviewCardsProps) {
  const reduceMotion = usePrefersReducedMotion();
  const visibleCount = useVisibleCount();
  const shouldRotate = rotate ?? reviews.length > visibleCount;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timerResetToken, setTimerResetToken] = useState(0);
  const useCompactIndicator = reviews.length >= COMPACT_INDICATOR_THRESHOLD;

  const slotCount = shouldRotate ? visibleCount : reviews.length;
  const visibleReviews = useMemo(
    () => getVisibleReviews(reviews, currentIndex, slotCount),
    [reviews, currentIndex, slotCount],
  );

  const resetRotationTimer = useCallback(() => {
    setTimerResetToken((token) => token + 1);
  }, []);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const goToNext = useCallback(() => {
    advance();
    resetRotationTimer();
  }, [advance, resetRotationTimer]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    resetRotationTimer();
  }, [reviews.length, resetRotationTimer]);

  const goToIndex = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      resetRotationTimer();
    },
    [resetRotationTimer],
  );

  useEffect(() => {
    if (!shouldRotate || isPaused || reduceMotion) return;
    const id = window.setInterval(advance, intervalMs);
    return () => window.clearInterval(id);
  }, [shouldRotate, isPaused, reduceMotion, advance, intervalMs, timerResetToken]);

  const navButtonClass =
    'inline-flex size-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-[#1c3d91] shadow-[0_8px_24px_-16px_rgba(12,18,34,0.35)] transition hover:border-primary-green/40 hover:text-primary-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green/30';

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
                  <AnimatedReviewSlot review={review} reduceMotion={reduceMotion} />
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
            <div className="mt-8 flex items-end gap-4" aria-label="Review rotation progress">
              <div className="min-w-0 flex-1 space-y-2">
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
              <div className="flex shrink-0 gap-2">
                <button type="button" onClick={goToPrevious} aria-label="Previous review" className={navButtonClass}>
                  <ChevronLeft className="size-5" aria-hidden />
                </button>
                <button type="button" onClick={goToNext} aria-label="Next review" className={navButtonClass}>
                  <ChevronRight className="size-5" aria-hidden />
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button type="button" onClick={goToPrevious} aria-label="Previous review" className={navButtonClass}>
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Review slides">
                {reviews.map((review, index) => (
                  <button
                    key={reviewKey(review)}
                    type="button"
                    role="tab"
                    aria-selected={index === currentIndex}
                    aria-label={`Show review from ${review.author}`}
                    onClick={() => goToIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-6 bg-primary-green'
                        : 'w-2 bg-[color:var(--line)] hover:bg-primary-green/40'
                    }`}
                  />
                ))}
              </div>
              <button type="button" onClick={goToNext} aria-label="Next review" className={navButtonClass}>
                <ChevronRight className="size-5" aria-hidden />
              </button>
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
