import { useState } from "react";
import { doctor } from "../data/doctor";
import PhysicianSchema from "./PhysicianSchema";

const links = [
  { href: "/#padecimientos", label: "Padecimientos" },
  { href: "/#consultas",     label: "Consultas" },
  { href: "/#experiencia",   label: "Experiencia" },
  { href: "/chihuahua/",     label: "Chihuahua" },
  { href: "/cdmx/",          label: "CDMX" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <PhysicianSchema />
      <header className="sticky top-0 z-40 border-b border-rule bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo Dr. Aldo León Ogaz" className="h-8 w-8" />
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-navy">{doctor.nombre}</span>
              <span className="text-xs font-medium text-brand">{doctor.tituloCorto}</span>
            </span>
          </a>

          {/* Nav desktop */}
          <nav className="hidden gap-6 text-sm text-ink md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-brand">
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href={doctor.redes.doctoralia}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover md:inline-block"
          >
            Agendar cita
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setAbierto((v) => !v)}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-canvas md:hidden"
          >
            <span className={`block h-0.5 w-5 bg-navy transition-all duration-200 ${abierto ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-navy transition-all duration-200 ${abierto ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-navy transition-all duration-200 ${abierto ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Menú móvil */}
        <div
          className="md:hidden"
          style={{
            display: "grid",
            gridTemplateRows: abierto ? "1fr" : "0fr",
            transition: "grid-template-rows 320ms cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          <div className="overflow-hidden">
            <nav
              className="flex flex-col border-t border-rule px-6 pb-5 pt-3"
              style={{
                opacity: abierto ? 1 : 0,
                transform: abierto ? "translateY(0)" : "translateY(-8px)",
                transition: "opacity 280ms cubic-bezier(0.23, 1, 0.32, 1), transform 280ms cubic-bezier(0.23, 1, 0.32, 1)",
                transitionDelay: abierto ? "60ms" : "0ms",
              }}
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setAbierto(false)}
                  className="py-3 text-sm text-ink transition-colors hover:text-brand"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={doctor.redes.doctoralia}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setAbierto(false)}
                className="mt-3 rounded-full bg-brand px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand-hover"
              >
                Agendar cita
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
