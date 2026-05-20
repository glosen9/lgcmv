import { HeroSection } from '@/components/HeroSection';
import { OurStorySection } from '@/components/OurStorySection';
import { StatsSection } from '@/components/StatsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurStorySection />
      <StatsSection />
    </main>
  );
}
