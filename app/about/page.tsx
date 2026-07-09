import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { BUSINESS, GOOGLE_REVIEWS_URL, PHOTOS, TRUST_BADGES, VERIFIED_REVIEWS_4_PLUS } from '@/lib/constants';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import ReviewCards from '@/app/components/ui/ReviewCards';
import SocialLinks from '@/app/components/ui/SocialLinks';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about RKC Automotive, your trusted auto repair shop in Englewood, CO. ASE-certified technicians, 30+ years experience, honest pricing.',
};

const values = [
  {
    title: 'Honesty',
    description: "Transparent communication and honest recommendations. We'll never suggest unnecessary repairs.",
  },
  {
    title: 'Craft',
    description: 'ASE-certified technicians using quality parts and proven techniques — done right the first time.',
  },
  {
    title: 'Respect',
    description: 'Your time and your budget matter. We explain repairs clearly and answer every question.',
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="Thirty years. One Englewood bay. Zero upsell theatre."
        description="Trusted automotive services for every make, model, and year — ASE-certified repairs with straight answers, fair pricing, and Hablo Español."
        imageSrc={PHOTOS.teamCuevas}
      />

      <section className="py-24">
        <div className="wrap">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="font-display text-5xl tracking-wide text-foreground sm:text-6xl">
                Built on trust. Kept by craftsmanship.
              </h2>
              <p className="mt-6 text-lg text-ink-muted">
                We&apos;re a locally owned Englewood shop focused on long-term relationships — not one-time upsells.
                Families across the Denver metro bring their vehicles here because we listen first, diagnose carefully,
                and stand behind the work.
              </p>
              <p className="mt-4 text-ink-muted">{BUSINESS.shortDescription}</p>              <a href={BUSINESS.phoneHref} className="btn-green mt-10">
                <Phone className="size-5" />
                {BUSINESS.phone}
              </a>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image
                  src={PHOTOS.teamInspect}
                  alt="RKC Automotive technicians inspecting a vehicle"
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
          <Image src={PHOTOS.engineRebuild} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative wrap">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '30+', label: 'Years serving' },
              { value: '5,000+', label: 'Vehicles serviced' },
              { value: 'ASE', label: 'Certified techs' },
              { value: '5★', label: 'Verified reviews' },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.06}>
                <p className="font-display text-6xl tracking-wide text-primary-green-light">{s.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/60">{s.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="wrap">
          <FadeIn className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">What we stand on</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground">Three non-negotiables</h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
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
            {TRUST_BADGES.map((b) => (
              <span
                key={b}
                className="rounded-full border border-[color:var(--line)] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
              >
                {b}
              </span>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-blue">
              Visit the shop
            </Link>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-green">
              Read Google reviews
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] bg-white py-24">
        <div className="wrap">
          <FadeIn className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">What customers say</p>
            <h2 className="mt-3 font-display text-5xl tracking-wide text-foreground">Verified public reviews</h2>
          </FadeIn>
          <ReviewCards reviews={VERIFIED_REVIEWS_4_PLUS} />
          <div className="mt-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">Find us online</p>
            <SocialLinks />
          </div>
        </div>
      </section>
    </div>
  );
}
