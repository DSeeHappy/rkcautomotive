'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import {
  RKC_LOGO_CARD_PNG,
  RKC_LOGO_CARD_SIZE,
  RKC_LOGO_HEIGHT,
  RKC_LOGO_NAV_WEBP,
  RKC_LOGO_PNG,
  RKC_LOGO_WIDTH,
} from '@/lib/logo';

const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export type AnimatedLogoVariant = 'hero' | 'nav' | 'footer';

type AnimatedLogoProps = {
  variant?: AnimatedLogoVariant;
  className?: string;
  href?: string;
  /** Nav over dark hero — use white card for contrast */
  onDarkBackground?: boolean;
};

const sizeClass = {
  hero: 'w-[min(56vw,184px)] sm:w-[min(48vw,216px)] lg:w-[min(24vw,240px)] h-auto',
  nav: 'h-16 w-auto sm:h-[4.25rem] lg:h-[4.75rem] xl:h-24',
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
            ? '(max-width: 640px) 128px, (max-width: 1280px) 160px, 192px'
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
  const reduce = useReducedMotion();
  const v = variant ?? 'nav';
  const isNav = v === 'nav';
  const isHero = v === 'hero';
  const useCard = useCardAsset(v, onDarkBackground);

  return (
    <motion.div
      className={`relative inline-flex shrink-0 items-center ${className}`}
      initial={
        reduce
          ? false
          : isHero
            ? { opacity: 0, y: 12, scale: 0.98 }
            : { opacity: 0, scale: 0.9 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={
        isHero
          ? {
              opacity: { duration: 0.9, ease: EASE_OUT, delay: 0.08 },
              y: { duration: 0.95, ease: EASE_OUT, delay: 0.08 },
              scale: { duration: 0.95, ease: EASE_OUT, delay: 0.08 },
            }
          : {
              opacity: { duration: 0.7, ease: EASE },
              scale: { duration: 0.85, ease: EASE_OUT },
            }
      }
      whileHover={
        reduce || !isNav
          ? undefined
          : { scale: 1.02, transition: { duration: 0.25, ease: EASE } }
      }
    >
      <div
        className={
          isNav && useCard
            ? 'p-0.5'
            : isNav
              ? 'px-0.5 py-0.5'
              : isHero
                ? 'p-0'
                : ''
        }
      >
        <LogoImage variant={v} onDarkBackground={onDarkBackground} />
      </div>
    </motion.div>
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
