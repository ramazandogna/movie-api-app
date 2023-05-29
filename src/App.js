import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddMovie from './features/addMovie';
import Header from './components/Header';
import React from 'react';
import WatchListMovies from './features/watchListMovies';
import WatchedMovies from './features/watchedMovies';

function App() {
   return (
      <BrowserRouter classname="container">
         <Header />
         <div className="container">
            <Routes>
               <Route path="/add" element={<AddMovie />} />
               <Route path="/" element={<WatchListMovies />} />
               <Route path="/watched" element={<WatchedMovies />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
