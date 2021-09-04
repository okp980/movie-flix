import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { openModal } from '../../redux/action/modalAction'
import './Unauthorized.css'

const Unathorized = () => {
    const { authenticated } = useSelector(state => state.auth)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        if (authenticated) {
            history.push('/')
        }
    }, [authenticated, history])

    function handleSignIn() {
        dispatch(openModal({ modalType: 'signIn' }))
    }

    return (
        <section className="unauthorized">
            <div className="container">
                <div className="lock">
                    <img src="/images/security.svg" alt="locked access" />
                </div>
                <h3>Restricted Access</h3>
                <p>Only logged in users can access this page.</p>
                <button className='btn' onClick={handleSignIn}>sign in</button>
            </div>
        </section>
    )
}

export default Unathorized
