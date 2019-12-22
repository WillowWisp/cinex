import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import classes from './MovieShowcase.module.scss';

const MovieShowcase = (props) => {
  const { nowOnMovies } = props;
  return (
    <div
      className={classes['showcase']}
      style={{ 
        background: nowOnMovies.length > 0
        ? `url(${nowOnMovies[0].wallpapers[0]})` 
        : `url('https://ak2.picdn.net/shutterstock/videos/3776432/thumb/1.jpg')`
      }}
    >
      <div className={classes['opacity-layer']} />
    </div>
  )
}

export default MovieShowcase;