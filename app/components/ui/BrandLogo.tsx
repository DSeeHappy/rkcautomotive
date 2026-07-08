type BrandLogoProps = {
  slug: string;
  color: string;
  size?: number;
  className?: string;
};

export default function BrandLogo({ slug, color, size = 32, className = '' }: BrandLogoProps) {
  const src = `/images/brands/${slug}.svg`;

  return (
    <span
      className={`inline-block shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      }}
      aria-hidden
    />
  );
}
