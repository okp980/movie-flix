import React from 'react'
import { useSelector } from 'react-redux'
import ImagePlaceholder from '../../util/imagePlaceholder/ImagePlaceholder'
import MovieCard from '../movieCard/MovieCard'
import styles from './allMovieSection.module.css'





const AllMovieSection = () => {
    const { results } = useSelector(state => state.movie.movies)
    const { loading, error } = useSelector(state => state.async)

    let moviez = [];

    if (error) {
        return (
            <div className={styles.error}>
                <p>{error.message}</p>
            </div>
        );
    }

    if (loading && !results) {
        for (let i = 0; i < 20; i++) {
            moviez.push(<ImagePlaceholder key={i} />)
        }
        return (
            <div className={styles.container}>
                {moviez}
            </div>
        );
    }
    return (
        <div className={styles.container}>
            {results?.map((movie) => {
                return <MovieCard movie={movie} key={movie.id} />
            })}
        </div>


    )
}

export default AllMovieSection
