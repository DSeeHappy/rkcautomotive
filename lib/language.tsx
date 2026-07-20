'use client';

/**
 * Client EN|ES UX toggle only. SSR/metadata stay English; see `lib/i18n/localeSeo.ts`.
 * Do not add hreflang until distinct `/es` (or equivalent) URLs exist.
 */
import {
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
  type ReactNode,
} from 'react';

export type Lang = 'en' | 'es';

const STORAGE_KEY = 'rkc-lang';
const LANG_CHANGE = 'rkc-lang-change';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  ready: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') return stored;
  } catch {
    /* private mode / blocked storage */
  }
  return 'en';
}

function subscribeLang(onStoreChange: () => void) {
  window.addEventListener(LANG_CHANGE, onStoreChange);
  window.addEventListener('storage', onStoreChange);
  return () => {
    window.removeEventListener(LANG_CHANGE, onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribeLang, readStoredLang, () => 'en' as Lang);
  const ready = useSyncExternalStore(subscribeLang, () => true, () => false);

  const setLang = useCallback((next: Lang) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(LANG_CHANGE));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, ready }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
