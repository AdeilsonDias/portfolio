import React from 'react'
import styles from './Home.module.css'
import ProfileImage from '../ProfileImage/ProfileImage'
const Home = () => {
  return (
    <div className={styles.containerGlobal}>
      <div className={styles.container}>
        <h1 className={styles.name}>Adeilson Dias.</h1>
        <p className={styles.textSkils}>Front-End <span>Developer</span> </p>
        <h2 className={styles.description}> Onde ideias se transformam em experiências digitais <strong>memoráveis.</strong></h2>

        <div className={styles.social}>
          <a href="https://wa.me/5511975332213" target='_blank'><i className="bi bi-whatsapp"></i></a>
          <a href="https://www.instagram.com/adeilson.dias_/" target='_blank'><i className="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/in/adeilson-dias/" target='_blank'><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com/AdeilsonDias" target='_blank'><i className="bi bi-github"></i></a>
        </div>

        <button 
        onClick={() => {
          const link = document.createElement('a');
          link.href = "/portfolio/Curriculo ADEILSONDIAS.pdf";
          link.download = "Curriculo-ADEILSONDIAS.pdf";
          link.click();
      }} 
          className={styles.buttonDownload}>Download CV</button>
      </div>

      <div className={styles.responsiveImg}>
        <ProfileImage />
      </div>
    </div>
  )
}

export default Home