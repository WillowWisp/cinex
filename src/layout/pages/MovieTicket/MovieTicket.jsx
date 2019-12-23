import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

import * as showtimeAPI from '../../../api/showtimeAPI';

import TabSeats from './components/TabSeats/TabSeats';

import classes from './MovieTicket.module.scss';

function MovieTicket(props) {
  const [showtime, setShowtime] = useState(null);
  // TODO: Forbid accessing directly by Url
  // var location = useLocation();

  // const movie = location.state.movie;
  // const showtime = location.state.showtime;

  useEffect(() => {
    getShowtimeDetail(props.match.params.id);
  }, [])

  const getShowtimeDetail = (id) => {
    showtimeAPI.getShowtimeDetailById(id)
      .then(response => {
        if (response.data) {
          setShowtime(response.data.showtime);
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className={classes['page']}>
      {
        showtime ?
        <>
          <div
            className={classes['cover']}
            style={{zIndex: 1, background: `url(${showtime.movie.wallpapers && showtime.movie.wallpapers[0] ? showtime.movie.wallpapers[0] : 'https://wallpaperaccess.com/full/1679635.jpg'})`}}
          >
            <div className={classes['cover-opacity']}></div>
          </div>
          <div style={{position: 'relative', zIndex: 2, paddingTop: 200}}>
            <TabSeats showtime={showtime}/>
          </div>
        </>
        :
        // TODO: Add Loading here instead
        <div></div>
      }
    </div>
  )
}

export default MovieTicket;