import React from 'react'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import HomeIMG from '../../images/home.svg'
import countries from '../../data/countries'
import styles from './Home.module.css'

const Home = () => {
    const navigate = useNavigate()
    const [apiKey] = useLocalStorage('apiKey')

    const navigateTo = (code) => {
        if (apiKey === '') {
            navigate('/login')
            return
        }

        navigate(`/leagues/${code}`)
    }

    return (
        <div className={styles.home}>
            <div className={styles.header}>
                <div>
                    <h1>Bem Vindo ao <span>Meu Time</span></h1>
                    <h3>Selecione um país abaixo</h3>
                </div>
                <img src={HomeIMG} alt="" />
            </div>
            <div className={styles.countries}>
                {countries.map((country, i) => (
                    <div key={i} className={styles.country}>
                        <button onClick={() => navigateTo(country.code)} className={styles.link}>
                            <img src={country.flag} alt="" />
                            <p>{country.name} - {country.code}</p>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home