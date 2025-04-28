import React from "react";
import { styled, Box, useTheme } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AbrirIcon from "../../assets/Abrir.svg";
import FecharIcon from "../../assets/Fechar.svg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  borderTop: "1px solid #AFAFAF",
  borderBottom: "1px solid #AFAFAF",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  "&.Mui-expanded": {
    borderTop: "2px solid #ED145B",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor: "transparent",
    flexDirection: "row",
    padding: "20px 0",
    "& .MuiAccordionSummary-content": {
      margin: 0,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 0,
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "20px 0",
  backgroundColor: "transparent",
  animation: "fadeInSlide 0.6s ease forwards",
  opacity: 0,
  transform: "translateY(20px)",
  "@keyframes fadeInSlide": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Gotham HTF",
  fontSize: "clamp(40px, 6vw, 80px)",
  fontWeight: 500,
  textTransform: "uppercase",
  color: "var(--pastel-blue)",
  marginBottom: "80px",
  position: "relative",
  zIndex: 1,
}));

const SummaryTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Gotham HTF",
  fontSize: "25px",
  fontWeight: 700,
  letterSpacing: "1.25px",
  color: "#ACC1CC",
  textTransform: "uppercase",
}));

const DetailText = styled(Typography)(({ theme }) => ({
  fontFamily: "Gotham HTF",
  fontSize: "18px",
  fontWeight: 400,
  color: "#AFAFAF",
  textAlign: "left",
  lineHeight: 1.6,
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");
  const theme = useTheme();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const renderSummaryContent = (title, panel) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <SummaryTitle component="span">{title}</SummaryTitle>
      <Box
        sx={{
          position: "relative",
          width: 32,
          height: 32,
          marginLeft: "15px",
        }}
      >
        <img
          src={AbrirIcon}
          alt="Abrir"
          aria-hidden={expanded === panel}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: expanded === panel ? 0 : 1,
            transform: expanded === panel ? "rotate(90deg)" : "rotate(0deg)",
            transition: "all 0.4s ease",
          }}
        />
        <img
          src={FecharIcon}
          alt="Fechar"
          aria-hidden={expanded !== panel}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: expanded === panel ? 1 : 0,
            transform: expanded === panel ? "rotate(0deg)" : "rotate(-90deg)",
            transition: "all 0.4s ease",
          }}
        />
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "100px 20px", md: "200px 150px" },
        backgroundColor: "var(--black)",
        position: "relative",
        overflow: "hidden",
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "rgba(0, 107, 183, 0.50)",
          filter: "blur(200px)",
          zIndex: 0,
        },
        "&::before": {
          top: "-100px",
          left: "-100px",
        },
        "&::after": {
          bottom: "-100px",
          right: "-100px",
        },
      }}
    >
      <StyledTitle>Nossa estrutura</StyledTitle>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          position: "relative",
          zIndex: 1,
          margin: "0 auto",
        }}
      >
        {[
          {
            id: "panel1",
            title: "Conexão com o Mercado de Trabalho",
            text: "A FIAP se destaca não apenas pelo seu ensino inovador, mas também pela forma como conecta seus alunos ao mercado de trabalho. A instituição tem parcerias com algumas das maiores empresas de tecnologia do mundo, permitindo que seus estudantes participem de desafios reais, hackathons e programas de mentoria. Dessa forma, além de adquirirem conhecimento teórico e prático, os alunos têm a chance de desenvolver networking e garantir oportunidades de estágio e emprego ainda durante o curso. A FIAP compreende que o aprendizado vai além da sala de aula, por isso incentiva projetos interdisciplinares que desafiam a criatividade e a capacidade de resolução de problemas dos futuros profissionais.",
          },
          {
            id: "panel2",
            title: "Aprendizado Imersivo",
            text: "Outro diferencial da FIAP é a sua estrutura moderna, pensada para proporcionar uma experiência de aprendizado imersiva e dinâmica.  Os laboratórios contam com equipamentos de ponta e softwares atualizados, permitindo que os alunos experimentem na prática as tecnologias que usarão no mercado de trabalho. Além disso, os espaços colaborativos  são projetados para estimular o trabalho em equipe, um fator essencial para profissionais da área de tecnologia. O ambiente acadêmico da FIAP reflete a realidade das grandes empresas do setor, preparando os alunos para os desafios que enfrentarão ao longo da carreira.",
          },
          {
            id: "panel3",
            title: "Ensino Personalizado",
            text: "A instituição também aposta na personalização do ensino, oferecendo cursos e trilhas de aprendizado que se adaptam aos diferentes perfis de profissionais. Seja para quem deseja seguir carreira no desenvolvimento de software, na ciência de dados, na segurança cibernética ou até mesmo no empreendedorismo digital, a FIAP possui um programa que atende às necessidades do mercado e às aspirações dos estudantes. Além disso, os cursos são atualizados constantemente para acompanhar as inovações tecnológicas, garantindo que os alunos sempre tenham acesso ao que há de mais recente no setor.",
          },
          {
            id: "panel4",
            title: "Inovação e Transformação",
            text: "Por fim, a FIAP se destaca por seu compromisso com a inovação e a transformação digital. A faculdade não apenas ensina tecnologia, mas a utiliza para melhorar a experiência de aprendizado, com plataformas interativas, inteligência artificial aplicada ao ensino e metodologias ativas que engajam os alunos. Seu foco é formar profissionais completos, que não apenas dominam ferramentas e linguagens de programação, mas também sabem resolver problemas, inovar e liderar. Seja para quem busca uma primeira formação ou para profissionais que desejam se atualizar, a FIAP se consolidou como uma das melhores instituições do Brasil para quem quer construir uma carreira de sucesso na tecnologia.",
          },
        ].map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
          >
            <AccordionSummary
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}
            >
              {renderSummaryContent(item.title, item.id)}
            </AccordionSummary>
            <AccordionDetails>
              <DetailText>{item.text}</DetailText>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
