import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { doctor } from "../data/doctor";
import { padecimientos } from "../data/padecimientos";

export default function Home() {
  return (
    <>
      <Header />

      {/* 1. Hero */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-24 md:flex-row md:items-center">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              Urólogo Certificado · Consejo Mexicano de Urología
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-navy md:text-5xl">
              {doctor.nombre}
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-ink">
              {doctor.bio}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href={`https://wa.me/${doctor.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-600"
              >
                Escribir por WhatsApp
              </a>
              <a
                href={doctor.redes.doctoralia}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand px-6 py-3 font-medium text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Agendar en Doctoralia
              </a>
            </div>
          </div>
          {/* Placeholder foto del médico — reemplazar con <img> real */}
          <div className="h-80 w-64 flex-shrink-0 rounded-2xl bg-canvas" />
        </div>
      </section>

      {/* 2. Instalaciones */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-2xl font-semibold text-navy">Instalaciones</h2>
          {/* TODO: galería/carrusel de fotos reales del consultorio */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl bg-rule" />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Padecimientos y síntomas */}
      <section id="padecimientos" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-2xl font-semibold text-navy">
            Padecimientos y síntomas que atendemos
          </h2>
          <p className="mb-8 text-sm text-dim">Selecciona un padecimiento para más información.</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {padecimientos.map((p) => (
              <a
                key={p.slug}
                href={`/${p.slug}`}
                className="group rounded-2xl border border-rule bg-canvas p-5 transition hover:border-brand hover:shadow-md"
              >
                <h3 className="font-medium text-navy group-hover:text-brand transition-colors">
                  {p.nombre}
                </h3>
                <p className="mt-1 text-sm text-dim">{p.resumenCorto}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Consultas y paquetes */}
      <section id="consultas" className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-2xl font-semibold text-navy">Consultas y paquetes</h2>
          <p className="mb-8 text-sm text-dim">Agenda directamente o solicita más información.</p>
          <div className="grid gap-5 md:grid-cols-3">
            {padecimientos.map((p) => (
              <div
                key={p.slug}
                className="flex flex-col justify-between rounded-2xl border border-rule bg-white p-6"
              >
                <div>
                  <h3 className="font-semibold text-navy">{p.nombre}</h3>
                  <p className="mt-2 text-sm text-dim">{p.resumenCorto}</p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(p.mensajeWhatsapp)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-emerald-500 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-emerald-600"
                  >
                    Agendar por WhatsApp
                  </a>
                  <a
                    href={`/${p.slug}`}
                    className="rounded-full border border-rule px-4 py-2 text-center text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    Más información
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Experiencia y credenciales */}
      <section id="experiencia" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-semibold text-navy">Experiencia y credenciales</h2>

          <div className="mb-8 flex flex-wrap gap-2">
            {doctor.cedulas.map((c) => (
              <span
                key={c}
                className="rounded-full border border-rule bg-canvas px-3 py-1 text-xs font-medium text-ink"
              >
                Cédula profesional {c}
              </span>
            ))}
            {doctor.idiomas.map((i) => (
              <span
                key={i}
                className="rounded-full border border-rule bg-canvas px-3 py-1 text-xs font-medium text-ink"
              >
                {i}
              </span>
            ))}
          </div>

          <ul className="space-y-4">
            {doctor.experiencia.map((e) => (
              <li key={e.puesto} className="flex gap-4">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand" />
                <div>
                  <p className="font-medium text-navy">{e.puesto}</p>
                  <p className="text-sm text-dim">{e.lugar} · {e.periodo}</p>
                </div>
              </li>
            ))}
          </ul>

          {doctor.reconocimientos?.length > 0 && (
            <div className="mt-10">
              <h3 className="mb-4 text-base font-semibold text-navy">Reconocimientos</h3>
              <ul className="space-y-3">
                {doctor.reconocimientos.map((r) => (
                  <li key={r} className="flex gap-4">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                    <p className="text-sm text-ink">{r}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp mensaje="Hola, quisiera agendar una consulta." />
    </>
  );
}
