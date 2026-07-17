import { doctor } from "../data/doctor";
import { SITE_URL } from "../data/site";

// Schema.org Physician — global, se renderiza en todas las páginas vía Header.
export default function PhysicianSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.nombre,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/doctor/foto-1.avif`,
    description: doctor.bio,
    telephone: `+${doctor.whatsapp}`,
    medicalSpecialty: "Urology",
    sameAs: Object.values(doctor.redes),
    identifier: doctor.cedulas.map((c) => ({
      "@type": "PropertyValue",
      name: "Cédula profesional",
      value: c,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
