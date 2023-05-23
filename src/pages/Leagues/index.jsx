import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import styles from './Leagues.module.css'

import leagues from '../../data/leagues'
import seasons from '../../data/seasons'

const Leagues = () => {
    const { code } = useParams()
    const [apiKey] = useLocalStorage('apiKey')
    const navigate = useNavigate()

    // const [leagues, setLeagues] = useState([])
    // const [seasons, setSeasons] = useState([])
    const [season, setSeason] = useState('')

    const navigateTo = (id) => {
        if (season === '') {
            alert('Selecione uma temporada')
            return
        }

        navigate(`/teams/${season}/${id}`)
    }

    // Get leagues
    // useEffect(() => {
    //     if (apiKey === '') {
    //         navigate('/login')
    //         return
    //     }

    //     fetch(`https://v3.football.api-sports.io/leagues?code=${code}`, {
    //         method: "GET",
    //         headers: {
    //             "x-apisports-key": `${apiKey}`
    //         }
    //     })
    //         .catch(err => alert(err))
    //         .then(res => res.json())
    //         .then(res => {
    //             setLeagues(res.response)
    //             console.log(res.response);
    //         })
    // }, [])

    // Get seasons
    // useEffect(() => {
    //     fetch("https://v3.football.api-sports.io/leagues/seasons", {
    //         method: "GET",
    //         headers: {
    //             "x-apisports-key": `${apiKey}`
    //         }
    //     })
    //         .catch(err => alert(err))
    //         .then(res => res.json())
    //         .then(res => {
    //             setSeasons(res.response)
    //             console.log(res.response);
    //         })
    // }, [])

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1>Selecione uma liga e uma temporada</h1>
                <select
                    onChange={(e) => setSeason(e.target.value)}
                >
                    <option value="">Temporada</option>
                    {seasons.map((item) => (
                        <option value={item}>{item}</option>
                    ))}
                </select>
            </div>
            {leagues.map((item) => (
                <div className={styles.league} key={item.league.id}>
                    <button onClick={() => navigateTo(item.league.id)} className={styles.link}>
                        <img className={styles.logo} src={item.league.logo} alt="" />
                        {item.league.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Leagues