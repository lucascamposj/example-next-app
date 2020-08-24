import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {Container, InfoContainer} from './styles';

const MovieListItem = ({movie}) => {
  const router = useRouter();

  if(router.isFallback){
    return <h1>Loading...</h1>
  }

  return(
    <Container>
      <Link href={'/movies/[movie]'} as={`/movies/${movie.imdbID}`} passHref>
        <a>
          <img src={movie.Poster} alt={movie.Title}/>
        </a>
      </Link>
      <InfoContainer>
        <h1>{movie.Title}</h1>
        <h2>{movie.Year}</h2>
      </InfoContainer>
    </Container>
  )
};

export default MovieListItem;