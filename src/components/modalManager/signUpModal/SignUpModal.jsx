import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { createUserMovies, signUpUserToFirebase } from '../../../firebase/firebaseUtil'
import { closeModal, openModal } from '../../../redux/action/modalAction'
import Modal from '../../../util/modal/Modal'
import styles from './signUpmodal.module.css'

const SignUpModal = () => {
    const dispatch = useDispatch()
    const initialState = {
        email: '',
        password: '',
        password2: ''
    }

    const [info, setInfo] = useState(initialState)
    const [isSubmitting, setIsSubmitting] = useState(false)


    const onChangeHandler = (e) => {
        const value = e.target.value.trim()

        setInfo(
            {
                ...info,
                [e.target.name]: value
            }
        )

    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        try {
            if (info.password !== info.password2) {
                toast.error('Passwords Do Not Match', { hideProgressBar: true })
                return
            }
            setIsSubmitting(true)
            await signUpUserToFirebase(info.email, info.password)
            await createUserMovies()
            toast.success('Registration was Successful', { hideProgressBar: true })
            dispatch(closeModal())
        } catch (error) {
            toast.error(error.message, { hideProgressBar: true })
        } finally {
            setIsSubmitting(false)
        }
    }

    function handelOpenSignIn() {
        dispatch(closeModal())
        dispatch(openModal({ modalType: 'signIn' }))
    }

    return (
        <Modal>
            <form className={styles.signUp} onSubmit={onSubmitHandler}>
                <label className={styles.label} htmlFor="email">E-mail</label>
                <input type="email" placeholder='Enter E-mail Address' name='email' value={info.email} onChange={onChangeHandler} />
                <label htmlFor="password" className={styles.label}>Password</label>
                <input type='password' placeholder="Enter password" name='password' value={info.password} onChange={onChangeHandler} />
                <label htmlFor="password2" className={styles.label}>Repeat Password</label>
                <input type='password' placeholder="Repeat password" name='password2' value={info.repeatPassword} onChange={onChangeHandler} />
                <p onClick={handelOpenSignIn}>Already Registered? Sign In With Details.</p>
                <button className={styles.button} disabled={isSubmitting}>register</button>
            </form>
        </Modal>
    )
}

export default SignUpModal
