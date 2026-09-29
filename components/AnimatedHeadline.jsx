'use client';

import { useState, useEffect } from 'react';

const words = [
  'BOLD',
  'BRAVE',
  'DARING',
  'REBELLIOUS',
  'MISFITS',
  'WILD',
  'FEARLESS',
  'MAVERICKS',
  'DREAMERS',
  'WEIRDOS',
  'UNDERDOGS',
  'SHAKERS',
  'RADICALS',
  'DISRUPTORS'
];

export default function AnimatedHeadline() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '120px 20px 80px' }}>
      <h2 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(42px, 7vw, 92px)',
        fontWeight: 900,
        letterSpacing: '-0.02em',
        lineHeight: 1.05,
        textTransform: 'uppercase',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.3em'
      }}>
        <span>FORTUNE FAVOURS THE</span>
        <span
          style={{
            color: 'var(--accent-orange)',
            display: 'inline-block',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            opacity: fade ? 1 : 0,
            transform: fade ? 'translateY(0)' : 'translateY(8px)',
            minWidth: '280px',
            textAlign: 'left'
          }}
        >
          {words[index]}
        </span>
      </h2>
    </div>
  );
}
