import React from 'react';
import MovieShowcase from './components/MovieShowcase/MovieShowcase'; 
import MovieDetail from './components/MovieDetail/MovieDetail';
import NowPlayingMovies from './components/NowPlayingMovies/NowPlayingMovies';
import mockMovie from './mock-movie';
import { nowPlayingMovies } from './mock-movie';
import classes from './Movie.module.scss';

const Movie = () => {
  // return (
  //   <div style={{ backgroundColor: "#0B0F18" }}>
  //     <MovieShowcase movie={mockMovie}/>
  //     <MovieDetail movie={mockMovie}/>
  //   </div>
  // );
  return (
    <div className={classes['movie-page']} style={{ backgroundColor: "#000000" }}>
      <MovieShowcase movie={mockMovie}/>
      <MovieDetail movie={mockMovie}/>
      <NowPlayingMovies movieList={nowPlayingMovies}/>
    </div>
  );
}

export default Movie;