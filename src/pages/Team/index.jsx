import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import styles from './Team.module.css'

// import statistics from '../../data/statistics'
// import players from '../../data/players';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Team = () => {
    const { season, leagueID, teamID } = useParams()
    const navigate = useNavigate()
    const [apiKey] = useLocalStorage('apiKey')
    
    const [statistics, setStatistics] = useState()
    const [players, setPlayers] = useState([])

    // const chartLabels = Object.keys(statistics.goals?.for?.minute)
    const chartLabels = ["0-15", "16-30", "31-45", "46-60", "61-75", "76-90", "91-105", "106-120"]

    useEffect(() => {
        if (apiKey === '') {
            navigate('/login')
            return
        }

        fetch(`https://v3.football.api-sports.io/teams/statistics?season=${season}&team=${teamID}&league=${leagueID}`, {
            method: "GET",
            headers: {
                "x-apisports-key": `${apiKey}`
            }
        })
            .catch(err => alert(err))
            .then(res => res.json())
            .then(res => {
                setStatistics(res.response)
            })
    }, [])

    useEffect(() => {
        if (apiKey === '') {
            navigate('/login')
            return
        }

        fetch(`https://v3.football.api-sports.io/players?season=${season}&team=${teamID}&league=${leagueID}`, {
            method: "GET",
            headers: {
                "x-apisports-key": `${apiKey}`
            }
        })
            .catch(err => alert(err))
            .then(res => res.json())
            .then(res => {
                setPlayers(res.response)
            })
    }, [])

    return (
        <div className={`page ${styles.page}`}>
            {statistics && (
                <>
                    <div className={styles.header}>
                        <div className={styles.left}>
                            <img src={statistics.team.logo} alt="" />
                            <h1>{statistics.team.name}</h1>
                            <h3>{statistics.league.country} - {statistics.league.name}</h3>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.players}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Idade</th>
                                            <th>Nacionalidade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {players.map((item) => (
                                            <tr>
                                                <td>{item.player.firstname}</td>
                                                <td>{item.player.age}</td>
                                                <td>{item.player.nationality}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.formation}>
                                <h3>Formação mais usada</h3>
                                <p>{statistics.lineups[0].formation}</p>
                            </div>
                        </div>
                    </div>
                    <table className={styles.data}>
                        <thead>
                            <tr>
                                <th>Jogos</th>
                                <th>Vitórias</th>
                                <th>Derrotas</th>
                                <th>Empates</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{statistics.fixtures.played.total}</td>
                                <td>{statistics.fixtures.wins.total}</td>
                                <td>{statistics.fixtures.loses.total}</td>
                                <td>{statistics.fixtures.draws.total}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.goals}>
                        <Line
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    },
                                    title: {
                                        display: true,
                                        text: 'Gols por minuto',
                                        color: '#fff',
                                    },
                                }
                            }}
                            data={{
                                labels: chartLabels,
                                datasets: [
                                    {
                                        label: 'Gols',
                                        borderColor: '#198754',
                                        backgroundColor: '#198754',
                                        data: chartLabels.map((item) => statistics.goals.for.minute[item].total)
                                    },
                                ]
                            }}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default Team