import InstalacionesCarousel from "./InstalacionesCarousel";
import InstalacionesThumbnails from "./InstalacionesThumbnails";
import { useCarousel } from "../hooks/useCarousel";

// El estado del carrusel (auto-avance cada 5s) vive aquí, aislado del resto
// de Home/SedePage, para que el tick del timer no re-renderice toda la
// página (acordeón, testimonios, footer, etc.) y produzca stutter en el
// crossfade.
export default function InstalacionesSection({ fotos, fotosGrande, whatsapp, doctoraliaUrl, onOpenLightbox }) {
  const instalaciones = useCarousel(fotos?.length || 1);

  if (!fotos?.length) return null;

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="w-full flex-shrink-0 md:w-[380px]">
            <InstalacionesCarousel
              images={fotosGrande}
              current={instalaciones.current}
              onOpenLightbox={onOpenLightbox}
            />
            {/* En móvil las miniaturas van pegadas a la imagen */}
            <div className="mt-3 md:hidden">
              <InstalacionesThumbnails
                images={fotos}
                current={instalaciones.current}
                onNavigate={instalaciones.navigate}
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="anim-head mb-4 text-3xl font-bold leading-tight text-navy">
              Atención urológica especializada con diagnóstico preciso desde tu primera consulta
            </h2>
            <p className="install-text leading-relaxed text-ink">
              Atendemos los principales padecimientos urológicos con un enfoque integral y
              tecnología de vanguardia.
            </p>
            <p className="install-text mt-4 leading-relaxed text-ink">
              Desde tu primera consulta obtendrás una valoración precisa, diagnóstico oportuno y
              un plan de tratamiento personalizado. Atención privada, profesional y enfocada en
              mejorar tu calidad de vida.
            </p>
            <div className="install-text mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Hola, quisiera agendar una consulta.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill rounded-full bg-emerald-500 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-600"
              >
                Escribir por WhatsApp
              </a>
              <a
                href={doctoraliaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill rounded-full border border-brand px-6 py-3 font-medium text-brand transition-colors hover:bg-brand hover:text-white"
              >
                Agendar en Doctoralia
              </a>
            </div>
            {/* En desktop las miniaturas van debajo de los botones */}
            <div className="install-text mt-6 hidden md:block">
              <InstalacionesThumbnails
                images={fotos}
                current={instalaciones.current}
                onNavigate={instalaciones.navigate}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
