import React, { useEffect, useState } from 'react'
import styles from './header.module.css'
import User from '../user/User';
import { Link } from 'react-router-dom';
function Header() {
    const [darkBg, setDarkBg] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setDarkBg(true)
            } else {
                setDarkBg(false)

            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [darkBg])



    return (
        <header className={darkBg ? [styles.header, styles.dark].join(' ') : [styles.header]}>
            <div className="container">
                <div className={styles.logo}>
                    <Link to='/'>
                        <h2>movie-flix</h2>
                    </Link>

                </div>
                <nav className={styles.nav}>
                    <ul className={styles.controls}>
                        <li>
                            <User />
                        </li>
                    </ul>

                </nav>

            </div>
        </header>
    )
}

export default Header
