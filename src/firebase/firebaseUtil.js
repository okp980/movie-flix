import { toast } from "react-toastify";
import firebase from "./firebase";
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export function signInUserToFirebase(email, password) {
	return auth.signInWithEmailAndPassword(email, password);
}

export function signOutUserFromFirebase() {
	return auth.signOut();
}

export async function signUpUserToFirebase(regEmail, regPassword) {
	try {
		const userCredential = await auth.createUserWithEmailAndPassword(
			regEmail,
			regPassword
		);
		const user = userCredential.user;
		const { uid, displayName, photoURL, email, phoneNumber } = user;
		return await createUserProfile(uid, {
			uid,
			displayName,
			photoURL,
			email,
			phoneNumber,
		});
	} catch (error) {
		throw error;
	}
}

export function createUserProfile(userId, data) {
	return db.collection("users").doc(userId).set(data);
}

export function listenToFirebase(observer) {
	const user = auth.currentUser;
	return db.collection("users").doc(user.uid).onSnapshot(observer);
}

export async function updateUserProfile(data) {
	const user = auth.currentUser;
	try {
		if (user.displayName !== data.displayName) {
			await auth.currentUser.updateProfile({
				displayName: data.displayName,
			});
		}
		if (user.email !== data.email) {
			await auth.currentUser.updateEmail(data.email);
		}

		return await db.collection("users").doc(user.uid).update(data);
	} catch (error) {
		throw error;
	}
}

export async function getUserMoviesFromFirebase() {
	const user = auth.currentUser;
	try {
		const userMovies = await db.collection("movies").doc(user.uid).get();
		if (!userMovies.exists) {
			return;
		}
		return userMovies.data();
	} catch (error) {
		throw error;
	}
}

export function createUserMovies() {
	const user = auth.currentUser;
	return db.collection("movies").doc(user.uid).set({
		uid: user.uid,
		watchlist: [],
		favourites: [],
	});
}

export function addMovieToFirebaseWatchlist(movie) {
	const user = auth.currentUser;
	return db
		.collection("movies")
		.doc(user.uid)
		.update({
			watchlist: firebase.firestore.FieldValue.arrayUnion(movie),
		});
}

export function deleteMovieFromFirebaseWatchlist(movie) {
	const user = auth.currentUser;
	return db
		.collection("movies")
		.doc(user.uid)
		.update({
			watchlist: firebase.firestore.FieldValue.arrayRemove(movie),
		});
}

export function addMovieToFirebaseFavourites(movie) {
	const user = auth.currentUser;
	return db
		.collection("movies")
		.doc(user.uid)
		.update({
			favourites: firebase.firestore.FieldValue.arrayUnion(movie),
		});
}

export function deleteMovieFromFirebaseFavourites(movie) {
	const user = auth.currentUser;
	return db
		.collection("movies")
		.doc(user.uid)
		.update({
			favourites: firebase.firestore.FieldValue.arrayRemove(movie),
		});
}

export async function uploadFileToFirebaseStorage(file) {
	const user = auth.currentUser;
	const storageRef = storage.ref().child(`images/${user.uid}/${file.name}`);
	try {
		const response = await storage.ref().child(`images/${user.uid}`).listAll();
		if (response) {
			response.items.forEach(async (folderRef) => {
				try {
					await storage.ref().child(folderRef.fullPath).delete();
				} catch (error) {
					throw error;
				}
			});
		}
		const uploadTask = storageRef.put(file);
		uploadTask.on(
			"state_changed",
			(snapshot) => {},
			(error) => {
				console.log(error);
				toast.error("Error trying to uploaded image", {
					hideProgressBar: true,
				});
			},
			async () => {
				try {
					const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
					await auth.currentUser.updateProfile({
						photoURL: downloadURL,
					});
					await db.collection("users").doc(user.uid).update({
						photoURL: downloadURL,
					});
					toast.success("Image was successfully uploaded", {
						hideProgressBar: true,
					});
				} catch (error) {
					console.log(error);
				}
			}
		);
	} catch (error) {
		console.log(error);
		toast.error("Error trying to uploaded image", {
			hideProgressBar: true,
		});
	}
}
