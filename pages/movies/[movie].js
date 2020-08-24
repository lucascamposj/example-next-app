import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';

import MovieListItem from '../../components/MovieList/MovieListItem';

const Movie = ({movie}) => {
  return (
    <>
      <Link href="/" as="/" passHref>
        <a>
          Voltar
        </a>
      </Link>
      <MovieListItem movie={movie}/>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
    ],
    fallback: true
  }
}

export const getStaticProps = async ({params}) => {

  try{
    const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=${params.movie}`);
    const movie_data = await response.json();

    return {props: {movie: movie_data}};
  }catch(err){
    console.log(err);
    return {props: {movies: {}}}
  }
}

export default Movie;


