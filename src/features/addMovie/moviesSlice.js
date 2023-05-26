import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      watchedMovies: [],
      watchlistMovies: [],
   },
   reducers: {
      addMovieToWatchlist(state, action) {
         state.watchlistMovies.push(action);
      },
   },
});

export const selectAllWatchlistMovies = (state) => state.movies.watchlistMovies;

export const { addMovieToWatchlist } = movieSlice.actions;

export default movieSlice.reducer;
