import { ExternalLink } from 'lucide-react';
import { DIRECTORY_LINKS, SOCIAL_LINKS } from '@/lib/constants';

type SocialLinksProps = {
  variant?: 'light' | 'dark';
  showDirectories?: boolean;
  className?: string;
};

export default function SocialLinks({
  variant = 'dark',
  showDirectories = true,
  className = '',
}: SocialLinksProps) {
  const linkClass =
    variant === 'light'
      ? 'border-white/15 bg-white/5 text-white/70 hover:border-primary-green/50 hover:bg-primary-green/20 hover:text-white'
      : 'border-[color:var(--line)] bg-white text-foreground hover:border-primary-green/40 hover:text-primary-green';

  const links = showDirectories ? [...SOCIAL_LINKS, ...DIRECTORY_LINKS] : SOCIAL_LINKS;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${linkClass}`}
        >
          {link.label}
          <ExternalLink className="size-3 opacity-60" aria-hidden />
        </a>
      ))}
    </div>
  );
}
