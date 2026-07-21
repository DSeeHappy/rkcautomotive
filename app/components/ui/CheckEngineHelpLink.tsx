import Link from 'next/link';
import type { ReactNode } from 'react';

type CheckEngineHelpLinkProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Classic dashboard MIL (malfunction indicator lamp) engine silhouette:
 * filler-cap bump on top, slanted top-right, fan/pulley bar front-left,
 * outlet bar on the right, two mount feet below. Filled so it reads at small size.
 */
function CheckEngineMilIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 26 18" fill="currentColor" className={className} aria-hidden>
      <path d="M5 4H9V1H12V4H14L17 6H21V7H24V5H26V12H24V9H21V14H19V17H16V14H10V17H7V14H5V9.5H2V12H0V5H2V7.5H5Z" />
    </svg>
  );
}

/** Hero warning-card link with a blinking check-engine lamp icon. */
export default function CheckEngineHelpLink({ children, className }: CheckEngineHelpLinkProps) {
  return (
    <Link
      href="/services/check-engine-light-englewood-co"
      className={
        className ??
        'inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline'
      }
    >
      <CheckEngineMilIcon className="cel-mil-icon h-5 w-auto shrink-0 text-amber-400" />
      {children}
    </Link>
  );
}
