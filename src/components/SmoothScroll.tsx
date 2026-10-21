import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Buttery smooth scrolling for fine-pointer (desktop) devices only.
 * - Touch devices keep their native scroll (it already feels right on mobile).
 * - Users who prefer reduced motion are never given artificial scrolling.
 * - `anchors: true` keeps in-page anchor jumps on the same smooth curve.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (prefersReducedMotion || !finePointer) return undefined;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
