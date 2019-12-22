import { createStore, action } from 'easy-peasy';
import { mockMovies, mockUpcomingMovies, mockNowOnMovies, 
  mockScreenTypes, mockRates, mockShowtimes } from './mock-data';

export const store = createStore({
  todos: {
    items: ['Create store', 'Wrap application', 'Use store'],
    add: action((state, payload) => {
      state.items.push(payload)
    })
  },
  movies: {
    items: mockMovies,
    getMovies: action(()=>{})
  },
  nowOnMovies: {
    items: mockNowOnMovies,
    // items: [],
    getNowOnMovies: action(()=>{})
  },
  upcomingMovies: {
    items: mockUpcomingMovies,
    // items: [],
    getUpcomingMovies: action(()=>{})
  },
  // rates: {
  //   items: mockRates,
  //   getRates: action(()=>{})
  // },
  screenTypes: {
    items: mockScreenTypes,
    // items: [],
    getScreenTypes: action(()=>{})
  },
  showtimes: {
    items: mockShowtimes,
    // items: [],
    getShowtimes: action(()=>{})
  }
});