'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  RKC_LOGO_CARD_SIZE,
  RKC_LOGO_CARD_WEBP,
  RKC_LOGO_VIDEO_MP4,
  RKC_LOGO_VIDEO_WEBM,
} from '@/lib/logo';

const SPLASH_SESSION_KEY = 'rkc-splash-seen';

/** Start overlay fade this long before the video ends (covers final explosion frames) */
const FADE_BEFORE_END_MS = 1400;
/** Fallback if duration metadata is unavailable */
const FALLBACK_PREFADE_MS = 4800;
/** Static logo splash duration (mobile / poster fallback) */
const STATIC_SPLASH_MS = 2800;
/** Entire splash overlay fade-out to homepage */
const SPLASH_EXIT_MS = 550;
/** Skip button appears after intro has started */
const SKIP_APPEAR_MS = 1500;
/** Defer video download until after hero LCP window */
const VIDEO_DEFER_IDLE_MS = 2500;
const VIDEO_DEFER_FALLBACK_MS = 2000;

/** Full-bleed cover; scale down slightly on portrait phones so logo + AUTOMOTIVE stay visible */
const VIDEO_CLASS =
  'h-full w-full origin-center object-cover object-center select-none max-sm:scale-[0.88] sm:scale-100';

type Phase = 'checking' | 'playing' | 'done';
type SplashMode = 'video' | 'static';

type SplashScreenProps = {
  children: React.ReactNode;
};

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

function shouldSkipSplashEntirely(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true;
  const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  if (conn?.saveData) return true;
  const speed = conn?.effectiveType;
  return speed === 'slow-2g' || speed === '2g';
}

function shouldUseStaticSplash(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(max-width: 639px)').matches;
}

function pauseVideo(video: HTMLVideoElement | null) {
  video?.pause();
}

function SplashPoster({ className = '' }: { className?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={`flex h-full w-full items-center justify-center bg-black ${className}`}>
      <Image
        src={RKC_LOGO_CARD_WEBP}
        alt=""
        width={RKC_LOGO_CARD_SIZE}
        height={RKC_LOGO_CARD_SIZE}
        aria-hidden
        className={`h-auto w-[min(56vw,220px)] rounded-2xl shadow-[0_10px_32px_-8px_rgba(0,0,0,0.55)] transition-opacity duration-700 ease-out sm:w-[min(40vw,280px)] ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        sizes="(max-width: 640px) 220px, 280px"
      />
    </div>
  );
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const [phase, setPhase] = useState<Phase>('checking');
  const [splashMode, setSplashMode] = useState<SplashMode>('video');
  const [videoReady, setVideoReady] = useState(false);
  const [splashExiting, setSplashExiting] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const dismissedRef = useRef(false);
  const handoffStartedRef = useRef(false);
  const prefadeAtMsRef = useRef(FALLBACK_PREFADE_MS);
  const timersRef = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  }, []);

  const addTimer = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  const finishSplash = useCallback(() => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    clearTimers();
    sessionStorage.setItem(SPLASH_SESSION_KEY, '1');
    setShowSkip(false);
    pauseVideo(videoRef.current);
    setSplashExiting(true);
    addTimer(() => {
      setPhase('done');
      document.body.style.overflow = '';
    }, SPLASH_EXIT_MS);
  }, [addTimer, clearTimers]);

  const startHandoff = useCallback(() => {
    if (dismissedRef.current || handoffStartedRef.current) return;
    handoffStartedRef.current = true;
    pauseVideo(videoRef.current);
    finishSplash();
  }, [finishSplash]);

  const dismiss = useCallback(() => {
    if (dismissedRef.current) return;
    handoffStartedRef.current = true;
    finishSplash();
  }, [finishSplash]);

  const schedulePrefade = useCallback(
    (delayMs: number) => {
      clearTimers();
      addTimer(() => setShowSkip(true), SKIP_APPEAR_MS);
      addTimer(() => startHandoff(), delayMs);
    },
    [addTimer, clearTimers, startHandoff],
  );

  useEffect(() => {
    const seen = sessionStorage.getItem(SPLASH_SESSION_KEY);
    if (seen) {
      setPhase('done');
      return;
    }

    if (shouldSkipSplashEntirely()) {
      sessionStorage.setItem(SPLASH_SESSION_KEY, '1');
      setPhase('done');
      return;
    }

    const mode = shouldUseStaticSplash() ? 'static' : 'video';
    setSplashMode(mode);
    setPhase('playing');
    document.body.style.overflow = 'hidden';
    schedulePrefade(mode === 'static' ? STATIC_SPLASH_MS : FALLBACK_PREFADE_MS);

    return () => {
      clearTimers();
      document.body.style.overflow = '';
    };
  }, [clearTimers, schedulePrefade]);

  useEffect(() => {
    if (phase !== 'playing' || splashMode !== 'video') return;

    const enableVideo = () => setVideoReady(true);
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(enableVideo, { timeout: VIDEO_DEFER_IDLE_MS });
      return () => window.cancelIdleCallback(id);
    }

    const id = window.setTimeout(enableVideo, VIDEO_DEFER_FALLBACK_MS);
    return () => window.clearTimeout(id);
  }, [phase, splashMode]);

  useEffect(() => {
    if (phase !== 'playing' || splashMode !== 'video' || !videoReady) return;

    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      const prefadeMs = Math.max(
        SKIP_APPEAR_MS + 200,
        video.duration * 1000 - FADE_BEFORE_END_MS,
      );
      prefadeAtMsRef.current = prefadeMs;
      schedulePrefade(prefadeMs);
    };

    const onTimeUpdate = () => {
      if (video.currentTime * 1000 >= prefadeAtMsRef.current) {
        startHandoff();
      }
    };

    const onEnded = () => {
      startHandoff();
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);
    void video.play().catch(() => startHandoff());

    if (video.readyState >= 1) onLoadedMetadata();

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, [phase, splashMode, videoReady, schedulePrefade, startHandoff]);

  if (phase === 'done') {
    return <>{children}</>;
  }

  return (
    <>
      {children}

      {phase === 'checking' ? (
        <div
          className="fixed inset-0 z-[9999] h-screen w-screen bg-[#000000]"
          aria-busy="true"
          aria-label="Loading RKC Automotive"
        />
      ) : (
        <div
          id="splash-screen"
          className={`fixed inset-0 z-[9999] h-screen w-screen overflow-hidden bg-[#000000] transition-opacity ease-out ${
            splashExiting ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
          style={{ transitionDuration: `${SPLASH_EXIT_MS}ms` }}
          role="dialog"
          aria-label="RKC Automotive intro"
          aria-hidden={splashExiting || undefined}
        >
          <div className="absolute inset-0 overflow-hidden bg-black">
            {splashMode === 'static' ? (
              <SplashPoster />
            ) : videoReady ? (
              <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                className={VIDEO_CLASS}
                aria-hidden
              >
                <source src={RKC_LOGO_VIDEO_WEBM} type="video/webm" />
                <source src={RKC_LOGO_VIDEO_MP4} type="video/mp4" />
              </video>
            ) : (
              <SplashPoster />
            )}
          </div>

          <button
            type="button"
            onClick={dismiss}
            className={`absolute top-6 right-6 z-10 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-white/10 hover:text-white sm:top-8 sm:right-8 ${
              showSkip && !splashExiting
                ? 'opacity-100'
                : 'pointer-events-none opacity-0'
            }`}
          >
            Skip Intro
          </button>
        </div>
      )}
    </>
  );
}
