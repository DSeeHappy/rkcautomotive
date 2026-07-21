import Link from 'next/link';
import type { ReactNode } from 'react';

type CheckEngineHelpLinkProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Classic dashboard MIL (malfunction indicator lamp), outline style:
 * hollow engine block with chamfered left corners, T-shaped filler cap on top,
 * separate pulley/fan bar front-left with connector stub, and a stepped
 * two-arm claw with an angular notch on the right. Thick stroke so it reads at 20px.
 */
function CheckEngineMilIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 34 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M11 5.5H19.5L22 8H28.5L30 9.5V11H27L25.5 13L27 15H30V17.5L28.5 19H23L21.5 20.5H11L8 17.5V8.5Z" />
      <path d="M15 5.5V2.5M11.5 2H18.5" />
      <path d="M4 8V18M4 13H8" />
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
