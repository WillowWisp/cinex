import React from 'react';
import MovieShowcase from './components/MovieShowcase/MovieShowcase'; 
import MovieDetail from './components/MovieDetail/MovieDetail';
import NowPlayingMovies from './components/NowPlayingMovies/NowPlayingMovies';
import { Container } from 'react-bootstrap';
import { useLocation } from "react-router-dom";

// import mockMovie from './mock-movie';
// import mockMovies from '../../../mock-data';
// import { nowPlayingMovies } from './mock-movie';
import { mockNowOnMovies } from '../../../mock-data';

import classes from './Movie.module.scss';

const Movie = () => {
  let location = useLocation();

  // TODO: Change to API call
  const movie = location.state.movie;
  const nowOnMovies = mockNowOnMovies;

  // console.log(location. state.movie);
  return (
    <div className={classes['movie-page']} style={{ backgroundColor: "#0b0f18" }}>
      <MovieShowcase movie={movie}/>
      <Container>
        <MovieDetail movie={movie}/>
        <NowPlayingMovies movieList={nowOnMovies}/>
      </Container>
    </div>
  );
}

export default Movie;