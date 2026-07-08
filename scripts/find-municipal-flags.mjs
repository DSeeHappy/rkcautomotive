async function searchWiki(domain, q) {
  const u = `https://${domain}/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srnamespace=6&format=json`;
  const r = await fetch(u, { headers: { 'User-Agent': 'RKCAutomotive/1.0' } });
  const d = await r.json();
  return (d.query?.search ?? []).slice(0, 8).map((x) => x.title.replace(/^File:/, ''));
}

for (const q of [
  'Flag of Edgewater Colorado',
  'Flag of Wheat Ridge Colorado',
  'Flag of Lone Tree Colorado',
  'Englewood Colorado logo',
  'Seal of Englewood Colorado',
]) {
  const en = await searchWiki('en.wikipedia.org', q);
  const co = await searchWiki('commons.wikimedia.org', q);
  console.log('\n' + q);
  console.log('  en:', en.join(' | ') || '(none)');
  console.log('  commons:', co.join(' | ') || '(none)');
}
