import React from "react";
import styles from "./About.module.css";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiTypescript, SiNestjs } from "react-icons/si";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaPython,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";
const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about}>
        <h1 className={styles.name}>
          Quem é <strong>Adeilson Dias</strong>?
        </h1>
        <p className={styles.description}>
          Iniciei minha jornada na programação em janeiro de 2024, movido pela
          paixão por tecnologia e pela vontade de criar interfaces modernas,
          responsivas e acessíveis. Atualmente, curso Análise e Desenvolvimento
          de Sistemas, com foco em HTML, CSS, JavaScript e React.js. Valorizo
          boas práticas de UI/UX, testes e controle de versão com Git para
          garantir qualidade e escalabilidade. Estou em constante aprendizado e
          planejo expandir meus conhecimentos para Python , Node.js,TypeScript ,
          entre outras... buscando crescer como desenvolvedor e entregar
          soluções cada vez mais completas.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "150px",
          marginTop: "10%",
        }}
      >
        <h1 className={styles.textSkills}>Minhas Skills</h1>
        <div className={styles.skills}>
          <div className={styles.habilidades}>
            <h2>React JS</h2>
            <p>
              {" "}
              <RiReactjsFill />
            </p>
          </div>
          <div className={styles.habilidades}>
            <h2>Javascript</h2>
            <p>
              {" "}
              <SiJavascript />
            </p>
          </div>
          <div className={styles.habilidades}>
            <h2>CSS</h2>
            <p>
              {" "}
              <FaCss3 />
            </p>
          </div>
          <div className={styles.habilidades}>
            <h2>HTML</h2>
            <p>
              {" "}
              <FaHtml5 />
            </p>
          </div>

          <div className={styles.habilidades}>
            <h2>Tailwind</h2>
            <p>
              {" "}
              <RiTailwindCssFill />
            </p>
          </div>
          <div className={styles.habilidades}>
            <h2>Bootstrap</h2>
            <p>
              {" "}
              <FaBootstrap />
            </p>
          </div>
          <div className={styles.habilidades}>
            <h2>Git</h2>
            <p>
              {" "}
              <FaGitAlt />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
