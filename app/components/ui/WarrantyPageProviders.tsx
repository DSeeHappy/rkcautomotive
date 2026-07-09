'use client';

import {
  FEATURED_WARRANTY_PROVIDERS,
  OTHER_WARRANTY_PROVIDERS,
} from '@/lib/constants';
import FadeIn, { Stagger, StaggerItem } from './FadeIn';

function ProviderTag({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-white px-4 py-2.5 text-sm font-semibold text-foreground shadow-[0_4px_14px_-8px_rgba(12,18,34,0.12)] transition duration-200 hover:border-primary-green/40 hover:bg-primary-green/[0.04]">
      {name}
    </span>
  );
}

export default function WarrantyPageProviders() {
  return (
    <div className="space-y-12">
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05} delay={0.05}>
        {FEATURED_WARRANTY_PROVIDERS.map((provider) => (
          <StaggerItem key={provider.title}>
            <div className="h-full rounded-3xl border border-[color:var(--line)] bg-white p-6 shadow-[0_20px_60px_-40px_rgba(12,18,34,0.18)]">
              <h3 className="text-xl font-bold text-primary-blue">{provider.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{provider.blurb}</p>
            </div>
          </StaggerItem>
        ))}
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
          <div className="mt-8 flex flex-wrap gap-3">
            {OTHER_WARRANTY_PROVIDERS.map((name) => (
              <ProviderTag key={name} name={name} />
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
