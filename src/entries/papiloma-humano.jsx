import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PadecimientoPage from "../pages/padecimientos/PadecimientoPage";
import "../styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PadecimientoPage slug="papiloma-humano" />
  </StrictMode>
);
