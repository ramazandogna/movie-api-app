import { Container, Typography } from '@mui/material';

import Message from '../../components/Message';
import MovieGrid from '../../components/MovieGrid';
import React from 'react';
import { selectAllWatchlistMovies } from '../addMovie/moviesSlice';
import { useSelector } from 'react-redux';

const WatchListMovies = () => {
   const watchlistMovies = useSelector(selectAllWatchlistMovies);
   return (
      <Container fixed>
         <Typography
            variant="h4"
            style={{ fontWeight: '600', marginLeft: '40px' }}
            mt={4}
         >
            My Watchlist
         </Typography>
         {watchlistMovies.length > 0 ? (
            <>
               <MovieGrid
                  movies={watchlistMovies}
                  type="watchlist"
               />
            </>
         ) : (
            <>
               <Message title={'Please Add Your Favorite Movies'} />
            </>
         )}
      </Container>
   );
};

export default WatchListMovies;
