'use client';

import { type ChangeEvent, type FormEvent, useEffect, useRef, useState } from 'react';
import { socialLinks } from './Footer';

const contactDetails = [
  {
    label: 'Email',
    value: 'info@lgcmv.org',
    href: 'mailto:info@lgcmv.org',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#c9a227" strokeWidth="1.8" />
        <path d="M2 7l10 7 10-7" stroke="#c9a227" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '(978) 265-0929',
    href: 'tel:+19782650929',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
          stroke="#c9a227"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: '265 Chelmsford St Suite 7, Chelmsford, MA 01824 U.S.A',
    href: 'https://maps.google.com/?q=265+Chelmsford+St+Suite+7+Chelmsford+MA+01824',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
          stroke="#c9a227"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Send failed');
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      const st = { trigger: sectionRef.current, start: 'top 76%' };

      gsap.fromTo(
        '.contact-info',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: st },
      );
      gsap.fromTo(
        '.contact-form-wrap',
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.1, scrollTrigger: st },
      );
    };
    init();
  }, []);

  const inputBase =
    'w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20';

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-28"
      style={{
        backgroundColor: '#fafaf8',
        backgroundImage: "url('/bridge-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',
        backgroundSize: 'cover',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 md:px-16">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left — contact info */}
          <div className="contact-info">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="text-[11px] font-black tracking-[0.26em] uppercase"
                style={{ color: '#c9a227' }}
              >
                Reach Out
              </span>
              <span className="block h-0.5 w-8 shrink-0" style={{ backgroundColor: '#c9a227' }} />
            </div>

            <h2
              className="mb-4 text-2xl leading-snug font-extrabold sm:text-3xl md:text-[2rem]"
              style={{ color: '#1c3b1c', fontFamily: 'var(--font-montserrat)' }}
            >
              We&apos;d love to hear from you!
            </h2>
            <p
              className="mb-8 text-[13px] leading-7 sm:text-sm"
              style={{ color: 'rgba(28,59,28,0.68)' }}
            >
              Whether you want to get involved, need assistance, or have a question, our team is
              here to help.
            </p>

            <ul className="mb-8 space-y-5">
              {contactDetails.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: 'rgba(28,59,28,0.07)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-[10px] font-black tracking-[0.2em] uppercase"
                      style={{ color: '#c9a227' }}
                    >
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel={'noopener noreferrer'}
                      className="text-[13px] transition-colors hover:underline sm:text-sm"
                      style={{ color: '#1c3b1c' }}
                    >
                      {item.value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <div>
              <p
                className="mb-3 text-[10px] font-black tracking-[0.2em] uppercase"
                style={{ color: '#1c3b1c' }}
              >
                Follow Us
              </p>
              <div className="flex gap-2.5">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:scale-110 hover:opacity-90"
                    style={{ backgroundColor: '#1c3b1c', color: '#c9a227' }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div
                className="flex min-h-[380px] flex-col items-center justify-center rounded-2xl p-10 text-center"
                style={{ backgroundColor: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
              >
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#1c3b1c' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
                    <path
                      d="M5 12l5 5L20 7"
                      stroke="#c9a227"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold" style={{ color: '#1c3b1c' }}>
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: 'rgba(28,59,28,0.65)' }}>
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 sm:p-8"
                style={{ backgroundColor: '#fff', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
              >
                {status === 'error' && (
                  <div
                    className="mb-5 rounded-lg px-4 py-3 text-sm"
                    style={{
                      backgroundColor: '#fef2f2',
                      color: '#b91c1c',
                      border: '1px solid #fecaca',
                    }}
                  >
                    Something went wrong. Please try again or email us directly at{' '}
                    <a href="mailto:info@lgcmv.org" className="font-semibold underline">
                      info@lgcmv.org
                    </a>
                  </div>
                )}

                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-1.5 block text-[10px] font-black tracking-[0.18em] uppercase"
                      style={{ color: '#1c3b1c' }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      className={inputBase}
                      style={{ borderColor: 'rgba(28,59,28,0.15)', color: '#1c3b1c' }}
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1.5 block text-[10px] font-black tracking-[0.18em] uppercase"
                      style={{ color: '#1c3b1c' }}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputBase}
                      style={{ borderColor: 'rgba(28,59,28,0.15)', color: '#1c3b1c' }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="mb-1.5 block text-[10px] font-black tracking-[0.18em] uppercase"
                    style={{ color: '#1c3b1c' }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputBase}
                    style={{ borderColor: 'rgba(28,59,28,0.15)', color: '#1c3b1c' }}
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="mb-1.5 block text-[10px] font-black tracking-[0.18em] uppercase"
                    style={{ color: '#1c3b1c' }}
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Write your message here..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputBase} resize-none`}
                    style={{ borderColor: 'rgba(28,59,28,0.15)', color: '#1c3b1c' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold tracking-wide text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ backgroundColor: '#1c3b1c' }}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
