import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../redux/action/modalAction'
import movieTrailer from "movie-trailer";
import { toast } from 'react-toastify';
import ReactTooltip from 'react-tooltip';
import styles from './movieCard.module.css'
import { addMovieToFirebaseFavourites, addMovieToFirebaseWatchlist } from '../../firebase/firebaseUtil';
import { addMovieToFavourites, addMovieToWatchlist } from '../../redux/action/userMovieAction';
import { IoMdHeart, IoMdEye } from "react-icons/io";


const MovieCard = ({ movie }) => {

    const dispatch = useDispatch()
    const { watchlist, favourites } = useSelector(state => state.userMovies)



    const getMovie = async (title) => {
        const response = await movieTrailer(title, { id: true })
        dispatch(openModal({ modalType: "youtube", modalProps: response }))

    }

    const handleAddToWatchlist = async (movie) => {
        const existingInWatchlist = watchlist.find(item => movie.id === item.id)
        try {
            if (existingInWatchlist) {
                toast.warning("Already added this movie to watchlist", { hideProgressBar: true })
                return
            }
            await addMovieToFirebaseWatchlist(movie)
            toast.success("Added successfully to watchlist", { hideProgressBar: true })
            dispatch(addMovieToWatchlist(movie))
        } catch (error) {

            if (error.message === "Cannot read property 'uid' of null") {
                return toast.error("Must Be Logged In  To Save Watchlists", { hideProgressBar: true })
            }
            toast.error("Problem adding movie to watchlist", { hideProgressBar: true })

        }
    }
    const handleAddToFavourites = async (movie) => {
        const existingInFavourites = favourites.find(item => movie.id === item.id)
        try {
            if (existingInFavourites) {
                toast.warning("Already added this movie to favourites", { hideProgressBar: true })
                return
            }
            await addMovieToFirebaseFavourites(movie)
            toast.success("Added successfully to your favourites", { hideProgressBar: true })
            dispatch(addMovieToFavourites(movie))
        } catch (error) {
            if (error.message === "Cannot read property 'uid' of null") {
                return toast.error("Must Be Logged In  To Save Favourites", { hideProgressBar: true })
            }
            toast.error("Problem adding movie to favourites", { hideProgressBar: true })

        }
    }

    return (
        <div className={styles.card}>

            <ReactTooltip place="bottom" type="info" />
            <div className={styles.cardImage} onClick={() => getMovie(movie.original_title || movie.original_name)}>
                <img className={styles.image} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt={movie.original_title || movie.original_name} />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardTitle} onClick={() => getMovie(movie.original_title || movie.original_name)}> <p>{movie.original_title || movie.original_name}</p></div>
                <div className={styles.cardInfo}>
                    <ul className={styles.cardMenu}>
                        <li className={styles.rating}>{movie.vote_average}</li>
                        <li className={styles.like} onClick={() => handleAddToFavourites(movie)} data-tip="Add Favourites">
                            <IoMdHeart className={styles.icon} />
                        </li>
                        <li className={styles.addToWatchlist} onClick={() => handleAddToWatchlist(movie)} data-tip="Add Watchlist">
                            <IoMdEye className={styles.icon} />
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
