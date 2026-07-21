'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import {
  ASE_ARIA_LABEL,
  ASE_URL,
  BUSINESS,
  GOOGLE_REVIEWS_URL,
  LABOR_RATE,
  PHOTOS,
  TRUST_BADGES,
} from '@/lib/constants';
import PhoneLink from '@/app/components/ui/PhoneLink';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import ReviewCards from '@/app/components/ui/ReviewCards';
import SocialLinks from '@/app/components/ui/SocialLinks';
import { VERIFIED_REVIEWS_4_PLUS } from '@/lib/constants';
import { aboutCopy } from '@/lib/i18n/aboutCopy';
import { homeCopy } from '@/lib/homeCopy';
import { useLanguage } from '@/lib/language';

export default function AboutContent() {
  const { lang } = useLanguage();
  const copy = aboutCopy(lang);
  const compareTeaser = homeCopy(lang).compareTeaser;
  const trustBadges = homeCopy(lang).trustBadges;

  return (
    <div lang={lang}>
      <PageHero
        shell="about"
        eyebrow="About"
        title="Thirty years. One Englewood bay. Zero upsell theatre."
        description="Trusted automotive services for every make, model, and year — ASE-certified repairs at $120/hr with straight answers, fair pricing, and Hablamos Español."
        imageSrc={PHOTOS.teamCuevas}
        imageAlt={
          lang === 'es'
            ? 'Técnicos certificados ASE de RKC Automotive en Englewood, CO'
            : 'RKC Automotive ASE-certified technicians in Englewood, CO'
        }
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      <section className="py-24">
        <div className="wrap">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="font-display text-5xl tracking-wide text-foreground sm:text-6xl">
                {copy.story.title}
              </h2>
              <p className="mt-6 text-lg text-ink-muted">{copy.story.p1}</p>
              <p className="mt-4 text-ink-muted">{copy.story.p2(LABOR_RATE)}</p>
              <p className="mt-4 text-ink-muted">{copy.story.p3}</p>
              <p className="mt-4 text-ink-muted">{copy.story.shortDescription}</p>
              <PhoneLink className="btn-green mt-10">
                <Phone className="size-5" />
                {BUSINESS.phone}
              </PhoneLink>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src={PHOTOS.teamInspect}
                  alt={
                    lang === 'es'
                      ? 'Técnicos de RKC Automotive inspeccionando un vehículo'
                      : 'RKC Automotive technicians inspecting a vehicle'
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0c1222] py-24 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={PHOTOS.engineRebuild}
            alt={
              lang === 'es'
                ? 'Reconstrucción de motor en RKC Automotive en Englewood, CO'
                : 'Engine rebuild at RKC Automotive in Englewood, CO'
            }
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative wrap">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {copy.stats.map((s, i) => {
              const inner = (
                <>
                  <p className="font-display text-6xl tracking-wide text-primary-green-light">{s.value}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">{s.label}</p>
                </>
              );

              if (s.value === 'ASE') {
                return (
                  <FadeIn key={s.label} delay={i * 0.06}>
                    <a
                      href={ASE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={ASE_ARIA_LABEL}
                      className="-m-4 block rounded-2xl p-4 transition-colors hover:bg-white/5"
                    >
                      {inner}
                    </a>
                  </FadeIn>
                );
              }

              return (
                <FadeIn key={s.label} delay={i * 0.06}>
                  {inner}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="wrap">
          <FadeIn className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              {copy.values.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground">{copy.values.title}</h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {copy.values.items.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-[color:var(--line)] bg-white p-8">
                  <p className="font-display text-5xl text-primary-blue">0{i + 1}</p>
                  <h3 className="mt-4 text-2xl font-bold text-foreground">{v.title}</h3>
                  <p className="mt-3 text-ink-muted">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            {(lang === 'es' ? trustBadges : TRUST_BADGES).map((b) => (
              <span
                key={b}
                className="rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
              >
                {b === 'ASE Certified' || b === 'Certificado ASE' ? (
                  <a
                    href={ASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={ASE_ARIA_LABEL}
                    className="transition-colors hover:text-primary-green"
                  >
                    {b}
                  </a>
                ) : (
                  b
                )}
              </span>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-blue">
              {copy.values.visitShop}
            </Link>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-green">
              {copy.values.readReviews}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] bg-white py-24">
        <div className="wrap">
          <FadeIn className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              {copy.compare.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground">{copy.compare.title}</h2>
            <p className="mt-4 text-ink-muted">{copy.compare.intro}</p>
          </FadeIn>
          {/* Teaser only — full comparison lives on /pricing to avoid duplicate content */}
          <FadeIn className="max-w-3xl">
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{compareTeaser.body}</p>
            <Link
              href="/pricing"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-blue transition-colors hover:text-primary-green"
            >
              {compareTeaser.linkLabel} <span aria-hidden>→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] bg-white py-24">
        <div className="wrap">
          <FadeIn className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
              {copy.reviews.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground">{copy.reviews.title}</h2>
          </FadeIn>
          <ReviewCards reviews={VERIFIED_REVIEWS_4_PLUS} />
          <div className="mt-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">{copy.reviews.findUs}</p>
            <SocialLinks />
          </div>
        </div>
      </section>
    </div>
  );
}
