# Sitio Dr. Aldo León Ogaz — Urólogo

Vite + React + Tailwind CSS v4, arquitectura **multi-page** (cada subpágina
genera su propio HTML real, indexable de forma independiente — no es una SPA
con rutas de cliente).

## Comandos

```bash
pnpm install       # o npm install
pnpm run dev        # servidor local, http://localhost:5173
pnpm run build       # genera /dist listo para subir por FTP
pnpm run preview     # sirve /dist localmente para revisar el build final
```

## Estructura

```
├── index.html                    → Home (/)
├── chihuahua/index.html          → Landing de sede (/chihuahua)
├── iztapalapa/index.html         → Landing de sede (/iztapalapa)
├── papiloma-humano/index.html    → Página de padecimiento (/papiloma-humano)
├── disfuncion-erectil/index.html
├── crecimiento-prostatico/index.html
├── calculos-renales/index.html
├── vasectomia/index.html
├── deteccion-cancer-prostata/index.html
│
├── src/
│   ├── entries/        → un archivo .jsx por cada HTML de arriba (monta el root de React)
│   ├── pages/           → componentes de página (Home, SedePage, PadecimientoPage)
│   │   └── padecimientos/
│   ├── components/      → Header, Footer, FloatingWhatsApp (reutilizables en todas las páginas)
│   ├── data/             → doctor.js, sedes.js, padecimientos.js — toda la info editable en un solo lugar
│   └── styles/index.css → import de Tailwind v4
│
└── vite.config.js       → rollupOptions.input lista TODOS los entry points del build
```

## Cómo agregar un nuevo padecimiento/paquete

1. Agrega el objeto en `src/data/padecimientos.js`.
2. Crea `nombre-slug/index.html` en la raíz (copia uno existente y cambia el `<script src>` y los meta tags).
3. Crea `src/entries/nombre-slug.jsx` (copia uno existente y cambia el `slug`).
4. Registra el nuevo entry en `vite.config.js` → `build.rollupOptions.input`.
5. (Opcional) Si quiere contenido médico único y extenso, pásalo como `children` de `<PadecimientoPage>` en vez de dejar el placeholder.

## Pendientes de contenido (marcados con TODO en el código)

- `src/data/sedes.js`: confirmar dirección exacta de la sede de Iztapalapa (Doctoralia no la tenía registrada; se usó la sede más cercana como referencia temporal).
- Fotos reales de instalaciones (`src/pages/Home.jsx`, sección "Instalaciones").
- Contenido médico único por cada página de padecimiento (síntomas, causas, tratamiento).
- `public/robots.txt`: reemplazar `TU-DOMINIO-AQUI.com` por el dominio real antes de publicar.
- Meta tags Open Graph (og:image, og:url) por página.
- Datos estructurados Schema.org (`Physician`, `LocalBusiness`) — pendiente para la siguiente iteración.

## Deploy a hosting compartido (Hostinger / HostGator)

1. `pnpm run build`
2. Sube el contenido de la carpeta `dist/` (no la carpeta en sí) a `public_html` vía FileZilla.
3. Cada subpágina queda accesible directamente como `tudominio.com/papiloma-humano`, `tudominio.com/chihuahua`, etc. — sin necesidad de configurar `.htaccess` para rutas de cliente, porque cada una ya es un HTML real generado en el build.
