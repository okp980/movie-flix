import AllMovieSection from '../../components/allmovieSection/AllMovieSection';
import FeaturedHeader from '../../components/featuredHeader/FeaturedHeader';
import Container from "../../util/container/Container";
import Hero from '../../components/hero/Hero';
import { useMemo } from 'react';
import PaginationRounded from '../../components/pagination/Pagination';
import { fetchComedy, fetchDocumentaries, fetchHorror, fetchMovies, fetchNetflixMovies, fetchRomance } from '../../redux/action/movieAsyncActions'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react';
import { useState } from 'react';

const Home = () => {
    const [category, setCategory] = useState()
    const dispatch = useDispatch()
    const filterLinks = useMemo(() => [
        "action",
        "series",
        "comedy",
        "horror",
        "romance",
        "documentaries",
    ], []);

    const handleSelectCategory = useCallback((id, pageNum) => {
        const selectedItem = filterLinks.find((item, index) => id === index)
        setCategory(selectedItem)
        switch (selectedItem) {
            case 'series':
                dispatch(fetchNetflixMovies(pageNum));
                break;
            case 'comedy':
                dispatch(fetchComedy(pageNum));
                break;
            case 'horror':
                dispatch(fetchHorror(pageNum));
                break;
            case 'romance':
                dispatch(fetchRomance(pageNum));
                break;
            case 'documentaries':
                dispatch(fetchDocumentaries(pageNum));
                break;
            default:
                dispatch(fetchMovies(pageNum))
        }
    }, [filterLinks, dispatch])
    return (
        <>
            <Hero />
            <Container>
                <FeaturedHeader items={filterLinks} handleCategory={handleSelectCategory} />
                <AllMovieSection />
                <PaginationRounded handleCategory={handleSelectCategory} category={category} />
            </Container>
        </>
    )
}

export default Home
