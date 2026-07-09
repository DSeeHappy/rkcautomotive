'use client';

import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { MotionAnchor } from '@/app/components/ui/MotionLink';

const actionClassName =
  'flex min-h-14 w-full flex-col items-center justify-center gap-1 px-1 py-2.5 text-xs font-bold leading-none text-white whitespace-nowrap';

export default function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0c1222]/95 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-md lg:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <MotionAnchor
          href={BUSINESS.phoneHref}
          wrapperClassName="flex min-w-0"
          className={actionClassName}
          aria-label={`Call ${BUSINESS.phone}`}
        >
          <Phone className="size-5 shrink-0 text-primary-green-light" aria-hidden />
          <span>Call</span>
        </MotionAnchor>
        <MotionAnchor
          href={BUSINESS.textHref}
          wrapperClassName="flex min-w-0"
          className={actionClassName}
          aria-label="Text RKC Automotive"
        >
          <MessageSquare className="size-5 shrink-0 text-primary-green-light" aria-hidden />
          <span>Text</span>
        </MotionAnchor>
        <MotionAnchor
          href={BUSINESS.directionsUrl}
          wrapperClassName="flex min-w-0"
          className={actionClassName}
          aria-label="Get directions to RKC Automotive"
        >
          <MapPin className="size-5 shrink-0 text-primary-green-light" aria-hidden />
          <span>Directions</span>
        </MotionAnchor>
      </div>
    </div>
  );
}
