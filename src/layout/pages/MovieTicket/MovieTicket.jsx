import React from 'react';

import TabSeats from './components/TabSeats/TabSeats';

import classes from './MovieTicket.module.scss';

function MovieTicket() {

  return (
    <div className={classes['page']}>
      <div className={classes['cover']} style={{zIndex: 1}}>
        <div className={classes['cover-opacity']}></div>
      </div>
      <div style={{position: 'relative', zIndex: 2, paddingTop: 200}}>
        <TabSeats />
      </div>
    </div>
  )
}

export default MovieTicket;