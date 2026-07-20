'use client';

import { Battery, Zap, Thermometer } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { batteryTestingBodyCopy } from '@/lib/i18n/serviceBodies/battery-testing';

export default function BatteryTestingContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={batteryTestingBodyCopy}
      icons={[Battery, Zap, Thermometer]}
      image={PHOTOS.teamCuevas}
      processBgImage={PHOTOS.teamCuevas}
    />
  );
}
