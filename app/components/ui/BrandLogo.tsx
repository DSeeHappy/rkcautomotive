type BrandLogoProps = {
  slug: string;
  color: string;
  size?: number;
  className?: string;
  /** Override path (e.g. PNG silhouette). Defaults to `/images/brands/{slug}.svg`. */
  src?: string;
};

export default function BrandLogo({ slug, color, size = 32, className = '', src }: BrandLogoProps) {
  const maskSrc = src ?? `/images/brands/${slug}.svg`;

  return (
    <span
      className={`inline-block shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        WebkitMaskImage: `url(${maskSrc})`,
        maskImage: `url(${maskSrc})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        // Alpha mode so black-on-transparent PNG/SVG silhouettes reveal brand color
        maskMode: 'alpha',
      }}
      aria-hidden
    />
  );
}
