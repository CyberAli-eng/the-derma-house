import treatmentsJson from './treatments.json';

export interface TreatmentSection {
  heading: string;
  body: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Treatment {
  slug: string;
  title: string;
  category: string;
  summary: string;
  sections: TreatmentSection[];
  indications: string[];
  faq: Faq[];
}

export interface Category {
  slug: string;
  title: string;
  short: string;
  intro: string;
  image: string;
  imageAlt: string;
}

// The clinic's own photographs, taken from dermahouseclinic.com (see public/images).
export const img = {
  hero: '/images/hero-treatment.jpg',
  skin: '/images/skin.jpg',
  laser: '/images/laser.jpg',
  hair: '/images/hair.jpg',
  ageing: '/images/anti-ageing.jpg',
  peel: '/images/chemical-peel.jpg',
  pmu: '/images/permanent-makeup.jpg',
  surgical: '/images/derma-surgery.jpg',
  transplant: '/images/hair-transplant.jpg',
  nutritionist: '/images/maheep-dhaliwal.jpg',
};

/** Before-and-after pairs the clinic has published (watermarked thedermahouse_skinclinic). */
export const results = [
  { src: '/images/result-1.webp', alt: 'Before and after photographs of an older woman’s face: wrinkles and dark patches visibly lighter after treatment' },
  { src: '/images/result-2.webp', alt: 'Before and after photographs of a man’s cheek: acne scars and marks visibly reduced after treatment' },
  { src: '/images/result-3.webp', alt: 'Before and after photographs of the skin around a woman’s mouth: darkening visibly lighter after treatment' },
  { src: '/images/result-4.webp', alt: 'Before and after photographs of a woman’s face: pigmentation on the cheeks and nose visibly lighter after treatment' },
];

export const categories: Category[] = [
  {
    slug: 'skin-treatments',
    title: 'Skin Treatments',
    short: 'Acne, pigmentation, psoriasis, vitiligo and allergies',
    intro:
      'Acne, pigmentation, psoriasis, vitiligo, urticaria, allergies and heavy sweating, each diagnosed by a dermatologist before treatment starts.',
    image: img.skin,
    imageAlt: 'A clinician applying a cream mask to a patient’s face',
  },
  {
    slug: 'laser-treatments',
    title: 'Laser Treatments',
    short: 'Hair reduction, scars, pigmentation, tattoos and HIFU',
    intro:
      'Laser hair reduction, scar, pigmentation, tattoo and birthmark removal with diode and Q-switch lasers, plus HIFU skin tightening and excimer therapy.',
    image: img.laser,
    imageAlt: 'A laser handpiece being used on a patient’s face',
  },
  {
    slug: 'hair-treatments',
    title: 'Hair Treatments',
    short: 'Hair fall, GFC/PRP, mesotherapy and transplants',
    intro:
      'Hair fall looked at for its cause first, then treated with GFC or PRP, mesotherapy, scalp micropigmentation or a hair transplant.',
    image: img.hair,
    imageAlt: 'A clinician treating a patient’s scalp',
  },
  {
    slug: 'anti-ageing-treatments',
    title: 'Anti-Ageing',
    short: 'Botox, fillers, threads, Profhilo and skin boosters',
    intro:
      'Botox, fillers, thread lifts, Profhilo, skin boosters and microneedling radiofrequency for lines, sagging and lost volume, without surgery.',
    image: img.ageing,
    imageAlt: 'An anti-ageing treatment being given to a patient’s face',
  },
  {
    slug: 'chemical-peel-medifacials',
    title: 'Chemical Peels & Medifacials',
    short: 'Medical-grade peels and customised facials',
    intro:
      'Chemical peels and medifacials chosen for your skin type, for acne, pigmentation, dull skin and early lines.',
    image: img.peel,
    imageAlt: 'A chemical peel being brushed onto a patient’s face',
  },
  {
    slug: 'permanent-makeup',
    title: 'Permanent Makeup',
    short: 'Microblading, powder brows, lip blush and BB Glow',
    intro:
      'Microblading, powder brows, lip blush and BB Glow: cosmetic tattooing for brows, lips and skin tone that lasts.',
    image: img.pmu,
    imageAlt: 'A brow being shaped with a fine pen',
  },
  {
    slug: 'derma-surgical-treatments',
    title: 'Derma Surgical Treatments',
    short: 'Moles, cysts, warts, lipoma, scars and more',
    intro:
      'Moles, cysts, warts, skin tags, lipomas, corns, ingrown nails, xanthelasma and scars, removed or repaired in the clinic.',
    image: img.surgical,
    imageAlt: 'A minor skin procedure under way',
  },
];

export const treatments: Treatment[] = treatmentsJson as Treatment[];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const treatmentsIn = (slug: string) => treatments.filter((t) => t.category === slug);
export const treatmentBySlug = (slug: string) => treatments.find((t) => t.slug === slug);

/** Extra content the old site kept on separate thin pages. */
export const treatmentExtras: Record<string, { heading: string; items: string[] }> = {
  'hair-transplant': {
    heading: 'Types of hair transplant',
    items: ['Male hair transplant', 'Female hair transplant', 'Beard hair transplant', 'Eyebrow hair transplant'],
  },
};
