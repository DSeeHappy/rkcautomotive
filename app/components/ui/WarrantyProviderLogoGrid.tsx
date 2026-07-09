'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { WarrantyProvider } from '@/lib/constants';

type Variant = 'light' | 'dark';

function providerInitials(name: string): string {
  const words = name.replace(/[!]/g, '').split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

type WarrantyProviderLogoCardProps = {
  provider: WarrantyProvider;
  variant?: Variant;
};

export function WarrantyProviderLogoCard({
  provider,
  variant = 'light',
}: WarrantyProviderLogoCardProps) {
  const [logoFailed, setLogoFailed] = useState(false);
  const showLogo = provider.logo && !logoFailed;

  const cardClass =
    variant === 'dark'
      ? 'border-white/10 bg-white/[0.04] hover:border-primary-green/40 hover:bg-white/[0.08]'
      : 'border-[color:var(--line)] bg-white hover:border-primary-green/40 hover:bg-primary-green/[0.04]';

  return (
    <a
      href={provider.claimsUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={`${provider.name} — open claims portal`}
      aria-label={`${provider.name} — open claims portal in new tab`}
      className={`group flex h-full min-h-[5.5rem] flex-col items-center justify-center rounded-2xl border p-4 shadow-[0_4px_14px_-8px_rgba(12,18,34,0.12)] transition duration-200 ${cardClass}`}
    >
      {showLogo && provider.logo ? (
        <Image
          src={provider.logo}
          alt={`${provider.name} logo`}
          width={120}
          height={48}
          className="h-10 w-auto max-w-[7.5rem] object-contain opacity-90 transition duration-200 group-hover:opacity-100"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold tracking-wide ${
            variant === 'dark'
              ? 'bg-white/10 text-white/90'
              : 'bg-primary-blue/10 text-primary-blue'
          }`}
        >
          {providerInitials(provider.name)}
        </span>
      )}
      <span
        className={`mt-3 line-clamp-2 text-center text-[11px] font-semibold leading-snug ${
          variant === 'dark' ? 'text-white/75 group-hover:text-white' : 'text-ink-muted group-hover:text-foreground'
        }`}
      >
        {provider.name}
      </span>
    </a>
  );
}

type WarrantyProviderLogoGridProps = {
  providers: readonly WarrantyProvider[];
  variant?: Variant;
  className?: string;
};

export default function WarrantyProviderLogoGrid({
  providers,
  variant = 'light',
  className = '',
}: WarrantyProviderLogoGridProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-5 xl:grid-cols-6">
        {providers.map((provider) => (
          <WarrantyProviderLogoCard key={provider.slug} provider={provider} variant={variant} />
        ))}
      </div>
      <p
        className={`mt-5 text-center text-xs ${
          variant === 'dark' ? 'text-white/45' : 'text-ink-muted'
        }`}
      >
        Opens provider claims portal in a new tab
      </p>
    </div>
  );
}
