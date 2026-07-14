import { useRef, useState, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Lightbox({ images, startIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const overlayRef = useRef(null);
  const imgRef = useRef(null);

  // Bloquea scroll del body mientras el lightbox está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Animación de cierre → llama onClose al terminar para que el padre desmonte
  const handleClose = useCallback(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced) gsap.to(imgRef.current, { scale: 0.96, duration: 0.16, ease: "power3.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, ease: "power2.in", onComplete: onClose });
  }, [onClose]);

  // Transición entre imágenes: fade out → cambia src → fade in
  const goTo = useCallback((index) => {
    const next = ((index % images.length) + images.length) % images.length;
    gsap.to(imgRef.current, {
      opacity: 0, duration: 0.14, ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(next);
        gsap.to(imgRef.current, { opacity: 1, duration: 0.18, ease: "power2.out" });
      },
    });
  }, [images.length]);

  // Teclado: Escape cierra, flechas navegan
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape")      handleClose();
      if (e.key === "ArrowRight")  goTo(currentIndex + 1);
      if (e.key === "ArrowLeft")   goTo(currentIndex - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex, handleClose, goTo]);

  // Animación de entrada
  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.from(overlayRef.current, { opacity: 0, duration: 0.22 });
    if (!reduced) gsap.from(imgRef.current, { scale: 0.94, duration: 0.3, ease: "power3.out" });
  });

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/85 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      {/* Botón cerrar */}
      <button
        className="btn-pill absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
        onClick={handleClose}
        aria-label="Cerrar"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Flecha anterior */}
      {images.length > 1 && (
        <button
          className="btn-pill absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
          onClick={(e) => { e.stopPropagation(); goTo(currentIndex - 1); }}
          aria-label="Anterior"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      {/* Imagen */}
      <img
        ref={imgRef}
        src={images[currentIndex]}
        alt={`Vista previa ${currentIndex + 1} de ${images.length}`}
        className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Flecha siguiente */}
      {images.length > 1 && (
        <button
          className="btn-pill absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
          onClick={(e) => { e.stopPropagation(); goTo(currentIndex + 1); }}
          aria-label="Siguiente"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}

      {/* Contador */}
      {images.length > 1 && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/50">
          {currentIndex + 1} / {images.length}
        </p>
      )}
    </div>
  );
}
