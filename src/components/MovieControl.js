import { Button, Stack } from '@mui/material';
import {
   addMovieToWatched,
   moveToWatchlist,
   removeFromWatched,
   removeMovieFromWatchlist,
} from '../features/addMovie/moviesSlice';

import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

const MovieControl = ({ type, movie, display }) => {
   const ControllButton = styled(Button)(({ _ }) => ({
      color: '#fefefe',
      backgroundColor: 'transparent',
      border: 'none',
      transition: 'all 0.3 ease',
      fontSize: '1.25rem',
      paddings: '5px',
      margin: '0',
      minWidth: '0 !important',
   }));

   const dispatch = useDispatch();

   return (
      <div className={`notdisplayed ${display}`}>
         {type === 'watchlist' && (
            <Stack direction="row">
               <ControllButton
                  onClick={() => dispatch(addMovieToWatched(movie))}
               >
                  <i className="fa-fw far fa-eye"></i>
               </ControllButton>
               <ControllButton
                  onClick={() => dispatch(removeMovieFromWatchlist(movie.id))}
               >
                  <i className="fa-fw fa fa-times"></i>
               </ControllButton>
            </Stack>
         )}
         {type === 'watched' && (
            <Stack direction="row">
               <ControllButton onClick={() => dispatch(moveToWatchlist(movie))}>
                  <i className="fa-fw far fa-eye-slash"></i>
               </ControllButton>
               <ControllButton
                  onClick={() => dispatch(removeFromWatched(movie.id))}
               >
                  <i className="fa-fw fa fa-times"></i>
               </ControllButton>
            </Stack>
         )}
      </div>
   );
};

export default MovieControl;
