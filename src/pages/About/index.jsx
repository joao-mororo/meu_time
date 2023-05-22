import React from 'react'
import { GiSoccerBall } from 'react-icons/gi'
import { SiGithub, SiNetlify } from 'react-icons/si'
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <p className={styles.icon}><GiSoccerBall /></p>
            <p>"Meu Time" é um website para consultar informações sobre o time do seu coração.</p>
            <p>Esse projeto foi construído em React como parte de um processo seletivo, além da construção de portfolio.</p>
            <div className={styles.nav}>
                <a className={styles.link} href="https://github.com/joao-mororo/meu_time" target='_blank' rel="noopener"><SiGithub /> Repositório</a>
                <a className={styles.link} href="https://joaomororo-meu_time.netlify.app/" target='_blank' rel="noopener"><SiNetlify /> Website</a>
            </div>
        </div>
    )
}

export default About