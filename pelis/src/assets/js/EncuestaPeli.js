import React, { useState, useEffect } from 'react';
import moviesData from '../data/Data'; // Asume que tienes un archivo con datos de películas

function EncuestaPeli() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const randomMovie = moviesData[Math.floor(Math.random() * moviesData.length)];
        console.log(randomMovie)
        setMovie(randomMovie);
    }, []);

    if (!movie) {
        return <div>Cargando...</div>;
    }
    const platformsDisplay = Array.isArray(movie.platform) ? movie.platform.join(', ') : movie.platform;
    // Convierte el array de protagonistas en un string, uniendo con ', '
    const protagonistsDisplay = Array.isArray(movie.protagonists) ? movie.protagonists.join(', ') : movie.protagonists;
    const generoDisplay = Array.isArray(movie.genre) ? movie.genre.join(', ') : movie.genre;


    return (
        <div className="movie-detail">
            <h1>{movie.title}</h1>
            <div className="movie-info">
                <img src={movie.image} alt={movie.title} className="movie-image" />
                    <div className="movie-text">
                    <p><strong>Año: </strong> {movie.year}</p>
                    <p><strong>Director: </strong> {movie.director}</p>
                    <p><strong>Género: </strong> {generoDisplay}</p>
                    <p><strong>Descripcion: </strong>{movie.description}</p>
                    <p><strong>Elenco: </strong>{protagonistsDisplay}</p>
                    <p><strong>Plataformas: </strong>{platformsDisplay}</p>
                    <p><strong>Edad: </strong>{movie.ageRating}</p>
                </div>
            </div>
        </div>
    );
}

export default EncuestaPeli;