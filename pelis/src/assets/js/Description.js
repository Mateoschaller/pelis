import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Description.css'; // Asegúrate de tener este archivo en la misma carpeta

function Description() {
    return (
        <div className="description-container">
            <p>
                Bienvenido a nuestra página de películas, un espacio dedicado para los aficionados del cine.
                Explora, descubre y comparte tu pasión por las películas. ¿No sabes qué ver?
                Déjanos sorprenderte con nuestra selección aleatoria.
            </p>
            <Link to="/EncuestaPeli" className="encuesta-link">Pelicula aleatoria</Link>
        </div>
    );
}

export default Description;