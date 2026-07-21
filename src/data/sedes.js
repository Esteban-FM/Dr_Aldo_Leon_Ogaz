// Datos de cada sede para las landing pages /chihuahua y /cdmx.
// Usadas también para el Schema.org LocalBusiness de cada página.

export const sedes = {
  chihuahua: {
    slug: "chihuahua",
    ciudad: "Chihuahua",
    nombreSede: "Hospital Star Médica Chihuahua",
    direccion:
      "Periférico de la Juventud 6103, consultorio 1015, décimo piso, San Francisco Country Club, Chihuahua, Chih. 31110",
    whatsapp: "526143044906",
    coords: { lat: 28.6640224, lng: -106.1305618 },
    mapsUrl: "https://maps.app.goo.gl/8Fnm9PVCv1LDy4mK7",
    fotos: [1, 2, 3, 4, 5, 6].map((i) => `/instalaciones/chihuahua/foto-${i}.avif`),
    fotosGrande: [1, 2, 3, 4, 5, 6].map((i) => `/instalaciones/chihuahua/grande/foto-${i}.avif`),
  },
  cdmx: {
    slug: "cdmx",
    ciudad: "Ciudad de México",
    nombreSede: "Ciudad de México",
    whatsapp: "526143044906",
    fotos: [1, 2, 3, 4, 5, 6].map((i) => `/instalaciones/cdmx/foto-${i}.avif`),
    fotosGrande: [1, 2, 3, 4, 5, 6].map((i) => `/instalaciones/cdmx/grande/foto-${i}.avif`),
    consultorios: [
      {
        nombre: "Hospital Ángeles Pedregal",
        detalle: "Consultorio 1194",
        direccion: "Camino Sta. Teresa 1055-S, Héroes de Padierna, Ciudad de México, C.P. 10700",
        mapsUrl: "https://maps.app.goo.gl/ZKmfxgbs5t6paiKZ6",
      },
      {
        nombre: "Hospital MAC La Viga",
        detalle: "Consultorio 811, Piso 8",
        direccion: "Calzada de la Viga #1174, El Triunfo, Iztapalapa, Ciudad de México, C.P. 09430",
        mapsUrl: "https://maps.app.goo.gl/jViZZsjkJJ9L5Bi66",
      },
    ],
  },
};
