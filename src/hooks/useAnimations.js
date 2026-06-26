/**
 * Tujuan: Custom animation hooks — useCountUp, useTilt, useTypewriter
 * Caller: HeroSection, AboutSection, skill/experience components
 * Dependensi: react (hooks only), framer-motion (useInView)
 * Side Effects: DOM event listeners (cleaned up on unmount)
 * Last Updated: 2026-06-26
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'framer-motion';

/**
 * Count-up animation — triggers when element enters viewport
 * @param {number} target - final number
 * @param {number} duration - ms
 */
export function useCountUp(target, duration = 1400) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isInView || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return { count, ref };
}

/**
 * Typewriter effect — types then holds
 * @param {string[]} phrases - array of phrases to cycle
 * @param {number} speed - ms per char
 */
export function useTypewriter(phrases, speed = 70) {
  const [display, setDisplay] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const t = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(t);
    }

    const current = phrases[phraseIndex];

    if (!isDeleting) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplay(current.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, speed);
        return () => clearTimeout(t);
      } else {
        setIsPaused(true);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplay(current.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        }, speed / 2);
        return () => clearTimeout(t);
      } else {
        setIsDeleting(false);
        setPhraseIndex(i => (i + 1) % phrases.length);
      }
    }
  }, [charIndex, isDeleting, isPaused, phraseIndex, phrases, speed]);

  return display;
}

/**
 * 3D tilt effect on mouse move — GPU-only transforms
 * Returns { tiltRef, style, handleMouseMove, handleMouseLeave }
 */
export function useTilt(maxDeg = 8) {
  const tiltRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = useCallback((e) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(600px) rotateY(${x * maxDeg * 2}deg) rotateX(${-y * maxDeg * 2}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
    });
  }, [maxDeg]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(600px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out',
    });
  }, []);

  return { tiltRef, style, handleMouseMove, handleMouseLeave };
}
