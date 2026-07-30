# RKC Automotive

Production website for [RKC Automotive](https://rkcautomotive.com), built with
Next.js and deployed through Vercel.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

Before shipping changes, run:

```bash
npm run lint
npm run build
npm run verify:seo
```

## Search and analytics

- Canonical host: `https://rkcautomotive.com`
- Search Console property: `sc-domain:rkcautomotive.com`
- Sitemap: `https://rkcautomotive.com/sitemap.xml`
- GA4 measurement ID: `G-RKV1HQ9L0E`
- `NEXT_PUBLIC_GA_ID` may override the production measurement ID.
- Sitewide GA4 events include `click_to_call`, `click_to_text`,
  `click_to_email`, `get_directions`, and `generate_lead`.

Never place Google account credentials or API secrets in the repository.

## Cloudflare production setting

If the site is proxied through Cloudflare, disable **Email Address
Obfuscation** under Scrape Shield. It rewrites `tel:` links to
`about:invalid#zCSafez` and breaks click-to-call in the navigation, hero, and
footer. Phone links use `data-cfemail="false"` and a client-side `tel:` restore
as a fallback, but turning obfuscation off is the reliable fix.
