'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const col1Images = [
  { src: '/events/mc.jpeg', alt: 'MC hosting a community event', aspect: '2/3' },
  { src: '/events/games.jpeg', alt: 'Community members enjoying lawn games', aspect: '4/3' },
];

const col2Images = [
  { src: '/events/get-together.jpeg', alt: 'Community gathering and celebration', aspect: '4/3' },
  {
    src: '/events/workout-group-photo-portrait.jpeg',
    alt: 'Community fitness group with race bibs',
    aspect: '2/3',
  },
];

export function OurStorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | null = null;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();
      cleanup = () => mm.revert();

      // ── Desktop / tablet: pin + scrub — reverses on scroll back ──────────
      mm.add('(min-width: 768px)', () => {
        const imgs = Array.from(section.querySelectorAll<HTMLElement>('.story-img'));
        const tag = section.querySelector('.story-tag');
        const heading = section.querySelector('.story-heading');
        const paras = section.querySelectorAll('.story-para');
        const cta = section.querySelector('.story-cta');

        // img[0]=mc(left), img[1]=games(bottom), img[2]=get-together(right), img[3]=workout(bottom)
        gsap.set(tag, { x: -28, opacity: 0 });
        gsap.set(heading, { y: 28, opacity: 0 });
        gsap.set(paras, { y: 20, opacity: 0 });
        gsap.set(cta, { y: 16, opacity: 0 });
        gsap.set(imgs[0], { x: -90, opacity: 0, scale: 0.91 });
        gsap.set(imgs[2], { x: 90, opacity: 0, scale: 0.91 });
        gsap.set(imgs[1], { y: 70, opacity: 0, scale: 0.91 });
        gsap.set(imgs[3], { y: 70, opacity: 0, scale: 0.91 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=300%',
            pin: true,
            scrub: 1.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Phase 1 — text
        tl.to(tag, { x: 0, opacity: 1, duration: 0.4 })
          .to(heading, { y: 0, opacity: 1, duration: 0.4 }, '-=0.25')
          .to(paras, { y: 0, opacity: 1, stagger: 0.18, duration: 0.35 }, '-=0.2')
          .to(cta, { y: 0, opacity: 1, duration: 0.3 }, '-=0.1')
          // Phase 2 — top row: mc from left, get-together from right
          .to(imgs[0], { x: 0, opacity: 1, scale: 1, duration: 0.65 }, '+=0.2')
          .to(imgs[2], { x: 0, opacity: 1, scale: 1, duration: 0.65 }, '-=0.4')
          // Phase 3 — bottom row: games up, workout up
          .to(imgs[1], { y: 0, opacity: 1, scale: 1, duration: 0.65 }, '+=0.1')
          .to(imgs[3], { y: 0, opacity: 1, scale: 1, duration: 0.65 }, '-=0.4')
          // Hold a beat before unpin
          .to({}, { duration: 0.5 });
      });

      // ── Mobile: no pin — simple scroll-triggered stagger ─────────────────
      mm.add('(max-width: 767px)', () => {
        const st = { trigger: section, start: 'top 78%' };

        gsap.fromTo(
          section.querySelector('.story-tag'),
          { x: -18, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', scrollTrigger: st },
        );
        gsap.fromTo(
          section.querySelector('.story-heading'),
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, delay: 0.1, ease: 'power3.out', scrollTrigger: st },
        );
        gsap.fromTo(
          section.querySelectorAll('.story-para'),
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.55,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: st,
          },
        );
        gsap.fromTo(
          section.querySelector('.story-cta'),
          { y: 12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.38,
            ease: 'back.out(1.4)',
            scrollTrigger: st,
          },
        );

        const imgs = section.querySelectorAll('.story-img');
        gsap.fromTo(
          imgs,
          { y: 36, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.55,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: section.querySelector('.story-grid'), start: 'top 84%' },
          },
        );
      });
    };

    init();
    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-gcmv-cream/70 relative flex min-h-screen items-center"
    >
      {/* Vertical repeat background on the left */}
      {/* <div
        className="pointer-events-none absolute top-0 left-0 z-10 h-full w-7 sm:w-16"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/cream-pattern.png')",
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'contain',
        }}
      ></div> */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16 md:px-16">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* LEFT: text column */}
          <div>
            <div className="story-tag mb-4 flex items-center gap-3">
              <span
                className="text-[11px] font-black tracking-[0.26em] uppercase"
                style={{ color: '#1c3b1c' }}
              >
                Our Story
              </span>
              <span className="block h-0.5 w-10 shrink-0" style={{ backgroundColor: '#c9a227' }} />
            </div>

            <h2
              className="story-heading mb-5 text-3xl leading-snug font-extrabold sm:text-4xl md:text-[2.6rem]"
              style={{ color: '#1c3b1c', fontFamily: 'var(--font-montserrat)' }}
            >
              Our Story
            </h2>

            <div
              className="space-y-4 text-sm leading-7 sm:text-[0.93rem]"
              style={{ color: 'rgba(28,59,28,0.72)' }}
            >
              <p className="story-para">
                Founded on the values of unity, compassion, and service, GCMV exists to make a
                lasting impact in the lives of Ghanaians and the broader community.
              </p>
              <p className="story-para">
                Together, we strive to create a supportive environment where everyone has the
                opportunity to thrive — celebrating our culture while building bridges across
                communities in the Merrimack Valley.
              </p>
            </div>

            <a
              href="/about"
              className="story-cta group mt-8 inline-flex items-center gap-2 rounded-sm px-6 py-2.5 text-[13px] font-bold tracking-wide text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#1c3b1c' }}
            >
              Learn More About Us
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
          </div>

          {/* RIGHT: staggered two-column mosaic */}
          <div className="story-grid relative flex gap-2.5 sm:gap-3">
            {/* Gold accent bar */}
            <span
              className="pointer-events-none absolute -right-3 -bottom-3 z-10 h-16 w-1.5 rounded-full"
              style={{ backgroundColor: '#c9a227' }}
            />
            <span
              className="pointer-events-none absolute -right-3 -bottom-3 z-10 h-1.5 w-16 rounded-full"
              style={{ backgroundColor: '#c9a227' }}
            />

            {/* Column 1 */}
            <div className="flex flex-1 flex-col gap-2.5 sm:gap-3">
              {col1Images.map((img, i) => (
                <div
                  key={i}
                  className="story-img group relative overflow-hidden rounded-xl"
                  style={{ aspectRatio: img.aspect }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading={i === 0 ? 'eager' : 'lazy'}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 38vw, 22vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(180deg, transparent 50%, rgba(28,59,28,0.45))',
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Column 2 — offset down for stagger */}
            <div className="mt-6 flex flex-1 flex-col gap-2.5 sm:mt-10 sm:gap-3">
              {col2Images.map((img, i) => (
                <div
                  key={i}
                  className="story-img group relative overflow-hidden rounded-xl"
                  style={{ aspectRatio: img.aspect }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 38vw, 22vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(180deg, transparent 50%, rgba(28,59,28,0.45))',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
