import React from 'react'
import { useSelector } from 'react-redux'
import NotificationModal from './notificationModal/NotificationModal'
import SignInModal from './signInModal/SignInModal'
import SignUpModal from './signUpModal/SignUpModal'
import YoutubeModal from './youtubeModal/YoutubeModal'

const ModalManager = () => {
    const modals = {
        signIn: SignInModal,
        signUp: SignUpModal,
        youtube: YoutubeModal,
        notification: NotificationModal

    }
    const modalState = useSelector(state => state.modal)
    let renderedModal;
    if (modalState) {
        const { modalType, modalProps } = modalState
        const SelectedModal = modals[modalType]
        renderedModal = <SelectedModal {...modalProps} />
    }
    return renderedModal
}

export default ModalManager
