import React from 'react'
import Container from '../../util/container/Container'
import Layout from '../../util/layout/Layout'
import styles from './profile.module.css'
import UserNav from '../../components/userNav/UserNav'
import UserForm from '../../components/userForm/UserForm'
import { Route, Switch } from 'react-router-dom'
import UserInfo from '../../components/userInfo/UserInfo'
import UserMovies from '../../components/userMovies/UserMovies'


const Profile = () => {
    return (
        <div>
            <Container>
                <div className={styles.profile}>
                    <h1>user profile</h1>
                    <Layout>
                        <UserNav />
                        <Switch>
                            <Route path="/profile/settings">
                                <UserForm />
                            </Route>
                            <Route path="/profile/details">
                                <UserInfo />
                            </Route>
                            <Route path="/profile/favourites">
                                <UserMovies />
                            </Route>
                            <Route path="/profile/watchlist">
                                <UserMovies type='watchlist' />
                            </Route>
                        </Switch>
                    </Layout>
                </div>
            </Container>

        </div>
    )
}

export default Profile
