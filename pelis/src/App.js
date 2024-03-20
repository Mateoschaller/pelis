import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./assets/js/Navbar";
import Description from "./assets/js/Description";
import Filterpelis from "./assets/js/Filterpelis";
import MoviesGrid from "./assets/js/MoviesGrid";
import MovieDetail from "./assets/js/MovieDetail"; // Asegúrate de que el import sea correcto
import moviesData from './assets/data/Data';
import EncuestaPeli from './assets/js/EncuestaPeli';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filters, setFilters] = useState({
    year: '',
    director: '',
    genre: '',
    platform: '',
    ageRating: '',
  });

  useEffect(() => {
    const filteredMovies = moviesData.filter(movie => (
      (!filters.year || movie.year.toString() === filters.year) &&
      // Modifica esta línea para manejar correctamente cuando genre es un array
      (!filters.genre || (Array.isArray(movie.genre) ? movie.genre.some(genre => genre.toLowerCase().includes(filters.genre.toLowerCase())) : movie.genre.toLowerCase().includes(filters.genre.toLowerCase()))) &&
      (!filters.platform || (Array.isArray(movie.platform) ? movie.platform.some(platform => platform.toLowerCase().includes(filters.platform.toLowerCase())) : movie.platform.toLowerCase().includes(filters.platform.toLowerCase())))
    ));
    setMovies(filteredMovies);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Description />
              <Filterpelis onFilterChange={handleFilterChange} />
              <MoviesGrid movies={movies} />
            </>
          } />
          <Route path="/movies/:movieId" element={<MovieDetail />} />
          <Route path="/EncuestaPeli" element={<EncuestaPeli/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
