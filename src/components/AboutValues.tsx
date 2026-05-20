'use client';

import { useEffect, useRef } from 'react';

const values = [
  {
    label: 'Compassion',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M24 40S8 29.5 8 18.5a8.5 8.5 0 0116-4 8.5 8.5 0 0116 4C40 29.5 24 40 24 40z"
          stroke="#c9a227"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M16 18a4 4 0 018 0"
          stroke="#c9a227"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    label: 'Unity',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <circle cx="14" cy="17" r="6" stroke="#c9a227" strokeWidth="2" />
        <circle cx="34" cy="17" r="6" stroke="#c9a227" strokeWidth="2" />
        <circle cx="24" cy="31" r="6" stroke="#c9a227" strokeWidth="2" />
        <path d="M19 20l5 8M29 20l-5 8" stroke="#c9a227" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Integrity',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path
          d="M24 6l3.5 11H39l-9.5 6.5 3.5 11L24 28l-9 6.5 3.5-11L9 17h11.5z"
          stroke="#c9a227"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Service',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <circle cx="24" cy="14" r="6" stroke="#c9a227" strokeWidth="2" />
        <path
          d="M12 34c0-6.6 5.4-12 12-12s12 5.4 12 12"
          stroke="#c9a227"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M8 38h32" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Respect',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9">
        <path d="M14 28l-4 12M34 28l4 12" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" />
        <rect x="10" y="20" width="28" height="10" rx="5" stroke="#c9a227" strokeWidth="2" />
        <path d="M20 20v-4a4 4 0 018 0v4" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" />
        <path d="M21 25h6" stroke="#c9a227" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
];

export function AboutValues() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.value-title',
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 76%' },
        },
      );
      gsap.fromTo(
        '.value-card',
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.65,
          stagger: 0.09,
          ease: 'power3.out',
          delay: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 76%' },
        },
      );
    };
    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24"
      style={{ backgroundColor: '#f0e9d2' }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16">
        <div className="value-title mb-12 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="block h-0.5 w-10" style={{ backgroundColor: '#c9a227' }} />
            <span
              className="text-[11px] font-black tracking-[0.26em] uppercase"
              style={{ color: '#1c3b1c' }}
            >
              What Drives Us
            </span>
            <span className="block h-0.5 w-10" style={{ backgroundColor: '#c9a227' }} />
          </div>
          <h2
            className="text-3xl font-extrabold sm:text-4xl"
            style={{ color: '#1c3b1c', fontFamily: 'var(--font-montserrat)' }}
          >
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-5">
          {values.map((val) => (
            <div
              key={val.label}
              className="value-card group flex flex-col items-center gap-4 rounded-2xl px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
            >
              <div
                className="group-hover:bg-gcmv-forest flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300"
                style={{ backgroundColor: 'rgba(28,59,28,0.07)' }}
              >
                {val.icon}
              </div>
              <span className="text-sm font-bold tracking-wide" style={{ color: '#1c3b1c' }}>
                {val.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
