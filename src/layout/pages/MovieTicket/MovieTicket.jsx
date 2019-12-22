import React from 'react';
import { useLocation } from 'react-router-dom';

import TabSeats from './components/TabSeats/TabSeats';

import classes from './MovieTicket.module.scss';

function MovieTicket() {
  var location = useLocation();

  const movie = location.state.movie;
  const showtime = location.state.showtime;

  return (
    <div className={classes['page']}>
      <div
        className={classes['cover']}
        style={{zIndex: 1, background: `url(${movie.wallpapers[0]})`}}
      >
        <div className={classes['cover-opacity']}></div>
      </div>
      <div style={{position: 'relative', zIndex: 2, paddingTop: 200}}>
        <TabSeats movie={movie} showtime={showtime}/>
      </div>
    </div>
  )
}

export default MovieTicket;