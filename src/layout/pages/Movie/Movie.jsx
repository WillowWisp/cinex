import React, { useState, useEffect } from 'react';
import * as movieAPI from '../../../api/movieAPI';
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

const Movie = (props) => {
  // let location = useLocation();
  const [movie, setMovie] = useState(null);
  const [nowOnMovies, setNowOnMovies] = useState(null);

  // const movies = useStoreState(state => state.movies.items);
  // const nowOnMovies = useStoreState(state => state.nowOnMovies.items);

  // const { id } = useParams();
  // const movie = movies.find(movie => movie.id === id);

  useEffect(() => {
    getMovieDetail(props.match.params.id);
    getNowOnMovies();
  }, []);
  
  const getMovieDetail = (id) => {
    movieAPI.getMovieDetailById(id)
      .then(response => {
        console.log(response);
        setMovie(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const getNowOnMovies = () => {
    movieAPI.getAllNowOnMovies()
      .then(response => {
        console.log(response);
        setNowOnMovies(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  // console.log(location. state.movie);
  return (
    <div className={classes['movie-page']} style={{ backgroundColor: "#0b0f18" }}>
      {movie ? <MovieShowcase movie={movie}/> : null}
      <Container>
        <MovieDetail movie={movie}/>
        {nowOnMovies ? <NowPlayingMovies movies={nowOnMovies}/> : null}
      </Container>
    </div>
  );
}

export default Movie;