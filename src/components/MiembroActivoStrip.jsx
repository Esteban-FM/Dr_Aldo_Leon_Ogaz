import { miembroActivo } from "../data/miembroActivo";

// Tira estática (sin animación) de organizaciones de membresía, mismo
// tamaño de tarjeta que SegurosMarquee para mantener consistencia visual.
export default function MiembroActivoStrip() {
  return (
    <section className="bg-white px-6 pb-16 pt-4">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-center text-xl font-bold text-navy">Miembro activo:</p>
        <div className="flex flex-wrap justify-center gap-4">
          {miembroActivo.map((m) => (
            <div
              key={m.nombre}
              className="flex h-16 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-rule bg-canvas px-4 text-center"
            >
              {m.logo ? (
                <img
                  src={m.logo}
                  alt={m.nombre}
                  className="max-h-10 max-w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="text-xs font-medium leading-tight text-ink">{m.nombre}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
