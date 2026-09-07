'use client';

import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { MagneticReservationButton } from '@/components/MagneticReservationButton';
import { useLanguage } from '@/providers/LanguageProvider';

export function ReservationCTA() {
  const { copy } = useLanguage();

  return (
    <section
      id="reservar"
      className="bg-[#0b0b0a] px-6 py-12 text-[#f7f0e5] sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-20"
    >
      <Reveal className="mx-auto grid max-w-[76rem] border border-white/13 lg:grid-cols-[1.1fr_.9fr]">
        <div className="group relative min-h-[23rem] overflow-hidden lg:min-h-[36rem]">
          <Image
            src="/images/reserve-cta.webp"
            alt={copy.reserve.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/15" />
        </div>
        <div className="flex flex-col justify-center bg-[#15130f] px-6 py-14 sm:px-12 lg:px-16">
          <h2 className="font-heading text-[clamp(2.7rem,5vw,4.5rem)] leading-none font-semibold tracking-[-0.035em]">
            {copy.reserve.title}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#c9bdad] sm:text-lg">
            {copy.reserve.body}
          </p>
          <MagneticReservationButton className="mt-8 self-start">
            {copy.reserve.action}
          </MagneticReservationButton>
        </div>
      </Reveal>
    </section>
  );
}
