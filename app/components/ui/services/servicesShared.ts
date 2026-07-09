import type { BreadcrumbItem } from '@/app/components/ui/Breadcrumbs';

/** Shared layout tokens for premium service pages — matches warranty/Pricing patterns */
export const SECTION_PAD = 'py-24 sm:py-28';
export const SECTION_HEADER = 'mb-14 max-w-3xl';
export const SECTION_HEADER_CENTER = 'mx-auto mb-14 max-w-3xl text-center';
export const SERVICE_CARD =
  'overflow-hidden rounded-[1.75rem] border border-[color:var(--line)] bg-[var(--background)] shadow-[0_20px_60px_-40px_rgba(12,18,34,0.22)]';

export function getServiceBreadcrumbs(serviceName: string): BreadcrumbItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: serviceName },
  ];
}
