'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDown, Wrench } from 'lucide-react';
import Link from 'next/link';
import type { ModelCommonService } from '@/lib/modelCommonServices';

type ModelCommonServicesSectionProps = {
  modelName: string;
  services: ModelCommonService[];
  brandColor: string;
};

export default function ModelCommonServicesSection({
  modelName,
  services,
  brandColor,
}: ModelCommonServicesSectionProps) {
  if (services.length === 0) return null;

  return (
    <section className="mt-8" aria-labelledby="model-common-services-heading">
      <h3
        id="model-common-services-heading"
        className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-white"
      >
        <Wrench className="size-4" aria-hidden />
        Common RKC services for the {modelName}
      </h3>

      {/* Desktop: expanded cards */}
      <ul className="mt-4 hidden space-y-3 sm:block">
        {services.map((service) => (
          <li
            key={service.id}
            className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
          >
            <h4 className="text-base font-semibold leading-snug text-white">{service.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-white/85">{service.description}</p>
            <Link
              href={service.href}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition hover:opacity-80"
              style={{ color: brandColor }}
            >
              Learn more
              <span aria-hidden>→</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile: accordion */}
      <div className="mt-4 divide-y divide-white/15 overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm sm:hidden">
        {services.map((service) => (
          <Disclosure key={service.id} as="div">
            {({ open }) => (
              <>
                <DisclosureButton className="flex w-full items-start justify-between gap-3 px-4 py-4 text-left transition hover:bg-white/[0.06]">
                  <span className="text-sm font-semibold leading-snug text-white">{service.title}</span>
                  <ChevronDown
                    className={`mt-0.5 size-4 shrink-0 text-white/70 transition ${open ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </DisclosureButton>
                <DisclosurePanel className="px-4 pb-4">
                  <p className="text-sm leading-relaxed text-white/85">{service.description}</p>
                  <Link
                    href={service.href}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold transition hover:opacity-80"
                    style={{ color: brandColor }}
                  >
                    Learn more
                    <span aria-hidden>→</span>
                  </Link>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
