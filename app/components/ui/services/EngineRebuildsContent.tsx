'use client';

import { Cog, Gauge, Volume2 } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { engineRebuildsBodyCopy } from '@/lib/i18n/serviceBodies/engine-rebuilds';

export default function EngineRebuildsContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={engineRebuildsBodyCopy}
      icons={[Gauge, Cog, Volume2]}
      image={PHOTOS.engineRebuild}
      processBgImage={PHOTOS.engineBay}
    />
  );
}
