import React from 'react';

import './App.css';

import { StoreProvider } from 'easy-peasy';
import { store } from './store';

import {
  BrowserRouter,
} from 'react-router-dom';

import Layout from './layout/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
