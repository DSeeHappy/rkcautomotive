'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { BUSINESS, PHOTOS } from '@/lib/constants';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import { useGsapReveal } from '@/lib/useGsapReveal';

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
  eyebrow?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageHero({
  title,
  description,
  breadcrumbs,
  eyebrow,
  imageSrc = PHOTOS.interior,
  imageAlt,
}: PageHeroProps) {
  const heroAlt = imageAlt ?? `${title} — RKC Automotive in Englewood, CO`;
  const heading = useGsapReveal<HTMLHeadingElement>({ y: 24, duration: 0.7 });
  const desc = useGsapReveal<HTMLParagraphElement>({ delay: 0.1, y: 16, duration: 0.6 });
  const ctas = useGsapReveal<HTMLDivElement>({ delay: 0.2, y: 12, duration: 0.5 });

  return (
    <section className="relative isolate min-h-[58svh] overflow-hidden bg-[#0c1222] pt-24 sm:min-h-[64svh] xl:pt-28">
      <Image src={imageSrc} alt={heroAlt} fill priority className="object-cover" sizes="100vw" />
      <div className="photo-veil absolute inset-0" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-4 pb-16 pt-20 sm:px-6 sm:pb-20 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              {breadcrumbs.map((crumb, i) => (
                <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/30">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">{eyebrow}</p>
        )}
        <h1
          ref={heading.ref}
          className="mt-3 max-w-4xl font-display text-5xl tracking-wide text-white sm:text-6xl lg:text-7xl"
        >
          {title}
        </h1>
        <p ref={desc.ref} className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl">
          {description}
        </p>
        <div ref={ctas.ref} className="mt-8 flex flex-wrap gap-3">
          <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
            <Phone className="size-5" />
            {BUSINESS.phone}
          </MotionAnchor>
          <Link href="/contact" className="btn-ghost-light">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
