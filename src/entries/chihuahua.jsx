import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SedePage from "../pages/SedePage";
import "../styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SedePage slug="chihuahua" />
  </StrictMode>
);
