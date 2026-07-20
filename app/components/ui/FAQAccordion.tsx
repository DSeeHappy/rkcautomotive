'use client';

import { useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/lib/constants';
import { applyRepairTimeFaq } from '@/lib/serviceDurations';
import { useSelectedService } from '@/lib/useSelectedService';

type FAQAccordionProps = {
  items: FAQItem[];
  /** Open the first item by default — keeps one answer visible for scannability. */
  defaultOpenFirst?: boolean;
  /**
   * Force a service duration key (page slug or short alias).
   * When omitted, detected from URL / query / session.
   */
  serviceKey?: string | null;
  /** Rewrite the repair-time FAQ when a service is known (default true). */
  adaptRepairTimeFaq?: boolean;
  /** If a service is known and no repair-time FAQ exists, append one. */
  injectRepairTimeFaq?: boolean;
};

export default function FAQAccordion({
  items,
  defaultOpenFirst = false,
  serviceKey: serviceKeyProp = null,
  adaptRepairTimeFaq = true,
  injectRepairTimeFaq = false,
}: FAQAccordionProps) {
  const detectedService = useSelectedService(serviceKeyProp);
  const displayItems = useMemo(() => {
    if (!adaptRepairTimeFaq) return items;
    return applyRepairTimeFaq(items, detectedService, {
      injectIfMissing: injectRepairTimeFaq,
    });
  }, [adaptRepairTimeFaq, detectedService, injectRepairTimeFaq, items]);

  return (
    <div className="overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white shadow-[0_1px_0_rgba(12,18,34,0.04)] divide-y divide-[color:var(--line)]">
      {displayItems.map((item, index) => (
        <details
          key={`${item.question}-${index}`}
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
