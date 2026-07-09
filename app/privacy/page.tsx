import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import PageHero from '@/app/components/ui/PageHero';
import FadeIn from '@/app/components/ui/FadeIn';
import { createPageMetadata } from '@/lib/og';
import JsonLd from '@/app/components/JsonLd';
import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Privacy Policy | RKC Automotive',
  description:
    'Privacy policy for RKC Automotive — how we handle contact information when you call, text, or submit a form at our Englewood, CO auto repair shop.',
  path: '/privacy',
  titleAbsolute: true,
});

export default function PrivacyPage() {
  return (
    <div>
      <JsonLd
        data={[
          createWebPageSchema(
            'Privacy Policy',
            'Privacy policy for RKC Automotive in Englewood, CO.',
            '/privacy',
          ),
          createBreadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Privacy Policy', path: '/privacy' },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How RKC Automotive handles information you share with us."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="py-20">
        <div className="wrap prose prose-neutral max-w-3xl">
          <FadeIn className="space-y-6 text-ink-muted">
            <p className="text-sm text-ink-muted">Last updated: July 8, 2026</p>

            <h2 className="font-display text-3xl tracking-wide text-foreground">Information we collect</h2>
            <p>
              When you call, text, email, or use our contact form, we may collect your name, phone number, email
              address, vehicle information, and the details you provide about your repair needs.
            </p>

            <h2 className="font-display text-3xl tracking-wide text-foreground">How we use it</h2>
            <p>
              We use this information to schedule service, provide estimates, perform repairs, follow up on your
              vehicle, and respond to your questions. We do not sell your personal information.
            </p>

            <h2 className="font-display text-3xl tracking-wide text-foreground">Third-party services</h2>
            <p>
              Our website may use analytics and hosting providers (such as Vercel Analytics) that collect standard
              technical data like page views and device type. Review links on our site may direct you to Google,
              Facebook, or other platforms with their own privacy policies.
            </p>

            <h2 className="font-display text-3xl tracking-wide text-foreground">Contact us</h2>
            <p>
              Questions about this policy? Contact {BUSINESS.name} at{' '}
              <a href={BUSINESS.phoneHref} className="font-semibold text-primary-green">
                {BUSINESS.phone}
              </a>{' '}
              or{' '}
              <a href={`mailto:${BUSINESS.email}`} className="font-semibold text-primary-green">
                {BUSINESS.email}
              </a>
              .
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
