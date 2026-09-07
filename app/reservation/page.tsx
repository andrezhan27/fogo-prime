import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { restaurantInfo } from '@/data/restaurant';
import { LanguageProvider } from '@/providers/LanguageProvider';

export const metadata: Metadata = {
  title: 'Reservar mesa | Fogo Prime',
  description: 'Reserve a sua mesa no Fogo Prime, em Lisboa.',
  alternates: {
    canonical: '/reservation',
  },
};

export default function ReservationPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="h-dvh bg-[#0b0b0a] pt-[4.75rem] lg:pt-[5.5rem]">
        <iframe
          className="block h-full w-full border-0 bg-white"
          src={restaurantInfo.reservationWidgetUrl}
          title="Fogo Prime Reservation"
        />
      </main>
    </LanguageProvider>
  );
}
