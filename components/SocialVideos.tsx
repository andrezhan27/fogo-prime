'use client';

import Image from 'next/image';
import { ArrowUpRight, Camera, MessageCircle, Music2, Play } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurant';
import { Reveal } from '@/components/Reveal';
import { useLanguage } from '@/providers/LanguageProvider';

const socialLinks = [
  { key: 'instagram', href: restaurantInfo.instagram, icon: Camera },
  { key: 'tiktok', href: restaurantInfo.tiktok, icon: Music2 },
  { key: 'facebook', href: restaurantInfo.facebook, icon: MessageCircle },
] as const;

export function SocialVideos() {
  const { copy } = useLanguage();

  return (
    <section id="videos" className="bg-[#f3ede2] px-6 py-24 text-[#171510] sm:px-10 sm:py-28 lg:px-16 lg:py-32 xl:px-20">
      <div className="mx-auto max-w-[76rem]">
        <Reveal>
          <h2 className="font-heading text-[clamp(2.7rem,5vw,4.5rem)] leading-none font-semibold tracking-[-0.035em]">{copy.social.title}</h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid overflow-hidden border border-[#cdbfae] bg-[#1b1713] text-[#f7f0e5] lg:grid-cols-[1fr_22rem]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="max-w-xl text-base leading-8 text-[#c9bdad] sm:text-lg">{copy.social.body}</p>
            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
              {socialLinks.map(({ key, href, icon: Icon }) => (
                <a key={key} href={href} target="_blank" rel="noreferrer" className="group flex min-h-14 items-center justify-between border border-white/15 px-4 text-sm font-semibold transition-colors hover:border-[#dca51d] hover:text-[#f2bd39] focus-visible:outline-2 focus-visible:outline-[#f2bd39]">
                  <span className="flex items-center gap-3">
                    <Icon aria-hidden="true" className="size-4 text-[#f2bd39]" strokeWidth={1.8} />
                    {copy.social[key]}
                  </span>
                  <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>

          <a href={restaurantInfo.featuredTikTok} target="_blank" rel="noreferrer" className="group block border-t border-white/12 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#f2bd39] lg:border-l lg:border-t-0" aria-label={`${copy.social.watch} TikTok: ${copy.social.videoCaption}`}>
            <div className="relative mx-auto aspect-[9/12] h-full min-h-[25rem] w-full max-w-[22rem] overflow-hidden bg-[#0b0b0a] lg:aspect-auto">
              <Image src="/images/tiktok-thumbnail.jpg" alt={copy.social.videoCaption} fill sizes="(max-width: 1024px) 22rem, 22rem" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
              <span className="absolute left-1/2 top-1/2 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/55 bg-black/35 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <Play aria-hidden="true" className="ml-1 size-5 fill-current" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#f2bd39]">TikTok · @ondeirempt</span>
                <p className="mt-2 text-lg font-semibold leading-snug">{copy.social.videoCaption}</p>
              </div>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
