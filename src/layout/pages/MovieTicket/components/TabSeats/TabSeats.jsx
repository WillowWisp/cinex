import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import FsLightbox from 'fslightbox-react';

import { helper } from '../../../../../utils/helper';

import classes from './TabSeats.module.scss';
import { useEffect } from 'react';

const ROOM_INFO = {
  totalRows: 10,
  seatsPerRow: 18,
}

const SEAT_PRICE = 5;

function TabSeats(props) {
  const [seatsSelected, setSeatSelected] = useState([]);
  const [lightbox, setLightbox] = useState(false);

  const {showtime} = props;

  useEffect(() => {
    console.log(showtime);
  }, [showtime])

  const onClickSeat = (seatKey) => {
    const tmpSeatsSelected = [...seatsSelected];
    const indexFound = seatsSelected.indexOf(seatKey);
    if (indexFound !== -1) {
      // Deselect
      tmpSeatsSelected.splice(indexFound, 1);
    } else {
      // Select
      tmpSeatsSelected.push(seatKey);
    }
    setSeatSelected(tmpSeatsSelected);
  }

  const renderSeats = () => {
    let divsRow = [];

    for (let i = 0; i < ROOM_INFO.totalRows; i++) {
      let divsSeat = [];
      const letter = (i + 10).toString(36).toUpperCase(); // Convert number to letter
      for (let j = 0; j < ROOM_INFO.seatsPerRow; j++) {
        const seatKey = `${letter}${j}`
        const className = seatsSelected.includes(seatKey) ? classes['seat-selected'] : classes['seat-available']
        divsSeat.push(
          <i
            key={seatKey}
            className={`fas fa-square ${className}`}
            onClick={() => onClickSeat(seatKey)}
          ></i>
        );
      }
      divsRow.push(
        <div key={`row${letter}`} className={classes['room-row']}>
          <div className={classes['room-row-before']}>{letter}</div>
          <div className={classes['room-row-seats']}>
            {divsSeat}
          </div>
          <div className={classes['room-row-after']}>{letter}</div>
        </div>
      );
    }

    return divsRow;
  }

  return (
    <Container>
      <div className="row" style={{width: '100%', color: 'white'}}>
        <div className="col-9">
          <div className={classes['movie-overview']}>
            <div className={classes['movie-overview-header']}>
              <div className={classes['movie-overview-header-title']}>
                {showtime.movie.title}
              </div>
              <div className={classes['movie-overview-header-subtitle']}>
                <span>
                  <i className="fab fa-imdb"></i> 9.9
                </span>
                <span>
                  <i className="far fa-clock"></i> {showtime.movie.runtime} min
                </span>
              </div>
            </div>
            <div className={classes['movie-overview-description']}>
              {showtime.movie.storyline}
            </div>
          </div>

          <div className="row" style={{marginBottom: 40}}>
            <div className="col-6 row">
              <div className="col">
                <div className={classes['showtime-key']}>
                  Theater no
                </div>
                <div className={classes['showtime-value']}>
                  {showtime.room.name}
                </div>
              </div>
              <div className="col">
                <div className={classes['showtime-key']}>
                  Date
                </div>
                <div className={classes['showtime-value']}>
                  {helper.getFormattedDate(new Date(showtime.startAt))}
                </div>
              </div>
              <div className="col">
                <div className={classes['showtime-key']}>
                  Show time
                </div>
                <div className={classes['showtime-value']}>
                  {helper.getFormattedTime(new Date(showtime.startAt))}
                </div>
              </div>
            </div>
            <div className={`col-6 row ${classes['legends']}`}>
              <div className={`col ${classes['legend']}`}>
                <i className={`fas fa-square ${classes['seat-available']}`}></i>
                <span>Available</span>
              </div>
              <div className={`col ${classes['legend']}`}>
                <i className={`far fa-square ${classes['seat-booked']}`}></i>
                <span>Booked</span>
              </div>
              <div className={`col ${classes['legend']}`}>
                <i className={`fas fa-square ${classes['seat-selected']}`}></i>
                <span>Selected</span>
              </div>
            </div>
          </div>

          {/* TODO: Component <Seats /> */}
          <div className={classes['screen']}>Screen</div>

          <div className={classes['room']}>

            {renderSeats()}
          </div>
          {/* End Component <Seats /> */}
        </div>
        <div className="col-3">
          <div className={classes['movie-poster-container']}>
            <img src={showtime.movie.poster} alt="movie poster" className={classes['movie-poster']} />
            <div className={classes['watch-trailer-container']}>
              <div className={classes['watch-trailer-button']} onClick={() => {setLightbox(!lightbox)}}>
                <i className="fas fa-play"></i>
              </div>
              <div className={classes['watch-trailer-text']} onClick={() => {setLightbox(!lightbox)}}>
                Watch Trailer
              </div>
            </div>
          </div>

          <div className={classes['seats-review']}>
            <div className={classes['seats-review-title']}>
              Your Seats
            </div>
            <div className={classes['seats-review-section']}>
              <div className={classes['seats-review-section-title']}>
                {seatsSelected.length > 0 ? seatsSelected.join(', ') : 'None'}
              </div>
              <div className={classes['seats-review-section-quantity']}>
                {seatsSelected.length}
              </div>
              <div className={classes['seats-review-section-price']}>${showtime.price}</div>
            </div>
            <div className={classes['seats-review-total']}>
              <div className={classes['seats-review-total-title']}>
                Total
              </div>
              <div className={classes['seats-review-total-price']}>
                ${seatsSelected.length * showtime.price}
              </div>
            </div>
            {/* TODO: Make this btn a component */}
            <div className={classes['add-to-cart-btn']}>
              Add To Cart
            </div>
          </div>
        </div>
      </div>

      <FsLightbox
        toggler={ lightbox }
        sources={ [
          showtime.movie.trailer,
        ] }
      />
    </Container>
  )
}

export default TabSeats;