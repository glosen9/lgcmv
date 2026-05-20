'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const missionPoints = [
  'Health Education and Awareness',
  'Youth Empowerment',
  'Community Support and Social Assistance',
  'Ghanaian Culture and Heritage',
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 22 22" fill="none" className="h-5 w-5 shrink-0">
      <circle cx="11" cy="11" r="10" fill="#1c3b1c" />
      <path
        d="M6 11.5l3.5 3.5 7-7"
        stroke="#c9a227"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AboutMission() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      const st = { trigger: sectionRef.current, start: 'top 75%' };

      gsap.fromTo(
        '.mission-img',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: st },
      );
      gsap.fromTo(
        '.mission-text',
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.1, scrollTrigger: st },
      );
    };
    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-28"
      style={{ backgroundColor: '#fff' }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16">
        <div className="grid items-stretch gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative min-h-[340px] overflow-hidden rounded-2xl shadow-xl sm:min-h-[420px] md:min-h-0">
            <Image
              src="/events/workout-group-photo-portrait copy.jpeg"
              alt="Ghanaian community members in workout outfit"
              fill
              className="attachment-fixed object-cover object-bottom"
              // sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(28,59,28,0.4) 0%, transparent 60%)',
              }}
            />
          </div>

          <div className="mission-text flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="text-[11px] font-black tracking-[0.26em] uppercase"
                style={{ color: '#c9a227' }}
              >
                Who We Are
              </span>
              <span className="block h-0.5 w-10 shrink-0" style={{ backgroundColor: '#c9a227' }} />
            </div>

            <h2
              className="mb-5 text-2xl leading-snug font-extrabold sm:text-3xl md:text-[2.1rem]"
              style={{ color: '#1c3b1c', fontFamily: 'var(--font-montserrat)' }}
            >
              We are the Ghanaian Community of Merrimack Valley
            </h2>

            <p
              className="mb-4 text-[13px] leading-7 sm:text-sm"
              style={{ color: 'rgba(28,59,28,0.7)' }}
            >
              Our mission is to support Ghanaians and the general population of the Merrimack Valley
              through practical benefits and a sense of belonging.
            </p>
            <p
              className="mb-7 text-[13px] leading-7 sm:text-sm"
              style={{ color: 'rgba(28,59,28,0.7)' }}
            >
              Through social assistance, food donations, emergency aid, cultural events, and
              heritage programs, GCMV exists to make a lasting impact in the lives of Ghanaians and
              the broader community.
            </p>

            <ul className="mb-8 space-y-3">
              {missionPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckIcon />
                  <span
                    className="text-[13px] font-semibold sm:text-sm"
                    style={{ color: '#1c3b1c' }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* <div>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-sm px-6 py-2.5 text-[13px] font-bold tracking-wide text-white transition-all hover:opacity-90"
                style={{ backgroundColor: '#1c3b1c' }}
              >
                Our Vision &amp; Values
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
