/**
 * Search Wikimedia Commons for verified front-view filenames.
 * Run: node scripts/search-commons-filenames.mjs
 */
const QUERIES = {
  'BMW::X5': '2019 BMW X5 front',
  'Chevrolet::Silverado 1500': '2019 Chevrolet Silverado 1500 front',
  'Chevrolet::Equinox': '2018 Chevrolet Equinox front',
  'Ford::F-150': '2021 Ford F-150 front',
  'Ford::Explorer': '2020 Ford Explorer front',
  'Honda::CR-V': '2023 Honda CR-V front',
  'Mercedes-Benz::C-Class': '2022 Mercedes-Benz C300 front',
  'Mercedes-Benz::GLE': '2020 Mercedes-Benz GLE front',
  'Subaru::Forester': '2019 Subaru Forester front',
  'Toyota::Tacoma': '2019 Toyota Tacoma front',
  'Toyota::4Runner': '2019 Toyota 4Runner front',
  'Toyota::Highlander': '2020 Toyota Highlander front',
  'Toyota::Corolla': '2020 Toyota Corolla front',
  'Toyota::Prius': '2019 Toyota Prius front',
  'Ford::Escape': '2020 Ford Escape front',
  'Ford::Bronco': '2021 Ford Bronco front',
  'Ford::Ranger': '2019 Ford Ranger front',
  'Honda::Pilot': '2019 Honda Pilot front',
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (const [key, q] of Object.entries(QUERIES)) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srnamespace=6&format=json&srlimit=3&origin=*`;
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'RKC/1.0' } });
    const data = await res.json();
    const title = data.query?.search?.[0]?.title?.replace(/^File:/, '') ?? 'NONE';
    console.log(`${key}\t${title}`);
  } catch (e) {
    console.log(`${key}\tERROR ${e.message}`);
  }
  await sleep(12000);
}
