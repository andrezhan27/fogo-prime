'use client';

import Image from 'next/image';
import { spaceImages } from '@/data/restaurant';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/providers/LanguageProvider';

const gridClasses = [
  'md:col-span-7 md:row-span-2',
  'md:col-span-5',
  'md:col-span-5',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-4',
];

export function SpaceGallery() {
  const { copy } = useLanguage();

  return (
    <section id="espaco" className="bg-[#f3ede2] px-5 py-24 text-[#171510] sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[90rem]">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b6a00]">{copy.space.eyebrow}</p>
            <h2 className="mt-5 max-w-4xl font-heading text-[clamp(3.1rem,6vw,6rem)] leading-[0.93] font-semibold tracking-[-0.04em]">{copy.space.title}</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#5f5548] sm:text-lg">{copy.space.body}</p>
        </Reveal>

        <div className="mt-14 grid gap-3 md:auto-rows-[16rem] md:grid-cols-12 sm:gap-5">
          {spaceImages.map((image, index) => (
            <Reveal key={image.src} delay={Math.min(index * 0.04, 0.16)} className={gridClasses[index]}>
              <figure className={`group relative h-full min-h-[20rem] overflow-hidden bg-[#d3c7b6] ${index === 5 ? 'md:min-h-0' : ''}`}>
                <Image
                  src={image.src}
                  alt={copy.space[image.key]}
                  fill
                  sizes={index === 0 ? '(max-width: 768px) 100vw, 58vw' : '(max-width: 768px) 100vw, 34vw'}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
