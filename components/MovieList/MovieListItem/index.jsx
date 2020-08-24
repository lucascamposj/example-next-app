import React from 'react';

import {Container, InfoContainer} from './styles';

const MovieList = ({movie}) => (
  <Container>
    <img src={movie.Poster} alt={movie.Title}/>
    <InfoContainer>
      <h1>{movie.Title}</h1>
      <h2>Ano: {movie.Year}</h2>
    </InfoContainer>
  </Container>
);

export default MovieList;