'use client';

import Link from 'next/link';
import { Phone, MessageSquare, MapPin, CalendarCheck, Stethoscope } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { BUSINESS } from '@/lib/constants';
import { MotionAnchor } from '@/app/components/ui/MotionLink';

type PageCTAsProps = {
  variant?: 'inline' | 'band';
  showDiagnostic?: boolean;
};

export default function PageCTAs({ variant = 'inline', showDiagnostic = true }: PageCTAsProps) {
  const reduce = useReducedMotion();

  const buttons = (
    <>
      <MotionAnchor href={BUSINESS.phoneHref} className="btn-green">
        <Phone className="size-4" />
        Call Now
      </MotionAnchor>
      <Link href="/contact" className="btn-blue">
        <CalendarCheck className="size-4" />
        Book Appointment
      </Link>
      {showDiagnostic && (
        <Link href="/services/engine-diagnostics-englewood-co" className="btn-outline">
          <Stethoscope className="size-4" />
          Get Diagnostic
        </Link>
      )}
      <MotionAnchor href={BUSINESS.textHref} className="btn-outline">
        <MessageSquare className="size-4" />
        Text Us
      </MotionAnchor>
      <MotionAnchor href={BUSINESS.directionsUrl} className="btn-outline">
        <MapPin className="size-4" />
        Get Directions
      </MotionAnchor>
    </>
  );

  if (variant === 'band') {
    return (
      <section className="border-y border-[color:var(--line)] bg-primary-blue/[0.04] py-10">
        <motion.div
          className="wrap flex flex-wrap items-center justify-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {buttons}
        </motion.div>
      </section>
    );
  }

  return <div className="flex flex-wrap gap-3">{buttons}</div>;
}
