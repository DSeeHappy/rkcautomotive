import { preload } from 'react-dom';
import { PHOTOS } from '@/lib/constants';
import HomeHeroClient from './HomeHeroClient';

/** Preload LCP hero on the server; image renders in the client shell for correct fill layout. */
export default function HomeHero() {
  preload(PHOTOS.heroMain, {
    as: 'image',
    fetchPriority: 'high',
  });

  return <HomeHeroClient />;
}
