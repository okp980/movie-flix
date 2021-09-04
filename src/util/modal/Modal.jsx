import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './modal.module.css'
import { closeModal } from '../../redux/action/modalAction'

const Modal = ({ children, youtube }) => {


    const dispatch = useDispatch()
    if (youtube) {
        return (
            <>
                <div className={styles.backdrop} onClick={() => dispatch(closeModal())}></div>
                <div className={styles['modal-youtube']} >
                    {children}
                </div>
            </>
        )
    }
    return (
        <>
            <div className={styles.backdrop} onClick={() => dispatch(closeModal())}></div>
            <div className={styles.modal} >
                {children}
            </div>
        </>
    )
}

export default Modal
