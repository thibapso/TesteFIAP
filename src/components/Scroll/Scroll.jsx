import React, { useState, useEffect } from "react";
import "./Scroll.css";
import ArrowUp from "../../assets/ArrowUp.svg"; // Importando o SVG

export default function Scroll() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      <img src={ArrowUp} alt="Seta para cima" className="scroll-icon" />
    </button>
  );
}
