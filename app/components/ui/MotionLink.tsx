'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode, ComponentProps } from 'react';

type MotionLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  className?: string;
};

/** Premium hover: subtle lift + opacity settle */
export function MotionLink({ children, className, ...props }: MotionLinkProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Link className={className} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>
      <Link className={className} {...props}>
        {children}
      </Link>
    </motion.div>
  );
}

type MotionAnchorProps = {
  href: string;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
};

export function MotionAnchor({ href, children, className, ...rest }: MotionAnchorProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      className={className}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
