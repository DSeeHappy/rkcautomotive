'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap } from '@/lib/gsap';
import {
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
  onDarkBackground?: boolean;
};

const sizeClass = {
  hero: 'w-[min(56vw,184px)] sm:w-[min(48vw,216px)] lg:w-[min(24vw,240px)] h-auto',
  nav: 'w-[min(42vw,160px)] sm:w-[min(36vw,180px)] lg:w-[min(22vw,220px)] h-auto',
  footer: 'h-16 w-auto sm:h-[4.5rem]',
} as const;

const heroCardClass =
  'rounded-2xl shadow-[0_10px_32px_-8px_rgba(0,0,0,0.55),0_2px_8px_rgba(0,0,0,0.25)]';

const navLightClass =
  'drop-shadow-[0_2px_10px_rgba(12,18,34,0.14)] drop-shadow-[0_0_1px_rgba(12,18,34,0.08)]';

const navDarkCardClass =
  'rounded-xl shadow-[0_8px_28px_-10px_rgba(0,0,0,0.5),0_2px_6px_rgba(0,0,0,0.2)]';

function useCardAsset(variant: AnimatedLogoVariant, onDarkBackground: boolean) {
  if (variant === 'hero') return true;
  if (variant === 'nav' && onDarkBackground) return true;
  if (variant === 'footer') return true;
  return false;
}

function LogoImage({
  variant = 'nav',
  className = '',
  onDarkBackground = false,
}: Pick<AnimatedLogoProps, 'variant' | 'className' | 'onDarkBackground'>) {
  const v = variant ?? 'nav';
  const useCard = useCardAsset(v, onDarkBackground);
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
      alt="RKC Automotive"
      width={width}
      height={height}
      quality={95}
      priority={v === 'hero' || v === 'nav'}
      sizes={
        v === 'hero'
          ? '(max-width: 640px) 184px, (max-width: 1024px) 216px, 240px'
          : v === 'nav'
            ? '(max-width: 640px) 160px, (max-width: 1024px) 190px, 220px'
            : '(max-width: 640px) 128px, 144px'
      }
      className={imageClass}
      draggable={false}
    />
  );
}

function LogoContent({
  variant = 'nav',
  className = '',
  onDarkBackground = false,
}: Pick<AnimatedLogoProps, 'variant' | 'className' | 'onDarkBackground'>) {
  const reduce = usePrefersReducedMotion();
  const v = variant ?? 'nav';
  const isNav = v === 'nav';
  const isHero = v === 'hero';
  const useCard = useCardAsset(v, onDarkBackground);
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
          if (wrapperRef.current) gsap.set(wrapperRef.current, { clearProps: 'willChange' });
        },
      });
    },
    { scope: wrapperRef, dependencies: [reduce, isHero] },
  );

  useGSAP(
    () => {
      const el = containerRef.current;
      if (reduce || !isNav || !el) return;

      const onEnter = () => gsap.to(el, { scale: 1.02, duration: 0.25, ease: 'power2.out' });
      const onLeave = () => gsap.to(el, { scale: 1, duration: 0.25, ease: 'power2.out' });

      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);

      return () => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      };
    },
    { scope: containerRef, dependencies: [reduce, isNav] },
  );

  return (
    <div ref={wrapperRef} className={`relative inline-flex shrink-0 items-center ${className}`}>
      <div
        ref={containerRef}
        className={isNav && useCard ? 'p-0.5' : isNav ? 'px-0.5 py-0.5' : isHero ? 'p-0' : ''}
      >
        <LogoImage variant={v} onDarkBackground={onDarkBackground} />
      </div>
    </div>
  );
}

export default function AnimatedLogo({
  variant = 'nav',
  className = '',
  href,
  onDarkBackground = false,
}: AnimatedLogoProps) {
  const content = (
    <LogoContent variant={variant} className={className} onDarkBackground={onDarkBackground} />
  );

  if (href) {
    return (
      <Link
        href={href}
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
