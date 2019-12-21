import React from 'react';

import Home from './layout/pages/Home/Home';
import MovieTicket from './layout/pages/MovieTicket/MovieTicket';
import User from './layout/pages/User';
import MovieDetail from './layout/pages/Movie/Movie';
import Schedule from './layout/pages/Schedule/Schedule';

export const routes = [
  {
    path: '/movie/id1234',
    component: <MovieDetail />
  },
  {
    path: '/user',
    component: <User />
  },
  {
    path: '/schedule',
    component: <Schedule />
  },
  {
    path: '/movie-ticket',
    component: <MovieTicket />
  },
  {
    path: '/',
    component: <Home />
  },
];