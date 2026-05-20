'use client';

import { useState } from 'react';

const WA_URL = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_CONTACT_NUMBER}?text=Hello%2C%20I%27d%20like%20to%20learn%20more%20about%20the%20Ghanaian%20Community%20of%20Merrimack%20Valley.`;

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed right-5 bottom-6 z-50 select-none"
    >
      <div
        className="relative flex items-center gap-3 px-4 py-3 transition-all duration-200"
        style={{
          backgroundColor: '#25D366',
          borderRadius: '18px 18px 4px 18px',
          transform: hovered ? 'scale(1.04) translateY(-2px)' : 'scale(1)',
          boxShadow: hovered
            ? '0 8px 28px rgba(37,211,102,0.55)'
            : '0 4px 18px rgba(37,211,102,0.42)',
        }}
      >
        {/* WhatsApp icon with attention ping */}
        <div className="relative h-8 w-8 shrink-0">
          <span
            className="absolute inset-0 animate-ping rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.28)' }}
          />
          <svg viewBox="0 0 32 32" fill="white" className="relative h-8 w-8" aria-hidden="true">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.83 1.781 6.865L2 30l7.352-1.742A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.83-1.594l-.418-.248-4.363 1.033 1.063-4.247-.272-.435A11.46 11.46 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.565c-.345-.172-2.04-1.006-2.355-1.12-.316-.115-.546-.172-.776.172-.23.345-.89 1.12-1.09 1.35-.2.23-.4.258-.746.086-.345-.172-1.457-.537-2.775-1.712-1.026-.914-1.718-2.042-1.919-2.387-.2-.345-.021-.531.15-.703.155-.155.345-.403.518-.604.172-.2.23-.345.345-.575.115-.23.057-.432-.029-.604-.086-.172-.776-1.87-1.063-2.56-.28-.672-.563-.581-.776-.592l-.66-.011c-.23 0-.604.086-.92.432-.316.345-1.207 1.178-1.207 2.874s1.235 3.333 1.408 3.563c.172.23 2.432 3.71 5.893 5.203.823.355 1.466.567 1.967.726.826.263 1.578.226 2.172.137.662-.099 2.04-.834 2.328-1.638.287-.804.287-1.493.2-1.637-.086-.143-.315-.23-.66-.402z" />
          </svg>
        </div>

        {/* Label */}
        <div className="flex flex-col">
          <span className="text-[10px] leading-none font-semibold text-white/80">Need help?</span>
          <span className="text-[13px] leading-tight font-bold text-white">Chat with us</span>
        </div>

        {/* Speech-bubble tail — bottom-right */}
        <div
          className="absolute right-0 -bottom-[9px]"
          style={{
            width: 0,
            height: 0,
            borderLeft: '12px solid #25D366',
            borderBottom: '10px solid transparent',
          }}
        />
      </div>
    </a>
  );
}
