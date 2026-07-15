'use client';

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
        <details
          key={item.question}
          className="group bg-white open:bg-gradient-to-r open:from-primary-green/[0.06] open:via-white open:to-white hover:bg-primary-green/[0.03] open:hover:bg-gradient-to-r"
          open={defaultOpenFirst && index === 0 ? true : undefined}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 border-l-[3px] border-l-transparent px-5 py-4 text-left marker:content-none group-open:border-l-primary-green sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
            <h3 className="text-base font-semibold text-foreground group-open:text-primary-blue sm:text-lg">
              {item.question}
            </h3>
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-gray-light text-primary-green transition group-open:bg-primary-green group-open:text-white"
              aria-hidden
            >
              <ChevronDown className="size-4 transition-transform duration-200 group-open:rotate-180" />
            </span>
          </summary>
          <div className="px-5 pb-5 text-sm leading-relaxed text-ink-muted sm:px-6 sm:text-base">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
