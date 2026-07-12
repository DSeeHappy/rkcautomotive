import fs from 'node:fs';

const h = fs.readFileSync('.tmp-live-apex.html', 'utf8');
const count = (re) => (h.match(re) || []).length;

console.log('about:invalid', count(/about:invalid/g));
console.log('tel:+17207493965', count(/tel:\+17207493965/g));
console.log('canonical', h.match(/rel="canonical" href="([^"]+)"/)?.[1]);
console.log('h1', h.match(/<h1[^>]*>([^<]+)/)?.[1]);
console.log('w=3840', count(/w=3840/g));
console.log('w=1920', count(/w=1920/g));

const hero = h.match(/hero-main[\s\S]{0,2000}/);
if (hero) {
  console.log('hero has 3840', /3840/.test(hero[0]));
  console.log('hero has 1920', /1920/.test(hero[0]));
  console.log('hero sizes attr', hero[0].match(/sizes="([^"]+)"/)?.[1]);
  const srcset = hero[0].match(/imageSrcSet="([^"]+)"/)?.[1];
  if (srcset) {
    const widths = [...srcset.matchAll(/(\d+)w/g)].map((m) => Number(m[1]));
    console.log('hero srcset max width', Math.max(...widths));
    console.log('hero srcset widths', widths.join(', '));
  }
}

const invalid = [...h.matchAll(/href="([^"]*invalid[^"]*)"/g)].map((m) => m[1]);
console.log('invalid hrefs', invalid);

const navIdx = h.indexOf('<nav');
const beforeNav = h.slice(Math.max(0, navIdx - 800), navIdx);
console.log('aria-hidden before nav', beforeNav.match(/aria-hidden[^>]*/g));
console.log('context before nav (last 300):', beforeNav.slice(-300));

const navBlock = h.slice(navIdx, navIdx + 2000);
console.log('nav block aria-hidden', navBlock.match(/aria-hidden[^>]*/g));
