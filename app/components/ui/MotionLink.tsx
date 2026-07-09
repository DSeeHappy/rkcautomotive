'use client';

import Link from 'next/link';
import type { ReactNode, ComponentProps } from 'react';
import { useGsapHoverPress } from '@/lib/useGsapHoverPress';
import { useRestoreTelHref } from '@/app/components/ui/PhoneLink';

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
  const { ref } = useGsapHoverPress<HTMLAnchorElement>({ hoverScale: 1.01 });
  const mergedClassName = [wrapperClassName, className].filter(Boolean).join(' ') || undefined;
  const hrefStr = typeof href === 'string' ? href : undefined;
  const isTel = hrefStr?.startsWith('tel:') ?? false;

  useRestoreTelHref(isTel ? hrefStr : undefined, ref);

  return (
    <a
      ref={ref}
      href={href}
      className={mergedClassName}
      {...(isTel ? { 'data-phone-link': '' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
