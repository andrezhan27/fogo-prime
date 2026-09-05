'use client';

import Image from 'next/image';
import { ArrowUpRight, Clapperboard, Play } from 'lucide-react';
import { socialVideos } from '@/data/restaurant';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/providers/LanguageProvider';

export function SocialVideos() {
  const { copy } = useLanguage();

  return (
    <section id="videos" className="overflow-hidden bg-[#221a13] px-5 py-24 text-[#f7f0e5] sm:px-8 sm:py-32 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[90rem]">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f2bd39]">{copy.social.eyebrow}</p>
            <h2 className="mt-5 max-w-4xl font-heading text-[clamp(3rem,5.5vw,5.6rem)] leading-[0.94] font-semibold tracking-[-0.04em]">{copy.social.title}</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#c9bdad] sm:text-lg">{copy.social.body}</p>
        </Reveal>

        <div className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 sm:gap-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {socialVideos.map((video, index) => (
            <Reveal key={video.href} delay={index * 0.07} className="w-[78vw] max-w-[24rem] shrink-0 snap-center lg:w-auto lg:max-w-none">
              <a href={video.href} target="_blank" rel="noreferrer" className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2bd39]" aria-label={`${copy.social.watch} ${video.platform}: ${copy.social[video.key]}`}>
                <div className="relative aspect-[9/14] overflow-hidden bg-[#0b0b0a]">
                  <Image src={video.thumbnail} alt="" fill sizes="(max-width: 1024px) 78vw, 30vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/20" />
                  <span className="absolute left-1/2 top-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Play aria-hidden="true" className="ml-1 size-5 fill-current" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f2bd39]">
                      <Clapperboard aria-hidden="true" className="size-4" />
                      {video.platform}
                    </div>
                    <p className="font-heading text-3xl font-semibold leading-tight">{copy.social[video.key]}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                      {copy.social.watch} {video.platform}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
