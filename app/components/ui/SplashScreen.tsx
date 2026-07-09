'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  RKC_LOGO_CARD_SIZE,
  RKC_LOGO_CARD_WEBP,
  RKC_LOGO_VIDEO_MP4,
  RKC_LOGO_VIDEO_WEBM,
} from '@/lib/logo';

const STATIC_LOGO_SRC = RKC_LOGO_CARD_WEBP;

const SPLASH_SESSION_KEY = 'rkc-splash-seen';

/** Pre-fade when smoke has settled and logo is fully revealed (5.5–6s range) */
const PREFADE_TRIGGER_MS = 5750;
/** 1s cross-fade: video → static logo + site content */
const CROSSFADE_MS = 1000;
/** Brief hold on static logo before splash exits */
const HOLD_AFTER_CROSSFADE_MS = 700;
/** Final splash overlay fade-out */
const SPLASH_EXIT_MS = 600;
/** Skip button appears after intro has started */
const SKIP_APPEAR_MS = 1500;

const VIDEO_CLASS =
  'absolute inset-0 h-full w-full object-cover object-center select-none';

const STATIC_LOGO_CLASS =
  'max-h-[85vh] max-w-[92vw] w-auto h-auto rounded-2xl object-contain object-center select-none shadow-[0_16px_48px_-12px_rgba(0,0,0,0.65)]';

type Phase = 'checking' | 'playing' | 'done';

type SplashScreenProps = {
  children: React.ReactNode;
};

export default function SplashScreen({ children }: SplashScreenProps) {
  const [phase, setPhase] = useState<Phase>('checking');
  const [videoOpacity, setVideoOpacity] = useState(1);
  const [staticLogoOpacity, setStaticLogoOpacity] = useState(0);
  const [splashExiting, setSplashExiting] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const dismissedRef = useRef(false);
  const handoffStartedRef = useRef(false);
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
    setSplashExiting(true);
    addTimer(() => {
      setPhase('done');
      document.body.style.overflow = '';
    }, SPLASH_EXIT_MS);
  }, [addTimer, clearTimers]);

  const startHandoff = useCallback(() => {
    if (dismissedRef.current || handoffStartedRef.current) return;
    handoffStartedRef.current = true;

    setVideoOpacity(0);
    setStaticLogoOpacity(1);

    addTimer(() => {
      finishSplash();
    }, HOLD_AFTER_CROSSFADE_MS);
  }, [addTimer, finishSplash]);

  const dismiss = useCallback(() => {
    if (dismissedRef.current) return;
    handoffStartedRef.current = true;
    setVideoOpacity(0);
    setStaticLogoOpacity(0);
    finishSplash();
  }, [finishSplash]);

  useEffect(() => {
    const seen = sessionStorage.getItem(SPLASH_SESSION_KEY);
    if (seen) {
      setPhase('done');
      return;
    }

    setPhase('playing');
    document.body.style.overflow = 'hidden';

    addTimer(() => setShowSkip(true), SKIP_APPEAR_MS);
    addTimer(() => startHandoff(), PREFADE_TRIGGER_MS);

    return () => {
      clearTimers();
      document.body.style.overflow = '';
    };
  }, [addTimer, clearTimers, startHandoff]);

  useEffect(() => {
    if (phase !== 'playing') return;

    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (video.currentTime >= PREFADE_TRIGGER_MS / 1000) {
        startHandoff();
      }
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    return () => video.removeEventListener('timeupdate', onTimeUpdate);
  }, [phase, startHandoff]);

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
          aria-modal="true"
          aria-label="RKC Automotive intro"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className={`${VIDEO_CLASS} transition-opacity ease-in-out`}
            style={{
              opacity: videoOpacity,
              transitionDuration: `${CROSSFADE_MS}ms`,
            }}
            aria-hidden={videoOpacity === 0}
          >
            <source src={RKC_LOGO_VIDEO_WEBM} type="video/webm" />
            <source src={RKC_LOGO_VIDEO_MP4} type="video/mp4" />
          </video>

          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity ease-in-out"
            style={{
              opacity: staticLogoOpacity,
              transitionDuration: `${CROSSFADE_MS}ms`,
            }}
            aria-hidden={staticLogoOpacity === 0}
          >
            <Image
              src={STATIC_LOGO_SRC}
              alt="RKC Automotive"
              width={RKC_LOGO_CARD_SIZE}
              height={RKC_LOGO_CARD_SIZE}
              quality={95}
              priority
              className={STATIC_LOGO_CLASS}
              draggable={false}
            />
          </div>

          <button
            type="button"
            onClick={dismiss}
            className={`absolute top-6 right-6 z-10 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm transition-all duration-500 hover:border-white/35 hover:bg-white/10 hover:text-white sm:top-8 sm:right-8 ${
              showSkip ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            Skip Intro
          </button>
        </div>
      )}
    </>
  );
}
