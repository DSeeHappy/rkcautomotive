import gsap from 'gsap';

export const GSAP_EASE = 'power2.out';
export const GSAP_DURATION = 0.7;

gsap.defaults({
  ease: GSAP_EASE,
  duration: GSAP_DURATION,
});

let scrollTriggerReady = false;
let scrollTriggerModule: typeof import('gsap/ScrollTrigger').ScrollTrigger | null = null;
let scrollTriggerPromise: Promise<typeof import('gsap/ScrollTrigger').ScrollTrigger> | null = null;

/**
 * Register ScrollTrigger before any scrub/reveal tweens run.
 * Splash is disabled — activate immediately on the client so parallax
 * configs never fall through as plain tweens (Chrome: navy seam + faded hero).
 */
export function ensureScrollTrigger(): Promise<typeof import('gsap/ScrollTrigger').ScrollTrigger> {
  if (scrollTriggerModule) return Promise.resolve(scrollTriggerModule);
  if (scrollTriggerPromise) return scrollTriggerPromise;

  if (typeof window === 'undefined') {
    scrollTriggerPromise = import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      scrollTriggerModule = ScrollTrigger;
      return ScrollTrigger;
    });
    return scrollTriggerPromise;
  }

  scrollTriggerPromise = import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
    if (!scrollTriggerReady) {
      gsap.registerPlugin(ScrollTrigger);
      scrollTriggerReady = true;
    }
    scrollTriggerModule = ScrollTrigger;
    try {
      sessionStorage.setItem('rkc-splash-seen', '1');
    } catch {
      /* private browsing / storage blocked */
    }
    return ScrollTrigger;
  });

  return scrollTriggerPromise;
}

/** Lazy proxy — methods wait until ensureScrollTrigger resolves. */
export const ScrollTrigger = new Proxy({} as typeof import('gsap/ScrollTrigger').ScrollTrigger, {
  get(_target, prop) {
    if (scrollTriggerModule) {
      const value = scrollTriggerModule[prop as keyof typeof scrollTriggerModule];
      return typeof value === 'function' ? value.bind(scrollTriggerModule) : value;
    }
    return (...args: unknown[]) => {
      void ensureScrollTrigger().then((ST) => {
        const method = ST[prop as keyof typeof ST];
        if (typeof method === 'function') {
          (method as (...a: unknown[]) => unknown).apply(ST, args);
        }
      });
    };
  },
});

export { gsap };
