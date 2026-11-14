// Copy carried over from dermahouseclinic.com. Rewritten in plain words where the
// earlier draft read as generated (see docs/03-copy-audit.md); no new claims added.

export const concerns = [
  { label: 'Acne and acne scars', href: '/acne/' },
  { label: 'Pigmentation', href: '/pigmentation/' },
  { label: 'Hair fall', href: '/excessive-hair-loss/' },
  { label: 'Unwanted hair', href: '/laser-hair-reduction/' },
  { label: 'Fine lines', href: '/botox/' },
  { label: 'Dull skin', href: '/medifacials/' },
  { label: 'Moles and skin tags', href: '/cyst-removal-mole-removal/' },
  { label: 'Thin brows', href: '/microblading-powder-brows/' },
];

/** The booking process as the clinic runs it. */
export const process = [
  { title: 'Send a request', body: 'Call, WhatsApp or use the form. Tell us what worries you.' },
  { title: 'We confirm a time', body: 'The clinic replies within 24 hours with your appointment.' },
  { title: 'See the dermatologist', body: 'Your skin type, concern and medical history are checked first.' },
  { title: 'Start treatment', body: 'You leave each session with aftercare instructions.' },
];

/** Facts shown beside the booking form. */
export const bookingFacts = [
  { term: 'Reply', detail: 'Within 24 hours' },
  { term: 'Online', detail: 'Video consultations, if you would rather not travel' },
  { term: 'Walk-ins', detail: 'Seen when a slot is free; booking avoids the wait' },
];

export const benefits = [
  { title: 'A plan for your skin', body: 'Your skin or hair type decides the treatment, not a fixed package.' },
  { title: 'Video consultations', body: 'Get advice from home before deciding to visit.' },
  { title: 'FDA-approved equipment', body: 'The clinic’s machines and techniques are FDA-approved and medically proven.' },
  { title: 'Cause before symptom', body: 'Diagnosis comes first, so the treatment addresses why the problem started.' },
];

/** Patient comments exactly as the clinic's previous site published them. Not verified: confirm with the clinic before launch. */
export const testimonials = [
  {
    name: 'Arjun Mehta',
    treatment: 'Anti-ageing',
    quote: 'The anti-aging treatment at Derma House has worked wonders for my skin. My fine lines have significantly reduced, and my skin feels rejuvenated. Thank you for the amazing service and expertise!',
  },
  {
    name: 'Gaurav Sharma',
    treatment: 'Hair treatment',
    quote: 'I tried the hair treatment at Derma House after struggling with hair thinning for years. The results are impressive, and my hair feels much healthier now. Great experience overall!',
  },
  {
    name: 'Jasmine Dhaliwal',
    treatment: 'Permanent makeup',
    quote: 'I opted for permanent makeup at Derma House, and I couldn’t be happier. My eyebrows and eyeliner look so natural and perfectly done. The staff is highly skilled and uses top-notch equipment. Loved it!',
  },
  {
    name: 'Aayushi',
    treatment: 'Skin treatment',
    quote: 'The skin treatment I received at Derma House has completely transformed my skin. My acne scars have faded, and my complexion is glowing like never before. Can’t thank the team enough!',
  },
  {
    name: 'Amanpreet Kaur',
    treatment: 'Laser treatment',
    quote: 'Derma House offers exceptional service! I went for their laser skin treatment, and my skin looks so much smoother and brighter. The staff was courteous, and the clinic is very clean. Worth every penny!',
  },
];

export const homeFaq = [
  {
    q: 'Which skin treatments do you offer?',
    a: 'Acne care, anti-ageing treatments, chemical peels, laser therapy, skin tightening, pigmentation removal, hair restoration, permanent makeup and minor skin surgery. Every treatment starts with a consultation.',
  },
  {
    q: 'How do I know which treatment suits me?',
    a: 'At your first consultation the dermatologist looks at your skin type, your concern and your medical history, then recommends a treatment.',
  },
  {
    q: 'Are the treatments safe?',
    a: 'Treatments are carried out by qualified professionals with clinically approved products, under strict hygiene standards.',
  },
  {
    q: 'How soon will I see results?',
    a: 'Some treatments show a change straight away. Acne and pigmentation usually take a few weeks or months.',
  },
  {
    q: 'What aftercare will I need?',
    a: 'It depends on the procedure. Usually: keep out of the sun, use gentle skincare, drink water and apply anything prescribed. You get written instructions after each session.',
  },
];

export const contactFaq = [
  { q: 'What are your clinic hours?', a: '10:00 AM to 7:00 PM, Monday to Saturday. Closed on Sundays.' },
  { q: 'How do I book an appointment?', a: 'Call, send a WhatsApp message or use the booking form. We confirm within 24 hours.' },
  { q: 'Do you offer online consultations?', a: 'Yes. You can book a video consultation and get a treatment plan without visiting.' },
  { q: 'What do you specialise in?', a: 'Laser treatments, hair restoration, skin rejuvenation, anti-ageing treatments and dermatology.' },
  { q: 'Do you see walk-in patients?', a: 'Yes, when a slot is free. Booking ahead saves you waiting.' },
];

export const aboutFaq = [
  { q: 'How do I book an online consultation?', a: 'Use the booking form or WhatsApp us with a time that suits you. We confirm the slot.' },
  { q: 'Is the equipment certified?', a: 'Procedures use FDA-approved equipment and are carried out by trained professionals.' },
  { q: 'How much does laser treatment or a hair transplant cost?', a: 'It depends on the treatment and the area. You get a quote at your consultation.' },
  { q: 'Is a hair transplant permanent?', a: 'Yes. Transplanted hair follows the natural growth cycle and does not fall out again.' },
];

export const nutritionist = {
  name: 'Dt. Maheep Dhaliwal',
  qualification: 'M.Sc. Food, Nutrition and Dietetics',
  role: 'Clinical Nutritionist',
  bio: 'Dt. Maheep Dhaliwal sees patients at The Derma House and writes diet plans around each person’s health, routine and goals. Her plans are practical enough to keep to, for skin, hair, weight and general health.',
};

export const nutritionTopics = [
  { title: 'How it works', body: 'Your eating habits, routine and goals are assessed, then turned into a plan that fits your day.' },
  { title: 'Who it suits', body: 'Anyone who wants help with healthy eating, weight, skin, hair or general health.' },
  { title: 'The approach', body: 'Habits you can keep, rather than short, strict diets.' },
];

export const nutritionSupport = ['Healthy skin', 'Healthy hair', 'Weight management', 'Hormonal health'];

export const caseStudies: { group: string; items: string[] }[] = [
  { group: 'Laser', items: ['Laser hair reduction', 'Acne scar removal', 'Chicken pox scar removal'] },
  {
    group: 'Derma surgical',
    items: [
      'Mole removal',
      'Venous lake removal',
      'DPN removal',
      'Syringoma removal',
      'Fibrous papule of nose removal',
      'Plantar wart removal',
      'Nodulocystic acne excision',
      'Chicken pox scar revision',
      'Xanthelasma excision',
      'Scar revision (surgical)',
      'Umbilical piercing',
    ],
  },
  {
    group: 'Hair',
    items: ['Hair transplant', 'PRP therapy for hair growth', 'GFC therapy for hair growth', 'Hairline reconstruction'],
  },
  { group: 'Anti-ageing', items: ['Hand fillers', 'Lip filler', 'Botox treatment'] },
];
