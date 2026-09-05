'use client';

import Image from 'next/image';
import { pricing } from '@/data/restaurant';
import { FoodCarousel } from '@/components/FoodCarousel';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/providers/LanguageProvider';

export function MenuSection() {
  const { copy } = useLanguage();

  return (
    <section id="menu" className="overflow-hidden bg-[#090908] px-5 py-24 text-[#f7f0e5] sm:px-8 sm:py-32 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid items-start gap-16 xl:grid-cols-[minmax(0,.92fr)_minmax(32rem,1.08fr)] xl:gap-16">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f2bd39]">{copy.menu.eyebrow}</p>
            <h2 className="mt-5 font-heading text-[clamp(4rem,7vw,7rem)] leading-none font-semibold tracking-[-0.045em]">{copy.menu.title}</h2>
            <p className="mt-4 text-base text-white/55">{copy.menu.intro}</p>

            <div className="mt-12 border-y border-white/15">
              <div className="grid grid-cols-[1.2fr_.8fr_.8fr] border-b border-white/15 text-[0.72rem] font-bold uppercase tracking-[0.13em] text-white/45 sm:grid-cols-[1.45fr_.8fr_.8fr] sm:text-sm">
                <span className="px-1 py-5" />
                <span className="border-l border-white/10 px-3 py-5 text-center">{copy.menu.lunch}</span>
                <span className="border-l border-white/10 px-3 py-5 text-center">{copy.menu.dinner}</span>
              </div>
              {pricing.map((row) => (
                <div key={row.key} className="grid min-h-[7.4rem] grid-cols-[1.2fr_.8fr_.8fr] items-stretch border-b border-white/15 last:border-0 sm:grid-cols-[1.45fr_.8fr_.8fr]">
                  <div className="flex flex-col justify-center pr-3">
                    <strong className="text-sm leading-5 sm:text-base">{copy.menu[row.key]}</strong>
                    {row.key !== 'children' && <span className="mt-1 text-xs text-white/40">{copy.menu.adults}</span>}
                  </div>
                  {[row.lunch, row.dinner].map((price, index) => (
                    <div key={`${price}-${index}`} className="flex flex-col items-center justify-center border-l border-white/10 px-2 text-center">
                      <strong className="font-heading text-2xl font-semibold sm:text-3xl">{price}</strong>
                      <span className="mt-1 text-[0.65rem] text-white/40 sm:text-xs">{copy.menu.perPerson}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-white/35">{copy.menu.vat}</p>
          </Reveal>

          <Reveal delay={0.12} className="relative mx-auto hidden min-h-[43rem] w-full max-w-[44rem] sm:block">
            <div className="group absolute left-0 top-0 aspect-[4/3] w-[74%] overflow-hidden">
              <Image src="/images/food-group-1.jpg" alt={copy.menu.groupOne} fill sizes="(max-width: 1280px) 55vw, 34vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="group absolute bottom-0 right-0 aspect-[4/3] w-[72%] overflow-hidden border-[8px] border-[#090908]">
              <Image src="/images/food-group-2.jpg" alt={copy.menu.groupTwo} fill sizes="(max-width: 1280px) 55vw, 34vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <span aria-hidden="true" className="absolute bottom-[9%] left-[3%] font-heading text-8xl leading-none text-[#dca51d]/20">fogo</span>
          </Reveal>
        </div>

        <Reveal className="mt-24 border-t border-white/15 pt-16 sm:mt-32">
          <div className="flex items-end justify-between gap-8">
            <h3 className="max-w-3xl font-heading text-[clamp(2.8rem,5vw,5rem)] leading-[0.96] font-semibold tracking-[-0.035em]">{copy.menu.galleryTitle}</h3>
            <span className="hidden text-xs font-bold uppercase tracking-[0.18em] text-white/35 md:block">01 — 04</span>
          </div>
          <FoodCarousel />
        </Reveal>
      </div>
    </section>
  );
}
