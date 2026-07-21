import { seguros } from "../data/seguros";

// Tira animada infinita: la lista se duplica y se desliza -50% de su ancho,
// dando la ilusión de un loop continuo sin salto.
export default function SegurosMarquee() {
  return (
    <section className="bg-white px-6 pb-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-center text-xl font-bold text-navy">
          Aceptamos seguros médicos
        </p>
        <div className="seguros-marquee relative overflow-hidden">
          <div className="seguros-track flex w-max gap-4">
            {[...seguros, ...seguros].map((s, i) => (
              <div
                key={`${s.nombre}-${i}`}
                className="flex h-16 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-rule bg-canvas px-4"
              >
                <img
                  src={s.logo}
                  alt={s.nombre}
                  className="max-h-10 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
