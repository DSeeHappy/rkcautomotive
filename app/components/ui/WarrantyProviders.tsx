'use client';

import { WARRANTY_PROVIDERS } from '@/lib/constants';
import FadeIn from './FadeIn';
import WarrantyProviderLogoGrid from './WarrantyProviderLogoGrid';

export default function WarrantyProviders() {
  return (
    <FadeIn className="mt-16">
      <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-[#0c1222] p-8 sm:p-10 lg:p-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-green-light">
            Accepted providers
          </p>
          <h3 className="mt-3 font-display text-3xl tracking-wide text-white sm:text-4xl">
            Extended warranty administrators we work with
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/65">
            If your vehicle is covered by a third-party extended warranty, bring your policy details — we help with
            claims and approvals when coverage applies.
          </p>
        </div>
        <WarrantyProviderLogoGrid
          providers={WARRANTY_PROVIDERS}
          variant="dark"
          className="mt-10"
        />
      </div>
    </FadeIn>
  );
}
