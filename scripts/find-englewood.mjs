async function searchEn(q) {
  const u = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srnamespace=6&format=json`;
  const r = await fetch(u, { headers: { 'User-Agent': 'RKCAutomotive/1.0' } });
  return ((await r.json()).query?.search ?? []).slice(0, 5).map((x) => x.title);
}
console.log(await searchEn('Englewood Colorado flag'));
console.log(await searchEn('City of Englewood Colorado'));
