'use client';

import { getImageProps } from 'next/image';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { MagneticReservationButton } from '@/components/MagneticReservationButton';

export function Hero() {
  const { copy } = useLanguage();
  const common = {
    alt: copy.hero.imageAlt,
    sizes: '100vw',
    fetchPriority: 'high' as const,
  };
  const {
    props: { srcSet: desktopSrcSet, src: desktopSrc },
  } = getImageProps({
    ...common,
    src: '/images/hero-desktop.webp',
    width: 1448,
    height: 1086,
    unoptimized: true,
  });
  const {
    props: { srcSet: mobileSrcSet, ...mobileImageProps },
  } = getImageProps({
    ...common,
    src: '/images/hero-mobile.webp',
    width: 1086,
    height: 1448,
    unoptimized: true,
  });

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-[#0b0b0a] text-[#f7f0e5] lg:min-h-screen"
    >
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={desktopSrcSet ?? desktopSrc}
        />
        <img
          {...mobileImageProps}
          alt={copy.hero.imageAlt}
          srcSet={mobileSrcSet}
          className="absolute inset-0 size-full object-cover object-center"
        />
      </picture>
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,5,4,.78)_0%,rgba(6,6,5,.3)_52%,rgba(6,6,5,.58)_100%)]" />
      <div className="relative mx-auto min-h-[100svh] max-w-[76rem] px-6 sm:px-10 lg:min-h-screen lg:px-16 xl:px-20">
        <h1 className="hero-title absolute left-1/2 top-[40%] max-w-[8ch] -translate-x-1/2 whitespace-normal text-center md:left-10 md:top-32 md:translate-x-0 md:text-left lg:left-16 lg:top-36 xl:left-20">
          {copy.hero.title.split(' ').map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </h1>

        <div className="absolute left-1/2 top-[60%] flex w-[min(calc(100%_-_3rem),22rem)] -translate-x-1/2 flex-col items-center gap-4 text-center md:bottom-10 md:left-auto md:right-10 md:top-auto md:w-auto md:translate-x-0 md:flex-row md:gap-6 md:text-left lg:bottom-14 lg:right-16 xl:right-20">
          <p className="max-w-[15rem] text-sm leading-5 text-white/70">
            {copy.hero.vibe}
          </p>
          <MagneticReservationButton
            className="min-h-14 min-w-[10.75rem] justify-between px-4 md:min-h-16 md:min-w-[13.5rem] md:px-5"
            trailingIcon={
              <ArrowUpRight aria-hidden="true" className="size-4" />
            }
          >
            {copy.hero.reserve}
          </MagneticReservationButton>
        </div>

        <a
          href="#menu"
          className="ui-label absolute bottom-6 left-6 inline-flex min-h-11 items-center gap-2 text-white/65 transition-colors hover:text-white sm:bottom-10 sm:left-10 lg:bottom-14 lg:left-16 xl:left-20"
          aria-label={copy.hero.scroll}
        >
          {copy.hero.scroll}
          <ChevronDown aria-hidden="true" className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
