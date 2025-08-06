import React from 'react'
import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <div className={styles.containerContact}>
            <div className={styles.contacts}>
                <div className={styles.introducao}>
                    <h1 >Fale </h1>
                    <h2> <span>Comigo !</span></h2>
                </div>

                <div className={styles.redes}>
                    <a href="https://wa.me/5511975332213" target='_blank'><i class="bi bi-whatsapp"></i></a>
                    <p>(11) 97533-2213</p>
                </div>
                <div className={styles.redes}>
                    <h5><i class="bi bi-envelope"></i></h5>
                    <p>adeilsonj7dias@gmail.com</p>
                </div>
                <div className={styles.redes}>
                    <h5><i class="bi bi-geo-alt"></i></h5>
                    <p>São Paulo - BR</p>
                </div>
            </div>
        </div>
    )
}

export default Contact