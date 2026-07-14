import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { doctor } from "../data/doctor";

export default function FloatingWhatsApp({ mensaje = "Hola, quisiera agendar una consulta." }) {
  const btnRef = useRef(null);
  const url = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(mensaje)}`;

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, y: reduced ? 0 : 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", delay: 0.9 }
    );
  }, { scope: btnRef });

  return (
    <a
      ref={btnRef}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-btn btn-pill fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-white shadow-lg shadow-emerald-500/30 md:bottom-6 md:right-6"
      style={{ opacity: 0 }}
      aria-label="Agendar cita por WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.06c-1.5 0-2.89-.41-4.09-1.13l-.29-.17-3.02.76.8-2.93-.19-.3a8.02 8.02 0 0 1-1.24-4.38c0-4.44 3.61-8.06 8.05-8.06 4.44 0 8.05 3.62 8.05 8.06s-3.61 8.15-8.07 8.15Zm4.42-6.02c-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      <span className="hidden text-sm font-medium sm:inline">Agendar cita</span>
    </a>
  );
}
