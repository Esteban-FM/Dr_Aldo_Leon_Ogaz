import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Lightbox from "../components/Lightbox";
import DoctorCarousel from "../components/DoctorCarousel";
import { doctor } from "../data/doctor";
import { padecimientos } from "../data/padecimientos";

const fotosChihuahua = [1, 2, 3, 4, 5, 6].map((i) => `/instalaciones/chihuahua/foto-${i}.avif`);
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
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-24 md:flex-row md:items-center">
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
                href={`https://wa.me/${doctor.whatsapp}`}
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
          </div>
          <div className="hero-photo w-full flex-shrink-0 overflow-hidden rounded-2xl shadow-lg md:w-[420px]">
            <img
              src="/hero/foto.avif"
              alt="Dr. Aldo León Ogaz, Urólogo"
              className="aspect-[3/4] w-full object-cover md:aspect-auto md:h-[520px]"
            />
          </div>
        </div>
      </section>

      {/* 2. Instalaciones */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="anim-head mb-6 text-2xl font-semibold text-navy">Instalaciones</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {fotosChihuahua.map((src, index) => (
              <button
                key={src}
                className="install-frame overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Ver foto ${index + 1}`}
              >
                <img
                  src={src}
                  alt={`Instalaciones consultorio Chihuahua ${index + 1}`}
                  className="aspect-square w-full cursor-pointer object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Padecimientos */}
      <section id="padecimientos" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="anim-head mb-2 text-2xl font-semibold text-navy">
            Padecimientos y síntomas que atendemos
          </h2>
          <p className="mb-8 text-sm text-dim">Selecciona un padecimiento para más información.</p>
          <div className="pad-grid grid grid-cols-2 gap-4 md:grid-cols-3">
            {padecimientos.map((p) => (
              <a
                key={p.slug}
                href={`/${p.slug}`}
                className="pad-card group rounded-2xl border border-rule bg-canvas p-5 transition-colors hover:border-brand hover:shadow-md"
              >
                <h3 className="font-medium text-navy transition-colors group-hover:text-brand">
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
          <h2 className="anim-head mb-2 text-2xl font-semibold text-navy">Consultas y paquetes</h2>
          <p className="mb-8 text-sm text-dim">Agenda directamente o solicita más información.</p>
          <div className="consulta-grid grid gap-5 md:grid-cols-3">
            {padecimientos.map((p) => (
              <div
                key={p.slug}
                className="consulta-card flex flex-col justify-between rounded-2xl border border-rule bg-white p-6"
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
                    className="btn-pill rounded-full bg-emerald-500 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-emerald-600"
                  >
                    Agendar por WhatsApp
                  </a>
                  <a
                    href={`/${p.slug}`}
                    className="btn-pill rounded-full border border-rule px-4 py-2 text-center text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
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

      <Footer />
      <FloatingWhatsApp mensaje="Hola, quisiera agendar una consulta." />

      {lightboxIndex !== null && (
        <Lightbox
          images={fotosChihuahua}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
