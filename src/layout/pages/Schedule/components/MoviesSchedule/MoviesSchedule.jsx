import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import classes from './MoviesSchedule.module.scss';

import {helper} from '../../../../../utils/helper';

import { mockScreenType, mockNowOnMovies, mockShowtimes } from '../../../../../mock-data';

const MoviesSchedule = () => {
  const [chosenScreenTypes, setChosenScreenTypes] = useState([]);
  const [moviesChosenDate, setMoviesChosenDate] = useState([]);

  useEffect(() => {
    setChosenScreenTypes(
      Array.from(mockScreenType, (screenType) => (screenType.id))
    );
    const today = new Date();
    setMoviesChosenDate(
      Array.from(mockNowOnMovies, (movie) => ({ movieId: movie.id, chosenDate: today.getDate() }))
    );
    getShowtimesByMovieIdAndDate('movie_00', 21);
  }, []);

  const getDatesToDisplay = () => {
    const MS_IN_A_DAY = 86400000;
    const today = new Date();
    today.setHours(0,0,0,0);
    const datesToDisplay = [
      today,
      new Date(today.getTime() + MS_IN_A_DAY * 1),
      new Date(today.getTime() + MS_IN_A_DAY * 2),
      new Date(today.getTime() + MS_IN_A_DAY * 3),
      new Date(today.getTime() + MS_IN_A_DAY * 4),
    ];
    return datesToDisplay;
  }

  const getShowtimesByMovieIdAndDate = (movieId, date) => {
    // TODO: Đưa cho hoàng tử Chăm pa xử lí ở backend
    var showtimeByScreenType = Array.from(mockScreenType, (screenType => ({ screenType: screenType, showtimes: [] })));
    for (var showtime of mockShowtimes) {
      const showDate = new Date(showtime.startAt);
      if (showtime.movie.id === movieId && showDate.getDate() === date) {
        const screenTypeIndex = showtimeByScreenType.findIndex(st => st.screenType.name === showtime.screenType.name);
        showtimeByScreenType[screenTypeIndex].showtimes.push(showtime);
      }
    }
    showtimeByScreenType = showtimeByScreenType.filter(st => st.showtimes.length > 0);
    console.log(showtimeByScreenType);
    return showtimeByScreenType;
  }

  const getChosenDateOfMovie = (movieId) => {
    console.log(movieId);
    const index = moviesChosenDate.findIndex(chosen => {
      return chosen.movieId === movieId
    });
    console.log(index);

    return moviesChosenDate[index].chosenDate;
  }

  const isChosenScreenType = (screenType) => {
    return chosenScreenTypes.findIndex(chosen => chosen === screenType.id) > -1;
  }

  const isAllScreenTypesChosen = () => {
    return chosenScreenTypes.length === mockScreenType.length;
  }

  const isChosenDateOfMovie = (movieId, date) => {
    const movieIndex = moviesChosenDate.findIndex(chosen => chosen.movieId === movieId);
    console.log(date === moviesChosenDate[movieIndex].chosenDate);
    return date === moviesChosenDate[movieIndex].chosenDate;
  }


  const onScreenTypeButtonClick = (screenType) => {
    if (isChosenScreenType(screenType)) {
      if (chosenScreenTypes.length <= 1) {
        return;
      }
      setChosenScreenTypes(chosenScreenTypes.filter(chosen => chosen !== screenType.id));
    }
    else {
      setChosenScreenTypes([ ...chosenScreenTypes, screenType.id ]);
    }
  }

  const onAllScreenTypeClick = () => {
    setChosenScreenTypes(
      Array.from(mockScreenType, (screenType) => (screenType.id))
    );
  }

  const onDateClick = (movieId, date) => {
    setMoviesChosenDate(
      moviesChosenDate.map(chosen => (
        chosen.movieId === movieId
        ? { ...chosen, chosenDate: date }
        : chosen
      ))
    )
  }

  const renderScreenTypeButton = (screenType) => {
    return (
      <div 
        className={ 
          isChosenScreenType(screenType)
          ? classes['screen-type-button-active'] 
          : classes['screen-type-button']
        }
        onClick={onScreenTypeButtonClick.bind(this, screenType)}
      >{screenType.name}
      </div>
    );
  }
    
  const renderScreenTypes = (screenTypes) => {
    return (
      <div className={classes['screen-types']}>
      <div 
        className={ 
          isAllScreenTypesChosen()
          ? classes['screen-type-button-active'] 
          : classes['screen-type-button']
        }
        onClick={onAllScreenTypeClick}
      >Tất cả
      </div>
        {screenTypes.map(screenType => (
          renderScreenTypeButton(screenType)
        ))}
      </div>
    );
  }

  const renderMovie = (movie) => {
    const showtimes = moviesChosenDate.length > 0 
          ? getShowtimesByMovieIdAndDate(movie.id, getChosenDateOfMovie(movie.id))
          : [];
    return (
      <div className={classes['movie-container']}>
        <div className={classes['movie-info-and-display-dates']}>
          <div className={classes['poster-container']}>
            <img className={classes["poster"]} src={movie.poster} alt="movie-poster"/>
          </div>
          <div className={classes['info-and-display-dates']}>
            <div className={classes['info']}>
              <div className={classes['title']}>{movie.title}</div>
              <div className={classes['sub-info']}>{movie.runtime} min  |  {helper.getFormattedGenresString(movie.genres)}</div>
            </div>
            <div className={classes['display-dates']}>
              {getDatesToDisplay().map(date => (
                <div className={classes['date-container']}>
                  <div 
                    className={
                      classes['date-clickable'] +
                      (chosenScreenTypes.length > 0 && isChosenDateOfMovie(movie.id, date.getDate())
                      ? (' ' + classes['date-clickable-active'])
                      : '')
                    }
                    onClick={onDateClick.bind(this, movie.id, date.getDate())}
                  >
                    <div className={classes['day-of-week']}>{helper.getDayOfWeekName(date.getDay())}</div>
                    <div className={classes['day-of-month']}>{date.getDate()}</div>
                    <div className={classes['month']}>{helper.getMonthName(date.getMonth())}</div>
                  </div>
                  <div className={classes['date-foot']}>
                    { chosenScreenTypes.length > 0 && isChosenDateOfMovie(movie.id, date.getDate())
                      ? <div className={classes['foot-circle']}></div>
                      : <div className={classes['foot-line']}></div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {
          moviesChosenDate.length > 0
          ? (
            <div className={classes['screen-type-available']}>
              {showtimes.map((showtimeByScreentype, index) => (
                <div className={classes['show-time-by-screen-type']}>
                  <div className={classes['screen-type-container']}>
                    {showtimeByScreentype.screenType.name}
                  </div>
                  <div className={classes['showtimes-container']}>
                    {showtimeByScreentype.showtimes.map(showtime => (
                      <div className={classes['showtime']}>
                        {helper.getFormattedTime(new Date(showtime.startAt))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {showtimes.length <= 0
                ? (
                  <div className={classes['no-showtime']}>
                    No Showtime on the chosen Date
                  </div>
                )
                : null
              }
            </div>
          )
          : null
        }
      </div>
    );
  }

  return (
    <Container className={classes['container']}>

      <div className={classes['header']}>
        <div className={classes['big-text']}>
          Lịch chiếu
        </div>
        <div className={classes['fading-line']}></div>
        {renderScreenTypes(mockScreenType)}
      </div>

      <div className={classes['movies']}>
        { mockNowOnMovies.map(movie => (
          renderMovie(movie)
        )) }
      </div>
    </Container>
  );
}

export default MoviesSchedule;