import gsap from 'gsap';

export const GSAP_EASE = 'power2.out';
export const GSAP_DURATION = 0.7;

gsap.defaults({
  ease: GSAP_EASE,
  duration: GSAP_DURATION,
});

let scrollTriggerReady = false;
let scrollTriggerModule: typeof import('gsap/ScrollTrigger').ScrollTrigger | null = null;

/** Defer ScrollTrigger until after splash / first paint to cut main-thread work during intro. */
export function ensureScrollTrigger(): Promise<typeof import('gsap/ScrollTrigger').ScrollTrigger> {
  if (scrollTriggerModule) return Promise.resolve(scrollTriggerModule);
  if (typeof window === 'undefined') {
    return import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      scrollTriggerModule = ScrollTrigger;
      return ScrollTrigger;
    });
  }

  return new Promise((resolve) => {
    const activate = () => {
      if (scrollTriggerReady) return;
      scrollTriggerReady = true;
      void import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        scrollTriggerModule = ScrollTrigger;
        resolve(ScrollTrigger);
      });
    };

    try {
      if (sessionStorage.getItem('rkc-splash-seen')) {
        activate();
        return;
      }
    } catch {
      /* private browsing / storage blocked */
    }

    window.addEventListener('rkc-splash-ready', activate, { once: true });

    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(activate, { timeout: 6000 });
    } else {
      window.setTimeout(activate, 3000);
    }
  });
}

/** Lazy proxy — defers ScrollTrigger import until ensureScrollTrigger resolves. */
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
