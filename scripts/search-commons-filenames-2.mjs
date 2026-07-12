const QUERIES = {
  'Honda::CR-V': '2023 Honda CR-V Sport front left',
  'Toyota::Corolla': '2020 Toyota Corolla SE sedan front',
  'Toyota::Prius': '2019 Toyota Prius LE front',
  'Ford::Bronco': '2021 Ford Bronco Outer Banks front',
  'Chevrolet::Traverse': '2019 Chevrolet Traverse front',
  'Chevrolet::Colorado': '2019 Chevrolet Colorado front',
  'Chevrolet::Malibu': '2019 Chevrolet Malibu front',
  'Chevrolet::Tahoe': '2021 Chevrolet Tahoe front',
  'Chevrolet::Suburban': '2021 Chevrolet Suburban front',
  'Mercedes-Benz::E-Class': '2019 Mercedes-Benz E450 front',
  'Mercedes-Benz::GLC': '2019 Mercedes-Benz GLC front',
  'Mercedes-Benz::GLA': '2019 Mercedes-Benz GLA front',
  'Mercedes-Benz::S-Class': '2021 Mercedes-Benz S500 front',
  'Mercedes-Benz::Sprinter': '2019 Mercedes-Benz Sprinter front',
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
for (const [key, q] of Object.entries(QUERIES)) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srnamespace=6&format=json&srlimit=3&origin=*`;
  const res = await fetch(url, { headers: { 'User-Agent': 'RKC/1.0' } });
  const data = await res.json();
  console.log(key, '\t', data.query?.search?.[0]?.title?.replace(/^File:/, '') ?? 'NONE');
  await sleep(12000);
}
