import React, { useEffect, useState } from 'react';

import * as movieAPI from '../../../api/movieAPI';

import YouTube from 'react-youtube';
import { useHistory  } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';

import Section from './components/Section/Section';
import Showcase from './components/Showcase/Showcase';
import UnreleasedSection from './components/UnreleasedSection/UnreleasedSection';

import classes from './Home.module.scss';

// import unreleaseMovies from './unreleased-mock';
// import { mockMovies, mockUpcomingMovies } from '../../../mock-data';
import { helper } from '../../../utils/helper';

function Home(props) {
  // const [toggler, setToggler] = useState(false);
  const [nowOnMovies, setNowOnMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  // const nowOnMovies = useStoreState(state => state.nowOnMovies.items);
  // const upcomingMovies = helper.paginate(useStoreState(state => state.upcomingMovies.items), 5, 1);

  let history = useHistory();
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  useEffect(() => {
    getNowOnMovies();
    getUpcomingMovies();
  }, []);

  const getNowOnMovies = () => {
    movieAPI.getAllNowOnMovies()
      .then(response => {
        console.log(response);
        setNowOnMovies(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const getUpcomingMovies = () => {
    movieAPI.getAllUpcomingMovies()
      .then(response => {
        console.log(response);
        setUpcomingMovies(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const onMovieClick = (movie) => {
    // props.router.push({
    //   pathname: `/movie/${movie.id}`,
    //   state: {
    //     movie: movie
    //   }
    // })
    history.push(`/movie/${movie.id}`);
  }

  return (
    <div className={classes['home']}>
      <Showcase />

      <Section title="Now on">
        <div className={'row ' + classes['movie-list-content-container']}>
          {nowOnMovies.map(movie => (
            <div
              key={movie.id}
              className={'col-3 ' + classes['movie-list-content-item']}
            >
              <img
                className={classes['movie-list-content-item-img']}
                src={movie.poster}
                alt="movie poster"
                onClick={onMovieClick.bind(this, movie)}
              />
              <div className={classes['movie-list-content-item-title']} onClick={onMovieClick.bind(this, movie)}>{movie.title}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Trailer">
        <div className={classes['trailer-container']}>
          {/* <div className={classes['mai-lam-tiep']}>
            Đây là cái trailer nè
          </div> */}
          <YouTube
            videoId={nowOnMovies.length > 0 && nowOnMovies[0].trailer ? helper.getYouTubeID(nowOnMovies[0].trailer) : 'dQw4w9WgXcQ'}
            opts={opts}
            onReady={_onReady}
          />
        </div>
      </Section>

      <UnreleasedSection movies={upcomingMovies} />
    </div>
  )
}

export default Home;