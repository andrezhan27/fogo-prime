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
    <section
      id="contactos"
      className="bg-[#f3ede2] px-6 pb-20 pt-16 text-[#171510] sm:px-10 sm:pb-24 sm:pt-20 lg:px-16 lg:pb-28 lg:pt-20 xl:px-20"
    >
      <div className="mx-auto max-w-[72rem]">
        <Reveal className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-heading text-[clamp(2.7rem,5vw,4.5rem)] leading-none font-semibold tracking-[-0.035em]">
              {copy.contact.title}
            </h2>
            <dl className="mt-10 border-t border-[#b9aa94]/70">
              <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-[#b9aa94]/70 py-6 sm:grid-cols-[2.5rem_6.5rem_1fr]">
                <MapPin
                  aria-hidden="true"
                  className="mt-1 size-5 text-[#9b6a00]"
                  strokeWidth={1.7}
                />
                <dt className="ui-label pt-1 text-[#7e7161]">
                  {copy.contact.addressLabel}
                </dt>
                <dd className="col-start-2 mt-2 max-w-sm text-base leading-7 sm:col-start-3 sm:mt-0">
                  <span className="block">{restaurantInfo.address}</span>
                  <a
                    href={restaurantInfo.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ui-label mt-3 inline-flex min-h-11 items-center gap-2 text-[#865d00] underline decoration-[#b98614]/45 underline-offset-4 hover:text-black"
                  >
                    {copy.contact.directions}
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-[#b9aa94]/70 py-6 sm:grid-cols-[2.5rem_6.5rem_1fr]">
                <Phone
                  aria-hidden="true"
                  className="mt-1 size-5 text-[#9b6a00]"
                  strokeWidth={1.7}
                />
                <dt className="ui-label pt-1 text-[#7e7161]">
                  {copy.contact.phoneLabel}
                </dt>
                <dd className="col-start-2 mt-2 text-base leading-7 sm:col-start-3 sm:mt-0">
                  <a
                    href={restaurantInfo.phoneHref}
                    className="inline-flex min-h-11 items-center hover:text-[#865d00]"
                  >
                    {restaurantInfo.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-[#b9aa94]/70 py-6 sm:grid-cols-[2.5rem_6.5rem_1fr]">
                <Clock3
                  aria-hidden="true"
                  className="mt-1 size-5 text-[#9b6a00]"
                  strokeWidth={1.7}
                />
                <dt className="ui-label pt-1 text-[#7e7161]">
                  {copy.contact.hoursLabel}
                </dt>
                <dd className="col-start-2 mt-2 max-w-sm text-base leading-7 sm:col-start-3 sm:mt-0">
                  {copy.contact.hours}
                </dd>
              </div>
            </dl>
            <MagneticReservationButton className="mt-8">
              {copy.contact.reserve}
            </MagneticReservationButton>
          </div>
          <MapEmbed />
        </Reveal>
      </div>
    </section>
  );
}
