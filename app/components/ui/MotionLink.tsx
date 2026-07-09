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

type MotionAnchorProps = Omit<ComponentProps<'a'>, 'children'> & {
  children: ReactNode;
  /** @deprecated Applied to the anchor — wrapper div removed so href clicks are never blocked */
  wrapperClassName?: string;
};

export function MotionAnchor({
  href,
  children,
  className,
  wrapperClassName,
  ...rest
}: MotionAnchorProps) {
  const { ref, reduce } = useGsapHoverPress<HTMLAnchorElement>({ hoverScale: 1.01 });
  const mergedClassName = [wrapperClassName, className].filter(Boolean).join(' ') || undefined;

  return (
    <a ref={reduce ? undefined : ref} href={href} className={mergedClassName} {...rest}>
      {children}
    </a>
  );
}
