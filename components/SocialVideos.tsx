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
    <section id="videos" className="overflow-hidden bg-[#221a13] px-5 py-24 text-[#f7f0e5] sm:px-8 sm:py-32 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[90rem] items-center gap-14 lg:grid-cols-[1fr_.72fr] lg:gap-24">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#f2bd39]">{copy.social.eyebrow}</p>
          <h2 className="mt-5 max-w-4xl font-heading text-[clamp(3rem,5.5vw,5.6rem)] leading-[0.94] font-extrabold tracking-[-0.055em]">{copy.social.title}</h2>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#c9bdad] sm:text-lg">{copy.social.body}</p>

          <div className="mt-12 max-w-xl border-t border-white/15">
            {socialLinks.map(({ key, href, icon: Icon }) => (
              <a key={key} href={href} target="_blank" rel="noreferrer" className="group flex min-h-20 items-center justify-between border-b border-white/15 text-base font-semibold transition-colors hover:text-[#f2bd39] focus-visible:outline-2 focus-visible:outline-[#f2bd39]">
                <span className="flex items-center gap-4">
                  <span className="inline-flex size-11 items-center justify-center border border-white/18 text-[#f2bd39]">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                  </span>
                  {copy.social[key]}
                </span>
                <ArrowUpRight aria-hidden="true" className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto w-full max-w-[30rem]">
          <a href={restaurantInfo.featuredTikTok} target="_blank" rel="noreferrer" className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2bd39]" aria-label={`${copy.social.watch} TikTok: ${copy.social.videoCaption}`}>
            <div className="relative aspect-[9/16] overflow-hidden border border-white/12 bg-[#0b0b0a]">
              <Image src="/images/tiktok-thumbnail.jpg" alt={copy.social.videoCaption} fill sizes="(max-width: 1024px) 90vw, 38vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15" />
              <span className="absolute left-1/2 top-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/35 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                <Play aria-hidden="true" className="ml-1 size-5 fill-current" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#f2bd39]">TikTok · @ondeirempt</span>
                <p className="mt-3 text-xl font-bold leading-snug sm:text-2xl">{copy.social.videoCaption}</p>
              </div>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
