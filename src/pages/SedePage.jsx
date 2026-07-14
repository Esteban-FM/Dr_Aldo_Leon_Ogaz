import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { sedes } from "../data/sedes";

export default function SedePage({ slug }) {
  const sede = sedes[slug];
  const containerRef = useRef(null);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.timeline({ defaults: { ease: "power3.out" } })
      .from(".sede-badge",   { opacity: 0, y: reduced ? 0 : 16, duration: 0.45 })
      .from(".sede-title",   { opacity: 0, y: reduced ? 0 : 24, duration: 0.5  }, "-=0.28")
      .from(".sede-address", { opacity: 0, y: reduced ? 0 : 14, duration: 0.4  }, "-=0.28")
      .from(".sede-actions", { opacity: 0, y: reduced ? 0 : 12, duration: 0.4  }, "-=0.25")
      .from(".sede-card",    { opacity: 0, y: reduced ? 0 : 12, duration: 0.35 }, "-=0.2");
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <Header />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <span className="sede-badge inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            Consultorio de Urología
          </span>
          <h1 className="sede-title mt-4 text-3xl font-bold text-navy">
            {sede.nombreSede}
          </h1>
          <p className="sede-address mt-3 leading-relaxed text-ink">{sede.direccion}</p>

          <div className="sede-actions mt-8 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${sede.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-600"
            >
              Agendar por WhatsApp
            </a>
            <a
              href={`tel:${sede.telefono.replace(/\s/g, "")}`}
              className="btn-pill rounded-full border border-brand px-6 py-3 font-medium text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Llamar: {sede.telefono}
            </a>
          </div>

          <div className="sede-card mt-10 rounded-2xl border border-rule bg-canvas p-6">
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

          {sede.fotos?.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-4 text-lg font-semibold text-navy">Instalaciones</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {sede.fotos.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Instalaciones ${sede.nombreSede} ${i + 1}`}
                    className="aspect-square w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp mensaje={`Hola, quisiera agendar una cita en la sede de ${sede.nombreSede}.`} />
    </div>
  );
}
