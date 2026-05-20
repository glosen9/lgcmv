import { cn } from '@/lib/utils';

interface KentePatternProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  id?: string;
}

export function KentePattern({
  className,
  orientation = 'vertical',
  id = 'kente-default',
}: KentePatternProps) {
  const patternId = `kente-pattern-${id}`;
  const isVertical = orientation === 'vertical';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      className={cn('block', className)}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={isVertical ? '100%' : '72'}
          height={isVertical ? '72' : '100%'}
          patternUnits={isVertical ? 'userSpaceOnUse' : 'userSpaceOnUse'}
          patternTransform={isVertical ? '' : 'rotate(90)'}
        >
          {/* Row 1: Red | Gold */}
          <rect x="0" y="0" width="18" height="12" fill="#B92020" />
          <rect x="18" y="0" width="18" height="12" fill="#C9A227" />
          <rect x="36" y="0" width="18" height="12" fill="#B92020" />
          <rect x="54" y="0" width="18" height="12" fill="#C9A227" />
          {/* Divider */}
          <rect x="0" y="12" width="72" height="3" fill="#1A1A1A" />
          {/* Row 2: Diamond band */}
          <rect x="0" y="15" width="72" height="24" fill="#005A2B" />
          <polygon points="9,15 18,27 9,39 0,27" fill="#C9A227" />
          <polygon points="12,21 18,27 12,33 6,27" fill="#B92020" />
          <polygon points="27,15 36,27 27,39 18,27" fill="#C9A227" />
          <polygon points="30,21 36,27 30,33 24,27" fill="#B92020" />
          <polygon points="45,15 54,27 45,39 36,27" fill="#C9A227" />
          <polygon points="48,21 54,27 48,33 42,27" fill="#B92020" />
          <polygon points="63,15 72,27 63,39 54,27" fill="#C9A227" />
          <polygon points="66,21 72,27 66,33 60,27" fill="#B92020" />
          {/* Divider */}
          <rect x="0" y="39" width="72" height="3" fill="#1A1A1A" />
          {/* Row 3: Gold | Red stripes */}
          <rect x="0" y="42" width="72" height="5" fill="#C9A227" />
          <rect x="0" y="47" width="72" height="5" fill="#B92020" />
          <rect x="0" y="52" width="72" height="5" fill="#C9A227" />
          {/* Divider */}
          <rect x="0" y="57" width="72" height="3" fill="#1A1A1A" />
          {/* Row 4: Gold | Green */}
          <rect x="0" y="60" width="18" height="12" fill="#C9A227" />
          <rect x="18" y="60" width="18" height="12" fill="#005A2B" />
          <rect x="36" y="60" width="18" height="12" fill="#C9A227" />
          <rect x="54" y="60" width="18" height="12" fill="#005A2B" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
