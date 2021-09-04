import { useEffect, useState } from "react";

export default function useFetchMovie(movieId) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		async function sendRequest() {
			setLoading(true);
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
				);

				if (!response.ok) {
					throw new Error("Something Went Wrong, Try Again");
				}
				const data = await response.json();
				setMovie(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
		sendRequest();
	}, [movieId]);

	return {
		loading,
		error,
		movie,
	};
}
