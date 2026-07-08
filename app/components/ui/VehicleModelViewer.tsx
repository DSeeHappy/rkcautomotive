'use client';

import { Rotate3d } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState, type CSSProperties } from 'react';

type VehicleModelViewerProps = {
  modelUrl: string;
  fallbackImageSrc: string;
  alt: string;
  brandColor: string;
};

export default function VehicleModelViewer({
  modelUrl,
  fallbackImageSrc,
  alt,
  brandColor,
}: VehicleModelViewerProps) {
  const [libraryReady, setLibraryReady] = useState(false);
  const [modelReady, setModelReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const viewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;

    import('@google/model-viewer')
      .then(() => {
        if (!cancelled) setLibraryReady(true);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    setModelReady(false);
    setFailed(false);
  }, [modelUrl]);

  useEffect(() => {
    if (!libraryReady || failed) return;

    const el = viewerRef.current;
    if (!el) return;

    const onLoad = () => setModelReady(true);
    const onError = () => setFailed(true);

    el.addEventListener('load', onLoad);
    el.addEventListener('error', onError);

    return () => {
      el.removeEventListener('load', onLoad);
      el.removeEventListener('error', onError);
    };
  }, [libraryReady, failed, modelUrl]);

  if (failed) {
    return (
      <div className="relative flex h-full min-h-[280px] w-full flex-col bg-[#080d18] sm:min-h-[360px] lg:min-h-0">
        <Image src={fallbackImageSrc} alt={alt} fill className="object-cover opacity-80" sizes="45vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-[#0c1222]/30 to-transparent" />
        <p className="absolute bottom-4 left-0 right-0 px-4 text-center text-xs text-white/90">
          3D preview unavailable — showing photo instead
        </p>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[280px] w-full flex-col bg-[#080d18] sm:min-h-[360px] lg:min-h-0">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse at 50% 85%, color-mix(in srgb, ${brandColor} 35%, transparent) 0%, transparent 65%)`,
        }}
        aria-hidden
      />

      {!modelReady && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#080d18]">
          <div
            className="size-10 animate-spin rounded-full border-2 border-white/15 border-t-white/70"
            aria-hidden
          />
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/90">Loading 3D model</p>
        </div>
      )}

      {libraryReady && (
        <model-viewer
          ref={viewerRef}
          src={modelUrl}
          alt={alt}
          camera-controls
          auto-rotate
          auto-rotate-delay="0"
          rotation-per-second="25deg"
          shadow-intensity="1.2"
          environment-image="neutral"
          exposure="1.05"
          loading="lazy"
          interaction-prompt="auto"
          touch-action="pan-y"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '280px',
            backgroundColor: 'transparent',
          } as CSSProperties}
        />
      )}

      <div className="pointer-events-none absolute bottom-4 left-0 right-0 flex items-center justify-center gap-1.5 px-4">
        <Rotate3d className="size-3.5 text-white/90" aria-hidden />
        <p className="text-xs text-white/90">Drag to rotate · Scroll to zoom</p>
      </div>
    </div>
  );
}
