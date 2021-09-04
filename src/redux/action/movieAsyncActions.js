import { asyncError, asyncFinish, asyncStart } from "./asyncAction";
import { loadMovies } from "./movieAction";

export function fetchMovies(page) {
	return async (dispatch) => {
		dispatch(asyncStart());
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=${
					process.env.REACT_APP_MOVIE_API_KEY
				}&with_genres=28&page=${page || 1}`
			);

			if (!response.ok) {
				throw new Error("Something Went Wrong, Try Again");
			}
			const data = await response.json();
			dispatch(loadMovies(data));
		} catch (error) {
			dispatch(asyncError(error));
		} finally {
			dispatch(asyncFinish());
		}
	};
}
export function fetchNetflixMovies(page) {
	return async (dispatch) => {
		dispatch(asyncStart());
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/discover/tv?api_key=${
					process.env.REACT_APP_MOVIE_API_KEY
				}&with_networks=213&page=${page || 1}`
			);

			if (!response.ok) {
				throw new Error("Something Went Wrong, Try Again");
			}
			const data = await response.json();
			dispatch(loadMovies(data));
		} catch (error) {
			dispatch(asyncError(error));
		} finally {
			dispatch(asyncFinish());
		}
	};
}
export function fetchComedy(page) {
	return async (dispatch) => {
		dispatch(asyncStart());
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=${
					process.env.REACT_APP_MOVIE_API_KEY
				}&with_genres=35&page=${page || 1}`
			);

			if (!response.ok) {
				throw new Error("Something Went Wrong, Try Again");
			}
			const data = await response.json();
			dispatch(loadMovies(data));
		} catch (error) {
			dispatch(asyncError(error));
		} finally {
			dispatch(asyncFinish());
		}
	};
}

export function fetchHorror(page) {
	return async (dispatch) => {
		dispatch(asyncStart());
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=${
					process.env.REACT_APP_MOVIE_API_KEY
				}&with_genres=27&page=${page || 1}`
			);

			if (!response.ok) {
				throw new Error("Something Went Wrong, Try Again");
			}
			const data = await response.json();
			dispatch(loadMovies(data));
		} catch (error) {
			dispatch(asyncError(error));
		} finally {
			dispatch(asyncFinish());
		}
	};
}
export function fetchRomance(page) {
	return async (dispatch) => {
		dispatch(asyncStart());
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=${
					process.env.REACT_APP_MOVIE_API_KEY
				}&with_genres=10749&page=${page || 1}`
			);

			if (!response.ok) {
				throw new Error("Something Went Wrong, Try Again");
			}
			const data = await response.json();
			dispatch(loadMovies(data));
		} catch (error) {
			dispatch(asyncError(error));
		} finally {
			dispatch(asyncFinish());
		}
	};
}
export function fetchDocumentaries(page) {
	return async (dispatch) => {
		dispatch(asyncStart());
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=${
					process.env.REACT_APP_MOVIE_API_KEY
				}&with_genres=99&page=${page || 1}`
			);

			if (!response.ok) {
				throw new Error("Something Went Wrong, Try Again");
			}
			const data = await response.json();
			dispatch(loadMovies(data));
		} catch (error) {
			dispatch(asyncError(error));
		} finally {
			dispatch(asyncFinish());
		}
	};
}
