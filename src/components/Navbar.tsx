'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GCMVLogo } from './GCMVLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const didMount = useRef(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  // Scroll: update scrolled state + close mobile menu on any scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setMobileOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const init = async () => {
      const { gsap } = await import('gsap');
      if (!navRef.current) return;
      gsap.fromTo(
        navRef.current,
        { y: -70, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.1 },
      );
      gsap.fromTo(
        '.nav-link',
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', delay: 0.4 },
      );
      gsap.fromTo(
        '.nav-donate',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)', delay: 0.8 },
      );
    };
    init();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Click outside to close
  useEffect(() => {
    if (!mobileOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [mobileOpen]);

  // Animate mobile menu open / close (skip on initial mount)
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    const animate = async () => {
      const { gsap } = await import('gsap');

      if (mobileOpen) {
        menu.style.pointerEvents = 'auto';
        gsap.fromTo(
          menu,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.32, ease: 'power2.out' },
        );
        gsap.fromTo(
          menu.querySelectorAll('a'),
          { x: -16, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.24, stagger: 0.07, ease: 'power2.out', delay: 0.1 },
        );
      } else {
        gsap.to(menu, {
          height: 0,
          opacity: 0,
          duration: 0.22,
          ease: 'power2.in',
          onComplete: () => {
            menu.style.pointerEvents = 'none';
          },
        });
      }
    };
    animate();
  }, [mobileOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled || mobileOpen ? 'rgba(28,59,28,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.35)' : 'none',
      }}
    >
      <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-14 md:max-w-7xl md:px-16">
        <Link href="/" className="flex items-center">
          <GCMVLogo iconSize={42} />
        </Link>

        <div className="mr-3 ml-auto hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-wite text-sm font-semibold tracking-wide transition-colors"
              style={{
                color: isActive(link.href) ? '#c9a227' : 'rgba(255,255,255,0.88)',
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.href))
                  (e.currentTarget as HTMLAnchorElement).style.color = '#c9a227';
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.href))
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.88)';
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="nav-donate flex cursor-pointer items-center gap-1.5 rounded-sm px-3 py-2 text-sm font-bold tracking-wide text-white transition-all hover:opacity-90 sm:px-5"
            style={{ backgroundColor: '#c9a227' }}
          >
            Donate
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3">
              <path d="M8 13.5S2 9.3 2 5.5a4 4 0 018 0 4 4 0 018 0c0 3.8-6 8-6 8z" />
            </svg>
          </Link>

          <button
            className="flex cursor-pointer flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="block h-0.5 w-6 bg-white transition-all duration-300"
              style={{ transform: mobileOpen ? 'rotate(45deg) translate(4px,7px)' : 'none' }}
            />
            <span
              className="block h-0.5 w-6 bg-white transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 w-6 bg-white transition-all duration-300"
              style={{ transform: mobileOpen ? 'rotate(-45deg) translate(4px,-7px)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu — always mounted; GSAP drives height + opacity */}
      <div
        ref={menuRef}
        className="overflow-hidden md:hidden"
        style={{
          height: 0,
          opacity: 0,
          pointerEvents: 'none',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          backgroundColor: 'rgba(28,59,28,0.97)',
        }}
      >
        <div className="flex flex-col gap-4 px-8 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold tracking-wide transition-colors"
              style={{ color: isActive(link.href) ? '#c9a227' : 'rgba(255,255,255,0.85)' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
