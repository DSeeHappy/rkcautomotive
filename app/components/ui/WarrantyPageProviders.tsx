'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  FEATURED_WARRANTY_PROVIDERS,
  OTHER_WARRANTY_PROVIDERS,
  getWarrantyProvider,
  type WarrantyProvider,
} from '@/lib/constants';
import FadeIn, { Stagger, StaggerItem } from './FadeIn';
import WarrantyProviderLogoGrid from './WarrantyProviderLogoGrid';

function FeaturedProviderLogo({ provider }: { provider: WarrantyProvider }) {
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = provider.logo && !logoFailed;

  return (
    <a
      href={provider.claimsUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={`${provider.name} — open claims portal`}
      aria-label={`${provider.name} — open claims portal in new tab`}
      className="group mb-4 inline-flex items-center"
    >
      {showLogo && provider.logo ? (
        <Image
          src={provider.logo}
          alt={`${provider.name} logo`}
          width={140}
          height={56}
          className="h-12 w-auto max-w-[10rem] object-contain opacity-90 transition duration-200 group-hover:opacity-100"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span className="inline-flex h-12 min-w-[3rem] items-center justify-center rounded-full bg-primary-blue/10 px-4 text-sm font-bold tracking-wide text-primary-blue transition duration-200 group-hover:bg-primary-green/10 group-hover:text-primary-green">
          {provider.name.replace(/[!]/g, '').slice(0, 2).toUpperCase()}
        </span>
      )}
    </a>
  );
}

export default function WarrantyPageProviders() {
  return (
    <div className="space-y-12">
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05} delay={0.05}>
        {FEATURED_WARRANTY_PROVIDERS.map((provider) => {
          const primaryProvider = getWarrantyProvider(provider.names[0]);
          return (
            <StaggerItem key={provider.title}>
              <div className="h-full rounded-3xl border border-[color:var(--line)] bg-white p-6 shadow-[0_20px_60px_-40px_rgba(12,18,34,0.18)]">
                {primaryProvider ? <FeaturedProviderLogo provider={primaryProvider} /> : null}
                <h3 className="text-xl font-bold text-primary-blue">{provider.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{provider.blurb}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      <FadeIn>
        <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[var(--background)] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green">
            Also accepted
          </p>
          <h3 className="mt-3 font-display text-3xl tracking-wide text-foreground sm:text-4xl">
            {OTHER_WARRANTY_PROVIDERS.length} more warranty administrators
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-muted">
            If your contract is backed by any of these companies, bring your policy — we handle claims
            and approvals when coverage applies.
          </p>
          <WarrantyProviderLogoGrid
            providers={OTHER_WARRANTY_PROVIDERS}
            className="mt-8"
          />
        </div>
      </FadeIn>
    </div>
  );
}
