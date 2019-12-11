import React from 'react';
import classes from './NowPlayingMovies.module.scss';

const NowPlayingMovies = (props) => {
  const { movieList } = props;
  console.log(movieList);
  return (
    <div className={classes['container']}>
      <hr className={classes['line']}/>
      <div className={classes['section-name-text']}>
        <span><img className={classes['icon'] + " " + classes['invert']} src={'https://png.pngtree.com/svg/20141212/c596a7549c.png'} alt="cinema-icon"/></span>
        Phim đang chiếu
      </div>
      <hr className={classes['line']}/>
      <div className={classes['now-playing-movies-container']}>
        { movieList.map(movie => (
          <div className={classes['movie-container']}>
            <img className={classes['movie-poster']} src={movie.posterUrl} alt="movie-poster"/>
            <div className={classes['movie-title-text']}>{movie.title}</div>
          </div>
        )) }
      </div>
      <div className={classes['slide-pagination-container']}>
        <div className={classes['slide-dot'] + " " + classes['active']}/>
        <div className={classes['slide-dot']} />
        <div className={classes['slide-dot']} />
        <div className={classes['slide-dot']} />
        <div className={classes['slide-dot']} />
        

      </div>
    </div>
  );
}

export default NowPlayingMovies;