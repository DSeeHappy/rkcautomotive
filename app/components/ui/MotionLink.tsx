'use client';

import Link from 'next/link';
import type { ReactNode, ComponentProps } from 'react';
import { useGsapHoverPress } from '@/lib/useGsapHoverPress';

type MotionLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  className?: string;
};

/** Premium hover: subtle lift + opacity settle */
export function MotionLink({ children, className, ...props }: MotionLinkProps) {
  const { ref, reduce } = useGsapHoverPress<HTMLDivElement>({ hoverScale: 1 });

  if (reduce) {
    return (
      <Link className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <div ref={ref} className="inline-flex">
      <Link className={className} {...props}>
        {children}
      </Link>
    </div>
  );
}

type MotionAnchorProps = {
  href: string;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
};

export function MotionAnchor({ href, children, className, ...rest }: MotionAnchorProps) {
  const { ref, reduce } = useGsapHoverPress<HTMLDivElement>({ hoverScale: 1.01 });

  if (reduce) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <div ref={ref} className="inline-flex">
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    </div>
  );
}
