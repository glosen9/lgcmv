import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us — GCMV',
  description: 'Get in touch with the Ghanaian Community of Merrimack Valley.',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        backgroundImage={{
          default: '/school-bg.png',
          sm: '/school-bg-sm.png',
        }}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />
      <ContactSection />
    </main>
  );
}
