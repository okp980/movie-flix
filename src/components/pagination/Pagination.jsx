import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { fetchComedy, fetchDocumentaries, fetchHorror, fetchMovies, fetchNetflixMovies, fetchRomance } from '../../redux/action/movieAsyncActions'
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({

    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center'

        },
    },
    pagination: {
        background: '#ccc',
        padding: 10
    }
}));

export default function PaginationRounded({ category }) {
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        setCurrentPage(1)
    }, [category])

    const handlePage = useCallback((event, page) => {

        setCurrentPage(page)
        switch (category) {
            case 'series':
                dispatch(fetchNetflixMovies(page));
                break;
            case 'comedy':
                dispatch(fetchComedy(page));
                break;
            case 'horror':
                dispatch(fetchHorror(page));
                break;
            case 'romance':
                dispatch(fetchRomance(page));
                break;
            case 'documentaries':
                dispatch(fetchDocumentaries(page));
                break;
            default:
                dispatch(fetchMovies(page))
        }

    }, [dispatch, category])
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination page={currentPage} count={100} onChange={handlePage} variant="outlined" shape="rounded" className={classes.pagination} size='large' color='secondary' />
        </div>
    );
}