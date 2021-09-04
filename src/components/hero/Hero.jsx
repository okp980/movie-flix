import styles from './hero.module.css'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { FiPlay } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import useFetchMovie from '../../hooks/useFetchMovie';
import movieTrailer from "movie-trailer";
import { openModal } from '../../redux/action/modalAction';
import { useMemo } from 'react';

const Hero = () => {


    const dispatch = useDispatch()


    const randomId = useMemo(() => Math.floor(Math.random() * 1000), []);

    const { loading,
        error,
        movie: randomMovie
    } = useFetchMovie(randomId)

    function timeConvert(n) {
        const num = n;
        const hours = (num / 60);
        const rhours = Math.floor(hours);
        const minutes = (hours - rhours) * 60;
        const rminutes = Math.round(minutes);
        return `${rhours}h ${rminutes}mins`
    }

    function truncateString(str) {
        if (str.length > 120) {
            return str.slice(0, 120) + "...";
        } else {
            return str;
        }
    }


    const getMovie = async (title) => {
        const response = await movieTrailer(title, { id: true })
        dispatch(openModal({ modalType: "youtube", modalProps: response }))

    }
    if (error) {
        return (<section className={styles.error}>
            <p>{error.message}</p>
        </section>)
    }

    if (loading || !randomMovie) {
        return (<section className={styles.loading}>
            <Loader
                type="Puff"
                color="#ff0e1e"
                height={80}
                width={80}
                timeout={3000}
            />
        </section>
        )
    }
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <img src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path || randomMovie.poster_path}`} alt={randomMovie.original_title || randomMovie.title} />
            </div>

            <div className={styles.content}>
                <div className={styles.container}>
                    <h3 className={styles.duration}> {`duration: ${timeConvert(randomMovie.runtime)}`}</h3>

                    <div className={styles.flex}>
                        <h3 className={styles.rating}>{randomMovie.vote_average} </h3>
                        <ul className={styles.highlight}>
                            {randomMovie.genres.map(gen => (<li key={gen.id}>{gen.name}</li>))}
                        </ul>
                    </div>


                    <h1 className={styles.title}>{randomMovie.original_title}</h1>
                    <p className={styles.description}>

                        {truncateString(randomMovie.overview)}
                    </p>

                    <div className={styles.btnControls}>
                        <button className="btn btn--hero" onClick={() => { getMovie(randomMovie.title) }}>
                            <FiPlay />
                            watch
                        </button>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
