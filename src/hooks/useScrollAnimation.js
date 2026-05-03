import { useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in').forEach((child, i) => {
            const base = parseFloat(child.style.transitionDelay) || i * 90;
            setTimeout(() => child.classList.add('visible'), base);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    // stagger delay on children
    el.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in').forEach((child, i) => {
      if (!child.style.transitionDelay) {
        child.style.transitionDelay = `${i * 90}ms`;
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
