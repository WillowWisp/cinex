import React, { useState, useEffect } from 'react';

import { useStoreState } from 'easy-peasy';
import { helper } from '../../../../../utils/helper';
import * as ticketAPI from '../../../../../api/ticketAPI';

import { Container, Spinner } from 'react-bootstrap';
import FsLightbox from 'fslightbox-react';

import classes from './TabSeats.module.scss';

// const ROOM_INFO = {
//   totalRows: 10,
//   seatsPerRow: 18,
// }

// const SEAT_PRICE = 5;

function TabSeats(props) {
  const {showtime, seatsBooked} = props;

  const [seatsSelected, setSeatSelected] = useState([]);
  const [seatsBookedState, setSeatsBookedState] = useState([]);
  const [lightbox, setLightbox] = useState(false);
  const [isLoadingBuyTicket, setIsLoadingBuyTicket] = useState(false);


  const authState = useStoreState(state => state.auth.authState);

  useEffect(() => {
    setSeatsBookedState(seatsBooked)
  }, [seatsBooked])

  const onClickSeat = (seatKey) => {
    if (seatsBookedState.includes(seatKey)) {
      return;
    }

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

  const onBuyTickets = () => {
    if (!authState.isLoggedIn) {
      // TODO: Display modal
      console.log('Need to Login');
      window.location.href = '/login';
      return;
    }

    if (seatsSelected.length <= 0) {
      // TODO: Display modal
      return;
    }

    const data = {
      showtimeId: showtime.id,
      tickets: seatsSelected.map(seatKey => {
        return { discountName: '', name: seatKey };
      })
    };
    setIsLoadingBuyTicket(true);
    ticketAPI.buyTicket(data)
      .then(response => {
        console.log(response);
        const newSeatsBookedState = [...seatsBookedState, ...seatsSelected];
        setSeatsBookedState(newSeatsBookedState);
        setSeatSelected([]);
        setIsLoadingBuyTicket(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoadingBuyTicket(false);
      })
  }

  const renderSeats = () => {
    let divsRow = [];

    for (let i = 0; i < showtime.room.totalRows; i++) {
      let divsSeat = [];
      const letter = (i + 10).toString(36).toUpperCase(); // Convert number to letter
      for (let j = 0; j < showtime.room.totalSeatsPerRow; j++) {
        const seatKey = `${letter}${j}`

        let className = '';
        if (seatsBookedState.includes(seatKey)) {
          className = `far fa-square ${classes['seat-booked']}`;
        } else {
          className = seatsSelected.includes(seatKey) ? `fas fa-square ${classes['seat-selected']}` : `fas fa-square ${classes['seat-available']}`;
        }

        divsSeat.push(
          <i
            key={seatKey}
            className={className}
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
            <div className={classes['add-to-cart-btn']} onClick={() => onBuyTickets()}>
              {
                isLoadingBuyTicket ?
                <Spinner animation="border" />
                :
                'Buy Ticket'
              }
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