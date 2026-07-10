'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  getSplashVideoSources,
  RKC_LOGO_CARD_SIZE,
  RKC_LOGO_CARD_WEBP,
} from '@/lib/logo';

const SPLASH_SESSION_KEY = 'rkc-splash-seen';
export const SPLASH_READY_EVENT = 'rkc-splash-ready';

/** Start overlay fade this long before the video ends (covers final explosion frames) */
const FADE_BEFORE_END_MS = 1400;
const MOBILE_FADE_BEFORE_END_MS = 900;
/** Fallback if duration metadata is unavailable */
const FALLBACK_PREFADE_MS = 4800;
const MOBILE_FALLBACK_PREFADE_MS = 3000;
/** Entire splash overlay fade-out to homepage */
const SPLASH_EXIT_MS = 550;
/** Skip button appears after intro has started */
const SKIP_APPEAR_MS = 1500;
const MOBILE_SKIP_APPEAR_MS = 900;
/** Poster-only fallback when video cannot play */
const POSTER_FALLBACK_MS = 2200;
const MOBILE_POSTER_FALLBACK_MS = 1600;

/** Full-bleed cover; scale down slightly on portrait phones so logo + AUTOMOTIVE stay visible */
const VIDEO_CLASS =
  'h-full w-full origin-center object-cover object-center select-none max-sm:scale-[0.88] sm:scale-100';

type Phase = 'checking' | 'playing' | 'done';

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

function prefersMp4First(): boolean {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(max-width: 639px)').matches;
}

function getInitialPhase(): Phase {
  if (typeof document === 'undefined') return 'checking';
  const splash = document.documentElement.dataset.splash;
  if (splash === 'skip') return 'done';
  if (splash === 'play') return 'playing';
  return 'checking';
}

function isMobileViewport(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(max-width: 639px)').matches;
}

function pauseVideo(video: HTMLVideoElement | null) {
  video?.pause();
}

function dispatchSplashReady() {
  window.dispatchEvent(new Event(SPLASH_READY_EVENT));
}

function SplashPoster({ instant = false }: { instant?: boolean }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <Image
        src={RKC_LOGO_CARD_WEBP}
        alt=""
        width={RKC_LOGO_CARD_SIZE}
        height={RKC_LOGO_CARD_SIZE}
        priority
        fetchPriority="high"
        aria-hidden
        className={`h-auto w-[min(56vw,220px)] rounded-2xl shadow-[0_10px_32px_-8px_rgba(0,0,0,0.55)] sm:w-[min(40vw,280px)] ${
          instant ? 'opacity-100' : 'opacity-100'
        }`}
        sizes="(max-width: 640px) 220px, 280px"
      />
    </div>
  );
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const [phase, setPhase] = useState<Phase>(getInitialPhase);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [splashExiting, setSplashExiting] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [mp4First] = useState(prefersMp4First);

  const videoRef = useRef<HTMLVideoElement>(null);
  const dismissedRef = useRef(false);
  const handoffStartedRef = useRef(false);
  const prefadeAtMsRef = useRef(
    isMobileViewport() ? MOBILE_FALLBACK_PREFADE_MS : FALLBACK_PREFADE_MS,
  );
  const timersRef = useRef<number[]>([]);
  const mobileRef = useRef(isMobileViewport());

  const fadeBeforeEndMs = mobileRef.current ? MOBILE_FADE_BEFORE_END_MS : FADE_BEFORE_END_MS;
  const fallbackPrefadeMs = mobileRef.current ? MOBILE_FALLBACK_PREFADE_MS : FALLBACK_PREFADE_MS;
  const skipAppearMs = mobileRef.current ? MOBILE_SKIP_APPEAR_MS : SKIP_APPEAR_MS;
  const posterFallbackMs = mobileRef.current ? MOBILE_POSTER_FALLBACK_MS : POSTER_FALLBACK_MS;

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
      dispatchSplashReady();
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
      addTimer(() => setShowSkip(true), skipAppearMs);
      addTimer(() => startHandoff(), delayMs);
    },
    [addTimer, clearTimers, skipAppearMs, startHandoff],
  );

  useEffect(() => {
    if (phase !== 'checking') return;

    const seen = sessionStorage.getItem(SPLASH_SESSION_KEY);
    if (seen) {
      setPhase('done');
      dispatchSplashReady();
      return;
    }

    if (shouldSkipSplashEntirely()) {
      sessionStorage.setItem(SPLASH_SESSION_KEY, '1');
      setPhase('done');
      dispatchSplashReady();
      return;
    }

    setPhase('playing');
    document.body.style.overflow = 'hidden';
    schedulePrefade(fallbackPrefadeMs);

    return () => {
      clearTimers();
      document.body.style.overflow = '';
    };
  }, [phase, clearTimers, schedulePrefade, fallbackPrefadeMs]);

  useEffect(() => {
    if (phase === 'done') {
      dispatchSplashReady();
    }
  }, [phase]);

  useEffect(() => {
    if (phase !== 'playing') return;

    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      const prefadeMs = Math.max(
        skipAppearMs + 200,
        video.duration * 1000 - fadeBeforeEndMs,
      );
      prefadeAtMsRef.current = prefadeMs;
      schedulePrefade(prefadeMs);
    };

    const onCanPlayThrough = () => {
      setVideoPlaying(true);
      void video.play().catch(() => {
        /* keep poster visible; poster fallback timer handles exit */
      });
    };

    const onTimeUpdate = () => {
      if (video.currentTime * 1000 >= prefadeAtMsRef.current) {
        startHandoff();
      }
    };

    const onEnded = () => {
      startHandoff();
    };

    const onError = () => {
      schedulePrefade(posterFallbackMs);
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('canplaythrough', onCanPlayThrough);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);
    video.addEventListener('error', onError);

    video.load();

    if (video.readyState >= 1) onLoadedMetadata();
    if (video.readyState >= 4) onCanPlayThrough();

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('canplaythrough', onCanPlayThrough);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('error', onError);
    };
  }, [
    phase,
    schedulePrefade,
    startHandoff,
    skipAppearMs,
    fadeBeforeEndMs,
    posterFallbackMs,
  ]);

  if (phase === 'done') {
    return <>{children}</>;
  }

  const videoSources = getSplashVideoSources(mp4First);

  return (
    <>
      {children}

      {phase === 'checking' ? (
        <div
          className="fixed inset-0 z-[9999] h-screen w-screen bg-black"
          aria-busy="true"
          aria-label="Loading RKC Automotive"
        >
          <SplashPoster instant />
        </div>
      ) : (
        <div
          id="splash-screen"
          className={`fixed inset-0 z-[9999] h-screen w-screen overflow-hidden bg-black transition-opacity ease-out ${
            splashExiting ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
          style={{ transitionDuration: `${SPLASH_EXIT_MS}ms` }}
          role="dialog"
          aria-label="RKC Automotive intro"
          aria-hidden={splashExiting || undefined}
        >
          <div className="absolute inset-0 overflow-hidden bg-black">
            <video
              ref={videoRef}
              muted
              playsInline
              preload="metadata"
              // @ts-expect-error fetchPriority is valid on video in modern browsers
              fetchPriority="high"
              className={`${VIDEO_CLASS} transition-opacity duration-300 ${
                videoPlaying ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden
            >
              {videoSources.map((source) => (
                <source key={source.src} src={source.src} type={source.type} />
              ))}
            </video>

            {!videoPlaying && <SplashPoster instant />}
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
