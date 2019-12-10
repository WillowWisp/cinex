import React from 'react';
import classes from './MovieDetail.module.scss';

const MovieDetail = (props) => {
  const { movie } = props;
  return (
    <div className={classes['container']}>
      <div className={classes['title-and-screentypes']}>
        <div className={classes['title']}>
          {movie.title}
        </div>
        <div className={classes['screentypes']}>
          { movie.screenTypes.map( type => (
            <div className={classes["type"]}>
              {type}
            </div>
          ) ) }
        </div>
      </div>
      <hr className={classes["line"]}/>
      <div className={classes['poster-and-movie-infos']}>
        <div className={classes['poster-and-buttons']}>
          <img className={classes["poster"]} src={movie.smallPoster} alt="movie-poster"/>
        </div>
        <div className={classes['movie-infos']}>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;