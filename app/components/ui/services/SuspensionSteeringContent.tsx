'use client';

import { Settings, Gauge, AlertTriangle } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { suspensionSteeringBodyCopy } from '@/lib/i18n/serviceBodies/suspension-steering';

export default function SuspensionSteeringContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={suspensionSteeringBodyCopy}
      icons={[Settings, Gauge, AlertTriangle]}
      image={PHOTOS.techCloseup}
      processBgImage={PHOTOS.techCloseup}
    />
  );
}
