import React from 'react';

import Home from './layout/pages/Home/Home';
import MovieTicket from './layout/pages/MovieTicket/MovieTicket';
import User from './layout/pages/User';

export const routes = [
  {
    path: '/user',
    component: <User />
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