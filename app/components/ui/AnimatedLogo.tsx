'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap } from '@/lib/gsap';
import {
  getNavTopScale,
  RKC_LOGO_CARD_PNG,
  RKC_LOGO_CARD_SIZE,
  RKC_LOGO_HEIGHT,
  RKC_LOGO_NAV_WEBP,
  RKC_LOGO_PNG,
  RKC_LOGO_WIDTH,
} from '@/lib/logo';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

export type AnimatedLogoVariant = 'hero' | 'nav' | 'footer';

type AnimatedLogoProps = {
  variant?: AnimatedLogoVariant;
  className?: string;
  href?: string;
  /** Hero/footer/mobile menu — use white-card asset on dark backgrounds */
  onDarkBackground?: boolean;
  /** Nav bar scroll state — compact card logo when true, large transparent at top */
  scrolled?: boolean;
};

const sizeClass = {
  hero: 'w-[min(56vw,184px)] sm:w-[min(48vw,216px)] lg:w-[min(24vw,240px)] h-auto',
  nav: 'h-11 max-h-full w-auto object-contain object-left sm:h-12 lg:h-14',
  footer: 'h-16 w-auto sm:h-[4.5rem]',
} as const;

const navSizes = '(max-width: 640px) 140px, (max-width: 1024px) 160px, 180px';

const navScrolledImgClass =
  'block h-11 max-h-full w-auto select-none object-contain object-left sm:h-12 lg:h-14';

const navScrolledCardClass = 'rounded-lg bg-white p-0.5 shadow-sm';

const heroCardClass =
  'rounded-2xl shadow-[0_10px_32px_-8px_rgba(0,0,0,0.55),0_2px_8px_rgba(0,0,0,0.25)]';

const navLightClass =
  'drop-shadow-[0_2px_10px_rgba(12,18,34,0.14)] drop-shadow-[0_0_1px_rgba(12,18,34,0.08)]';

const navDarkCardClass =
  'rounded-lg shadow-[0_8px_28px_-10px_rgba(0,0,0,0.5),0_2px_6px_rgba(0,0,0,0.2)]';

function useCardAsset(
  variant: AnimatedLogoVariant,
  onDarkBackground: boolean,
  scrolled?: boolean,
) {
  if (variant === 'hero') return true;
  if (variant === 'footer') return true;
  if (variant === 'nav' && scrolled !== undefined) return scrolled;
  if (variant === 'nav' && onDarkBackground) return true;
  return false;
}

function LogoImage({
  variant = 'nav',
  className = '',
  onDarkBackground = false,
  scrolled,
  decorative = false,
}: Pick<AnimatedLogoProps, 'variant' | 'className' | 'onDarkBackground' | 'scrolled'> & {
  decorative?: boolean;
}) {
  const v = variant ?? 'nav';
  const useCard = useCardAsset(v, onDarkBackground, scrolled);
  const src = useCard ? RKC_LOGO_CARD_PNG : v === 'nav' ? RKC_LOGO_NAV_WEBP : RKC_LOGO_PNG;
  const width = useCard ? RKC_LOGO_CARD_SIZE : RKC_LOGO_WIDTH;
  const height = useCard ? RKC_LOGO_CARD_SIZE : RKC_LOGO_HEIGHT;

  const imageClass = [
    'block select-none',
    sizeClass[v],
    v === 'hero' && useCard ? heroCardClass : '',
    v === 'nav' && useCard ? navDarkCardClass : '',
    v === 'nav' && !useCard ? navLightClass : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Image
      src={src}
      alt={decorative ? '' : 'RKC Automotive'}
      aria-hidden={decorative || undefined}
      width={width}
      height={height}
      quality={95}
      priority={v === 'hero' || v === 'nav'}
      sizes={
        v === 'hero'
          ? '(max-width: 640px) 184px, (max-width: 1024px) 216px, 240px'
          : v === 'nav'
            ? navSizes
            : '(max-width: 640px) 128px, 144px'
      }
      className={imageClass}
      draggable={false}
    />
  );
}

