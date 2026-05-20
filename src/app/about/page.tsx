import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { AboutMission } from '@/components/AboutMission';
import { AboutValues } from '@/components/AboutValues';
import { AboutVision } from '@/components/AboutVision';
import KentePartition from '@/components/KentePartition';

export const metadata: Metadata = {
  title: 'About Us — GCMV',
  description:
    'Learn about the Ghanaian Community of Merrimack Valley — our mission, values, and story.',
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Us"
        backgroundImage={{
          default: '/nkrumah-with-fountain.webp',
          sm: '/nkrumah-with-fountain-sm.webp',
        }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />
      <AboutMission />
      <KentePartition />
      <AboutVision />
      <AboutValues />
    </main>
  );
}
