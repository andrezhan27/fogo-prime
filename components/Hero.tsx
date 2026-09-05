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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,5,.93)_0%,rgba(6,6,5,.7)_42%,rgba(6,6,5,.12)_77%),linear-gradient(0deg,rgba(5,5,4,.65)_0%,transparent_45%)] max-md:bg-[linear-gradient(0deg,rgba(6,6,5,.94)_0%,rgba(6,6,5,.44)_72%,rgba(6,6,5,.6)_100%)]" />
      <div className="relative mx-auto flex min-h-[46rem] max-w-[90rem] items-end px-5 pb-24 pt-32 sm:min-h-[50rem] sm:px-8 lg:min-h-screen lg:items-center lg:px-10 lg:pb-16 lg:pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: stagger(0.12, { startDelay: 0.15 }) } },
          }}
          className="max-w-2xl"
        >
          <motion.p variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.65 }} className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#f2bd39] sm:text-sm">
            {copy.hero.eyebrow}
          </motion.p>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.75 }} className="font-heading text-[clamp(3.35rem,7.5vw,6.8rem)] leading-[0.88] font-semibold tracking-[-0.045em] text-balance">
            {copy.hero.title}
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7 }} className="mt-7 max-w-xl text-base leading-7 text-[#e5dccf]/82 sm:text-lg sm:leading-8">
            {copy.hero.body}
          </motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.7 }} className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <MagneticReservationButton>{copy.hero.reserve}</MagneticReservationButton>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">{copy.hero.note}</span>
          </motion.div>
        </motion.div>
        <a href="#rodizio" className="absolute bottom-6 left-5 inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-white sm:left-8 lg:left-auto lg:right-10" aria-label={copy.hero.scroll}>
          {copy.hero.scroll}
          <ChevronDown aria-hidden="true" className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
