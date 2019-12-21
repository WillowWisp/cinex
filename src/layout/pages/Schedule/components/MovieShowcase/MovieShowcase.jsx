import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import classes from './MovieShowcase.module.scss';

const MovieShowcase = () => {
  return (
    <div className={classes['showcase']}>
      <div className={classes['opacity-layer']} />
    </div>
  )
}

export default MovieShowcase;