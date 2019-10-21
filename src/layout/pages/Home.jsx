import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import classes from './Home.module.scss';
import FsLightbox from 'fslightbox-react';

function Home() {
  const [toggler, setToggler] = useState(false);
  return (
    <div className={classes['home']}>
      <div className={classes['showcase']}>
        <div className={classes['opacity-layer']} />
        <Container className={classes['showcase-inner-container']}>
          <div className={classes['title-container']} onClick={ () => setToggler(!toggler)}>
            <i className={classes['play-button'] + ' fas fa-play'}></i>
            <div className={classes['title-group']}>
              <div className={classes['title']}>
                Joker
              </div>
              <div className={classes['sub-title']}>In theater</div>
            <FsLightbox
              toggler={ toggler }
              sources={ [
              'https://www.youtube.com/watch?v=zAGVQLHvwOY',
              ] }
            />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Home;