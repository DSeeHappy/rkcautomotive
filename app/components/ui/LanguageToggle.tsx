'use client';

import { useLanguage, type Lang } from '@/lib/language';
import { homeCopy } from '@/lib/homeCopy';

type LanguageToggleProps = {
  /** Visual style for hero (light on dark) vs nav/chrome (adapts to scrolled). */
  variant?: 'hero' | 'nav';
  scrolled?: boolean;
  className?: string;
};

const OPTIONS: Lang[] = ['en', 'es'];

export default function LanguageToggle({
  variant = 'hero',
  scrolled = false,
  className = '',
}: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();
  const copy = homeCopy(lang);

  const shell =
    variant === 'hero'
      ? 'border-white/25 bg-white/10 backdrop-blur-sm'
      : scrolled
        ? 'border-[color:var(--line)] bg-white/90'
        : 'border-white/25 bg-white/10 backdrop-blur-sm';

  const idle =
    variant === 'hero' || !scrolled
      ? 'text-white/70 hover:text-white'
      : 'text-ink-muted hover:text-foreground';

  const active =
    variant === 'hero' || !scrolled
      ? 'bg-primary-green text-white shadow-[0_8px_20px_-10px_rgba(14,133,54,0.8)]'
      : 'bg-primary-green text-white';

  return (
    <div
      role="group"
      aria-label={copy.langToggle.aria}
      className={`inline-flex items-center rounded-full border p-0.5 ${shell} ${className}`}
    >
      {OPTIONS.map((option) => {
        const selected = lang === option;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={selected}
            onClick={() => setLang(option)}
            className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] transition-colors ${
              selected ? active : idle
            }`}
          >
            {option === 'en' ? copy.langToggle.en : copy.langToggle.es}
          </button>
        );
      })}
    </div>
  );
}
