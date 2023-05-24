import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import Loader from '../../components/Loader'
import fansIMG from '../../images/fans.svg'
import styles from './Leagues.module.css'

// import leagues from '../../data/leagues'
// import seasons from '../../data/seasons'

const Leagues = () => {
    const { code } = useParams()
    const [apiKey] = useLocalStorage('apiKey')
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const [leagues, setLeagues] = useState([])
    const [seasons, setSeasons] = useState([])
    const [season, setSeason] = useState('')

    // Get leagues
    useEffect(() => {
        setIsLoading(true)
        if (apiKey === '') {
            setIsLoading(false)
            navigate('/login')
            return
        }

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
            })
            .finally(() => setIsLoading(false))
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

    const navigateTo = (id) => {
        if (season === '') {
            alert('Selecione uma temporada')
            return
        }

        navigate(`/teams/${season}/${id}`)
    }

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>
                    <h1>Selecione uma <span>temporada</span> e uma <span>liga</span></h1>
                    <select
                        onChange={(e) => setSeason(e.target.value)}
                    >
                        <option value="">Temporada</option>
                        {seasons.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <img src={fansIMG} alt="" />
            </div>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={styles.leagues}>
                    {leagues.map((item) => (
                        <div className={styles.league} key={item.league.id}>
                            <button onClick={() => navigateTo(item.league.id)} className={styles.link}>
                                <img className={styles.logo} src={item.league.logo} alt="" />
                                {item.league.name}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Leagues