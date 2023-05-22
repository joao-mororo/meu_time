import React from 'react'
import { GiSoccerBall } from 'react-icons/gi'
import { ImInfo } from 'react-icons/im'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to={'/'} className={styles.logo}>
                <GiSoccerBall />
                <span style={{ color: '#FFF' }}>Meu Time</span>
            </Link>
            <nav>
                <Link to={'/about'}><ImInfo /></Link>
            </nav>
        </div>
    )
}

export default Header