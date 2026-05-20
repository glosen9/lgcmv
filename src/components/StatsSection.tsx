'use client';

import { useEffect, useRef } from 'react';

const stats = [
  {
    value: 500,
    suffix: '+',
    label: 'Families Helped',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9 sm:h-10 sm:w-10">
        <circle cx="13" cy="12" r="5" stroke="#C9A227" strokeWidth="1.8" />
        <circle cx="27" cy="12" r="5" stroke="#C9A227" strokeWidth="1.8" />
        <path d="M2 32c0-5 4-8 11-8" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M38 32c0-5-4-8-11-8" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M20 24c6 0 10 3 10 8H10c0-5 4-8 10-8z"
          stroke="#C9A227"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: 10,
    suffix: '+',
    label: 'Community Programs',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9 sm:h-10 sm:w-10">
        <path
          d="M20 6C20 6 8 12 8 22a12 12 0 0024 0C32 12 20 6 20 6z"
          stroke="#C9A227"
          strokeWidth="1.8"
        />
        <path
          d="M15 22l3.5 3.5 6-7"
          stroke="#C9A227"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: 20,
    suffix: '+',
    label: 'Events Held',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9 sm:h-10 sm:w-10">
        <rect x="5" y="9" width="30" height="26" rx="3" stroke="#C9A227" strokeWidth="1.8" />
        <path d="M5 17h30" stroke="#C9A227" strokeWidth="1.8" />
        <path d="M14 5v6M26 5v6" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="12" y="22" width="6" height="6" rx="1" fill="#C9A227" opacity="0.8" />
        <rect x="22" y="22" width="6" height="6" rx="1" fill="#C9A227" opacity="0.8" />
      </svg>
    ),
  },
  {
    value: 100,
    suffix: '+',
    label: 'Volunteers',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-9 sm:h-10 sm:w-10">
        <path
          d="M20 8c-2.5 0-7 2.5-7 8.5 0 3.5 2.5 6 7 9.5 4.5-3.5 7-6 7-9.5C27 10.5 22.5 8 20 8z"
          stroke="#C9A227"
          strokeWidth="1.8"
        />
        <path
          d="M8 36c1.5-5 6-7 12-7s10.5 2 12 7"
          stroke="#C9A227"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const animated = useRef(false);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.stat-card',
        { y: 42, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.78,
          stagger: 0.13,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 74%' },
        },
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 74%',
        onEnter: () => {
          if (animated.current) return;
          animated.current = true;
          stats.forEach((stat, i) => {
            const el = counterRefs.current[i];
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: stat.value,
              duration: 2.3,
              ease: 'power2.out',
              onUpdate: () => {
                el.textContent = Math.round(obj.val).toString();
              },
            });
          });
        },
      });
    };
    init();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden" style={{ backgroundColor: '#1c3b1c' }}>
      {/* Stats grid */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16 md:px-16">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card flex flex-col items-center gap-2.5 text-center sm:gap-3"
            >
              <div className="mb-1">{stat.icon}</div>
              <div
                className="text-3xl font-black sm:text-4xl md:text-5xl"
                style={{ color: '#c9a227', fontFamily: 'var(--font-montserrat)' }}
              >
                <span
                  ref={(el) => {
                    counterRefs.current[i] = el;
                  }}
                >
                  0
                </span>
                <span>{stat.suffix}</span>
              </div>
              <div
                className="text-[10px] font-semibold tracking-widest uppercase sm:text-xs"
                style={{ color: 'rgba(255,255,255,0.75)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
