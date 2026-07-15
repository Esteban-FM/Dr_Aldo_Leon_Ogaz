import { useState } from "react";
import { enfermedades } from "../data/enfermedades";

export default function EnfermedadesAccordion() {
  const [seleccionado, setSeleccionado] = useState(null);

  const toggle = (i) => setSeleccionado((prev) => (prev === i ? null : i));

  return (
    <div>
      {/* Pills de categorías */}
      <div className="flex flex-wrap gap-2">
        {enfermedades.map((grupo, i) => {
          const activo = seleccionado === i;
          return (
            <button
              key={grupo.grupo}
              onClick={() => toggle(i)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activo
                  ? "border-brand bg-brand text-white"
                  : "border-rule bg-white text-navy hover:border-brand hover:text-brand"
              }`}
            >
              {grupo.grupo}
            </button>
          );
        })}
      </div>

      {/* Panel de sub-items */}
      {seleccionado !== null && (
        <div className="mt-4 rounded-2xl border border-rule bg-canvas p-5">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-dim">
            {enfermedades[seleccionado].grupo}
          </p>
          <ul className="columns-1 gap-x-8 sm:columns-2 md:columns-3">
            {enfermedades[seleccionado].items.map((item) => (
              <li key={item} className="mb-1.5 break-inside-avoid text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
