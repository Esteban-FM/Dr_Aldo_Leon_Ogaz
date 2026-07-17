import { useEffect, useRef, useState } from "react";

// Estado compartido de un carrusel con auto-avance, usado cuando la imagen
// principal y sus controles (miniaturas/dots) se renderizan en partes
// distintas del layout (ej. columnas distintas según el breakpoint).
export function useCarousel(length, interval = 5000) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = (index) => {
    setCurrent(((index % length) + length) % length);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % length), interval);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [length]);

  const navigate = (index) => { goTo(index); resetTimer(); };

  return { current, navigate };
}
