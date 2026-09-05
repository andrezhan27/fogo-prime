'use client';

import Image from 'next/image';
import { spaceImages } from '@/data/restaurant';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/providers/LanguageProvider';

export function SpaceGallery() {
  const { copy } = useLanguage();

  return (
    <section id="espaco" className="bg-[#f3ede2] px-6 py-24 text-[#171510] sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-20">
      <div className="mx-auto max-w-[68rem]">
        <Reveal className="grid gap-5 lg:grid-cols-[1fr_.9fr] lg:items-end">
          <h2 className="font-heading text-[clamp(2.7rem,5vw,4.5rem)] leading-none font-semibold tracking-[-0.035em]">{copy.space.title}</h2>
          <p className="max-w-xl text-base leading-8 text-[#5f5548] sm:text-lg">{copy.space.body}</p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {spaceImages.map((image, index) => (
            <Reveal key={image.src} delay={Math.min(index * 0.04, 0.16)}>
              <figure className="group relative aspect-[4/3] overflow-hidden bg-[#d3c7b6]">
                <Image
                  src={image.src}
                  alt={copy.space[image.key]}
                  fill
                  sizes="(max-width: 640px) 100vw, 34rem"
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
