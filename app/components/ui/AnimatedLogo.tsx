'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { RKC_LOGO_HEIGHT, RKC_LOGO_PNG, RKC_LOGO_WIDTH } from '@/lib/logo';

const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export type AnimatedLogoVariant = 'hero' | 'nav' | 'footer';

type AnimatedLogoProps = {
  variant?: AnimatedLogoVariant;
  className?: string;
  href?: string;
  /** Nav over dark hero — subtle backdrop for contrast when needed */
  onDarkBackground?: boolean;
};

const sizeClass = {
  hero: 'w-[min(52vw,168px)] sm:w-[min(44vw,200px)] lg:w-[min(22vw,220px)] h-auto',
  nav: 'h-14 w-auto sm:h-16 lg:h-[4.5rem] xl:h-20',
  footer: 'h-16 w-auto sm:h-[4.5rem]',
} as const;

const heroGlowClass =
  'drop-shadow-[0_4px_18px_rgba(12,18,34,0.45)] drop-shadow-[0_0_24px_rgba(14,133,54,0.22)]';

function LogoImage({
  variant = 'nav',
  className = '',
}: Pick<AnimatedLogoProps, 'variant' | 'className'>) {
  const v = variant ?? 'nav';

  return (
    <Image
      src={RKC_LOGO_PNG}
      alt="RKC Automotive"
      width={RKC_LOGO_WIDTH}
      height={RKC_LOGO_HEIGHT}
      quality={95}
      priority={v === 'hero' || v === 'nav'}
      sizes={
        v === 'hero'
          ? '(max-width: 640px) 168px, (max-width: 1024px) 200px, 220px'
          : v === 'nav'
            ? '(max-width: 640px) 112px, (max-width: 1280px) 144px, 160px'
            : '(max-width: 640px) 128px, 144px'
      }
      className={`block ${sizeClass[v]} select-none ${v === 'hero' ? heroGlowClass : ''} ${className}`}
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
          isNav && onDarkBackground
            ? 'rounded-xl bg-white/92 px-2.5 py-1 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)] backdrop-blur-[2px]'
            : isNav
              ? 'px-0.5 py-0.5'
              : ''
        }
      >
        <LogoImage variant={v} />
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
}: Pick<AnimatedLogoProps, 'variant' | 'className'>) {
  return <LogoImage variant={variant} className={className} />;
}
