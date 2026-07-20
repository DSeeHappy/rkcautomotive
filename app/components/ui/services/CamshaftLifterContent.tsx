'use client';

import { Wrench, Volume2, AlertTriangle } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { camshaftLifterRepairBodyCopy } from '@/lib/i18n/serviceBodies/camshaft-lifter-repair';

export default function CamshaftLifterContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={camshaftLifterRepairBodyCopy}
      icons={[Wrench, Volume2, AlertTriangle]}
      image={PHOTOS.engineBay}
      processBgImage={PHOTOS.engineBay}
    />
  );
}
