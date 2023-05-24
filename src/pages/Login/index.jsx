import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'
import LoginImg from '../../images/login.svg'
import styles from './Login.module.css'

const Login = () => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)
    const [apiKey, setApiKey] = useLocalStorage('apiKey', '')
    const navigate = useNavigate()

    const login = async () => {
        if (!user || user === ' ' || user === '') {
            return
        }
        setLoading(true)

        fetch("https://v3.football.api-sports.io/status", {
            method: "GET",
            headers: {
                "x-apisports-key": `${user}`
            }
        })
            .catch(err => alert(err))
            .then(res => res.json())
            .then(res => {
                if (res.results === 0) {
                    alert("API Key inválida")
                    return
                }
                console.log(res);
                setApiKey(user)
                navigate('/')
            })
            .finally(() => setLoading(false))
    }

    return (
        <div className={styles.login}>
            <div className={styles.card}>
                <img className={styles.img} src={LoginImg} alt="" />
                <p>Para usar o app Meu Time, faça uma conta na <a href="https://dashboard.api-football.com/register" target='_blank' rel="noopener">API Football</a> e entre com sua API Key abaixo</p>
                <input
                    type="text"
                    placeholder='API Key'
                    value={user}
                    onChange={e => setUser(e.target.value)}
                />
                <button disabled={loading} className={styles.btn_submit} type='button' onClick={() => login()}>{loading ? 'Validando...' : "Entrar"}</button>
            </div>

        </div>
    )
}

export default Login