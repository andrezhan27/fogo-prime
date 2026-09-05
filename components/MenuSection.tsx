'use client';

import Image from 'next/image';
import { pricing, restaurantInfo } from '@/data/restaurant';
import { FoodCarousel } from '@/components/FoodCarousel';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/providers/LanguageProvider';

export function MenuSection() {
  const { copy } = useLanguage();

  return (
    <section id="menu" className="overflow-hidden bg-[#090908] px-6 pb-20 pt-16 text-[#f7f0e5] sm:px-10 sm:pb-24 sm:pt-20 lg:px-16 lg:pb-28 lg:pt-20 xl:px-20">
      <div className="mx-auto max-w-[76rem]">
        <Reveal>
          <h2 className="font-heading text-[clamp(2.7rem,5vw,4.5rem)] leading-none font-semibold tracking-[-0.035em]">{copy.menu.title}</h2>
        </Reveal>

        <Reveal delay={0.06} className="mt-10">
          <FoodCarousel />
        </Reveal>

        <div className="mt-16 grid items-start gap-14 lg:mt-20 lg:grid-cols-[minmax(0,.9fr)_minmax(25rem,1.1fr)] lg:gap-16">
          <Reveal>
            <h3 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{copy.menu.priceTitle}</h3>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">{copy.menu.intro}</p>

            <div className="mt-9 border-y border-white/15">
              {pricing.map((row) => (
                <div key={row.key} className="grid min-h-[7.5rem] grid-cols-[1.15fr_.85fr] items-stretch border-b border-white/15 last:border-0">
                  <div className="flex flex-col justify-center pr-4">
                    <strong className="text-base font-bold sm:text-lg">{copy.menu[row.key]}</strong>
                    <span className="mt-1 text-xs text-white/40">{row.key === 'adults' ? copy.menu.adultDetail : copy.menu.childrenAge}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center border-l border-white/10 px-2 text-center">
                    <strong className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{row.price}</strong>
                    <span className="mt-1 text-[0.68rem] text-white/40 sm:text-xs">{copy.menu.perPerson}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-white/35">{copy.menu.vat}</p>
            <a
              href={restaurantInfo.fullMenuPdfUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center border border-[#dca51d] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#f2bd39] transition-colors hover:bg-[#dca51d] hover:text-[#15130f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2bd39]"
            >
              {copy.menu.pdfAction}
            </a>
          </Reveal>

          <Reveal delay={0.12} className="relative mx-auto hidden min-h-[34rem] w-full max-w-[38rem] sm:block lg:mt-8">
            <div className="group absolute left-0 top-0 aspect-[4/3] w-[74%] overflow-hidden">
              <Image src="/images/food-group-1.jpg" alt={copy.menu.groupOne} fill sizes="(max-width: 1024px) 70vw, 32rem" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="group absolute bottom-0 right-0 aspect-[4/3] w-[72%] overflow-hidden border-[8px] border-[#090908]">
              <Image src="/images/food-group-2.jpg" alt={copy.menu.groupTwo} fill sizes="(max-width: 1024px) 70vw, 30rem" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
