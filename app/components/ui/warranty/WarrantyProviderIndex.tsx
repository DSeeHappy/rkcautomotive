'use client';

import Image from 'next/image';
import { Building2, ChevronDown, ExternalLink, Landmark, Megaphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import {
  getWarrantyProvider,
  WARRANTY_PROVIDER_INDEX,
  WARRANTY_PROVIDERS,
  type WarrantyProvider,
} from '@/lib/constants';
import FadeIn from '@/app/components/ui/FadeIn';
import { SECTION_PAD } from './warrantyShared';

const TOTAL_PROVIDERS = WARRANTY_PROVIDER_INDEX.reduce(
  (sum, group) => sum + group.providers.length,
  0,
);

const VERIFIED_PROVIDER_COUNT = WARRANTY_PROVIDERS.length;

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'Direct Administrators': Building2,
  'Brokers & Providers': Megaphone,
  'Institutional & Specialized': Landmark,
};

/** Map index display names to canonical provider records */
function resolveWarrantyProvider(indexName: string): WarrantyProvider | undefined {
  const exact = getWarrantyProvider(indexName);
  if (exact) return exact;

  return WARRANTY_PROVIDERS.find(
    (provider) =>
      indexName.startsWith(provider.name) ||
      indexName.includes(`(${provider.name})`) ||
      provider.name.includes(indexName.split(' (')[0] ?? indexName),
  );
}

function ProviderListItem({ name }: { name: string }) {
  const provider = resolveWarrantyProvider(name);
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = provider?.logo && !logoFailed;
  const isVerified = Boolean(provider);

  const content = (
    <>
      {showLogo && provider?.logo ? (
        <Image
          src={provider.logo}
          alt={`${provider.name} warranty provider logo`}
          width={80}
          height={32}
          className="h-6 w-auto max-w-[5rem] shrink-0 object-contain brightness-0 invert opacity-85"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span className="size-1.5 shrink-0 rounded-full bg-primary-green-light" aria-hidden />
      )}
      <span className="min-w-0 flex-1 truncate">{name}</span>
      {isVerified && provider ? (
        <ExternalLink
          className="size-3.5 shrink-0 text-primary-green-light/70 opacity-60 transition group-hover:opacity-100"
          aria-hidden
        />
      ) : null}
    </>
  );

  const itemClass =
    'group flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition ' +
    (isVerified
      ? 'border-primary-green/25 bg-primary-green/[0.06] text-white hover:border-primary-green/45 hover:bg-primary-green/[0.1]'
      : 'border-white/10 bg-white/[0.04] text-white/90 hover:border-primary-green/30 hover:bg-primary-green/[0.06]');

  if (isVerified && provider) {
    return (
      <li>
        <a
          href={provider.claimsUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`${name} — open claims portal`}
          aria-label={`${name} — open claims portal in new tab`}
          className={itemClass}
        >
          {content}
        </a>
      </li>
    );
  }

  return <li className={itemClass}>{content}</li>;
}

export default function WarrantyProviderIndex() {
  return (
    <section className={`relative overflow-hidden ${SECTION_PAD} bg-[#0c1222]`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-green/30 to-transparent"
      />
      <div className="wrap relative">
        <FadeIn className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
            Warranty administrators
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-white sm:text-6xl">
            Extended Warranty Administrators We Work With
          </h2>
          <p className="mt-4 text-lg text-white/75">
            {TOTAL_PROVIDERS} administrators across direct, broker, and institutional programs — including{' '}
            {VERIFIED_PROVIDER_COUNT} verified active partners with direct claims portals. RKC submits
            diagnostics, negotiates approvals, and tracks your claim through completion.
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
                            <ProviderListItem key={name} name={name} />
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
            Verified partners (with logos) link to their claims portals. This index covers direct
            administrators, marketing brokers, and institutional warranty programs. RKC Automotive is
            an independent repair facility — we are not affiliated with, endorsed by, or acting as an
            agent for any company listed above. Coverage acceptance depends on your specific contract
            terms and administrator policies.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
