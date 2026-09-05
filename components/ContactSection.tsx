'use client';

import { ArrowUpRight, Clock3, MapPin, Phone } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';
import { Reveal } from '@/components/Reveal';
import { MapEmbed } from '@/components/MapEmbed';
import { MagneticReservationButton } from '@/components/MagneticReservationButton';
import { useLanguage } from '@/providers/LanguageProvider';

export function ContactSection() {
  const { copy } = useLanguage();

  return (
    <section id="contactos" className="bg-[#f3ede2] px-5 py-24 text-[#171510] sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[90rem]">
        <Reveal className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b6a00]">{copy.contact.eyebrow}</p>
            <h2 className="mt-5 font-heading text-[clamp(3.2rem,6vw,5.8rem)] leading-[0.92] font-semibold tracking-[-0.04em]">{copy.contact.title}</h2>
            <dl className="mt-12 border-t border-[#b9aa94]/70">
              <div className="grid grid-cols-[2.6rem_1fr] gap-4 border-b border-[#b9aa94]/70 py-6">
                <MapPin aria-hidden="true" className="mt-1 size-5 text-[#9b6a00]" strokeWidth={1.7} />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[#7e7161]">{copy.contact.addressLabel}</dt>
                  <dd className="mt-2 max-w-sm text-base leading-7">{restaurantInfo.address}</dd>
                  <a href={restaurantInfo.mapsUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-[#865d00] underline decoration-[#b98614]/45 underline-offset-4 hover:text-black">
                    {copy.contact.directions}<ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[2.6rem_1fr] gap-4 border-b border-[#b9aa94]/70 py-6">
                <Phone aria-hidden="true" className="mt-1 size-5 text-[#9b6a00]" strokeWidth={1.7} />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[#7e7161]">{copy.contact.phoneLabel}</dt>
                  <dd><a href={restaurantInfo.phoneHref} className="mt-2 inline-block font-heading text-3xl font-semibold hover:text-[#865d00]">{restaurantInfo.phoneDisplay}</a></dd>
                </div>
              </div>
              <div className="grid grid-cols-[2.6rem_1fr] gap-4 border-b border-[#b9aa94]/70 py-6">
                <Clock3 aria-hidden="true" className="mt-1 size-5 text-[#9b6a00]" strokeWidth={1.7} />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[#7e7161]">{copy.contact.hoursLabel}</dt>
                  <dd className="mt-2 max-w-sm text-base leading-7">{copy.contact.hours}</dd>
                </div>
              </div>
            </dl>
            <MagneticReservationButton className="mt-8">{copy.contact.reserve}</MagneticReservationButton>
          </div>
          <MapEmbed />
        </Reveal>
      </div>
    </section>
  );
}
