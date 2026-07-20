'use client';

import { Zap, Battery, AlertTriangle } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { electricalSystemBodyCopy } from '@/lib/i18n/serviceBodies/electrical-system';

export default function ElectricalSystemContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={electricalSystemBodyCopy}
      icons={[Zap, Battery, AlertTriangle]}
      image={PHOTOS.teamInspect}
      processBgImage={PHOTOS.teamInspect}
    />
  );
}
