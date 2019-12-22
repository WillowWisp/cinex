import React from 'react';
import MovieShowcase from './components/MovieShowcase/MovieShowcase';
import MoviesSchedule from './components/MoviesSchedule/MoviesSchedule';
import { useStoreState } from 'easy-peasy';

// import { mockScreenTypes, mockNowOnMovies, mockShowtimes } from '../../../mock-data';

const Schedule = () => {
  const screenTypes = useStoreState(state => state.screenTypes.items);
  const nowOnMovies = useStoreState(state => state.nowOnMovies.items);
  const showtimes = useStoreState(state => state.showtimes.items);

  return (
    <div style={{ backgroundColor: '#0b0f18' }}>
      <MovieShowcase nowOnMovies={nowOnMovies} />
      <MoviesSchedule screenTypes={screenTypes} nowOnMovies={nowOnMovies} showtimes={showtimes} />
    </div>
  );
}

export default Schedule;