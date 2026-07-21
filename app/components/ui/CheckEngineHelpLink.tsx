import Link from 'next/link';
import type { ReactNode } from 'react';

type CheckEngineHelpLinkProps = {
  children: ReactNode;
  className?: string;
};

/** MIL-style engine outline — matches dashboard check-engine lamp silhouette. */
function CheckEngineMilIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M7 11h10v5H7z" />
      <path d="M9 11V8.5A1.25 1.25 0 0 1 10.25 7.25h1.5A1.25 1.25 0 0 1 13 8.5V11" />
      <path d="M11 11V8.5A1.25 1.25 0 0 1 12.25 7.25h1.5A1.25 1.25 0 0 1 15 8.5V11" />
      <path d="M9.5 16v1.75M14.5 16v1.75" />
      <path d="M7 13.5H5.75a1 1 0 0 0-1 1V15a1 1 0 0 0 1 1H7M17 13.5h1.25a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H17" />
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
      <CheckEngineMilIcon className="cel-mil-icon size-3.5 shrink-0 text-amber-400" />
      {children}
    </Link>
  );
}
