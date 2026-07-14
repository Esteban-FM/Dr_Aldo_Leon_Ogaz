// Datos de cada sede para las landing pages /chihuahua y /iztapalapa.
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
  },
  iztapalapa: {
    slug: "iztapalapa",
    // TODO: Doctoralia no lista todavía un consultorio específico en Iztapalapa;
    // la sede más cercana registrada es Hospital MAC la Viga (CDMX, colonia
    // limítrofe con Iztapalapa). Confirmar con el médico la dirección exacta
    // de la sede de Iztapalapa antes de publicar.
    nombreSede: "Hospital MAC la Viga",
    direccion: "Calzada la Viga 117, interior 811, Ciudad de México, CP 09430",
    telefono: "55 3105 1808",
    whatsapp: "526143044906",
    coords: { lat: 19.4171028, lng: -99.1277847 },
    formasDePago: ["Efectivo"],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=19.4171028,-99.1277847",
  },
};
