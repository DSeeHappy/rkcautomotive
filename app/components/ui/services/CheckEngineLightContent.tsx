'use client';

import { AlertCircle, Zap, Gauge } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import { CHECK_ENGINE_HERO_VIDEO } from '@/lib/photos';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { checkEngineLightBodyCopy } from '@/lib/i18n/serviceBodies/check-engine-light';

export default function CheckEngineLightContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={checkEngineLightBodyCopy}
      icons={[AlertCircle, Zap, Gauge]}
      image={CHECK_ENGINE_HERO_VIDEO.poster}
      heroVideo={CHECK_ENGINE_HERO_VIDEO}
      realityImage={PHOTOS.engineRebuild}
      processBgImage={PHOTOS.engineRebuild}
    />
  );
}
