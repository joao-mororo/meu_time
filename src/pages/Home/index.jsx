import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import HomeIMG from '../../images/home.svg'
import styles from './Home.module.css'

import countries from '../../data/countries'

const Home = () => {
    const navigate = useNavigate()
    const [apiKey] = useLocalStorage('apiKey')
    // const [countries, setCountries] = useState([])

    // useEffect(() => {
    //     if (apiKey === '') {
    //         navigate('/login')
    //         return
    //     }

    //     fetch("https://v3.football.api-sports.io/countries", {
    //         method: "GET",
    //         headers: {
    //             "x-apisports-key": `${apiKey}`
    //         }
    //     })
    //         .catch(err => alert(err))
    //         .then(res => res.json())
    //         .then(res => {
    //             setCountries(res.response)
    //         })
    // }, [])

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