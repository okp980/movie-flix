import {
	LISTEN_TO_CURRENT_USER,
	SIGN_IN_USER,
	SIGN_OUT_USER,
} from "../type/authType";
import { asyncError, asyncFinish, asyncStart } from "./asyncAction";
import firebase from "../../firebase/firebase";
import { asyncGetUserMovies } from "./userMovieAction";
import { listenToFirebase } from "../../firebase/firebaseUtil";

export const signInUser = (user) => ({ type: SIGN_IN_USER, payload: user });
export const signOutUser = () => ({ type: SIGN_OUT_USER });
export const listenToCurrentUser = (user) => ({
	type: LISTEN_TO_CURRENT_USER,
	payload: user,
});

// Async actions

export function AsyncListenToUser() {
	return async (dispatch) => {
		try {
			dispatch(asyncStart());
			await listenToFirebase(
				(snapshot) => {
					dispatch(listenToCurrentUser(snapshot.data()));
				},
				(error) => {
					throw error;
				}
			);

			dispatch(asyncFinish());
		} catch (error) {
			dispatch(asyncError(error));
		}
	};
}

export const verifyAuth = () => async (dispatch) => {
	return firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			dispatch(signInUser(user));
			dispatch(AsyncListenToUser());
			dispatch(asyncGetUserMovies());
		} else {
			dispatch(signOutUser());
		}
	});
};
