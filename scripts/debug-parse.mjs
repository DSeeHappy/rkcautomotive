import fs from 'node:fs';

const API =
  'https://commons.wikimedia.org/w/api.php?action=parse&page=Flags_of_counties_and_municipalities_in_Colorado&prop=text&format=json';
const res = await fetch(API, {
  headers: { 'User-Agent': 'RKCAutomotive/1.0' },
});
const html = (await res.json()).parse.text['*'];
const start = html.indexOf('id="Neighborhoods_of_Denver"');
const end = html.indexOf('<h2', start + 50);
const section = html.slice(start, end);

const pattern = /<td width="202" align="center" style="display: inline-block;">([\s\S]*?)<\/td>/g;
const matches = [...section.matchAll(pattern)];
console.log('matches', matches.length);
if (matches[0]) {
  console.log('first cell snippet:', matches[0][1].slice(0, 400));
  const nameMatch = matches[0][1].match(
    /<tr><td width="202" align="center"><a[^>]*>([^<]+)<\/a>/
  );
  console.log('nameMatch', nameMatch?.[1]);
}
