import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import FsLightbox from 'fslightbox-react';

import classes from './MovieShowcase.module.scss';

const MovieShowcase = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className={classes['showcase']}>
      <div className={classes['opacity-layer']} />
      <Container className={classes['showcase-inner-container']}>
          <div className={classes['play-button-container']} onClick={ () => setToggler(!toggler)}>
            <i className={classes['play-button'] + ' fas fa-play'}></i>
          </div>
          <FsLightbox
            toggler={ toggler }
            sources={ [
            'https://www.youtube.com/watch?v=IwfUnkBfdZ4',
            ] }
          />
      </Container>
    </div>
  )
}

export default MovieShowcase;