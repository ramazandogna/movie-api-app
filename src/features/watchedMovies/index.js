import { Container, Typography } from '@mui/material';

import Message from '../../components/Message';
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
               <Message title={'Please Add Your Watched Movie Here'} />
            </>
         )}
      </Container>
   );
};

export default WatchedMovies;
