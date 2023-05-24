import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loader from '../../components/Loader'
import gamedayIMG from '../../images/gameday.svg'
import useLocalStorage from '../../hooks/useLocalStorage'
import styles from './Teams.module.css'

// import teams from '../../data/teams'

const Teams = () => {
    const { season, leagueID } = useParams()
    const [apiKey] = useLocalStorage('apiKey')
    const [teams, setTeams] = useState([])
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        if (apiKey === '') {
            navigate('/login')
            return
        }

        fetch(`https://v3.football.api-sports.io/teams?league=${leagueID}&season=${season}`, {
            method: "GET",
            headers: {
                "x-apisports-key": `${apiKey}`
            }
        })
            .catch(err => alert(err))
            .then(res => res.json())
            .then(res => {
                setTeams(res.response)
            })
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <img src={gamedayIMG} alt="" />
                <div>
                    <h1>Selecione seu <span>time</span></h1>
                </div>
            </div>
            {isLoading ? <Loader /> : (
                <div className={styles.teams}>
                    {teams.map((item) => (
                        <div key={item.team.id} className={styles.team}>
                            <Link className={styles.link} to={`/teams/${season}/${leagueID}/${item.team.id}`}>
                                <img className={styles.logo} src={item.team.logo} alt="" />
                                <div className={styles.label}>
                                    <p className={styles.name}>{item.team.code} - {item.team.name}</p>
                                    <p className={styles.country}>{item.team.country}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Teams