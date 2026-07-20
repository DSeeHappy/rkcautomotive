'use client';

import Image from 'next/image';
import { AlertTriangle, Camera, FileWarning, Info, Wrench } from 'lucide-react';
import FadeIn from '@/app/components/ui/FadeIn';
import { PHOTOS } from '@/lib/constants';
import { useLanguage } from '@/lib/language';
import { warrantyCopy } from '@/lib/i18n/warrantyCopy';

export default function WarrantyTeardownWarning() {
  const { lang } = useLanguage();
  const copy = warrantyCopy(lang).teardown;

  return (
    <section lang={lang} className="relative overflow-hidden py-0">
      <div className="relative border-y-2 border-amber-500/50 bg-gradient-to-br from-[#1a1208] via-[#0c1222] to-[#0c1222]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.12),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(239,68,68,0.08),transparent_50%)]"
        />

        <div className="wrap relative py-16 sm:py-20">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-amber-500/40 bg-amber-500/10 px-6 py-5 backdrop-blur-sm sm:px-8">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-amber-500/25 ring-2 ring-amber-400/40">
                <AlertTriangle className="size-8 text-amber-300" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">{copy.alertEyebrow}</p>
                <p className="mt-1 font-display text-2xl tracking-wide text-white sm:text-3xl">{copy.alertTitle}</p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <FadeIn className="lg:col-span-7">
              <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] tracking-wide text-white">
                {copy.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">{copy.body}</p>

              <div className="mt-8 rounded-2xl border border-amber-400/30 bg-amber-500/[0.08] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <Info className="mt-0.5 size-6 shrink-0 text-amber-300" aria-hidden />
                  <div>
                    <h3 className="text-lg font-bold text-amber-100">{copy.infoTitle}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">{copy.infoBody}</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="relative lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ring-2 ring-amber-500/30">
                <Image
                  src={PHOTOS.classicEngine}
                  alt="Technicians inspecting engine components during teardown at RKC Automotive"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222]/90 via-[#0c1222]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <Wrench className="size-6 text-amber-300" aria-hidden />
                    <p className="text-sm font-semibold text-white/90">{copy.photoCaption}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12} className="mt-12">
            <div className="grid overflow-hidden rounded-[1.75rem] border border-white/10 sm:grid-cols-2">
              <div className="border-b border-white/10 bg-gradient-to-br from-red-950/80 to-red-900/20 p-8 sm:border-b-0 sm:border-r sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-red-500/20 ring-1 ring-red-400/30">
                    <FileWarning className="size-6 text-red-400" aria-hidden />
                  </span>
                  <h3 className="font-display text-2xl tracking-wide text-red-200">{copy.youPayTitle}</h3>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/70 sm:text-base">
                  {copy.youPayItems.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-red-400">✕</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-950/60 to-primary-green/10 p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary-green/20 ring-1 ring-primary-green/40">
                    <Camera className="size-6 text-primary-green-light" aria-hidden />
                  </span>
                  <h3 className="font-display text-2xl tracking-wide text-primary-green-light">
                    {copy.warrantyPaysTitle}
                  </h3>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/70 sm:text-base">
                  {copy.warrantyPaysItems.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary-green-light">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.16} className="mt-10 max-w-4xl">
            <p className="border-t border-white/10 pt-8 text-base leading-relaxed text-white/60">{copy.footer}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
