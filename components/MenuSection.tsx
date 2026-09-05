'use client';

import Image from 'next/image';
import { pricing } from '@/data/restaurant';
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
            <h2 className="mt-5 max-w-2xl font-heading text-[clamp(3.1rem,6vw,5.6rem)] leading-[0.94] font-extrabold tracking-[-0.055em]">{copy.menu.title}</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">{copy.menu.intro}</p>

            <div className="mt-12 border-y border-white/15">
              {pricing.map((row) => (
                <div key={row.key} className="grid min-h-[8rem] grid-cols-[1.15fr_.85fr] items-stretch border-b border-white/15 last:border-0">
                  <div className="flex flex-col justify-center pr-4">
                    <strong className="text-base font-bold sm:text-lg">{copy.menu[row.key]}</strong>
                    <span className="mt-1 text-xs text-white/40">{row.key === 'adults' ? copy.menu.adultDetail : copy.menu.childrenAge}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center border-l border-white/10 px-2 text-center">
                    <strong className="font-heading text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">{row.price}</strong>
                    <span className="mt-1 text-[0.68rem] text-white/40 sm:text-xs">{copy.menu.perPerson}</span>
                  </div>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
