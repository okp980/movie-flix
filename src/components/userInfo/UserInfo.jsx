import React from 'react'
import styles from './userInfo.module.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserInfo = () => {
    const { currentUser } = useSelector(state => state.auth)





    return (
        <section className={styles.userInfo}>
            <div className={styles.avatar}>
                <img src={currentUser?.photoURL || '/images/image-palceholder.png'} alt="jamilla smith" />

            </div>
            <div className={styles.card}>
                <div className={styles.cardItem}>
                    <h3>Full Name</h3>
                    <p>{currentUser?.displayName || ''}</p>
                </div>

                <div className={styles.cardItem}>
                    <h3>Email</h3>
                    <p>{currentUser?.email || ''}</p>
                </div>
                <div className={styles.cardItem}>
                    <h3>Phone No</h3>
                    <p>{currentUser?.phoneNumber || ''}</p>
                </div>
                <div className={styles.cardItem}>
                    <h3>Location</h3>
                    <p>{currentUser?.location || ''}</p>
                </div>


            </div>

            <Link to='/profile/settings' className={styles.editProfile}>Edit Profile</Link>

        </section>
    )
}

export default UserInfo
