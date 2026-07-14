import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import { doctor } from "../../data/doctor";
import { padecimientos } from "../../data/padecimientos";
import { sedes } from "../../data/sedes";

export default function PadecimientoPage({ slug, children }) {
  const info = padecimientos.find((p) => p.slug === slug);

  return (
    <>
      <Header />

      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
            Urología · Dr. Aldo León Ogaz
          </span>
          <h1 className="mt-4 text-3xl font-bold text-navy">{info.nombre}</h1>
          <p className="mt-3 leading-relaxed text-ink">{info.resumenCorto}</p>

          <div className="mt-8">
            <a
              href={`https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(info.mensajeWhatsapp)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-600"
            >
              Agendar por WhatsApp
            </a>
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
                  href={`/${s.slug}`}
                  className="rounded-full border border-rule px-4 py-2 text-sm text-ink transition-colors hover:border-brand hover:text-brand"
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
    </>
  );
}
