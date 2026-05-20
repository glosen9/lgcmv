'use client';

import { useEffect, useRef } from 'react';

function AdinkraheneSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="66" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="8" fill="currentColor" />
    </svg>
  );
}

function DwennimmenSymbol({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <path
        d="M60 60 C60 50 67 40 77 40 C87 40 92 50 88 58 C84 66 74 68 66 62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 60 C70 60 80 67 80 77 C80 87 70 92 62 88 C54 84 52 74 58 66"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 60 C60 70 53 80 43 80 C33 80 28 70 32 62 C36 54 46 52 54 58"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M60 60 C50 60 40 53 40 43 C40 33 50 28 58 32 C66 36 68 46 62 54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="60" r="5" fill="currentColor" />
    </svg>
  );
}

function GhanaBlackStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M50 8 L61 38 L93 38 L68 57 L78 88 L50 70 L22 88 L32 57 L7 38 L39 38 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AboutVision() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      const st = { trigger: sectionRef.current, start: 'top 78%' };

      gsap.fromTo(
        '.vision-adinkra',
        { scale: 0.88, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out', scrollTrigger: st },
      );
      gsap.fromTo(
        '.vision-label',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', scrollTrigger: st },
      );
      gsap.fromTo(
        '.vision-quote',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.14, scrollTrigger: st },
      );
    };
    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: '#1c3b1c' }}
    >
      {/* Large Adinkrahene watermark — center */}
      <div className="vision-adinkra pointer-events-none absolute inset-0 flex items-center justify-center">
        <AdinkraheneSymbol className="h-[500px] w-[500px] text-white opacity-[0.035] sm:h-[620px] sm:w-[620px]" />
      </div>

      {/* Dwennimmen corners */}
      <div className="vision-adinkra pointer-events-none absolute -top-4 right-0 hidden sm:block md:right-6">
        <DwennimmenSymbol className="text-gcmv-gold h-40 w-40 opacity-[0.07]" />
      </div>
      <div className="vision-adinkra pointer-events-none absolute -bottom-4 left-0 hidden sm:block md:left-6">
        <DwennimmenSymbol className="text-gcmv-gold h-40 w-40 opacity-[0.07]" />
      </div>

      {/* Ghana Black Stars — outer corners on large screens */}
      <div className="vision-adinkra pointer-events-none absolute top-10 left-10 hidden lg:block">
        <GhanaBlackStar className="text-gcmv-gold h-14 w-14 opacity-[0.12]" />
      </div>
      <div className="vision-adinkra pointer-events-none absolute right-10 bottom-10 hidden lg:block">
        <GhanaBlackStar className="text-gcmv-gold h-14 w-14 opacity-[0.12]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {/* Overline */}
        <div className="vision-label mb-7 flex items-center justify-center gap-3">
          <span className="block h-px w-10 shrink-0" style={{ backgroundColor: '#c9a227' }} />
          <span
            className="text-sm font-black tracking-[0.3em] uppercase sm:text-lg"
            style={{ color: '#c9a227' }}
          >
            Our Vision
          </span>
          <span className="block h-px w-10 shrink-0" style={{ backgroundColor: '#c9a227' }} />
        </div>

        {/* Decorative open-quote */}
        <div className="vision-label mb-3 flex justify-center">
          <span
            className="font-serif text-8xl leading-none select-none"
            style={{ color: '#c9a227', opacity: 0.3 }}
          >
            &ldquo;
          </span>
        </div>

        {/* Vision statement */}
        <blockquote
          className="vision-quote text-xl leading-relaxed font-extrabold sm:text-2xl md:text-[1.8rem] md:leading-[1.55]"
          style={{ color: '#f0e9d2', fontFamily: 'var(--font-montserrat)' }}
        >
          To build a united and thriving Ghanaian community in the Merrimack Valley that preserves
          our cultural heritage, empowers future generations, supports one another, and positively
          impacts the wider community through leadership, service, and unity.
        </blockquote>

        {/* Bottom kente dots */}
        <div className="vision-label mt-10 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#005a2b' }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#c9a227' }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#b92020' }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#c9a227' }} />
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#005a2b' }} />
        </div>
      </div>
    </section>
  );
}
