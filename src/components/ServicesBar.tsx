'use client';

import { useEffect, useRef } from 'react';

const services = [
  {
    title: '⁠Health Education and Health Awareness',
    description:
      'The Ghanaian community of Merrimack Valley proudly supports and promotes health education and health awareness by encouraging healthy living, preventive care, and access to important health information for families and individuals in the community. Through outreach, education, and community support, the community helps promote healthier and stronger lives for all.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <circle cx="16" cy="10" r="5" stroke="#C9A227" strokeWidth="1.8" />
        <path
          d="M6 27c0-5.523 4.477-10 10-10s10 4.477 10 10"
          stroke="#C9A227"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M12 21l2.5 2.5 5-5"
          stroke="#C9A227"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Youth Empowerment',
    description:
      'The Ghanaian community of Merrimack Valley proudly supports and promotes youth empowerment by encouraging education, leadership, mentorship, and cultural pride among Ghanaian youth and others in the community. Through unity and guidance, the community helps young people grow into confident and successful leaders.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <path
          d="M8 6v4a4 4 0 008 0V6M12 10v16"
          stroke="#C9A227"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M20 6s4 2 4 8h-8c0-6 4-8 4-8z"
          stroke="#C9A227"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M20 14v12" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Community Support and Social Assistance Program',
    description:
      'The Ghanaian community of Merrimack Valley proudly supports and promotes community support and social assistance programs by providing guidance, resources, and encouragement to individuals and families in need. Through unity, compassion, and outreach, the community works to strengthen and uplift members while fostering a spirit of togetherness and care for all.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <circle cx="10" cy="11" r="4" stroke="#C9A227" strokeWidth="1.8" />
        <circle cx="22" cy="11" r="4" stroke="#C9A227" strokeWidth="1.8" />
        <path
          d="M3 26c0-4 3-7 7-7M22 19c4 0 7 3 7 7"
          stroke="#C9A227"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M13 19h6M16 19v7" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Ghanaian Culture and Heritage',
    description:
      'The Ghanaian community of Merrimack Valley proudly supports and promotes Ghanaian culture and heritage by celebrating traditional values, music, food, language, and customs within the community. Through cultural events, education, and shared experiences, the community helps preserve and pass on Ghanaian traditions to future generations.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <rect x="5" y="5" width="22" height="22" rx="2" stroke="#C9A227" strokeWidth="1.8" />
        <circle cx="16" cy="16" r="5" stroke="#C9A227" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2" fill="#C9A227" />
        <line
          x1="16"
          y1="5"
          x2="16"
          y2="9"
          stroke="#C9A227"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="23"
          x2="16"
          y2="27"
          stroke="#C9A227"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="5"
          y1="16"
          x2="9"
          y2="16"
          stroke="#C9A227"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="23"
          y1="16"
          x2="27"
          y2="16"
          stroke="#C9A227"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function ServicesBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    let cleanup: (() => void) | null = null;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const strip = stripRef.current;
      if (!section || !strip) return;

      const mm = gsap.matchMedia();
      cleanup = () => mm.revert();

      mm.add('(min-width: 768px)', () => {
        // Set all panel content invisible before the strip is in view
        gsap.set(strip.querySelectorAll('.pc-meta, .pc-title, .pc-rule, .pc-desc'), {
          opacity: 0,
          y: 32,
        });

        const hScrollTween = gsap.to(strip, {
          x: () => -(strip.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${strip.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.width = `${self.progress * 100}%`;
              }
              const activeIndex = Math.min(
                Math.floor(self.progress * services.length),
                services.length - 1,
              );
              dotsRef.current.forEach((dot, i) => {
                if (!dot) return;
                dot.style.backgroundColor =
                  i === activeIndex ? '#c9a227' : 'rgba(255,255,255,0.28)';
                dot.style.width = i === activeIndex ? '22px' : '6px';
              });
              if (scrollHintRef.current) {
                scrollHintRef.current.style.opacity = self.progress > 0.04 ? '0' : '1';
              }
            },
          },
        });

        // containerAnimation must receive the tween (not the ScrollTrigger instance)
        // so GSAP can measure trigger positions inside the horizontal strip.
        strip.querySelectorAll<HTMLElement>('.service-panel').forEach((panel) => {
          const meta = panel.querySelector('.pc-meta');
          const title = panel.querySelector('.pc-title');
          const rule = panel.querySelector('.pc-rule');
          const desc = panel.querySelector('.pc-desc');

          [meta, title, rule, desc].forEach((el, idx) => {
            if (!el) return;
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: hScrollTween,
                start: `left ${78 - idx * 7}%`,
                toggleActions: 'play none none reverse',
              },
            });
          });
        });
      });

      mm.add('(max-width: 767px)', () => {
        gsap.fromTo(
          '.service-card',
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: section, start: 'top 85%' },
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
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: '#1c3b1c' }}
    >
      {/* Gold progress bar — desktop */}
      <div
        className="absolute top-0 left-0 z-30 hidden h-[2px] w-full md:block"
        style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
      >
        <div
          ref={progressRef}
          className="h-full"
          style={{ backgroundColor: '#c9a227', width: '0%', transition: 'none' }}
        />
      </div>

      {/* ── Desktop: horizontal storytelling strip ──────────────────────── */}
      <div
        ref={stripRef}
        className="hidden md:flex"
        style={{ width: `${services.length * 100}vw`, willChange: 'transform' }}
      >
        {services.map((svc, i) => (
          <div
            key={i}
            className="service-panel relative flex h-screen w-screen shrink-0 items-center overflow-hidden pr-36 pl-16 lg:pr-48 lg:pl-28"
            style={{ backgroundColor: i % 2 === 0 ? '#1c3b1c' : '#142a14' }}
          >
            {/* Decorative background number */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 bottom-0 leading-none font-black select-none"
              style={{
                fontSize: 'clamp(200px, 26vw, 420px)',
                color: 'rgba(255,255,255,0.03)',
                lineHeight: 0.8,
                fontFamily: 'var(--font-montserrat)',
              }}
            >
              0{i + 1}
            </span>

            {/* Left gold accent bar */}
            <div
              className="absolute top-0 left-0 h-full w-[3px]"
              style={{ backgroundColor: '#c9a227', opacity: 0.55 }}
            />

            <div className="relative z-10 max-w-3xl">
              {/* Service meta row */}
              <div className="pc-meta mb-8 flex items-center gap-5">
                <div
                  className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: 'rgba(201,162,39,0.1)',
                    border: '1px solid rgba(201,162,39,0.22)',
                  }}
                >
                  {svc.icon}
                </div>
                <div>
                  <p
                    className="text-[10px] font-black tracking-[0.32em] uppercase"
                    style={{ color: '#c9a227' }}
                  >
                    Our Services
                  </p>
                  <p
                    className="mt-0.5 text-[11px] font-medium tabular-nums"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                  </p>
                </div>
              </div>

              {/* Title */}
              <h2
                className="pc-title mb-5 text-4xl leading-[1.08] font-extrabold text-white lg:text-5xl xl:text-[3.2rem]"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {svc.title}
              </h2>

              {/* Gold rule */}
              <div
                className="pc-rule mb-6 h-[2px] w-14 shrink-0"
                style={{ backgroundColor: '#c9a227' }}
              />

              {/* Description */}
              <p
                className="pc-desc text-[0.96rem] leading-[1.95]"
                style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '560px' }}
              >
                {svc.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators — desktop */}
      <div className="pointer-events-none absolute bottom-7 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 md:flex">
        {services.map((_, i) => (
          <span
            key={i}
            ref={(el) => {
              dotsRef.current[i] = el;
            }}
            className="block h-[5px] rounded-full"
            style={{
              width: i === 0 ? '22px' : '6px',
              backgroundColor: i === 0 ? '#c9a227' : 'rgba(255,255,255,0.28)',
              transition: 'width 0.3s ease, background-color 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Scroll hint — desktop, fades out after first scroll */}
      <div
        ref={scrollHintRef}
        className="pointer-events-none absolute right-10 bottom-7 z-30 hidden items-center gap-2 transition-opacity duration-500 md:flex"
        style={{ color: 'rgba(255,255,255,0.36)' }}
      >
        <span className="text-[9px] font-black tracking-[0.35em] uppercase">Scroll</span>
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 16 16">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ── Mobile: stacked cards ───────────────────────────────────────── */}
      <div className="md:hidden">
        {services.map((svc, i) => (
          <div
            key={i}
            className="service-card relative overflow-hidden px-6 py-10 sm:px-10"
            style={{
              borderTop: i > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              backgroundColor: i % 2 === 0 ? '#1c3b1c' : '#142a14',
            }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-3 right-3 leading-none font-black select-none"
              style={{
                fontSize: '80px',
                color: 'rgba(255,255,255,0.04)',
                fontFamily: 'var(--font-montserrat)',
              }}
            >
              0{i + 1}
            </span>
            <div className="relative z-10">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: 'rgba(201,162,39,0.1)',
                    border: '1px solid rgba(201,162,39,0.2)',
                  }}
                >
                  {svc.icon}
                </div>
                <span
                  className="text-[9px] font-black tracking-[0.28em] uppercase"
                  style={{ color: '#c9a227' }}
                >
                  0{i + 1} / 0{services.length}
                </span>
              </div>
              <h3
                className="mb-4 text-xl leading-snug font-extrabold text-white"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {svc.title}
              </h3>
              <div className="mb-4 h-[2px] w-10" style={{ backgroundColor: '#c9a227' }} />
              <p className="text-sm leading-[1.85]" style={{ color: 'rgba(255,255,255,0.58)' }}>
                {svc.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
