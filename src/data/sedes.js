// Datos de cada sede para las landing pages /chihuahua y /cdmx.
// Usadas también para el Schema.org LocalBusiness de cada página.

export const sedes = {
  chihuahua: {
    slug: "chihuahua",
    nombreSede: "Hospital Star Médica Chihuahua",
    direccion:
      "Periférico de la Juventud 6103, consultorio 1015, décimo piso, San Francisco Country Club, Chihuahua, Chih. 31110",
    telefono: "614 304 4906",
    whatsapp: "526143044906",
    coords: { lat: 28.6640224, lng: -106.1305618 },
    formasDePago: ["Efectivo", "Transferencia", "PayPal", "Tarjeta de débito", "Tarjeta de crédito"],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=28.6640224,-106.1305618",
    fotos: [1, 2, 3, 4, 5, 6].map((i) => `/instalaciones/chihuahua/foto-${i}.avif`),
  },
  cdmx: {
    slug: "cdmx",
    // TODO: confirmar nombre del hospital/clínica en esta dirección.
    nombreSede: "Sede Ciudad de México",
    direccion: "Camino de Sta. Teresa 1055-S, Héroes de Padierna, Ciudad de México, CP 10700",
    telefono: "614 304 4906",
    whatsapp: "526143044906",
    coords: { lat: 19.3178, lng: -99.2069 },
    formasDePago: ["Efectivo", "Transferencia", "Tarjeta de débito", "Tarjeta de crédito"],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Camino+de+Sta.+Teresa+1055-S,+H%C3%A9roes+de+Padierna,+Ciudad+de+M%C3%A9xico",
    fotos: [], // TODO: agregar fotos cuando estén disponibles en public/instalaciones/cdmx/
  },
};
