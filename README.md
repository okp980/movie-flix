# Movie-Flixx

<img width="1262" alt="movie-flix" src="https://user-images.githubusercontent.com/66972059/132137332-4a1a3f89-e9fa-4ed1-9a3b-317a5dc72c7b.png">

<img width="1258" alt="watch-movie-flixx" src="https://user-images.githubusercontent.com/66972059/132137433-1c40dbe6-2be1-46fe-86d9-5bf7d038bd23.png">

# Description
A **CRUD** application where movie thrillers of different category can be viewed, movies can be added to users choice of favourites or watchlists.
An unregistered user can watch any thriller from any category but must be registered to create a favourite or watchlist collection.

# Restrictions
- Must be logged-in to view profile page.
- Must be logged-in to add movie to favourites or watchlist collection

<img width="1264" alt="restrict-movie-flixx" src="https://user-images.githubusercontent.com/66972059/132137671-a5cc0a80-f91e-4cbb-a12b-ac79e3a3d11e.png">

Live link: [www.movie-flixx.netlify.app](https://www.movie-flixx.netlify.app)

# Library
- Firebase:
  - For backend user authentication
  - For database storage for user data (profile, image, movie collections)
- Redux:
  - To maintain app wide state
  - Redux thunk to perform asynchronous actions
- Formik:
  - For frontend form validation in profile page.
- React Content Loader:
  - For image placeholder while fetching images
- The Movie Database
  - api call for movies with different categories
- React youtube:
  - To fetch and play any selected movie from youtube
  ## Others:
  - Material UI, React Icons, React Toastify, React Tooltip

