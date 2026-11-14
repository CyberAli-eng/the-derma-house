# dermahouseclinic.com: reverse-engineering audit

Audited 14 November 2026. Sources: live HTML of 80 pages and 13 posts (from the Rank Math sitemap), the LiteSpeed-combined CSS, the rendered page in Chrome, and the WordPress REST headers.

## 1. What the old site is built on

| Layer | Finding |
|---|---|
| CMS | WordPress, page builder **Elementor**, theme **Hub** (Liquid Themes) |
| Hosting | Hostinger (LiteSpeed server, PHP 8.2, LiteSpeed Cache) |
| SEO plugin | Rank Math (sitemap, schema) |
| Leftovers | WooCommerce cart strings ("Adding {{itemName}} to cart") on every page with no shop |
| Built by | "Made in India by Owlwebs" (footer credit) |

## 2. Brand assets extracted

**Colours** (Elementor global tokens and most-used values in CSS):

| Token | Hex | Use on old site | Kept? |
|---|---|---|---|
| Primary | `#00314D` | Header, cards, buttons | Yes, as `--navy` |
| Secondary | `#E6F6FF` | Light panels | Yes, as `--ice` |
| Accent / text | `#000000` | Body text, form button | Replaced by `#0D1B24` ink (softer) |
| Royal blue | `#003399` | 40 uses in CSS, off-palette | Dropped |
| Dark teal | `#184341` | Hero CTA button only | Dropped (inconsistent) |
| Coral | `#FF4D54` | Theme default | Dropped |
| Logo gold | approx. `#B48A3C` | Logo only, never used on the page | **Added** as the accent |

**Type:** Lato for everything (headings, body, buttons). The logo uses a high-contrast serif that the site never echoes.

**Logo:** gold crest with "Dr. Aanchal S. Kakkar's / THE DERMA HOUSE / Skin | Laser | Hair Transplant".

**Contact (NAP):** The Derma House Skin Clinic, Opp. SBI Bank, Karnal Road, Kaithal, Haryana 136027 · +91 79019 64540 · tdhskinclinic@gmail.com · Mon–Sat 10:00–19:00, closed Sunday · operated by Kakkar Healthcare.

## 3. Content inventory

- 7 treatment categories, **43 treatment pages**, each with the same template: *What is / How it works (or Causes) / Benefits / Duration / Safety / Indications*. All 43 were scraped into `src/data/treatments.json`.
- Home, About ("Derma House"), Contact, Book Consultation, Case Studies (23 case types), Food & Nutrition (Dt. Maheep Dhaliwal), Hair Transplant + "Types of hair transplant".
- 3 legal pages (Privacy, Terms, Refund).
- 5 testimonials, 5 home FAQs, 5 contact FAQs, 4 about FAQs, 2 treatment FAQ sets (Acne, Hair Transplant).
- 13 blog posts. 9 of them target cities the clinic does not serve (San Diego, Chula Vista, Hillcrest, California, Bangalore).

## 4. Bugs and issues found

Severity: 🔴 critical (hurts trust, conversion or indexing) · 🟠 high · 🟡 medium.

### Content and trust
| # | Sev | Issue | Where |
|---|---|---|---|
| 1 | 🔴 | **Lorem-ipsum placeholder text live**: the "Do you offer online consultations?" FAQ answers "Far far away, behind the word mountains…" | /contact-us/ |
| 2 | 🔴 | **Wrong location in copy**: "The Derma House, Best Dermatologist in **california**" in a Kaithal clinic's FAQ (and in FAQPage schema) | Home |
| 3 | 🔴 | **Off-target spam blog posts** for San Diego, Chula Vista, Hillcrest, California and Bangalore dermatologists. Looks like doorway content; a risk for Google's spam policies and confusing for patients | /2025/…/ posts |
| 4 | 🔴 | **Template legal text never filled in**: "in accordance with [INDIA/HARYANA ] medical regulations", and privacy compliance cited as "HIPAA, GDPR" (US/EU laws) instead of India's DPDP Act 2023 | /terms-of-service/ |
| 5 | 🟠 | Typos in the primary CTA and legal copy: "Book Your Free **Consultance**", "**Ths** Derma House", "THE **dERMA hOUSE**" (caps-lock heading), "Hyper**hydrosis**", "Xanthelasma Excis**iom**", "Prophilo" | Home, Terms, Refund, Skin |
| 6 | 🟠 | Keyword stuffing mid-sentence: "…Visible Results Every Step. **Best aesthetic clinic in kaithal**, Expert Care…" repeated 3× on home | Home |
| 7 | 🟠 | Testimonials carry fake-looking social handles (@arjun, @gauravsharma) with no source | Home |
| 8 | 🟠 | Lead doctor (Dr. Aanchal S. Kakkar) appears only inside the logo image. No profile, qualifications or registration number anywhere, which weakens E-E-A-T for a medical site | Site-wide |
| 9 | 🟡 | Brand name used four ways: The Derma House / Derma House / Dermahouse Clinic / the derma house clinic | Site-wide |

