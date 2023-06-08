import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   watchedMovies: [],
   watchlistMovies: [],
};

const movieSlice = createSlice({
   name: 'movies',
   initialState: initialState,
   reducers: {
      addMovieToWatchlist(state, action) {
         state.watchlistMovies.push(action.payload);
      },
      addMovieToWatched(state, action) {
         state.watchlistMovies = state.watchlistMovies.filter(
            (movie) => movie.id !== action.payload.id
         );
         state.watchedMovies.push(action.payload);
      },
      removeMovieFromWatchlist(state, action) {
         state.watchlistMovies = state.watchlistMovies.filter(
            (movie) => movie.id !== action.payload.id
         );
      },
      moveToWatchlist(state, action) {
         state.watchedMovies = state.watchedMovies.filter(
            (movie) => movie.id !== action.payload.id
         );
         state.watchedMovies.push(action.payload);
      },
      removeFromWatched(state, action) {
         state.watchedMovies = state.watchedMovies.filter(
            (movie) => movie.id !== action.payload.id
         );
      },
   },
});

export const selectAllWatchlistMovies = (state) => state.movies.watchlistMovies;
export const selectAllWatchedMovies = (state) => state.movies.watchedMovies;

export const {
   addMovieToWatchlist,
   removeMovieFromWatchlist,
   addMovieToWatched,
   moveToWatchlist,
   removeFromWatched,
} = movieSlice.actions;

export default movieSlice.reducer;
