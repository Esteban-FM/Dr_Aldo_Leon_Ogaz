// Cada entrada aquí = una subpágina indexable (/slug) + su tarjeta en Home.
// Para agregar un nuevo padecimiento/paquete:
//   1. Agrega un objeto aquí.
//   2. Crea src/pages/padecimientos/NombrePage.jsx (copia un ejemplo existente).
//   3. Crea src/entries/slug.jsx (copia un ejemplo existente).
//   4. Crea slug/index.html en la raíz (copia un ejemplo existente).
//   5. Agrega el entry point nuevo a vite.config.js -> rollupOptions.input.

export const padecimientos = [
  {
    slug: "papiloma-humano",
    nombre: "Virus del Papiloma Humano (VPH)",
    resumenCorto: "Diagnóstico y tratamiento de verrugas genitales y VPH.",
    mensajeWhatsapp: "Hola, quisiera agendar una consulta por VPH / verrugas genitales.",
  },
  {
    slug: "disfuncion-erectil",
    nombre: "Disfunción Eréctil",
    resumenCorto: "Evaluación y tratamiento personalizado de disfunción eréctil.",
    mensajeWhatsapp: "Hola, quisiera agendar una consulta por disfunción eréctil.",
  },
  {
    slug: "crecimiento-prostatico",
    nombre: "Crecimiento Prostático (Hiperplasia Prostática Benigna)",
    resumenCorto: "Detección y manejo del crecimiento prostático benigno.",
    mensajeWhatsapp: "Hola, quisiera agendar una consulta por crecimiento de próstata.",
  },
  {
    slug: "calculos-renales",
    nombre: "Cálculos Renales",
    resumenCorto: "Diagnóstico por imagen y tratamiento de piedras en el riñón.",
    mensajeWhatsapp: "Hola, quisiera agendar una consulta por cálculos renales.",
  },
  {
    slug: "vasectomia",
    nombre: "Vasectomía",
    resumenCorto: "Procedimiento de anticoncepción masculina definitiva.",
    mensajeWhatsapp: "Hola, quisiera información sobre vasectomía.",
  },
  {
    slug: "deteccion-cancer-prostata",
    nombre: "Detección Oportuna del Cáncer de Próstata",
    resumenCorto: "Revisión preventiva y detección temprana.",
    mensajeWhatsapp: "Hola, quisiera agendar una revisión de detección de cáncer de próstata.",
  },
];
