import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { signInUserToFirebase } from '../../../firebase/firebaseUtil'
import { closeModal, openModal } from '../../../redux/action/modalAction'
import Modal from '../../../util/modal/Modal'
import styles from './signIn.module.css'

const SignInModal = () => {
    const dispatch = useDispatch()
    const initialState = {
        email: '',
        password: ''
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
        if (info.email === '' || info.password === '') {
            toast.error('Input Field Cannot Be Empty', { hideProgressBar: true })
            return
        }
        try {
            setIsSubmitting(true)
            await signInUserToFirebase(info.email, info.password)
            toast.success('SignIn was Successful', { hideProgressBar: true })
            dispatch(closeModal())
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                return toast.error('Failed to SignIn, Please Ensure To Sign In With Valid Details', { hideProgressBar: true })
            }
            toast.error(error.message, { hideProgressBar: true })
        } finally {
            setIsSubmitting(false)
        }
    }

    function handelOpenSignUp() {
        dispatch(closeModal())
        dispatch(openModal({ modalType: 'signUp' }))
    }

    return (
        <Modal>
            <form className={styles.signIn} onSubmit={onSubmitHandler}>
                <label className={styles.label} htmlFor="email">E-mail</label>
                <input type="email" placeholder='Enter E-mail Address' name='email' value={info.email} onChange={onChangeHandler} />
                <label htmlFor="password" className={styles.label}>Password</label>
                <input type='password' placeholder="Enter password" name='password' value={info.password} onChange={onChangeHandler} />
                <p onClick={handelOpenSignUp}>Register New Account</p>
                <button className={styles.button} disabled={isSubmitting}>sign in</button>
            </form>
        </Modal>
    )
}

export default SignInModal
