import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import classes from './UnreleasedSection.module.scss';

const UnreleasedSection = (props) => {
  var history = useHistory();

  // const onMovieClick = (movie) => {
  //   history.push(
  //     `/movie/${movie.id}`,
  //     {
  //       movie: movie
  //     }
  //   );
  // }

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
            props.movies.map((movie) => (
                <div className={classes['unreleased-movie-item']} key={movie.id}>
                  <div className={classes['unreleased-movie-item-date']}>
                    {movie.released}
                  </div>
                  <div className={classes['cai-duong-ke-ngang-voi-hinh-tron']}>
                    <div className={classes['cai-duong-ngang-ben-phai']}></div>
                    <div className={classes['hinh-tron-o-giua']}></div>
                    <div className={classes['cai-duong-ngang-ben-trai']}></div>
                  </div>
                  <img 
                    className={classes['unreleased-movie-item-poster']}
                    src={movie.poster}
                    alt={movie.title}
                  />
                  <div className={classes['unreleased-movie-item-title']}>
                    {movie.title}
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