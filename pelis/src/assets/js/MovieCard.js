import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/MovieCard.css'; // Asegúrate de tener este CSS para estilos

const MovieCard = ({ movie }) => {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const handleImageClick = () => {
        setIsEnlarged(!isEnlarged);
    };
    const platformsDisplay = Array.isArray(movie.platform) ? movie.platform.join(', ') : movie.platform;
    const genreDisplay = Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre;
    return (
        <div className={`movie-card ${isEnlarged ? 'enlarged' : ''}`}>
            <div className='img-movie'>
                <Link to={`/movies/${movie.id}`}>
                    <img
                        src={movie.image}
                        alt={movie.title}
                        onClick={handleImageClick}
                        className={isEnlarged ? 'enlarged' : ''}
                        loading="lazy"
                    />
                </Link>
            </div>
            <h3>{movie.title}</h3>
            <p className='year'>Año: {movie.year}</p>
            <p className='director'>Plataforma: {platformsDisplay}</p>
            <p className='genre'>Género: {genreDisplay}</p>
        </div>
    );
};

export default MovieCard;