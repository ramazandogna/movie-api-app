import {
   Box,
   Button,
   Card,
   CardContent,
   CardMedia,
   Stack,
   Typography,
} from '@mui/material';
import {
   addMovieToWatched,
   addMovieToWatchlist,
   selectAllWatchedMovies,
   selectAllWatchlistMovies,
} from '../features/addMovie/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

import Moment from 'react-moment';
import React from 'react';

const MovieSearchResult = ({ movie }) => {
   const dispatch = useDispatch();

   //disabling to add button when watchlist has already this movie
   const watchlistMovies = useSelector(selectAllWatchlistMovies);
   const watchedMovies = useSelector(selectAllWatchedMovies);

   let storedMovies = watchlistMovies.find((item) => item.id === movie.id);
   let storedMoviesWatched = watchedMovies.find((item) => item.id === movie.id);

   const watchlistDisabled = storedMovies
      ? true
      : storedMoviesWatched
      ? true
      : false;
   const watchedDisabled = storedMoviesWatched ? true : false;

   return (
      <Card sx={{ display: 'flex', height: 170, m: 1 }}>
         <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
         />
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
               <Typography component="div" variant="h5">
                  {movie.title.substring(0, 25)}
               </Typography>
               <Typography color="text.secondary" component="div">
                  <Moment format="YYYY">{movie.release_date}</Moment>
               </Typography>
               <Stack spacing={2} direction="row" sx={{ mt: 6 }}>
                  <Button
                     disabled={watchlistDisabled}
                     variant="contained"
                     onClick={() => dispatch(addMovieToWatchlist(movie))}
                  >
                     Add to Watchlist
                  </Button>
                  <Button
                     style={{ backgroundColor: 'purple' }}
                     disabled={watchedDisabled}
                     variant="contained"
                     onClick={() => dispatch(addMovieToWatched(movie))}
                  >
                     Add to Watched
                  </Button>
               </Stack>
            </CardContent>
         </Box>
      </Card>
   );
};

export default MovieSearchResult;
