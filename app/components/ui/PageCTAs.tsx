'use client';

import Link from 'next/link';
import { Phone, MessageSquare, MapPin, CalendarCheck, Stethoscope } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';
import { MotionAnchor } from '@/app/components/ui/MotionLink';
import FadeIn from '@/app/components/ui/FadeIn';
import { useLanguage } from '@/lib/language';
import { siteCopy } from '@/lib/siteCopy';

type PageCTAsProps = {
  variant?: 'inline' | 'band';
  showDiagnostic?: boolean;
};

export default function PageCTAs({ variant = 'inline', showDiagnostic = true }: PageCTAsProps) {
  const { lang } = useLanguage();
  const copy = siteCopy(lang).pageCtas;

  const buttons = (
    <>
      <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
        <Phone className="size-4" />
        {copy.callNow}
      </MotionAnchor>
      <Link href="/contact" className="btn-blue">
        <CalendarCheck className="size-4" />
        {copy.bookAppointment}
      </Link>
      {showDiagnostic && (
        <Link href="/services/engine-diagnostics-englewood-co" className="btn-outline">
          <Stethoscope className="size-4" />
          {copy.getDiagnostic}
        </Link>
      )}
      <MotionAnchor href={BUSINESS.textHref} className="btn-outline">
        <MessageSquare className="size-4" />
        {copy.textUs}
      </MotionAnchor>
      <MotionAnchor href={BUSINESS.directionsUrl} className="btn-outline">
        <MapPin className="size-4" />
        {copy.getDirections}
      </MotionAnchor>
    </>
  );

  if (variant === 'band') {
    return (
      <section lang={lang} className="border-y border-[color:var(--line)] bg-primary-blue/[0.04] py-10">
        <FadeIn className="wrap flex flex-wrap items-center justify-center gap-3" y={12}>
          {buttons}
        </FadeIn>
      </section>
    );
  }

  return (
    <div lang={lang} className="flex flex-wrap gap-3">
      {buttons}
    </div>
  );
}
