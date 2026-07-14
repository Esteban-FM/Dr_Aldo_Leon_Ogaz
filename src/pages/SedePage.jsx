import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { sedes } from "../data/sedes";

export default function SedePage({ slug }) {
  const sede = sedes[slug];

  return (
    <>
      <Header />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            Consultorio de Urología
          </span>
          <h1 className="mt-4 text-3xl font-bold text-navy">
            {sede.nombreSede}
          </h1>
          <p className="mt-3 leading-relaxed text-ink">{sede.direccion}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${sede.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-600"
            >
              Agendar por WhatsApp
            </a>
            <a
              href={`tel:${sede.telefono.replace(/\s/g, "")}`}
              className="rounded-full border border-brand px-6 py-3 font-medium text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Llamar: {sede.telefono}
            </a>
          </div>

          <div className="mt-10 rounded-2xl border border-rule bg-canvas p-6">
            <h2 className="mb-2 font-semibold text-navy">Formas de pago aceptadas</h2>
            <p className="text-sm text-ink">{sede.formasDePago.join(" · ")}</p>
          </div>

          <a
            href={sede.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-brand underline transition-colors hover:text-brand-hover"
          >
            Ver ubicación en Google Maps →
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp mensaje={`Hola, quisiera agendar una cita en la sede de ${sede.nombreSede}.`} />
    </>
  );
}
