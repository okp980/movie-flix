import React from 'react'
import styles from './userNav.module.css'
import { FiUser, FiSettings, FiStar, FiHeart } from "react-icons/fi";
import { useHistory, useLocation } from 'react-router-dom';

const UserNav = () => {
    const history = useHistory()
    const location = useLocation()

    return (
        <>
            <ul className={styles.userNav}>
                <li className={[styles.userLink, location.pathname === '/profile/details' ? styles.active : ''].join(' ')} onClick={() => { history.push('/profile/details') }}>
                    <FiUser /> user info
                </li>
                <li className={[styles.userLink, location.pathname === '/profile/favourites' ? styles.active : ''].join(' ')} onClick={() => { history.push('/profile/favourites?type=fav') }}>
                    <FiHeart /> Favourites
                </li>
                <li className={[styles.userLink, location.pathname === '/profile/watchlist' ? styles.active : ''].join(' ')} onClick={() => { history.push('/profile/watchlist?type=wat') }}>
                    <FiStar /> watchlist
                </li>
                <li className={[styles.userLink, location.pathname === '/profile/settings' ? styles.active : ''].join(' ')} onClick={() => { history.push('/profile/settings') }}>
                    <FiSettings /> settings
                </li>

            </ul>
        </>
    )
}

export default UserNav;
