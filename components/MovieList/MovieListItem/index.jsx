import React from 'react';

const MovieList = ({movie}) => (
  <div>
    <h1>{movie.Title}</h1>
    <h2>Ano: {movie.Year}</h2>
    <img src={movie.Poster} alt={movie.Title}/>
  </div>
);

export default MovieList;