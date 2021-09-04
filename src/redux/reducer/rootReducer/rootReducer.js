import { combineReducers } from "redux";
import movieReducer from "../movieReducer/movieReducer";
import asyncReducer from "../asyncReducer/asyncReducer";
import modalReducer from "../modalReducer/modalReducer";
import authReducer from "../authReducer/authReducer";
import userMovieReducer from "../userMovieReducer/userMovieReducer";

const rootReducer = combineReducers({
	movie: movieReducer,
	async: asyncReducer,
	modal: modalReducer,
	auth: authReducer,

	userMovies: userMovieReducer,
});

export default rootReducer;
