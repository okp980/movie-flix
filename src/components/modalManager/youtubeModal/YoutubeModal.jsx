import React from 'react'
import Modal from '../../../util/modal/Modal'
import YouTube from 'react-youtube'
import { useSelector } from 'react-redux';

function YoutubeModal() {
    const { modalProps } = useSelector(state => state.modal)
    const opts = {
        height: '450',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <Modal youtube>
            <YouTube
                videoId={modalProps}
                opts={opts}
            />
        </Modal>
    )
}

export default YoutubeModal
