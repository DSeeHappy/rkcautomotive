'use client';

import Image from 'next/image';
import { useState } from 'react';
import { getCategoryImage, type VehicleType } from '@/lib/vehicleModels';

type VehicleImagePanelProps = {
  src: string;
  remoteFallbackSrc?: string;
  alt: string;
  brandColor: string;
  brandName: string;
  model: string;
  yearRange?: string;
  fallbackType: VehicleType;
  isRepresentative?: boolean;
  fillImage?: boolean;
  fullBleed?: boolean;
};

function isRemoteSrc(src: string): boolean {
  return src.startsWith('http://') || src.startsWith('https://');
}

export default function VehicleImagePanel({
  src,
  remoteFallbackSrc,
  alt,
  brandColor,
  brandName,
  model,
  yearRange,
  fallbackType,
  isRepresentative = false,
  fillImage = false,
  fullBleed = false,
}: VehicleImagePanelProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [fallbackStage, setFallbackStage] = useState<'primary' | 'remote' | 'category'>('primary');

  function handleError() {
    if (
      fallbackStage === 'primary' &&
      remoteFallbackSrc &&
      isRemoteSrc(remoteFallbackSrc) &&
      imageSrc !== remoteFallbackSrc
    ) {
      setImageSrc(remoteFallbackSrc);
      setFallbackStage('remote');
      return;
    }

    if (fallbackStage !== 'category') {
      setImageSrc(getCategoryImage(fallbackType));
      setFallbackStage('category');
    }
  }

  const remote = isRemoteSrc(imageSrc);

  if (fullBleed) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[#080d18]">
        <Image
          src={imageSrc}
          alt={alt}
          width={1600}
          height={900}
          onError={handleError}
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
          priority={!remote}
          unoptimized={remote}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background: `radial-gradient(ellipse at 30% 80%, color-mix(in srgb, ${brandColor} 28%, transparent) 0%, transparent 65%)`,
          }}
        />
        {isRepresentative && (
          <span className="absolute right-16 top-4 z-20 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80 sm:right-20">
            Representative photo
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[280px] w-full flex-col overflow-hidden bg-[#080d18] sm:min-h-[360px] lg:min-h-0">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(ellipse at 50% 88%, color-mix(in srgb, ${brandColor} 42%, transparent) 0%, transparent 68%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1222] via-[#0c1222]/20 to-[#0c1222]/40"
        aria-hidden
      />

      <div
        className={
          fillImage
            ? 'relative min-h-0 flex-1 overflow-hidden'
            : 'relative flex flex-1 items-center justify-center p-6 sm:p-8'
        }
      >
        {isRepresentative && (
          <span className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80">
            Representative photo
          </span>
        )}
        <Image
          src={imageSrc}
          alt={alt}
          width={1600}
          height={900}
          onError={handleError}
          className={
            fillImage
              ? 'absolute inset-0 z-10 h-full w-full object-cover'
              : 'relative z-10 h-auto max-h-[min(52vh,420px)] w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]'
          }
          sizes="(max-width: 1024px) 100vw, 45vw"
          priority={!remote}
          unoptimized={remote}
        />
      </div>

      <div className="relative z-10 border-t border-white/10 px-6 py-4 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
          {brandName} · {yearRange ?? 'Factory service'}
        </p>
        <p className="mt-1 text-sm text-white/90">{model}</p>
        {fallbackStage === 'category' && (
          <p className="mt-2 text-xs text-white/70">Representative image — schedule service for your exact {model}</p>
        )}
      </div>
    </div>
  );
}
