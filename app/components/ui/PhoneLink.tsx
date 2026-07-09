'use client';

import { useEffect, useRef, type ComponentProps, type RefObject } from 'react';
import { BUSINESS } from '@/lib/constants';

export const PHONE_TEL_HREF = BUSINESS.phoneHref;

/** Re-apply tel: href after mount — Cloudflare Email Obfuscation can corrupt anchor hrefs. */
export function useRestoreTelHref(
  href: string | undefined,
  ref: RefObject<HTMLAnchorElement | null>,
) {
  useEffect(() => {
    if (!href?.startsWith('tel:')) return;
    const el = ref.current;
    if (!el) return;
    if (el.getAttribute('href') !== href) {
      el.setAttribute('href', href);
    }
  }, [href, ref]);
}

type PhoneLinkProps = Omit<ComponentProps<'a'>, 'href'> & {
  href?: string;
};

/** Click-to-call link hardened against Cloudflare email/phone obfuscation. */
export default function PhoneLink({
  href = PHONE_TEL_HREF,
  children,
  ...rest
}: PhoneLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  useRestoreTelHref(href, ref);

  return (
    <a ref={ref} href={href} data-phone-link="" {...rest}>
      {children}
    </a>
  );
}
