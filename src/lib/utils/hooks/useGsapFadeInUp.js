'use client'
// lib/utils/hooks/useGsapFadeInUp.ts
import { useEffect } from 'react';
import { gsap } from 'gsap';

const useGsapFadeInUp = (refs, stagger = 0.1) => {
  useEffect(() => {
    if (!refs || refs.length === 0) return;

    const validRefs = refs.filter(ref => ref.current !== null);

    if (validRefs.length === 0) return;

    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: 'power3.out',
        opacity: 0,
        y: 30,
      },
    });

    timeline.fromTo(
      validRefs.map(ref => ref.current),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger }
    );

    return () => {
      timeline.kill();
    };
  }, [refs, stagger]);
};

export default useGsapFadeInUp;
