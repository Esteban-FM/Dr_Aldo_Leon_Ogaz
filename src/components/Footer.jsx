import { doctor } from "../data/doctor";
import { padecimientos } from "../data/padecimientos";
import { sedes } from "../data/sedes";

export default function Footer() {
  return (
    <footer className="bg-navy px-6 py-12">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        <div>
          <p className="mb-1 text-sm font-semibold text-white">{doctor.nombre}</p>
          <p className="text-sm text-white/50">{doctor.especialidad} · {doctor.certificacion}</p>
          <a
            href={doctor.redes.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-white/60 underline transition-colors hover:text-white"
          >
            Instagram
          </a>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Padecimientos</p>
          <ul className="space-y-2 text-sm">
            {padecimientos.map((p) => (
              <li key={p.slug}>
                <a href={`/${p.slug}`} className="text-white/50 transition-colors hover:text-white">
                  {p.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Sedes</p>
          <ul className="space-y-2 text-sm">
            {Object.values(sedes).map((s) => (
              <li key={s.slug}>
                <a href={`/${s.slug}`} className="text-white/50 transition-colors hover:text-white">
                  {s.nombreSede}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-5xl text-xs text-white/30">
        © {new Date().getFullYear()} {doctor.nombre}. Todos los derechos reservados.
      </p>
    </footer>
  );
}
