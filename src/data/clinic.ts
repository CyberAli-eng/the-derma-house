// Single source of truth for the clinic's name, address, phone and hours.
// Every page, the footer, structured data and the booking form read from here.

export const clinic = {
  name: 'The Derma House',
  legalName: 'Kakkar Healthcare',
  founder: 'Dr. Aanchal S. Kakkar',
  tagline: 'Skin · Laser · Hair Transplant',
  site: 'https://dermahouseclinic.com',
  phoneDisplay: '+91 79019 64540',
  phoneE164: '+917901964540',
  whatsapp: '917901964540',
  email: 'tdhskinclinic@gmail.com',
  address: {
    line1: 'Opp. SBI Bank, Karnal Road',
    city: 'Kaithal',
    region: 'Haryana',
    postalCode: '136027',
    country: 'IN',
  },
  hours: {
    label: 'Mon–Sat, 10:00 AM – 7:00 PM',
    note: 'Closed on Sundays',
    schema: 'Mo-Sa 10:00-19:00',
  },
  mapsLink: 'https://maps.app.goo.gl/QHWYYhgGFMBnUxfu8',
  mapsEmbed:
    'https://maps.google.com/maps?q=The%20Derma%20House%20Skin%20Clinic%2C%20Opp.%20SBI%20Bank%2C%20Karnal%20Road%2C%20Kaithal%20136027&t=m&z=15&output=embed&iwloc=near',
  social: {
    instagram: 'https://www.instagram.com/thedermahouse_skinclinic',
    facebook: 'https://www.facebook.com/thedermahouseskinclinic',
  },
} as const;

export const fullAddress = `${clinic.address.line1}, ${clinic.address.city}, ${clinic.address.region} ${clinic.address.postalCode}`;

export function whatsappLink(message = 'Hello The Derma House, I would like to book a consultation.'): string {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}
