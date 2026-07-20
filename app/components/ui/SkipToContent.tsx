'use client';

import { useLanguage } from '@/lib/language';
import { siteCopy } from '@/lib/siteCopy';

export default function SkipToContent() {
  const { lang } = useLanguage();
  const label = siteCopy(lang).skipToContent;

  return (
    <a href="#main-content" className="sr-only">
      {label}
    </a>
  );
}
