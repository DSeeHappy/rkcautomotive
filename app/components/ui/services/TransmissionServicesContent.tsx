'use client';

import { Cog, Gauge, AlertTriangle } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { transmissionServicesBodyCopy } from '@/lib/i18n/serviceBodies/transmission-services';

export default function TransmissionServicesContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={transmissionServicesBodyCopy}
      icons={[Cog, Gauge, AlertTriangle]}
      image={PHOTOS.classicLift}
      processBgImage={PHOTOS.classicLift}
    />
  );
}
