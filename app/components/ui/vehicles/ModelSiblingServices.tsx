'use client';

import Link from 'next/link';

export type ModelServiceLink = {
  href: string;
  title: string;
};

type ModelSiblingServicesProps = {
  modelName: string;
  brandName: string;
  services: ModelServiceLink[];
};

export default function ModelSiblingServices({
  modelName,
  brandName,
  services,
}: ModelSiblingServicesProps) {
  if (services.length === 0) return null;

  return (
    <section className="border-t border-[color:var(--line)] bg-[color:var(--accent-gray-light)] py-16 sm:py-20">
      <div className="wrap">
        <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
          Other services for this {modelName}
        </h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          More {brandName} {modelName} repair guides from RKC Automotive — same ASE-certified crew and posted labor rate.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-2xl border border-[color:var(--line)] bg-white px-5 py-4 transition hover:border-primary-green/40 hover:bg-primary-green/5"
              >
                <span className="font-semibold text-foreground group-hover:text-primary-green">
                  {service.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
