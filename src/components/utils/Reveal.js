'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right'
  delayMs = 0,
  threshold = 0.15,
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const baseHidden = 'opacity-0';
  const baseShown = 'opacity-100';
  const translateHidden = {
    up: 'translate-y-6',
    down: '-translate-y-6',
    left: 'translate-x-6',
    right: '-translate-x-6',
  }[direction] || 'translate-y-6';

  const translateShown = 'translate-y-0 translate-x-0';

  const transition = `transition-all duration-400 ease-out`;
  const delayClass = delayMs ? '' : '';

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${visible ? delayMs : 0}ms` }}
      className={`${transition} ${visible ? `${baseShown} ${translateShown}` : `${baseHidden} ${translateHidden}`}`}
    >
      {children}
    </div>
  );
}


