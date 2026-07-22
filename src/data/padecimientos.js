// Cada entrada aquí = una subpágina indexable (/slug) + su tarjeta en Home.
// Para agregar un nuevo padecimiento/paquete:
//   1. Agrega un objeto aquí.
//   2. Crea src/pages/padecimientos/NombrePage.jsx (copia un ejemplo existente).
//   3. Crea src/entries/slug.jsx (copia un ejemplo existente).
//   4. Crea slug/index.html en la raíz (copia un ejemplo existente).
//   5. Agrega el entry point nuevo a vite.config.js -> rollupOptions.input.

export const padecimientos = [
  {
    slug: "crecimiento-prostatico",
    nombre: "Crecimiento Prostático (Hiperplasia Prostática Benigna) Cirugía láser",
    resumenCorto: "Detección y manejo del crecimiento prostático obstructivo.",
    mensajeWhatsapp: "Hola, quisiera agendar una consulta por crecimiento de próstata.",
  },
  {
    slug: "piedras-en-los-rinones",
    nombre: "Piedras en los Riñones",
    resumenCorto: "Diagnóstico por imagen y tratamiento de piedras en el riñón.",
    mensajeWhatsapp: "Hola, quisiera agendar una consulta por piedras en los riñones.",
  },
  {
    slug: "papiloma-humano",
    nombre: "Virus del Papiloma Humano (VPH)",
    resumenCorto: "Diagnóstico y tratamiento de verrugas genitales y VPH.",
    mensajeWhatsapp: "Hola, quisiera agendar una consulta por VPH / verrugas genitales.",
  },
  {
    slug: "deteccion-cancer-prostata",
    nombre: "Detección Oportuna del Cáncer de Próstata",
    resumenCorto: "Revisión preventiva y detección temprana.",
    mensajeWhatsapp: "Hola, quisiera agendar una revisión de detección de cáncer de próstata.",
  },
  {
    slug: "disfuncion-erectil",
    nombre: "Disfunción Eréctil",
    resumenCorto: "Evaluación y tratamiento personalizado de disfunción eréctil.",
    mensajeWhatsapp: "Hola, quisiera agendar una consulta por disfunción eréctil.",
  },
  {
    slug: "vasectomia",
    nombre: "Vasectomía",
    resumenCorto: "Procedimiento de anticoncepción masculina definitiva.",
    mensajeWhatsapp: "Hola, quisiera información sobre vasectomía.",
  },
  {
    slug: "circuncision-laser",
    nombre: "Circuncisión Láser",
    resumenCorto: "Procedimiento para tratar la fimosis.",
    mensajeWhatsapp: "Hola, quisiera información sobre circuncisión láser.",
  },
  {
    slug: "tumor-renal",
    nombre: "Tumor Renal (Cáncer)",
    resumenCorto: "Diagnóstico por imagen y tratamiento con control oncológico.",
    mensajeWhatsapp: "Hola, quisiera agendar una consulta por tumor renal.",
  },
  {
    slug: "urgencias",
    nombre: "Urgencias",
    resumenCorto: "Atención inmediata para urgencias urológicas.",
    // Tarjeta muestra estos puntos en lista en vez de resumenCorto (ver Home.jsx/SedePage.jsx).
    puntos: [
      "Hematuria / Sangre en la orina",
      "Cólico renal / Cólico renoureteral",
      "Retención aguda de orina",
    ],
    mensajeWhatsapp: "Hola, tengo una urgencia urológica y necesito atención.",
  },
];
