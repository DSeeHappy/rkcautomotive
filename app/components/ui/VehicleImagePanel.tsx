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

      <div className="relative flex flex-1 items-center justify-center p-6 sm:p-8">
        <Image
          src={imageSrc}
          alt={alt}
          width={1600}
          height={900}
          onError={handleError}
          className="relative z-10 h-auto max-h-[min(52vh,420px)] w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
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
          <p className="mt-2 text-xs text-white/70">Photo reference — schedule service for your exact {model}</p>
        )}
      </div>
    </div>
  );
}
