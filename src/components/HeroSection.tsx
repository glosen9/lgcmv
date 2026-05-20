'use client';

import { useEffect, useRef } from 'react';
import { ServicesBar } from './ServicesBar';

function SplitWords({ text, color }: { text: string; color: string }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span className="hero-word inline-block" style={{ color }}>
            {word}&nbsp;
          </span>
        </span>
      ))}
    </>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({ delay: 0.25 });

      tl.fromTo(
        '.kente-left',
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1, ease: 'power3.out' },
        0,
      )
        .fromTo(
          '.hero-bg',
          { scale: 1.06, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.8, ease: 'power3.out' },
          0,
        )
        .fromTo(
          '.hero-word',
          { y: 100, opacity: 0, rotateX: -60 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.85, stagger: 0.055, ease: 'power4.out' },
          0.45,
        )
        .fromTo(
          '.hero-sub',
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: 'power3.out' },
          1.0,
        )
        .fromTo(
          '.hero-btn',
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)' },
          1.25,
        );

      gsap.to('.hero-bg', {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4,
        },
      });
    };

    init();
  }, []);

  return (
    <>
      <section
        id="home"
        ref={sectionRef}
        className="relative flex min-h-screen items-center overflow-hidden bg-white"
      >
        {/* Full-bleed background image */}
        <div className="hero-bg absolute inset-x-0 -top-10 -bottom-10">
          <picture>
            <source srcSet="/lowell-1-sm.webp" media="(max-width: 639px)" />
            <img
              src="/lowell-1.webp"
              alt="Lowell City Hall, Merrimack Valley"
              className="absolute inset-0 h-full w-full object-cover object-[65%_38%]"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '65% 38%',
              }}
              draggable={false}
            />
          </picture>
        </div>

        {/* Overlay: black with right-side gradient */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.44) 55%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.2) 100%)',
          }}
        />
        {/* Mobile fallback: slightly stronger dark overlay for smaller screens */}
        <div
          className="pointer-events-none absolute inset-0 z-10 lg:hidden"
          style={{ backgroundColor: 'rgba(0,0,0,0.44)' }}
        />

        {/* Adinkra left border */}
        <div
          className="kente-left pointer-events-none absolute top-0 left-0 z-20 h-full w-4 sm:w-8 lg:w-12 xl:w-14 2xl:w-16"
          style={{
            backgroundImage: "url('/adinkra-pattern.png')",
            backgroundRepeat: 'repeat-y',
            backgroundSize: 'contain',
          }}
        />

        {/* Text content */}
        <div className="relative z-20 w-full py-28 pr-6 pl-12 sm:pr-10 sm:pl-20 lg:w-[52%] lg:py-0 lg:pr-8 lg:pl-24 xl:w-[48%] xl:pl-28">
          <div style={{ perspective: '900px' }}>
            <h1
              className="mb-1 text-[2.4rem] leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.2rem] xl:text-[3.8rem]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              <SplitWords text="Uniting Cultures." color="#ffffff" />
            </h1>
            <h1
              className="mb-8 text-[2.4rem] leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.2rem] xl:text-[3.8rem]"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              <SplitWords text="Empowering Communities." color="#c9a227" />
            </h1>

            <p className="hero-sub mb-10 max-w-[400px] text-[13px] leading-[1.9] font-semibold text-white sm:text-sm">
              The Ghanaian Community of Merrimack Valley is dedicated to uplifting lives through
              social assistance, emergency support, and the celebration of our rich heritage.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="hero-btn group inline-flex items-center gap-2 rounded-sm px-6 py-2.5 text-[13px] font-bold tracking-wider text-white transition-all duration-200 hover:opacity-90 sm:py-3"
                style={{ backgroundColor: '#c9a227' }}
              >
                Get Involved
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="/events"
                className="hero-btn group inline-flex items-center gap-2 rounded-sm border-2 px-6 py-2.5 text-[13px] font-bold tracking-wider text-white transition-all duration-200 hover:bg-white hover:text-black sm:py-3"
                style={{ borderColor: 'rgba(255,255,255,0.65)' }}
              >
                Events
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 16 16">
                  <rect
                    x="2"
                    y="3"
                    width="12"
                    height="11"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 2v2M11 2v2M2 7h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <ServicesBar />
      </section>
    </>
  );
}
