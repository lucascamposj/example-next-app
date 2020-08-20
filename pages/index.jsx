import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'isomorphic-fetch';

import MovieList from '../components/MovieList';

const Home = ({movies}) => {
  const [otherMovies, setOtherMovies] = useState([]);

  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=Indiana%20Jones`)
    .then((response) => {
      if(response.data?.Search){
        setOtherMovies(response.data.Search);
      }
    })
  },[setOtherMovies]);

  return (
    <>
      <MovieList movies={movies}/>
      <MovieList movies={otherMovies}/>
    </>
  )
}

export const getServerSideProps = async () => {
  try{
    const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=Star Wars`);
    const search = await response.json();
    const movies = search.Search;

    return {props: {movies}};
  }catch(err){
    console.log(err);
    return {props: {movies: []}}
  }
}

export default Home;


