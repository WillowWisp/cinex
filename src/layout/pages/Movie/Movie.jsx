import React from 'react';
import MovieShowcase from './components/MovieShowcase/MovieShowcase'; 
import MovieDetail from './components/MovieDetail/MovieDetail';
import NowPlayingMovies from './components/NowPlayingMovies/NowPlayingMovies';
import { Container } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

import mockMovie from './mock-movie';
import { nowPlayingMovies } from './mock-movie';

import classes from './Movie.module.scss';

const Movie = () => {
  let location = useLocation();
  // return (
  //   <div style={{ backgroundColor: "#0B0F18" }}>
  //     <MovieShowcase movie={mockMovie}/>
  //     <MovieDetail movie={mockMovie}/>
  //   </div>
  // );
  // const movie = mockMovie
  const movie = location.state.movie;
  console.log(location. state.movie);
  return (
    <div className={classes['movie-page']} style={{ backgroundColor: "#0b0f18" }}>
      <MovieShowcase movie={movie}/>
      <Container>
        <MovieDetail movie={movie}/>
        <NowPlayingMovies movieList={nowPlayingMovies}/>
      </Container>
    </div>
  );
}

export default Movie;