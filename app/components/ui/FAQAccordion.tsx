'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/lib/constants';

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white divide-y divide-[color:var(--line)]">
      {items.map((item) => (
        <Disclosure key={item.question} as="div">
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-primary-green/[0.04]">
                <span className="text-base font-semibold text-foreground sm:text-lg">{item.question}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-primary-green transition ${open ? 'rotate-180' : ''}`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-6 pb-5 text-ink-muted">
                <p className="leading-relaxed">{item.answer}</p>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
