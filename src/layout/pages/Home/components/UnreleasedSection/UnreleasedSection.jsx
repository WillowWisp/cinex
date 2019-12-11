import React from 'react';
import { Container } from 'react-bootstrap';

import classes from './UnreleasedSection.module.scss';

const UnreleasedSection = (props) => {
  return (
    <div className={classes['unreleased-section']}>
      <Container>
        <div className={classes['section-title-container']}>
          <div className={classes['section-title-text']}>
            Coming Soon
          </div>
        </div>
        <div className={classes['unreleased-movies-container']}>
          {
            props.movieList.map(({ title, posterUrl, releaseDate }) => (
              
                <div className={classes['unreleased-movie-item']}>
                  <div className={classes['unreleased-movie-item-date']}>
                    {releaseDate}
                  </div>
                  <div className={classes['cai-duong-ke-ngang-voi-hinh-tron']}>
                    <div className={classes['cai-duong-ngang-ben-phai']}></div>
                    <div className={classes['hinh-tron-o-giua']}></div>
                    <div className={classes['cai-duong-ngang-ben-trai']}></div>
                  </div>
                  <img 
                    className={classes['unreleased-movie-item-poster']}
                    src={posterUrl}
                    alt={title}
                  />
                  <div className={classes['unreleased-movie-item-title']}>
                    {title}
                  </div>
                </div>
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default UnreleasedSection;