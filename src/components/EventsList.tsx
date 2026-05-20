'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const blurSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30"><rect width="40" height="30" fill="#d6cdb0" rx="2"/></svg>`;
const blurDataUrl = `data:image/svg+xml;base64,${toBase64(blurSvg)}`;

type Orientation = 'landscape' | 'portrait';
type Category = 'All' | 'Community' | 'Health' | 'Cultural';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
  orientation: Orientation;
  event: string;
  category: Exclude<Category, 'All'>;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    src: '/events/health-1.jpeg',
    alt: 'Health screening volunteers',
    orientation: 'landscape',
    event: '2025 Health Screening & Cookout',
    category: 'Health',
  },
  {
    id: 2,
    type: 'image',
    src: '/events/workout-group-photo-portrait.jpeg',
    alt: 'Fitness group with race bibs',
    orientation: 'portrait',
    event: '2025 Health Screening & Cookout',
    category: 'Health',
  },
  {
    id: 3,
    type: 'image',
    src: '/events/games.jpeg',
    alt: 'Community lawn games',
    orientation: 'landscape',
    event: '2025 Health Screening & Cookout',
    category: 'Community',
  },
  {
    id: 4,
    type: 'image',
    src: '/events/mc.jpeg',
    alt: 'Master of ceremonies on stage',
    orientation: 'portrait',
    event: '2025 Health Screening & Cookout',
    category: 'Cultural',
  },
  {
    id: 5,
    type: 'image',
    src: '/events/health-2.jpeg',
    alt: 'Health screening station',
    orientation: 'landscape',
    event: '2025 Health Screening & Cookout',
    category: 'Health',
  },
  {
    id: 6,
    type: 'image',
    src: '/events/get-together.jpeg',
    alt: 'Community gathering',
    orientation: 'landscape',
    event: '2025 Health Screening & Cookout',
    category: 'Community',
  },
  {
    id: 7,
    type: 'image',
    src: '/events/man-with-grill.jpeg',
    alt: 'Cookout grilling',
    orientation: 'landscape',
    event: '2025 Health Screening & Cookout',
    category: 'Cultural',
  },
  {
    id: 8,
    type: 'image',
    src: '/events/kids.jpeg',
    alt: 'Kids activities',
    orientation: 'landscape',
    event: '2025 Health Screening & Cookout',
    category: 'Community',
  },
  {
    id: 9,
    type: 'image',
    src: '/events/health-3.jpeg',
    alt: 'Health screening tent',
    orientation: 'landscape',
    event: '2025 Health Screening & Cookout',
    category: 'Health',
  },
  {
    id: 10,
    type: 'image',
    src: '/events/workout-group-photo.jpeg',
    alt: 'Workout group outdoors',
    orientation: 'landscape',
    event: '2025 Health Screening & Cookout',
    category: 'Health',
  },
  // {
  //   id: 11,
  //   type: 'video',
  //   src: '/events/2025_GCMV_Annual_Health_Screening_and_Cookout_vod_solid.mp4',
  //   alt: '2025 Health Screening & Cookout recap',
  //   orientation: 'landscape',
  //   event: '2025 Health Screening & Cookout',
  //   category: 'Community',
  // },
];

