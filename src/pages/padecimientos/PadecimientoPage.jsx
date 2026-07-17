import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import { doctor } from "../../data/doctor";
import { padecimientos } from "../../data/padecimientos";
import { sedes } from "../../data/sedes";

export default function PadecimientoPage({ slug, children }) {
  const info = padecimientos.find((p) => p.slug === slug);
  const containerRef = useRef(null);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.timeline({ defaults: { ease: "power3.out" } })
      .from(".pad-badge",   { opacity: 0, y: reduced ? 0 : 16, duration: 0.45 })
      .from(".pad-title",   { opacity: 0, y: reduced ? 0 : 24, duration: 0.5  }, "-=0.28")
      .from(".pad-summary", { opacity: 0, y: reduced ? 0 : 14, duration: 0.4  }, "-=0.28")
      .from(".pad-cta",     { opacity: 0, y: reduced ? 0 : 12, duration: 0.4  }, "-=0.25")
      .from(".pad-photo",   { opacity: 0, x: reduced ? 0 : 24, duration: 0.6  }, "-=0.55");
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <Header />

      <article className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_360px] md:items-center">
            <div>
              <span className="pad-badge inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                Urología · Dr. Aldo León Ogaz
              </span>
              <h1 className="pad-title mt-4 text-3xl font-bold text-navy">{info.nombre}</h1>
              <p className="pad-summary mt-3 leading-relaxed text-ink">{info.resumenCorto}</p>

              <div className="pad-cta mt-8">
                <a
                  href={`https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(info.mensajeWhatsapp)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-600"
                >
                  Agendar por WhatsApp
                </a>
              </div>
            </div>

            <div className="pad-photo w-full flex-shrink-0 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={`/consultas/${info.slug}.avif`}
                alt={info.nombre}
                className="aspect-video w-full object-cover md:aspect-square"
              />
            </div>
          </div>

          {/* Contenido único del padecimiento */}
          <div className="prose prose-slate mt-12 max-w-none">
            {children ?? (
              <p className="text-dim">
                {/* TODO: contenido médico redactado — nunca copiado de referencias */}
                Contenido pendiente de redactar para "{info.nombre}".
              </p>
            )}
          </div>

          <div className="mt-12 rounded-2xl border border-rule bg-canvas p-6">
            <h2 className="mb-4 font-semibold text-navy">Disponible en nuestras sedes</h2>
            <div className="flex flex-wrap gap-3">
              {Object.values(sedes).map((s) => (
                <a
                  key={s.slug}
                  href={`/${s.slug}/`}
                  className="btn-pill rounded-full border border-rule px-4 py-2 text-sm text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  {s.nombreSede}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp mensaje={info.mensajeWhatsapp} />
    </div>
  );
}
