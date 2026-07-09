'use client';

import Link from 'next/link';

export type BreadcrumbItem = { label: string; href?: string };

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
  variant?: 'light' | 'dark';
};

export default function Breadcrumbs({ items, className = '', variant = 'light' }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  const linkClass = variant === 'light' ? 'hover:text-white' : 'hover:text-primary-green';
  const mutedClass = variant === 'light' ? 'text-white/60' : 'text-ink-muted';
  const currentClass = variant === 'light' ? 'text-white' : 'text-foreground';
  const separatorClass = variant === 'light' ? 'text-white/30' : 'text-ink-muted/40';

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={`flex flex-wrap items-center gap-2 text-sm ${mutedClass}`}>
        {items.map((crumb, i) => (
          <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
            {i > 0 && <span className={separatorClass}>/</span>}
            {crumb.href ? (
              <Link href={crumb.href} className={linkClass}>
                {crumb.label}
              </Link>
            ) : (
              <span className={currentClass}>{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
