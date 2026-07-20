'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/lib/language';

/** Keeps <html lang> in sync with the client language toggle. */
export default function DocumentLang() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
