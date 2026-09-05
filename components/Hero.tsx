'use client';

import Image from 'next/image';
import { motion, stagger } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/providers/LanguageProvider';
import { MagneticReservationButton } from '@/components/MagneticReservationButton';

export function Hero() {
  const { copy } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-[46rem] overflow-hidden bg-[#0b0b0a] text-[#f7f0e5] sm:min-h-[50rem] lg:min-h-screen">
      <Image
        src="/images/hero-desktop.jpg"
        alt={copy.hero.imageAlt}
        fill
        loading="eager"
        sizes="100vw"
        className="hidden object-cover object-center md:block"
      />
      <Image
        src="/images/hero-mobile.jpg"
        alt={copy.hero.imageAlt}
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,5,4,.78)_0%,rgba(6,6,5,.3)_52%,rgba(6,6,5,.58)_100%)]" />
      <div className="relative mx-auto flex min-h-[46rem] max-w-[76rem] items-center justify-center px-6 pb-20 pt-32 text-center sm:min-h-[50rem] sm:px-10 lg:min-h-screen lg:px-16 lg:pb-16 lg:pt-32 xl:px-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: stagger(0.12, { startDelay: 0.15 }) } },
          }}
          className="flex max-w-3xl translate-y-28 flex-col items-center sm:translate-y-36 lg:translate-y-40"
        >
          <motion.h1 variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.75 }} className="font-brand text-[clamp(1.65rem,3vw,2.5rem)] leading-none font-extrabold uppercase tracking-[0.12em] drop-shadow-[0_5px_18px_rgba(0,0,0,.65)]">
            {copy.hero.title}
          </motion.h1>
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7 }} className="mt-7 flex justify-center">
            <MagneticReservationButton>{copy.hero.reserve}</MagneticReservationButton>
          </motion.div>
        </motion.div>
        <a href="#menu" className="absolute bottom-6 left-1/2 inline-flex min-h-11 -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-white" aria-label={copy.hero.scroll}>
          {copy.hero.scroll}
          <ChevronDown aria-hidden="true" className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
