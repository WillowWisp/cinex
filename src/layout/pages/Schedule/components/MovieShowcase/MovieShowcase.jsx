import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import classes from './MovieShowcase.module.scss';

const MovieShowcase = (props) => {
  const { nowOnMovieList } = props;
  return (
    <div
      className={classes['showcase']}
      style={{ background: `url(${nowOnMovieList[0].wallpapers[0]})` }}
    >
      <div className={classes['opacity-layer']} />
    </div>
  )
}

export default MovieShowcase;