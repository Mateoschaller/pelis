import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviesData from '../data/Data'; // Asegúrate de que la ruta al archivo de datos sea correcta
import '../css/MovieDetail.css'; // Asegúrate de tener este archivo CSS

const MovieDetail = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    

    useEffect(() => {
        const foundMovie = moviesData.find(movie => movie.id.toString() === movieId);
        console.log(foundMovie); // Esto debería mostrarte el objeto de la película encontrada
        setMovie(foundMovie);
    }, [movieId]);

    if (!movie) {
        return <div className="movie-detail">Película no encontrada</div>;
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
};

export default MovieDetail;
