'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function VolunteerCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.volunteer-content',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 76%' },
        },
      );
    };
    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: '#1c3b1c' }}
    >
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80"
          alt="Community volunteers"
          fill
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(28,59,28,0.92) 0%, rgba(20,42,20,0.88) 100%)',
        }}
      />

      <div className="volunteer-content relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-10">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="block h-0.5 w-10" style={{ backgroundColor: '#c9a227' }} />
          <span
            className="text-[11px] font-black tracking-[0.26em] uppercase"
            style={{ color: '#c9a227' }}
          >
            Get Involved
          </span>
          <span className="block h-0.5 w-10" style={{ backgroundColor: '#c9a227' }} />
        </div>

        <h2
          className="mb-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          Want to Volunteer?
        </h2>
        <p
          className="mb-8 text-[13px] leading-7 sm:text-sm"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          Join our dedicated team of volunteers and help us make a lasting difference in the
          Merrimack Valley community. Every hand counts — every moment matters.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-sm px-8 py-3 text-sm font-bold tracking-wide transition-all hover:opacity-90"
          style={{ backgroundColor: '#c9a227', color: '#1c3b1c' }}
        >
          Get Involved
          <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
