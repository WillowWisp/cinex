import React from 'react';
import MovieShowcase from './components/MovieShowcase/MovieShowcase';
import MoviesSchedule from './components/MoviesSchedule/MoviesSchedule';

import { mockScreenTypes, mockNowOnMovies, mockShowtimes } from '../../../mock-data';

const Schedule = () => {
  // TODO: Change to API call
  const screenTypeList = mockScreenTypes;
  const nowOnMovieList = mockNowOnMovies;
  const showtimeList = mockShowtimes;

  return (
    <div style={{ backgroundColor: '#0b0f18' }}>
      <MovieShowcase nowOnMovieList={nowOnMovieList} />
      <MoviesSchedule screenTypeList={screenTypeList} nowOnMovieList={nowOnMovieList} showtimeList={showtimeList} />
    </div>
  );
}

export default Schedule;