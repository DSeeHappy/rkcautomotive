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
- Google Tag Manager container: `GTM-K5993G47` (account: RKC Automotive)
- `NEXT_PUBLIC_GTM_ID` may override the production GTM container ID.
- GA4 measurement ID: `G-RKV1HQ9L0E` — fires via GTM Google Tag (not a
  direct gtag snippet). Do not re-add client-side `gtag/js` or hits will
  double-count.
- Microsoft Clarity project: `xud66x0h8d` (direct snippet; optional
  `NEXT_PUBLIC_MICROSOFT_CLARITY_ID` override).
- Sitewide GA4 events include `click_to_call`, `click_to_text`,
  `click_to_email`, `get_directions`, and `generate_lead`.
- Contact form submissions go through [Tally.so](https://tally.so)
  (`NEXT_PUBLIC_TALLY_CONTACT_FORM_ID`, default `2EYvPD`). Optional Spanish
  form: `NEXT_PUBLIC_TALLY_CONTACT_FORM_ID_ES`. Embed fires `generate_lead`
  on `Tally.FormSubmitted`.

Never place Google account credentials or API secrets in the repository.

## Cloudflare production setting

If the site is proxied through Cloudflare, disable **Email Address
Obfuscation** under Scrape Shield. It rewrites `tel:` links to
`about:invalid#zCSafez` and breaks click-to-call in the navigation, hero, and
footer. Phone links use `data-cfemail="false"` and a client-side `tel:` restore
as a fallback, but turning obfuscation off is the reliable fix.
