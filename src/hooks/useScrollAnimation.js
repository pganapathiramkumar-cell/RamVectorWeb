import { useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const children = el.querySelectorAll('.fade-up');
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 80}ms`;
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
