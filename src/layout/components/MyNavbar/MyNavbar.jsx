import React from 'react';
import { Container } from 'react-bootstrap';

import classes from './MyNavbar.module.scss';

function MyNavbar() {
  console.log(classes['search-icon'])
  return (
    <div className={classes['navbar']}>
      <Container className={classes['navbar-inner-container']}>
        <div className={classes['navbar-brand']}>
          <img src="https://www.freeiconspng.com/uploads/white-strategy-icon-33.png" alt="Cinex" className={classes['navbar-brand-img']} />
          <span>Cinex</span>
        </div>
        <div className={classes['navbar-right']}>
          <i className={classes['search-icon'] + ' fas fa-search'}></i>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile" className={classes['profile']} />
        </div>
      </Container>
    </div>
  );
}

export default MyNavbar;