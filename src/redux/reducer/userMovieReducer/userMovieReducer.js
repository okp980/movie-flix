import {
	ADD_MOVIE_TO_FAVOURITES,
	ADD_MOVIE_TO_WATCHLIST,
	GET_USER_MOVIES,
	REMOVE_MOVIE_FROM_FAVOURITES,
	REMOVE_MOVIE_FROM_WATCHLIST,
} from "../../type/userMovieType";

const initialState = {
	watchlist: [],
	favourites: [],
};

export default function userMovieReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case GET_USER_MOVIES:
			return {
				...state,
				watchlist: payload.watchlist,
				favourites: payload.favourites,
			};

		case ADD_MOVIE_TO_WATCHLIST:
			return {
				...state,
				watchlist: [...state.watchlist, payload],
			};
		case ADD_MOVIE_TO_FAVOURITES:
			return {
				...state,
				favourites: [...state.favourites, payload],
			};
		case REMOVE_MOVIE_FROM_WATCHLIST:
			const movieId = payload;
			const newMovArr = state.watchlist.filter((mov) => mov.id !== movieId);
			return {
				...state,
				watchlist: [...newMovArr],
			};
		case REMOVE_MOVIE_FROM_FAVOURITES:
			const FavMovieId = payload;
			const newFavMovArr = state.favourites.filter(
				(mov) => mov.id !== FavMovieId
			);
			return {
				...state,
				favourites: [...newFavMovArr],
			};

		default:
			return state;
	}
}
