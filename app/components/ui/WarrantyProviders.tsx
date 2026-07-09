'use client';

import { EXTENDED_WARRANTY_PROVIDERS } from '@/lib/constants';
import FadeIn, { Stagger, StaggerItem } from './FadeIn';

function ProviderTag({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/90 shadow-[0_4px_14px_-8px_rgba(0,0,0,0.45)] transition duration-200 hover:border-primary-green/40 hover:bg-white/[0.07] hover:text-white">
      {name}
    </span>
  );
}

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
        <Stagger
          className="mt-10 flex flex-wrap gap-3"
          stagger={0.03}
          delay={0.05}
        >
          {EXTENDED_WARRANTY_PROVIDERS.map((name) => (
            <StaggerItem key={name}>
              <ProviderTag name={name} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </FadeIn>
  );
}
