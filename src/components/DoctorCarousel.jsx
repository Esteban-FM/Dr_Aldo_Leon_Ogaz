import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCarousel } from "../hooks/useCarousel";

const INTERVAL = 4000;

export default function DoctorCarousel({ images }) {
  const { current, navigate } = useCarousel(images.length, INTERVAL);
  const imgRefs = useRef([]);

  // Crossfade: anima todas las imágenes hacia su opacidad objetivo
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
    <div className="doctor-carousel">
      {/* Tarjeta con imagen */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-rule shadow-md">
        {images.map((src, i) => (
          <img
            key={src}
            ref={(el) => (imgRefs.current[i] = el)}
            src={src}
            alt={`Dr. Aldo León Ogaz`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: i === 0 ? 1 : 0 }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      {/* Dots tipo píldora expandible */}
      {images.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => navigate(i)}
              aria-label={`Foto ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-5 bg-brand" : "w-1.5 bg-rule hover:bg-dim"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