const categories: Category[] = ['All', 'Community', 'Health', 'Cultural'];

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
  Community: '#005a2b',
  Health: '#1c3b1c',
  Cultural: '#c9a227',
};

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <path
        d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface LightboxProps {
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ items, activeIndex, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[activeIndex];
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.load();
    }
  }, [activeIndex, item.type]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.93)' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white transition-all hover:bg-white/10"
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white transition-all hover:bg-white/10 sm:left-6"
        aria-label="Previous"
      >
        <ChevronIcon dir="left" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white transition-all hover:bg-white/10 sm:right-6"
        aria-label="Next"
      >
        <ChevronIcon dir="right" />
      </button>

      <div
        className="relative mx-16 flex max-h-[90vh] w-full max-w-5xl items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'video' ? (
          <video
            ref={videoRef}
            controls
            autoPlay
            className="max-h-[85vh] w-full rounded-xl object-contain"
            style={{ maxWidth: '900px' }}
          >
            <source src={item.src} type="video/mp4" />
          </video>
        ) : (
          <div className="relative max-h-[85vh] w-full max-w-[900px]">
            <Image
              src={item.src}
              alt={item.alt}
              width={item.orientation === 'portrait' ? 700 : 1000}
              height={item.orientation === 'portrait' ? 1000 : 667}
              className="mx-auto max-h-[85vh] w-auto rounded-xl object-contain"
              style={{ maxWidth: '100%' }}
            />
          </div>
        )}

        <div
          className="absolute right-0 bottom-0 left-0 rounded-b-xl px-4 py-3"
          style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}
        >
          <span
            className="mb-1 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase"
            style={{ backgroundColor: categoryColors[item.category] }}
          >
            {item.category}
          </span>
          <p className="text-sm text-white/90">{item.event}</p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {items.map((_, i) => (
          <span
            key={i}
            className="block h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? '20px' : '6px',
              backgroundColor: i === activeIndex ? '#c9a227' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function EventsList() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === 'All' ? galleryItems : galleryItems.filter((i) => i.category === activeFilter);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevItem = useCallback(
    () => setLightboxIndex((i) => (i === null || i === 0 ? filtered.length - 1 : i - 1)),
    [filtered.length],
  );
  const nextItem = useCallback(
    () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.gallery-header',
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        },
      );
      gsap.fromTo(
        '.filter-tabs',
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          delay: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        },
      );
    };
    init();
  }, []);

  useEffect(() => {
    const animate = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        '.gallery-item',
        { y: 36, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.62,
          stagger: { amount: 0.5, from: 'start' },
          ease: 'power3.out',
          scrollTrigger: { trigger: '.gallery-grid', start: 'top 82%' },
        },
      );
    };
    animate();
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 md:py-24"
      style={{ backgroundColor: '#fafaf8' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-14">
        <div className="gallery-header mb-3 flex items-center gap-3">
          <span
            className="text-[11px] font-black tracking-[0.26em] uppercase"
            style={{ color: '#c9a227' }}
          >
            Our Events
          </span>
          <span className="block h-0.5 w-8 shrink-0" style={{ backgroundColor: '#c9a227' }} />
        </div>
        <h2
          className="gallery-header mb-8 text-2xl font-extrabold sm:text-3xl"
          style={{ color: '#1c3b1c', fontFamily: 'var(--font-montserrat)' }}
        >
          Event Gallery
        </h2>

        <div className="filter-tabs mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setLightboxIndex(null);
              }}
              className={cn(
                'cursor-pointer rounded-full px-4 py-1.5 text-[12px] font-bold tracking-wide transition-all duration-200',
                activeFilter === cat ? 'text-white' : 'hover:opacity-80',
              )}
              style={
                activeFilter === cat
                  ? { backgroundColor: '#1c3b1c', color: '#fff' }
                  : { backgroundColor: 'rgba(28,59,28,0.08)', color: '#1c3b1c' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid" style={{ columns: '2', columnGap: '10px' }}>
          <style>{`
            @media (min-width: 640px) { .gallery-grid { columns: 3; } }
            @media (min-width: 1024px) { .gallery-grid { columns: 4; } }
          `}</style>
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="gallery-item group relative mb-2.5 cursor-pointer break-inside-avoid overflow-hidden rounded-xl sm:mb-3"
              onClick={() => openLightbox(i)}
              style={{ display: 'inline-block', width: '100%' }}
            >
              {item.type === 'video' ? (
                <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                  <video
                    className="h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={`${item.src}#t=0.5`} type="video/mp4" />
                  </video>
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:bg-black/30"
                    style={{ backgroundColor: 'rgba(0,0,0,0.22)' }}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: '#c9a227' }}
                    >
                      <PlayIcon />
                    </div>
                  </div>
                  <div
                    className="absolute right-0 bottom-0 left-0 translate-y-full px-3 py-2.5 transition-transform duration-300 group-hover:translate-y-0"
                    style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}
                  >
                    <span
                      className="mb-1 inline-block rounded-full px-2 py-0.5 text-[9px] font-bold text-white uppercase"
                      style={{ backgroundColor: categoryColors[item.category] }}
                    >
                      {item.category}
                    </span>
                    <p className="text-[11px] leading-tight font-semibold text-white">
                      {item.event}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.orientation === 'portrait' ? 480 : 720}
                    height={item.orientation === 'portrait' ? 640 : 480}
                    priority={i < 4}
                    loading={i < 4 ? 'eager' : 'lazy'}
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex translate-y-full flex-col justify-end px-3 py-3 transition-transform duration-300 group-hover:translate-y-0"
                    style={{ background: 'linear-gradient(transparent 30%, rgba(0,0,0,0.68))' }}
                  >
                    <span
                      className="mb-1 inline-block w-fit rounded-full px-2 py-0.5 text-[9px] font-bold text-white uppercase"
                      style={{ backgroundColor: categoryColors[item.category] }}
                    >
                      {item.category}
                    </span>
                    <p className="text-[11px] leading-tight font-semibold text-white">
                      {item.event}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </section>
  );
}
