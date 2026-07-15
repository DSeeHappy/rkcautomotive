'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/lib/constants';

type FAQAccordionProps = {
  items: FAQItem[];
  /** Open the first item by default — keeps one answer visible for scannability. */
  defaultOpenFirst?: boolean;
};

export default function FAQAccordion({ items, defaultOpenFirst = false }: FAQAccordionProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white shadow-[0_1px_0_rgba(12,18,34,0.04)] divide-y divide-[color:var(--line)]">
      {items.map((item, index) => (
        <Disclosure key={item.question} as="div" defaultOpen={defaultOpenFirst && index === 0}>
          {({ open }) => (
            <div
              className={`transition-colors ${
                open
                  ? 'bg-gradient-to-r from-primary-green/[0.06] via-white to-white'
                  : 'bg-white hover:bg-primary-green/[0.03]'
              }`}
            >
              <DisclosureButton
                className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5 ${
                  open ? 'border-l-[3px] border-l-primary-green' : 'border-l-[3px] border-l-transparent'
                }`}
              >
                <span
                  className={`text-base font-semibold sm:text-lg ${
                    open ? 'text-primary-blue' : 'text-foreground'
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full transition ${
                    open
                      ? 'bg-primary-green text-white'
                      : 'bg-accent-gray-light text-primary-green'
                  }`}
                  aria-hidden
                >
                  <ChevronDown className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                </span>
              </DisclosureButton>
              {/* unmount={false}: answers stay in HTML for crawlers when collapsed */}
              <DisclosurePanel unmount={false} className="px-5 pb-5 text-sm leading-relaxed text-ink-muted sm:px-6 sm:text-base">
                <p>{item.answer}</p>
              </DisclosurePanel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
