import { doctor } from "../data/doctor";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" className="text-sm font-semibold text-navy">
          {doctor.nombre}
        </a>
        <nav className="hidden gap-6 text-sm text-ink md:flex">
          <a href="/#padecimientos" className="transition-colors hover:text-brand">Padecimientos</a>
          <a href="/#consultas" className="transition-colors hover:text-brand">Consultas</a>
          <a href="/#experiencia" className="transition-colors hover:text-brand">Experiencia</a>
          <a href="/chihuahua/" className="transition-colors hover:text-brand">Chihuahua</a>
          <a href="/cdmx/" className="transition-colors hover:text-brand">CDMX</a>
        </nav>
        <a
          href={doctor.redes.doctoralia}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
        >
          Agendar cita
        </a>
      </div>
    </header>
  );
}
