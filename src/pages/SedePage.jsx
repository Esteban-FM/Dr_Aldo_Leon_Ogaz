import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Lightbox from "../components/Lightbox";
import DoctorCarousel from "../components/DoctorCarousel";
import InstalacionesCarousel from "../components/InstalacionesCarousel";
import InstalacionesThumbnails from "../components/InstalacionesThumbnails";
import EnfermedadesAccordion from "../components/EnfermedadesAccordion";
import SedeSchema from "../components/SedeSchema";
import { sedes } from "../data/sedes";
import { doctor } from "../data/doctor";
import { padecimientos } from "../data/padecimientos";
import { useCarousel } from "../hooks/useCarousel";

gsap.registerPlugin(ScrollTrigger);

const fotosDoctor = [1, 2, 3].map((i) => `/doctor/foto-${i}.avif`);

export default function SedePage({ slug }) {
  const sede = sedes[slug];
  const containerRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const instalaciones = useCarousel(sede.fotos?.length || 1);

  const hasMultipleConsultorios = Array.isArray(sede.consultorios) && sede.consultorios.length > 0;

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.timeline({ defaults: { ease: "power3.out" } })
      .from(".sede-badge",   { opacity: 0, y: reduced ? 0 : 16, duration: 0.45 })
      .from(".sede-title",   { opacity: 0, y: reduced ? 0 : 24, duration: 0.5  }, "-=0.28")
      .from(".sede-address", { opacity: 0, y: reduced ? 0 : 14, duration: 0.4  }, "-=0.28")
      .from(".sede-actions", { opacity: 0, y: reduced ? 0 : 12, duration: 0.4  }, "-=0.25")
      .from(".sede-card",    { opacity: 0, y: reduced ? 0 : 12, duration: 0.35, stagger: reduced ? 0 : 0.06 }, "-=0.2");

    gsap.utils.toArray(".anim-head").forEach((el) => {
      gsap.from(el, {
        opacity: 0, y: reduced ? 0 : 22, duration: 0.4, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });

    gsap.from(".pad-card", {
      opacity: 0, y: reduced ? 0 : 20, duration: 0.35, ease: "power3.out",
      stagger: reduced ? 0 : 0.06,
      scrollTrigger: { trigger: ".pad-grid", start: "top 82%" },
    });

    gsap.from(".consulta-card", {
      opacity: 0, y: reduced ? 0 : 20, duration: 0.35, ease: "power3.out",
      stagger: reduced ? 0 : 0.05,
      scrollTrigger: { trigger: ".consulta-grid", start: "top 82%" },
    });

    gsap.from(".cred-chip", {
      opacity: 0, duration: 0.3, ease: "power3.out",
      stagger: reduced ? 0 : 0.04,
      scrollTrigger: { trigger: ".cred-chips", start: "top 85%" },
    });

    gsap.from(".doctor-carousel", {
      opacity: 0, x: reduced ? 0 : -24, duration: 0.5, ease: "power3.out",
      scrollTrigger: { trigger: ".doctor-carousel", start: "top 82%" },
    });

    gsap.from(".instalaciones-carousel", {
      opacity: 0, x: reduced ? 0 : -24, duration: 0.5, ease: "power3.out",
      scrollTrigger: { trigger: ".instalaciones-carousel", start: "top 82%" },
    });
    gsap.from(".install-text", {
      opacity: 0, y: reduced ? 0 : 16, duration: 0.4, ease: "power3.out",
      stagger: reduced ? 0 : 0.08,
      scrollTrigger: { trigger: ".install-text", start: "top 82%" },
    });

    gsap.from(".exp-item", {
      opacity: 0, x: reduced ? 0 : -16, duration: 0.3, ease: "power3.out",
      stagger: reduced ? 0 : 0.05,
      scrollTrigger: { trigger: ".exp-list", start: "top 82%" },
    });

    gsap.from(".recon-item", {
      opacity: 0, x: reduced ? 0 : -16, duration: 0.3, ease: "power3.out",
      stagger: reduced ? 0 : 0.05,
      scrollTrigger: { trigger: ".recon-list", start: "top 82%" },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <SedeSchema slug={slug} />
      <Header />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-24 pt-16">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">

            {/* Columna izquierda: info de sede */}
            <div className="flex-1 text-center md:text-left">
              <span className="sede-badge inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                Consultorio de Urología · {sede.ciudad}
              </span>
              <h1 className="sede-title mt-4 text-3xl font-bold text-navy md:text-4xl">
                {doctor.nombre}
              </h1>
              <p className="sede-address mt-4 leading-relaxed text-ink">{doctor.bio}</p>
              <ul className="sede-address mt-4 space-y-2">
                {doctor.enfoque.map((punto) => (
                  <li key={punto} className="flex items-center gap-2 text-sm text-ink justify-center md:justify-start">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    {punto}
                  </li>
                ))}
              </ul>

              <div className="sede-actions mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <a
                  href={`https://wa.me/${sede.whatsapp}?text=${encodeURIComponent("Hola, quisiera agendar una consulta.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-600"
                >
                  Agendar por WhatsApp
                </a>
                <a
                  href={doctor.redes.doctoralia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill rounded-full border border-brand px-6 py-3 font-medium text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  Agendar en Doctoralia
                </a>
              </div>

              {/* Dirección única (ej. Chihuahua) */}
              {!hasMultipleConsultorios && sede.direccion && (
                <div className="sede-address mt-6 rounded-2xl border border-rule bg-canvas p-4 text-left">
                  <p className="text-xs font-medium uppercase tracking-wide text-dim">Ubicación</p>
                  <p className="mt-1.5 font-semibold text-navy">{sede.nombreSede}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink">{sede.direccion}</p>
                  {sede.mapsUrl && (
                    <a href={sede.mapsUrl} target="_blank" rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs text-brand underline transition-colors hover:text-brand-hover">
                      Ver en Google Maps →
                    </a>
                  )}
                </div>
              )}

              {/* Múltiples consultorios (ej. CDMX) */}
              {hasMultipleConsultorios && (
                <div className="sede-address mt-6 rounded-2xl border border-rule bg-canvas p-4 text-left">
                  <p className="text-xs font-medium uppercase tracking-wide text-dim">Consultorios</p>
                  <div className="mt-3 flex divide-x divide-rule">
                    {sede.consultorios.map((c) => (
                      <div key={c.nombre} className="flex-1 pr-4 first:pl-0 last:pr-0 [&:not(:first-child)]:pl-4">
                        <p className="text-sm font-semibold text-navy">{c.nombre}</p>
                        <p className="mt-0.5 text-xs font-medium text-brand">{c.detalle}</p>
                        <p className="mt-1 text-xs leading-relaxed text-ink">{c.direccion}</p>
                        {c.mapsUrl && (
                          <a href={c.mapsUrl} target="_blank" rel="noopener noreferrer"
                            className="mt-1.5 inline-block text-xs text-brand underline transition-colors hover:text-brand-hover">
                            Ver en Maps →
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Columna derecha: foto del doctor */}
            <div className="sede-actions w-full flex-shrink-0 overflow-hidden rounded-2xl shadow-lg md:w-[380px]">
              <img
                src="/hero/foto.avif"
                alt="Dr. Aldo León Ogaz, Urólogo"
                className="aspect-[3/4] w-full object-cover md:aspect-auto md:h-[480px]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Instalaciones */}
      {sede.fotos?.length > 0 && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-10 md:flex-row md:items-start">
              <div className="w-full flex-shrink-0 md:w-[380px]">
                <InstalacionesCarousel
                  images={sede.fotosGrande}
                  current={instalaciones.current}
                  onOpenLightbox={setLightboxIndex}
                />
                {/* En móvil las miniaturas van pegadas a la imagen */}
                <div className="mt-3 md:hidden">
                  <InstalacionesThumbnails
                    images={sede.fotos}
                    current={instalaciones.current}
                    onNavigate={instalaciones.navigate}
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="anim-head mb-4 text-3xl font-bold leading-tight text-navy">
                  Atención urológica especializada con diagnóstico preciso desde tu primera consulta
                </h2>
                <p className="install-text leading-relaxed text-ink">
                  Atendemos los principales padecimientos urológicos con un enfoque integral y
                  tecnología de vanguardia.
                </p>
                <p className="install-text mt-4 leading-relaxed text-ink">
                  Desde tu primera consulta obtendrás una valoración precisa, diagnóstico oportuno y
                  un plan de tratamiento personalizado. Atención privada, profesional y enfocada en
                  mejorar tu calidad de vida.
                </p>
                <div className="install-text mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                  <a
                    href={`https://wa.me/${sede.whatsapp}?text=${encodeURIComponent("Hola, quisiera agendar una consulta.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-600"
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={doctor.redes.doctoralia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill rounded-full border border-brand px-6 py-3 font-medium text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    Agendar en Doctoralia
                  </a>
                </div>
                {/* En desktop las miniaturas van debajo de los botones */}
                <div className="install-text mt-6 hidden md:block">
                  <InstalacionesThumbnails
                    images={sede.fotos}
                    current={instalaciones.current}
                    onNavigate={instalaciones.navigate}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Padecimientos */}
      <section id="padecimientos" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="anim-head mb-2 text-2xl font-semibold text-navy">
            Padecimientos y síntomas que atendemos
          </h2>
          <p className="mb-8 text-sm text-dim">Selecciona una categoría para ver los padecimientos.</p>
          <EnfermedadesAccordion />
        </div>
      </section>

      {/* Consultas y paquetes */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="anim-head mb-2 text-2xl font-semibold text-navy">Consultas y paquetes</h2>
          <p className="mb-8 text-sm text-dim">Agenda directamente o solicita más información.</p>
          <div className="consulta-grid grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {padecimientos.map((p) => (
              <div key={p.slug} className="consulta-card flex flex-col overflow-hidden rounded-2xl border border-rule bg-white">
                <div>
                  <img
                    src={`/consultas/${p.slug}.avif`}
                    alt={p.nombre}
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 md:p-6">
                    <h3 className="text-sm font-semibold text-navy md:text-base">{p.nombre}</h3>
                    <p className="mt-1.5 text-xs text-dim md:mt-2 md:text-sm">{p.resumenCorto}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-3 pb-3 pt-1 md:px-6 md:pb-6 md:pt-2">
                  <a
                    href={`https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(p.mensajeWhatsapp)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill rounded-full bg-emerald-500 px-2 py-2 text-center text-xs font-medium text-white transition-colors hover:bg-emerald-600 md:px-4 md:text-sm"
                  >
                    Agendar por WhatsApp
                  </a>
                  <a
                    href={`/${p.slug}/`}
                    className="btn-pill rounded-full border border-rule px-2 py-2 text-center text-xs font-medium text-ink transition-colors hover:border-brand hover:text-brand md:px-4 md:text-sm"
                  >
                    Más información
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia y credenciales */}
      <section id="experiencia" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="anim-head mb-8 text-2xl font-semibold text-navy">Experiencia y credenciales</h2>
          <div className="grid gap-8 md:grid-cols-[280px_1fr] md:gap-12">
            <div className="mx-auto w-full max-w-[280px] md:mx-0">
              <DoctorCarousel images={fotosDoctor} />
            </div>
            <div>
              <div className="cred-chips mb-6 flex flex-wrap gap-2">
                {doctor.cedulas.map((c) => (
                  <span key={c} className="cred-chip rounded-full border border-rule bg-canvas px-3 py-1 text-xs font-medium text-ink">
                    Cédula profesional {c}
                  </span>
                ))}
                {doctor.idiomas.map((i) => (
                  <span key={i} className="cred-chip rounded-full border border-rule bg-canvas px-3 py-1 text-xs font-medium text-ink">
                    {i}
                  </span>
                ))}
              </div>
              <ul className="exp-list space-y-4">
                {doctor.experiencia.map((e) => (
                  <li key={e.puesto} className="exp-item flex gap-4">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand" />
                    <div>
                      <p className="font-medium text-navy">{e.puesto}</p>
                      <p className="text-sm text-dim">{e.lugar} · {e.periodo}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {doctor.reconocimientos?.length > 0 && (
                <div className="mt-8">
                  <h3 className="anim-head mb-4 text-base font-semibold text-navy">Reconocimientos</h3>
                  <ul className="recon-list space-y-3">
                    {doctor.reconocimientos.map((r) => (
                      <li key={r} className="recon-item flex gap-4">
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400" />
                        <p className="text-sm text-ink">{r}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp mensaje={`Hola, quisiera agendar una cita en la sede de ${sede.nombreSede}.`} />

      {lightboxIndex !== null && (
        <Lightbox
          images={sede.fotosGrande}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
