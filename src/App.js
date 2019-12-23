import React from 'react';

import axios from 'axios';

// import './App.css';
import './styles/global.scss';

import { StoreProvider } from 'easy-peasy';
import { store } from './store';

import {
  BrowserRouter,
} from 'react-router-dom';

import Layout from './layout/Layout';
import ScrollIntoView from './utils/ScrollIntoView';

import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'https://cinex.herokuapp.com';

function App() {
  

  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <ScrollIntoView>
          <Layout></Layout>
        </ScrollIntoView>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
