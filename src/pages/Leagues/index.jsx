import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import styles from './Leagues.module.css'

const Leagues = () => {
    const { code } = useParams()
    const [apiKey] = useLocalStorage('apiKey')

    const [leagues, setLeagues] = useState([])
    const [seasons, setSeasons] = useState([])

    // Get leagues
    useEffect(() => {
        fetch(`https://v3.football.api-sports.io/leagues?code=${code}`, {
            method: "GET",
            headers: {
                "x-apisports-key": `${apiKey}`
            }
        })
            .catch(err => alert(err))
            .then(res => res.json())
            .then(res => {
                setLeagues(res.response)
                console.log(res.response);
            })
    }, [])

    // Get seasons
    useEffect(() => {
        fetch("https://v3.football.api-sports.io/leagues/seasons", {
            method: "GET",
            headers: {
                "x-apisports-key": `${apiKey}`
            }
        })
            .catch(err => alert(err))
            .then(res => res.json())
            .then(res => {
                setSeasons(res.response)
                console.log(res.response);
            })
    }, [])

    return (
        <div className={styles.leagues}>
            {leagues.map((item) => (
                <div className={styles.league} key={item.league.id}>
                    <Link to={''} className={styles.link}>
                        <img className={styles.logo} src={item.league.logo} alt="" />
                        {item.league.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Leagues