import {
	LOAD_MOVIES,
	ADD_TO_WATCHLIST,
	REMOVE_FROM_WATCHLIST,
	LIKE_MOVIE,
	UNLIKE_MOVIE,
} from "../../type/movieType.js";

const initialState = {
	movies: [],
	watchlist: [],
	likes: [],
};

export default function movieReducer(state = initialState, { type, payload }) {
	switch (type) {
		case LOAD_MOVIES:
			return {
				...state,
				movies: payload,
			};

		case ADD_TO_WATCHLIST:
			const watchlistMovie = state.movies.find((item) => item.id === payload);
			const inWatchlist = state.watchlist.find((item) =>
				item.id === watchlistMovie.id ? true : false
			);

			return {
				...state,
				watchlist: inWatchlist
					? [...state.watchlist]
					: [...state.watchlist, watchlistMovie],
			};
		case REMOVE_FROM_WATCHLIST:
			return {
				...state,
				watchlist: state.watchlist.filter((movie) => movie.id !== payload),
			};
		case LIKE_MOVIE:
			const likedMovie = state.movies.find((item) => item.id === payload);
			const alreadyLiked = state.likes.find((item) =>
				item.id === likedMovie.id ? true : false
			);

			return {
				...state,
				likes: alreadyLiked ? [...state.likes] : [...state.likes, likedMovie],
			};

		case UNLIKE_MOVIE:
			return {
				...state,
				likes: state.likes.filter((movie) => movie.id !== payload),
			};
		default:
			return state;
	}
}
