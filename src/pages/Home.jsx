import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Lightbox from "../components/Lightbox";
import DoctorCarousel from "../components/DoctorCarousel";
import InstalacionesSection from "../components/InstalacionesSection";
import SegurosMarquee from "../components/SegurosMarquee";
import MiembroActivoStrip from "../components/MiembroActivoStrip";
import { doctor } from "../data/doctor";
import { padecimientos } from "../data/padecimientos";
import { sedes } from "../data/sedes";
import EnfermedadesAccordion from "../components/EnfermedadesAccordion";

// Miniaturas: recorte cuadrado. Grande: versión alargada para el carrusel
// principal y el lightbox, compuesta para no perder información al recortar.
const fotosInstalaciones = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => `/instalaciones/home/foto-${i}.avif`);
const fotosInstalacionesGrande = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => `/instalaciones/home/grande/foto-${i}.avif`);
const fotosDoctor = [1, 2, 3].map((i) => `/doctor/foto-${i}.avif`);

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Hero entrance — sequenced timeline, runs once on load
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".hero-badge",   { opacity: 0, y: reduced ? 0 : 20, duration: 0.5 })
      .from(".hero-title",   { opacity: 0, y: reduced ? 0 : 28, duration: 0.55 }, "-=0.32")
      .from(".hero-bio",     { opacity: 0, y: reduced ? 0 : 18, duration: 0.5  }, "-=0.30")
      .from(".hero-buttons", { opacity: 0, y: reduced ? 0 : 14, duration: 0.4  }, "-=0.28")
      .from(".hero-photo",   { opacity: 0, x: reduced ? 0 : 24, duration: 0.6  }, "-=0.5");

    // 2. Section headings — fade up on scroll
    gsap.utils.toArray(".anim-head").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: reduced ? 0 : 22,
        duration: 0.4,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    });

    // 3. Padecimientos cards — stagger 60ms (Emil: 30-80ms range)
    gsap.from(".pad-card", {
      opacity: 0,
      y: reduced ? 0 : 20,
      duration: 0.35,
      ease: "power3.out",
      stagger: reduced ? 0 : 0.06,
      scrollTrigger: { trigger: ".pad-grid", start: "top 82%" },
    });

    // 4. Consultas cards — stagger 50ms
    gsap.from(".consulta-card", {
      opacity: 0,
      y: reduced ? 0 : 20,
      duration: 0.35,
      ease: "power3.out",
      stagger: reduced ? 0 : 0.05,
      scrollTrigger: { trigger: ".consulta-grid", start: "top 82%" },
    });

    // 5. Credential chips — fade in together
    gsap.from(".cred-chip", {
      opacity: 0,
      duration: 0.3,
      ease: "power3.out",
      stagger: reduced ? 0 : 0.04,
      scrollTrigger: { trigger: ".cred-chips", start: "top 85%" },
    });

    // 6. Carrusel del doctor
    gsap.from(".doctor-carousel", {
      opacity: 0,
      x: reduced ? 0 : -24,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: { trigger: ".doctor-carousel", start: "top 82%" },
    });

    // 6b. Carrusel de instalaciones + texto
    gsap.from(".instalaciones-carousel", {
      opacity: 0,
      x: reduced ? 0 : -24,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: { trigger: ".instalaciones-carousel", start: "top 82%" },
    });
    gsap.from(".install-text", {
      opacity: 0,
      y: reduced ? 0 : 16,
      duration: 0.4,
      ease: "power3.out",
      stagger: reduced ? 0 : 0.08,
      scrollTrigger: { trigger: ".install-text", start: "top 82%" },
    });

    // 7. Experiencia items — slide from left
    gsap.from(".exp-item", {
      opacity: 0,
      x: reduced ? 0 : -16,
      duration: 0.3,
      ease: "power3.out",
      stagger: reduced ? 0 : 0.05,
      scrollTrigger: { trigger: ".exp-list", start: "top 82%" },
    });

    // 7. Reconocimientos items
    gsap.from(".recon-item", {
      opacity: 0,
      x: reduced ? 0 : -16,
      duration: 0.3,
      ease: "power3.out",
      stagger: reduced ? 0 : 0.05,
      scrollTrigger: { trigger: ".recon-list", start: "top 82%" },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <Header />

      {/* 1. Hero */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 pb-24 pt-16 md:flex-row md:items-center">
          <div className="flex-1 text-center md:text-left">
            <span className="hero-badge inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              Urólogo Certificado · Consejo Mexicano de Urología
            </span>
            <h1 className="hero-title mt-4 text-4xl font-bold leading-tight text-navy md:text-5xl">
              {doctor.nombre}
            </h1>
            <p className="hero-bio mt-4 max-w-xl leading-relaxed text-ink">
              {doctor.bio}
            </p>
            <ul className="hero-bio mt-4 space-y-2">
              {doctor.enfoque.map((punto) => (
                <li key={punto} className="flex items-center gap-2 text-sm text-ink">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  {punto}
                </li>
              ))}
            </ul>
            <div className="hero-buttons mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href={`https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent("Hola, quisiera agendar una consulta.")}`}
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
            <p className="hero-buttons mt-4 text-center text-xs text-dim md:text-left">
              Mi objetivo es el diagnóstico y tratamiento personalizados, con un cuidado completo y lo menos invasivo posible.
            </p>

            {/* Ubicaciones */}
            <div className="hero-buttons mt-5 rounded-2xl border border-rule bg-canvas p-4 text-left">
              <p className="text-xs font-medium uppercase tracking-wide text-dim">Consultorios</p>
              <div className="mt-3 flex divide-x divide-rule">
                {/* Chihuahua */}
                <div className="flex-1 pr-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">Chihuahua</p>
                  <p className="mt-1.5 text-sm font-semibold text-navy">{sedes.chihuahua.nombreSede}</p>
                  <p className="mt-0.5 text-xs font-medium text-brand">{sedes.chihuahua.detalle}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink">{sedes.chihuahua.direccion}</p>
                  <a href={sedes.chihuahua.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1.5 inline-block text-xs text-brand underline transition-colors hover:text-brand-hover">
                    Ver en Google Maps →
                  </a>
                </div>
                {/* CDMX */}
                <div className="flex-1 space-y-3 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">Ciudad de México</p>
                  {sedes.cdmx.consultorios.map((c) => (
                    <div key={c.nombre}>
                      <p className="text-sm font-semibold text-navy">{c.nombre}</p>
                      <p className="mt-0.5 text-xs font-medium text-brand">{c.detalle}</p>
                      <p className="mt-1 text-xs leading-relaxed text-ink">{c.direccion}</p>
                      <a href={c.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1.5 inline-block text-xs text-brand underline transition-colors hover:text-brand-hover">
                        Ver en Google Maps →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-photo w-full flex-shrink-0 overflow-hidden rounded-2xl shadow-lg md:w-[360px]">
            <img
              src="/hero/foto.avif"
              alt="Dr. Aldo León Ogaz, Urólogo"
              className="aspect-[3/4] w-full object-cover md:aspect-auto md:h-[520px]"
            />
          </div>
        </div>
      </section>

      <SegurosMarquee />

      {/* 2. Instalaciones */}
      <InstalacionesSection
        fotos={fotosInstalaciones}
        fotosGrande={fotosInstalacionesGrande}
        whatsapp={doctor.whatsapp}
        doctoraliaUrl={doctor.redes.doctoralia}
        onOpenLightbox={setLightboxIndex}
      />

      {/* 3. Padecimientos */}
      <section id="padecimientos" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="anim-head mb-2 text-2xl font-semibold text-navy">
            Padecimientos y síntomas que atendemos
          </h2>
          <p className="mb-8 text-sm text-dim">Selecciona una categoría para ver los padecimientos.</p>
          <EnfermedadesAccordion />
        </div>
      </section>

      {/* 4. Consultas y paquetes */}
      <section id="consultas" className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="anim-head mb-2 text-2xl font-semibold text-navy">Consultas y paquetes</h2>
          <p className="mb-8 text-sm text-dim">Agenda directamente o solicita más información.</p>
          <div className="consulta-grid grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            {padecimientos.map((p) => (
              <div
                key={p.slug}
                className="consulta-card flex flex-col overflow-hidden rounded-2xl border border-rule bg-white"
              >
                <div>
                  <img
                    src={`/consultas/${p.slug}.avif`}
                    alt={p.nombre}
                    className="aspect-video w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 md:p-6">
                    <h3 className="text-sm font-semibold text-navy md:text-base">{p.nombre}</h3>
                    {p.puntos ? (
                      <ul className="mt-1.5 space-y-0.5 md:mt-2">
                        {p.puntos.map((punto) => (
                          <li key={punto} className="text-xs text-dim md:text-sm">
                            {punto}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-1.5 text-xs text-dim md:mt-2 md:text-sm">{p.resumenCorto}</p>
                    )}
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

      {/* 5. Experiencia y credenciales */}
      <section id="experiencia" className="bg-white px-6 pb-8 pt-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="anim-head mb-8 text-2xl font-semibold text-navy">Experiencia y credenciales</h2>

          <div className="grid gap-8 md:grid-cols-[280px_1fr] md:gap-12">

            {/* Carrusel de fotos del doctor */}
            <div className="mx-auto w-full max-w-[280px] md:mx-0">
              <DoctorCarousel images={fotosDoctor} />
            </div>

            {/* Credenciales y experiencia */}
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

      <MiembroActivoStrip />

      <Footer />
      <FloatingWhatsApp mensaje="Hola, quisiera agendar una consulta." />

      {lightboxIndex !== null && (
        <Lightbox
          images={fotosInstalacionesGrande}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
