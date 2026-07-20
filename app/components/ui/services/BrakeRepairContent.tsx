'use client';

import { Disc, Gauge, AlertTriangle } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { brakeRepairBodyCopy } from '@/lib/i18n/serviceBodies/brake-repair';

export default function BrakeRepairContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={brakeRepairBodyCopy}
      icons={[Disc, Gauge, AlertTriangle]}
      image={PHOTOS.undercarriage}
      processBgImage={PHOTOS.undercarriage}
    />
  );
}
