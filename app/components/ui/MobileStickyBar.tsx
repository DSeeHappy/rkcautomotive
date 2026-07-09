'use client';

import { Phone, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { MotionAnchor } from '@/app/components/ui/MotionLink';

export default function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0c1222]/95 backdrop-blur-md lg:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <MotionAnchor
          href={BUSINESS.phoneHref}
          className="flex flex-col items-center justify-center gap-1 px-2 py-3 text-xs font-bold text-white"
          aria-label={`Call ${BUSINESS.phone}`}
        >
          <Phone className="size-5 text-primary-green-light" />
          Call
        </MotionAnchor>
        <MotionAnchor
          href={BUSINESS.textHref}
          className="flex flex-col items-center justify-center gap-1 px-2 py-3 text-xs font-bold text-white"
          aria-label="Text RKC Automotive"
        >
          <MessageSquare className="size-5 text-primary-green-light" />
          Text
        </MotionAnchor>
        <MotionAnchor
          href={BUSINESS.directionsUrl}
          className="flex flex-col items-center justify-center gap-1 px-2 py-3 text-xs font-bold text-white"
          aria-label="Get directions to RKC Automotive"
        >
          <MapPin className="size-5 text-primary-green-light" />
          Directions
        </MotionAnchor>
      </div>
    </div>
  );
}
