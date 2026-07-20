import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { BUSINESS, FOOTER_LINKS } from '@/lib/constants';
import PhoneLink from '@/app/components/ui/PhoneLink';

/**
 * No self-canonical / og:url here — not-found is served for many missing URLs.
 * Inventing https://…/404 would send Google a false consolidation target.
 * @see https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
 */
export const metadata: Metadata = {
  title: 'Page Not Found | RKC Automotive Englewood, CO',
  description:
    'This page could not be found. Visit RKC Automotive for ASE-certified auto repair in Englewood, CO. Call (720) 749-3965 or browse our services.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">404</p>
      <h1 className="mt-4 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-lg text-lg text-ink-muted">
        The page you are looking for may have moved or no longer exists. Explore our auto repair
        services in Englewood and the south Denver metro.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-green">
          Back to home
        </Link>
        <PhoneLink className="btn-blue">
          <Phone className="size-5" />
          {BUSINESS.phone}
        </PhoneLink>
      </div>
      <nav aria-label="Helpful links" className="mt-12">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-primary-blue">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-primary-green">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
