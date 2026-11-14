# The Derma House: website rebuild

A fast, static rebuild of [dermahouseclinic.com](https://dermahouseclinic.com) for Dr. Aanchal S. Kakkar's dermatology clinic in Kaithal, Haryana. Built with [Astro](https://astro.build), no client framework, about 2.5 KB of JavaScript per page.

- **62 pages:** home, 7 treatment categories, 43 treatment pages, all-treatments index, about, contact, booking, results, nutrition, 3 legal pages, thank-you and 404
- **23 redirects** from the old site's duplicate, typo and test URLs to one canonical page each
- Same URLs as the WordPress site (`/acne/`, `/laser-treatments/` …), so existing rankings and links keep working

## Docs
- [docs/01-site-audit.md](docs/01-site-audit.md): reverse-engineering audit of the old site, with 24 bugs and issues, extracted colours, content inventory and a brand scorecard
- [docs/02-brand-context.md](docs/02-brand-context.md): brand context, messaging, voice, visual identity and the three template references

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run check:links  # fails if any internal link or redirect is broken
```

## Where things live

| What | File |
|---|---|
| Name, phone, address, hours, socials | `src/data/clinic.ts` |
| Categories, images, treatment helpers | `src/data/categories.ts` |
| All 43 treatments (copied from the old site) | `src/data/treatments.json` |
| Testimonials, FAQs, process, nutritionist, case studies | `src/data/content.ts` |
| Design tokens (colours, type, spacing) | `src/styles/global.css` |
| Old-URL redirects | `astro.config.mjs` |

To add a treatment, add an entry to `treatments.json` with an existing `category` slug. Its page, card, sitemap entry and structured data are generated automatically.

## Booking form
The form validates name and Indian mobile number, then opens WhatsApp to +91 79019 64540 with the request pre-filled, so nothing is stored on a server. To collect leads in a CRM or email instead, replace the submit handler in `src/components/BookingForm.astro` with a POST to your form service.

## Before going live (needs the clinic)
- [ ] Dr. Aanchal S. Kakkar's qualifications and medical registration number for an About/doctor section
- [ ] Replace Unsplash placeholder photos with the clinic's own photos and consented before/after images
- [ ] Vector logo (drop in `public/logo.svg` and swap `src/components/Logo.astro`)
- [ ] Confirm "FDA-approved equipment" and "certified dermatologists" claims
- [ ] Legal review of privacy and terms (updated from HIPAA/GDPR to India's DPDP Act 2023, placeholders filled)
- [ ] Fix the Google Business Profile address to match the website
- [ ] Return HTTP 410 for the off-target city blog posts (San Diego, California, Bangalore)

## Deploy
Any static host works (Netlify, Vercel, Cloudflare Pages, Hostinger). Build command `npm run build`, output directory `dist`.
