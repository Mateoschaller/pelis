import React, { useState, useEffect } from 'react';
import '../css/FilterPelis.css'

function Filterpelis({ onFilterChange }) {
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');

  useEffect(() => {
    // Cada vez que un filtro cambia, actualiza el filtro global
    onFilterChange({ year, genre, platform });
  }, [year, genre, platform, onFilterChange]);

  
  return (
    <div className="filter-movies">
      <div className="filter">
        <label htmlFor="year">Año: </label>
        <select id="year" value={year} onChange={e => setYear(e.target.value)}>
          <option value="">Todos los años</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <div className="filter">
        <label htmlFor="genre">Género: </label>
        <select id="genre" value={genre} onChange={e => setGenre(e.target.value)}>
          <option value="">Todos los generos</option>
          <option value="Comedia">Comedia</option>
          <option value="Deporte">Deporte</option>
          <option value="Ciencia Ficcion">Ciencia Ficcion</option>
          <option value="Suspenso">Suspenso</option>
          <option value="Musical">Musical</option>
          <option value="Accion">Accion</option>
        </select>
      </div>
      <div className="filter">
        <label htmlFor="platform">Plataforma: </label>
        <select id="platform" value={platform} onChange={e => setPlatform(e.target.value)}>
          <option value="">Todos los generos</option>
          <option value="Star +">Star +</option>
          <option value="Apple TV">Apple TV</option>
          <option value="Netflix">Netflix</option>
          <option value="Claro">Claro TV</option>
          <option value="YouTube">You Tube</option>
          <option value="HBO MAX">HBO MAX</option>
          <option value="Flow">Flow</option>
          <option value="Amazon">Amazon prime</option>
          <option value="Disney">Disney +</option>
        </select>
      </div>
    </div>
  );
}

export default Filterpelis;