function NavScrollLogo({
  className = '',
  scrolled = false,
}: {
  className?: string;
  scrolled?: boolean;
}) {
  const reduce = usePrefersReducedMotion();
  const scaleRef = useRef<HTMLDivElement>(null);
  const transparentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scaleEl = scaleRef.current;
      const transparentEl = transparentRef.current;
      const cardEl = cardRef.current;
      if (!scaleEl || !transparentEl || !cardEl) return;

      const topScale = getNavTopScale();
      const targetScale = scrolled ? 1 : topScale;
      const cardOpacity = scrolled ? 1 : 0;
      const transparentOpacity = scrolled ? 0 : 1;

      if (reduce) {
        gsap.set(scaleEl, { scale: targetScale, transformOrigin: 'left center' });
        gsap.set(cardEl, { opacity: cardOpacity });
        gsap.set(transparentEl, { opacity: transparentOpacity });
        return;
      }

      gsap.to(scaleEl, {
        scale: targetScale,
        transformOrigin: 'left center',
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      });
      gsap.to(cardEl, { opacity: cardOpacity, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
      gsap.to(transparentEl, {
        opacity: transparentOpacity,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    },
    { dependencies: [scrolled, reduce] },
  );

  return (
    <div
      ref={scaleRef}
      className={`relative inline-flex max-h-full shrink-0 origin-left items-center ${className}`}
      style={{ transformOrigin: 'left center' }}
    >
      <div className="relative">
        <div
          ref={transparentRef}
          className={scrolled ? 'pointer-events-none invisible' : undefined}
          style={{ opacity: scrolled ? 0 : 1 }}
          aria-hidden={scrolled || undefined}
        >
          <Image
            src={RKC_LOGO_NAV_WEBP}
            alt=""
            aria-hidden
            width={RKC_LOGO_WIDTH}
            height={RKC_LOGO_HEIGHT}
            quality={95}
            priority
            sizes={navSizes}
            className={`${navScrolledImgClass} ${navLightClass}`}
            draggable={false}
          />
        </div>
        <div
          ref={cardRef}
          className={`absolute inset-0 flex items-center ${scrolled ? '' : 'pointer-events-none invisible'}`}
          style={{ opacity: scrolled ? 1 : 0 }}
          aria-hidden={!scrolled || undefined}
        >
          <div className={navScrolledCardClass}>
            <Image
              src={RKC_LOGO_NAV_WEBP}
              alt=""
              aria-hidden
              width={RKC_LOGO_WIDTH}
              height={RKC_LOGO_HEIGHT}
              quality={95}
              priority
              sizes={navSizes}
              className={navScrolledImgClass}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoContent({
  variant = 'nav',
  className = '',
  onDarkBackground = false,
  scrolled,
  decorative = false,
}: Pick<AnimatedLogoProps, 'variant' | 'className' | 'onDarkBackground' | 'scrolled'> & {
  decorative?: boolean;
}) {
  const reduce = usePrefersReducedMotion();
  const v = variant ?? 'nav';
  const isNav = v === 'nav';
  const isHero = v === 'hero';
  const useScrollNav = isNav && scrolled !== undefined;
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reduce || !wrapperRef.current) return;

      gsap.set(wrapperRef.current, { willChange: 'transform, opacity' });
      gsap.from(wrapperRef.current, {
        opacity: 0,
        y: isHero ? 12 : 0,
        scale: isHero ? 0.98 : 0.9,
        duration: isHero ? 0.95 : 0.85,
        delay: isHero ? 0.08 : 0,
        ease: 'power2.out',
        onComplete: () => {
          if (wrapperRef.current) {
            gsap.set(wrapperRef.current, { clearProps: 'willChange,opacity,transform' });
          }
        },
      });
    },
    { scope: wrapperRef, dependencies: [reduce, isHero] },
  );

  useGSAP(
    () => {
      const el = containerRef.current;
      if (reduce || !isNav || useScrollNav || !el) return;

      const onEnter = () => gsap.to(el, { scale: 1.02, duration: 0.25, ease: 'power2.out' });
      const onLeave = () => gsap.to(el, { scale: 1, duration: 0.25, ease: 'power2.out' });

      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);

      return () => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      };
    },
    { scope: containerRef, dependencies: [reduce, isNav, useScrollNav] },
  );

  if (useScrollNav) {
    return (
      <div ref={wrapperRef} className={`relative inline-flex max-h-full shrink-0 items-center ${className}`}>
        <div ref={containerRef} className="flex max-h-full items-center py-0.5">
          <NavScrollLogo scrolled={scrolled} />
        </div>
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className={`relative inline-flex max-h-full shrink-0 items-center ${className}`}>
      <div
        ref={containerRef}
        className={isNav ? 'flex max-h-full items-center py-0.5' : isHero ? 'p-0' : ''}
      >
        <LogoImage
          variant={v}
          onDarkBackground={onDarkBackground}
          scrolled={scrolled}
          decorative={decorative}
        />
      </div>
    </div>
  );
}

export default function AnimatedLogo({
  variant = 'nav',
  className = '',
  href,
  onDarkBackground = false,
  scrolled,
}: AnimatedLogoProps) {
  const content = (
    <LogoContent
      variant={variant}
      className={className}
      onDarkBackground={onDarkBackground}
      scrolled={scrolled}
      decorative={Boolean(href)}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label="RKC Automotive home"
        className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 rounded-xl"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export function AnimatedLogoStatic({
  variant = 'footer',
  className = '',
  onDarkBackground = true,
}: Pick<AnimatedLogoProps, 'variant' | 'className' | 'onDarkBackground'>) {
  return <LogoImage variant={variant} className={className} onDarkBackground={onDarkBackground} />;
}
