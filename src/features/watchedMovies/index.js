import { Container, Typography } from '@mui/material';

import MovieGrid from '../../components/MovieGrid';
import React from 'react';
import { selectAllWatchedMovies } from '../addMovie/moviesSlice';
import { useSelector } from 'react-redux';

const WatchedMovies = () => {
   const watchedMovies = useSelector(selectAllWatchedMovies);

   return (
      <Container fixed>
         <Typography
            variant="h4"
            style={{ fontWeight: '600', marginLeft: '40px' }}
            mt={4}
         >
            Watched List
         </Typography>
         {watchedMovies.length > 0 ? (
            <>
               <MovieGrid movies={watchedMovies} type="watched" />
            </>
         ) : (
            <>
               <h2>There is no any movie</h2>
            </>
         )}
      </Container>
   );
};

export default WatchedMovies;
