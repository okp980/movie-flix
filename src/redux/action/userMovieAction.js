import { getUserMoviesFromFirebase } from "../../firebase/firebaseUtil";
import {
	ADD_MOVIE_TO_FAVOURITES,
	ADD_MOVIE_TO_WATCHLIST,
	GET_USER_MOVIES,
	REMOVE_MOVIE_FROM_FAVOURITES,
	REMOVE_MOVIE_FROM_WATCHLIST,
} from "../type/userMovieType";

export const getUserMovies = (payload) => ({ type: GET_USER_MOVIES, payload });
export const addMovieToWatchlist = (movie) => ({
	type: ADD_MOVIE_TO_WATCHLIST,
	payload: movie,
});
export const addMovieToFavourites = (movie) => ({
	type: ADD_MOVIE_TO_FAVOURITES,
	payload: movie,
});
export const removeMovieFromWatchlist = (movieId) => ({
	type: REMOVE_MOVIE_FROM_WATCHLIST,
	payload: movieId,
});
export const removeMovieFromFavourites = (movieId) => ({
	type: REMOVE_MOVIE_FROM_FAVOURITES,
	payload: movieId,
});

export function asyncGetUserMovies(id) {
	return async (dispatch) => {
		try {
			const movies = await getUserMoviesFromFirebase(id);
			dispatch(getUserMovies(movies));
		} catch (error) {
			console.log(error);
		}
	};
}
