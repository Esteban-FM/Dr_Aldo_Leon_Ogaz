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
        iztapalapa: resolve(__dirname, "iztapalapa/index.html"),
        papilomaHumano: resolve(__dirname, "papiloma-humano/index.html"),
        disfuncionErectil: resolve(__dirname, "disfuncion-erectil/index.html"),
        crecimientoProstatico: resolve(__dirname, "crecimiento-prostatico/index.html"),
        calculosRenales: resolve(__dirname, "calculos-renales/index.html"),
        vasectomia: resolve(__dirname, "vasectomia/index.html"),
        deteccionCancerProstata: resolve(__dirname, "deteccion-cancer-prostata/index.html"),
        // Al agregar un nuevo padecimiento/paquete, súmalo aquí también.
      },
    },
  },
});
