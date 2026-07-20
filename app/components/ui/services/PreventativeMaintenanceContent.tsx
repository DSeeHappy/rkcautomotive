'use client';

import { ShieldCheck, CalendarCheck, Gauge } from 'lucide-react';
import { PHOTOS } from '@/lib/constants';
import LocalizedSharedServiceContent from './LocalizedSharedServiceContent';
import { preventativeMaintenanceBodyCopy } from '@/lib/i18n/serviceBodies/preventative-maintenance';

export default function PreventativeMaintenanceContent() {
  return (
    <LocalizedSharedServiceContent
      bodyCopy={preventativeMaintenanceBodyCopy}
      icons={[ShieldCheck, CalendarCheck, Gauge]}
      image={PHOTOS.brandedBay}
      processBgImage={PHOTOS.brandedBay}
    />
  );
}
