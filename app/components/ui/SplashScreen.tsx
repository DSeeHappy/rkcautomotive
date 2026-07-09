'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { RKC_LOGO_VIDEO_MP4, RKC_LOGO_VIDEO_WEBM } from '@/lib/logo';

const SPLASH_SESSION_KEY = 'rkc-splash-seen';

/** Start overlay fade this long before the video ends (covers final explosion frames) */
const FADE_BEFORE_END_MS = 1400;
/** Fallback if duration metadata is unavailable */
const FALLBACK_PREFADE_MS = 4800;
/** Entire splash overlay fade-out to homepage */
const SPLASH_EXIT_MS = 550;
/** Skip button appears after intro has started */
const SKIP_APPEAR_MS = 1500;

/** Full-bleed cover; scale down slightly on portrait phones so logo + AUTOMOTIVE stay visible */
const VIDEO_CLASS =
  'h-full w-full origin-center object-cover object-center select-none max-sm:scale-[0.88] sm:scale-100';

type Phase = 'checking' | 'playing' | 'done';

type SplashScreenProps = {
  children: React.ReactNode;
};

function pauseVideo(video: HTMLVideoElement | null) {
  video?.pause();
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const [phase, setPhase] = useState<Phase>('checking');
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

    setPhase('playing');
    document.body.style.overflow = 'hidden';
    schedulePrefade(FALLBACK_PREFADE_MS);

    return () => {
      clearTimers();
      document.body.style.overflow = '';
    };
  }, [clearTimers, schedulePrefade]);

  useEffect(() => {
    if (phase !== 'playing') return;

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

    if (video.readyState >= 1) onLoadedMetadata();

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('ended', onEnded);
    };
  }, [phase, schedulePrefade, startHandoff]);

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
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              preload="auto"
              className={VIDEO_CLASS}
              aria-hidden
            >
              <source src={RKC_LOGO_VIDEO_WEBM} type="video/webm" />
              <source src={RKC_LOGO_VIDEO_MP4} type="video/mp4" />
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
