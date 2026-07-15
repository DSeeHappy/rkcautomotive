'use client';

import { useRef } from 'react';
import { Phone, MessageSquare, MapPin, type LucideIcon } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { useRestoreTelHref } from '@/app/components/ui/PhoneLink';

const actionClassName =
  'flex min-h-14 min-w-0 flex-1 basis-0 flex-col items-center justify-center gap-1 border-l border-white/10 px-1 py-2.5 text-xs font-bold leading-none text-white first:border-l-0';

type StickyActionProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  ariaLabel: string;
};

function StickyAction({ href, label, icon: Icon, ariaLabel }: StickyActionProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isTel = href.startsWith('tel:');
  useRestoreTelHref(isTel ? href : undefined, ref);

  return (
    <a
      ref={ref}
      href={href}
      className={actionClassName}
      aria-label={ariaLabel}
      {...(isTel ? { 'data-phone-link': '', 'data-cfemail': 'false' } : {})}
    >
      <Icon className="size-5 shrink-0 text-primary-green-light" aria-hidden />
      <span className="block w-full text-center">{label}</span>
    </a>
  );
}

export default function MobileStickyBar() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/10 bg-[#0c1222] pb-[env(safe-area-inset-bottom,0px)] lg:hidden"
      aria-label="Quick contact actions"
    >
      <div className="flex w-full">
        <StickyAction
          href={BUSINESS.phoneHref}
          label="Call"
          icon={Phone}
          ariaLabel={`Call ${BUSINESS.phone}`}
        />
        <StickyAction
          href={BUSINESS.textHref}
          label="Text"
          icon={MessageSquare}
          ariaLabel="Text RKC Automotive"
        />
        <StickyAction
          href={BUSINESS.directionsUrl}
          label="Directions"
          icon={MapPin}
          ariaLabel="Get directions to RKC Automotive"
        />
      </div>
    </nav>
  );
}
