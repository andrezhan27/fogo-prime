'use client';

import Image from 'next/image';
import { foodImages } from '@/data/restaurant';
import { useLanguage } from '@/providers/LanguageProvider';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function FoodCarousel() {
  const { copy } = useLanguage();

  return (
    <Carousel opts={{ align: 'start', loop: true }} className="mt-10" aria-label={copy.menu.galleryTitle}>
      <CarouselContent className="-ml-3 md:-ml-5">
        {foodImages.map((image, index) => (
          <CarouselItem key={image.src} className="basis-[86%] pl-3 sm:basis-[58%] md:basis-[44%] md:pl-5 lg:basis-[34%]">
            <figure className="group relative aspect-[4/5] overflow-hidden bg-[#22211e]">
              <Image
                src={image.src}
                alt={copy.menu[image.key]}
                fill
                sizes="(max-width: 640px) 86vw, (max-width: 1024px) 44vw, 34vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-5 pt-20 text-sm text-white/90">
                <span className="mr-3 text-[#f2bd39]">0{index + 1}</span>
                {copy.menu[image.key]}
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 top-1/2 size-11 border-white/20 bg-black/70 text-white hover:bg-[#dca51d] hover:text-black disabled:hidden" aria-label={copy.menu.previous} />
      <CarouselNext className="right-3 top-1/2 size-11 border-white/20 bg-black/70 text-white hover:bg-[#dca51d] hover:text-black disabled:hidden" aria-label={copy.menu.next} />
    </Carousel>
  );
}
