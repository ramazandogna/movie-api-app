import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddMovie from './features/addMovie';
import React from 'react';
import WatchListMovies from './features/watchListMovies';
import WatchedMovies from './features/watchedMovies';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/add" element={<AddMovie />} />
            <Route path="/" element={<WatchListMovies />} />
            <Route path="/watched" element={<WatchedMovies />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
