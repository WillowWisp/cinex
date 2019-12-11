import React from 'react';

import HelloWorld from './layout/pages/Home/Home';
import User from './layout/pages/User';
import MovieDetail from './layout/pages/Movie/Movie';

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
    path: '/',
    component: <HelloWorld />
  },
];