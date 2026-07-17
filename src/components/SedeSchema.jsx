import { sedes } from "../data/sedes";
import { doctor } from "../data/doctor";
import { SITE_URL } from "../data/site";

// Schema.org MedicalClinic — una por sede. CDMX tiene varios consultorios
// físicos, así que emite un bloque JSON-LD por consultorio.
export default function SedeSchema({ slug }) {
  const sede = sedes[slug];
  const url = `${SITE_URL}/${slug}/`;
  const parentOrganization = { "@type": "Physician", name: doctor.nombre };

  if (Array.isArray(sede.consultorios)) {
    return (
      <>
        {sede.consultorios.map((c) => (
          <script
            key={c.nombre}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MedicalClinic",
                name: c.nombre,
                url,
                telephone: `+${sede.whatsapp}`,
                medicalSpecialty: "Urology",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: c.direccion,
                  addressCountry: "MX",
                },
                parentOrganization,
              }),
            }}
          />
        ))}
      </>
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: sede.nombreSede,
          url,
          telephone: `+${sede.whatsapp}`,
          medicalSpecialty: "Urology",
          address: {
            "@type": "PostalAddress",
            streetAddress: sede.direccion,
            addressLocality: sede.ciudad,
            addressCountry: "MX",
          },
          geo: sede.coords
            ? {
                "@type": "GeoCoordinates",
                latitude: sede.coords.lat,
                longitude: sede.coords.lng,
              }
            : undefined,
          parentOrganization,
        }),
      }}
    />
  );
}
