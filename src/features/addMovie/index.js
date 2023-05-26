import { IconButton, InputBase, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';

import MovieSearchResult from '../../components/MovieSearchResult';
import SearchIcon from '@mui/icons-material/Search';
import { useGetMoviesMutation } from '../../services/movieApi';

const AddMovie = () => {
   const [query, setQuery] = useState('');
   const [getMovies, { data: movies }] = useGetMoviesMutation();

   useEffect(() => {
      const fetchMovie = async () => {
         await getMovies({ query });
      };
      if (query) {
         fetchMovie();
      }
   }, [query, getMovies]);

   const handleSearch = (e) => {
      setQuery(e.target.value);
   };
   return (
      <div
         style={{
            margin: 'auto',
            padding: '15px',
            maxWidth: '570px',
            alignContent: 'center',
            marginTop: '50px',
         }}
      >
         <Paper
            component="form"
            sx={{
               p: '2px 4px',
               display: 'flex',
               alignItems: 'center',
               width: '540',
            }}
         >
            <InputBase
               sx={{ ml: 1, flex: 1 }}
               placeholder="Search Your Movie"
               value={query}
               onChange={handleSearch}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
               <SearchIcon />
            </IconButton>
         </Paper>
         <div className="results">
            {movies?.results?.length > 0 &&
               movies?.results?.map((movie) => (
                  <MovieSearchResult key={movie.id} movie={movie} />
               ))}
         </div>
      </div>
   );
};

export default AddMovie;
