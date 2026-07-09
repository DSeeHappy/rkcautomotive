'use client';

import Link from 'next/link';
import { getRelatedServices, LABOR_RATE } from '@/lib/constants';
import FadeIn from '@/app/components/ui/FadeIn';

type RelatedServicesProps = {
  slug: string;
  title?: string;
};

export default function RelatedServices({
  slug,
  title = 'Related services',
}: RelatedServicesProps) {
  const related = getRelatedServices(slug);
  if (related.length === 0) return null;

  return (
    <section className="border-t border-[color:var(--line)] bg-white py-16 sm:py-20">
      <div className="wrap">
        <FadeIn>
          <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Explore related repairs at our Englewood shop — same ASE-certified crew and posted {LABOR_RATE} labor rate.
          </p>
        </FadeIn>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col rounded-2xl border border-[color:var(--line)] bg-[var(--background)] px-5 py-4 transition hover:border-primary-green/40 hover:bg-primary-green/5"
            >
              <span className="font-semibold text-foreground group-hover:text-primary-green">
                {service.name} in Englewood
              </span>
              <span className="mt-1 text-sm text-ink-muted">{service.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
