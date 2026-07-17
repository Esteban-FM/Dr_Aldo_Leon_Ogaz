import { useRef, useEffect } from "react";
import gsap from "gsap";

const THUMB_COUNT = 3;

// Miniaturas (filmstrip) + dots del carrusel de instalaciones. Se renderiza
// dos veces desde Home.jsx (una para móvil, bajo la imagen; otra para
// desktop, bajo los botones) mostrando/ocultando cada una según breakpoint,
// ambas controladas por el mismo estado de useCarousel.
export default function InstalacionesThumbnails({ images, current, onNavigate }) {
  const thumbRowRef = useRef(null);

  // Las miniaturas se deslizan cada vez que cambia la imagen principal,
  // para dar dinamismo al cambio.
  useEffect(() => {
    if (!thumbRowRef.current) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.fromTo(
      thumbRowRef.current.children,
      { opacity: 0, x: reduced ? 0 : 14 },
      { opacity: 1, x: 0, duration: 0.35, ease: "power3.out", stagger: 0.04 }
    );
  }, [current]);

  const thumbIndexes = Array.from(
    { length: Math.min(THUMB_COUNT, images.length - 1) },
    (_, i) => (current + 1 + i) % images.length
  );

  return (
    <div>
      {thumbIndexes.length > 0 && (
        <div ref={thumbRowRef} className="grid grid-cols-3 gap-3">
          {thumbIndexes.map((i) => (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              className="aspect-square overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label={`Ver foto ${i + 1} de instalaciones`}
            >
              <img
                src={images[i]}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      <div className="mt-4 flex justify-center gap-1.5 md:justify-start">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            aria-label={`Ir a foto ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-5 bg-brand" : "w-1.5 bg-rule hover:bg-dim"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
