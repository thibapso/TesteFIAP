import React, { useState } from "react";
import "./Education.css";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Education = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section id="education" className="education">
      <h2>EDUCAÇÃO E TECH</h2>
      <div className="education-lados">
        <div className="esquerda">
          <article>
            A FIAP é muito mais do que uma faculdade de tecnologia, é um
            verdadeiro ecossistema de inovação e aprendizado. Conhecida por sua
            abordagem moderna e focada no mercado, a instituição é referência
            quando se trata de formar profissionais capacitados para os desafios
            do futuro. Seja na graduação, pós-graduação ou cursos livres, a FIAP
            entrega um ensino que mistura teoria e prática, preparando os alunos
            para atuar em empresas de ponta ou até mesmo empreender.
          </article>
          <img
            src="/EducationFoto.png"
            alt="imagem do FIAP NEXT"
            onClick={handleOpen}
            className={`education-image ${
              open ? "cursor-close" : "cursor-open"
            }`}
          />
          <p>Figura 1 – Logotipo da FIAP NEXT</p>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(4px)",
              cursor: "url(/CursorClose.svg) 15 15, pointer",
            }}
          >
            <>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "fixed",
                  right: "24px",
                  top: "24px",
                  color: "white",
                  backgroundColor: "rgba(0,0,0,0.3)",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.5)",
                  },
                  zIndex: 1400,
                  cursor: "url(/CursorClose.svg) 15 15, pointer",
                }}
              >
                <CloseIcon />
              </IconButton>
              <img
                src="/EducationFoto.png"
                alt="imagem do FIAP NEXT em tamanho maior"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  objectFit: "contain",
                  cursor: "url(/CursorClose.svg) 15 15, pointer",
                }}
              />
            </>
          </Modal>
        </div>
        <div className="direita">
          <p>
            Com um corpo docente formado por profissionais atuantes no mercado,
            a FIAP não ensina apenas tecnologia, mas também negócios, inovação e
            liderança. Seus cursos abrangem diversas áreas, incluindo:
          </p>
          <p>
            <span>/</span> Tecnologia e Desenvolvimento
          </p>
          <ul>
            <li>- Desenvolvimento de Software</li>
            <li>- Inteligência Artificial</li>
            <li>- Data Science</li>
            <li>- Data Science</li>
          </ul>
          <p>
            <span>/</span> UX/UI, Marketing Digital{" "}
          </p>
          <p>
            <span>/</span> Metodologias e Gestão
          </p>
          <p>
            Além disso, a instituição incentiva fortemente o uso dessas
            metodologias e outras abordagens inovadoras que fazem parte do dia a
            dia de grandes empresas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
