'use client';

import { restaurantInfo } from '@/data/restaurant';
import { useLanguage } from '@/providers/LanguageProvider';

export function MapEmbed() {
  const { copy } = useLanguage();

  return (
    <div className="relative min-h-[25rem] overflow-hidden bg-[#d7cbbb] lg:min-h-[36rem]">
      <iframe
        src={restaurantInfo.mapsEmbedUrl}
        title={copy.contact.mapTitle}
        className="absolute inset-0 h-full w-full border-0 grayscale-[.25] contrast-[1.05]"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
