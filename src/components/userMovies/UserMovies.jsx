import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { deleteMovieFromFirebaseFavourites, deleteMovieFromFirebaseWatchlist } from '../../firebase/firebaseUtil'
import { removeMovieFromFavourites, removeMovieFromWatchlist } from '../../redux/action/userMovieAction'
import styles from './userMovies.module.css'

// this component renders either watchlist or favourites movies depending on the search params

const UserMovies = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const type = query.get('type')
    const moviesArr = useSelector(state => type === 'wat' ? state.userMovies.watchlist : state.userMovies.favourites)

    function truncateString(str) {
        if (str.length > 220) {
            return str.slice(0, 220) + "...";
        } else {
            return str;
        }
    }

    const handleRemoveMovieFromWatchlist = async (movie) => {
        try {
            await deleteMovieFromFirebaseWatchlist(movie)
            dispatch(removeMovieFromWatchlist(movie.id))
            toast.success("Removed successfully from your watchlist", { hideProgressBar: true })
        }
        catch (error) {
            console.log(error);
            toast.error("Error trying to remove movie from watchlist", { hideProgressBar: true })
        }

    }

    const handleRemoveMovieFromFavourites = async (movie) => {
        try {
            await deleteMovieFromFirebaseFavourites(movie)
            dispatch(removeMovieFromFavourites(movie.id))
            toast.success("Removed successfully from your favourites", { hideProgressBar: true })
        }
        catch (error) {
            console.log(error);
            toast.error("Error trying to remove movie from favourites", { hideProgressBar: true })
        }
    }

    return (
        <div className={styles.userMovies}>
            <h1>{type === 'wat' ? 'Watchlist' : 'Favourite'}</h1>
            <p>{moviesArr.length === 0 ? `You have no movie in your ${type === 'wat' ? 'watchlist' : 'favourites'}` : `You have ${moviesArr.length} movies on your ${type === 'wat' ? 'watchlist' : 'favourites'}`}</p>
            {moviesArr.length > 0 && moviesArr.map(movie => {
                return (
                    <div className={styles.card} key={movie.id}>
                        <div className={styles.avatar}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title || movie.title} />

                        </div>
                        <div className={styles.cardDetails}>
                            <h2>{movie.title}</h2>
                            <ul className={styles.subtitle}>
                                <li>Rating : {movie.vote_average}</li>
                                <li>Release Date : {movie.release_date}</li>
                                <li>{movie.vote_count} votes</li>
                            </ul>
                            <p>{truncateString(movie.overview)}</p>
                            <small className={styles.delete} onClick={type === 'wat' ? handleRemoveMovieFromWatchlist.bind(null, movie) : handleRemoveMovieFromFavourites.bind(null, movie)}>{`remove from ${type === 'wat' ? 'watchlist' : 'favourites'}`}</small>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default UserMovies;
