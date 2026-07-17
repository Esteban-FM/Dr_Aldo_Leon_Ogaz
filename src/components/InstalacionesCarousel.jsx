import { useRef, useEffect } from "react";
import gsap from "gsap";

// Imagen principal del carrusel — controlada desde afuera (ver useCarousel)
// para que las miniaturas puedan vivir en otra parte del layout en desktop.
export default function InstalacionesCarousel({ images, current, onOpenLightbox }) {
  const imgRefs = useRef([]);

  useEffect(() => {
    images.forEach((_, i) => {
      gsap.to(imgRefs.current[i], {
        opacity: i === current ? 1 : 0,
        duration: 0.55,
        ease: "power2.inOut",
      });
    });
  }, [current, images]);

  return (
    <button
      className="instalaciones-carousel install-frame relative aspect-[3/4.4] w-full overflow-hidden rounded-2xl shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      onClick={() => onOpenLightbox?.(current)}
      aria-label={`Ver foto ${current + 1} de instalaciones en tamaño completo`}
    >
      {images.map((src, i) => (
        <img
          key={src}
          ref={(el) => (imgRefs.current[i] = el)}
          src={src}
          alt={`Instalaciones del consultorio, foto ${i + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: i === current ? 1 : 0 }}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
    </button>
  );
}
