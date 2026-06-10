import { useState, useEffect } from "react";
import { MOBILE_BREAKPOINT } from "../constants"; // Ajuste le chemin si besoin

export const useIsMobile = () => {
  // On utilise max-width pour correspondre au comportement mobile
  const query = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};
