'use client';

import { AlertCircle, Zap, Gauge } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { checkEngineLightBodyCopy } from '@/lib/i18n/serviceBodies/check-engine-light';

export default function CheckEngineLightContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={checkEngineLightBodyCopy}
      icons={[AlertCircle, Zap, Gauge]}
      image={PHOTOS.engineRebuild}
      processBgImage={PHOTOS.engineRebuild}
    />
  );
}
