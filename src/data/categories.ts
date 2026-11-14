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

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const img = {
  hero: unsplash('1552693673-1bf958298935', 1400),
  skin: unsplash('1616394584738-fc6e612e71b9'),
  laser: unsplash('1552693673-1bf958298935'),
  hair: unsplash('1522337360788-8b13dee7a37e'),
  ageing: unsplash('1519824145371-296894a0daa9'),
  peel: unsplash('1570172619644-dfd03ed5d881'),
  pmu: unsplash('1487412947147-5cebf100ffc2'),
  surgical: unsplash('1582719471384-894fbb16e074'),
  transplant: unsplash('1608248543803-ba4f8c70ae0b'),
  nutrition: unsplash('1512621776951-a57141f2eefd'),
  interior: unsplash('1560750588-73207b1ef5b8', 1400),
  serum: unsplash('1515377905703-c4788e51af15'),
  unsplash,
};

export const categories: Category[] = [
  {
    slug: 'skin-treatments',
    title: 'Skin Treatments',
    short: 'Acne, pigmentation, psoriasis, vitiligo and allergies',
    intro:
      'Clear acne, reduce pigmentation or achieve an even tone with medical-grade skin therapies. Every plan starts with a dermatologist looking at the root cause, not just the symptoms.',
    image: img.skin,
    imageAlt: 'Patient receiving a soothing clinical face mask',
  },
  {
    slug: 'laser-treatments',
    title: 'Laser Treatments',
    short: 'Hair reduction, scars, pigmentation, tattoos and HIFU',
    intro:
      'Permanent laser hair reduction, pigmentation removal and tattoo removal with the latest diode and Q-switch lasers, plus HIFU skin tightening and excimer therapy.',
    image: img.laser,
    imageAlt: 'Clinician performing a facial skin treatment',
  },
  {
    slug: 'hair-treatments',
    title: 'Hair Treatments',
    short: 'Hair fall, GFC/PRP, mesotherapy and transplants',
    intro:
      'From PRP therapy to advanced hair transplants: restore your hair naturally and confidently, with a plan built around the cause of your hair loss.',
    image: img.hair,
    imageAlt: 'Woman running her hands through long healthy hair',
  },
  {
    slug: 'anti-ageing-treatments',
    title: 'Anti-Ageing',
    short: 'Botox, fillers, threads, Profhilo and skin boosters',
    intro:
      'Soften lines, restore volume and lift the skin with non-surgical treatments that keep your expressions natural.',
    image: img.ageing,
    imageAlt: 'Gentle facial massage during an anti-ageing session',
  },
  {
    slug: 'chemical-peel-medifacials',
    title: 'Chemical Peels & Medifacials',
    short: 'Medical-grade peels and customised facials',
    intro:
      'Medical-grade peels and customised facials that brighten, hydrate and treat acne, pigmentation and early signs of ageing.',
    image: img.peel,
    imageAlt: 'Peel being applied to a patient’s face with a brush',
  },
  {
    slug: 'permanent-makeup',
    title: 'Permanent Makeup',
    short: 'Microblading, powder brows, lip blush and BB Glow',
    intro:
      'Enhance your features with natural-looking, long-lasting cosmetic tattooing for brows, lips and skin tone.',
    image: img.pmu,
    imageAlt: 'Close-up of defined brows and lips',
  },
  {
    slug: 'derma-surgical-treatments',
    title: 'Derma Surgical Treatments',
    short: 'Moles, cysts, warts, lipoma, scars and more',
    intro:
      'Minor dermatological procedures done safely in-clinic, from mole and cyst removal to scar revision and ear lobe repair.',
    image: img.surgical,
    imageAlt: 'Clinician working in a clinical laboratory',
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
