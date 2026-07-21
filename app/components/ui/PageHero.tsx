'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { BUSINESS, PHOTOS } from '@/lib/constants';
import { HERO_IMAGE_SIZES } from '@/lib/photos';
import Breadcrumbs, { type BreadcrumbItem } from '@/app/components/ui/Breadcrumbs';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import { useLanguage } from '@/lib/language';
import { siteCopy, type SiteShellKey } from '@/lib/siteCopy';
import { useGsapReveal } from '@/lib/useGsapReveal';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

type HeroVideoSources = {
  webm: string;
  mp4: string;
  poster: string;
};

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  eyebrow?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** When set, poster stays LCP; video plays over it unless reduced motion */
  video?: HeroVideoSources;
  /** When set, ES mode swaps hero chrome from siteCopy.shells */
  shell?: Extract<SiteShellKey, 'about' | 'faq' | 'areas' | 'vehicles' | 'services'>;
  /** Extra args for shells whose description is a function (e.g. areas) */
  shellArgs?: { street?: string; cityCount?: number };
};

export default function PageHero({
  title,
  description,
  breadcrumbs,
  eyebrow,
  imageSrc = PHOTOS.interior,
  imageAlt,
  video,
  shell,
  shellArgs,
}: PageHeroProps) {
  const { lang } = useLanguage();
  const reduceMotion = usePrefersReducedMotion();
  const chrome = siteCopy(lang);
  const shellCopy = shell ? chrome.shells[shell] : null;

  const resolvedTitle = shellCopy && 'title' in shellCopy && typeof shellCopy.title === 'string'
    ? shellCopy.title
    : title;
  const resolvedDescription =
    shell === 'areas' && shellCopy && 'description' in shellCopy && typeof shellCopy.description === 'function'
      ? shellCopy.description(shellArgs?.street ?? BUSINESS.address.street, shellArgs?.cityCount ?? 0)
      : shellCopy && 'description' in shellCopy && typeof shellCopy.description === 'string'
        ? shellCopy.description
        : description;
  const resolvedEyebrow =
    shellCopy && 'eyebrow' in shellCopy && typeof shellCopy.eyebrow === 'string' ? shellCopy.eyebrow : eyebrow;
  const resolvedBreadcrumbs: BreadcrumbItem[] | undefined = shellCopy
    ? [
        { label: shellCopy.home, href: '/' },
        { label: shellCopy.crumb },
      ]
    : breadcrumbs;

  const heroAlt = imageAlt ?? `${resolvedTitle} — RKC Automotive in Englewood, CO`;
  const posterSrc = video?.poster ?? imageSrc;
  const showVideo = Boolean(video) && !reduceMotion;
  const heading = useGsapReveal<HTMLHeadingElement>({ y: 24, duration: 0.7 });
  const desc = useGsapReveal<HTMLParagraphElement>({ delay: 0.1, y: 16, duration: 0.6 });
  const ctas = useGsapReveal<HTMLDivElement>({ delay: 0.2, y: 12, duration: 0.5 });

  return (
    <section lang={lang} className="relative z-0 overflow-hidden bg-[#0c1222] pt-20 min-h-[58svh] sm:min-h-[64svh] xl:pt-24">
      <div className="absolute inset-0">
        <Image
          src={posterSrc}
          alt={heroAlt}
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes={HERO_IMAGE_SIZES}
        />
        {showVideo && video && (
          <video
            className="absolute inset-0 size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          >
            <source src={video.webm} type="video/webm" />
            <source src={video.mp4} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="photo-veil absolute inset-0" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-4 pb-16 pt-20 sm:px-6 sm:pb-20 lg:px-8">
        {resolvedBreadcrumbs && resolvedBreadcrumbs.length > 0 && (
          <Breadcrumbs items={resolvedBreadcrumbs} className="mb-6" variant="light" />
        )}
        {resolvedEyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">{resolvedEyebrow}</p>
        )}
        <h1
          ref={heading}
          className="mt-3 max-w-4xl font-display text-5xl tracking-wide text-white sm:text-6xl lg:text-7xl"
        >
          {resolvedTitle}
        </h1>
        <p ref={desc} className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl">
          {resolvedDescription}
        </p>
        <div ref={ctas} className="mt-8 flex flex-wrap gap-3">
          <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
            <Phone className="size-5" />
            {BUSINESS.phone}
          </MotionAnchor>
          <Link href="/contact" className="btn-ghost-light">
            {chrome.pageHero.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
