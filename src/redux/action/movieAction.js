import {
	LOAD_MOVIES,
	ADD_TO_WATCHLIST,
	REMOVE_FROM_WATCHLIST,
	LIKE_MOVIE,
	UNLIKE_MOVIE,
} from "../type/movieType";

export const loadMovies = (movies) => {
	return {
		type: LOAD_MOVIES,
		payload: movies,
	};
};

export const addToWishlist = (movieId) => {
	return {
		type: ADD_TO_WATCHLIST,
		payload: movieId,
	};
};
export const removeFromWatchlist = (movieId) => {
	return {
		type: REMOVE_FROM_WATCHLIST,
		payload: movieId,
	};
};
export const likeMovie = (movieId) => {
	return {
		type: LIKE_MOVIE,
		payload: movieId,
	};
};
export const UnLikeMovie = (movieId) => {
	return {
		type: UNLIKE_MOVIE,
		payload: movieId,
	};
};
