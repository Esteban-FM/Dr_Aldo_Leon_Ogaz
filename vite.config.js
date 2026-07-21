import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        chihuahua: resolve(__dirname, "chihuahua/index.html"),
        cdmx: resolve(__dirname, "cdmx/index.html"),
        papilomaHumano: resolve(__dirname, "papiloma-humano/index.html"),
        disfuncionErectil: resolve(__dirname, "disfuncion-erectil/index.html"),
        crecimientoProstatico: resolve(__dirname, "crecimiento-prostatico/index.html"),
        piedrasEnLosRinones: resolve(__dirname, "piedras-en-los-rinones/index.html"),
        vasectomia: resolve(__dirname, "vasectomia/index.html"),
        deteccionCancerProstata: resolve(__dirname, "deteccion-cancer-prostata/index.html"),
        circuncisionLaser: resolve(__dirname, "circuncision-laser/index.html"),
        tumorRenal: resolve(__dirname, "tumor-renal/index.html"),
        // Al agregar un nuevo padecimiento/paquete, súmalo aquí también.
      },
    },
  },
});
