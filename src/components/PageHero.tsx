import Link from 'next/link';
import { useId } from 'react';

interface Crumb {
  label: string;
  href: string;
}

type ResponsiveImage =
  | string
  | {
      default: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      [key: string]: string | undefined;
    };

interface PageHeroProps {
  title: string;
  breadcrumb: Crumb[];
  backgroundImage?: ResponsiveImage;
  overlay?: boolean;
}

function buildResponsiveCss(id: string, backgroundImage: Exclude<ResponsiveImage, string>): string {
  const breakpoints: Record<string, string> = {
    sm: '(max-width: 639px)',
    md: '(min-width: 640px) and (max-width: 1023px)',
    lg: '(min-width: 1024px) and (max-width: 1279px)',
    xl: '(min-width: 1280px)',
  };

  let css = '';
  for (const [bp, query] of Object.entries(breakpoints)) {
    const img = backgroundImage[bp];
    if (img) {
      css += `@media ${query}{#${id}{background-image:url('${img}')!important;}}`;
    }
  }
  return css;
}

export function PageHero({
  title,
  breadcrumb,
  backgroundImage = '/school-bg.png',
  overlay = true,
}: PageHeroProps) {
  const reactId = useId();
  const sectionId = `pagehero-${reactId.replace(/:/g, '-')}`;

  const imageUrl = typeof backgroundImage === 'string' ? backgroundImage : backgroundImage.default;

  const bgStyle: React.CSSProperties = {
    backgroundColor: '#1c3b1c',
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const responsiveCss =
    typeof backgroundImage !== 'string' ? buildResponsiveCss(sectionId, backgroundImage) : '';

  return (
    <section
      id={sectionId}
      className="relative flex min-h-[300px] items-center justify-center overflow-hidden pt-20 sm:min-h-[400px] md:min-h-[500px] md:pt-24"
      style={bgStyle}
    >
      {responsiveCss && <style dangerouslySetInnerHTML={{ __html: responsiveCss }} />}

      {overlay && <div className="absolute inset-0 bg-black/60" />}

      <div className="relative z-10 px-12 text-center">
        <h1
          className="mb-3 text-3xl leading-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {title}
        </h1>
        <nav className="flex items-center justify-center gap-2 text-sm">
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/70">/</span>}
              {i < breadcrumb.length - 1 ? (
                <Link
                  href={crumb.href}
                  className="hover:text-gcmv-gold-light font-medium text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gcmv-gold-light font-semibold">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
