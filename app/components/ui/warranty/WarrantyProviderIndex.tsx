'use client';

import { WARRANTY_PROVIDER_INDEX } from '@/lib/constants';
import FadeIn, { Stagger, StaggerItem } from '@/app/components/ui/FadeIn';

const SECTION_PAD = 'py-24 sm:py-28';

const TOTAL_PROVIDERS = WARRANTY_PROVIDER_INDEX.reduce(
  (sum, group) => sum + group.providers.length,
  0,
);

export default function WarrantyProviderIndex() {
  return (
    <section className={`${SECTION_PAD} bg-[#0c1222]`}>
      <div className="wrap">
        <FadeIn className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
            Comprehensive index
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-white sm:text-6xl">
            {TOTAL_PROVIDERS} Extended Warranty Administrators We Work With
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Bring your contract to our Englewood shop — if your company appears below, we handle the
            entire claims process on your behalf.
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm">
            <Stagger className="divide-y divide-white/10" stagger={0.06} delay={0.05}>
              {WARRANTY_PROVIDER_INDEX.map((group) => (
                <StaggerItem key={group.category}>
                  <div className="px-6 py-8 sm:px-10 sm:py-10">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl tracking-wide text-primary-green-light sm:text-3xl">
                        {group.category}
                      </h3>
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/60">
                        {group.providers.length} providers
                      </span>
                    </div>
                    <ul
                      className="mt-6 flex flex-wrap gap-2.5"
                      aria-label={`${group.category} warranty providers`}
                    >
                      {group.providers.map((name) => (
                        <li key={name}>
                          <span className="inline-flex rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/90 transition duration-200 hover:border-primary-green/40 hover:bg-primary-green/10 hover:text-white">
                            {name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-10 max-w-3xl">
          <p className="text-sm leading-relaxed text-white/50">
            This index covers direct administrators, marketing brokers, and institutional warranty
            programs. RKC Automotive is an independent repair facility — we are not affiliated with,
            endorsed by, or acting as an agent for any company listed above. Coverage acceptance
            depends on your specific contract terms and administrator policies.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
