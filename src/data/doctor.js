// Información base del médico, extraída de su perfil de Doctoralia.
// TODO: confirmar/ampliar estos datos directamente con el Dr. Aldo.

export const doctor = {
  nombre: "Dr. Aldo León Ogaz",
  especialidad: "Urólogo",
  tituloCorto: "Urólogo / Uro-oncólogo",
  certificacion: "Certificado por el Consejo Mexicano de Urología",
  cedulas: ["14818168", "10992932"],
  bio: `Cirujano Urólogo certificado por el Consejo Mexicano de Urología. Realizó sus estudios de subespecialidad en la CDMX en el Hospital Juárez de México con título de la UNAM. Urólogo oncólogo por la Universidad de Monterrey.`,
  enfoque: [
    "Laparoscopia urológica.",
    "Urología oncológica (cáncer).",
    "Cirugía de próstata láser.",
    "Endourología.",
    "Andrología.",
  ],
  formacion: [
    { titulo: "Médico Cirujano", institucion: "UNAM, CU CDMX", periodo: "2011–2018" },
    { titulo: "Especialista en Urología", institucion: "UNAM", periodo: "2020–2024" },
    {
      titulo: "Alta especialidad en Uro-oncología y laparoscopia reconstructiva avanzada",
      institucion: "Universidad de Monterrey",
      periodo: "2025–2026",
    },
  ],
  experiencia: [
    {
      puesto: "Cirugía General",
      lugar: "Hospital General de México (CDMX) — UNAM",
      periodo: "2020–2021",
    },
    {
      puesto: "Urología",
      lugar: "Hospital Juárez de México (CDMX) — UNAM",
      periodo: "2021–2024",
    },
    {
      puesto: "Uro-oncología y laparoscopia reconstructiva avanzada",
      lugar: "Centro Estatal de Cancerología (Chihuahua) — Universidad de Monterrey",
      periodo: "2025–2026",
    },
    {
      puesto: "Uro-oncología, rotación externa",
      lugar: "IVO Instituto Valenciano de Oncología (Valencia, España)",
      periodo: "2024",
    },
    {
      puesto: "Título de Médico Cirujano homologado",
      lugar: "Título universitario oficial español",
      periodo: "2020",
    },
  ],
  reconocimientos: [
    "Mención honorífica en la subespecialidad de Urología, Hospital Juárez de México",
    "Ganador 1er lugar Casos Clínicos, 48º Congreso Internacional del Colegio Mexicano de Urología, marzo 2024",
  ],
  idiomas: ["Español", "Inglés"],
  redes: {
    instagram: "https://www.instagram.com/dr.aldoleonogaz/",
    facebook: "https://www.facebook.com/dr.aldoleonogaz",
    doctoralia: "https://www.doctoralia.com.mx/aldo-leon-ogaz/urologo/ciudad-de-mexico",
  },
  whatsapp: "526143044906",
};
