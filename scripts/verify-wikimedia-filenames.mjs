/**
 * Verify Wikimedia filenames resolve to HTTP 200.
 * Run: node scripts/verify-wikimedia-filenames.mjs
 */
import crypto from 'node:crypto';

const FIXES = {
  'Ford::F-150': '2019 Ford F-150 Lariat Crew Cab, front 2.21.20.jpg',
  'Ford::Explorer': 'Ford Explorer 2020.jpg',
  'Ford::Escape': '2019 Ford Escape SE in White, front left.jpg',
  'Ford::Mustang': '2018 Ford Mustang GT 5.0 Front.jpg',
  'Ford::Bronco': '2023 Ford Bronco 4-Door Outer Banks in Eruption Green, Front Left, 03-17-2023.jpg',
  'Ford::Edge': '2019 Ford Edge facelift Front.jpg',
  'Ford::Ranger': '2019 Ford Ranger XLT Super Cab FX4 front 6.1.19.jpg',
  'Toyota::Camry': '2019 Toyota Camry LE in white, front left.jpg',
  'Toyota::RAV4': '2019 Toyota RAV4 Adventure (United States) front view (cropped).jpg',
  'Toyota::Tacoma': '2020 Toyota Tacoma TRD Pro front NYIAS 2019.jpg',
  'Toyota::4Runner': 'Toyota 4Runner TRD Pro.jpg',
  'Toyota::Highlander': '2016 Toyota Highlander LE, Front Left, 10-13-2020.jpg',
  'Toyota::Corolla': '2020 White Toyota Corolla SE.png',
  'Toyota::Prius': '2019 Toyota Prius Business Edition+ PHEV 1.8.jpg',
  'Mercedes-Benz::C-Class': '2020 Mercedes-Benz C300 AMG Line Night Edition Premium 2.0 Front.jpg',
  'Mercedes-Benz::E-Class': '2019 Mercedes E450 AMG Line Premium+ Auto.jpg',
  'Mercedes-Benz::GLC': '2020 Mercedes-Benz GLC 300 4MATIC in Polar White, front left.jpg',
  'Mercedes-Benz::GLE': '2019 Mercedes-Benz GLE 450 AMG Line Premium+ 4MATIC 3.0 Front.jpg',
  'Mercedes-Benz::GLA': '2020 Mercedes-Benz GLA 200d Front.jpg',
  'Mercedes-Benz::S-Class': '2019 Mercedes-Benz S350d L AMG Line Executive 3.0 Front.jpg',
  'Mercedes-Benz::Sprinter': '2018 Mercedes-Benz Sprinter 314 CDi 2.1 Front.jpg',
};

function wikimediaUrl(filename) {
  const wikiName = filename.replace(/ /g, '_');
  const hash = crypto.createHash('md5').update(wikiName).digest('hex');
  const encoded = wikiName.replace(/[^A-Za-z0-9._-]/g, (ch) => encodeURIComponent(ch));
  return `https://upload.wikimedia.org/wikipedia/commons/${hash[0]}/${hash.slice(0, 2)}/${encoded}`;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const [key, filename] of Object.entries(FIXES)) {
  const url = wikimediaUrl(filename);
  try {
    const r = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'RKC-Automotive/1.0' } });
    console.log(`${r.status}\t${key}\t${filename}`);
    if (r.status !== 200) console.log(`  ${url}`);
  } catch (e) {
    console.log(`ERR\t${key}\t${e.message}`);
  }
  await sleep(3000);
}
