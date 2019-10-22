import React from 'react';

import HelloWorld from './layout/pages/Home/Home';
import User from './layout/pages/User';

export const routes = [
  {
    path: '/user',
    component: <User />
  },
  {
    path: '/',
    component: <HelloWorld />
  },
];