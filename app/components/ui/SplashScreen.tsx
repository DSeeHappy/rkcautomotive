'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { getSplashVideoSources } from '@/lib/logo';

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
/** Hard cap — splash always exits even if video is broken */
const MAX_SPLASH_MS = 3000;
/** If React is still in checking, force homepage (no timers were scheduled yet) */
const CHECKING_PHASE_MAX_MS = 800;
/** If video has not started by then, hand off anyway */
const VIDEO_START_TIMEOUT_MS = 2500;
const MOBILE_VIDEO_START_TIMEOUT_MS = 1800;
/** Quick exit when video errors */
const VIDEO_ERROR_EXIT_MS = 800;

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
  if (document.documentElement.dataset.splash === 'skip') return 'done';
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

function safeGetSession(key: string): string | null {
  try {
    return sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetSession(key: string, value: string): void {
  try {
    sessionStorage.setItem(key, value);
  } catch {
    /* private browsing / storage blocked */
  }
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const [phase, setPhase] = useState<Phase>(getInitialPhase);
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
  const forceDismissRef = useRef<number | null>(null);
  const mobileRef = useRef(isMobileViewport());

  const fadeBeforeEndMs = mobileRef.current ? MOBILE_FADE_BEFORE_END_MS : FADE_BEFORE_END_MS;
  const fallbackPrefadeMs = mobileRef.current ? MOBILE_FALLBACK_PREFADE_MS : FALLBACK_PREFADE_MS;
  const skipAppearMs = mobileRef.current ? MOBILE_SKIP_APPEAR_MS : SKIP_APPEAR_MS;
  const videoStartTimeoutMs = mobileRef.current
    ? MOBILE_VIDEO_START_TIMEOUT_MS
    : VIDEO_START_TIMEOUT_MS;

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
    if (forceDismissRef.current !== null) {
      window.clearTimeout(forceDismissRef.current);
      forceDismissRef.current = null;
    }
    safeSetSession(SPLASH_SESSION_KEY, '1');
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

  const scheduleForceDismiss = useCallback(() => {
    if (forceDismissRef.current !== null) return;
    forceDismissRef.current = window.setTimeout(() => finishSplash(), MAX_SPLASH_MS);
  }, [finishSplash]);

  const beginSplash = useCallback(() => {
    document.body.style.overflow = 'hidden';
    schedulePrefade(fallbackPrefadeMs);
    scheduleForceDismiss();
  }, [fallbackPrefadeMs, scheduleForceDismiss, schedulePrefade]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      if (!dismissedRef.current) finishSplash();
    }, MAX_SPLASH_MS);
    return () => window.clearTimeout(id);
  }, [finishSplash]);

  useEffect(() => {
    if (phase !== 'checking') return;

    const checkingTimeout = window.setTimeout(() => {
      if (dismissedRef.current) return;
      setPhase('done');
      document.body.style.overflow = '';
      dispatchSplashReady();
    }, CHECKING_PHASE_MAX_MS);

    const seen = safeGetSession(SPLASH_SESSION_KEY);
    if (seen) {
      window.clearTimeout(checkingTimeout);
      setPhase('done');
      dispatchSplashReady();
      return;
    }

    if (shouldSkipSplashEntirely()) {
      window.clearTimeout(checkingTimeout);
      safeSetSession(SPLASH_SESSION_KEY, '1');
      setPhase('done');
      dispatchSplashReady();
      return;
    }

    setPhase('playing');
    beginSplash();

    return () => {
      window.clearTimeout(checkingTimeout);
      clearTimers();
      document.body.style.overflow = '';
    };
  }, [phase, beginSplash, clearTimers]);

  useEffect(() => {
    if (phase === 'done') {
      dispatchSplashReady();
    }
  }, [phase]);

  useEffect(() => {
    if (phase !== 'playing') return;

    scheduleForceDismiss();

    const video = videoRef.current;
    if (!video) {
      schedulePrefade(600);
      return;
    }

    let videoStarted = false;

    const markStarted = () => {
      videoStarted = true;
    };

    const tryPlay = () => {
      void video.play().then(markStarted).catch(() => {
        /* video start timeout / error handlers will exit splash */
      });
    };

    const onLoadedMetadata = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      const prefadeMs = Math.max(
        skipAppearMs + 200,
        video.duration * 1000 - fadeBeforeEndMs,
      );
      prefadeAtMsRef.current = prefadeMs;
      schedulePrefade(prefadeMs);
    };

    const onCanPlay = () => {
      tryPlay();
    };

    const onPlaying = () => {
      markStarted();
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
      schedulePrefade(VIDEO_ERROR_EXIT_MS);
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('canplaythrough', onCanPlay);
    video.addEventListener('playing', onPlaying);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('ended', onEnded);
    video.addEventListener('error', onError);

    addTimer(() => {
      if (!videoStarted) {
        schedulePrefade(Math.min(fallbackPrefadeMs, 1200));
      }
    }, videoStartTimeoutMs);

    if (video.readyState >= 1) onLoadedMetadata();
    if (video.readyState >= 2) onCanPlay();
    tryPlay();

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('canplaythrough', onCanPlay);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('error', onError);
    };
  }, [
    phase,
    schedulePrefade,
    scheduleForceDismiss,
    startHandoff,
    skipAppearMs,
    fadeBeforeEndMs,
    fallbackPrefadeMs,
    videoStartTimeoutMs,
    addTimer,
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
        />
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
              autoPlay
              muted
              playsInline
              preload="auto"
              // @ts-expect-error fetchPriority is valid on video in modern browsers
              fetchPriority="high"
              className={VIDEO_CLASS}
              aria-hidden
            >
              {videoSources.map((source) => (
                <source key={source.src} src={source.src} type={source.type} />
              ))}
            </video>
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
