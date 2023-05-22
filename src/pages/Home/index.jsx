import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import styles from './Home.module.css'

const Home = () => {
  const navigate = useNavigate()
  const [apiKey] = useLocalStorage('apiKey')
  const [countries, setCountries] = useState([])
  const [search, setSeach] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    if (apiKey === '') {
      setLoading(false)
      navigate('/login')
      return
    }

    fetch("https://v3.football.api-sports.io/countries", {
      method: "GET",
      headers: {
        "x-apisports-key": `${apiKey}`
      }
    })
      .catch(err => alert(err))
      .then(res => res.json())
      .then(res => {
        setCountries(res.response)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <h1>Países</h1>
        <input 
          type="text" 
          placeholder='Pesquisar...'
          value={search}
          onChange={(e) => setSeach(e.target.value)}
        />
      </div>
      <div className={styles.countries}>
        {countries.map((country) => (
          <div className={styles.country}>
          <Link to={`/leagues/${country.code}`} className={styles.link}>
            <img src={country.flag} alt="" />
            <p>{country.name} - {country.code}</p>
          </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home