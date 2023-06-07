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
      AddMovieToWatched(state, action) {
         const movieToRemoveIndex = state.watchlistMovies.findIndex(
            (movie) => movie.id === action.payload.id
         );
         if (movieToRemoveIndex !== -1) {
            const movieToRemove = state.watchlistMovies[movieToRemoveIndex];
            state.watchlistMovies.splice(movieToRemoveIndex, 1);
            state.watchedMovies.push(movieToRemove);
         }
      },
      RemoveMovieFromWatchlist(state, action) {
         const movieIndex = state.watchlistMovies.findIndex(
            (movie) => movie.id === action.payload
         );
         if (movieIndex !== -1) {
            state.watchlistMovies.splice(movieIndex, 1);
         }
      },
   },
});

export const selectAllWatchlistMovies = (state) => state.movies.watchlistMovies;

export const {
   addMovieToWatchlist,
   RemoveMovieFromWatchlist,
   AddMovieToWatched,
} = movieSlice.actions;

export default movieSlice.reducer;
