import React from 'react';
import MovieShowcase from './components/MovieShowcase/MovieShowcase'; 
import MovieDetail from './components/MovieDetail/MovieDetail';
import mockMovie from './mock-movie';

const Movie = () => {
  return (
    <div style={{ backgroundColor: "#0B0F18" }}>
      <MovieShowcase movie={mockMovie}/>
      <MovieDetail movie={mockMovie}/>
    </div>
  );
}

export default Movie;