import Link from 'next/link';
import { BUSINESS, LABOR_RATE } from '@/lib/constants';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { createPageMetadata } from '@/lib/og';
import JsonLd from '@/app/components/JsonLd';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Terms of Service | RKC Automotive',
  description:
    'Terms of service for RKC Automotive auto repair in Englewood, CO — estimates, approvals, pricing, and website use.',
  path: '/terms',
  titleAbsolute: true,
});

export default function TermsPage() {
  return (
    <div>
      <JsonLd
        data={[
          createWebPageSchema(
            'Terms of Service',
            'Terms of service for RKC Automotive in Englewood, CO.',
            '/terms',
          ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Terms of Service', path: '/terms' },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Website use and repair service terms for RKC Automotive customers."
      />

      <section className="py-20">
        <div className="wrap prose prose-neutral max-w-3xl">
          <FadeIn className="space-y-6 text-ink-muted">
            <p className="text-sm text-ink-muted">Last updated: July 8, 2026</p>

            <h2 className="font-display text-3xl tracking-wide text-foreground">Repair services</h2>
            <p>
              All repair work is performed after you approve a written estimate. Labor is billed at our posted rate of{' '}
              {LABOR_RATE} unless otherwise agreed in writing. Parts are quoted separately. If the scope of work
              changes during a repair, we contact you for approval before proceeding.
            </p>

            <h2 className="font-display text-3xl tracking-wide text-foreground">Warranty</h2>
            <p>
              Warranty terms for parts and labor vary by service and are explained on your estimate and invoice. Ask
              our team for specific coverage details before approving work.
            </p>

            <h2 className="font-display text-3xl tracking-wide text-foreground">Website content</h2>
            <p>
              Information on this website is provided for general guidance about our services and pricing. It is not
              a binding quote until we inspect your vehicle and provide a written estimate. We may update site
              content, hours, and pricing at any time.
            </p>

            <h2 className="font-display text-3xl tracking-wide text-foreground">Limitation of liability</h2>
            <p>
              To the extent permitted by Colorado law, {BUSINESS.name} is not liable for indirect or consequential
              damages arising from use of this website. Repair liability is governed by your approved estimate and
              applicable law.
            </p>

            <h2 className="font-display text-3xl tracking-wide text-foreground">Contact</h2>
            <p>
              {BUSINESS.name} · {BUSINESS.address.full} ·{' '}
              <a href={BUSINESS.phoneHref} className="font-semibold text-primary-green">
                {BUSINESS.phone}
              </a>
            </p>

            <p>
              <Link href="/contact" className="font-semibold text-primary-blue hover:underline">
                Contact page →
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
