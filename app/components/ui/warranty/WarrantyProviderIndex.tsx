'use client';

import { Building2, ChevronDown, Landmark, Megaphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { WARRANTY_PROVIDER_INDEX } from '@/lib/constants';
import FadeIn from '@/app/components/ui/FadeIn';
import { SECTION_PAD } from './warrantyShared';

const TOTAL_PROVIDERS = WARRANTY_PROVIDER_INDEX.reduce(
  (sum, group) => sum + group.providers.length,
  0,
);

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'Direct Administrators': Building2,
  'Brokers & Providers': Megaphone,
  'Institutional & Specialized': Landmark,
};

export default function WarrantyProviderIndex() {
  return (
    <section className={`${SECTION_PAD} bg-[#0c1222]`}>
      <div className="wrap">
        <FadeIn className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
            Comprehensive index
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-white sm:text-6xl">
            {TOTAL_PROVIDERS} Extended Warranty Administrators
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Bring your contract to our Englewood shop — if your company appears below, we handle the
            entire claims process on your behalf.
          </p>
          <div
            aria-hidden
            className="mt-6 h-1 w-20 bg-gradient-to-r from-primary-green-light to-transparent"
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm divide-y divide-white/10">
            {WARRANTY_PROVIDER_INDEX.map((group) => {
              const Icon = CATEGORY_ICONS[group.category] ?? Building2;
              return (
                <Disclosure key={group.category} defaultOpen={group.category === 'Direct Administrators'}>
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left transition hover:bg-white/[0.04] sm:px-10 sm:py-7">
                        <div className="flex items-center gap-4">
                          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-green/15 ring-1 ring-primary-green/25">
                            <Icon className="size-5 text-primary-green-light" aria-hidden />
                          </span>
                          <div>
                            <h3 className="font-display text-2xl tracking-wide text-white sm:text-3xl">
                              {group.category}
                            </h3>
                            <p className="mt-0.5 text-sm text-white/50">
                              {group.providers.length} providers
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          className={`size-5 shrink-0 text-primary-green-light transition ${open ? 'rotate-180' : ''}`}
                          aria-hidden
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="border-t border-white/10 px-6 pb-8 pt-2 sm:px-10">
                        <ul
                          className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3"
                          aria-label={`${group.category} warranty providers`}
                        >
                          {group.providers.map((name) => (
                            <li
                              key={name}
                              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/90 transition hover:border-primary-green/30 hover:bg-primary-green/[0.06]"
                            >
                              <span className="size-1.5 shrink-0 rounded-full bg-primary-green-light" />
                              {name}
                            </li>
                          ))}
                        </ul>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-10 max-w-3xl">
          <p className="text-sm leading-relaxed text-white/45">
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
