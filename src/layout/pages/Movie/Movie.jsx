import React from 'react';
import MovieShowcase from './components/MovieShowcase/MovieShowcase'; 
import MovieDetail from './components/MovieDetail/MovieDetail';
import NowPlayingMovies from './components/NowPlayingMovies/NowPlayingMovies';
import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { useStoreState } from 'easy-peasy';

// import mockMovie from './mock-movie';
// import mockMovies from '../../../mock-data';
// import { nowPlayingMovies } from './mock-movie';
// import { mockNowOnMovies, mockMovies } from '../../../mock-data';

import classes from './Movie.module.scss';

const Movie = () => {
  // let location = useLocation();

  const movies = useStoreState(state => state.movies.items);
  const nowOnMovies = useStoreState(state => state.nowOnMovies.items);

  const { id } = useParams();
  const movie = movies.find(movie => movie.id === id);

  // console.log(location. state.movie);
  return (
    <div className={classes['movie-page']} style={{ backgroundColor: "#0b0f18" }}>
      <MovieShowcase movie={movie}/>
      <Container>
        <MovieDetail movie={movie}/>
        <NowPlayingMovies movies={nowOnMovies}/>
      </Container>
    </div>
  );
}

export default Movie;