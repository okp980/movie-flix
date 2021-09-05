# Description
A **CRUD** application where movie thrillers of different category can be viewed, movies can be added to users choice of favourites or watchlists.
An unregistered user can watch any thriller from any category but must be registered to create a favourite or watchlist collection.

# Restrictions
- Must be logged in to view profile page.
- Must be logged in to add movie to favourites or watchlist collection

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

