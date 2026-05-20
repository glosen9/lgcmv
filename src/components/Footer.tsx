import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { GCMVLogo } from './GCMVLogo';
import KentePartition from './KentePartition';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];

import { FaWhatsapp } from 'react-icons/fa6';

export const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/p/1VcscWgY9c/?mibextid=wwXIfr',
    Icon: FaFacebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/p/C9sVzbEJnDU/?img_index=3&igsh=cDR3NGE0NHhxenh5',
    Icon: FaInstagram,
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_CONTACT_NUMBER}?text=Hello%2C%20I%27d%20like%20to%20learn%20more%20about%20the%20Ghanaian%20Community%20of%20Merrimack%20Valley.`,
    Icon: FaWhatsapp,
  },
  // { label: 'X / Twitter', href: 'https://x.com', Icon: FaXTwitter },
  // { label: 'YouTube', href: 'https://youtube.com', Icon: FaYoutube },
];

export function Footer() {
  return (
    <footer>
      <KentePartition />

      <div style={{ backgroundColor: '#142a14' }}>
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 md:px-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
            <div>
              <div className="mb-4">
                <GCMVLogo iconSize={40} />
              </div>
              <p
                className="max-w-[240px] text-[13px] leading-6"
                style={{ color: 'rgba(255,255,255,0.58)' }}
              >
                Uniting Ghanaians and empowering communities across the Merrimack Valley.
              </p>
            </div>

            <div>
              <h4
                className="mb-4 text-[10px] font-black tracking-[0.22em] uppercase"
                style={{ color: '#c9a227' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-gcmv-gold text-[13px] transition-colors hover:underline"
                      style={{ color: 'rgba(255,255,255,0.68)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="mb-4 text-[10px] font-black tracking-[0.22em] uppercase"
                style={{ color: '#c9a227' }}
              >
                Contact
              </h4>
              <ul className="mb-6 space-y-3">
                <li>
                  <a
                    href="mailto:info@lgcmv.org"
                    className="group hover:text-gcmv-gold flex w-fit items-start gap-2.5 transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-gcmv-gold mt-px h-3.5 w-3.5 shrink-0"
                    >
                      <rect
                        x="2"
                        y="4"
                        width="20"
                        height="16"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M2 7l10 7 10-7"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-[13px] leading-snug group-hover:underline">
                      info@lgcmv.org
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+19782650929"
                    className="group hover:text-gcmv-gold flex w-fit items-start gap-2.5 transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-gcmv-gold mt-px h-3.5 w-3.5 shrink-0"
                    >
                      <path
                        d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-[13px] leading-snug group-hover:underline">
                      (978) 265-0929
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=265+Chelmsford+St+Suite+7+Chelmsford+MA+01824"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hover:text-gcmv-gold flex w-fit items-start gap-2.5 transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-gcmv-gold mt-px h-3.5 w-3.5 shrink-0"
                    >
                      <path
                        d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                    <span className="text-[13px] leading-snug group-hover:underline">
                      265 Chelmsford St Suite 7, Chelmsford, MA 01824 U.S.A
                    </span>
                  </a>
                </li>
              </ul>

              <p
                className="mb-3 text-[10px] font-black tracking-[0.2em] uppercase"
                style={{ color: '#c9a227' }}
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
                    className="flex h-8 w-8 items-center justify-center rounded-lg transition-all hover:scale-110 hover:opacity-90"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#c9a227' }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t px-6 py-4 text-center text-[11px]"
          style={{ borderColor: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)' }}
        >
          © {new Date().getFullYear()} Ghanaian Community of Merrimack Valley. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
