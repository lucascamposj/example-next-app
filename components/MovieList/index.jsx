import React from 'react';
import "isomorphic-fetch";

import MovieListItem from './MovieListItem';
import {Container} from './styles';

const MovieList = ({movies}) => (
  <Container>
    {movies.map((movie) => 
      <MovieListItem key={movie.imdbID} movie={movie} />
    )}
  </Container>
);

export default MovieList;