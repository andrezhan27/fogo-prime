'use client';

import Image from 'next/image';
import { Camera, Users } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';
import { useLanguage } from '@/providers/LanguageProvider';
import { useReservation } from '@/providers/ReservationProvider';

const footerLinks = [
  ['menu', '#menu'],
  ['space', '#espaco'],
  ['videos', '#videos'],
  ['contact', '#contactos'],
] as const;

export function Footer() {
  const { copy } = useLanguage();
  const { openReservation } = useReservation();

  return (
    <footer className="border-t border-white/10 bg-[#080807] px-6 pb-8 pt-16 text-[#f7f0e5] sm:px-10 sm:pt-20 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[76rem]">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_1fr] lg:gap-14">
          <div>
            <Image
              src="/images/logo.webp"
              alt="Fogo Prime"
              width={116}
              height={102}
              className="h-24 w-28 object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              {copy.footer.statement}
            </p>
          </div>
          <div>
            <h3 className="ui-label text-[#f2bd39]">
              {copy.footer.navigation}
            </h3>
            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  className="w-fit text-sm text-white/60 transition-colors hover:text-white"
                >
                  {copy.nav[key]}
                </a>
              ))}
              <button
                type="button"
                onClick={openReservation}
                className="min-h-11 w-fit text-left text-sm text-white/60 transition-colors hover:text-white"
              >
                {copy.nav.reserve}
              </button>
            </nav>
          </div>
          <div>
            <h3 className="ui-label text-[#f2bd39]">{copy.footer.follow}</h3>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={restaurantInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 w-fit items-center gap-3 text-sm text-white/60 hover:text-white"
              >
                <Camera aria-hidden="true" className="size-4" />
                Instagram
              </a>
              <a
                href={restaurantInfo.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 w-fit items-center gap-3 text-sm text-white/60 hover:text-white"
              >
                <Users aria-hidden="true" className="size-4" />
                Facebook
              </a>
            </div>
          </div>
          <div>
            <h3 className="ui-label text-[#f2bd39]">{copy.footer.contacts}</h3>
            <address className="mt-5 not-italic text-sm leading-7 text-white/60">
              <p>{restaurantInfo.address}</p>
              <a
                href={restaurantInfo.phoneHref}
                className="mt-2 inline-flex min-h-11 items-center hover:text-white"
              >
                {restaurantInfo.phoneDisplay}
              </a>
            </address>
          </div>
        </div>
        <div className="grid gap-5 pt-7 text-xs text-white/35 lg:grid-cols-[1fr_auto] lg:items-center">
          <p>
            © {new Date().getFullYear()} Fogo Prime.{' '}
            <a
              href="https://intelis.pt"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-white"
            >
              {copy.footer.designedBy}
            </a>
            , {copy.footer.rights}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-3 lg:justify-end">
            {restaurantInfo.privacy_policy_url ? (
              <a
                href={restaurantInfo.privacy_policy_url}
                className="underline underline-offset-4 hover:text-white"
              >
                {copy.footer.privacy}
              </a>
            ) : null}
            {restaurantInfo.terms_and_conditions_url ? (
              <a
                href={restaurantInfo.terms_and_conditions_url}
                className="underline underline-offset-4 hover:text-white"
              >
                {copy.footer.terms}
              </a>
            ) : null}
            <a
              href={restaurantInfo.complaintsBook}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-white"
            >
              {copy.footer.complaints}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
