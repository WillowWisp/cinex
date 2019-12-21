import React from 'react';
import MovieShowcase from './components/MovieShowcase/MovieShowcase';
import MoviesSchedule from './components/MoviesSchedule/MoviesSchedule';

const Schedule = () => {
  return (
    <div style={{ backgroundColor: '#0b0f18' }}>
      <MovieShowcase />
      <MoviesSchedule />
    </div>
  );
}

export default Schedule;