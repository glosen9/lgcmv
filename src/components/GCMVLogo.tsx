import { cn } from '@/lib/utils';

interface GCMVLogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
  textColor?: string;
}

export function GCMVLogo({
  className,
  iconSize = 48,
  showText = true,
  textColor = 'text-white',
}: GCMVLogoProps) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="23" fill="#1C3B1C" stroke="#C9A227" strokeWidth="1.5" />
        {/* Kente quadrant pattern */}
        <path d="M24 1 A23 23 0 0 1 47 24 L24 24 Z" fill="#B92020" />
        <path d="M47 24 A23 23 0 0 1 24 47 L24 24 Z" fill="#C9A227" />
        <path d="M24 47 A23 23 0 0 1 1 24 L24 24 Z" fill="#005A2B" />
        <path d="M1 24 A23 23 0 0 1 24 1 L24 24 Z" fill="#C9A227" />
        {/* Inner white circle */}
        <circle cx="24" cy="24" r="14" fill="#1C3B1C" />
        {/* Black star */}
        <polygon
          points="24,11 26.4,18.6 34.4,18.6 28,23.4 30.4,31 24,26.2 17.6,31 20,23.4 13.6,18.6 21.6,18.6"
          fill="#C9A227"
        />
      </svg>

      {showText && (
        <div className="leading-none">
          <div className={cn('text-xl font-black tracking-widest', textColor)}>GCMV</div>
          <div
            className={cn(
              'max-w-[110px] text-[7px] font-semibold tracking-[0.12em] uppercase opacity-80',
              textColor,
            )}
          >
            Ghanaian Community
            <br />
            of Merrimack Valley
          </div>
        </div>
      )}
    </div>
  );
}
