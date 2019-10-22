import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Section from './components/Section/Section';
import Showcase from './components/Showcase/Showcase';

import classes from './Home.module.scss';


function Home() {
  // const [toggler, setToggler] = useState(false);
  return (
    <div className={classes['home']}>
      <Showcase />

      {/* <div className={classes['movie-list']}>
        <Container>
          <div className={classes['movie-list-title-container']}>
            <div className={classes['movie-list-title-text']}>
              Now on
            </div>
            <div className={classes['deobietdatsao']}></div>
          </div>
          <div className={'row ' + classes['movie-list-content-container']}>
            <div className={'col-3 ' + classes['movie-list-content-item']}>
              <img className={classes['movie-list-content-item-img']} src="https://images-na.ssl-images-amazon.com/images/I/51IUMTimF1L.jpg" alt="movie poster" />
              <div className={classes['movie-list-content-item-title']}>Justice League</div>
            </div>
            <div className={'col-3 ' + classes['movie-list-content-item']}>
              <img className={classes['movie-list-content-item-img']} src="https://images-na.ssl-images-amazon.com/images/I/419LgovIeHL.jpg" alt="movie poster" />
              <div className={classes['movie-list-content-item-title']}>Man of steel</div>
            </div>
            <div className={'col-3 ' + classes['movie-list-content-item']}>
              <img className={classes['movie-list-content-item-img']} src="https://cdn.shopify.com/s/files/1/0030/3802/products/2016-08-15_16-25-43.png?v=1475082718" alt="movie poster" />
              <div className={classes['movie-list-content-item-title']}>Batman V Superman</div>
            </div>
            <div className={'col-3 ' + classes['movie-list-content-item']}>
              <img className={classes['movie-list-content-item-img']} src="https://images-na.ssl-images-amazon.com/images/I/71JGOXv98RL._SY679_.jpg" alt="movie poster" />
              <div className={classes['movie-list-content-item-title']}>Aquaman</div>
            </div>
            <div className={'col-3 ' + classes['movie-list-content-item']}>
              <img className={classes['movie-list-content-item-img']} src="https://images-na.ssl-images-amazon.com/images/I/71bT8Kyo5yL._SY606_.jpg" alt="movie poster" />
              <div className={classes['movie-list-content-item-title']}>Shazam!</div>
            </div>
            <div className={'col-3 ' + classes['movie-list-content-item']}>
              <img className={classes['movie-list-content-item-img']} src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg" alt="movie poster" />
              <div className={classes['movie-list-content-item-title']}>Joker</div>
            </div>
            <div className={'col-3 ' + classes['movie-list-content-item']}>
              <img className={classes['movie-list-content-item-img']} src="https://m.media-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY1000_SX675_AL_.jpg" alt="movie poster" />
              <div className={classes['movie-list-content-item-title']}>Wonder Woman</div>
            </div>
            <div className={'col-3 ' + classes['movie-list-content-item']}>
              <img className={classes['movie-list-content-item-img']} src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_228w/public/product-images/csm-movie/avengers-endgame-movie-poster-image0.jpg" alt="movie poster" />
              <div className={classes['movie-list-content-item-title']}>Avengers: Endgame</div>
            </div>
          </div>
        </Container>
      </div> */}

      <Section title="Now on">
        <div className={'row ' + classes['movie-list-content-container']}>
          <div className={'col-3 ' + classes['movie-list-content-item']}>
            <img className={classes['movie-list-content-item-img']} src="https://images-na.ssl-images-amazon.com/images/I/51IUMTimF1L.jpg" alt="movie poster" />
            <div className={classes['movie-list-content-item-title']}>Justice League</div>
          </div>
          <div className={'col-3 ' + classes['movie-list-content-item']}>
            <img className={classes['movie-list-content-item-img']} src="https://images-na.ssl-images-amazon.com/images/I/419LgovIeHL.jpg" alt="movie poster" />
            <div className={classes['movie-list-content-item-title']}>Man of steel</div>
          </div>
          <div className={'col-3 ' + classes['movie-list-content-item']}>
            <img className={classes['movie-list-content-item-img']} src="https://cdn.shopify.com/s/files/1/0030/3802/products/2016-08-15_16-25-43.png?v=1475082718" alt="movie poster" />
            <div className={classes['movie-list-content-item-title']}>Batman V Superman</div>
          </div>
          <div className={'col-3 ' + classes['movie-list-content-item']}>
            <img className={classes['movie-list-content-item-img']} src="https://images-na.ssl-images-amazon.com/images/I/71JGOXv98RL._SY679_.jpg" alt="movie poster" />
            <div className={classes['movie-list-content-item-title']}>Aquaman</div>
          </div>
          <div className={'col-3 ' + classes['movie-list-content-item']}>
            <img className={classes['movie-list-content-item-img']} src="https://images-na.ssl-images-amazon.com/images/I/71bT8Kyo5yL._SY606_.jpg" alt="movie poster" />
            <div className={classes['movie-list-content-item-title']}>Shazam!</div>
          </div>
          <div className={'col-3 ' + classes['movie-list-content-item']}>
            <img className={classes['movie-list-content-item-img']} src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg" alt="movie poster" />
            <div className={classes['movie-list-content-item-title']}>Joker</div>
          </div>
          <div className={'col-3 ' + classes['movie-list-content-item']}>
            <img className={classes['movie-list-content-item-img']} src="https://m.media-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY1000_SX675_AL_.jpg" alt="movie poster" />
            <div className={classes['movie-list-content-item-title']}>Wonder Woman</div>
          </div>
          <div className={'col-3 ' + classes['movie-list-content-item']}>
            <img className={classes['movie-list-content-item-img']} src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_228w/public/product-images/csm-movie/avengers-endgame-movie-poster-image0.jpg" alt="movie poster" />
            <div className={classes['movie-list-content-item-title']}>Avengers: Endgame</div>
          </div>
        </div>
      </Section>

      {/* <Section title="Trailer"></Section> */}
    </div>
  )
}

export default Home;