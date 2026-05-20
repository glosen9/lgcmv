interface AdinkraBorderProps {
  className?: string;
  direction?: 'vertical' | 'horizontal';
  id?: string;
}

export function AdinkraBorder({
  className,
  direction = 'vertical',
  id = 'ab',
}: AdinkraBorderProps) {
  const pid = `adinkra-${id}`;

  if (direction === 'horizontal') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className={className}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Horizontal tile: 84 × 28 */}
          <pattern id={pid} x="0" y="0" width="84" height="28" patternUnits="userSpaceOnUse">
            {/* Left red block */}
            <rect x="0" y="0" width="13" height="28" fill="#B92020" />
            {/* Divider */}
            <rect x="13" y="0" width="2" height="28" fill="#1a1a1a" />
            {/* Center section with adinkra symbol */}
            <rect x="15" y="0" width="54" height="28" fill="#142a14" />
            {/* Adinkra: concentric circles + 4-petal cross */}
            <circle cx="42" cy="14" r="11" fill="none" stroke="#C9A227" strokeWidth="1.4" />
            <circle cx="42" cy="14" r="6.5" fill="none" stroke="#C9A227" strokeWidth="1" />
            <circle cx="42" cy="14" r="2.5" fill="#C9A227" />
            <ellipse cx="31.5" cy="14" rx="5" ry="2.2" fill="#C9A227" />
            <ellipse cx="52.5" cy="14" rx="5" ry="2.2" fill="#C9A227" />
            <ellipse cx="42" cy="3.5" rx="2.2" ry="5" fill="#C9A227" />
            <ellipse cx="42" cy="24.5" rx="2.2" ry="5" fill="#C9A227" />
            {/* Corner diamonds */}
            <polygon points="42,2 44,5 42,8 40,5" fill="#C9A227" opacity="0.7" />
            <polygon points="42,20 44,23 42,26 40,23" fill="#C9A227" opacity="0.7" />
            <polygon points="20,14 23,12 26,14 23,16" fill="#C9A227" opacity="0.7" />
            <polygon points="58,14 61,12 64,14 61,16" fill="#C9A227" opacity="0.7" />
            {/* Divider */}
            <rect x="69" y="0" width="2" height="28" fill="#1a1a1a" />
            {/* Green block */}
            <rect x="71" y="0" width="7" height="28" fill="#005a2b" />
            {/* Gold accent */}
            <rect x="78" y="0" width="3" height="28" fill="#C9A227" />
            {/* Red end */}
            <rect x="81" y="0" width="3" height="28" fill="#B92020" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${pid})`} />
      </svg>
    );
  }

  /* ── VERTICAL (default) ── */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      className={className}
      preserveAspectRatio="none"
    >
      <defs>
        {/* Vertical tile: 28 × 84 */}
        <pattern id={pid} x="0" y="0" width="28" height="84" patternUnits="userSpaceOnUse">
          {/* Top red block */}
          <rect x="0" y="0" width="28" height="13" fill="#B92020" />
          {/* Divider */}
          <rect x="0" y="13" width="28" height="2" fill="#1a1a1a" />
          {/* Center with adinkra symbol */}
          <rect x="0" y="15" width="28" height="54" fill="#142a14" />
          {/* Adinkra: concentric circles + petals */}
          <circle cx="14" cy="42" r="11" fill="none" stroke="#C9A227" strokeWidth="1.4" />
          <circle cx="14" cy="42" r="6.5" fill="none" stroke="#C9A227" strokeWidth="1" />
          <circle cx="14" cy="42" r="2.5" fill="#C9A227" />
          <ellipse cx="14" cy="31.5" rx="2.2" ry="5" fill="#C9A227" />
          <ellipse cx="14" cy="52.5" rx="2.2" ry="5" fill="#C9A227" />
          <ellipse cx="3.5" cy="42" rx="5" ry="2.2" fill="#C9A227" />
          <ellipse cx="24.5" cy="42" rx="5" ry="2.2" fill="#C9A227" />
          {/* Corner diamonds */}
          <polygon points="14,20 16,23 14,26 12,23" fill="#C9A227" opacity="0.7" />
          <polygon points="14,58 16,61 14,64 12,61" fill="#C9A227" opacity="0.7" />
          <polygon points="2,42 5,40 8,42 5,44" fill="#C9A227" opacity="0.7" />
          <polygon points="20,42 23,40 26,42 23,44" fill="#C9A227" opacity="0.7" />
          {/* Divider */}
          <rect x="0" y="69" width="28" height="2" fill="#1a1a1a" />
          {/* Bottom green block */}
          <rect x="0" y="71" width="28" height="7" fill="#005a2b" />
          {/* Gold accent */}
          <rect x="0" y="78" width="28" height="3" fill="#C9A227" />
          {/* Red end */}
          <rect x="0" y="81" width="28" height="3" fill="#B92020" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${pid})`} />
    </svg>
  );
}
