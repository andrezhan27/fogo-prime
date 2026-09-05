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
      <div className="relative mx-auto flex min-h-[46rem] max-w-[90rem] items-center justify-center px-5 pb-20 pt-32 text-center sm:min-h-[50rem] sm:px-8 lg:min-h-screen lg:px-10 lg:pb-16 lg:pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: stagger(0.12, { startDelay: 0.15 }) } },
          }}
          className="flex max-w-3xl flex-col items-center"
        >
          <motion.h1 variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.75 }} className="font-heading text-[clamp(4.25rem,11vw,9.5rem)] leading-[0.76] font-black uppercase tracking-[-0.065em] drop-shadow-[0_8px_28px_rgba(0,0,0,.45)]">
            {copy.hero.title.split(' ').map((word) => <span key={word} className="block">{word}</span>)}
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7 }} className="mt-9 max-w-xl text-base leading-7 text-[#e5dccf]/85 sm:text-lg sm:leading-8">
            {copy.hero.body}
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7 }} className="mt-8 flex justify-center">
            <MagneticReservationButton>{copy.hero.reserve}</MagneticReservationButton>
          </motion.div>
        </motion.div>
        <a href="#comida" className="absolute bottom-6 left-1/2 inline-flex min-h-11 -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-white" aria-label={copy.hero.scroll}>
          {copy.hero.scroll}
          <ChevronDown aria-hidden="true" className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
