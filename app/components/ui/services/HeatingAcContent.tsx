'use client';

import { Wind, Thermometer, Snowflake } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { heatingAcBodyCopy } from '@/lib/i18n/serviceBodies/heating-ac';

export default function HeatingAcContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={heatingAcBodyCopy}
      icons={[Wind, Thermometer, Snowflake]}
      image={PHOTOS.interior}
      processBgImage={PHOTOS.interior}
    />
  );
}
