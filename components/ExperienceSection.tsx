'use client';

import { Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { MagneticReservationButton } from '@/components/MagneticReservationButton';
import { useLanguage } from '@/providers/LanguageProvider';

export function ExperienceSection() {
  const { copy } = useLanguage();

  return (
    <section id="rodizio" className="relative overflow-hidden bg-[#f3ede2] px-5 py-24 text-[#171510] sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <div aria-hidden="true" className="absolute right-[-8rem] top-[-7rem] size-[24rem] rounded-full border border-[#b9aa94]/35" />
      <div className="mx-auto grid max-w-[90rem] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b6a00]">{copy.experience.eyebrow}</p>
          <div className="mt-8 h-px w-20 bg-[#b98614]" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-4xl font-heading text-[clamp(3rem,6vw,5.8rem)] leading-[0.95] font-semibold tracking-[-0.035em] text-balance">
            {copy.experience.title}
          </h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="max-w-xl text-base leading-8 text-[#5f5548] sm:text-lg">{copy.experience.body}</p>
              <MagneticReservationButton className="mt-8">{copy.experience.reserve}</MagneticReservationButton>
            </div>
            <ul className="border-t border-[#b9aa94]/65">
              {copy.experience.highlights.map((highlight) => (
                <li key={highlight} className="flex min-h-14 items-center gap-4 border-b border-[#b9aa94]/65 text-sm font-semibold uppercase tracking-[0.08em]">
                  <Check aria-hidden="true" className="size-4 text-[#a87300]" strokeWidth={2} />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
