import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

import * as movieAPI from '../../../api/movieAPI';
import * as screenTypeAPI from '../../../api/screenTypeAPI';
import * as showtimeAPI from '../../../api/showtimeAPI';

import MovieShowcase from './components/MovieShowcase/MovieShowcase';
import MoviesSchedule from './components/MoviesSchedule/MoviesSchedule';
// import { useStoreState } from 'easy-peasy';

import classes from './Schedule.module.scss';
// import { mockScreenTypes, mockNowOnMovies, mockShowtimes } from '../../../mock-data';

const Schedule = () => {
  const [nowOnMovies, setNowOnMovies] = useState(null);
  const [screenTypes, setScreenTypes] = useState(null);
  const [showtimes, setShowtimes] = useState(null);

  // const screenTypes = useStoreState(state => state.screenTypes.items);
  // const nowOnMovies = useStoreState(state => state.nowOnMovies.items);
  // const showtimes = useStoreState(state => state.showtimes.items);
  
  useEffect(() => {
    getNowOnMovies();
    getScreenTypes();
    getShowtimes();
  }, []);

  const getNowOnMovies = () => {
    movieAPI.getAllNowOnMovies()
      .then(response => {
        setNowOnMovies(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  const getScreenTypes = () => {
    screenTypeAPI.getAllScreenTypes()
      .then(response => {
        setScreenTypes(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  const getShowtimes = () => {
    showtimeAPI.getAllShowtimes()
      .then(response => {
        setShowtimes(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (nowOnMovies && screenTypes && showtimes)
    ? (
      <div style={{ backgroundColor: '#0b0f18' }}>
        <div className={classes['fade-in']}>
          <MovieShowcase nowOnMovies={nowOnMovies} />
          {
            nowOnMovies.length > 0 && screenTypes.length > 0 && showtimes.length > 0 ?
            <MoviesSchedule screenTypes={screenTypes} nowOnMovies={nowOnMovies} showtimes={showtimes} />
            :
            <div></div>
          }
        </div>
      </div>
    )
    : (
      <div style={{ backgroundColor: "#0b0f18", height: '100vh', display: 'flex' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Spinner animation="grow" variant="light" style={{ width: '2.5rem', height: '2.5rem' }}/>
        </div>
      </div>
    )
  ;
}

export default Schedule;