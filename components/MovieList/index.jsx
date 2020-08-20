import React from 'react';
import "isomorphic-fetch";
import MovieListItem from './MovieListItem';

const MovieList = ({movies}) => (
  <>
  {movies.map((movie) => 
    <MovieListItem key={movie.imdbID} movie={movie} />
  )}
  </>
);

export default MovieList;