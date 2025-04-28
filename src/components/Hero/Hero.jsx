import React, { useEffect, useState } from "react";
import "./Hero.css";
import ScrollDown from "../../assets/ScrollDown.svg";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const scrollToEducation = () => {
    const educationSection = document.getElementById("education");
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className={`hero-title ${animate ? "fade-in" : ""}`}>
          A MAIOR FACULDADE
        </h1>
        <h2 className={`hero-subtitle ${animate ? "fade-in" : ""}`}>
          DE TECNOLOGIA
        </h2>
        <p className={`hero-description ${animate ? "fade-in" : ""}`}>
          Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade
          que prepara profissionais para o futuro, com um ensino prático,
          professores atuantes no mercado e desafios reais que conectam os
          alunos às grandes empresas.
        </p>
      </div>

      <div className="scroll-down">
        <p>SCROLL DOWN</p>
        <button
          className="scroll-down-button"
          aria-label="Scroll para baixo"
          onClick={scrollToEducation}
        >
          <img src={ScrollDown} alt="Scroll Down" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
