import React from 'react';
import MovieCard from './MovieCard';
import '../css/MovieGrid.css'

const MoviesGrid = ({ movies }) => {
  return (
    <div className="movies-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesGrid;