import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { EventsList } from '@/components/EventsList';
import { VolunteerCTA } from '@/components/VolunteerCTA';

export const metadata: Metadata = {
  title: 'Events — GCMV',
  description: 'Community Activities',
};

export default function EventsPage() {
  return (
    <main>
      <PageHero
        title="Community Activities"
        backgroundImage={{
          default: '/asantehene.jpg',
          sm: '/asantehene-sm.jpg',
        }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
        ]}
      />
      <EventsList />
      <VolunteerCTA />
    </main>
  );
}
