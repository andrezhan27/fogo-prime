'use client';

import Image from 'next/image';
import { foodImages } from '@/data/restaurant';
import { useLanguage } from '@/providers/LanguageProvider';

export function FoodCarousel() {
  const { copy } = useLanguage();

  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#090908] py-4 text-[#f7f0e5] sm:py-5">
      <h3 className="sr-only">{copy.menu.galleryTitle}</h3>
      <div className="food-marquee-track flex w-max">
        {[0, 1].map((setIndex) => (
          <div key={setIndex} className="flex gap-3 pr-3 sm:gap-5 sm:pr-5" aria-hidden={setIndex === 1}>
            {foodImages.map((image) => (
              <figure key={`${setIndex}-${image.src}`} className="group relative aspect-[4/5] w-[clamp(12.5rem,22vw,17rem)] shrink-0 overflow-hidden bg-[#22211e]">
                <Image
                  src={image.src}
                  alt={setIndex === 0 ? copy.menu[image.key] : ''}
                  fill
                  sizes="(max-width: 640px) 12.5rem, (max-width: 1200px) 22vw, 17rem"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
