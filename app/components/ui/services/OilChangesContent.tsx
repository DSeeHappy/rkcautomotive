'use client';

import { Droplet, Gauge, Thermometer } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { oilChangesBodyCopy } from '@/lib/i18n/serviceBodies/oil-changes';

export default function OilChangesContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={oilChangesBodyCopy}
      icons={[Droplet, Gauge, Thermometer]}
      image={PHOTOS.teamCollab}
      processBgImage={PHOTOS.teamCollab}
    />
  );
}