### Functional and UX
| # | Sev | Issue | Where |
|---|---|---|---|
| 10 | 🔴 | **Primary hero CTA is a dead link** (`href="#"`): "Book Your Free Consultance" goes nowhere | Home |
| 11 | 🔴 | **Horizontal overflow**: page is 2,031px wide in a 1,280px window (Elementor shape dividers and Ken Burns slideshow), causing sideways scroll | Home |
| 12 | 🟠 | Scroll-reveal animations hide content until they fire, leaving a ~300px blank gap above "Our Services" | Home |
| 13 | 🟠 | Treatment category pages are image grids with no copy, no H1, no intro and no CTA | 7 category pages |
| 14 | 🟡 | Form posts to Elementor with no visible validation; "Tell Us About Your Skin , Hair , Or Body Concern" has stray spaces | All forms |
| 15 | 🟡 | WooCommerce "Adding {{itemName}} to cart" template strings in every page, plus a dead cart script | Site-wide |
| 16 | 🟡 | "Read More" / "rEAD more" links with no destination in testimonials and About | Home, About |

### SEO and technical
| # | Sev | Issue | Where |
|---|---|---|---|
| 17 | 🔴 | **15 of 17 audited pages have no H1**; home has an H6 above the H1 | Site-wide |
| 18 | 🔴 | **Duplicate and junk pages indexed**: `template-service-page`, `privacy-policy-2`, `non-surgical-face-lift` and `-2`, `non-surgical-eyebrow-lift` and `-2`, `prophilo`/`profhilo`, `skin-tag`/`skin-tag-removal`, `xanthelasma-excisiom`/`-excision`, `hyperhydrosis`, three `canada-appointment` pages, `derma-house-online-consultation-usa`, two thank-you pages, all in the sitemap | Sitemap |
| 19 | 🟠 | Thin, generic titles: "Acne - The Derma House" (no location or intent); meta descriptions duplicate the first sentence | Treatment pages |
| 20 | 🟠 | Schema marks the clinic as `Person` + `Organization`, not `MedicalClinic` / `LocalBusiness`; no address, hours or geo | Site-wide |
| 21 | 🟠 | **NAP mismatch**: the Google Maps listing shows "Subhash Market, Kaithal–Pundri–Karnal Rd, Ashoka Garden Colony" while the site says "Opp. SBI Bank, Karnal Road". Align the Google Business Profile and the website | GBP vs site |
| 22 | 🟠 | 54 images, 39 without lazy loading, several 2048px images shown at card size; 12 home images without alt text | Home |
| 23 | 🟡 | 139 requests per page view, 12 script tags, Elementor + Hub + Woo CSS | Site-wide |
| 24 | 🟡 | `lang="en-US"` on an Indian site; copyright still "© 2025" | Site-wide |

## 5. Brand health scorecard (brand-audit framework)

| Dimension | Score | Status |
|---|---|---|
| Positioning clarity | 2/5 | 🔴 "Best dermatologist in Kaithal" and California/Bangalore pages blur who it serves |
| Visual identity | 2/5 | 🔴 Gold crest logo vs. navy/royal-blue/teal/black site, no shared system |
| Messaging consistency | 2/5 | 🔴 Four brand names, placeholder text, stuffed keywords |
| Voice and tone | 3/5 | 🟡 Warm in treatment copy, robotic in SEO inserts |
| Audience alignment | 3/5 | 🟡 Right services for Kaithal; off-target blog dilutes it |
| Competitive differentiation | 2/5 | 🔴 Real differentiators (in-house nutritionist, 43 treatments, derma surgery) are buried |
| **Overall** | **14/30** | |

**What works:** a genuinely broad, well-structured treatment catalogue; a recognisable gold crest; an in-house clinical nutritionist; clear opening hours and a working phone/WhatsApp.

## 6. What the rebuild fixes

Every issue above in the website itself is fixed in this repo: real H1 on every page, one canonical URL per treatment with redirects from every duplicate, `MedicalClinic` + `MedicalProcedure` + `FAQPage` + `BreadcrumbList` schema, location-specific titles, a working validated booking form, no placeholder or stuffed text, consistent brand name, gold brought into the palette, no horizontal overflow, content visible without JS, and lazy-loaded images.

**Still needs the clinic (cannot be fixed in code):** Dr. Aanchal S. Kakkar's qualifications and medical registration number, real before/after photos with consent, the vector logo file, the Google Business Profile address fix, a legal review of the updated privacy/terms wording, and returning HTTP 410 for the 9 off-target blog posts when the new site goes live.
