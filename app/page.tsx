import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { MenuSection } from '@/components/MenuSection';
import { SpaceGallery } from '@/components/SpaceGallery';
import { SocialVideos } from '@/components/SocialVideos';
import { ContactSection } from '@/components/ContactSection';
import { ReservationCTA } from '@/components/ReservationCTA';
import { Footer } from '@/components/Footer';
import { restaurantInfo } from '@/data/restaurant';
import { LanguageProvider } from '@/providers/LanguageProvider';
import { ReservationProvider } from '@/providers/ReservationProvider';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurantInfo.name,
    image:
      'https://fogo-prime-lisboa.zhan-liu128.chatgpt.site/images/hero-desktop.webp',
    url: 'https://fogo-prime-lisboa.zhan-liu128.chatgpt.site',
    telephone: '+351 965 366 666',
    servesCuisine: ['Brazilian', 'Rodízio'],
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Miguel Bombarda',
      postalCode: '1050-161',
      addressLocality: 'Lisboa',
      addressCountry: 'PT',
    },
    sameAs: [restaurantInfo.instagram, restaurantInfo.facebook],
  };

  return (
    <LanguageProvider>
      <ReservationProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Navbar />
        <main>
          <Hero />
          <MenuSection />
          <SpaceGallery />
          <SocialVideos />
          <ContactSection />
          <ReservationCTA />
        </main>
        <Footer />
      </ReservationProvider>
    </LanguageProvider>
  );
}
