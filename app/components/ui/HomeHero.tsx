import Image from 'next/image';
import { PHOTOS } from '@/lib/constants';
import { HERO_IMAGE_SIZES } from '@/lib/photos';
import HomeHeroClient from './HomeHeroClient';

/** Server-rendered LCP hero image — discoverable before client JS hydrates. */
export default function HomeHero() {
  return (
    <HomeHeroClient
      background={
        <>
          <Image
            src={PHOTOS.heroMain}
            alt="RKC Automotive green shop bay entrance in Englewood"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-[78%_56%] sm:object-[74%_53%] lg:object-[70%_50%] ken-burns"
            sizes={HERO_IMAGE_SIZES}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(12, 18, 34, 0.42) 0%, rgba(12, 18, 34, 0.2) 40%, rgba(12, 18, 34, 0.72) 100%)',
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1222]/88 via-[#0c1222]/14 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c1222]/68 via-[#0c1222]/08 to-transparent lg:from-[#0c1222]/55 lg:via-transparent lg:to-transparent"
            aria-hidden
          />
        </>
      }
    />
  );
}
