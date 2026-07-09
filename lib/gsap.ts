import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const GSAP_EASE = 'power2.out';
export const GSAP_DURATION = 0.7;

gsap.defaults({
  ease: GSAP_EASE,
  duration: GSAP_DURATION,
});

export { gsap, ScrollTrigger };
