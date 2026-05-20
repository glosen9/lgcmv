export function ArchIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 680"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        {/* Ground gradient */}
        <linearGradient id="ai-grd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A1E0A" />
          <stop offset="100%" stopColor="#040B04" />
        </linearGradient>
        {/* Arch glow */}
        <radialGradient id="ai-glow" cx="50%" cy="82%" r="22%">
          <stop offset="0%" stopColor="#E88E18" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#E88E18" stopOpacity="0" />
        </radialGradient>
        {/* Top atmosphere */}
        <linearGradient id="ai-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#080E18" stopOpacity="0.72" />
          <stop offset="35%" stopColor="#080E18" stopOpacity="0" />
        </linearGradient>
        {/* Distant skyline */}
        <linearGradient id="ai-skyline" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#050D05" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#050D05" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      {/* ── Top atmosphere vignette ── */}
      <rect width="540" height="680" fill="url(#ai-top)" />

      {/* ── Distant city skyline ── */}
      <rect x="0" y="458" width="68" height="84" fill="url(#ai-skyline)" />
      <rect x="62" y="446" width="44" height="96" fill="url(#ai-skyline)" />
      <rect x="100" y="468" width="52" height="74" fill="url(#ai-skyline)" />
      <rect x="148" y="475" width="38" height="67" fill="url(#ai-skyline)" />
      <rect x="360" y="452" width="52" height="90" fill="url(#ai-skyline)" />
      <rect x="408" y="438" width="62" height="104" fill="url(#ai-skyline)" />
      <rect x="465" y="460" width="75" height="82" fill="url(#ai-skyline)" />

      {/* ── BIG BEN / Clock Tower ── */}
      <rect x="414" y="250" width="46" height="230" fill="#050D05" opacity="0.93" />
      <rect x="408" y="244" width="58" height="14" fill="#050D05" opacity="0.93" />
      <rect x="402" y="230" width="70" height="18" fill="#050D05" opacity="0.93" />
      <rect x="410" y="212" width="54" height="22" fill="#050D05" opacity="0.93" />
      {/* Belfry detail */}
      <rect x="415" y="198" width="44" height="18" fill="#050D05" opacity="0.93" />
      {/* Spire */}
      <polygon points="437,168 424,200 450,200" fill="#050D05" opacity="0.93" />
      <rect x="435" y="162" width="4" height="10" fill="#050D05" opacity="0.93" />
      {/* Clock face */}
      <circle
        cx="437"
        cy="278"
        r="17"
        fill="#050D05"
        stroke="#C9A227"
        strokeWidth="2"
        opacity="0.9"
      />
      <circle
        cx="437"
        cy="278"
        r="13"
        fill="#0A180A"
        stroke="#C9A227"
        strokeWidth="0.8"
        opacity="0.85"
      />
      {/* Hands */}
      <line
        x1="437"
        y1="266"
        x2="437"
        y2="278"
        stroke="#C9A227"
        strokeWidth="1.8"
        opacity="0.85"
        strokeLinecap="round"
      />
      <line
        x1="437"
        y1="278"
        x2="447"
        y2="284"
        stroke="#C9A227"
        strokeWidth="1.8"
        opacity="0.85"
        strokeLinecap="round"
      />
      {/* Tick marks */}
      <line x1="437" y1="262" x2="437" y2="266" stroke="#C9A227" strokeWidth="1.2" opacity="0.65" />
      <line x1="437" y1="290" x2="437" y2="294" stroke="#C9A227" strokeWidth="1.2" opacity="0.65" />
      <line x1="421" y1="278" x2="425" y2="278" stroke="#C9A227" strokeWidth="1.2" opacity="0.65" />
      <line x1="449" y1="278" x2="453" y2="278" stroke="#C9A227" strokeWidth="1.2" opacity="0.65" />

      {/* ── Glow behind arch ── */}
      <ellipse cx="270" cy="555" rx="120" ry="58" fill="#E88E18" opacity="0.32" />

      {/* ══ BLACK STAR GATE (Independence Arch) ══ */}

      {/* LEFT TOWER */}
      <rect x="110" y="198" width="80" height="362" fill="#040B04" />
      {/* Left tower cornice */}
      <rect x="102" y="192" width="96" height="12" fill="#040B04" />
      <rect x="95" y="180" width="110" height="16" fill="#040B04" />
      <rect x="89" y="168" width="122" height="16" fill="#040B04" />
      {/* Left tower detail band */}
      <rect x="117" y="200" width="66" height="6" fill="#060F06" opacity="0.6" />
      {/* Left windows - top row */}
      <rect x="128" y="214" width="20" height="28" rx="10" fill="#060F06" opacity="0.55" />
      <rect x="154" y="214" width="20" height="28" rx="10" fill="#060F06" opacity="0.55" />
      {/* Left windows - mid row */}
      <rect x="128" y="260" width="20" height="28" rx="10" fill="#060F06" opacity="0.55" />
      <rect x="154" y="260" width="20" height="28" rx="10" fill="#060F06" opacity="0.55" />
      {/* Left windows - lower row */}
      <rect x="128" y="306" width="20" height="28" rx="10" fill="#060F06" opacity="0.55" />
      <rect x="154" y="306" width="20" height="28" rx="10" fill="#060F06" opacity="0.55" />
      {/* Left tower inscription panel */}
      <rect x="119" y="358" width="62" height="22" rx="2" fill="#050E05" />

      {/* RIGHT TOWER */}
      <rect x="350" y="198" width="80" height="362" fill="#040B04" />
      {/* Right tower cornice */}
      <rect x="342" y="192" width="96" height="12" fill="#040B04" />
      <rect x="335" y="180" width="110" height="16" fill="#040B04" />
      <rect x="329" y="168" width="122" height="16" fill="#040B04" />
      {/* Right windows */}
      <rect x="362" y="214" width="20" height="28" rx="10" fill="#060F06" opacity="0.55" />
      <rect x="388" y="214" width="20" height="28" rx="10" fill="#060F06" opacity="0.55" />
      <rect x="362" y="260" width="20" height="28" rx="10" fill="#060F06" opacity="0.55" />
      <rect x="388" y="260" width="20" height="28" rx="10" fill="#060F06" opacity="0.55" />
      <rect x="362" y="306" width="20" height="28" rx="10" fill="#060F06" opacity="0.55" />
      <rect x="388" y="306" width="20" height="28" rx="10" fill="#060F06" opacity="0.55" />
      {/* Right tower inscription panel */}
      <rect x="359" y="358" width="62" height="22" rx="2" fill="#050E05" />

      {/* ARCH SPAN */}
      <path d="M 110 198 Q 270 44 430 198" fill="none" stroke="#040B04" strokeWidth="54" />
      {/* Inner arch thinning (depth effect) */}
      <path d="M 136 210 Q 270 72 404 210" fill="none" stroke="#070F07" strokeWidth="22" />

      {/* INSCRIPTION BAR */}
      <rect x="160" y="330" width="220" height="22" fill="#040B04" />
      <rect x="155" y="327" width="230" height="4" fill="#C9A227" opacity="0.45" />
      <rect x="155" y="352" width="230" height="4" fill="#C9A227" opacity="0.45" />

      {/* HORIZONTAL BEAM */}
      <rect x="98" y="385" width="344" height="16" fill="#040B04" />

      {/* STEPS */}
      <rect x="80" y="554" width="380" height="14" fill="#040B04" />
      <rect x="96" y="562" width="348" height="12" fill="#040B04" />
      <rect x="116" y="568" width="308" height="10" fill="#040B04" />

      {/* BLACK STAR */}
      <polygon
        points="270,44 277.5,65 300,65 283,78 290,99 270,86 250,99 257,78 240,65 262.5,65"
        fill="#030A03"
      />

      {/* ── Ground ── */}
      <rect x="0" y="570" width="540" height="110" fill="url(#ai-grd)" />
      <polygon points="205,570 335,570 440,680 100,680" fill="#080E08" />
      <polygon points="225,570 315,570 385,616 155,616" fill="#E88000" opacity="0.1" />
    </svg>
  );
}
