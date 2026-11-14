# Brand context: The Derma House

Foundation file in the format of the `brand-context` skill (arnabbagxd/Brand-building-skills). Every design and copy decision in this rebuild reads from here.

## Identity
- **Name:** The Derma House (always with "The"; never "Dermahouse Clinic" or "Derma House Clinic")
- **Descriptor:** Dr. Aanchal S. Kakkar's dermatology and aesthetics clinic
- **Operator:** Kakkar Healthcare
- **Location:** Opp. SBI Bank, Karnal Road, Kaithal, Haryana 136027
- **Specialities:** Skin · Laser · Hair Transplant (plus anti-ageing, permanent makeup, derma surgery, clinical nutrition)

## Audience
1. **Primary:** adults 20–45 in Kaithal and nearby Haryana towns with a visible concern (acne, pigmentation, hair fall, unwanted hair) who want a doctor-led answer, not a salon.
2. **Secondary:** 35–60 seeking anti-ageing, mole/cyst/wart removal or hair transplant who value safety and a known local name.
3. **Tertiary:** patients who prefer to start with an online video consultation.

## Positioning
For people in Kaithal who want visible skin and hair results without guesswork, The Derma House is the doctor-led clinic that has dermatologists, lasers and a clinical nutritionist in one clinic, so a diagnosis comes before any treatment.

## Messaging hierarchy (brand-messaging)
- **Core message:** The Derma House helps people in Kaithal get clearer skin and healthier hair by pairing dermatologist diagnosis with advanced, approved treatment.
- **Headline:** "Skin and hair doctors in Kaithal." (replaced the old "Glow every day with renewed confidence", which read as generic)
- **Proof pillars:** 43 treatments across 7 specialities · certified dermatologists and FDA-approved equipment (clinic's claim, to verify) · in-house clinical nutritionist · online consultations · reply within 24 hours.
- **Do not say:** "best dermatologist in [city]" stuffed into sentences, other cities the clinic does not serve, guaranteed results, prices without consultation.

## Voice (brand-voice)
Calm, expert, warm. Plain words over jargon; short sentences; one claim per sentence; always explain what happens next. Treatment pages: factual, reassuring, no hype.

## Visual identity (brand-identity)
- **Logo:** the clinic's own gold crest (public/images/logo.png, from dermahouseclinic.com). It is drawn in gold and white for a navy ground, so the nav and footer are navy.
- **Palette:** Navy `#00314D` / `oklch(29.9% 0.07 241)` (field: nav, one band, footer), Ice `#E6F6FF` (wells), logo gold `oklch(80% 0.11 88)` (signal on navy only), a deep blue accent `oklch(40% 0.12 243)` for controls and links, warm paper `oklch(97.6% 0.007 85)`, navy-black ink.
- **Type:** Libre Caslon Display for headings (echoes the crest's serif), Lato for body (kept from the old site). Three weights: Caslon 400, Lato 400 and 700.
- **Imagery:** the clinic's own photographs only: treatment photos, four watermarked before-and-after pairs, Dt. Maheep Dhaliwal's portrait, a hair-transplant procedure.
- **Rules (Hallmark):** no eyebrow labels, no italic accent words, no glyphs glued to links, no invented ratings; every colour and font through a token in src/styles/tokens.css.

## Rebrand scope (rebranding)
| Element | Decision |
|---|---|
| Name | Keep |
| Logo | Keep: the original crest PNG from the old site is used in the nav and footer (a vector file would be sharper) |
| Colour | Update: keep navy + ice, add gold, drop royal blue/teal/coral |
| Typography | Update: add serif display, keep Lato |
| Tagline | Replace: "Skin and hair doctors in Kaithal." |
| Positioning | Sharpen to Kaithal + doctor-led + whole-picture care |
| Website | Replace |

## Design references (three clinic templates)
Patterns studied, not copied:
1. **Webestica "Dermato"** (Webflow): concern-first chips, service grid, booking-led flow.
2. **Gutenverse dermatology theme** (WordPress): treatment detail pages with sticky appointment panel and clinic info.
3. **Zarla "Luminé"** (dermatology template): editorial serif hero, imagery-first, generous whitespace.
