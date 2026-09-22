export const site = {
  name: "Ironclad Commercial Floors",
  short: "Ironclad",
  phone: "(604) 540-3999",
  phoneHref: "tel:+16045403999",
  email: "info@ironcladcommercialfloors.ca",
  street: "783 E 60th Ave",
  city: "Vancouver",
  region: "BC",
  postalCode: "V5X 2A5",
  country: "Canada",
  hours: "Mon–Fri 7:00 AM – 6:00 PM · 24/7 emergency repair",
  mapUrl:
    "https://www.google.com/maps?q=Ironclad+Commercial+Floors+783+E+60th+Ave+Vancouver+BC+V5X+2A5",
  serviceArea: [
    "Vancouver",
    "Burnaby",
    "Surrey",
    "Richmond",
    "Coquitlam",
    "New Westminster",
  ],
  tagline: "Commercial flooring contractor in Vancouver, BC",
};

export const addressLine = `${site.street}, ${site.city}, ${site.region} ${site.postalCode}`;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FlooringContractor",
  name: site.name,
  image: "https://ironcladcommercialfloors.ca/favicon.ico",
  telephone: "+1-604-540-3999",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: "CA",
  },
  areaServed: site.serviceArea.map((c) => ({ "@type": "City", name: `${c}, BC` })),
  openingHours: "Mo-Fr 07:00-18:00",
  priceRange: "$$",
};

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
