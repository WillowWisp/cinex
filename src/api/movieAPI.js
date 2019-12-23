import axios from 'axios';

export const getAllMovies = () => {
  return axios.get('/movies');
}

export const getAllNowOnMovies = () => {
  return axios.get('/movies/now-on');
}

export const getAllUpcomingMovies = () => {
  return axios.get('/movies/coming?in=9999');
}

export const getMovieDetailById = (id) => {
  return axios.get(`movies/${id}`);
}