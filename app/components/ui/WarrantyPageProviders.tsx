'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
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
      className="group mb-5 inline-flex items-center gap-2"
    >
      {showLogo && provider.logo ? (
        <Image
          src={provider.logo}
          alt={`${provider.name} logo`}
          width={160}
          height={64}
          className="h-14 w-auto max-w-[11rem] object-contain brightness-0 invert opacity-90 transition duration-200 group-hover:opacity-100"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span className="inline-flex h-14 min-w-[3.5rem] items-center justify-center rounded-full bg-white/10 px-5 text-sm font-bold tracking-wide text-white transition duration-200 group-hover:bg-primary-green/20">
          {provider.name.replace(/[!]/g, '').slice(0, 2).toUpperCase()}
        </span>
      )}
      <ExternalLink className="size-3.5 text-white/40 opacity-0 transition duration-200 group-hover:opacity-100" aria-hidden />
    </a>
  );
}

function LogoMarquee({ providers }: { providers: readonly WarrantyProvider[] }) {
  const doubled = [...providers, ...providers];

  return (
    <div className="relative overflow-hidden py-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0c1222] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0c1222] to-transparent"
      />
      <div className="marquee-track gap-4">
        {doubled.map((provider, i) => (
          <div
            key={`${provider.slug}-${i}`}
            className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-4 backdrop-blur-sm"
          >
            {provider.logo ? (
              <Image
                src={provider.logo}
                alt=""
                width={100}
                height={40}
                className="h-8 w-auto max-w-[5.5rem] object-contain brightness-0 invert opacity-80"
              />
            ) : (
              <span className="text-xs font-bold text-white/70">
                {provider.name.slice(0, 12)}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WarrantyPageProviders() {
  return (
    <div className="space-y-14">
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05} delay={0.05}>
        {FEATURED_WARRANTY_PROVIDERS.map((provider) => {
          const primaryProvider = getWarrantyProvider(provider.names[0]);
          return (
            <StaggerItem key={provider.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.5)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-primary-green/40 hover:bg-white/[0.09] hover:shadow-[0_28px_70px_-36px_rgba(14,133,54,0.25)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary-green/[0.06] opacity-0 transition duration-300 group-hover:opacity-100"
                />
                {primaryProvider ? <FeaturedProviderLogo provider={primaryProvider} /> : null}
                <h3 className="relative font-display text-2xl tracking-wide text-white">{provider.title}</h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-white/65 sm:text-base">
                  {provider.blurb}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>

      {/* Logo marquee */}
      <FadeIn>
        <p className="text-center text-xs font-bold uppercase tracking-[0.24em] text-white/45">
          Also accepted — scroll to browse
        </p>
        <LogoMarquee providers={OTHER_WARRANTY_PROVIDERS} />
      </FadeIn>

      <FadeIn>
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
            Full provider wall
          </p>
          <h3 className="mt-3 font-display text-3xl tracking-wide text-white sm:text-4xl">
            {OTHER_WARRANTY_PROVIDERS.length} more warranty administrators
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/60">
            If your contract is backed by any of these companies, bring your policy — we handle claims
            and approvals when coverage applies.
          </p>
          <WarrantyProviderLogoGrid
            providers={OTHER_WARRANTY_PROVIDERS}
            variant="dark"
            className="mt-8"
          />
        </div>
      </FadeIn>
    </div>
  );
}
