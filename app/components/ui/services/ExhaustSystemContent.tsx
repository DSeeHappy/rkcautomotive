'use client';

import { Volume2, Wind, AlertTriangle } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { exhaustSystemBodyCopy } from '@/lib/i18n/serviceBodies/exhaust-system';

export default function ExhaustSystemContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={exhaustSystemBodyCopy}
      icons={[Volume2, Wind, AlertTriangle]}
      image={PHOTOS.undercarriage}
      processBgImage={PHOTOS.undercarriage}
    />
  );
}
