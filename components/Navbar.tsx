'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { MagneticReservationButton } from '@/components/MagneticReservationButton';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const links = [
  ['home', '/#inicio'],
  ['menu', '/#menu'],
  ['space', '/#espaco'],
  ['videos', '/#videos'],
  ['contact', '/#contactos'],
] as const;

export function Navbar() {
  const { copy, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0b0b0a]/92 shadow-[0_10px_40px_rgba(0,0,0,.22)] backdrop-blur-md'
          : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-[76rem] items-center justify-between px-6 sm:px-10 lg:h-[5.5rem] lg:px-16 xl:px-20">
        <Link
          href="/#inicio"
          className="relative z-10 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2bd39]"
          aria-label="Fogo Prime — início"
        >
          <Image
            src="/images/logo.webp"
            alt="Fogo Prime"
            width={72}
            height={64}
            loading="eager"
            className="h-14 w-16 object-contain lg:h-16 lg:w-[4.5rem]"
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 xl:flex"
        >
          {links.map(([key, href]) => (
            <Link
              key={key}
              href={href}
              className="ui-label text-white/75 transition-colors hover:text-[#f2bd39] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2bd39]"
            >
              {copy.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <div
            className="hidden items-center gap-1 sm:flex"
            aria-label="Language"
          >
            {(['pt', 'en'] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={`ui-label min-h-11 min-w-11 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2bd39] ${
                  language === item
                    ? 'text-[#f2bd39]'
                    : 'text-white/55 hover:text-white'
                }`}
                aria-pressed={language === item}
              >
                {item}
              </button>
            ))}
          </div>

          <MagneticReservationButton compact className="hidden md:inline-flex">
            {copy.nav.reserve}
          </MagneticReservationButton>

          <MagneticReservationButton compact className="md:hidden">
            {copy.nav.reserve}
          </MagneticReservationButton>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label={copy.nav.openMenu}
              className="inline-flex size-11 items-center justify-center text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f2bd39] xl:hidden"
            >
              <Menu aria-hidden="true" className="size-6" />
            </SheetTrigger>
            <SheetContent
              className="w-[min(90vw,28rem)] border-l border-white/10 bg-[#0b0b0a] text-[#f7f0e5]"
              showCloseButton
            >
              <SheetHeader className="border-b border-white/10 px-6 py-7 text-left">
                <SheetTitle className="font-heading text-3xl text-[#f7f0e5]">
                  Fogo Prime
                </SheetTitle>
                <SheetDescription className="text-[#a89f92]">
                  Rodízio brasileiro · Lisboa
                </SheetDescription>
              </SheetHeader>
              <nav
                className="flex flex-col px-6 py-5"
                aria-label="Navegação móvel"
              >
                {links.map(([key, href], index) => (
                  <Link
                    key={key}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-14 items-center border-b border-white/10 font-heading text-2xl text-[#f7f0e5] focus-visible:outline-2 focus-visible:outline-[#f2bd39]"
                  >
                    <span className="mr-4 text-xs text-[#dca51d]">
                      0{index + 1}
                    </span>
                    {copy.nav[key]}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto grid gap-5 p-6">
                <div className="flex gap-2">
                  {(['pt', 'en'] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setLanguage(item)}
                      className={`ui-label min-h-11 min-w-14 border ${
                        language === item
                          ? 'border-[#dca51d] text-[#f2bd39]'
                          : 'border-white/15 text-white/55'
                      }`}
                      aria-pressed={language === item}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <MagneticReservationButton className="w-full">
                  {copy.nav.reserve}
                </MagneticReservationButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
