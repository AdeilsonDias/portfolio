import React from 'react';
import styles from './Projects.module.css';
import ProjectCalc from "../../assets/ProjectCalc.jpg";
import ProjectCars from "../../assets/ProjectCars.jpg";
import ProjectCEP from "../../assets/ProjectCEP.jpg";
import ProjectCores from "../../assets/ProjectCores.jpg";
import ProjectIMC from "../../assets/ProjectIMC.jpg";
import ProjectMoedas from "../../assets/ProjectMoedas.jpg";
import ProjectNetflix from "../../assets/ProjectNetflix.jpg";
import ProjectTempo from "../../assets/projectTempo.jpg";
import ProjectNumber from "../../assets/ProjetctNumber.jpg";
import ProjectNewMoney from "../../assets/projectNewMoney.jpg";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardProjects}>
        <h1 className={styles.nameProject}>Conversor de Moedas em Tempo Real</h1>
        <a href="https://adeilsondias.github.io/New-Conversor-De-Moedas/" target='_blank'>
          <img src={ProjectNewMoney} alt={ProjectNewMoney} className={styles.imgEdit} />
        </a>
        <p className={styles.description}>
          💱 Um conversor de moedas em tempo real, com suporte a diversas moedas internacionais e atualização automática das taxas de câmbio.
        </p>
        <p>Tecnologias: <span className={styles.tech}>HTML, CSS, JavaScript</span></p>
      </div>

      <div className={styles.cardProjects}>
        <h1 className={styles.nameProject}>Calculadora Índice de Massa Corporal</h1>
        <a href="https://adeilsondias.github.io/Calculadora-IMC-/" target='_blank'>
          <img src={ProjectIMC} alt={ProjectIMC} className={styles.imgEdit} style={{ width: "360px", height: "250px" }} />
        </a>
        <p className={styles.description}>
          Calculadora de Índice de Massa Corporal, totalmente otimizada e funcional.
        </p>
        <p>Tecnologias: <span className={styles.tech}>HTML, CSS, JavaScript, Bootstrap</span></p>
      </div>

      <div className={styles.cardProjects}>
        <h1 className={styles.nameProject}>Calculadora DEV</h1>
        <a href="https://adeilsondias.github.io/Calculadora-DEV/" target='_blank'>
          <img src={ProjectCalc} alt={ProjectCalc} className={styles.imgEdit} />
        </a>
        <p className={styles.description}>
          Aplicação de calculadora com funcionalidades completas, interface intuitiva e resposta imediata para operações básicas.
        </p>
        <p>Tecnologias: <span className={styles.tech}>HTML, CSS, JavaScript</span></p>
      </div>

      <div className={styles.cardProjects}>
        <h1 className={styles.nameProject}>Carros Elétricos</h1>
        <a href="https://adeilsondias.github.io/Site-de-Carros-Eletricos/" target='_blank'>
          <img src={ProjectCars} alt={ProjectMoedas} className={styles.imgEdit} />
        </a>
        <p className={styles.description}>
          Uma landing page moderna e responsiva, dedicada à apresentação de carros elétricos.
        </p>
        <p>Tecnologias: <span className={styles.tech}>HTML, CSS</span></p>
      </div>

      <div className={styles.cardProjects}>
        <h1 className={styles.nameProject}>Jogo Adivinhe o Número</h1>
        <a href="https://adeilsondias.github.io/Adivinhe-o-numero/" target='_blank'>
          <img src={ProjectNumber} alt={ProjectNumber} className={styles.imgEdit} />
        </a>
        <p className={styles.description}>
          Aplicação interativa de adivinhação numérica, construída para praticar manipulação de DOM e lógica condicional em JavaScript.
        </p>
        <p>Tecnologias: <span className={styles.tech}>HTML, CSS, JavaScript</span></p>
      </div>

      <div className={styles.cardProjects}>
        <h1 className={styles.nameProject}>DevFlix</h1>
        <a href="https://adeilsondias.github.io/DevFlix/" target='_blank'>
          <img src={ProjectNetflix} alt={ProjectNetflix} className={styles.imgEdit} style={{ width: "350px", height: "250px" }} />
        </a>
        <p className={styles.description}>
          Projeto de clone da interface da Netflix, totalmente responsivo, utilizando JavaScript para funcionalidades dinâmicas.
        </p>
        <p>Tecnologias: <span className={styles.tech}>HTML, CSS, JavaScript, Bootstrap</span></p>
      </div>

      <div className={styles.cardProjects}>
        <h1 className={styles.nameProject}>Verifique o Tempo</h1>
        <a href="https://adeilsondias.github.io/App-Previsao-Do-Tempo/" target='_blank'>
          <img src={ProjectTempo} alt={ProjectTempo} className={styles.imgEdit} style={{ width: "350px", height: "250px" }} />
        </a>
        <p className={styles.description}>
          Um site totalmente otimizado que utiliza a API OpenWeather para exibir informações climáticas em tempo real.
        </p>
        <p>Tecnologias: <span className={styles.tech}>HTML, CSS, JavaScript</span></p>
      </div>

      <div className={styles.cardProjects}>
        <h1 className={styles.nameProject}>Buscador de CEP</h1>
        <a href="https://adeilsondias.github.io/Buscar-CEP/" target='_blank'>
          <img src={ProjectCEP} alt={ProjectCEP} className={styles.imgEdit} style={{ width: "360px", height: "250px" }} />
        </a>
        <p className={styles.description}>
          Projeto de busca de CEPs utilizando a API ViaCEP, onde o usuário insere o CEP e recebe as informações correspondentes, como cidade, bairro e rua.
        </p>
        <p>Tecnologias: <span className={styles.tech}>HTML, CSS, JavaScript, Bootstrap</span></p>
      </div>

      <div className={styles.cardProjects}>
        <h1 className={styles.nameProject}>Cores Dinâmicas</h1>
        <a href="https://adeilsondias.github.io/Cores-Dinamicas/" target='_blank'>
          <img src={ProjectCores} alt={ProjectCores} className={styles.imgEdit} style={{ width: "360px", height: "250px" }} />
        </a>
        <p className={styles.description}>
          Um projeto simples, mas perfeito para praticar JavaScript. Nesta aplicação, é possível alterar as cores dinamicamente e também inserir uma imagem de fundo.
        </p>
        <p>Tecnologias: <span className={styles.tech}>HTML, CSS, JavaScript</span></p>
      </div>
    </div>
  );
};

export default Projects;
